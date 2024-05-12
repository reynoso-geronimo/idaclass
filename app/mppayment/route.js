import {MercadoPagoConfig, Payment} from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
  });
export async function POST(request) {
    const body = await request.json()
    
    const payment = await new Payment(client).get({id:body.data.id})
    
    //console.log(payment);
    const pago = {
        paymentId:payment.id,
        monto:payment.transaction_amount,
        descripcion:payment.description,
       
    }
    //console.log(pago);
    return Response.json({succes:true})
}