"use client";
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
const getPaymentOptionStyles = (value, option) => {
  const isSelected = value === option;
  const baseStyles =
    "border-2 font-black rounded-2xl transition-all w-full flex items-center justify-center cursor-pointer";
  const selectedStyles = "bg-idaclass3 border-idaclass4 text-white p-4";
  const unselectedStyles = "bg-gray-400 text-black border-idaclassGray2 p-3";

  return `${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`;
};
const formSchema = z.object({
  telefono: z.coerce.number().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu telefono",
    invalid_type_error: "Ingresa un telefono valido",
  }),
  dob: z
    .string()
    .datetime({ message: "Ingresa tu fecha de nacimiento" }),
  dni: z.coerce.number().min(2, {
    message: "Este campo es obligatorio",
    required_error: "Ingresa tu DNI/RUT/CI",
    invalid_type_error: "Ingrea un numero valido",
  }),
});

const CheckoutPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      telefono: "",
      dob: "",
      dni: "",
    },
  });

  const searchParams = useSearchParams();
  const modalidad = searchParams.get("modalidad");
  const nombre = searchParams.get("nombre");
  const tipo = searchParams.get("tipo");

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  const onSubmit = formData => {
    //inscripcion(formData);
    console.log(formData);
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="direccion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Dirección completa (calle y nro) y localidad:
                    </FormLabel>
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
                      <Input {...field} type="date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
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
              />
              <Button type="submit" className="w-full rounded-2xl">
                Inscribirme
              </Button>
            </form>
          </Form>
        </div>
      </main>
    );
  }
};

export default CheckoutPage;
