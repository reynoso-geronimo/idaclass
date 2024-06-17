import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const enviroment = new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
const client = new paypal.core.PayPalHttpClient(enviroment)

export async function POST(req) {
    const body = await req.json()
    
    const request = new paypal.orders.OrdersCreateRequest()

    request.requestBody({
        intent: "CAPTURE",

        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: body.ammount
                },
                description: body.description,

            }
        ]
    })
    const response = await client.execute(request)

    return NextResponse.json({
        id: response.result.id
    })
}