import { YouTubeEmbed } from "@next/third-parties/google";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Curso from "@/models/Curso";
import PaginaCurso from "@/models/PaginaCurso";
import { Check, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const CursoPage = async ({ params }) => {
  const [curso, paginaCurso] = await Promise.all([
    Curso.findByPk(params.id),
    PaginaCurso.findOne({ where: { curso: params.id } }),
  ]);
  if (!curso) {
    return <div>Curso no encontrado</div>;
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
  console.log();

  return (
    <main className="p-6 ">
      <section className="flex flex-col items-center w-full">
        <div className="relative flex flex-col items-center py-17.5 px-4 lg:p-0 lg:w-8/12 lg:m-auto lg:my-20 lg:items-start 2xl:my-37 2xl:w-6/12 2xl:ml-77 3xl:my-47 3xl:w-5/12 3xl:ml-91">
          {/* <Badge className="h-8 w-16 flex justify-center">Curso</Badge> */}
          <h1 className="text-2xl lg:text-7xl font-bold my-4">
            {nombre && nombre}
          </h1>
          <div className="flex flex-col items-center lg:flex-row gap-4">
            <Badge
              variant={"outline"}
              className="justify-center w-60  border-black"
            >
              Modalidad: {modalidad && modalidad}
            </Badge>
            <Badge
              variant={"outline"}
              className=" justify-center w-52  border-black"
            >
              Duracion: {duracion && duracion}
            </Badge>
          </div>
          <div className="w-full my-8 flex flex-col gap-4 lg:flex-row">
            <Button
              size="lg"
              className="rounded-lg w-[90vw] lg:w-full font-extrabold "
            >
              Comprar
            </Button>
            <Button asChild
              size="lg"
              variant="outline"
              className="rounded-lg w-[90vw] lg:w-full font-extrabold border-black"
            >
              <Link href={`#contenido-curso`}>Ver Programa</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-4 py-3 items-start lg:items-center lg:flex-row lg:py-16 lg:justify-evenly lg:max-w-7xl lg:m-auto xl:px-27 2xl:max-w-8xl 3xl:max-w-8x5l 2xl:px-36 mb-8">
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
              className="border rounded-full bg-sky-700 text-white p-0.5"
            />
            {check_1}
          </li>
          <li className="flex items-center">
            <Check
              size={24}
              strokeWidth={4}
              className="border rounded-full bg-sky-700 text-white p-0.5"
            />{" "}
            {check_2}
          </li>
          <li className="flex items-center">
            <Check
              size={24}
              strokeWidth={4}
              className="border rounded-full bg-sky-700 text-white p-0.5"
            />{" "}
            {check_3}
          </li>
          <li className="flex items-center">
            <Check
              size={24}
              strokeWidth={4}
              className="border rounded-full bg-sky-700 text-white p-0.5"
            />{" "}
            {check_4}
          </li>
        </ul>
      </section>
      <div className="flex justify-center">
        <div className=" w-full max-w-[720px] border-2  border-sky-500 shadow-2xl mb-8">
          <YouTubeEmbed videoid="Mgo24SP8-Xs" params="modestbranding=1&rel=0&showinfo=0&controls=0" />
        </div>
      </div>
      <section>
        <h2 className="text-2xl lg:text-4xl font-bold my-4 text-center" id="contenido-curso">
          Contenido del curso
        </h2>
        <div className="flex flex-col px-4 py-3 items-start lg:items-center lg:flex-row lg:py-16 lg:justify-evenly lg:max-w-7xl lg:m-auto xl:px-27 2xl:max-w-8xl 3xl:max-w-8x5l 2xl:px-36 ">
          {
            <Accordion
              type="single"
              collapsible
              className="m-6 border-2 border-sky-950 border-t-0 w-[90%] lg:w-1/2"
            >
              {JSON.parse(modulos).Modulos.map((modulo, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-sm md:text-lg border-t-2 border-sky-950 text-left px-4 ">
                    Modulo: {index + 1}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm p-2">
                    {modulo}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          }
          <div className="lg:w-1/2 font-semibold">
            <h3 className="text-xl lg:text-2xl font-bold my-4">Orientado a:</h3>
            <p className="flex items-start">
              <ChevronRight className="text-sky-700 shrink-0" /> Deportistas
              amateurs, profesionales del Deporte, Salud y Fitness.
            </p>
            <p className="flex items-start">
              <ChevronRight className="text-sky-700 shrink-0" />
              Estudiantes de carreras afines.
            </p>
            <p className="flex items-start">
              <ChevronRight className="text-sky-700 shrink-0" />
              Deportistas amateurs, profesionales del Deporte, Salud y Fitness.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CursoPage;
