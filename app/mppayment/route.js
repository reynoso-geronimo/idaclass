import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
});
export async function POST(request) {
    const body = await request.json()

    const payment = await new Payment(client).get({ id: body.data.id })

    console.log(payment);
    const pago = {
        paymentId: payment.id,
        compra:payment.description,
        monto: payment.transaction_amount,
        userName: payment.metadata.user_name,
        email: payment.metadata.email,
        userId: payment.metadata.user_id,
    }
    console.log("pago:", pago);
    return Response.json({ succes: true })
}