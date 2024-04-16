"use client";
import TituloSeccion from "@/components/ui/titulo-seccion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CursoOnDemandCard from "./curso-on-demand-card";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CursosOnDemandCategoria = ({ categoria, cursos, index ,setActivo }) => {

  const [ref, inView] = useInView({threshold: 1, rootMargin:"0px" });

  useEffect(() => {
    inView && setActivo(index);
  }, [inView]);

  return (
    <section className="relative" ref={ref}>
      <div id={categoria} className="absolute -top-[85px]" />
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
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CursoOnDemandCard curso={curso} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={"left-2"} />
        <CarouselNext className={"right-2"} />
      </Carousel>
    </section>
  );
};

export default CursosOnDemandCategoria;
