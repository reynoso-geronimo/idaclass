import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const TarjetaModalidad = ({ modalidad }) => {
  return (
    <div className={`relative w-full flex justify-center pb-14 ${modalidad==="ONLINE"?"pt-[35rem]":"pt-[20rem]"}`}>
      <Image
        src={modalidad==="ONLINE"?"/cursosFormacion/Online.png":"/cursosFormacion/Presencial.png"}
        fill
        className="-z-10 object-cover object-top"
        alt=""
      />
      <Card className="border border-black w-full max-w-sm flex flex-col justify-between overflow-hidden rounded-3xl mx-2">
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
            <ul className="list-disc list-inside pb-6 text-sm px-6">
              <li>Clases online en vivo (2h. semanales)</li>
              <li>Grabación de las clases en vivo</li>
              <li>Tutorias con staff trainer educativos</li>
              <li>Video resumenes y materiales descargable</li>
              <li>Contenido teorico interactivo</li>
              <li>Autoevaluaciones</li>
              <li>Doble titulacion bonificada</li>
              <li>4 cursos complementarios (skillClass)</li>
              <li>Acceso a webinars con expertos</li>
            </ul>
          ) : (
            <ul className="list-disc list-inside pb-6 text-sm px-6">
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
        <CardFooter className="flex flex-col ">
          <Button size="lg" className="text-white rounded-2xl w-[90%]">
            <ArrowRight className="mr-2" />
            INSCRIBIRME AHORA
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TarjetaModalidad;
