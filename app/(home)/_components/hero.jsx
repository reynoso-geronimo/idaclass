import Link from "next/link";
import Introvideo from "@/components/ui/introvideo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" py-8 lg:py-12">
      <div className="lg:hidden container px-0">
        <h2 className="max-w-sm mx-auto px-2 pb-2 text-center text-4xl font-bold tracking-tighter leading-tight">
          Convertite en <span className="inline-block px-3 pb-1 bg-idaclass4 text-white rounded-3xl">Personal trainer</span>,
          aprendé lo último en entrenamiento
        </h2>
        <h3 className="mx-auto max-w-lg px-2 text-pretty  text-center">
          Aprendé a diseñar entrenamientos, trabajar con personas, en gimnasios o con tus propios alumnos. Preparate para
          convertir tus conocimientos en oportunidades reales.
        </h3>
        <div className="flex justify-center w-full">
          <Button size="lg" className="rounded-2xl m-4 font-bold w-48 h-10" asChild>
            <Link href="#programa">Conocé el programa</Link>
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <Introvideo texto="Conoce nuestro método" />
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
            className="object-contain mx-auto px-8"
          />
        </div>
      </div>

      <div className="hidden lg:flex  mb-4 gap-4 container px-0 overflow-hidden">
        <div className="w-1/2 flex flex-col justify-around items-start mx-16 pt-16 ">
          <h2 className="w-full text-5xl font-extrabold mb-4 tracking-tighter leading-tight">
            Convertite en <span className="inline-block px-4 pb-1 bg-idaclass4 text-white rounded-3xl">Personal trainer</span>,
            aprendé lo último en entrenamiento
          </h2>
          <h2 className="text-xl xl:text-2xl max-w-[768px] mb-4 text-balance">
            Aprendé a diseñar entrenamientos, trabajar con personas, en gimnasios o con tus propios alumnos. Preparate para
            convertir tus conocimientos en oportunidades reales.
          </h2>
          <Button size="lg" className="rounded-2xl font-bold w-64 h-10" asChild>
            <Link href="#programa">Conocé el programa</Link>
          </Button>
          <div className=" w-64 flex justify-start font-bold h-10">
            <Introvideo texto="Conoce nuestro método" />
          </div>
        </div>

        {/* <EmblaCarousel slides={images} options={OPTIONS} /> */}
        <div className="w-1/2 z-10 aspect-video relative">
          <Image
            src={`/home/HeaderWeb.png`}
            alt="Bienvenido"
            fill
            priority={true}
            sizes="50vw"
            className=" object-contain scale-110 -translate-y-8"
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
