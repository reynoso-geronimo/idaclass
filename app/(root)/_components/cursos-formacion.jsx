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
      subtitle: "Aprende a programar páginas web increíbles desde cero",
      image: "/cursosFormacion/cursoimg1.jpg",
      hours: 15,
      days: 1.5,
      turn: "Noche",
    },
    {
      title: "Data Analytics",
      subtitle: "Capacítate para utilizar cualquier volumen de datos",
      image: "https://source.unsplash.com/random/150x150",
      hours: 10,
      days: 1,
      turn: "Noche",
    },
    {
      title: "Data Science",
      subtitle:
        "Adéntrate en la aplicación de modelos de aprendizaje automático",
      image: "https://source.unsplash.com/random/150x150",
      hours: 10,
      days: 1,
      turn: "Noche",
    },
    {
      title: "IA para Negocios",
      subtitle:
        "Aprenderás las principales características de las aplicaciones de Inteligencia Artificial en los negocios",
      image: "https://source.unsplash.com/random/150x150",
      hours: 10,
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
            className="max-w-72 bg-gray-200 shadow-sm rounded-md h-[650px] flex flex-col justify-start
          justify-self-center sm:odd:justify-self-end sm:even:justify-self-start odd:lg:justify-self-center even:lg:justify-self-center"
          >
            <Image
              className="h-36 w-full object-cover"
              src={curso.image}
              width={300}
              height={300}
              alt="Imagen del curso"
            />
            <h3 className="text-xl font-semibold pt-8 pb-6 px-4">
              {curso.title}
            </h3>
            <p className="text-base h-[150px] px-4">{curso.subtitle}</p>
            <div className="flex flex-col gap-4 p-4">
            <p className="text-sm flex items-center gap-1">
              <Check color="#3a5dae" />
              Duracion del curso
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
            <h4 className="p-4 text-xl font-bold">12 pagos de $1500</h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CursosFormacion;
