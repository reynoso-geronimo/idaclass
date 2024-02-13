import Link from "next/link";
import Image from "next/image";
import { YouTubeEmbed } from "@next/third-parties/google";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PaginaCurso from "@/models/PaginaCurso";
import Curso from "@/models/Curso";

import {
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Construction,
  Monitor,
  Phone,
  Plus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import TarjetaModalidad from "./_components/tarjeta-modalidad";

import cert1 from "../../../public/certi/cert1.webp";
import cert2 from "../../../public/certi/cert2.webp";
import Introvideo from "@/app/(root)/_components/introvideo";
import TituloSeccion from "@/components/ui/titulo-seccion";
import CasoExito from "@/app/(root)/_components/ui/caso-exito";

const CursoPage = async ({ params }) => {
  const [curso, paginaCurso] = await Promise.all([
    Curso.findByPk(params.id),
    PaginaCurso.findOne({ where: { curso: params.id } }),
  ]);
  if (!curso) {
    return <div>Curso no encontrado</div>;
  }
  if (!paginaCurso) {
    return (
      <div className="flex flex-col items-center">
        <Construction size={72} className=" rounded-full" fill="#FFFF00" />
        <h1 className="text-3xl font-bold">Sitio bajo construccion</h1>
      </div>
    );
  }

  const {
    nombre,
    descripcion,
    imagen,
    precio,
    modalidad,
    duracion,
    dedicacion,
  } = curso.toJSON();
  const {
    descripcionuno,
    descripciondos,
    descripciontres,
    check_1,
    check_2,
    check_3,
    check_4,
    modulos,
  } = paginaCurso.toJSON();

  return (
    <main className="flex flex-col gap-6">
      <div className="text-center bg-emerald-300 py-4">Promocion </div>
      <section className="bg-idaclass text-white">
        <div className="container py-12  flex flex-col lg:flex-row justify-evenly gap-8">
          <div className="flex flex-col items-center lg:items-start  lg:w-1/2">
            <h1 className="text-2xl lg:text-5xl font-bold my-4 tracking-tight">
              {nombre && nombre}
            </h1>

            <p className="font-medium">{descripcion}</p>

            <div className="font-semibold text-sm my-4">
              <Badge className={`bg-red-500`}>Online</Badge>{" "}
              <Badge>On Demand</Badge>
            </div>

            <Button size="lg" className="rounded-lg  font-extrabold  w-1/2">
              Inscribirme ahora
            </Button>
          </div>

          <div className="flex justify-center items-center lg:w-1/2">
            <div className=" w-full max-w-2xl">
              <YouTubeEmbed
                videoid="Mgo24SP8-Xs"
                params="modestbranding=1&rel=0&showinfo=0&controls=0"
              />
              <div className="mt-12">
                <Introvideo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator />
      <section className="container flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
        <div className="text-white-1 rounded lg:w-1/2">
          <Badge
            variant={"outline"}
            className="text-base font-bold justify-center border-black h-8 mb-8"
          >
            Acerca de este curso
          </Badge>
          <Separator />
          <ul className="text-sm font-semibold flex flex-col gap-2 mb-8">
            <li>{descripcionuno && descripcionuno}</li>
            <li>{descripciondos && descripciondos}</li>
            <li>{descripciontres && descripciontres}</li>
          </ul>
        </div>

        <ul className="flex flex-col font-bold lg:text-2xl gap-4 lg:w-1/3">
          <li className="flex items-center gap-2">
            <Calendar className="text-idaclass" strokeWidth={3} />
            Duracion: {duracion}
          </li>
          <li className="flex items-center gap-2">
            <Monitor className="text-idaclass" strokeWidth={3} />
            Modalidad: {modalidad}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="text-idaclass" strokeWidth={3} />
            Dedicacion: {dedicacion && dedicacion}
          </li>
          <li className="flex items-center gap-2">
            <Check
              size={24}
              strokeWidth={4}
              className="rounded-full bg-idaclass4 text-white p-0.5"
            />
            {check_4}
          </li>
        </ul>
      </section>
      <Separator />
      <section className="container flex flex-col items-stretch lg:flex-row gap-4 border-2 bg-idaclassGray2 border-idaclass rounded-xl">
        <article className="w-full lg:w-1/2 p-8 flex flex-col items-center  ">
          <Badge className="text-lg lg:text-xl font-semibold m-4 justify-center outline outline-2 outline-primary outline-offset-4">
            Certifica tus conocimientos
          </Badge>

          <p className="my-auto py-2 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            consequatur quae, error facilis sapiente impedit ut. Amet velit ab
            illo dignissimos animi, dolorem impedit optio? Est inventore quos
            obcaecati commodi.
          </p>
        </article>
        <article className="flex mx-auto my-auto w-full lg:w-2/3 gap-2">
          <div className="w-full">
            <Image src={cert1} alt="certificado" className=" mx-auto" />
          </div>
          <div className="w-full">
            <Image src={cert2} alt="certificado" className="mx-auto" />
          </div>
        </article>
      </section>
      <Separator />
      <section className="bg-gradient-to-br from-gray-100 via-gray-150 to-gray-100">
        <h2
          className="text-2xl lg:text-4xl font-bold my-4 text-center"
          id="contenido-curso"
        >
          Contenido del curso
        </h2>
        <p className="text-center">Subtitulo</p>
        <div className="container flex flex-col items-center md:flex-row gap-4">
          {
            <Accordion type="single" collapsible className="w-full md:w-1/2">
              {Array.from({ length: 4 }).map((_, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="font-bold text-sm md:text-2xl  text-left px-4 ">
                    Modulo: {index + 1}
                  </AccordionTrigger>
                  <AccordionContent className="font-semibold text-sm p-4  bg-gray-200">
                    Modulo
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          }
          <Plus size={72} />
          <div className="mx-auto w-full md:w-1/3 font-medium flex flex-col justify-between border bg-idaclass rounded-xl p-4">
            <Badge className="text-lg text-center font-semibold m-2 justify-center bg-indigo-900  outline outline-2 outline-offset-4">
              Modulo especial: SkillClass
            </Badge>
            <div className="text-white flex flex-1 flex-col justify-around items-center">
              <p className="flex items-center">
                <ChevronRight className="text-white shrink-0" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="flex items-center">
                <ChevronRight className="text-white shrink-0" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="flex items-center">
                <ChevronRight className="text-white shrink-0" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="flex items-center">
                <ChevronRight className="text-white shrink-0" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Separator />
      <section className="container">
        <h2 className="text-2xl lg:text-4xl font-bold my-4 text-center">
          Trainers educativos que te acompañaran
        </h2>
        <article className="flex flex-wrap justify-around">
          <div className="bg-black text-white text-xl font-bold p-4">
            Trainer
          </div>
          <div className="bg-black text-white text-xl font-bold p-4">
            Trainer
          </div>
          <div className="bg-black text-white text-xl font-bold p-4">
            Trainer
          </div>
          <div className="bg-black text-white text-xl font-bold p-4">
            Trainer
          </div>
          <div className="bg-black text-white text-xl font-bold p-4">
            Trainer
          </div>
        </article>
      </section>
      <Separator />
      <section className="flex flex-col md:flex-row justify-center gap-4 container">
        <article className="w-full">
          <h3 className="text-center text-lg lg:text-xl font-bold m-4 underline decoration-idaclass decoration-4 underline-offset-8">
            Bono extra
          </h3>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly shadow-2xl p-14 rounded-3xl border border-idaclassGray2">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
          </ul>
        </article>

        <article className="w-full">
          <h3 className="text-center text-lg lg:text-xl font-bold m-4 underline decoration-idaclass decoration-4 underline-offset-8">
            Potencia tu empleabilidad o emprende
          </h3>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly shadow-2xl p-14 rounded-3xl border border-idaclassGray2">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
          </ul>
        </article>
      </section>
      {/* modalidades y pago */}
      <Separator />
      <section>
        <h1 className="text-center font-bold text-xl my-4 container">
          Elige la modalidad que mas se adapte a ti
        </h1>

        <Carousel className="mx-auto max-w-[270px] sm:max-w-[70vw] ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-1/2 lg:basis-1/3"
              >
                <TarjetaModalidad />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="lg:hidden">
            <CarouselPrevious className="bg-idaclass4 text-white hover:bg-idaclass3 -left-4 sm:-left-12 h-10 w-10" />
            <CarouselNext className="bg-idaclass4 text-white  hover:bg-idaclass3 -right-4 sm:-right-12 h-10 w-10" />
          </div>
        </Carousel>
      </section>

      <section className="container flex flex-col items-stretch sm:flex-row gap-4 border-2 bg-idaclassGray2 border-idaclass rounded-xl">
        <article className="w-full lg:w-1/2 p-8 flex flex-col items-start  ">
          <TituloSeccion className="text-left p-0 m-0">
            Necesitas ayuda o tienes alguna pregunta?
          </TituloSeccion>
          <p className="font-bold my-4">
            Nuestros especialistas estan disponibles para escucharte y despejar
            todas tus dudas
          </p>
          <Button size="lg" className="bg-green-500 px-4">
            <div className="flex  items-center gap-4">
              <svg viewBox="0 0 32 32" className="h-8 w-8">
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fillRule="evenodd"
                  fill="white"
                ></path>
              </svg>
              Hablanos por Whatsapp
            </div>
          </Button>
        </article>
        <article className="w-full flex items-center mx-auto lg:w-1/3 mb-4 lg:mb-0">
          
            <Image src={cert2} alt="certificado" className="mx-auto" />
    
        </article>
      </section>
      <section className="container">
        <TituloSeccion className={""}>
          Casos de exito de nuestros estudiantes
        </TituloSeccion>
        <div className="grid md:grid-cols-2 gap-4">
          <CasoExito />
          <CasoExito />
          <CasoExito />
          <CasoExito />
        </div>
      </section>
    </main>
  );
};

export default CursoPage;
