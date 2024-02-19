import React from "react";
import CasoExito from "./ui/caso-exito";
import TituloSeccion from "@/components/ui/titulo-seccion";

const CasosExito = () => {
  return (
    <section className="container">
      <TituloSeccion className={"mb-0"}>Historias que inspiran</TituloSeccion>
      <h3 className="text-center font-medium text-xl text-pretty my-2">Se uno de nuestros casos de exito</h3>
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto justify-items-center">
        <CasoExito />
        <CasoExito />
        <CasoExito />
        <CasoExito />
      </div>
    </section>
  );
};

export default CasosExito;
