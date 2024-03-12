import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowUp,
  BookOpenCheck,
  Calendar,
  ChevronRight,
  Clock,
  Construction,
  Dot,
  MapPin,
  Monitor,
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

import Introvideo from "@/components/ui/introvideo";
import TituloSeccion from "@/components/ui/titulo-seccion";

import CursosFormacion from "@/models/CursoFormacion";
import EquipoProfesional from "@/app/(root)/_components/equipo-profesional";

import CasosExito from "@/app/(root)/_components/casos-exito";
import linea from "../../../public/assets/Línea img 4.png";
import CertificacionCursoFormacion from "./_components/certificacionCursoFormacion";
import Link from "next/link";
import Beca from "@/app/(root)/_components/beca";
const contenido = [
  {
    titulo: "Habilidades para el éxito profesional",
    unidades: [
      {
        titulo: "Marketing y ventas",
        contenido: [
          "Proceso de comunicación",
          "Comunicación asertiva",
          "Empatía para comunicar",
        ],
      },
      {
        titulo: "Comunicación asertiva",
        contenido: [
          "El mensaje verbal: estructura",
          "Copywriting y Storytelling: diferencias y consejos",
        ],
      },
      {
        titulo: "Liderazgo",
        contenido: [
          "8 pasos para armar tu propia historia",
          "El Viaje del Héroe",
          "Método Self-Us-Now",
        ],
      },
      {
        titulo: "Herramientas digitales",
        contenido: [
          "Ejercicio de FODA para tu marca personal",
          "El autorretrato para una comunicación efectiva",
        ],
      },
    ],
  },
];

const CursoPage = async ({ params }) => {
  const nombreParseado = params.nombre.replace(/%20/g, " ");
  const curso = await CursosFormacion.findOne({
    where: { nombre: nombreParseado },
  });
  if (!curso) {
    return <div>Curso no encontrado</div>;
  }

  const {
    nombre,
    descripcion,
    imagen,
    precio,
    frecuencia,
    videoid,
    acerca,
    modalidades,
    duracion,
    dedicacion,
  } = curso.toJSON();

  return (
    <main className="flex flex-col gap-6">
      {/* <div className="text-center bg-emerald-300 py-4">Promocion </div> */}
      <section className="bg-idaclass text-white">
        <div className="container py-12  flex flex-col lg:flex-row justify-evenly gap-8">
          <div className="flex flex-col items-center lg:items-start  lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold my-4 tracking-tight">
              {nombre}
            </h1>

            <p className="font-medium">{descripcion}</p>

            <div className="font-semibold text-sm my-4">
              <Badge className={`bg-red-500`}>{modalidades}</Badge>
            </div>

            <Button size="lg" className="rounded-lg  font-extrabold  w-1/2">
              Inscribirme ahora
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center lg:w-1/2">
            <div className=" w-full max-w-2xl bg-black relative aspect-video">
              <Image
                src={`/cursosFormacion/${imagen}`}
                fill
                alt="imagen curso"
              ></Image>
            </div>

            <Introvideo
              className={`mx-auto text-white mt-4`}
              texto="Ver resumen"
              videoid={videoid}
            />
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

          <p className="text-sm font-semibold flex flex-col gap-2 mb-8">
            {acerca}
          </p>
        </div>

        <ul className="flex flex-col font-bold lg:text-2xl gap-4 lg:w-1/3">
          <li className="flex items-center gap-2 shrink-0">
            <Calendar className="text-idaclass" strokeWidth={3} />
            Duracion: {duracion}
          </li>
          <li className="flex items-center gap-2">
            <Monitor className="text-idaclass shrink-0" strokeWidth={3} />
            Modalidad: {modalidades}
          </li>
          <li className="flex items-center gap-2">
            <BookOpenCheck className="text-idaclass shrink-0" strokeWidth={3} />
            Dedicacion: {dedicacion}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="text-idaclass shrink-0" strokeWidth={3} />
            Frecuencia: {frecuencia}
          </li>
        </ul>
      </section>
      <Separator />
      <section className="container bg-emerald-300 min-h-[20rem]">
        <article className="w-1/2">
          <TituloSeccion className="text-left">
            Objetivos del curso
          </TituloSeccion>
          <p>
            El egresado del curso de Preparador Físico Deportivo se distingue
            como un profesional certificado y altamente capacitado en el ámbito
            del rendimiento deportivo. Con un profundo entendimiento de los
            fundamentos teóricos y prácticos de la preparación física, estará
            preparado para trabajar con deportistas de diversas edades y niveles
            de rendimiento, desde amateurs hasta atletas de élite. Poseerá
            habilidades para diseñar programas de entrenamiento adaptados a las
            necesidades individuales de cada deportista, integrando
            conocimientos sobre fisiología del ejercicio, biomecánica y
            nutrición deportiva
          </p>
          <TituloSeccion className="text-left">
            Perfil del egresado
          </TituloSeccion>
          <p>
            El egresado del curso de Preparador Físico Deportivo se distingue
            como un profesional certificado y altamente capacitado en el ámbito
            del rendimiento deportivo. Con un profundo entendimiento de los
            fundamentos teóricos y prácticos de la preparación física, estará
            preparado para trabajar con deportistas de diversas edades y niveles
            de rendimiento, desde amateurs hasta atletas de élite. Poseerá
            habilidades para diseñar programas de entrenamiento adaptados a las
            necesidades individuales de cada deportista, integrando
            conocimientos sobre fisiología del ejercicio, biomecánica y
            nutrición deportiva
          </p>
        </article>
        <article></article>
      </section>
      <Separator />
      <CertificacionCursoFormacion />
      <Separator />
      <section>
        <h2 className="text-2xl lg:text-4xl font-bold my-4 text-center">
          Contenido del curso
        </h2>
        <p className="text-center my-4">Subtitulo</p>

        <div className="container flex flex-col items-center md:items-start md:flex-row gap-4">
          <Accordion type="single" collapsible className="w-full md:w-1/2">
            {JSON.parse(curso.modulos).map((modulo, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="font-bold text-sm md:text-xl  text-left px-4 ">
                  {modulo.titulo}
                </AccordionTrigger>
                <AccordionContent className="font-semibold text-sm p-4  bg-gray-200">
                  {modulo.contenido.map((item, index) => (
                    <p key={index} className="flex items-center mb-4">
                      <ChevronRight className="text-black shrink-0" />
                      {item}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Plus size={72} className="md:mt-[12%]" />

          <div className="mx-auto w-full md:w-1/3 font-medium flex flex-col justify-between border  rounded-xl p-4">
            <Badge className="text-lg text-center font-semibold m-2 justify-center bg-indigo-900  outline outline-2 outline-offset-4">
              Bono Extra
            </Badge>
            <Image
              src={`/assets/SkillClass.jpg`}
              alt="skillclass"
              className="mx-auto"
              height={400}
              width={400}
            />
            {contenido.map((item, index) => (
              <div key={item + index} className="my-4">
                {/* <h3 className="text-center font-bold">{item.titulo}</h3> */}
                <Accordion type="single" collapsible className="w-full ">
                  {item.unidades.map((unidad, i) => (
                    <AccordionItem
                      value={unidad}
                      key={unidad.titulo + i}
                      className="m-0"
                    >
                      <AccordionTrigger className="font-bold text-sm md:text-xl text-left px-4 py-1 ">
                        {unidad.titulo}
                      </AccordionTrigger>
                      <AccordionContent className="font-semibold text-sm p-4">
                        {unidad.contenido.map((item, j) => (
                          <p key={j} className="flex items-center mb-4">
                            <ChevronRight className="text-black shrink-0" />
                            {item}
                          </p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator />
      <EquipoProfesional
        titulo="Conoce al equipo de "
        titulo2="Trainers Educativos "
        titulo2Class="text-idaclass4"
        titulo3="que te guiara al exito"
      />
      <Separator />
      <section className="flex flex-col md:flex-row justify-center gap-4 container">
        <article className="w-full rounded-2xl border border-black">
          <TituloSeccion className={`my-1 text-3xl`}>Bono extra</TituloSeccion>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly container py-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>

        <article className="w-full rounded-2xl border border-black overflow-hidden">
          <TituloSeccion className={`my-1 text-3xl`}>
            Potencia tu empleabilidad o emprende
          </TituloSeccion>
          <h3 className="text-center">
            Accede a recursos y herramientas para tu exito
          </h3>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly container py-4">
            <li>Bolsa de trabajo</li>
            <li>Pasantias</li>
            <li>Red de Networking</li>
            <li>Eventos con expertos internacionales</li>
          </ul>
          <div className="relative w-full">
            <Image
              src={linea}
              alt="linea"
              className="relative -right-[60%] bottom-0 scale-150"
            />
          </div>
        </article>
      </section>
      {/* modalidades y pago */}
      <Separator />
      <section id="inscripcion" className="pt-6 container">
        <div className="flex max-lg:flex-col gap-4 justify-center items-center lg:items-stretch">
          <div className={"w-full max-w-lg lg:w-1/3 lg:text-left"}>
            <TituloSeccion className={"text-left"}>
              Elige la modalidad que mas se adapte a ti
            </TituloSeccion>
            <p>
             Elige a la modalidad que mas se adapte a tus necesidades e intereses. <br />
             En el caso de elegir modalidad presencial consultar o ver las sedes disponibles.
            </p>
            <Button size={"sm"}><MapPin/>Ver sedes disponibles </Button>
          </div>
          <TarjetaModalidad modalidad={"ONLINE"} />
          <TarjetaModalidad />
        </div>
      </section>
      <section className="container flex flex-col items-stretch sm:flex-row gap-4">
        <Beca />
      </section>
      <section className="container">
        {/* <TituloSeccion className={""}>
          Casos de éxito de nuestros estudiantes
        </TituloSeccion> */}
        <CasosExito titulo={`Casos de éxito de nuestros estudiantes`} />
      </section>
      <Separator />
      <section className="container my-12 ">
        <TituloSeccion>Otros cursos que pueden interesarte</TituloSeccion>
        <div className="flex justify-center gap-4">
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
          <article className="w-1/5 border-2 border-black rounded-2xl flex flex-col items-center overflow-hidden">
            <Image
              src={`/cursosFormacion/${imagen}`}
              alt=""
              width={300}
              height={300}
            />
            <p className="font-bold">{nombre}</p>
            <Button className="w-full text-lg">Ver curso</Button>
          </article>
        </div>
      </section>
      <div className="w-full sticky bottom-0 text-center p-4 text-primary bg-black z-50 flex justify-around items-center gap-2">
        <p className="text-white">+ de 50.0000 certificados otorgados </p>
        <div className="flex gap-12">
          <Link asChild href="#inscripcion">
            <Button>Inscribirme ahora</Button>
          </Link>
          <div className="">
            <Image
              src={`/assets/whatsapp-svgrepo-com.svg`}
              height={40}
              width={40}
              alt="asesorate"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CursoPage;
