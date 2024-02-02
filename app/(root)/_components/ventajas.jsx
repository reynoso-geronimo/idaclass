"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Partners from "./ui/partners";
import EquipoProfesional from "./equipo-profesional";
import Herramientas from "./ui/herramientas";

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
  const [ref1, inView1, entry1] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  const [ref2, inView2, entry2] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  const [ref3, inView3, entry3] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  return (
    <>
      <TituloSeccion>Conoce nuestro modelo y sus ventajas</TituloSeccion>
      <section className="w-full flex flex-col items-center gap-6 md:gap-y-12 container py-20">
        {/* <section className="flex flex-wrap justify-center items-center   w-full p-4 ">
        <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
          Como es nuestro innovador modelo de capacitacion
        </h1>
      </section> */}

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref1}
          className={`flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-evenly transition-all duration-1000 ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Herramientas />
          <div className="md:w-2/5">
            <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
              Innovación en la enseñanza
            </h3>
            <p className="text-pretty md:text-lg">
              Aprende en un entorno virtual interactivo y multimodal de manera
              simple y efectiva. Clases en vivo con expertos, videolecciones,
              contenido interactivo, autoevaluaciones acompañado por un equipo
              de tutores.
            </p>
          </div>
        </article>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref2}
          className={`flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-evenly gap-4  transition-all duration-1000 ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full md:w-7/8 rounded-lg relative aspect-video">
            <Image
              src={`/programas.jpg`}
              alt="hero image"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
          <div className="md:w-4/5 lg:w-1/2 flex flex-col justify-center gap-12">
            <div>
              <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
                Programas de estudios modernos
              </h3>
              <p className="text-pretty md:text-lg">
                Accede a programas integrales con standard de formación
                internacional, que reflejan las ultimas tendencias en
                entrenamiento, las ciencias aplicadas para que logres
                empleabilidad o para llevar a delante tu emprendimiento de forma
                exitosa
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
                Aprender haciendo
              </h3>
              <p className="text-pretty md:text-lg">
                Avanza con Learning by Doing el método probado y eficaz basado
                en experiencia practica Lleva a la práctica los conocimientos de
                forma rápida y eficiente desde el primer día, para alcanzar tus
                objetivos.
              </p>
            </div>
          </div>
        </article>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref3}
          className={`flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-evenly  transition-all duration-1000	${
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
            <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
              SkillClass - Tu Herramienta Exclusiva
            </h3>
            <p className="text-pretty md:text-lg">
              Dominá el arte de construir tu marca, ofrecer y vender servicios,
              comunicándote efectivamente. SkillClass es el complemento
              necesario para garantizar que logres tus objetivos con éxito.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Ventajas;
