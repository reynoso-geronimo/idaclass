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
import { Clock, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CursoEspecializacionCard = ({ curso, minH = "min-h-[430px]" }) => {
  return (
    <Card
      className={`${minH} 2xl:h-[550px] text-sm  border-none mx-2 relative flex flex-col justify-end bg-black text-white rounded-3xl overflow-hidden`}
    >
      <Image
        // src={`/${curso.imagen}`}
        src={`/cursosEspecializacion/cursos/headersMobile/${curso.id}.png`}
        alt="curso"
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-right-top "
      />
      <CardTitle className="text-white z-10 p-6 pb-0">
        {curso.nombre ? curso.nombre : " "}
      </CardTitle>
      <CardHeader className="flex justify-between z-10 ">
        {/* <CardTitle className="h-12 align-text-bottom">{curso.nombre}</CardTitle> */}
        {/* <CardDescription className="text-white ">{curso.descripcion}</CardDescription> */}
        <Separator />
        <span className="flex gap-2 items-center">
          <GraduationCap />{" "}
          <p>
            <span className="font-bold">Docente:</span>{" "}
            {curso.profesionals?.length > 0 && curso.profesionals[0].nombre}
          </p>
        </span>
        <Separator />
        <span className="flex gap-2 items-center">
          <Clock /> {curso.duracion ? curso.duracion : "150 "} Horas
        </span>
        <Separator />
      </CardHeader>
      <CardFooter className="z-10">
        <Button size="sm" className="w-full font-bold rounded-2xl" asChild>
          <Link href={`/cursos-especializados/${curso.nombre}`}>Ver Curso</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CursoEspecializacionCard;
