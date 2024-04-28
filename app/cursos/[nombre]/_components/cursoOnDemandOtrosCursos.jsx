import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Button } from "@/components/ui/button";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//!!HARDCODEADO CORREGIR
const cursoshard = [
  {
    titulo: "Preparador Fisico",
    descripcion: "Contiene 2 módulos, 6 unidades",
    imagen: "/cursosFormacion/cursos/PersonalTrainer.png",
  },
  {
    titulo: "Personal Trainer",
    descripcion: "Contiene 2 módulos, 6 unidades",
    imagen: "/cursosFormacion/cursos/PersonalTrainer.png",
  },
  {
    titulo: "Instructor de Musculación",
    descripcion: "Contiene 2 módulos, 6 unidades",
    imagen: "/cursosFormacion/cursos/InstructorDeMusculacion.png",
  },
  {
    titulo: "Gestion de Gimnasio",
    descripcion: "Contiene 2 módulos, 6 unidades",
    imagen: "/cursosFormacion/cursos/GestionGimnasios.png",
  },
  {
    titulo: "Nutrición Deportiva",
    descripcion: "Contiene 2 módulos, 6 unidades",
    imagen: "/cursosFormacion/cursos/NutricionDeportiva.png",
  },
];
const OPTIONS = { align: "center" };



const CursoOnDemandOtrosCursos = ({ cursos=cursoshard }) => {
  return (
    <section className="container mb-6 ">
      <div className="flex items-center justify-between">
      <TituloSeccion className={"lg:text-left lg:mx-0 w-fit"}><span className="text-idaclass3">Otros cursos On Demand</span> que pueden interesarte</TituloSeccion>
      <Link href={"/cursos"} className="font-bold flex items-center gap-1 max-lg:hidden"><ArrowRight className="inline whitespace-nowrap" strokeWidth={3} size={26}/> VER TODOS LOS CURSOS</Link>
      </div>
      <div className="flex justify-center gap-4">
        <EmblaCarousel
          options={OPTIONS}
          slides={cursos.map((curso, index) => (
            <CursoCard key={index} curso={curso} />
          ))}
        />
      </div>
    </section>
  );
};

const CursoCard = ({ curso }) => (
  <article className="rounded-2xl mx-2 w-[285px] flex flex-col items-center justify-end overflow-hidden relative text-white p-8 h-[34rem] border-2 gap-6 ">
    <Image
      // src={curso.imagen?curso.imagen:"/cursosFormacion/cursos/PersonalTrainer.png"}
      src={`/cursosFormacion/cursos/headers/${curso.nombre}Mobile.png`}
      alt=""
      fill
      className="object-cover -z-10 bg-black"
    />
    <h3 className="font-bold text-3xl">{curso.nombre && curso.nombre}</h3>
    <p>{curso.descripcion}</p>
    <Button className="w-full text-lg rounded-3xl">Ver curso</Button>
  </article>
);


export default CursoOnDemandOtrosCursos;
