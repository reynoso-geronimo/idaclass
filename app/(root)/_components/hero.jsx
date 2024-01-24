"use client";
import EmblaCarousel from "../../../components/ui/EmblaCarousel";
import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Introvideo from "./introvideo";
import Partners from "./ui/partners";

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

const Hero = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 pt-16">
      <div className="lg:hidden">
        <h2 className="text-3xl md:text-5xl font-extrabold max-w-[340px] md:max-w-[600px]  mb-4 mx-4 text-indigo-950 tracking-tighter animate-in slide-in-from-right fade-in-0 duration-1000">
          Unete a la <span className="text-blue-700">revolucion educativa</span> Sport Fitness
        </h2>
        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}
        <video
              autoPlay
              muted
              loop
              className="-z-10 object-cover"
              playsInline
            >
              <source src="/videos/idaclass.mp4" type="video/mp4" />
            </video>
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
              className="-z-10 object-cover hidden sm:block rounded-md"
              playsInline
            >
              <source src="/videos/idaclass.mp4" type="video/mp4" />
            </video>
            <div className="relative bottom-[70px] lg:bottom-[10%] translate-x-[50%] right-[50%] h-0">
              <Introvideo />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl font-bold text-center container">
        Idaclass junto a empresas destacadas del Sport Fitness de LATAM.
      </div>
      <Partners />
      <Separator className=" bg-gray-200" />
    </div>
  );
};

export default Hero;
