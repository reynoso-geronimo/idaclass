"use client";
import TituloSeccion from "@/components/ui/titulo-seccion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CursoEspecializacionCard from "./cursoEspecializacionCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CursosEspecializacionCategoria = ({ categoria, cursos, index, setActivo }) => {
  const countCursos = cursos.length;
  //console.log(countCursos);
  let basis = "1/4";

  if (countCursos === 2) {
    basis = "lg:basis-1/2";
  } else if (countCursos === 3) {
    basis = "lg:basis-1/3";
  } else if (countCursos >= 4) {
    basis = "lg:basis-1/4";
  }

  const [ref, inView] = useInView({ threshold: 0.7, rootMargin: "0px" });

  useEffect(() => {
    inView && setActivo(index);
  }, [inView]);

  return (
    <section className={`relative`} ref={ref}>
      <div id={categoria} className="absolute -top-[65px]" />
      <TituloSeccion>
        Categoria <span className="text-idaclass4">{categoria}</span>
      </TituloSeccion>
      <Carousel
        className="container"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {cursos.map((curso, index) => (
            <CarouselItem key={index} className={`pl-1 md:basis-1/2 ${basis}`}>
              <CursoEspecializacionCard curso={curso} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`left-5 h-10 w-10 ${countCursos<=2&&"hidden"}`} />
        <CarouselNext className={`right-5 h-10 w-10 ${countCursos<=2&&"hidden"}`} />
      </Carousel>
    </section>
  );
};

export default CursosEspecializacionCategoria;
