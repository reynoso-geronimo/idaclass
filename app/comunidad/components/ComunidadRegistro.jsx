"use client";
import Image from "next/image";
import bg from "../../../public/comunidad/ImagendefondoFormulario.png";
import bgWeb from "../../../public/comunidad/ImagendefondoFormularioWeb.png";
import RegisterForm from "@/app/signin/_components/registerForm";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "../../../public/assets/google-icon.svg";

const ComunidadRegistro = () => {
  const { data: session } = useSession();
  return (
    <div>
      {!session?.user && (
        <section className="container px-0 my-12 relative min-h-[31rem] bg-[#01080D] drop-shadow-2xl">
          <Image src={bg} alt="" fill className="object-contain object-bottom  max-lg:hidden" placeholder="blur" />
          <Image src={bgWeb} alt="" className="object-cover  lg:hidden w-full" placeholder="blur" />
          <div className="absolute lg:top-6 top-[35%] right-[50%] translate-x-[50%] bg-gray-100 px-8 py-2 max-w-sm w-full rounded-2xl ">
            <RegisterForm />
            <Button
              onClick={() => signIn("google", { callbackUrl: window.location.origin })}
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
        </section>
      )}
    </div>
  );
};

export default ComunidadRegistro;
