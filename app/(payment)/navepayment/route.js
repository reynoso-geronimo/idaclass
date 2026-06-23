import Venta from "@/models/Venta";
import { getNavePayment } from "@/lib/nave";

// Webhook de notificaciones de Nave.
// Nave envía un POST cada vez que un pago cambia de estado con el body:
//   { payment_id, payment_check_url, external_payment_id }
// Debemos responder 200 OK; si no, reintenta hasta 5 veces.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    // Ping / verificación sin body
    return Response.json({ success: true });
  }

  if (!body || !body.payment_id) {
    return Response.json({ success: true });
  }

  try {
    // Consultamos el pago para validar su estado antes de confirmar la venta.
    const payment = await getNavePayment(body.payment_id);

    if (payment?.status?.name === "APPROVED") {
      const transaction = payment.transactions?.[0] || {};
      const product = transaction.products?.[0] || {};
      const montoRaw = transaction.total_amount?.value ?? transaction.amount?.value;
      const monto = montoRaw != null ? Number(montoRaw) : null;
      const userId = parseInt(payment.buyer?.user_id, 10);

      // Un pago APPROVED sin importe o sin descripción es una respuesta anómala:
      // no grabamos una venta corrupta; devolvemos 500 para que Nave reintente.
      if (monto == null || Number.isNaN(monto) || !product.name) {
        console.error("Pago Nave APPROVED con datos insuficientes:", payment.id, { monto: montoRaw, product });
        return Response.json({ success: false }, { status: 500 });
      }

      if (Number.isNaN(userId)) {
        console.error("Pago Nave APPROVED sin buyer.user_id: la venta quedará sin usuario asociado:", payment.id);
      }

      try {
        await Venta.create({
          payment_id_nave: payment.id,
          descripcion: product.name,
          monto,
          user_id: Number.isNaN(userId) ? null : userId,
          pago_modalidad: product.description || null,
        });
      } catch (error) {
        // Idempotencia: Nave puede notificar el mismo pago varias veces (incluso en paralelo).
        // La constraint única de payment_id_nave evita el duplicado de forma atómica; si salta,
        // la venta ya estaba registrada y lo tratamos como éxito.
        if (error?.name === "SequelizeUniqueConstraintError") {
          return Response.json({ success: true });
        }
        throw error;
      }
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error procesando la notificación de Nave:", error);
    // Devolvemos 500 para que Nave reintente según su tabla de frecuencias.
    return Response.json({ success: false }, { status: 500 });
  }
}
