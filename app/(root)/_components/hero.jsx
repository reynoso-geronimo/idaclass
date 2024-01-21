import EmblaCarousel from "../../../components/ui/EmblaCarousel";
import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

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
          Unete a la revolucion educativa Sport Fitness
        </h2>
        <EmblaCarousel slides={images} options={OPTIONS} />
        <h2 className="mt-12 mx-8 text-center text-md uppercase text-blue-700 font-medium leading-6 tracking-[4px] ">
          Transforma tu Pasion,Despierta tu Potencial, Conviertete en un lider
          dentro de la industria.
        </h2>
        <div className="flex justify-center w-full">
          <Button
            size="lg"
            className="rounded-lg m-10 font-bold w-48 h-14 border-idaclass border-4"
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
              Unete a la revolucion educativa Sport Fitness
            </h2>
            <h2 className="text-lg uppercase text-blue-700 font-medium tracking-[3px]	 max-w-[768px]">
              Transforma tu Pasion,Despierta tu Potencial, Conviertete en un
              lider dentro de la industria.
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
            <EmblaCarousel slides={images} options={OPTIONS} />
            
          </div>
        </div>
        <Separator className="my-4 bg-gray-200" />
      </div>
    </div>
  );
};

export default Hero;
