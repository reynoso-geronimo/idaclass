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

        <article
          ref={ref2}
          className={`relative flex flex-col-reverse lg:flex-row even:lg:flex-row-reverse items-center justify-evenly gap-4 transition-all duration-1000 ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full lg:w-7/8 text-center">
            <h3 className="text-2xl lg:text-3xl lg:text-right font-extrabold text-idaclass tracking-tight px-2">
              Conéctate con oportunidades
            </h3>
            <div className="w-full relative aspect-video">
              <div className="max-lg:hidden absolute top-0 lg:top-0 xl:top-4 right-0 w-[45%] h-[30%] text-black z-10">
                <p className="text-lg text-left leading-tight">
                  Nuestra formación integral te permitirá captar clientes, generar ingresos y construir una sólida
                  reputación, mientras te destacas como profesional.
                </p>
              </div>
              <Image
                src={`/home/IdaClass Web Img 4.jpg`}
                alt=""
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
                className="-z-10 rounded-2xl"
              />
            </div>
            <div className="lg:hidden my-4 container max-w-2xl">
              <p className="text-lg">
                Nos aseguramos de brindarte una formación integral, para que desarrolles todas las habilidades
                necesarias para lograr tus metas profesionales con éxito.
              </p>
            </div>
          </div>
          <div className="pb-12 lg:w-4/5 relative overflow-hidden">
            <h3 className="text-left lg:text-left text-2xl lg:text-3xl font-extrabold text-idaclass tracking-tight pb-2">
              Elige la modalidad que más te conviene
            </h3>
            <p className="text-pretty lg:text-lg ">
              <span className="font-semibold">Presencial en Gimnasios:</span> Aprende en vivo en los mejores gimnasios
              de la red, con acceso directo a equipos, entrenamientos reales y el apoyo de nuestro staff de Trainers
              Educativos.
              <br />
              <br />
              <span className="font-semibold"> Online con Clases en Vivo:</span> Estudia desde cualquier lugar y
              dispositivo, accediendo a nuestra plataforma multimodal e interactiva con videos, resúmenes y
              autoevaluaciones.
            </p>
            {/* <ul className="flex flex-col py-2 text-sm sm:text-base">
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
            </ul> */}
            {/*          <div className="flex gap-2 container justify-center pb-4">
              {partners.map((partner, index) => (
                <Image
                  key={index}
                  src={`/empresasPartners${partner.src}`}
                  width={190}
                  height={190}
                  alt="logo"
                  className="w-1/2 rounded-xl object-contain object-left aspect-video p-2 bg-white"
                />
              ))}
            </div> */}
            <Image src={linea} alt="linea" className="lg:hidden absolute -right-44 -bottom-4 scale-150" />
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
