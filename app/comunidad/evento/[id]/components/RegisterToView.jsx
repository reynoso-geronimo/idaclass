"use client";
import RegisterForm from "@/app/signin/_components/registerForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import GoogleIcon from "../../../../../public/assets/google-icon.svg";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { useSession ,signIn} from "next-auth/react";
import { YouTubeEmbed } from "@next/third-parties/google";



const RegisterToView = ({ videoid = "AYJx_xLi8KE" }) => {
  const { data: session } = useSession();
  return (
    <div className="min-h-dvh relative flex flex-col items-center justify-center gap-4">
      {!session?.user ? (
        <>
          <TituloSeccion>Regístrate o inicia ingresa para acceder a la grabación</TituloSeccion>
          <div className=" bg-gray-100 px-8 py-2 max-w-sm w-full rounded-2xl ">
            <RegisterForm />
            <Button
              onClick={() => signIn("google")}
              className="w-full bg-slate-600 rounded-3xl mt-4"
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
            <p className="text-sm text-center mt-2 cursor-pointer" onClick={() => signIn()}>
              ¿Ya tenés una cuenta? <span className="text-idaclass3">Logueate!</span>
            </p>
          </div>
        </>
      ) : (
        <div className="w-full max-w-[720px]"><YouTubeEmbed videoid={videoid} className="w-full"/></div>
      )}
    </div>
  );
};

export default RegisterToView;
