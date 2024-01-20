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
    <section className="flex flex-wrap justify-center container gap-4 my-12 ">
      {cursos.map((curso, index) => (
        <article
          key={index}
          className="w-72 bg-gray-200 shadow-sm rounded-md p-4 h-[650px]" 
        >
          <Image
            className="h-36 w-full object-cover"
            src={curso.image}
            width={100}
            height={100}
            alt="Imagen del curso"
          />
          <h3 className="text-xl font-semibold text-gray-800 pt-8 pb-6">{curso.title}</h3>
          <p className="text-base text-gray-600 mb-12 h-[10%]">{curso.subtitle}</p>
          <Button asChild size="lg" className="mb-12">
            <Link href="/" className="w-full">
              Ver mas
            </Link>
          </Button>
          <Separator className="mb-4 bg-white " />
          <div className="flex flex-col gap-4 py-4">
            <p className="text-sm text-gray-500 flex items-center">
              <Check color="#3a5dae" />
              Duracion del curso
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              <Check color="#3a5dae" />
              Dedicacion de horas semanales
            </p>
            <p className="text-sm text-gray-500 flex items-center">
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
