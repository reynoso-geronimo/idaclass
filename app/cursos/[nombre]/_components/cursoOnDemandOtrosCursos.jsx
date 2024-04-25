import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Button } from "@/components/ui/button";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import React from "react";

//!!HARDCODEADO CORREGIR
const cursos = [
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

const CursoOnDemandOtrosCursos = ({cursoActual}) => {
  
  const cursoFiltrado = cursos.filter(curso => curso.titulo !== cursoActual)

  return (
    <section className="container my-12 ">
      
      <TituloSeccion>Otros cursos que pueden interesarte</TituloSeccion>
      <div className="flex justify-center gap-4">
        <EmblaCarousel
          options={OPTIONS}
          slides={cursoFiltrado.map((curso, index) => (
            <CursoCard key={index} curso={curso}/>
          ))}
        />
      </div>
    </section>
  );
};

const CursoCard = ({curso}) => (
  
  <article className="rounded-2xl w-[300px] flex flex-col items-center overflow-hidden relative text-white p-8 pt-[16rem] border-2 gap-6 mx-2">
    <Image
      src={curso.imagen?curso.imagen:"/cursosFormacion/cursos/PersonalTrainer.png"}
      alt=""
      fill
      className="object-cover -z-10"
    />
    <h3 className="font-bold text-3xl">{curso.titulo && curso.titulo}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <Button className="w-full text-lg rounded-3xl">Ver curso</Button>
  </article>
);

export default CursoOnDemandOtrosCursos;
