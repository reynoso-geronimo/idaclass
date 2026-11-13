"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { Dot } from "lucide-react";
import linea from "../../../public/assets/Linea img 1.png";
const partners = [
  {
    src: "/COALICIONUNIVERSIDADESYMCA.jpg",
    alt: "logo",
  },
  {
    src: "/Logo_instituto-leyenda-red.png",
    alt: "logo",
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
      <TituloSeccion>¿Por qué elegir IdaClass?</TituloSeccion>
      <section className="w-full flex flex-col items-center gap-10 lg:gap-y-0 container mb-12">
        {/* <section className="flex flex-wrap justify-center items-center   w-full p-4 ">
        <h1 className="text-4xl lg:text-5xl font-bold text-center tracking-tight">
          Como es nuestro innovador modelo de capacitacion
        </h1>
      </section> */}

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <article
          ref={ref1}
          className={`pb-12 overflow-hidden relative w-full flex flex-col lg:flex-row even:lg:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000 ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <Herramientas /> */}
          <div className="w-full lg:w-1/2 aspect-video relative ">
            <Image
              src={`/home/Innovacion.png`}
              alt="Bienvenido"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain lg:mt-12"
            />
          </div>
          <div className="w-full lg:w-1/2 min-h-44 relative overflow-hidden">
            <div className="absolute right-6 lg:right-[35%] bottom-8 lg:bottom-6 rotate-[90deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.769"
                height="14.821"
                className="fill-idaclass scale-[900%] lg:scale-[1200%] opacity-35 -z-10"
              >
                <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
              </svg>
            </div>

            <h3 className="text-2xl text-center lg:text-left lg:text-3xl font-extrabold  text-idaclass tracking-tight pb-2">
              Impulsamos tu Carrera en Tiempo Récord
            </h3>
            <p className="text-pretty lg:text-lg text-center lg:text-left">
              Nuestros cursos cortos se enfocan en experiencias prácticas y clases en vivo. Trabaja en gimnasios,
              estudios de fitness, o como entrenador independiente en solo unos meses.
            </p>
            {/* <p className="text-pretty lg:text-lg text-center lg:text-left mb-4">
              Trabaja en gimnasios, estudios de fitness, o como entrenador independiente en solo unos meses.
            </p> */}
            {/*  <ul className="font-bold grid grid-cols-2 justify-items-center lg:justify-items-start gap-x-0 gap-y-4 text-sm sm:text-base ">
              <li className="w-full  flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Trabajos en equipo
              </li>
              <li className="w-full  flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Desarrollo de proyectos propios
              </li>
              <li className="w-full  flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Acompañamiento de tutores
              </li>
              <li className="w-full  flex items-center break-words hyphens-auto">
                <Dot fill="black " className="shrink-0" />
                Staff de expertos Internacionales
              </li>
            </ul> */}
          </div>

          <Image src={linea} alt="linea" className="absolute -right-44 lg:-right-10 -bottom-12 lg:bottom-0 scale-150" />
        </article>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        {/* Sin el bloque de modalidades, el texto ocupa la columna libre y la imagen va al costado (zigzag con el artículo de arriba). */}
        <article
          ref={ref2}
          className={`w-full relative flex flex-col-reverse lg:flex-row items-center justify-evenly gap-4 transition-all duration-1000 ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full lg:w-1/2 relative overflow-hidden lg:pl-8">
            <h3 className="text-2xl text-center lg:text-left lg:text-3xl font-extrabold text-idaclass tracking-tight pb-2">
              Conéctate con oportunidades
            </h3>
            <p className="max-lg:hidden text-pretty lg:text-lg text-left">
              Nuestra formación integral te permitirá captar clientes, generar ingresos y construir una sólida
              reputación, mientras te destacas como profesional.
            </p>
            <p className="lg:hidden text-pretty text-lg text-center max-w-2xl mx-auto">
              Nos aseguramos de brindarte una formación integral, para que desarrolles todas las habilidades necesarias
              para lograr tus metas profesionales con éxito.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative aspect-video">
            <Image
              src={`/home/IdaClass Web Img 4.jpg`}
              alt="SkillClass: 4 cursos extras de marketing, ventas, comunicación y liderazgo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </article>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        {/* <article
          ref={ref3}
          className={`flex flex-col lg:flex-row even:lg:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000	${
            inView3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/innovamos.jpg`}
            alt="hero image"
            height={200}
            width={200}
            className="w-full lg:w-2/5 rounded-lg"
          />
          <div className="lg:w-2/5">
            <h3 className="text-lg lg:text-3xl  font-extrabold   text-idaclass tracking-tight">
              SkillClass - Tu Herramienta Exclusiva
            </h3>
            <p className="text-pretty lg:text-lg font-semibold">
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
