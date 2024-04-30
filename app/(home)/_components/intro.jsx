"use client";
import { ArrowUp } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import linea from "../../../public/assets/Línea img 3.png";

const areas = [
  { src: `/home/areas/entrenamiento.jpeg`, area: "Entrenamiento" },
 
  { src: `/home/areas/gimnasio.jpeg`, area: "Gimnasio" },
  { src: `/home/areas/nutricion.jpg`, area: "Nutricion" },
];
const Intro = () => {
  return (
    <section className="container lg:px-0 bg-black text-white py-8 gap-12 flex flex-col lg:flex-row items-center justify-end relative overflow-hidden">
      <div className="w-full lg:w-auto text-center lg:text-left">
        <h2 className="font-semibold text-3xl lg:max-w-sm">
          Ofrecemos la mejor solución probada para tu futuro{" "}
          <p className="whitespace-nowrap inline">
            profesional
            <ArrowUp
              className="text-idaclass4 scale-y-125 inline"
              strokeWidth={4}
            />
          </p>
        </h2>
        <p className="text-sm py-2 lg:max-w-sm">
          Somos la llave para transformar tu pasión <br /> en una carrera
          exitosa en tiempo record.
        </p>
        <div className="-translate-x-[27px] lg:absolute bottom-10 left-7 w-full">
          <Image
            src={linea}
            alt="linea"
            className="absolute -translate-x-[8%] -translate-y-[55%] scale-[150%] "
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Carousel
          className="w-[100%]"
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
          <CarouselContent className="-ml-1">
            {areas.map((area, index) => (
              <CarouselItem key={index} className="pl-1 basis-[45%]">
               
                  <div className="rounded-xl bg-none p-1">
                    <div className="flex aspect-video items-center justify-center p-6 relative">
                      <Image
                        src={area.src}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw , 20vw"
                        className="object-cover object-top rounded-xl"
                        alt={area.area}
                      />
                    </div>
                 
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Intro;
