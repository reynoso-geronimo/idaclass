import Link from "next/link";
import Introvideo from "@/components/ui/introvideo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" py-8 lg:py-12">
      <div className="lg:hidden container px-0">
        <h2 className="max-w-sm mx-auto px-2 pb-2 text-center text-4xl font-bold tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
          <span className="text-idaclass4">Estudia, trabaja y emprende </span>{" "}
          en el mundo del Sport Fitness.
        </h2>
        <h3 className="mx-auto max-w-lg px-2 text-pretty  text-center">
          Transforma tu vida y alcanza el éxito como entrenador, con IdaClass.
        </h3>
        <div className="flex justify-center w-full">
          <Button
            size="lg"
            className="rounded-2xl m-4 font-bold w-48 h-10"
            asChild
          >
            <Link href="#Cursos">Ver todos los cursos</Link>
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <Introvideo />
        </div>
        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}

        <div className="w-full relative ">
          <Image
            src={`/home/HeaderMobile.png`}
            alt="Bienvenido"
            width={500}
            height={500}
            priority={true}
            sizes="100vw"
            className="object-contain mx-auto"
          />
        </div>
      </div>

      <div className="hidden lg:flex  mb-4 gap-4 container px-0 overflow-hidden">
        <div className="w-2/5 text-center flex flex-col justify-around items-center mx-16 pt-16 ">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000 ">
            <span className="text-idaclass4">Estudia, trabaja <br /> y emprende </span>
            en el mundo del <br /> Sport Fitness.
          </h2>
          <h2 className="text-xl xl:text-2xl max-w-[768px] mb-4">
            Transforma tu vida y alcanza el éxito como entrenador, con IdaClass.
          </h2>
          <Button size="lg" className="rounded-2xl font-bold w-48 h-10" asChild>
            <Link href="#Cursos">Ver todos los cursos</Link>
          </Button>
          <div className=" w-48 flex justify-center font-bold h-10">
            <Introvideo />
          </div>
        </div>

        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}
        <div className="w-3/5 z-10 aspect-video relative">
          <Image
            src={`/home/HeaderWeb.png`}
            alt="Bienvenido"
            fill
            priority={true}
            sizes="50vw"
            className=" object-contain"
          />
        </div>
      </div>
      {/* <div className="text-xl font-bold text-center container">
        IdaClass junto a empresas destacadas del Sport Fitness de LATAM.
      </div>
      <Partners />
      <Separator className=" bg-gray-200" /> */}
    </div>
  );
};

export default Hero;
