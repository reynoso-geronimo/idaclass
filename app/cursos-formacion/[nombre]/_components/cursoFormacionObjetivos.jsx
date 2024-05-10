import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import bgWeb from "../../../../public/cursosFormacion/objetivosBgWeb.png";
import bgMobile from "../../../../public/cursosFormacion/objetivosBgMobile.png";
const CursoFormacionObjetivos = ({
  nombre,
  ojetivo_titulo_uno,
  ojetivo_texto_uno,
  ojetivo_titulo_dos,
  ojetivo_texto_dos,
  ojetivo_titulo_tres,
  ojetivo_texto_tres,
  perfil_titulo_uno,
  perfil_texto_uno,
  perfil_titulo_dos,
  perfil_texto_dos,
  perfil_titulo_tres,
  perfil_texto_tres,
}) => {
  return (
    <section className="">
      <div className="container flex flex-col lg:flex-row lg:pt-8 relative">
        <Image
          src={bgWeb}
          fill
          className="w-full h-full object-cover object-left -z-10 max-lg:hidden"
          alt="background"
        />
        <Image
          src={bgMobile}
          fill
          className="w-full h-full object-cover object-left -z-10 lg:hidden"
          alt="background"
        />
        <Image
          src={`/cursosFormacion/cursos/objetivos/${nombre}.png`}
          height={1000}
          width={1000}
          alt=""
          className="w-full object-contain -translate-y-6 lg:w-1/3 max-lg:hidden"
        />
        <article className="container text-white pb-8 px-4 max-lg:mt-24">
          <h3
            className={
              "max-lg:text-left text-4xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Objetivos <br className="lg:hidden" /> del Curso
          </h3>
          <Objetivo titulo={ojetivo_titulo_uno} texto={ojetivo_texto_uno} />
          <Objetivo titulo={ojetivo_titulo_dos} texto={ojetivo_texto_dos} />
          <Objetivo titulo={ojetivo_titulo_tres} texto={ojetivo_texto_tres} />
        </article>
        <article className="container text-white pb-8 px-4">
          <h3
            className={
              "max-lg:text-left text-4xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Perfil del <br className="lg:hidden" /> Egresado
          </h3>
          <Objetivo titulo={perfil_titulo_uno} texto={perfil_texto_uno} />
          <Objetivo titulo={perfil_titulo_dos} texto={perfil_texto_dos} />
          <Objetivo titulo={perfil_titulo_tres} texto={perfil_texto_tres} />
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
