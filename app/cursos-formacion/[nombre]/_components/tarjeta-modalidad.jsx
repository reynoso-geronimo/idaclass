"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import getCountryCodeFromIP, { calcularPreciosCurso } from "@/lib/utils";

import Link from "next/link";
import { useEffect, useState } from "react";

const TarjetaModalidad = ({ modalidad, nombre, tipo, curso }) => {
  const { precio, precio_presencial, precio_usd, descuento, cuotas } = curso;
  const [countryCode, setCountryCode] = useState(null);
  useEffect(() => {
    async function fetchCountryCode() {
      const code = await getCountryCodeFromIP();
      setCountryCode(code.country);
    }
    fetchCountryCode();
  }, []);

  const displayPrice = countryCode === "AR" ? precio : precio_usd;

  const { precioBeca, cuotaPrecio } =
    modalidad === "ONLINE"
      ? calcularPreciosCurso(displayPrice, descuento, cuotas)
      : calcularPreciosCurso(precio_presencial, 25, cuotas);
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
              <p className="text-center font-black py-5">Modalidad Online</p>
            ) : (
              <p className="text-center font-black py-5">Modalidad Presencial</p>
            )}
          </CardTitle>
          <CardDescription className="font-bold text-white text-lg"></CardDescription>
        </CardHeader>

        <CardContent className="px-0">
          {modalidad === "ONLINE" ? (
            <ul className="list-disc list-inside pb-6 text-sm px-6 min-h-[210px]">
              <li>Clases online en vivo (2h. semanales)</li>
              <li>Grabación de las clases en vivo</li>
              <li>Tutorías con staff trainer educativos</li>
              <li>Video resúmenes y materiales descargable</li>
              <li>Contenido teórico interactivo</li>
              <li>Autoevaluaciones</li>
              <li>Doble titulación bonificada</li>
              <li>4 cursos complementarios (SkillClass)</li>
              <li>Acceso a webinars con expertos</li>
            </ul>
          ) : (
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
          )}
          <p className="text-center text-idaclass font-semibold border-y-2 border-idaclass py-2">
            Plan Standard
            <span className="line-through decoration-2">
              {" "}
              ${" "}
              {modalidad === "ONLINE"
                ? displayPrice?.toLocaleString("es-AR", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                : precio_presencial?.toLocaleString("es-AR", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
            </span>
          </p>
          <p className="text-center text-idaclass font-semibold border-b-2 border-idaclass py-2">
            BecaClass {modalidad === "ONLINE" ? descuento : 25}% OFF ${" "}
            {precioBeca?.toLocaleString("es-AR", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="font-bold pt-6 pb-2 text-center">Desde {cuotas} Cuotas de</p>
          <p className=" text-3xl font-extrabold mb-0 text-center">
            ${" "}
            {cuotaPrecio?.toLocaleString("es-AR", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
        </CardContent>
        <CardFooter className="flex max-xl:flex-col gap-2">
          <Button size="lg" className={`w-full rounded-2xl ${modalidad !== "ONLINE" && "xl:w-1/2"}`} asChild>
            <Link href={`/checkout?${queryParams}`}>INSCRIBIRME AHORA</Link>
            {/*  <Link href="https://wa.me/+5491135872204">INSCRIBIRME AHORA</Link> */}
          </Button>
          {modalidad !== "ONLINE" && (
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-idaclass4 text-idaclass4 font-bold rounded-2xl w-[100%] xl:w-[50%]"
              type="submit"
              asChild
            >
              <Link href={`https://wa.me/5491135872204/?text=Quisiera conocer las sedes presenciales de ${nombre}`}>
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
