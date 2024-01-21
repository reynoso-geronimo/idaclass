import React from "react";
import CasoExito from "./ui/caso-exito";

const CasosExito = () => {
  return (
    <section className="container">
      <h1>Mas de 10000000 Estudiantes nos recomiendan</h1>
      <div className="grid grid-cols-2 gap-4">
      <CasoExito/>
      <CasoExito/>
      <CasoExito/>
      <CasoExito/>
      </div>
    </section>
  );
};

export default CasosExito;
