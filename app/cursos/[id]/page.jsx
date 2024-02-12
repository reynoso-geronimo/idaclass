import Link from "next/link";
import Image from "next/image";
import { YouTubeEmbed } from "@next/third-parties/google";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import PaginaCurso from "@/models/PaginaCurso";
import Curso from "@/models/Curso";

import {
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Construction,
  Monitor,
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
      <section className="bg-idaclass text-white">
        <div className="container py-2 lg:py-0 flex flex-col lg:flex-row justify-evenly gap-8">
          <div className="flex flex-col items-center lg:items-start  lg:w-1/2">
            <h1 className="text-2xl lg:text-5xl font-bold my-4 tracking-tight">
              {nombre && nombre}
            </h1>

            <p className="font-medium">{descripcion}</p>

            <p className="font-semibold text-sm my-4">
              USD$ {precio && precio}
            </p>
            <div className="mb-4 flex gap-4 w-full">
              <Button size="lg" className="rounded-lg  font-extrabold  w-1/2">
                Comprar
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg  font-extrabold border-black text-black w-1/2"
              >
                <Link href={`#contenido-curso`}>Ver Programa</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center lg:w-1/2">
            <div className=" w-full  max-w-2xl">
              <YouTubeEmbed
                videoid="Mgo24SP8-Xs"
                params="modestbranding=1&rel=0&showinfo=0&controls=0"
              />
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
      <section className="container flex flex-col items-stretch lg:flex-row gap-4">
        <article className="w-full lg:w-1/2 p-8 flex flex-col items-center border-2 border-idaclass rounded-xl ">
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
        <article className="mx-auto my-auto w-full lg:w-1/3">
          <div className="bg-idaclass4 w-full">
            <Image
              src={cert1}
              alt="certificado"
              className="rounded-3xl p-2 mx-auto"
            />
          </div>
          {/* <div>
            <Image
              src={cert2}
              alt="certificado"
              className="shadow-2xl border-2 border-slate-400 "
            />
          </div> */}
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
        <div className="container flex flex-col items-stretch lg:flex-row gap-4">
          {
            <Accordion type="single" collapsible className="w-full lg:w-1/2">
              {JSON.parse(modulos).Modulos.map((modulo, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="font-bold text-sm md:text-lg bg-gray-300 text-left px-4 ">
                    Modulo: {index + 1}
                  </AccordionTrigger>
                  <AccordionContent className="font-semibold text-sm p-4  bg-gray-200">
                    {modulo}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          }
          <div className="mx-auto w-full lg:w-1/3 font-semibold flex flex-col justify-between border bg-idaclass rounded-xl p-4">
            <Badge className="text-xl font-bold m-4 justify-center bg-indigo-900  outline outline-2 outline-offset-4">
              Modulo especial: SkillClass
            </Badge>
            <div className="text-white flex flex-1 flex-col justify-around">
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
      <section >
          <h3 className="text-center text-lg lg:text-xl font-bold m-4 underline decoration-idaclass decoration-4 underline-offset-8">
            Perfil del egresado
          </h3>
        <article className="container w-full lg:w-1/3">
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly shadow-2xl p-14 rounded-3xl shadow-idaclass">
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
        <h1 className="text-center font-bold text-xl uppercase py-12">
          Elige la modalidad que mas se adapte a ti
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-12 mb-12">
          <TarjetaModalidad />
          <TarjetaModalidad />
          <TarjetaModalidad />
        </div>
      </section>
    </main>
  );
};

export default CursoPage;
