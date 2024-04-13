import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import bgWeb from '../../../../public/cursosFormacion/objetivosBgWeb.png'
import bgMobile from '../../../../public/cursosFormacion/objetivosBgMobile.png'
const CursoFormacionObjetivos = () => {
  return (
    <section className="">
      <div className="container flex flex-col lg:flex-row lg:pt-8 relative">
        <Image src={bgWeb} fill className="w-full h-full object-cover object-left -z-10 max-lg:hidden" alt="background" />
        <Image src={bgMobile} fill className="w-full h-full object-cover object-left -z-10 lg:hidden" alt="background" />
        <Image
          src={"/cursosFormacion/objetivos.png"}
          height={1000}
          width={1000}
          alt=""
          className="w-full object-contain -translate-y-6 lg:w-1/3"
        />
        <article className="container text-white pb-8 px-4">
          <h3
            className={
              "max-lg:text-left text-4xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Objetivos <br className="lg:hidden" /> del Curso
          </h3>
          <Objetivo />
          <Objetivo />
          <Objetivo />
        </article>
        <article className="container text-white pb-8 px-4">
          <h3
            className={
              "max-lg:text-left text-4xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Perfil del <br className="lg:hidden" /> Egresado
          </h3>
          <Objetivo />
          <Objetivo />
          <Objetivo />
        </article>
      </div>
    </section>
  );
};

export const Objetivo = ({ titulo = "OBJETIVO", texto }) => {
  return (
    <div className="bg-[#111827]">
      <h4 className="font-bold text-lg flex items-center gap-2 py-5">
        <Check
          className="rounded-full bg-idaclass3 text-black p-0.5"
          strokeWidth={2.5}
        />
        {titulo}
      </h4>
      <p>
        {texto
          ? texto
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil, sequilaborum dolorum obcaecati recusandae voluptate repellendus tempora modiomnis eos suscipit cupiditate impedit facilis ipsum? Similique ipsumprovident quas."}
      </p>
    </div>
  );
};

export default CursoFormacionObjetivos;
