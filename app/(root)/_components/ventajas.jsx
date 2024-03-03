"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { Dot } from "lucide-react";
import linea from "../../../public/assets/Línea img 1.png";

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
      <section className="w-full flex flex-col items-center gap-10 md:gap-y-12 container mb-12">
        {/* <section className="flex flex-wrap justify-center items-center   w-full p-4 ">
        <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
          Como es nuestro innovador modelo de capacitacion
        </h1>
      </section> */}

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref1}
          className={`pb-12 overflow-hidden relative w-full flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000 ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <Herramientas /> */}
          <div className="w-full md:w-1/2 aspect-video relative ">
            <Image
              src={`/home/IdaClass Web Img 2.1.jpg`}
              alt="Bienvenido"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <div className="absolute right-6 lg:right-[35%] bottom-8 rotate-[90deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.769"
                height="14.821"
                className="fill-idaclass scale-[900%] lg:scale-[1200%] opacity-35 -z-10"
              >
                <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
              </svg>
            </div>

            <h3 className="text-2xl text-center md:text-left md:text-3xl font-extrabold  text-idaclass tracking-tight">
              Innovación en la enseñanza
            </h3>
            <p className="text-pretty md:text-lg text-center md:text-left mb-4">
              Aprende en un entorno virtual interactivo <br /> multimodal simple
              y efectivo.
            </p>
            <ul className="lg:w-2/3 grid grid-cols-2 justify-items-center md:justify-items-start gap-x-0 text-sm sm:text-base">
              <li className="w-full max-w-48 flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Clases en vivo
              </li>
              <li className="w-full max-w-48 flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Equipo de tutores
              </li>

              <li className="w-full max-w-48 flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Trabajo en equipo
              </li>
              <li className="w-full max-w-48 flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Auto&shy;evaluaciones
              </li>

              <li className="w-full max-w-48 flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Video lecciones
              </li>
              <li className="w-full max-w-48 flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Material interactivo
              </li>
            </ul>
          </div>

          <Image
            src={linea}
            alt="linea"
            className="absolute -right-44 lg:-right-10 -bottom-12 scale-150"
          />
        </article>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref2}
          className={`relative flex flex-col-reverse md:flex-row even:md:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000 ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full md:w-7/8 rounded-lg relative aspect-video text-white text-center overflow-hidden">
            <h3 className="text-2xl md:text-3xl  font-extrabold   text-idaclass tracking-tight mb-4">
              Eleva tus habilidades con SkillClass
            </h3>

            <div className="flex text-left flex-col gap-0 absolute rounded-2xl text-xs lg:text-lg text-idaclass font-bold bottom-[50%]  right-[5%] w-[45%]">
              <p className="h-4"><Dot className="inline"/>Marketing</p>
              <p className="h-4"><Dot className="inline"/>Venta </p>
              <p className="h-4"><Dot className="inline"/>Comunicacion</p>
              <p className="h-4"><Dot className="inline"/>Lidreazgo</p>
            </div>
            <div className="absolute right-8 bottom-[60%] rotate-[90deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.769"
                height="14.821"
                className="fill-idaclass scale-[900%] lg:scale-[1200%] opacity-35 -z-10"
              >
                <path d="M10.212 12.007 7.645 9.414h8v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
              </svg>
            </div>
            <Image
              src={`/home/IdaClass Web Img 4.jpg`}
              alt=""
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className="-z-10"
            />
          </div>
          <div className="pb-12 md:w-4/5 lg:w-1/2 relative overflow-hidden">
            <h3 className="text-left md:text-left text-2xl md:text-3xl font-extrabold text-idaclass tracking-tight">
              Aprender haciendo
            </h3>
            <p className="text-pretty md:text-lg ">
              Avanza con Learning by Doing el método basado en experiencia
              práctica Aprende y aplica de forma rápida y eficiente desde el
              primer día.
            </p>
            <ul className="flex flex-col py-2 text-sm sm:text-base">
              <li className="flex">
                <Dot fill="black" /> Practica real con alumnos
              </li>
              <li className="flex">
                <Dot fill="black" />
                Trabajos en equipo
              </li>
              <li className="flex">
                <Dot fill="black" />
                Desarrolla tus proyectos
              </li>
            </ul>

            <Image
              src={linea}
              alt="linea"
              className="md:hidden absolute -right-44 -bottom-6 scale-150"
            />
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
