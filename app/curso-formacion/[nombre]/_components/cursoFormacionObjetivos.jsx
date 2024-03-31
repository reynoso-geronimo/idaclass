import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const CursoFormacionObjetivos = () => {
  return (
    <section className="">
      <div className="container flex flex-col lg:flex-row lg:pt-8 bg-[#111827] ">
        <Image
          src={"/cursosFormacion/objetivos.png"}
          height={1000}
          width={1000}
          alt=""
          className="w-full object-contain -translate-y-12 lg:w-1/3"
        />
        <article className="container text-white pb-8">
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
        <article className="container text-white pb-8">
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
    <>
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
    </>
  );
};

export default CursoFormacionObjetivos;
