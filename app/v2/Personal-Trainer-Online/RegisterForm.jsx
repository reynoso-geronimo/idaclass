"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { textoEnDegrade } from "@/lib/constants";
import { createContacto } from "@/app/actions";

const formSchema = z.object({
  email: z.string().email({ message: "Ingresa un Email valido" }),
  nombre: z.string().min(1, { message: "Nombre es requerido" }),
  apellido: z.string().min(1, { message: "Apellido es requerido" }),
  telefono: z.string().min(8, { message: "Teléfono debe tener al menos 8 dígitos" }),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional()
});

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: ""
    },
  });
  const [error, setError] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

    utmFields.forEach(field => {
      const value = urlParams.get(field);
      if (value) {
        form.setValue(field, value);
      }
    });
    if (session?.user) {
      form.setValue("nombre", session.user.given_name);
      form.setValue("apellido", session.user.family_name);
      form.setValue("telefono", session.user.telefono);
      form.setValue("email", session.user.email);
      form.setValue("curso", "Personal Trainer Online");
    }
  }, [session]);

  async function onSubmit(values) {
   
    try {
      // Handle campaign registration here
      const campaignData = {
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        telefono: values.telefono,
        curso: "Personal Trainer Online",
        utm_source: values.utm_source || "",
        utm_medium: values.utm_medium || "",
        utm_campaign: values.utm_campaign || "",
        utm_term: values.utm_term || "",
        utm_content: values.utm_content || "",
      };

      await createContacto(campaignData);

      // Add campaign registration API call here if needed
      const res = await signIn("credentials", {
        email: values.email,
        password: values.telefono, // Using phone as password
        family_name: values.apellido,
        given_name: values.nombre,
        username: values.apellido + values.nombre,
        method: "register",
        redirect: true,
        callbackUrl: `/checkout?modalidad=ONLINE&nombre=Personal+Trainer&tipo=CURSO+DE+FORMACION`,
      });

      if (res.error) {
        setError(res.error);
      }
      if (res.status === 200) {
        // router.push(router.back());
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:mt-28 mb-12 lg:w-[440px] space-y-1 z-10 bg-white h-fit py-12 px-4 rounded-3xl"
      >
        <div className="flex max-sm:flex-col max-sm:space-y-4 sm:space-x-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={textoEnDegrade}>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={textoEnDegrade}>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Apellido" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={textoEnDegrade}>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel className={textoEnDegrade}>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="Teléfono" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
          <p className="text-sm font-medium text-destructive">{error && "Usuario ya registrado"}</p>
          <Button type="submit" className="w-full mt-3 rounded-3xl">
            Inscribirme Ahora
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
