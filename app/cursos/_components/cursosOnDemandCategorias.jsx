import TituloSeccion from "@/components/ui/titulo-seccion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CursoOnDemandCard from "./curso-on-demand-card";

const CursosOnDemandCategorias = ({ categoria, cursos }) => {
  return (
    <section className="">
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

export default CursosOnDemandCategorias;
