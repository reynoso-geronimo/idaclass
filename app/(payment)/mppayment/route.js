import User from "@/models/User";
import Venta from "@/models/Venta";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
});
export async function POST(request) {
    const body = await request.json()
    console.log(body);
    if (body.id === "123456") {
        return Response.json({ succes: true })
    }
    const payment = await new Payment(client).get({ id: body.data.id })

    const pago = {
        payment_id: payment.id,
        descripcion: payment.description,
        monto: payment.transaction_amount,
        userName: payment.metadata.user_name,
        email: payment.metadata.email,
        user_id: payment.metadata.user_id,
    }
    try {
        // Crear una nueva venta
        await Venta.create({ ...pago })


        // Asociar la venta con el usuario

        return Response.json({ succes: true })
    } catch (error) {
        console.log(error);
    }


}