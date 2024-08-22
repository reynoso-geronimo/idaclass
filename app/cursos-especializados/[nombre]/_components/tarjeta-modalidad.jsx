"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { calcularPreciosCurso } from "@/lib/utils";

import Link from "next/link";

const TarjetaModalidad = ({ modalidad = "ONLINE", nombre, tipo = "CURSO DE ESPECIALIZACION", curso }) => {
  const { precio, descuento, cuotas } = curso;
  const { precioBeca, cuotaPrecio } = calcularPreciosCurso(precio, descuento, cuotas);

  const checkoutParams = {
    modalidad,
    nombre,
    tipo,
  };

  const queryParams = new URLSearchParams(checkoutParams).toString();

  return (
    <div
      className={`relative w-full lg:w-1/3 flex justify-center pb-14  ${
        modalidad === "ONLINE" ? "pt-[16rem]" : ""
      } lg:pt-28`}
    >
      <Card className="border-none w-full max-w-sm flex flex-col justify-between overflow-hidden rounded-3xl">
        <CardHeader className="py-0 px-0">
          <CardTitle className="font-bold ">
            <p id="inscripcion" className="bg-idaclass text-white py-2 text-center w-full text-lg">
              Incluye BecaClass
            </p>
            {modalidad === "ONLINE" ? (
              <p className="text-center font-black py-5">Modalidad On Demand</p>
            ) : (
              <p className="text-center font-black py-5">Modalidad Presencial</p>
            )}
          </CardTitle>
          <CardDescription className="font-bold text-white text-lg"></CardDescription>
        </CardHeader>

        <CardContent className="px-0">
          {modalidad === "ONLINE" ? (
            <ul className="list-disc list-inside pb-6 text-sm px-6 min-h-[210px]">
              <li>Material descargable</li>
              <li>Contenido teórico interactivo</li>
              <li>Autoevaluaciones</li>
              <li>Acceso a webinars con expertos</li>
              <li>Certificado con número único de matrícula con autenticación QR</li>
              <li>Acceso exclusivo a comunidad</li>
            </ul>
          ) : (
            ""
          )}
          <p className="text-center text-idaclass font-semibold border-y-2 border-idaclass py-2">
            Plan Standard
            <span className="line-through decoration-2">
              {" "}
              ${" "}
              {precio?.toLocaleString("es-AR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </p>
          <p className="text-center text-idaclass font-semibold border-b-2 border-idaclass py-2">
            BecaClass + {descuento}% OFF
          </p>
          <p className="font-bold pt-6 pb-2 text-center">Desde</p>
          <p className=" text-3xl font-extrabold mb-0 text-center">
            ${" "}
            {precioBeca?.toLocaleString("es-AR", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
        </CardContent>
        <CardFooter className="flex max-xl:flex-col gap-2">
          <Button size="lg" className={`w-full rounded-2xl`} asChild>
            <Link href={`/checkout?${queryParams}`}>INSCRIBIRME AHORA</Link>
            {/*  <Link href="https://wa.me/+5491135872204">INSCRIBIRME AHORA</Link> */}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TarjetaModalidad;
