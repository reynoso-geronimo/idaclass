"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/google-icon.svg";
import InstagramIcon from "../../public/instagram-icon.svg";
import Image from "next/image";

export default function SignIn() {
  return (
    <main className="flex flex-col items-center relative">
      <video autoPlay muted loop className="-z-10 object-cover sm:hidden">
        <source src="/videos/bgvideo1.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop className="-z-10 object-cover hidden sm:block">
        <source src="/videos/bgvideo2.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col border-2 border-sky-600 absolute top-12 sm:right-52 space-y-4 bg-slate-900 p-6 rounded-lg shadow-lg z-10">
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
      </div>
    </main>
  );
}
