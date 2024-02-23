import Link from "next/link";
import Introvideo from "@/components/ui/introvideo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" pt-8 lg:py-12">
      <div className="lg:hidden container px-0">
        <h2 className="max-w-sm mx-auto px-2 pb-2 text-center text-4xl font-bold tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
          Unete a la{" "}
          <span className="text-idaclass"> revolucion educativa</span> Sport
          Fitness
        </h2>
        <h3 className="mx-auto max-w-lg px-2 font-semibold text-pretty  text-center">
          Despierta tu potencial, conviertete en un profesional con nuestros
          cursos.
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
        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}

        <div className="flex aspect-square relative">
          <Image src={`/home/IdaClass Web Img 1.1.jpg`} alt="Bienvenido" fill  className="object-contain" />
        </div>

        <div className="w-full flex justify-center py-4">
          <Introvideo />
        </div>
      </div>

      <div className="hidden lg:block container px-0 overflow-hidden">
        <div className="flex mb-4 gap-4">
          <div className="w-2/5 text-center flex flex-col justify-around items-center mx-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl  font-extrabold mb-4 tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
              Unete a la
              <span className="text-idaclass"> revolucion educativa</span> Sport
              Fitness
            </h2>
            <h2 className="text-lg xl:text-xl font-semibold max-w-[768px] mb-4">
              Despierta tu potencial, conviertete en un profesional con nuestros
              cursos.
            </h2>
            <Button
              size="lg"
              className="rounded-2xl font-bold w-48 h-10"
              asChild
            >
              <Link href="/asesorate">Ver todos los cursos</Link>
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
              style={{objectFit:"contain"}}
              className="scale-125 translate-x-8"
            />
          </div>
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
