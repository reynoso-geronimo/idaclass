import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { BookOpenCheck, Calendar, Clock, Monitor } from "lucide-react";
import Image from "next/image";
import React from "react";

const CursoFormacionAcerca = ({
  acerca,
  duracion,
  modalidades,
  dedicacion,
  frecuencia,
  
}) => {
  return (
    <section className="container flex flex-col items-center pt-6">
      <div className="grid grid-cols-2 gap-y-8 text-center lg:flex lg:justify-center lg:gap-4">
        <div className="flex lg:w-1/4 2xl:w-auto max-2xl:flex-col items-center gap-2 shrink-0">
          <Calendar className="text-idaclass" strokeWidth={3} />
          <p className="font-black">DURACION:</p> {duracion}
        </div>
        <div className="flex lg:w-1/4 2xl:w-auto max-2xl:flex-col items-center gap-2 shrink-0">
          <Monitor className="text-idaclass shrink-0" strokeWidth={3} />
          <p className="font-black">MODALIDADES:</p> {modalidades}
        </div>
        <div className="flex lg:w-1/4 2xl:w-auto max-2xl:flex-col items-center gap-2 shrink-0">
          <BookOpenCheck className="text-idaclass shrink-0" strokeWidth={3} />
          <p className="font-black">DEDICACION:</p> {dedicacion}
        </div>
        <div className="flex lg:w-1/4 2xl:w-auto max-2xl:flex-col items-center gap-2 shrink-0">
          <Clock className="text-idaclass shrink-0" strokeWidth={3} />
          <p className="font-black">FRECUENCIA:</p> {frecuencia}
        </div>
      </div>
      <Separator className="my-4 bg-gray-300" />
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-[41%] flex flex-col items-center lg:items-start">
          <Badge
            variant={"outline"}
            className="text-base font-bold border-idaclass text-idaclass border-2 h-8  px-8 text-center"
          >
            Acerca de este curso
          </Badge>
          {/* 
                    <p className="text-sm font-semibold flex flex-col gap-2 mb-8">
                         {acerca} 
                    </p>*/}

          
          <p className="text-center my-6 lg:text-left">
            {acerca}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:w-[59%]">
          <div className="border-2 border-idaclass rounded-2xl text-center p-4 bg-gray-50">
            <Image
              src="/cursosFormacion/AprenderHaciendo.svg"
              alt=""
              height={70}
              width={70}
              className="mx-auto"
            />
            <h4 className="text-idaclass font-bold text-xl my-4">
              Aprender Haciendo
            </h4>
            <p>
              A través de casos de estudio, ejercicios prácticos y grupos de
              práctica, que te prepararán para el mundo real.
            </p>
          </div>
          <div className="border-2 border-idaclass rounded-2xl text-center p-4 bg-gray-50">
            <Image
              src="/cursosFormacion/FormacionIntegral.svg"
              alt=""
              height={70}
              width={70}
              className="mx-auto"
            />
            <h4 className="text-idaclass font-bold text-xl my-4">
              Formación Integral
            </h4>
            <p>
              Te preparamos para que incorpores también herramientas y
              habilidades de marketing, venta, comunicación y liderazgo.
            </p>
          </div>
          <div className="border-2 border-idaclass rounded-2xl text-center p-4 bg-gray-50">
            <Image
              src="/cursosFormacion/CarreraRentable.svg"
              alt=""
              height={70}
              width={70}
              className="mx-auto"
            />
            <h4 className="text-idaclass font-bold text-xl my-4">
              Carrera Rentable
            </h4>
            <p>
              Mediante la Formación Integral vas a lograr atraer clientes y
              tendrás una carrera rentable en el mundo del deporte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursoFormacionAcerca;
