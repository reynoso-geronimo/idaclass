// Prueba de extremo a extremo del cliente de Nave contra el entorno configurado en .env.
// Verifica: (1) autenticacion M2M y (2) creacion de una intencion de pago.
// Uso: node scripts/test-nave.mjs
import { readFileSync } from "fs";

function loadEnv(path) {
  const env = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in env)) env[key] = value;
  }
  return env;
}

const env = loadEnv(".env");
for (const [k, v] of Object.entries(env)) {
  if (k.startsWith("NAVE_")) process.env[k] = v;
}

// Importamos el cliente real DESPUES de setear las variables de entorno.
const { getNaveAccessToken, createNavePaymentRequest, naveConfig } = await import("../lib/nave.js");

console.log("Entorno Nave:", naveConfig.env);
console.log("Auth endpoint:", naveConfig.auth);
console.log("API endpoint :", naveConfig.api);

console.log("\n[1/2] Solicitando access_token...");
const token = await getNaveAccessToken();
console.log("    OK - token recibido (", token.length, "chars )");

console.log("\n[2/2] Creando intencion de pago de prueba...");
const paymentRequest = await createNavePaymentRequest({
  externalPaymentId: "test-" + Date.now().toString(36),
  amount: 1500,
  productName: "Curso Test - ONLINE - CURSO DE FORMACION",
  productDescription: "Pago total",
  buyer: {
    user_id: "1",
    name: "Usuario Prueba",
    user_email: "prueba@idaclass.com",
    doc_type: "DNI",
    doc_number: "30111222",
  },
  callbackUrl: "http://localhost:3000/gracias-compra",
});

console.log("    OK - intencion creada:");
console.log("    id            :", paymentRequest.id);
console.log("    external_id   :", paymentRequest.external_payment_id);
console.log("    checkout_url  :", paymentRequest.checkout_url);
console.log("    qr_data       :", (paymentRequest.qr_data || "").slice(0, 40) + "...");
console.log("\nAbri el checkout_url en el navegador para pagar con una tarjeta de prueba.");
