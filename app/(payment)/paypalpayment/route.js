
import Venta from "@/models/Venta";


export async function POST(request) {
    const body = await request.json()



    const pago = {
        payment_id_paypal: body.paymentID,
        descripcion: body.descripcion,
        monto: body.monto,
        user_id: body.user_id,
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