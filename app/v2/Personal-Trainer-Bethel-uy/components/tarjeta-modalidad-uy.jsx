"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const TarjetaModalidad = () => {
  return (
    <div className={`relative w-full lg:w-1/3 flex justify-center pb-14 pt-[16rem] lg:pt-28 `}>
      <Card className="border-2 border-black w-full max-w-sm flex flex-col justify-between overflow-hidden rounded-3xl">
        <CardHeader className="py-0 px-0">
          <CardTitle className="font-bold ">
            <p id="inscripcion" className="bg-idaclass text-white py-2 text-center w-full text-lg">
              Incluye BecaClass
            </p>

            <p className="text-center font-black py-5">Modalidad Presencial</p>
          </CardTitle>
          <CardDescription className="font-bold text-white text-lg"></CardDescription>
        </CardHeader>

        <CardContent className="px-0">
          <ul className="list-disc list-inside pb-6 text-sm px-6 min-h-[210px]">
            <li>Clases presenciales (2h. semanales)</li>
            <li>Tutorías con staff trainer educativos</li>
            <li>Video resúmenes y materiales descargable</li>
            <li>Contenido teórico interactivo</li>
            <li>Autoevaluaciones</li>
            <li>Doble titulación bonificada</li>
            <li>4 cursos complementarios (skillClass)</li>
            <li>Acceso a webinars con expertos</li>
          </ul>

          <p className="text-center text-idaclass font-semibold border-y-2 border-idaclass py-2">
            Plan Standard
            <span className="line-through decoration-2"> $35.000</span>
          </p>
          <p className="text-center text-idaclass font-semibold border-b-2 border-idaclass py-2">
            BecaClass 25% OFF $26.250
          </p>
          <p className="font-bold pt-6 pb-2 text-center">Desde 7 Cuotas de</p>
          <p className=" text-3xl font-extrabold mb-0 text-center"> $5.000</p>
        </CardContent>
        <CardFooter className="flex max-xl:flex-col gap-2">
          <Button size="lg" className={`w-full rounded-2xl max-lg:hidden`} asChild>
            <Link href={`#form-lg`}>INSCRIBIRME AHORA</Link>
            {/*  <Link href="https://wa.me/+5491135872204">INSCRIBIRME AHORA</Link> */}
          </Button>
          <Button size="lg" className={`w-full rounded-2xl lg:hidden`} asChild>
            <Link href={`#form`}>INSCRIBIRME AHORA</Link>
            {/*  <Link href="https://wa.me/+5491135872204">INSCRIBIRME AHORA</Link> */}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TarjetaModalidad;
