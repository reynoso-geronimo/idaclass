"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    email: z.string().email({ message: "Ingresa un Email valido" }),
    nombre: z.string(),
    apellido: z.string(),
    password: z.string(),
    confirm: z.string(),
  })
  .refine(data => data.password === data.confirm, {
    message: "Contraseña no coincide",
    path: ["confirm"], // path of error
  });
// 2. Define a submit handler.

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      confirm: "",
    },
  });
  const [error, setError] = useState(null);

  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.

      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        family_name: values.apellido,
        given_name: values.nombre,
        username: values.apellido + values.nombre,
        method: "register",
        redirect: false,
      });

      if (res.error) {
        setError(res.error);
      }
      if (res.status === 200) {
        router.push(router.back());
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <div className="flex max-sm:flex-col max-sm:space-y-4 sm:space-x-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Nombre</FormLabel>
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
                <FormLabel className="">Apellido</FormLabel>
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
              <FormLabel className="">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="*******" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="" type="password">
                Repite tu contraseña
              </FormLabel>
              <FormControl>
                <Input placeholder="*******" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
          <p className="text-destructive font-medium text-sm">
            {error && "Usuario ya registrado"}
          </p>
          <Button type="submit" className="w-full rounded-3xl mt-3">
            Registrarme
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
