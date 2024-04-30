import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Clock, TriangleRight, BookOpenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CursoFormacionCard = ({ curso }) => {
  return (
    <article className="w-[285px] rounded-2xl mx-3 min-h-[550px] flex flex-col justify-end text-xs sm:text-sm relative text-[#C2C2C2] px-4 gap-4">
      <Image
        className="object-cover rounded-2xl -z-10 bg-black"
        src={`/cursosFormacion/cursos/headers/${curso.nombre}Mobile.png`}
        fill
        alt="Imagen del curso"
      />
      {/* <div className="w-32 absolute top-4 -left-0">
        <h3 className="text-center z-10 text-base font-semibold uppercase text-white bg-gradient-to-t from-[#0088CA] to-[#1FB3E5] py-1 pr-4 -translate-x-3 rounded-r-lg whitespace-nowrap">
          &#128293; 70% OFF
        </h3>
        <TriangleRight
          size={50}
          strokeWidth={0}
          className="-z-20 absolute -left-[10px] top-[4px] transform rotate-[30deg]"
          fill="#3A5DAE"
        />
      </div> */}

      <h3 className="font-extrabold text-3xl text-left mb-4 text-white">
        {curso.nombre}
      </h3>
      {/* <p className="text-white">{curso.descripcion}</p>
      <p className="align-middle">
        <BookOpenIcon className="inline mr-1 align-middle" size={22} strokeWidth={3} />
        <span className="font-bold">{curso.contenido}</span> <span>de estudio</span>
      </p> */}

      <p className="align-middle">
        <Clock className="inline mr-1 align-middle pb-0.5" size={22} strokeWidth={3} />
        <span className="font-bold">{curso.duracion}</span> ({curso.frecuencia})
      </p>

      <div className="flex flex-col gap-2">
        <Separator />
        <p>
         <Image src={"/assets/PlanStandard.svg"} width={20} height={20} alt="" className="inline mr-1"/> Plan Standard:{" "}
          <span className="line-through decoration-2">U$D 1620</span>
        </p>
        <p className="font-bold text-orange-500">
        <Image src={"/assets/PlanBecaClass.svg"} width={20} height={20} alt="" className="inline mr-2"/>
          BecaClass +70% OFF <span className="text-idaclass3">U$D 486</span>
        </p>

        <Separator />
        <div className="text-white">
          <p className="font-bold text-center">Desde 3 Cuotas de</p>
          <p className=" text-2xl font-bold text-center">U$D 162 USD</p>
        </div>
        <Separator />
        <Button
          asChild
          size="lg"
          className="mt-4 mb-6 px-2 w-[100%] mx-auto rounded-2xl text-xl"
        >
          <Link href={`/curso-formacion/${curso.nombre}`}>Ver Curso</Link>
        </Button>
      </div>
    </article>
  );
};

export default CursoFormacionCard;
