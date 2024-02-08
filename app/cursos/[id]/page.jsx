import { YouTubeEmbed } from "@next/third-parties/google";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Curso from "@/models/Curso";
import PaginaCurso from "@/models/PaginaCurso";
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
import Link from "next/link";
import TarjetaModalidad from "./_components/tarjeta-modalidad";

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

  const { nombre, descripcion, imagen, precio, modalidad, duracion } =
    curso.toJSON();
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
    <main>
      <section className="flex flex-col items-center w-full  bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300">
        <div className="relative flex flex-col items-center py-17.5 px-4 lg:p-0 lg:w-8/12 lg:m-auto lg:my-20 lg:items-start 2xl:my-37 2xl:w-6/12 2xl:ml-77 3xl:my-47 3xl:w-5/12 3xl:ml-91">
          {/* <Badge className="h-8 w-16 flex justify-center">Curso</Badge> */}
          <h1 className="text-2xl lg:text-7xl font-bold my-4 tracking-tight">
            {nombre && nombre}
          </h1>
          <div className="flex flex-col items-center lg:flex-row gap-4">
            <Badge
              variant={"outline"}
              className="justify-center w-60  border-black bg-white"
            >
              Modalidad: {modalidad && modalidad}
            </Badge>
            <Badge
              variant={"outline"}
              className=" justify-center w-52  border-black bg-white"
            >
              Duracion: {duracion && duracion}
            </Badge>
          </div>
          <p className="font-semibold text-sm my-4">USD$ {precio && precio}</p>
          <div className="w-full mb-4 flex flex-col gap-4 lg:flex-row">
            <Button
              size="lg"
              className="rounded-lg w-[90vw] lg:w-full font-extrabold "
            >
              Comprar
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-lg w-[90vw] lg:w-full font-extrabold border-black"
            >
              <Link href={`#contenido-curso`}>Ver Programa</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-6 py-3 items-start lg:items-center lg:flex-row lg:py-16 lg:justify-evenly lg:max-w-7xl lg:m-auto xl:px-27 2xl:max-w-8xl 3xl:max-w-8x5l 2xl:px-36 mb-8">
        <div className="text-white-1 rounded lg:w-[43%] 2xl:w-[51%]">
          <Badge
            variant={"outline"}
            className="text-sm justify-center md:w-auto border-black h-8"
          >
            Acerca de este curso
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-bold my-4">
            {nombre && nombre}
          </h2>
          <ul className="text-sm font-semibold flex flex-col gap-2 mb-8">
            <li>{descripcionuno && descripcionuno}</li>
            <li>{descripciondos && descripciondos}</li>
            <li>{descripciontres && descripciontres}</li>
          </ul>
        </div>

        <ul className="flex flex-col lg:pl-4 lg:w-[44%] 2xl:pl-24 font-bold lg:text-2xl gap-4">
          <li className="flex items-center">
            <Check
              size={24}
              strokeWidth={4}
              className="border rounded-full bg-idaclass4 text-white p-0.5"
            />
            {check_1}
          </li>
          <li className="flex items-center">
            <Check
              size={24}
              strokeWidth={4}
              className="rounded-full bg-idaclass4 text-white p-0.5"
            />
            {check_2}
          </li>
          <li className="flex items-center">
            <Check
              size={24}
              strokeWidth={4}
              className="rounded-full bg-idaclass4 text-white p-0.5"
            />
            {check_3}
          </li>
          <li className="flex items-center">
            <Check
              size={24}
              strokeWidth={4}
              className="rounded-full bg-idaclass4 text-white p-0.5"
            />
            {check_4}
          </li>
        </ul>
      </section>
      <div className="flex justify-center">
        <div className=" w-full max-w-[720px] border-2  border-idaclass4 shadow-2xl my-8 ">
          <YouTubeEmbed
            videoid="Mgo24SP8-Xs"
            params="modestbranding=1&rel=0&showinfo=0&controls=0"
          />
        </div>
      </div>
      <section className="bg-gradient-to-br from-gray-100 via-gray-150 to-gray-100">
        <h2
          className="text-2xl lg:text-4xl font-bold my-4 text-center"
          id="contenido-curso"
        >
          Contenido del curso
        </h2>
        <div className="flex flex-col px-4 py-3 items-center lg:flex-row lg:py-16 lg:justify-evenly lg:max-w-7xl lg:m-auto xl:px-27 2xl:max-w-8xl 3xl:max-w-8x5l 2xl:px-36 gap-4">
          {
            <Accordion type="single" collapsible className="w-full lg:w-2/3">
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
          <div className="w-full lg:w-1/2 font-semibold flex flex-col justify-between border bg-idaclass rounded-xl p-4">
            <Badge className="text-xl lg:text-2xl font-bold m-4 justify-center bg-indigo-900  outline outline-2 outline-offset-4">
              Orientado a:
            </Badge>
            <div className="text-white">
              <p className="flex items-start">
                <ChevronRight className="text-white shrink-0" />
                Deportistas amateurs, profesionales del Deporte, Salud y
                Fitness.
              </p>
              <p className="flex items-start">
                <ChevronRight className="text-white shrink-0" />
                Estudiantes de carreras afines.
              </p>
              <p className="flex items-start">
                <ChevronRight className="text-white shrink-0" />
                Apto para todo público
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-4 py-3 items-center lg:flex-row lg:py-16 lg:justify-evenly lg:max-w-7xl lg:m-auto xl:px-27 2xl:max-w-8xl 3xl:max-w-8x5l 2xl:px-36 gap-4">
        <article className="w-full h-auto flex flex-col items-center border-2 border-idaclass rounded-xl min-h-[300px]">
          <Badge className="text-lg lg:text-xl font-semibold m-4 justify-center outline outline-2 outline-primary outline-offset-4">
            Informacion de curasada
          </Badge>
          <div className="flex-1 flex flex-col justify-center gap-2">
            <div className="flex items-center">
              <Calendar className="text-idaclass mr-4" strokeWidth={3} />
              <div>
                <p className="font-semibold">Duracion</p>
                <p>{duracion}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="text-idaclass mr-4" strokeWidth={3} />
              <div>
                <p className="font-semibold">Dedicación</p>
                <p>5 horas semanales</p>
              </div>
            </div>
            <div className="flex items-center">
              <Monitor className="text-idaclass mr-4" strokeWidth={3} />
              <div>
                <p className="font-semibold">Modalidad de la cursada</p>
                <p>{modalidad}</p>
              </div>
            </div>
          </div>
        </article>
        <article className="w-full flex flex-col items-center border-2 border-idaclass rounded-xl min-h-[300px]">
          <h3 className="text-xl lg:text-2xl font-semibold m-4 text-start w-full px-6">
            Materiales Incluidos
          </h3>
          <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly">
            <li>Ebook Nutrición Deportiva</li>
            <li>
              Una guía detallada de los alimentos y bebidas sugeridos para cada
              día.
            </li>
            <li>
              Toda la información para saber qué alimentos incluir en un plan de
              alimentación saludable.
            </li>
            <li>
              Manual complementario a los contenidos brindados en el curso.
            </li>
            <li>Material de consulta rápida.</li>
          </ul>
        </article>
      </section>
      <section className="flex flex-col px-4 py-3 items-center lg:flex-row lg:py-16 lg:justify-evenly lg:max-w-7xl lg:m-auto xl:px-27 2xl:max-w-8xl 3xl:max-w-8x5l 2xl:px-36 gap-4 ">
        <article className="w-full flex flex-col items-center min-h-[300px] ">
          <h3 className="text-lg lg:text-xl font-bold m-4 underline decoration-idaclass decoration-4 underline-offset-8">
            Perfil del egresado
          </h3>
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
      <section>
        <h1 className="text-center font-bold text-xl uppercase py-12">Elige la modalidad que mas se adapte a ti</h1>
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
