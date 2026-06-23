// Cliente para la API de Checkout de Nave (Ranty.io / Naranja X / Galicia)
// Docs: https://navenegocios.ar/home/developers
//
// Ciclo de vida de un pago:
//   1. Obtener un access_token (M2M) con getNaveAccessToken()
//   2. Generar una intención de pago con createNavePaymentRequest()
//   3. Redirigir al usuario al checkout_url devuelto
//   4. Recibir la notificación en /navepayment y consultar el pago con getNavePayment()

const NAVE_ENV = process.env.NAVE_ENV === "production" ? "production" : "sandbox";

const ENDPOINTS = {
  sandbox: {
    auth: "https://homoservices.apinaranja.com/security-ms/api/security/auth0/b2b/m2msPrivate",
    api: "https://api-sandbox.ranty.io",
  },
  production: {
    auth: "https://services.apinaranja.com/security-ms/api/security/auth0/b2b/m2msPrivate",
    api: "https://api.ranty.io",
  },
};

const config = ENDPOINTS[NAVE_ENV];
const AUDIENCE = process.env.NAVE_AUDIENCE || "https://naranja.com/ranty/merchants/api";

// El token dura ~24h; lo cacheamos en memoria del proceso para no re-autenticar en cada request.
let cachedToken = null; // { accessToken, expiresAt }

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Nave recomienda reintentar SOLO fallos transitorios (red / 5xx / 429).
// Los 4xx son deterministas (auth invalida, body mal formado, etc.): no tiene sentido reintentarlos.
async function fetchWithRetry(url, options, { retries = 2, retryDelayMs = 500 } = {}) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    let res;
    try {
      res = await fetch(url, options);
    } catch (networkError) {
      lastError = networkError; // error de red -> reintentable
      if (attempt < retries) {
        await sleep(retryDelayMs * (attempt + 1));
        continue;
      }
      throw lastError;
    }

    if (res.ok) return res;

    const text = await res.text().catch(() => "");
    const error = new Error(`Nave API ${res.status} ${res.statusText} (${url}): ${text}`);
    error.status = res.status;

    const retryable = res.status >= 500 || res.status === 429;
    if (!retryable || attempt >= retries) throw error;
    lastError = error;
    await sleep(retryDelayMs * (attempt + 1));
  }
  throw lastError;
}

function withAuth(options, token) {
  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  };
}

// Ejecuta una request autenticada contra la API de Nave. Si responde 401 (token revocado,
// credenciales rotadas o desfase de reloj), invalida el token cacheado y reintenta UNA vez.
async function naveAuthedFetch(path, options = {}) {
  const token = await getNaveAccessToken();
  try {
    return await fetchWithRetry(`${config.api}${path}`, withAuth(options, token));
  } catch (error) {
    if (error.status === 401) {
      cachedToken = null;
      const freshToken = await getNaveAccessToken();
      return await fetchWithRetry(`${config.api}${path}`, withAuth(options, freshToken));
    }
    throw error;
  }
}

// Nave exige el monto como string con dos decimales.
export function formatNaveAmount(amount) {
  return Number(amount).toFixed(2);
}

export async function getNaveAccessToken() {
  // Reutilizar el token cacheado si aún es válido (con 60s de margen).
  if (cachedToken && cachedToken.expiresAt - 60_000 > Date.now()) {
    return cachedToken.accessToken;
  }

  const clientId = process.env.NAVE_CLIENT_ID;
  const clientSecret = process.env.NAVE_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("Faltan NAVE_CLIENT_ID / NAVE_CLIENT_SECRET en las variables de entorno");
  }

  const res = await fetchWithRetry(config.auth, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      audience: AUDIENCE,
    }),
  });

  const data = await res.json();
  const expiresInMs = (parseInt(data.expires_in, 10) || 86400) * 1000;
  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + expiresInMs,
  };
  return cachedToken.accessToken;
}

// Crea una intención de pago de ecommerce y devuelve { id, external_payment_id, checkout_url, qr_data }
export async function createNavePaymentRequest({
  externalPaymentId,
  amount,
  productName,
  productDescription,
  buyer,
  callbackUrl,
  durationTime,
}) {
  const value = formatNaveAmount(amount);

  const body = {
    external_payment_id: externalPaymentId,
    seller: { pos_id: process.env.NAVE_POS_ID },
    transactions: [
      {
        amount: { currency: "ARS", value },
        products: [
          {
            name: productName,
            description: productDescription,
            quantity: 1,
            unit_price: { currency: "ARS", value },
          },
        ],
      },
    ],
  };

  if (buyer) body.buyer = buyer;
  if (callbackUrl) body.additional_info = { callback_url: callbackUrl };
  if (durationTime) body.duration_time = String(durationTime);

  const res = await naveAuthedFetch("/api/payment_request/ecommerce", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return res.json();
}

// Consulta el estado y los datos de un pago a partir de su payment_id (el que llega en la notificación).
export async function getNavePayment(paymentId) {
  const res = await naveAuthedFetch(`/ranty-payments/payments/${encodeURIComponent(paymentId)}`, {
    method: "GET",
  });
  return res.json();
}

// Consulta una intención de pago por su payment_request_id (alternativa si falla la notificación).
export async function getNavePaymentRequest(paymentRequestId) {
  const res = await naveAuthedFetch(`/api/payment_requests/${encodeURIComponent(paymentRequestId)}`, {
    method: "GET",
  });
  return res.json();
}

export const naveConfig = { env: NAVE_ENV, ...config, audience: AUDIENCE };
