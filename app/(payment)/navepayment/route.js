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
      const monto = transaction.total_amount?.value ?? transaction.amount?.value;
      const userId = parseInt(payment.buyer?.user_id, 10);

      // Idempotencia: Nave puede notificar el mismo pago más de una vez.
      const existente = await Venta.findOne({
        where: { payment_id_nave: payment.id },
      });

      if (!existente) {
        await Venta.create({
          payment_id_nave: payment.id,
          descripcion: product.name,
          monto: monto,
          user_id: Number.isNaN(userId) ? null : userId,
          pago_modalidad: product.description || null,
        });
      }
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error procesando la notificación de Nave:", error);
    // Devolvemos 500 para que Nave reintente según su tabla de frecuencias.
    return Response.json({ success: false }, { status: 500 });
  }
}
