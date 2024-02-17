"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Profesional from "./ui/profesional";
import { profesionales } from "@/lib/constants";
import TituloSeccion from "@/components/ui/titulo-seccion";


const arrayLength = profesionales.length;

const tercio = Math.floor(arrayLength / 3);

const primerTercio = profesionales.slice(0, tercio);
const segundoTercio = profesionales.slice(tercio, tercio * 2); 
const tercertercio = profesionales.slice(tercio * 2);


const EquipoProfesional = () => {
  return (
    <section  className="container w-full lg:w-1/2">
      <TituloSeccion className={``}>Nuestro equipo de trabajo</TituloSeccion>
      <div className=" flex justify-center mt-2">
      <div  className="w-1/3">
        <Carousel
          opts={{
            align: "end",
            loop: true,
            duration: 5000,
            watchDrag: false,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction:false
            }),
          ]}
          className="mx-1"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            {primerTercio.map((profesional, index) => (
              <CarouselItem key={index} className={`pt-1 basis-1/6`}>
                <div className="p-1h-[100px]">
                  <Profesional profesional={profesional}/>
          
                  
                </div>
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
            duration: 5000,
            watchDrag: false,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction:false,
              
            }),
          ]}
          className="mx-1"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            {segundoTercio.map((profesional, index) => (
              <CarouselItem key={index} className={`pt-1 basis-1/6`}>
                <div className="p-1h-[100px]">
                  <Profesional rotar={true} profesional={profesional}/>
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* SEGUNDO CARRUESEL */}

      <div className="w-1/3">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            duration: 6500,
            watchDrag: false,
          }}
          orientation="vertical"
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction:false,
              
            }),
          ]}
          className="mx-1"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            {tercertercio.map((profesional, index) => (
              <CarouselItem key={index} className={`pt-1 basis-1/6`}>
                <div className="p-1h-[100px]">
                  <Profesional profesional={profesional}/>
                
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* TERCER CARRUSEL */}
      </div>
    </section>
  );
};

export default EquipoProfesional;
