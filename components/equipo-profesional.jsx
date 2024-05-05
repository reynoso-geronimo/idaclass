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
import lineaA from "../public/equipo-profesional/LineaA.svg";
import lineaB from "../public/equipo-profesional/LineaB.svg";
import Image from "next/image";
const EquipoProfesional = ({
  titulo = " Conoce al equipo",
  titulo2 = "que te guiara al éxito",
  titulo2Class = "",
  titulo3,
}) => {
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
    <section className="container px-0 lg:px-0 bg-gradient-to-b lg:bg-gradient-to-l from-[#3A5DAE] from-0% to-[#12182D] text-white  gap-4 lg:gap-12 flex flex-col-reverse lg:flex-row-reverse items-center justify-end relative overflow-hidden">
      <div className="w-full lg:w-1/2 lg:py-12 px-8 lg:px-0">
        <Carousel className="w-full z-10 relative max-lg:mb-6" opts={{align: "start",loop: true,}} plugins={[Autoplay({delay: 3000,})]}>
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
      <div className="w-full lg:w-1/2 text-center flex flex-col justify-end lg:justify-start items-start relative max-lg:overflow-hidden">
      <Image src={lineaA} alt="" className="absolute left-0 -top-10 max-lg:hidden"/>
        <h2 className="font-black text-2xl lg:text-4xl w-full lg:max-w-md z-10 p-8 max-lg:pb-0 text-center lg:text-left">{titulo}<br/><span className={titulo2Class}>{titulo2}</span><br/>{titulo3}</h2>
        <Image src={lineaB} alt="" className="absolute left-0 bottom-0 object-right max-lg:hidden scale-125"/>
      </div>
    </section>
  );
};

export default EquipoProfesional;
