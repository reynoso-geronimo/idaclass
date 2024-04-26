import React from "react";
import CasoExito from "./ui/caso-exito";
import TituloSeccion from "@/components/ui/titulo-seccion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const casos = [
  {
    experiencia:
      "Fue una gran experiencia, desde el contenido de cada uno de los cursos que realice, sus temas, el material de estudio, la forma de comunicar y explicar da cada uno de los profes, hacía que se entienda muy bien cada tema. Y las plataformas súper sencillas de utilizar.",
    avatar: "",
    nombre: "Lucia Kaus",
    carrera: "Personal Trainer ",
    linkedin: "https://www.instagram.com/kauslucia_/",
    pais: "ar",
  },
  {
    experiencia:
      "Recomiendo absolutamente IdaClass, la experiencia fue muy buena y no solo por los conocimientos técnicos adquiridos sino también por las herramientas extras que me brindo la formación, gracias a las que pude iniciar mi proyecto propio y tener una gran comunidad en redes sociales como influencer fitness.",
    avatar: "",
    nombre: "Brian Vazquez.",
    carrera: "Personal Trainer ",
    linkedin: "https://www.instagram.com/kamikazeprofitness/",
    pais: "uy",
  },
  {
    experiencia:
      "Mi orgullo y admiración para todo este equipo maravilloso! Felíz y agradecida por cumplir mis desafíos a través de esta empresa en el entrenamiento de fitness grupal! Gracias infinitas por tanto! Por capacitarse con compromiso como instructora! ",
    avatar: "",
    nombre: "Diana Tosorini",
    carrera: "Instructora",
    linkedin: "https://www.facebook.com/diana.tosoroni",
    pais: "ar",
  },
  {
    experiencia:
      "La experiencia como alumno, EXCELENTE, egresé del prestigioso Instituto en varios cursos con certificación y matricula. Recomiendo para todos aquellos que quieran adquirir conocimientos y en el ámbito de la preparación física y salud. El acompañamiento es permanente de los docentes y directivos. ",
    avatar: "",
    nombre: "Osvaldo Rubén Contreras.",
    carrera: "",
    linkedin: "",
    pais: "ar",
  },
];

const CasosExito = ({ titulo = "Historias que inspiran" ,className="bg-gradient-to-b from-[#0088CA] to-[#1FB3E5]"}) => {
  return (
    <section className={cn(`container pb-12`, className)}>
      <TituloSeccion className={"mb-0 text-white"}>{titulo}</TituloSeccion>
      <h3 className="text-center text-pretty text-lg lg:text-2xl mt-2 mb-6">
      ¡Vos también podés ser un caso de éxito gracias a IdaClass!
      </h3>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent >
          {casos.map((caso, index) => (
            <CarouselItem className="basis-1/9 xl:basis-1/4"  key={index}>
            <CasoExito
             
              experiencia={caso.experiencia}
              avatar={caso.avatar}
              nombre={caso.nombre}
              carrera={caso.carrera}
              linkedin={caso.linkedin}
              pais={caso.pais}
            />
            </CarouselItem>
          ))}
          {/* <CarouselItem className="basis-1/9 xl:basis-1/4">
            <CasoExito />
          </CarouselItem>
          <CarouselItem className="basis-1/9 xl:basis-1/4">
            <CasoExito />
          </CarouselItem>
          <CarouselItem className="basis-1/9 xl:basis-1/4">
            <CasoExito />
          </CarouselItem>
          <CarouselItem className="basis-1/9 xl:basis-1/4">
            <CasoExito />
          </CarouselItem>
        </CarouselContent> */}
        </CarouselContent>
      </Carousel>
      {/* <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto justify-items-center"></div> */}
    </section>
  );
};

export default CasosExito;
