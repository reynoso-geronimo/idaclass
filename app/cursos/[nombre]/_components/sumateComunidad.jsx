import TituloSeccion from "@/components/ui/titulo-seccion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SumateComunidad = () => {
  return (
    <section className="container bg-gray-300 flex flex-col lg:flex-row gap-[15%] py-8 max-lg:text-center">
      <div className="flex flex-col">
        <TituloSeccion
          className={"text-4xl lg:text-left lg:text-5xl lg:whitespace-nowrap"}
        >
          ¡Sumate a la <br className="max-lg:hidden" /> Comunidad{" "}
          <span className="text-idaclass4">Class</span>
          <span className="text-idaclass3">era!</span>
        </TituloSeccion>
        <Link
          href="/comunidad"
          className="w-fit max-lg:hidden bg-idaclass4 rounded-3xl py-2 px-12 flex items-center justify-center text-white font-bold text-sm gap-3"
        >
          <ArrowRight size={20} strokeWidth={3} /> COMUNIDAD CLASSERA
        </Link>
      </div>
      <div className="lg:w-1/3 space-y-8">
        <h3 className="font-bold text-lg lg:text-2xl text-balance">
          “Conectado para transformar el ecosistema Sport Fitness”
        </h3>
        <p className=" text-balance">
          La comunidad classera es un espacio diseñado para impulsar todo el
          ecosistema Sport Fitness. <br />
          <span className="font-bold">
            ¡Te invitamos a ser parte de esta revolución y transformar tus
            aspiraciones en logos tangibles!
          </span>
        </p>
        <Link
          href="/comunidad"
          className="w-full lg:hidden bg-idaclass4 rounded-3xl py-2 flex items-center justify-center text-white font-bold text-sm gap-3"
        >
          <ArrowRight size={20} strokeWidth={3} /> COMUNIDAD CLASSERA
        </Link>
      </div>
    </section>
  );
};

export default SumateComunidad;
