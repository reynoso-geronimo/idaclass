"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/assets/google-icon.svg";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./_components/registerForm";
import LoginForm from "./_components/loginForm";

export default function SignIn() {
  return (
    <main className="min-h-[645px] bg-neutral-950 relative flex flex-col justify-start py-12">
      <div className="container py-4 flex flex-col border-2 border-idaclass3 space-y-4 bg-slate-900 rounded-lg shadow-lg z-10 w-[28rem] max-w-[90vw]">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Ingresar</TabsTrigger>
            <TabsTrigger value="registro">Crear cuenta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="registro">
            <RegisterForm />
          </TabsContent>
        </Tabs>
        <Separator />
        <Button
          onClick={() =>
            signIn("google", { callbackUrl: window.location.origin })
          }
          className="w-full bg-slate-600 rounded-lg"
        >
          <Image
            src={GoogleIcon}
            alt="google"
            style={{
              width: "auto",
              height: "100%",
              marginRight: "0.2rem",
            }}
          />
          Ingresar con Google
        </Button>
      </div>
      <BackgroundBeams />
    </main>
  );
}
