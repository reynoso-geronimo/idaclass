import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, TriangleRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CursoFormacionCard = ({ curso, index }) => {
  return (
    <article
      key={index}
      className="w-72 mx-auto bg-gray-200 rounded-md h-[650px] grid border border-1 border-gray-400"
    >
      <div className="relative h-36 flex flex-col justify-end">
        <Image
          className="object-cover z-10"
          src={curso.image}
          fill
          alt="Imagen del curso"
        />
        <h3 className="z-10 text-base font-semibold px-2 relative bottom-1 uppercase text-white  bg-idaclass w-[55%] border border-1 border-black -translate-x-3 ">
          {curso.title}
        </h3>
        <TriangleRight
          size={50}
          strokeWidth={0}
          className="-z-10 absolute transform rotate-45 -translate-x-[11px] translate-y-6 "
          fill="black"
        />
      </div>
      <p className="text-sm h-[150px] px-4 z-10">{curso.descripcion}</p>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm flex items-center gap-1">
          <Check color="#3a5dae" />
          {curso.hours}
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
      <h4 className="p-4 text-xl font-bold mb-0	">12 pagos de $1500</h4>
    </article>
  );
};

export default CursoFormacionCard;
