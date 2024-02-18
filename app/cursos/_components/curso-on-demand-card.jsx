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
    <Card className={" max-w-[400px] min-h-[350px] relative grid grid-row-4"}>
      <CardContent className={"p-0"}>
        <Link href={`/cursos/${curso.id}`}>
          <Image
            src={`/${curso.imagen}`}
            alt="curso"
            width={400}
            height={300}
            style={{
              width: "100%",
              height: "auto",
            }}
            className="cursor-pointer hover:brightness-110 ease-in duration-75"
          />
        </Link>
      </CardContent>
      <CardHeader className="flex justify-between">
        {/* <CardTitle className="h-12 align-text-bottom">{curso.nombre}</CardTitle> */}
        <CardDescription>{curso.descripcion}</CardDescription>
        <Separator />
        <span className="flex gap-2">
          <GraduationCap /> Docente: DIego Maradona{" "}
        </span>
        <span className="flex gap-2">
          <Clock /> {curso.horas ? curso.horas : "150 "} Horas
        </span>
      </CardHeader>
      <CardFooter className="self-end">
        <Button size="sm" className="w-full font-bold">
          Ver Curso
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CursoOnDemand;
