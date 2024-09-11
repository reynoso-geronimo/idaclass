"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSearchParams } from "next/navigation";
import { getCursoFormacionFromDB, getCursoFromDB, inscripcion } from "@/app/actions";
import getCountryCodeFromIP, { calcularPreciosCurso } from "@/lib/utils";
import { signIn, useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import Loading from "../loading";
import CursoCheckoutCard from "./_components/CursoCheckoutCard";
import Stepper from "./_components/Stepper";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";

const getPaymentOptionStyles = (value, option) => {
  const isSelected = value === option;
  const baseStyles =
    "border text-center leading-1  rounded-lg transition-all w-full flex items-center justify-center cursor-pointer";
  const selectedStyles = "bg-idaclass3 border-idaclass2 text-white p-2 font-bold";
  const unselectedStyles = "bg-white text-muted-foreground border-muted-foreground p-2 font-semibold";

  return `${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`;
};

const formSchema = z.object({
  direccion: z.string().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu dirección",
    invalid_type_error: "Ingresa una dirección válida",
  }),
  telefono: z.coerce.number().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu teléfono",
    invalid_type_error: "Ingresa un número de teléfono válido",
  }),
  dob: z.string().date("Ingresa tu fecha de nacimiento"),
  dni: z.coerce.number().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu DNI/RUT/CI",
    invalid_type_error: "Ingresa un número de identificación válido",
  }),
  pais: z.string().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu país",
    invalid_type_error: "Ingresa un nombre de país válido",
  }),
  estadoprovincia: z.string().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu estado/provincia",
    invalid_type_error: "Ingresa un nombre de estado/provincia válido",
  }),
  localidad: z.string().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu localidad",
    invalid_type_error: "Ingresa un nombre de localidad válido",
  }),
  pagoModalidad: z.enum(["Pago total", "Pago en cuotas"], {
    required_error: "Selecciona una forma de pago",
    invalid_type_error: "Selecciona una forma de pago válida",
  }),
});

const CheckoutPage = () => {
  const { data: session, status } = useSession();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pais: "",
      estadoprovincia: "",
      localidad: "",
      direccion: "",
      telefono: "",
      dob: "",
      dni: "",
      pagoModalidad: "Pago total",
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
  const [curso, setCurso] = useState();
  const [montoUSD, setMontoUSD] = useState();
  const [precioTotalUSD, setPrecioTotalUSD] = useState(0);
  const [precioCuotasUSD, setPrecioCuotasUSD] = useState(0);
  const [monto, setMonto] = useState();
  const [precioTotal, setPrecioTotal] = useState(0);
  const [precioCuotas, setPrecioCuotas] = useState(0);
  const [loading, setLoading] = useState(true);

  const [countryCode, setCountryCode] = useState(null);
  const [paypalKey, setPaypalKey] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    setPaypalKey(prevKey => prevKey + 1);
  }, [montoUSD, countryCode]);
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }

    form.setValue("direccion", session?.user?.direccion);
    form.setValue("telefono", session?.user?.telefono);
    form.setValue("pais", session?.user?.pais);
    form.setValue("estadoprovincia", session?.user?.estado_provincia);
    form.setValue("localidad", session?.user?.localidad);
    form.setValue("dob", session?.user?.dob);
    form.setValue("dni", session?.user?.dni);

    async function fetchCountryCode() {
      const code = await getCountryCodeFromIP();

      setCountryCode(code.country);
      console.log(code.country);
    }
    fetchCountryCode();

    const fetchCurso = async cb => {
      const getCurso = await cb(nombre);
      setCurso(getCurso);
      const precioARG = calcularPreciosCurso(
        modalidad === "ONLINE" ? getCurso.precio : getCurso.precio_presencial,
        getCurso.descuento,
        getCurso.cuotas
      );
      const precioUSD = calcularPreciosCurso(getCurso.precio_usd, getCurso.descuento, getCurso.cuotas, true);
      console.log(getCurso);
      setPrecioTotal(precioARG.precioBeca);
      setPrecioCuotas(precioARG.cuotaPrecio);
      setMonto(parseInt(precioARG.precioBeca));

      setPrecioTotalUSD(precioUSD.precioBeca);
      setPrecioCuotasUSD(precioUSD.cuotaPrecio);
      setMontoUSD(parseInt(precioUSD.precioBeca));

      setLoading(false);
    };
    tipo === "CURSO DE FORMACION" ? fetchCurso(getCursoFormacionFromDB) : fetchCurso(getCursoFromDB);
    console.log(countryCode);
  }, [status]);

  useEffect(
    () => {
      setMonto(form.getValues().pagoModalidad === "Pago total" ? parseInt(precioTotal) : parseInt(precioCuotas));
      setMontoUSD(
        form.getValues().pagoModalidad === "Pago total" ? parseInt(precioTotalUSD) : parseInt(precioCuotasUSD)
      );

      console.log(`${form.getValues().pagoModalidad} ${monto}`);
    },
    [form.getValues().pagoModalidad],
    countryCode
  );

  const onSubmit = formData => {
    inscripcion(formData, user, tipo, nombre, modalidad, monto);
  };

  if (status === "loading" || status === "unauthenticated" || loading) {
    return <Loading />;
  } else {
    return (
      <main className="flex flex-col justify-center items-center mb-8">
        <Image className="w-full" alt="header" src={"/checkout/headerMobile.png"} width={300} height={700} />
        <CursoCheckoutCard tipo={tipo} nombre={nombre} modalidad={modalidad} />
        <Separator decorative={false} className="my-4 bg-transparent" />
        <Stepper currentStep={step + 1} />
        <Separator decorative={false} className="my-4 bg-transparent" />
        <div className="w-full px-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-muted px-4 py-4 rounded-2xl w-full grow">
              <div className={clsx(step !== 0 && "hidden")}>
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
                      <FormLabel>Número de DNI/RUT/CI (Nro de Identidad de tu país):</FormLabel>
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
                        <Input {...field} type="date" className="flex justify-between w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {
                <div className={clsx(step !== 1 && "hidden")}>
                  <FormField
                    control={form.control}
                    name="pagoModalidad"
                    render={({ field }) => (
                      <FormItem>
                        {tipo === "CURSO DE FORMACION" && (
                          <FormLabel className="font-bold">Elige una forma de pago</FormLabel>
                        )}
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col items-center "
                          >
                            <FormItem className="w-full">
                              <FormControl>
                                <RadioGroupItem value="Pago total" hidden />
                              </FormControl>
                              <FormLabel className={getPaymentOptionStyles(field.value, "Pago total")}>
                                1 pago de $ {precioTotal?.toLocaleString()}
                              </FormLabel>
                            </FormItem>
                            {tipo === "CURSO DE FORMACION" && (
                              <FormItem className="w-full">
                                <FormControl>
                                  <RadioGroupItem
                                    value="Pago en cuotas"
                                    hidden
                                    disabled={tipo !== "CURSO DE FORMACION" ? true : false}
                                  />
                                </FormControl>

                                <FormLabel className={getPaymentOptionStyles(field.value, "Pago en cuotas")}>
                                  {curso?.cuotas} cuotas de $ {precioCuotas?.toLocaleString()}
                                </FormLabel>
                              </FormItem>
                            )}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              }
              {
                <div className={clsx(step !== 2 && "hidden", "space-y-4")}>
                  {countryCode === "AR" && (
                    <Button
                      type="submit"
                      className="w-full rounded-lg flex justify-center gap-6 items-center font-bold"
                      disabled={monto == 0}
                    >
                      <Image src={`/assets/mp-icon.svg`} width={30} height={30} alt="mercadopago" />
                      Mercadopago
                    </Button>
                  )}
                  {countryCode !== "AR" && (
                    <PayPalScriptProvider
                      key={paypalKey}
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
                        disabled={montoUSD == 0 || !form.formState.isValid}
                        createOrder={async () => {
                          const res = await fetch("api/paypal", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              ammount: montoUSD,
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
                              descripcion: ` ${nombre} - ${modalidad} - ${tipo} - ${formData.get("pagoModalidad")}`,

                              monto: montoUSD,
                              user_id: user.userId,
                            }),
                          });
                        }}
                        /*onCancel={() => {}} */
                      />
                    </PayPalScriptProvider>
                  )}
                </div>
              }
            </form>
            <div className="px-4 mt-6">
              <Button
                className="w-full rounded-lg flex justify-center gap-6 items-center font-bold"
                onClick={() => {
                  setStep(prev => prev + 1);
                }}
              >
                Siguiente
              </Button>
            </div>
          </Form>
        </div>
      </main>
    );
  }
};

export default CheckoutPage;
