import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cursos = () => {
  const cursos = [
    {
      title: "Programación Web",
      subtitle: "Aprende a programar páginas web increíbles desde cero",
      image: "https://source.unsplash.com/random/150x150",
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
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container gap-4 xl:gap-0 my-12">
      {cursos.map((curso, index) => (
        <article
          key={index}
          className="max-w-72 bg-gray-200 shadow-sm rounded-md h-[650px] flex flex-col justify-evenly
          justify-self-center sm:odd:justify-self-end sm:even:justify-self-start odd:lg:justify-self-center even:lg:justify-self-center"
        >
          <Image
            className="h-36 w-full object-cover"
            src={curso.image}
            width={100}
            height={100}
            alt="Imagen del curso"
          />
          <h3 className="text-xl font-semibold pt-8 pb-6 px-4">
            {curso.title}
          </h3>
          <p className="text-base h-[150px] px-4">{curso.subtitle}</p>
          <Button
            asChild
            size="lg"
            className="mb-4 px-4 w-[84%] mx-auto rounded-lg"
          >
            <Link href="/" className="w-full">
              Ver mas
            </Link>
          </Button>
          <Separator className="mb-4 bg-black " />
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
        </article>
      ))}
    </section>
  );
};

export default cursos;
