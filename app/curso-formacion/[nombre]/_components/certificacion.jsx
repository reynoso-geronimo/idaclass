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

const areas = [
  { src: `/certi/cert1.webp` },
  {
    src: `/certi/cert2.webp`,
  },
  { src: `/certi/SelloCalidad.png` },
  { src: `/empresasPartners/Logo_instituto-leyenda-red.png` },
  
];
const Certificacion = () => {
  return (
    <section className="container lg:px-0 bg-black text-white py-8 gap-12 flex flex-col lg:flex-row items-center justify-center relative overflow-hidden">
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h2 className="font-semibold text-3xl lg:max-w-sm text-idaclass4">
          Certifica tus Conocimientos
        </h2>
        <p className="text-sm py-2 lg:max-w-sm">
          <span className="font-semibold text-base">
            Accede a la doble titulación
          </span>
          <br />
          <Dot className="stroke-white inline" />
          Certificado de Extensión Universitaria IUYMCA
          <br />
          <Dot className="stroke-white inline" />
          Certificado IdaClass con autenticación QR
          <br />
          <Dot className="stroke-white inline" />
          <span className="font-semibold decoration-white underline">
            Extra
          </span>{" "}
          Certificado de 4 especializaciones
        </p>
        <div className="-translate-x-[27px] lg:absolute bottom-10 left-7 w-full">
          <Image
            src={linea}
            alt="linea"
            className="absolute -translate-x-[8%] -translate-y-[55%] scale-[150%] "
          />
        </div>
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
              <CarouselItem key={index} className="pl-1 basis-[101%] last:bg-white last:px-4">
                <div className="rounded-xl bg-none p-1">
                  <div className="flex items-center justify-center relative h-52 rounded-xl ">
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

export default Certificacion;
