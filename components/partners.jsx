"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import TituloSeccion from "./ui/titulo-seccion";


const partners = [
  {
    src: "/Aletic.png",
    alt: "logo",
  },
  {
    src: "/GimnasioST.jpg",
    alt: "logo",
  },
  {
    src: "/Graciela.jpeg",
    alt: "logo",
  },
  {
    src: "/gymPeru.png",
    alt: "logo",
  },

  {
    src: "/NeurofitRosario.jpg",
    alt: "logo",
  },
  {
    src: "/Aletic.png",
    alt: "logo",
  },
  {
    src: "/GimnasioST.jpg",
    alt: "logo",
  },
  {
    src: "/Graciela.jpeg",
    alt: "logo",
  },
  {
    src: "/gymPeru.png",
    alt: "logo",
  },
  
  {
    src: "/NeurofitRosario.jpg",
    alt: "logo",
  },
];
const PartnersEducativos = () => {
  return (
    <section className="container lg:px-0 bg-black text-white py-8 flex flex-col lg:flex-row items-center justify-end relative overflow-hidden">
      <div className="w-full lg:w-auto ">
        <TituloSeccion className={`text-idaclass4 lg:text-left lg:pr-4`}>
          Nuestros Partners<br/> en educacion
        </TituloSeccion>

        {/* <div className="-translate-x-[27px] lg:absolute bottom-10 left-7 w-full">
          <Image
            src={linea}
            alt="linea"
            className="absolute -translate-x-[8%] -translate-y-[55%] scale-[150%] "
          />
        </div> */}
      </div>
      <div className="w-full lg:w-2/3">
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
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-1 basis-[37%] sm:basis-[20%]">
                <div className="p-1">
                  <div className="rounded-xl bg-none">
                    <div className="flex aspect-square items-center justify-center p-6 relative bg-white rounded-xl">
                      <Image
                        src={`/partners${partner.src}`}
                        fill
                        className="object-contain object-center rounded-xl"
                        alt={partner.src}
                      />
                    </div>
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

export default PartnersEducativos;
