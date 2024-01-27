import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Introvideo from "./introvideo";
import Partners from "./ui/partners";

const Hero = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 pt-8 lg:pt-12">
      <div className="lg:hidden">
        <h2 className="text-3xl md:text-5xl font-extrabold max-w-[340px] md:max-w-[600px]  mb-4 mx-4 text-indigo-950 tracking-tighter animate-in slide-in-from-right fade-in-0 duration-1000">
          Unete a la <span className="text-blue-700">revolucion educativa</span>{" "}
          Sport Fitness
        </h2>
        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}

        <div className="bg-black w-fuill aspect-video mb-4 z-10">
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

        <h2 className="mt-4 mx-8 text-center text-md text-blue-700 font-semibold leading-6 tracking-[4px] ">
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
        <div className="flex mb-4">
          <div className="w-2/5 text-center flex flex-col justify-around items-center mx-16">
            <h2 className="text-6xl font-extrabold mb-4 mx-4 text-indigo-950 tracking-tighter animate-in slide-in-from-right fade-in-25 duration-1000">
              Unete a la{" "}
              <span className="text-blue-700">revolucion educativa</span> Sport
              Fitness
            </h2>
            <h2 className="text-lg text-blue-700 font-semibold tracking-[3px]	 max-w-[768px]">
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
          <div className="w-1/2 gap-2 flex flex-col">
            {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}
            <div className="bg-black w-fuill aspect-video z-10">
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

            <Introvideo />
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
