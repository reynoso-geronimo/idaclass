import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Button } from "@/components/ui/button";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import React from "react";

const OPTIONS = { align: "center" };

const CursoFormacionOtrosCursos = ({ cursos }) => {
  return (
    <section className="container my-12 ">
      <TituloSeccion>Otros cursos que pueden interesarte</TituloSeccion>
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
      src={`/cursosFormacion/cursos/headersMobile/${curso.nombre}.png`}
      alt=""
      fill
      className="object-cover -z-10"
    />
    <h3 className="font-bold text-3xl">{curso.nombre && curso.nombre}</h3>
    <p>{curso.descripcion}</p>
    <Button className="w-full text-lg rounded-3xl">Ver curso</Button>
  </article>
);

export default CursoFormacionOtrosCursos;