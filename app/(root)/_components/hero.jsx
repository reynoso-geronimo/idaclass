import Link from "next/link";
import Introvideo from "@/components/ui/introvideo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import linea from "../../../public/assets/Línea img 1.png";

const Hero = () => {
  return (
    <div className=" py-8 lg:py-12">
      <div className="lg:hidden container px-0">
        <h2 className="max-w-sm mx-auto px-2 pb-2 text-center text-4xl font-bold tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
          Únete a la{" "}
          <span className="text-idaclass4"> revolución educativa</span> Sport
          Fitness
        </h2>
        <h3 className="mx-auto max-w-lg px-2 text-pretty  text-center">
        Con nuestros cursos, innovamos combinando teoria  y práctica para potenciar tu éxito en emprendimiento y empleabilidad.
        </h3>
        <div className="flex justify-center w-full">
          <Button
            size="lg"
            className="rounded-2xl m-4 font-bold w-48 h-10"
            asChild
          >
            <Link href="/cursos">Ver todos los cursos</Link>
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <Introvideo />
        </div>
        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}

        <div className="max-w-2xl mx-auto aspect-square relative">
          <Image
            src={`/home/IdaClass Web Img 1.1.jpg`}
            alt="Bienvenido"
            fill
            priority={true}
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="w-full h-0 relative">
          <Image
            src={linea}
            alt="linea"
            className="scale-150 absolute -right-24 -top-32 sm:-top-40 z-10 "
          />
        </div>
      </div>

      <div className="hidden lg:flex  mb-4 gap-4 container px-0 overflow-hidden">
        <div className="w-2/5 text-center flex flex-col justify-around items-center mx-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
            Únete a la
            <span className="text-idaclass4"> revolución educativa</span> Sport
            Fitness
          </h2>
          <h2 className="text-lg xl:text-xl max-w-[768px] mb-4">
          Con nuestros cursos, innovamos combinando teoria  y práctica para potenciar tu éxito en emprendimiento y empleabilidad.
          </h2>
          <Button size="lg" className="rounded-2xl font-bold w-48 h-10" asChild>
            <Link href="/cursos">Ver todos los cursos</Link>
          </Button>
          <div className=" w-48 flex justify-center font-bold h-10">
            <Introvideo />
          </div>
        </div>

        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}
        <div className="w-3/5 z-10 aspect-video relative m-8">
          <Image
            src={`/home/IdaClass Web Img 1.2.jpg`}
            alt="Bienvenido"
            fill
            priority={true}
            sizes="50vw"
            style={{ objectFit: "contain" }}
            className="scale-125"
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
