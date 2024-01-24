"use client";
import EmblaCarousel from "../../../components/ui/EmblaCarousel";
import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Introvideo from "./introvideo";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const OPTIONS = { loop: true };
const images = [
  {
    src: "/neurociencia.webp",
    alt: "neurociencia del deporte",
  },
  {
    src: "/prepfisico.webp",
    alt: "preparador fisico",
  },
  // ...
  {
    src: "/nutriciondeportiva.webp",
    alt: "nutricion deportiva",
  },
  {
    src: "/funcional.webp",
    alt: "funcional",
  },
  {
    src: "/funcionalcrosshiit.webp",
    alt: "funcional cross hiit",
  },
  {
    src: "/instructormusculacion.webp",
    alt: "instructor musculacion",
  },
  {
    src: "/personaltrainer.webp",
    alt: "personal trainer",
  },
];
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
    src: "/LogoB2Peru.png",
    alt: "logo",
  },
  {
    src: "/NeurofitRosario.jpg",
    alt: "logo",
  },
];
const Hero = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 pt-16">
      <div className="lg:hidden">
        <h2 className="text-3xl md:text-5xl font-extrabold max-w-[340px] md:max-w-[600px]  mb-4 mx-4 text-indigo-950 tracking-tighter animate-in slide-in-from-right fade-in-0 duration-1000">
          Unete a la revolucion educativa Sport Fitness
        </h2>
        <EmblaCarousel slides={images} options={OPTIONS} />
        <h2 className="mt-12 mx-8 text-center text-md text-blue-700 font-medium leading-6 tracking-[4px] ">
          Transforma tu pasion, despierta tu potencial, conviertete en un
          profesional con nuestros cursos.
        </h2>
        <div className="flex justify-center w-full">
          <Button
            size="lg"
            className="rounded-xl m-10 font-bold w-48 h-14 border-4"
            asChild
          >
            <Link href="/cursos">Ver todos los cursos</Link>
          </Button>
        </div>
      </div>

      <div className="hidden lg:block 2xl:px-[10%]">
        <div className="flex">
          <div className="w-2/5 text-center flex flex-col justify-around items-center mx-16">
            <h2 className="text-6xl font-extrabold mb-4 mx-4 text-indigo-950 tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
              Unete a la{" "}
              <span className="text-blue-700">revolucion educativa</span> Sport
              Fitness
            </h2>
            <h2 className="text-lg text-blue-700 font-medium tracking-[3px]	 max-w-[768px]">
              Transforma tu pasion, despierta tu potencial, conviertete en un
              profesional con nuestros cursos.
            </h2>
            <Button
              size="lg"
              className="rounded-3xl m-10 font-bold w-48 h-14"
              asChild
            >
              <Link href="/cursos">Ver todos los cursos</Link>
            </Button>
          </div>
          <div className="w-1/2 relative">
            {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}
            <video
              autoPlay
              muted
              loop
              className="-z-10 object-cover hidden sm:block"
              playsInline
            >
              <source src="/videos/video(2160p).mp4" type="video/mp4" />
            </video>
            <div className="relative bottom-[70px]  lg:bottom-[10%] translate-x-[50%] right-[50%] h-0">
              <Introvideo />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl font-bold text-center container">
        Idaclass junto a empresas destacadas del Sport Fitness de LATAM.
      </div>
      <div className="container flex justify-center items-center h-40">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-4"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 sm:basis-1/6 md:basis-1/6"
              >
                <div>
                  <div className="flex aspect-square items-center justify-center px-2">
                    <Image
                      src={`/partners${partner.src}`}
                      width={120}
                      height={120}
                      alt="logo"
                      className="grayscale rounded-xl"
                    ></Image>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Separator className=" bg-gray-200" />
    </div>
  );
};

export default Hero;
