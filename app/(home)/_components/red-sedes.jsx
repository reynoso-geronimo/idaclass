"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// Logos blancos con fondo transparente, todos en un lienzo de 600x400 con el tamaño ya equilibrado.
// Originales en la carpeta "LOGOS PARTNERS" de Drive.
const sedes = [
  { src: "nitro-gym.webp", nombre: "Nitro Gym" },
  { src: "levelgym.webp", nombre: "LevelGym" },
  { src: "magicgam.webp", nombre: "Magicgam" },
  { src: "wellgo.webp", nombre: "Wellgo" },
  { src: "proteina-gym.webp", nombre: "Proteína Gym" },
  { src: "ultra-fitness-center.webp", nombre: "Ultra Fitness Center" },
  { src: "gimnasio-graciela.webp", nombre: "Gimnasio Graciela" },
  { src: "buena-vida-club.webp", nombre: "Buena Vida Club" },
  { src: "lgc-lugano-gym-club.webp", nombre: "LGC Lugano Gym Club" },
  { src: "one.webp", nombre: "ONE" },
  { src: "ab.webp", nombre: "AB" },
  { src: "neo.webp", nombre: "NEO" },
  { src: "baika-club.webp", nombre: "Baika Club" },
  { src: "pow-training-club.webp", nombre: "POW Training Club" },
  { src: "pignataro-group.webp", nombre: "Pignataro Group" },
  { src: "anyma-fitness-club.webp", nombre: "Anyma Fitness Club" },
  { src: "vita-gym.webp", nombre: "Vita Gym" },
  { src: "center-fit.webp", nombre: "Center Fit" },
];

const RedSedes = () => {
  return (
    <section className="container bg-idaclass2 py-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-8 relative overflow-hidden">
      <div className="w-full lg:w-[420px] shrink-0">
        <TextGenerateEffect
          words="La red de sedes más grande de Latam:"
          className="text-idaclass5 mx-auto lg:mx-0 lg:text-left text-3xl lg:text-4xl text-center font-extrabold tracking-tight max-w-[360px]"
        />
      </div>
      <Carousel
        className="w-full min-w-0"
        opts={{
          align: "start",
          loop: true,
          watchDrag: false,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2">
          {sedes.map(sede => (
            <CarouselItem key={sede.src} className="pl-2 basis-[37%] sm:basis-[25%] lg:basis-[20%]">
              <div className="relative aspect-[3/2]">
                <Image
                  src={`/home/sedes/${sede.src}`}
                  alt={sede.nombre}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 25vw, 37vw"
                  className="object-contain drop-shadow-[0_1px_2px_rgba(29,47,87,0.35)]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default RedSedes;
