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
    <section className="container bg-gray-100 flex flex-col lg:flex-row lg:gap-4 items-center justify-center py-8">
      <div className="w-full lg:w-[320px]">
        <TituloSeccion className="max-w-xs max-lg:text-2xl font-black mb-1 lg:text-left lg:ml-0 px-0">
          Certifica tus Conocimientos
        </TituloSeccion>
        <h3 className="text-center lg:text-left font-bold text-lg lg:text-xl text-idaclass4 mb-4">
          Accede a la doble <br className="max-lg:hidden" /> titulación
        </h3>
      </div>
      <div className="w-full relative">
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
                  <div className="lg:text-xl font-medium">
                    Certificado <br /> de Extensión <br /> Universitaria IUYMCA
                  </div>
                  {/* MODAL TRIGGER */}

                  <Dialog>
                    <DialogTrigger className="max-lg:text-sm text-idaclass3 font-bold text-left">
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
                  <span className="lg:text-xl font-medium ">
                    Certificado <br /> IdaClass con <br /> autenticación QR
                  </span>
                  {/* MODAL TRIGGER */}
                  <Dialog>
                    <DialogTrigger className="max-lg:text-sm text-idaclass3 font-bold text-left">
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
                  <span className="lg:text-xl font-medium ">
                    Extra Certificado de <br /> 4 especializaciones <br />
                  </span>
                  {/* MODAL TRIGGER */}
                  <Dialog>
                    <DialogTrigger className="max-lg:text-sm text-idaclass3 font-bold text-left">
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
