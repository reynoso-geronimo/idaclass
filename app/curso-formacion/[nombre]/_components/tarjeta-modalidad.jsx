import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, MonitorPlay, Users } from "lucide-react";
import Image from "next/image";
import linea from "../../../../public/assets/Línea img 4.png";

const TarjetaModalidad = ({ modalidad }) => {
  return (
    <Card className="border border-black w-full max-w-sm lg:w-1/3 flex flex-col justify-between overflow-hidden">
      <CardHeader className="pb-0 h-[160px]">
        <CardTitle className="font-extrabold ">
          <Badge>Incluye BecaClass</Badge>
          {modalidad === "ONLINE" ? (
            <p>
              <MonitorPlay
                size={30}
                className="inline stroke-emerald-800 my-4 mr-2"
              />
              Modalidad ONLINE
            </p>
          ) : (
            <p>
              <Users size={30} className="inline stroke-red-800 my-4 mr-2" />
              Modalidad Presencial
            </p>
          )}
          <div className="relative w-full">
            <Image
              src={linea}
              alt="linea"
              className={`relative  bottom-0  ${modalidad==="ONLINE"?"-scale-150 -left-[40%]":"scale-150 -right-[60%]"}`}
            />
          </div>
        </CardTitle>
        <CardDescription className="font-bold text-white text-lg"></CardDescription>
      </CardHeader>

      <CardContent>
        {modalidad === "ONLINE" ? (
          <ul className="list-disc list-inside pb-6 text-sm">
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
          <ul className="list-disc list-inside pb-6 text-sm">
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
        <p>
          Plan Standard
          <span className="line-through decoration-2"> U$D 1620 USD</span>
        </p>
        <p>BecaClass + 70 % OFF U$D 486 USD</p>
        <p className="font-medium">Desde 3 Cuotas de</p>
        <p className=" text-2xl font-bold mb-0	">U$D 162 USD</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Separator className="mb-2 bg-black" />
        <Button size="lg" className="text-white">
          Inscribirme ahora
          <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TarjetaModalidad;
