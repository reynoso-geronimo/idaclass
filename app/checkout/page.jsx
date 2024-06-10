"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSearchParams } from "next/navigation";
import { inscripcion } from "@/app/actions";
import { signIn, useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { useEffect } from "react";
import Loading from "../loading";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
/* const getPaymentOptionStyles = (value, option) => {
  const isSelected = value === option;
  const baseStyles =
    "border-2 font-black rounded-2xl transition-all w-full flex items-center justify-center cursor-pointer";
  const selectedStyles = "bg-idaclass3 border-idaclass4 text-white p-4";
  const unselectedStyles = "bg-gray-400 text-black border-idaclassGray2 p-3";

  return `${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`;
}; */

const monto = 50000;
const formSchema = z.object({
  direccion: z.string().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu direccion",
    invalid_type_error: "Ingresa una direccion valida",
  }),
  telefono: z.coerce.number().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu telefono",
    invalid_type_error: "Ingresa un telefono valido",
  }),
  dob: z.string().date("Ingresa tu fecha de nacimiento"),
  dni: z.coerce.number().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu DNI/RUT/CI",
    invalid_type_error: "Ingrea un numero valido",
  }),
});

const CheckoutPage = () => {
  const { data: session, status } = useSession();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      direccion: "",
      telefono: "",
      dob: "",
      dni: "",
    },
  });
  const user = {
    userName: session?.user?.name,
    userId: session?.user?.id,
    email: session?.user?.email,
  };
  const searchParams = useSearchParams();
  const modalidad = searchParams.get("modalidad");
  const nombre = searchParams.get("nombre");
  const tipo = searchParams.get("tipo");

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  const onSubmit = formData => {
    inscripcion(formData, user, tipo, nombre, modalidad, monto);
  };

  if (status === "loading" || status === "unauthenticated") {
    return <Loading />;
  } else {
    return (
      <main className="container flex flex-col justify-center items-center gap-2 mb-8">
        <div className="container flex flex-col justify-center items-center gap-2">
          <TituloSeccion>RESUMEN DE TU COMPRA</TituloSeccion>
          <h2>{tipo}</h2>
          <h2>{nombre}</h2>
          <h2>{modalidad}</h2>
        </div>
        <TituloSeccion>DATOS DE CONTACTO</TituloSeccion>
        <div className="space-y-4">
          <h2>{session?.user?.name}</h2>
          <h2>{session?.user?.email}</h2>

          <Form
            {...form}
            className="container flex flex-col justify-center items-center gap-2"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 space-x-8">
              <div className="">
                <FormField
                  control={form.control}
                  name="pais"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pais</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="estadoprovincia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estado / Provincia</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="localidad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Localidad</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="direccion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección completa (calle y nro)</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefono</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dni"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Número de DNI/RUT/CI (Nro de Identidad de tu país):
                      </FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de nacimiento </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          className="flex justify-between w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/*   <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Elige un medio de pago</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex justify-evenly items-center h-16"
                      >
                        <FormItem className="w-full">
                          <FormControl>
                            <RadioGroupItem value="mercadopago" hidden />
                          </FormControl>
                          <FormLabel
                            className={getPaymentOptionStyles(
                              field.value,
                              "mercadopago"
                            )}
                          >
                            Mercadopago
                          </FormLabel>
                        </FormItem>
                        <FormItem className="w-full">
                          <FormControl>
                            <RadioGroupItem value="paypal" hidden />
                          </FormControl>
                          <FormLabel
                            className={getPaymentOptionStyles(
                              field.value,
                              "paypal"
                            )}
                          >
                            Paypal
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              </div>
              <div className="space-y-4  sticky top-0">
                <Button
                  type="submit"
                  className="w-full rounded-lg flex justify-center gap-6 items-center font-bold"
                  disabled={!form.formState.isValid}
                >
                  <Image
                    src={`/assets/mp-icon.svg`}
                    width={30}
                    height={30}
                    alt="mercadopago"
                  />
                  Mercadopago
                </Button>
                <PayPalScriptProvider
                  options={{
                    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                    currency: "USD",
                    intent: "capture",
                  }}

                  //deferLoading={true}
                >
                  <PayPalButtons
                    style={{
                      layout: "horizontal",
                      size: "responsive",
                      shape: "rect",
                      height: 40,
                    }}
                    disabled={!form.formState.isValid}
                    createOrder={async () => {
                      const res = await fetch("api/paypal", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          ammount: monto,
                          description: tipo + " " + nombre + " " + modalidad,
                        }),
                      });
                      const order = await res.json();

                      return order.id;
                    }}
                    onApprove={async (data, actions) => {
                      actions.order.capture();

                      await fetch("/paypalpayment/", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          paymentID: data.orderID,
                          descripcion: ` ${nombre} - ${modalidad} - ${tipo}`,
                          monto: monto,
                          user_id: user.userId,
                        }),
                      });
                    }}
                    /*onCancel={() => {}} */
                  />
                </PayPalScriptProvider>
              </div>
            </form>
          </Form>
        </div>
      </main>
    );
  }
};

export default CheckoutPage;
