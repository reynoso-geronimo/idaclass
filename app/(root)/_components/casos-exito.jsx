import React from "react";
import CasoExito from "./ui/caso-exito";
import TituloSeccion from "@/components/ui/titulo-seccion";

const CasosExito = () => {
  return (
    <section className="container">
      <TituloSeccion className={"text-left"}>Mas de 10000000 Estudiantes nos recomiendan</TituloSeccion>
      <div className="grid md:grid-cols-2 gap-4">
        <CasoExito />
        <CasoExito />
        <CasoExito />
        <CasoExito />
      </div>
    </section>
  );
};

export default CasosExito;