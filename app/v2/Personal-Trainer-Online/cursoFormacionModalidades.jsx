"use client"
import TarjetaModalidad from "./tarjeta-modalidad";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import { useSession } from "next-auth/react";

const CursoFormacionModalidades = ({ modalidades, nombre, tipo, curso, campaign }) => {
  const { data: session, status } = useSession();

  return (
    <section className="container relative max-lg:bg-gradient-to-b from-[#12182D] to-[#1C2C53] ">
      <Image
        src={"/cursosFormacion/modalidadesbg2.png"}
        fill
        alt=""
        className="object-cover object-right max-lg:hidden"
      />
      {modalidades === "Online - Presencial" && (
        <TituloSeccion
          className={
            "z-10 px-0 md:text-3xl text-left lg:text-center text-white leading-[50px] md:leading-[80px] absolute top-4 max-lg:ml-8 lg:right-[50%] lg:translate-x-[50%] max-sm:w-64 max-w-md lg:max-w-max"
          }
        >
          Elegí la modalidad que más se <span className="text-idaclass3">adapte a tus necesidades</span>
        </TituloSeccion>
      )}

      <div className="flex flex-col items-stretch justify-center w-full lg:flex-row lg:gap-4">
        {modalidades.includes("Online") ? (
          <TarjetaModalidad modalidad={"ONLINE"} nombre={nombre} tipo={tipo} curso={curso} />
        ) : (
          ""
        )}
        {modalidades.includes("Presencial") && (
          <TarjetaModalidad modalidad={"PRESENCIAL"} nombre={nombre} tipo={tipo} curso={curso} />
        )}
        {status === "unauthenticated" && <RegisterForm />}
      </div>
    </section>
  );
};

export default CursoFormacionModalidades;
