import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import StatisticsCard from "./statistics-card";

const Header = () => {
  return (
    <header className="container grid md:grid-cols-2 mt-12 gap-y-4">
      <div className="flex flex-col gap-4 ">
        <Badge variant={"secondary"} className={"bg-[#99DBF4] hover:bg-[#99DBF4]/80 w-fit text-md "}>
          Curso Online + Clases en Vivo
        </Badge>
        <h1 className="text-5xl font-bold">
          Conviértete en{" "}
          <span className="text-[#99DBF4]">
            <br /> Personal Trainer
          </span>
        </h1>
        <h2 className="text-2xl">Tu pasión por el fitness puede ser tu próximo trabajo</h2>
        <h3 className="text-md">Doble certificación con aval internacional</h3>
        <h3 className="text-md">Clases en vivo + materiales grabados</h3>
        <h3 className="text-md">Práctica real y desarrollo de proyectos propios</h3>
        <Badge className="flex gap-2 px-4 py-1.5 text-lg bg-black hover:bg-black/80 w-fit">
          Comprar Curso <ArrowRight size={18} />
        </Badge>
      </div>
      <div className="relative hidden md:block">
        <Image src="/v3/header-desktop.png" alt="Personal Trainer" width={600} height={600} />
        <div className="absolute top-32 left-14">
          <StatisticsCard />
        </div>
      </div>
      <div className="relative block md:hidden mb-24">
        <Image src="/v3/v3.png" alt="Personal Trainer" width={600} height={600} className="rounded-2xl"/>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[280px] transform-gpu">
          <StatisticsCard />
        </div>
      </div>
    </header>
  );
};

export default Header;
