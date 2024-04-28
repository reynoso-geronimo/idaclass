import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OPTIONS = { align: "center" };

const CursoOnDemandOtrosCursos = ({ cursos }) => {
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
  
  <article className="rounded-2xl mx-2 w-[285px] flex flex-col items-center justify-end overflow-hidden relative text-white p-8 h-[34rem] gap-6 ">
    <Badge className="bg-orange-500 text-white absolute top-4 -left-2 pl-4">{curso.categorias[0].nombre}</Badge>
    <Image
      // src={curso.imagen?curso.imagen:"/cursosFormacion/cursos/PersonalTrainer.png"}
      src={`/cursosOnDemand/cursos/headers/${curso.nombre}Mobile.png`}
      alt=""
      fill
      className="object-cover -z-10"
    />
    <h3 className="font-bold text-3xl">{curso.nombre && curso.nombre}</h3>
    <p>{curso.descripcion}</p>
    <Button className="w-full text-lg rounded-3xl">Ver curso</Button>
  </article>
);

export default CursoOnDemandOtrosCursos;
