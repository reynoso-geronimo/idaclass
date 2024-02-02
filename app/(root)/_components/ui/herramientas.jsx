"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Herramienta from "./herramienta";
import Image from "next/image";

const carrusel1 = [
  <Herramienta
    contenido={
      <>
        Auto <br />
        Evaluaciones
      </>
    }
    key={`carrusel1_1`}
  />,

  <div className="relative w-full h-52" key={`sarasa`}>
    <Image
      src={"/equipo.jpg"}
      key={`sarasa`}
      fill
      style={{
        objectFit: "cover", // cover, contain, none
      }}
      alt="equipo"
    />
  </div>,

  <Herramienta
    contenido={
      <>
        Contenido <br />
        Interactivo
      </>
    }
    key={`carrusel1_2`}
  />,
  <div className="relative w-full h-52" key={`sarasa`}>
    <Image
      src={"/equipo.jpg"}
      key={`sarasa`}
      fill
      style={{
        objectFit: "cover", // cover, contain, none
      }}
      alt="equipo"
    />
  </div>,
];
const carrusel2 = [
  <Herramienta
    rotar={true}
    contenido={
      <>
        Grupo <br />
        de <br />
        estudio
      </>
    }
    key={`carrusel2_1`}
  />,

  <div className="relative w-full h-52" key={`sarasa`}>
    <Image
      src={"/equipo.jpg"}
      key={`sarasa`}
      fill
      style={{
        objectFit: "cover", // cover, contain, none
      }}
      alt="equipo"
      className="rotate-180"
    />
  </div>,

  <Herramienta
    rotar={true}
    contenido={<>Tutores</>}
    key={`carrusel2_2`}
  ></Herramienta>,
  <div className="relative w-full h-52" key={`sarasa`}>
    <Image
      src={"/equipo.jpg"}
      key={`sarasa`}
      fill
      style={{
        objectFit: "cover", // cover, contain, none
      }}
      alt="equipo"
      className="rotate-180"
    />
  </div>,
];

const carrusel3 = [
  <Herramienta
    contenido={
      <>
        Clases <br /> en <br /> Vivo
      </>
    }
    key={`carrusel1_1`}
  />,

  <div className="relative w-full h-52" key={`sarasa`}>
    <Image
      src={"/equipo.jpg"}
      key={`sarasa`}
      fill
      style={{
        objectFit: "cover", // cover, contain, none
      }}
      alt="equipo"
    />
  </div>,

  <Herramienta
    contenido={
      <>
        Video <br /> Lecciones
      </>
    }
    key={`carrusel1_2`}
  />,
  <div className="relative w-full h-52" key={`sarasa`}>
    <Image
      src={"/equipo.jpg"}
      key={`sarasa`}
      fill
      style={{
        objectFit: "cover", // cover, contain, none
      }}
      alt="equipo"
    />
  </div>,
];

const Herramientas = () => {
  return (
    <section className=" flex justify-center w-full md:w-[55%]">
      <div className="w-1/3">
        <Carousel
          opts={{
            align: "end",
            loop: true,
            duration: 6000,
            watchDrag: false,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction: false,
            }),
          ]}
          className="mx-1  "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {carrusel1.map((contenido, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                {contenido}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* PRIMER CARRUSEL */}

      <div className="rotate-180 w-1/3">
        <Carousel
          opts={{
            align: "end",
            loop: true,
            duration: 6000,
            watchDrag: false,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction: false,
            }),
          ]}
          className="mx-1"
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {carrusel2.map((contenido, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                {contenido}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* SEGUNDO CARRUESEL */}

      <div className="w-1/3">
        <Carousel
          opts={{
            align: "end",
            loop: true,
            duration: 6000,
            watchDrag: false,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction: false,
            }),
          ]}
          className="mx-1"
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {carrusel3.map((contenido, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3">
                {contenido}
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
