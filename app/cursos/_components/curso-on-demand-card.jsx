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

const CursoOnDemand = ({ curso }) => {
  return (
    <Card className={"min-h-[550px] mx-2 relative flex flex-col justify-end text-white rounded-3xl overflow-hidden"}>
      <Image
        src={`/${curso.imagen}`}
        alt="curso"
        fill
        className="object-cover"
      />
      <CardTitle className="text-white z-10 p-6 pb-0">{curso.nombre ? curso.nombre : "150 "}</CardTitle>
      <CardHeader className="flex justify-between z-10 ">
        {/* <CardTitle className="h-12 align-text-bottom">{curso.nombre}</CardTitle> */}
        <CardDescription className="text-white ">{curso.descripcion}</CardDescription>
        <Separator />
        <span className="flex gap-2">
          <GraduationCap /> <span className="font-bold">Docente:</span> Diego Maradona
        </span>
        <Separator />
        <span className="flex gap-2">
          <Clock /> {curso.horas ? curso.horas : "150 "} Horas
        </span>
        <Separator />
      </CardHeader>
      <CardFooter className="z-10">
        <Button size="sm" className="w-full font-bold rounded-2xl" asChild>
          <Link href={`/cursos/${curso.id}`}>Ver Curso</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CursoOnDemand;
