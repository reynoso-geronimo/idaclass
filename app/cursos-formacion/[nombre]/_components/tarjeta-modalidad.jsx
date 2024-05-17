"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import Link from "next/link";

const TarjetaModalidad = ({ modalidad, nombre, tipo, precio = 50000 }) => {
  const checkoutParams = {
    modalidad,
    nombre,
    tipo,
  };

  const queryParams = new URLSearchParams(checkoutParams).toString();

  return (
    <div
      className={`relative w-full  lg:w-[440px] flex justify-center pb-14 ${
        modalidad === "ONLINE" ? "pt-[35rem]" : "pt-[20rem]"
      } lg:pt-28`}
    >
      <Image
        src={
          modalidad === "ONLINE"
            ? "/cursosFormacion/Online.png"
            : "/cursosFormacion/Presencial.png"
        }
        fill
        className="-z-10 object-cover object-top lg:hidden"
        alt=""
      />
      <Card className="border-none w-full max-w-sm flex flex-col justify-between overflow-hidden rounded-3xl mx-6 ">
        <CardHeader className="py-0 px-0">
          <CardTitle className="font-bold ">
            <p className="bg-idaclass text-white py-2 text-center w-full text-lg">
              Incluye BecaClass
            </p>
            {modalidad === "ONLINE" ? (
              <p className="text-center font-black py-5">Modalidad Online</p>
            ) : (
              <p className="text-center font-black py-5">
                Modalidad Presencial
              </p>
            )}
          </CardTitle>
          <CardDescription className="font-bold text-white text-lg"></CardDescription>
        </CardHeader>

        <CardContent className="px-0">
          {modalidad === "ONLINE" ? (
            <ul className="list-disc list-inside pb-6 text-sm px-6 min-h-[210px]">
              <li>Clases online en vivo (2h. semanales)</li>
              <li>Grabación de las clases en vivo</li>
              <li>Tutorias con staff trainer educativos</li>
              <li>Video resumenes y materiales descargable</li>
              <li>Contenido teorico interactivo</li>
              <li>Autoevaluaciones</li>
              <li>Doble titulacion bonificada</li>
              <li>4 cursos complementarios (SkillClass)</li>
              <li>Acceso a webinars con expertos</li>
            </ul>
          ) : (
            <ul className="list-disc list-inside pb-6 text-sm px-6 min-h-[210px]">
              <li>Clases presenciales (3h. cada 15 dias)</li>
              <li>Tutorias con staff trainer educativos</li>
              <li>Video resumenes y materiales descargable</li>
              <li>Contenido teorico interactivo</li>
              <li>Autoevaluaciones</li>
              <li>Doble titulacion bonificada</li>
              <li>4 cursos complementarios (skillClass)</li>
              <li>Acceso a webinars con expertos</li>
            </ul>
          )}
          <p className="text-center text-idaclass font-semibold border-y-2 border-idaclass py-2">
            Plan Standard
            <span className="line-through decoration-2"> U$D 1620 USD</span>
          </p>
          <p className="text-center text-idaclass font-semibold border-b-2 border-idaclass py-2">
            BecaClass + 70 % OFF U$D 486 USD
          </p>
          <p className="font-bold pt-6 pb-2 text-center">Desde 3 Cuotas de</p>
          <p className=" text-3xl font-extrabold mb-0 text-center">
            U$D 162 USD
          </p>
        </CardContent>
        <CardFooter className="flex max-xl:flex-col gap-2">
          <Button size="lg" className={`w-full rounded-2xl`} asChild>
            <Link href={`/checkout?${queryParams}`}>INSCRIBIRME AHORA</Link>
          </Button>
          {modalidad !== "ONLINE" && (
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-idaclass4 text-idaclass4 font-bold rounded-2xl w-[100%] xl:w-[50%]"
              type="submit"
              asChild
            >
              <Link
                href={`https://wa.me/5491135872204/?text=Quisiera conocer las sedes presenciales de ${nombre}`}
              >
                CONSULTAR SEDES
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default TarjetaModalidad;
