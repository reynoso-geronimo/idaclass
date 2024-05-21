import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import bgWeb from "../../../../public/cursosEspecializacion/cursos/objetivosBgWeb.png";
import bgMobile from "../../../../public/cursosEspecializacion/cursos/objetivosBgMobile.png";
import CertificacionCursosEspciealizacion from "./certificacionCursosEspecializacion";
const CursosEspciealizacionObjetivos = ({
  nombre,

  objetivo_texto,
  perfil_texto,
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
          className="w-full h-full object-cover object-left-top -z-10 lg:hidden"
          alt="background"
        />
        <Image
          src={"/cursosEspecializacion/cursos/objetivos.png"}
          height={5000}
          width={5000}
          alt=""
          className="w-full object-contain lg:w-[45%] max-lg:hidden"
        />
        <article className="container text-white pb-8 px-4 max-lg:mt-24">
          <h3
            className={
              "max-lg:text-left text-3xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Objetivos <br className="lg:hidden" /> del Curso
          </h3>
          <Objetivo texto={objetivo_texto} />
        </article>
        <article className="container text-white pb-8 px-4">
          <h3
            className={
              "max-lg:text-left text-3xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Perfil del <br className="lg:hidden" /> Egresado
          </h3>
          <Objetivo texto={perfil_texto} />
          <CertificacionCursosEspciealizacion nombre={nombre} />
        </article>
      </div>
    </section>
  );
};

export const Objetivo = ({ texto }) => {
  return (
    <div className="bg-[#111827] mt-4">
      <p>{texto && texto}</p>
    </div>
  );
};

export default CursosEspciealizacionObjetivos;
