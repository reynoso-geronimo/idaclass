"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { createContacto } from "@/app/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "Ingresa tu nombre",
  }),
  apellido: z.string().min(2, {
    message: "Ingresa tu apellido",
  }),
  telefono: z.coerce.string().min(2, {
    message: "Ingresa tu teléfono",
  }),
  curso: z.string(),
  email: z.string().email({
    message: "Ingresa tu Email",
  }),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
});

const CampaignForm = ({ nombre }) => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      curso: nombre,
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const contacto = await createContacto(values);
    if (contacto === "success") {
      setOpen(true);
      form.reset();
    }
  }
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
    }
  }, [session]);

  return (
    <div className=" container lg:mt-28 mb-12 p-4 border-2 border-idaclass3 bg-gray-100 rounded-3xl shadow-lg z-10 max-w-sm">
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Información enviada</DialogTitle>
            <DialogDescription id="submit">Nos pondremos en contacto con usted lo antes posible.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
          <Button onClick={() => setOpen(false)}>Cerrar</Button>
        </DialogFooter>
        </DialogContent>
        
      </Dialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col justify-evenly gap-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="ingresa tu nombre" {...field} />
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
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="ingresa tu apellido" {...field} />
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
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="ingresa tu telefono" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="ingresa tu email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map(field => (
            <FormField
              key={field}
              control={form.control}
              name={field}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="hidden" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="w-full rounded-full">
            Solicitar más información
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CampaignForm;
