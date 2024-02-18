"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Herramientas from "./ui/herramientas";
import { ArrowBigRight } from "lucide-react";

const ventajasCollection = [
  {
    id: 1,
    title: "Aprende Haciendo",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Avanza con Learn By Doing metodo probado y eficaz basado en la experiencia practica te permite llevar a la practica los conocimientos aprendidos desde el primer dia ",
  },
  {
    id: 2,
    title: "Programas de estudios innovadores",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Creamos programas integrales con standard de formacion internacional, que reflejan las ultimas tendencias en entrenamiento,las ciencias aplicadas para que logreas empleabilidad o hacer despegar tu propio proyecto",
  },
  {
    id: 3,
    title: "SkillClass - Tu Herramienta Exclusiva",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Domina el arte de construir tu marca,ofrecer y vender tus servicios y comunicar efectivamente tus proyectos personales.SkillClass es el complemento necesario para garantizar tu exito.",
  },
  {
    id: 4,
    title: "Innovamos en la forma de aprender",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Rompemos los moldes tradicionales con un enfoque innovador.Aprende en un entorno virtual interactio, simple e intuitivo con metodos que despiertan tu creatividad y facilitan tu aprendizaje",
  },
];

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
          <div className="bg-black text-white w-full md:w-2/5 h-52 text-center font-bold text-2xl flex items-center justify-center">
            Imagen
          </div>
          <div className="md:w-1/2">
            <h3 className="text-lg md:text-4xl  font-extrabold   text-idaclass tracking-tight">
              Innovación en la enseñanza
            </h3>
            <p className="text-pretty md:text-lg font-semibold ">
              Aprende en un entorno virtual interactivo y multimodal <br />{" "}
              simple y efectivo.
            </p>
            <ul>
              <li className="flex items-center">
                <ArrowBigRight fill="black" /> Clases en vivo{" "}
                <ArrowBigRight fill="black" /> Videolecciones
              </li>

              <li className="flex items-center">
                <ArrowBigRight fill="black" /> Contenido interactivo{" "}
                <ArrowBigRight fill="black" /> Autoevaluaciones
              </li>

              <li className="flex items-center">
                <ArrowBigRight fill="black" /> Equipo de tutores{" "}
                <ArrowBigRight fill="black" /> Trabajo en equipo{" "}
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
            <h2 className=" z-10 text-lg md:text-4xl  font-extrabold   text-idaclass tracking-tight mb-4">
              Eleva tus habilidades con SkillClass
            </h2>
            <h4 className="text-pretty md:text-lg font-semibold ">
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
              <h3 className="text-lg md:text-4xl  font-extrabold   text-idaclass tracking-tight">
                Aprender haciendo
              </h3>
              <p className="text-pretty md:text-lg font-semibold">
                Avanza con Learning by Doing el método basado en experiencia
                práctica Aprende y aplica de forma rápida y eficiente desde el
                primer día.
              </p>
              <ul className="flex flex-col gap-4 py-2 font-medium">
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
            <h3 className="text-lg md:text-4xl  font-extrabold   text-idaclass tracking-tight">
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
