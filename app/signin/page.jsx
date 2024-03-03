"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/assets/google-icon.svg";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Separator } from "@/components/ui/separator";
import RegisterForm from "./_components/registerForm";

export default function SignIn() {
  return (
    <main className="flex-1 w-full bg-neutral-950 relative flex flex-col items-center justify-center py-12">
      <div className="container py-4 flex flex-col border-2 border-idaclass3 space-y-4 bg-slate-900 rounded-lg shadow-lg z-10 max-w-md">
        <RegisterForm />
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
