import React from "react";
import CasoExito from "./ui/caso-exito";
import TituloSeccion from "@/components/ui/titulo-seccion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CasosExito = () => {
  return (
    <section className="container">
      <TituloSeccion className={"mb-0"}>Historias que inspiran</TituloSeccion>
      <h3 className="text-center text-pretty my-2">
        Se uno de nuestros casos de éxito
      </h3>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/9 lg:basis-1/4">
            <CasoExito />
          </CarouselItem>
          <CarouselItem className="basis-1/9 lg:basis-1/4">
            <CasoExito />
          </CarouselItem>
          <CarouselItem className="basis-1/9 lg:basis-1/4">
            <CasoExito />
          </CarouselItem>
          <CarouselItem className="basis-1/9 lg:basis-1/4">
            <CasoExito />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="lg:hidden left-0.5" />
        <CarouselNext className="lg:hidden right-0.5" />
      </Carousel>
      {/* <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto justify-items-center"></div> */}
    </section>
  );
};

export default CasosExito;
