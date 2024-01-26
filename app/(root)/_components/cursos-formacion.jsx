import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CursosFormacion = () => {
  const cursos = [
    {
      title: "Programación Web",
      descripcion: "Aprende a programar páginas web increíbles desde cero",
      image: "https://source.unsplash.com/random/150x150",
      hours: 15,
      days: 1.5,
      turn: "Noche",
    },
    {
      title: "FUNDAMENTOS DE NUTRICION",
      descripcion:
        "Fórmate como Personal Trainer con los mejores docentes con un modelo híbrido que contempla clases online, actividades presenciales y un set de herramientas educativa",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      title: "FUNCIONTAL HIT",
      descripcion:
        "Fórmate como Personal Trainer con los mejores docentes con un modelo híbrido que contempla clases online, actividades presenciales y un set de herramientas educativa",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      title: "BIOMECANICA FITNESS",
      descripcion:
        "Fórmate como Personal Trainer con los mejores docentes con un modelo híbrido que contempla clases online, actividades presenciales y un set de herramientas educativaia Artificial en los negocios",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
  ];

  return (
    <section className=" container my-12">
      <TituloSeccion>Cursos de formacion</TituloSeccion>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-0">
        {cursos.map((curso, index) => (
          <article
            key={index}
            className="max-w-72 bg-gray-200 shadow-sm rounded-md h-[650px] grid 
          justify-self-center sm:odd:justify-self-end sm:even:justify-self-start odd:lg:justify-self-center even:lg:justify-self-center"
          >
            <div className="relative h-36 flex flex-col justify-end">
              <Image
                className="object-cover"
                src={curso.image}
                fill
                alt="Imagen del curso"
              />
              <h3 className="text-xl font-semibold px-4 relative bottom-1 uppercase text-white drop-shadow-[0px_0px_2px_rgba(0,0,255,.8)]">
                {curso.title}
              </h3>
            </div>
            <p className="text-sm h-[150px] px-4">{curso.descripcion}</p>
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm flex items-center gap-1">
                <Check color="#3a5dae" />
                {curso.hours}
              </p>
              <p className="text-sm flex items-center gap-1">
                <Check color="#3a5dae" />
                Dedicacion de horas semanales
              </p>
              <p className="text-sm flex items-center gap-1">
                <Check color="#3a5dae" />
                Franja horaria
              </p>
            </div>
            <Separator className="mb-4 bg-black " />
            <Button
              asChild
              size="lg"
              className="mb-4 px-4 w-[85%] mx-auto rounded-lg"
            >
              <Link href="/">Ver mas</Link>
            </Button>
            <h4 className="p-4 text-xl font-bold mb-0	">12 pagos de $1500</h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CursosFormacion;
