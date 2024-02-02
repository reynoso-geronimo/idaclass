"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Herramienta from "./ui/herramienta";

const carrusel1 = [
  <h1 className="text-xl sm:text-2xl font-bold" key={1}>Auto <br />Evaluaciones</h1>,
  `Imagen `,
  <h1 className="text-xl sm:text-2xl font-bold" key={2}>
    Contenido
    <br /> Interactivo
  </h1>,
  `Imagen2`,
];

const carrusel2 = [
  <h1 className="text-xl sm:text-2xl font-bold" key={3}>
  Grupo <br />de  <br />estudio 
</h1>,
 `imagen1`,
  <h1 className="text-xl sm:text-2xl font-bold" key={4}>
   Tutores
  </h1>,

];

const carrusel3 = [
  <h1 className="text-xl sm:text-2xl font-bold" key={4}>Clases <br /> en <br /> Vivo</h1>,
  `Imagen `,
  <h1 className="text-xl sm:text-2xl font-bold" key={5}>
   Video <br /> Lecciones
  </h1>,
  `Imagen2`,
];

const Herramientas = () => {
  return (
    <section className=" flex justify-center ">
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
              stopOnInteraction: false,
            }),
          ]}
          className="mx-1 sm:mx-4 "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {carrusel1.map((contenido, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                <div className="p-1h-[100px] w-40">
                  <Herramienta contenido={contenido} />
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
              stopOnInteraction: false,
            }),
          ]}
          className="mx-1 sm:mx-4 "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {carrusel2.map((contenido, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                <div className="p-1h-[100px] rotate-180 w-40">
                  <Herramienta
                    contenido={
                      contenido
                    }
                  />
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
              stopOnInteraction: false,
            }),
          ]}
          className="mx-1 sm:mx-4 "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {carrusel3.map((contenido, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                <div className="p-1h-[100px] w-40">
                  <Herramienta
                    contenido={
                      contenido
                    }
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* TERCER CARRUSEL */}
    </section>
  );
};

export default Herramientas;
