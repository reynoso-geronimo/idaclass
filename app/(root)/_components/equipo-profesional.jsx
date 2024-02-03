"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Profesional from "./ui/profesional";
import TituloSeccion from "@/components/ui/titulo-seccion";

const EquipoProfesional = () => {
  return (
    <section >
      <TituloSeccion>Nuestro equipo de trabajo</TituloSeccion>
      <div className="container flex justify-center mt-2">
      <div >
        <Carousel
          opts={{
            align: "end",
            loop: true,
            duration: 6000,
            watchDrag: true,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction:false
            }),
          ]}
          className="mx-1 sm:mx-4 "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                <div className="p-1h-[100px]">
                  <Profesional />
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* PRIMER CARRUSEL */}

      <div className="rotate-180">
        <Carousel
          opts={{
            align: "end",
            loop: true,
            duration: 6000,
            watchDrag: true,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction:false,
              
            }),
          ]}
          className="mx-1 sm:mx-4 "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                <div className="p-1h-[100px]">
                  <Profesional rotar={true}/>
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* SEGUNDO CARRUESEL */}

      <div>
        <Carousel
          opts={{
            align: "end",
            loop: true,
            duration: 6000,
            watchDrag: true,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction:false,
              
            }),
          ]}
          className="mx-1 sm:mx-4 "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                <div className="p-1h-[100px]">
                  <Profesional />
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* TERCER CARRUSEL */}
      </div>
    </section>
  );
};

export default EquipoProfesional;
