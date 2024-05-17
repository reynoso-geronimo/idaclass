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

const formSchema = z.object({
  telefono: z.coerce.number().min(2, {
    message: "Ingresa tu telefono",
    required_error: "Ingresa tu telefono",
  }),
  dob: z.string().date({}),
  dni: z.coerce.number().min(2, {
    message: "Ingresa tu DNI/RUT/CI",
    required_error: "Ingresa tu DNI/RUT/CI",
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
      <div className="container flex flex-col justify-center items-center gap-2">
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
                      <Input {...field} type="tel" />
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

              <Button type="submit" className="w-full">
                Inscribirme
              </Button>
            </form>
          </Form>
        </div>
      </div>
    );
  }
};

export default CheckoutPage;
