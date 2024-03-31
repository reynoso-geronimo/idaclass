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
    <section className="container bg-gray-100">
      <div className="w-full lg:w-1/3 text-center lg:text-left ">
        <TituloSeccion className="max-w-xs max-lg:text-2xl font-black mb-1">
          Certifica tus Conocimientos
        </TituloSeccion>
        <h3 className="text-center font-bold text-lg text-idaclass4">Accede a la doble titulación</h3>
      </div>
      <div className="w-full lg:w-1/3 relative">
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
              <CarouselItem
                key={index}
                className="pl-1 basis-[100%] last:bg-white last:px-4"
              >
                <div className="rounded-xl bg-none p-1">
                  <div className="flex items-center justify-center relative h-52">
                    <Image
                      src={area.src}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw , 20vw"
                      className="object-scale-down rounded-xl"
                      alt={""}
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

export default CertificacionCursoFormacion;
