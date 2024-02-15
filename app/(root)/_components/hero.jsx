import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Introvideo from "./introvideo";
import Partners from "./ui/partners";

const Hero = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 pt-8 lg:py-12">
      <div className="lg:hidden">
        <h2 className="text-3xl text-center md:text-5xl font-extrabold mb-4 mx-4 tracking-tighter animate-in slide-in-from-right fade-in-0 duration-1000">
          Unete a la <span className="text-idaclass">revolucion educativa</span>{" "}
          Sport Fitness
        </h2>
        <h2 className="mt-4 mx-8 text-center text-md font-semibold leading-6 text-xl tracking-wide">
          Transforma tu pasion, despierta tu potencial, conviertete en un
          profesional con nuestros cursos.
        </h2>
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

        <div className="bg-black aspect-video mb-4 z-10">
          <video
            autoPlay
            muted
            loop
            className="-z-10 object-cover aspect-video"
            playsInline
            preload={"auto"}
          >
            <source src="/videos/idaclass.mp4" type="video/mp4" />
          </video>
        </div>

        <Introvideo />
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
          <div className="w-1/2 gap-2 flex flex-col">
            {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}
            <div className="bg-black aspect-video z-10">
              <video
                autoPlay
                muted
                loop
                className=" object-cover hidden sm:block rounded-md "
                playsInline
                preload="auto"
              >
                <source src="/videos/idaclass.mp4" type="video/mp4" />
              </video>
            </div>
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
