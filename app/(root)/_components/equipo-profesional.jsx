"use client";
// import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { profesionales } from "@/lib/constants";
import Profesional from "./ui/profesional";
import linea from "../../../public/assets/Línea img 1.png";
import Image from "next/image";
const EquipoProfesional = () => {
  // const [direction, setDirection] = useState("horizontal");

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1024) {
  //       setDirection("vertical");
  //     } else {
  //       setDirection("horizontal");
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="container px-0 lg:px-0 bg-slate-900 text-white  gap-4 lg:gap-12 flex flex-col-reverse lg:flex-row items-center justify-end relative overflow-hidden">
      <div className="w-full lg:w-1/2 lg:py-12 px-8 lg:px-0">
        <Carousel
          className="w-full "
          opts={{
            align: "end",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1 lg:h-full ">
            {profesionales.map((profesional, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/8">
                <div className="p-1">
                  <Profesional profesional={profesional} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2 " />
        </Carousel>
      </div>
      <div className="w-full lg:w-1/2 text-center flex justify-end lg:justify-center items-center relative  max-lg:overflow-hidden max-lg:h-52">
        <div className="absolute left-[180px] top-[39%] max-lg:rotate-[-90deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.769"
            height="14.821"
            className="fill-idaclass scale-[1700%] opacity-50"
          >
            <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.769"
            height="14.821"
            className="fill-idaclass4 scale-[600%] -translate-x-6 translate-y-[7px]"
          >
            <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
          </svg>
        </div>

        <h2 className="font-semibold text-3xl lg:max-w-sm z-10 px-8">
          Conoce al equipo <br />
          que te guiara al éxito
        </h2>
        <div className="absolute w-full">
          <Image
            src={linea}
            alt="linea"
            className="absolute -right-44 lg:-right-10 -top-10 scale-150"
          />
        </div>
      </div>
    </section>
  );
};

export default EquipoProfesional;
