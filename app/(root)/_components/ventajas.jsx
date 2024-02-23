"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { ArrowBigRight } from "lucide-react";

const Ventajas = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });

  return (
    <>
      <TituloSeccion>Conoce nuestro modelo y sus ventajas</TituloSeccion>
      <section className="w-full flex flex-col items-center gap-6 md:gap-y-12 container pb-20">
        {/* <section className="flex flex-wrap justify-center items-center   w-full p-4 ">
        <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
          Como es nuestro innovador modelo de capacitacion
        </h1>
      </section> */}

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref1}
          className={`w-full flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000 ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <Herramientas /> */}
          <div className="w-full md:w-1/2 aspect-video relative">
            <Image
              src={`/home/IdaClass Web Img 2.1.jpg`}
              alt="Bienvenido"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl text-center md:text-left md:text-3xl font-extrabold  text-idaclass tracking-tight">
              Innovación en la enseñanza
            </h3>
            <p className="text-pretty md:text-lg text-center md:text-left mb-4">
              Aprende en un entorno virtual interactivo multimodal simple y efectivo.
            </p>
            <ul className="grid grid-cols-2 justify-items-center md:justify-items-start gap-x-2">
              <li className="w-full max-w-48">
                <ArrowBigRight fill="black" className="inline" />
                Clases en vivo
              </li>
              <li className="w-full max-w-48">
                <ArrowBigRight fill="black" className="inline" />
                Videolecciones
              </li>

              <li className="w-full max-w-48">
                <ArrowBigRight fill="black" className="inline" />
                Contenido interactivo
              </li>
              <li className="w-full max-w-48">
                <ArrowBigRight fill="black" className="inline" />
                Autoevaluaciones
              </li>

              <li className="w-full max-w-48">
                <ArrowBigRight fill="black" className="inline" />
                Equipo de tutores
              </li>
              <li className="w-full max-w-48">
                <ArrowBigRight fill="black" className="inline" />
                Trabajo en equipo
              </li>
            </ul>
          </div>
        </article>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref2}
          className={`flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000 ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full md:w-7/8 rounded-lg relative aspect-video text-white text-center">
            <h3 className="text-2xl md:text-3xl  font-extrabold   text-idaclass tracking-tight mb-4">
              Eleva tus habilidades con SkillClass
            </h3>
            <h4 className="text-pretty md:text-lg">
              <span className="text-idaclass4">Bono especial</span> 4 cursos
              extras para asegurar tu éxito
            </h4>
            <p className="absolute bottom-4 translate-x-[50%] right-[50%]">
              Marketing - venta - liderazgo - comunicacion
            </p>
            <p className="text-2xl absolute translate-x-[50%] translate-y-[50%] top-[50%] right-[50%]">
              IMAGEN
            </p>
            <Image
              src={`/`}
              alt=""
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className="-z-10 bg-black"
            />
          </div>
          <div className="md:w-4/5 lg:w-1/2 flex flex-col justify-center gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-idaclass tracking-tight">
                Aprender haciendo
              </h3>
              <p className="text-pretty md:text-lg ">
                Avanza con Learning by Doing el método basado en experiencia
                práctica Aprende y aplica de forma rápida y eficiente desde el
                primer día.
              </p>
              <ul className="flex flex-col gap-4 py-2 ">
                <li className="flex">
                  <ArrowBigRight fill="black" /> Practica real con alumnos
                </li>
                <li className="flex">
                  <ArrowBigRight fill="black" />
                  Trabajos en equipo
                </li>
                <li className="flex">
                  <ArrowBigRight fill="black" />
                  Desarrolla tus proyectos
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        {/* <article
          ref={ref3}
          className={`flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000	${
            inView3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/innovamos.jpg`}
            alt="hero image"
            height={200}
            width={200}
            className="w-full md:w-2/5 rounded-lg"
          />
          <div className="md:w-2/5">
            <h3 className="text-lg md:text-3xl  font-extrabold   text-idaclass tracking-tight">
              SkillClass - Tu Herramienta Exclusiva
            </h3>
            <p className="text-pretty md:text-lg font-semibold">
              Dominá el arte de construir tu marca, ofrecer y vender servicios,
              comunicándote efectivamente. SkillClass es el complemento
              necesario para garantizar que logres tus objetivos con éxito.
            </p>
          </div>
        </article> */}
      </section>
    </>
  );
};

export default Ventajas;
