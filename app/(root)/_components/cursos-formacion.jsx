import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CursoFormacionCard from "./ui/curso-formacion-card";

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

  const OPTIONS = { align: "start" };
  return (
    <section className="  my-12">
      <TituloSeccion>Cursos de formacion</TituloSeccion>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-0"></div>
      <EmblaCarousel
        options={OPTIONS}
        slides={cursos.map((curso, index) => (
          <CursoFormacionCard key={index} curso={curso} index={index} />
        ))}
      />
    </section>
  );
};

export default CursosFormacion;
