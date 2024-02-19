import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Introvideo from "./introvideo";
import Partners from "./ui/partners";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className=" pt-8 lg:py-12">
      <div className="lg:hidden container">
        <h2 className="max-w-sm mx-auto px-2 pb-2 text-center text-4xl font-bold tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
          Unete a la{" "}
          <span className="text-idaclass"> revolucion educativa</span> Sport
          Fitness
        </h2>
        <h3 className="mx-auto max-w-lg px-2 text-base font-semibold text-center">
          Transforma tu pasion, despierta tu potencial, conviertete en un
          profesional con nuestros cursos.
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

        <Card className="border-none">
          <CardContent className="flex aspect-video items-center justify-center p-6 bg-black">
            <span className="text-2xl font-semibold text-white">Imagen</span>
          </CardContent>
        </Card>

        <div className="w-full flex justify-center py-4">
          <Introvideo />
        </div>
      </div>

      <div className="hidden lg:block container">
        <div className="flex mb-4 gap-4">
          <div className="w-1/2 text-center flex flex-col justify-around items-center mx-16">
            <h2 className="text-5xl xl:text-6xl  font-extrabold mb-4 tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
              Unete a la
              <span className="text-idaclass"> revolucion educativa</span> Sport
              Fitness
            </h2>
            <h2 className="text-lg xl:text-xl font-semibold max-w-[768px] mb-4">
              Transforma tu pasion, despierta tu potencial, conviertete en un
              profesional con nuestros cursos.
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
          <Card className="w-1/2 z-10 border-none flex items-center justify-center">
            <CardContent className="w-full flex aspect-video items-center justify-center p-6 bg-black">
              <span className="text-2xl font-semibold text-white">Imagen</span>
            </CardContent>
          </Card>
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
