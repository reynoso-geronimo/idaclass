"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/assets/google-icon.svg";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function SignIn() {
  return (
    <main className="flex-1 w-full bg-neutral-950 relative flex flex-col items-center justify-center">

      <div className="flex flex-col border-2 border-idaclass3 space-y-4 bg-slate-900 p-6 rounded-lg shadow-lg z-10">
        <Button
          onClick={() =>
            signIn("google", { callbackUrl: window.location.origin })
          }
          className="w-48 bg-slate-600 rounded-lg"
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
      <BackgroundBeams/>
    </main>
  );
}
