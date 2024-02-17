import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Introvideo from "./introvideo";
import Partners from "./ui/partners";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 pt-8 lg:py-12">
      <div className="lg:hidden">
        <h2 className="px-2 text-center text-3xl font-bold animate-in slide-in-from-right fade-in-25 duration-1000">
          Unete a la revolucion educativa <br />
          <span className="relative before:absolute before:left-0 before:bottom-1.5 before:h-2.5 before:z-1 before:w-full before:bg-idaclass4">
            <span className="relative px-0.5">Sport Fitness</span>
          </span>
        </h2>
        <h3 className="px-2 text-base font-semibold text-center">
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

        <Card>
          <CardContent className="flex aspect-video items-center justify-center p-6 bg-black">
            <span className="text-2xl font-semibold text-white">Imagen</span>
          </CardContent>
        </Card>

        <div className="w-full flex justify-center py-4">
          <Introvideo />
        </div>
      </div>

      <div className="hidden lg:block container">
        <div className="flex mb-4 gap-8 ml-[15%]">
          <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold animate-in slide-in-from-right fade-in-25 duration-1000">
              Unete a la revolucion <br />
              educativa{" "}
              <span className="relative before:absolute before:left-0 before:bottom-1.5 before:h-2.5 before:z-1 before:w-full before:bg-idaclass4">
                <span className="relative px-0.5">Sport Fitness</span>
              </span>
            </h2>
            <h2 className="text-base font-semibold">
              Transforma tu pasion, despierta tu potencial,
              <br /> conviertete en un profesional con nuestros cursos.
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
          <Card className="w-1/2 z-10">
            <CardContent className="flex aspect-video items-center justify-center p-6 bg-black">
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
