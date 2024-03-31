"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Dot } from "lucide-react";
import Image from "next/image";
import linea from "../../../../public/assets/Línea img 3.png";
import TituloSeccion from "@/components/ui/titulo-seccion";

const areas = [
  { src: `/certi/cert1.webp` },
  {
    src: `/certi/cert2.webp`,
  },
  { src: `/certi/SelloCalidad.png` },
  { src: `/empresasPartners/Logo_instituto-leyenda-red.png` },
];
const CertificacionCursoFormacion = () => {
  return (
    <section className="container bg-gray-100 flex flex-col lg:flex-row items-center justify-center py-8">
      <div className="w-full lg:w-1/3">
        <TituloSeccion className="max-w-xs max-lg:text-2xl font-black mb-1 lg:text-left lg:ml-0 px-0">
          Certifica tus Conocimientos
        </TituloSeccion>
        <h3 className="text-center lg:text-left font-bold text-lg lg:text-xl text-idaclass4 mb-4">
          Accede a la doble <br className="max-lg:hidden"/> titulación
        </h3>
      </div>
      <div className="w-full lg:w-2/3 relative">
        <Carousel
          className="w-[100%]"
          opts={{
            align: "center",
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
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="basis-2/3 lg:basis-1/3">
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center p-6 bg-gradient-to-t from-[#3A5DAE] to-[#1D2F57] rounded-3xl text-white">
                    <span className="text-4xl font-semibold">{index + 1}</span>
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

export default CertificacionCursoFormacion;
