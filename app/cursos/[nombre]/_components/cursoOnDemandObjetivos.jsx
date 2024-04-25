import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import bgWeb from "../../../../public/cursosOnDemand/cursos/objetivosBgWeb.png";
import bgMobile from "../../../../public/cursosOnDemand/cursos/objetivosBgMobile.png";
import CertificacionCursoOnDemand from "./certificacionCursoOnDemand";
const CursoOnDemandObjetivos = () => {
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
          src={"/cursosOnDemand/cursos/objetivos.png"}
          height={5000}
          width={5000}
          alt=""
          className="w-full object-contain -translate-y-6 lg:w-[45%]"
        />
        <article className="container text-white pb-8 px-4">
          <h3
            className={
              "max-lg:text-left text-3xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Objetivos <br className="lg:hidden" /> del Curso
          </h3>
          <Objetivo
            titulo="Profesional Certificado"
            texto={
              "El egresado del curso de Preparador Físico Deportivo se distingue como un profesional certificado y altamente  capacitado en el ámbito del rendimiento deportivo. El egresado del curso de Preparador Físico Deportivo se distingue como un profesional certificado y altamente  capacitado en el ámbito del rendimiento deportivo. El egresado del curso de Preparador Físico Deportivo se distingue como un profesional certificado y altamente  capacitado en el ámbito del rendimiento deportivo. "
            }
          />
        </article>
        <article className="container text-white pb-8 px-4">
          <h3
            className={
              "max-lg:text-left text-3xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Perfil del <br className="lg:hidden" /> Egresado
          </h3>
          <Objetivo
            titulo="Profesional Certificado"
            texto={
              "El egresado del curso de Preparador Físico Deportivo se distingue como un profesional certificado y altamente  capacitado en el ámbito del rendimiento deportivo."
            }
          />
          <CertificacionCursoOnDemand/>
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

export default CursoOnDemandObjetivos;
