"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import TituloSeccion from "@/components/ui/titulo-seccion";

const CertificacionCursoFormacion = ({ nombre }) => {
  return (
    <section className="container flex flex-col items-center justify-center py-8 bg-gray-100 lg:flex-row lg:gap-4">
      <div className="w-full lg:w-[320px]">
        <TituloSeccion className="max-w-xs px-0 mb-1 font-black max-lg:text-2xl lg:text-left lg:ml-0">
          Certifica tus Conocimientos
        </TituloSeccion>
        <h3 className="mb-4 text-lg font-bold text-center lg:text-left lg:text-xl text-idaclass4">
          Accede a la doble <br className="max-lg:hidden" /> titulación
        </h3>
      </div>
      <div className="relative w-full">
        <Carousel
          className="w-[100%]"
          opts={{
            align: "center",
            loop: true,
            watchDrag: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="">
           {/*  <CarouselItem className="max-sm:basis-[260px] basis-[320px] xl:basis-1/3">
              <div className="">
                <div className="flex flex-col justify-end gap-2 w-auto max-[20rem] h-[180px] py-4 max-sm:px-3 px-6 bg-gradient-to-t from-[#3A5DAE] to-[#1D2F57] rounded-3xl text-white relative">
                  <Image
                    src={"/cursosFormacion/Ribbon.svg"}
                    height={50}
                    width={50}
                    alt="certificado"
                    className="absolute top-6 right-6"
                  />
                  <div className="font-medium lg:text-xl">
                    Certificado <br /> de Extensión <br /> Universitaria IUYMCA
                  </div>
            
                  <Dialog>
                    <DialogTrigger className="font-bold text-left max-lg:text-sm text-idaclass3">
                      VER CERTIFICADO
                    </DialogTrigger>
                    <DialogContent className="aspect-video bg-opacity-45 bg-black border-none backdrop-blur-md w-[60rem] max-w-[90vw]">
                      <DialogDescription>
                        <Image
                          src={`/cursosFormacion/cursos/diploma-extension/${nombre}.svg`}
                          alt="certificado"
                          fill
                          className="py-6"
                        />
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CarouselItem> */}
            <CarouselItem className="max-sm:basis-[260px] basis-[320px] xl:basis-1/3">
              <div className="">
                <div className="flex flex-col justify-end gap-2 w-auto max-[20rem] h-[180px] py-4 max-sm:px-3 px-6 bg-gradient-to-t from-[#3A5DAE] to-[#1D2F57] rounded-3xl text-white relative">
                  <Image
                    src={"/cursosFormacion/Ribbon.svg"}
                    height={50}
                    width={50}
                    alt="certificado"
                    className="absolute top-6 right-6"
                  />
                  <span className="font-medium lg:text-xl ">
                    Certificado <br /> IdaClass con <br /> autenticación QR
                  </span>
                  {/* MODAL TRIGGER */}
                  <Dialog>
                    <DialogTrigger className="font-bold text-left max-lg:text-sm text-idaclass3">
                      VER CERTIFICADO
                    </DialogTrigger>
                    <DialogContent className="aspect-video bg-opacity-45 bg-black border-none backdrop-blur-md w-[60rem] max-w-[90vw]">
                      <DialogDescription>
                        <Image
                          src={`/cursosFormacion/cursos/diploma-ida/${nombre}.svg`}
                          alt="certificado"
                          fill
                          className="py-6"
                        />
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="max-sm:basis-[260px] basis-[320px] xl:basis-1/3">
              <div className="">
                <div className="flex flex-col justify-end gap-2 w-auto max-[20rem] h-[180px] py-4 max-sm:px-3 px-6 bg-gradient-to-t from-[#3A5DAE] to-[#1D2F57] rounded-3xl text-white relative">
                  <Image
                    src={"/cursosFormacion/Ribbon.svg"}
                    height={50}
                    width={50}
                    alt="certificado"
                    className="absolute top-6 right-6"
                  />
                  <span className="font-medium lg:text-xl ">
                    Extra Certificado de <br /> 4 especializaciones <br />
                  </span>
                  {/* MODAL TRIGGER */}
                  <Dialog>
                    <DialogTrigger className="font-bold text-left max-lg:text-sm text-idaclass3">
                      VER CERTIFICADO
                    </DialogTrigger>
                    <DialogContent className="aspect-video bg-opacity-45 bg-black border-none backdrop-blur-md w-[60rem] max-w-[90vw]">
                      <DialogDescription>
                        <Image
                          src={`/cursosFormacion/cursos/diploma-extracertificacion/${nombre}.svg`}
                          alt="certificado"
                          fill
                          className="py-6"
                        />
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default CertificacionCursoFormacion;
