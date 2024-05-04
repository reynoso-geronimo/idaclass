import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const CursoOnDemandAcerca = ({ acerca = "" }) => {
  return (
    <div className="container pt-12 flex flex-col lg:flex-row items-center gap-8">
      <div className="lg:w-[41%] flex flex-col items-center lg:items-start">
        <Badge
          variant={"outline"}
          className="text-base font-bold border-idaclass text-idaclass border-2 h-8  px-8 text-center"
        >
          Acerca de este curso
        </Badge>

        <p className="text-sm font-semibold flex flex-col gap-2 mb-8">
          {acerca}
        </p>

        <p className="text-center my-6 lg:text-left">{acerca}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:w-[59%]">
        <div className="border-2 border-idaclass rounded-2xl text-center p-4 bg-gray-50 lg:w-1/3">
          <Image
            src="/cursosOnDemand/cursos/CursoAsincronico.svg"
            alt=""
            height={70}
            width={70}
            className="mx-auto h-[70px] w-auto"
          />
          <h4 className="text-idaclass font-bold text-xl my-4">
            Curso Asincrónico
          </h4>
          <p>Te permitirá elegir el tiempo de cursada hasta finalizarlo</p>
        </div>
        <div className="border-2 border-idaclass rounded-2xl text-center p-4 bg-gray-50 lg:w-1/3">
          <Image
            src="/cursosOnDemand/cursos/MaterialDisponible.svg"
            alt=""
            height={70}
            width={70}
            className="mx-auto h-[70px] w-auto"
          />
          <h4 className="text-idaclass font-bold text-xl my-4">
            Material Disponible
          </h4>
          <p>
            Guías de Estudio. <br /> Biblioteca Online. <br /> Todos los apuntes descargables.
          </p>
        </div>
        <div className="border-2 border-idaclass rounded-2xl text-center p-4 bg-gray-50 lg:w-1/3">
          <Image
            src="/cursosOnDemand/cursos/MultiPlataforma.svg"
            alt=""
            height={70}
            width={70}
            className="mx-auto h-[70px] w-auto"
          />
          <h4 className="text-idaclass font-bold text-xl my-4">
            Multi Plataforma
          </h4>
          <p>Podés acceder desde cualquier dispositivo cuando quieras.</p>
        </div>
      </div>
    </div>
  );
};

export default CursoOnDemandAcerca;
