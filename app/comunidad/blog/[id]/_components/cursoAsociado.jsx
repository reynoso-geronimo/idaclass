import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CursoAsociado = async ({ curso }) => {
  if (!curso) {
    return null;
  }

  return (
    <>
      <h3 className="font-bold text-2xl my-4 text-idaclass">
        Capacitación Recomendada
      </h3>
      <div className="min-h-[480px] relative text-white rounded-3xl overflow-hidden flex flex-col justify-end max-lg:pb-6 lg:justify-center container mb-6">
        <h2 className="font-extrabold text-3xl my-5">
          {curso ? curso.nombre : "NOMBRE"}
        </h2>
        <p className="mb-5 lg:max-w-lg">
          {curso ? curso.descripcion : "lorem"}
        </p>
        <div className="space-y-3 w-full lg:w-fit">
          {curso.profesionals?.length > 0 && (
            <>
              <Separator />
              <p className="space-x-2">
                <GraduationCap className="inline" />
                <span className="font-bo ld">Docente:</span>{" "}
                {curso.profesionals[0].nombre}
              </p>
            </>
          )}
          {
            curso.duracion && (
              <>
                <Separator />
                <p className="space-x-2">
                  <Clock className="inline" />
                  <span className="font-bold">Duracion:</span>{" "}
                  {curso.duracion}
                </p>
              </>
            )
          }
          <Separator />
          <Button
            className="font-bold rounded-2xl w-full lg:translate-y-6"
            asChild
          >
            <Link href={`/cursos-formacion/${curso && curso.nombre}`}>
              Mas Informacion
            </Link>
          </Button>
        </div>
        <Image
          src={`/cursosFormacion/cursos/headersMobile/${curso.nombre}.png`}
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10 object-top lg:hidden"
          alt=""
        />
        <Image
          src={`/cursosFormacion/cursos/headersWeb/${curso.nombre}.png`}
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10 object-rigth-top max-lg:hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default CursoAsociado;
