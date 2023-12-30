"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/google-icon.svg";
import InstagramIcon from "../../public/instagram-icon.svg";
import Image from "next/image";
export default function SignIn() {
  return (
    <main className="flex flex-col items-center justify-center space-y-4">
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
      <Button
        onClick={() =>
          signIn("instagram", { callbackUrl: window.location.origin })
        }
        className="w-48 bg-slate-600 rounded-lg"
        disabled
      >
        <Image
          src={InstagramIcon}
          alt="instagram"
          style={{
            width: "auto",
            height: "100%",
            marginRight: "0.2rem",
          }}
        />
        Ingresar con Instagram
      </Button>
    </main>
  );
}
