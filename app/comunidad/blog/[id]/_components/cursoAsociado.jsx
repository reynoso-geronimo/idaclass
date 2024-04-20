import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Curso from "@/models/Curso";
import { Clock, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CursoAsociado = async ({ cursoAsociado = "Nutricion Deportiva" }) => {
  //!!CODIGO PARA ENCOTNRAR EL CURSO REVISAR
  const curso = await Curso.findOne({
    where: { nombre: cursoAsociado },
  });
  if (!curso) {
    return null;
  }

  return (
    <>
      <h3 className="font-bold text-2xl my-4 text-idaclass">
        Capacitación Recomendada
      </h3>
      <div className="min-h-[480px] relative text-white rounded-3xl overflow-hidden flex flex-col justify-end max-lg:pb-6 lg:justify-center container">
        <h1 className="font-extrabold text-3xl my-5">
          {curso ? curso.nombre : "NOMBRE"}
        </h1>
        <p className="mb-5 lg:max-w-lg">
          {curso ? curso.descripcion : "lorem"}
        </p>
        <div className="space-y-3 w-full lg:w-fit">
          <Separator />
          <p className="space-x-2">
            <GraduationCap className="inline" />
            <span className="font-bo ld">Docente:</span> Diego Maradona
          </p>
          <Separator />
          <p className="space-x-2">
            <Clock className="inline" />
            <span className="font-bold">Horas:</span>{" "}
            {curso ? curso.horas : "150"} Horas
          </p>
          <Separator />
          <Button
            className="font-bold rounded-2xl w-full lg:translate-y-6"
            asChild
          >
            {/* //!! REVISAr ESTE VINCULo */}
            <Link href={`/cursos/${curso ? curso.id : ""}`}>
              Mas Informacion
            </Link>
          </Button>
        </div>
        <Image
          // src={`/${curso.imagen}`}
          src={"/"}
          alt="curso"
          fill
          className="object-cover bg-black -z-10"
        />
      </div>
    </>
  );
};

export default CursoAsociado;
