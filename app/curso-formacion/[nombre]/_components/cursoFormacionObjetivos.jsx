import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import bgWeb from "../../../../public/cursosFormacion/objetivosBgWeb.png";
import bgMobile from "../../../../public/cursosFormacion/objetivosBgMobile.png";
const CursoFormacionObjetivos = () => {
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
          <Objetivo
            titulo="Conocimiento Técnico - Teórico:"
            texto={
              "Buscamos que los alumnos adquieran un profundo conocimiento respaldado por evidencia científica en el ámbito de la preparación física deportiva, así como dominar las últimas tácticas y tecnologías aplicables al entrenamiento."
            }
          />
          <Objetivo titulo="Experiencia Práctica:" texto={"Nos enfocamos en dotar a los alumnos con habilidades prácticas sólidas, permitiéndoles aplicar de manera efectiva los conocimientos teóricos adquiridos en situaciones reales de entrenamiento, tanto individuales como de equipos."}/>
          <Objetivo titulo="Habilidades actuales:" texto={" Que el egresado incorpore conocimiento especializado en marketing personal, ventas, que le permita atraer y retener clientes como asi tambien soluciones concretas  para promocionar sus servicios con éxito, expandir su red de clientes y alcanzar el éxito financiero en el ámbito de la preparación física deportiva."}/>
        </article>
        <article className="container text-white pb-8 px-4">
          <h3
            className={
              "max-lg:text-left text-4xl font-extrabold text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text"
            }
          >
            Perfil del <br className="lg:hidden" /> Egresado
          </h3>
          <Objetivo titulo="Alto perfil profesional:" texto={"Un profesional dotado con el conocimiento mas actualizado en entrenamiento y las ciencias aplicadas .Con un gran  manejo técnico y recursos ilimitados  Certificado bajo  un estándar de  formación profesional , según criterios  internacionales y el aval universitario que le permite distinguirse en el mercado laboral como profesional altamente calificado "}/>
          <Objetivo titulo="Capacidad de Líderazgo:" texto={"Con habilidades interpersonales para brindar un trato cercano y personalizado a los clientes. Con una sólida base ética y de valores, haciendo énfasis en la inclusión, el respeto y la diversidad. "}/>
          <Objetivo titulo="Innovador:" texto={"Con habilidades digitales y capacidad de adaptarse a las necesidades cambiantes del mercado y  los clientes Capaz de dar respuesta a la oferta laboral o emprender diversas opciones de negocio y propuestas de servicios actuales para este nuevo mundo"}/>
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
