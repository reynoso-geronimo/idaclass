import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CursoFormacionCard = ({ curso, index }) => {
  return (
    <article
      key={index}
      className="w-72 mx-auto bg-gray-200 rounded-md h-[650px] grid"
    >
      <div className="relative h-36 flex flex-col justify-end">
        <Image
          className="object-cover"
          src={curso.image}
          fill
          alt="Imagen del curso"
        />
        <h3 className="text-xl font-semibold px-4 relative bottom-1 uppercase text-white drop-shadow-[0px_0px_2px_rgba(0,0,255,.8)]">
          {curso.title}
        </h3>
      </div>
      <p className="text-sm h-[150px] px-4">{curso.descripcion}</p>
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