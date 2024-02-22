import { Button } from "@/components/ui/button";
import { Dot, Clock, TriangleRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CursoFormacionCard = ({ curso }) => {
  return (
    <article className="w-[315px] mx-auto bg-gray-200 rounded-2xl min-h-[650px] flex flex-col justify-between border border-1 border-gray-400">
      <div className="relative h-36 flex flex-col justify-end">
        <Image
          className="object-cover z-10 rounded-t-2xl"
          src={`/cursosFormacion/${curso.imagen}`}
          fill
          alt="Imagen del curso"
        />
        <h3 className="text-center z-10 text-base font-semibold relative -top-28 uppercase text-white  bg-idaclass w-[40%] border border-1 border-black -translate-x-3">
          70% OFF &#128293;
        </h3>
        <TriangleRight
          size={50}
          strokeWidth={0}
          className="-z-10 absolute transform rotate-[30deg] -translate-x-[11px] -translate-y-[91px] "
          fill="black"
        />
      </div>
      <h3 className="px-2 font-bold text-2xl text-center">{curso.nombre}</h3>
      <p className="px-4 z-10">{curso.contenido}</p>
      <div className="flex flex-col gap-1 px-2">
        {curso.modulos &&
          JSON.parse(curso.modulos).map((modulo, index) => (
            <p key={index} className=" flex items-center gap-1">
              <Dot color="#3a5dae" className="shrink-0"/>
              {modulo.titulo}
            </p>
          ))}
      </div>
      <div className="px-2 ml-2">
        <span className="flex items-center">
          <Clock className="inline mr-1" size={16} />
          {curso.duracion} / {curso.frecuencia}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p>
          Plan Standard{" "}
          <span className="line-through decoration-2">U$D 1620 USD</span>
        </p>
        <p>BecaClass + 70 % OFF U$D 486 USD</p>
        <p className="font-medium">Desde 3 Cuotas de</p>
        <p className=" text-2xl font-bold mb-0	">U$D 162 USD</p>
        <Button
          asChild
          size="lg"
          className="my-4 px-2 w-[100%] mx-auto rounded-lg text-xl"
        >
          <Link href={`/curso-formacion/${curso.nombre}`}>Ver Curso</Link>
        </Button>
      </div>
    </article>
  );
};

export default CursoFormacionCard;
