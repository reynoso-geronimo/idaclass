import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import React from "react";

const Beca = () => {
  return (
    <section className="w-full container ">
    
        <TituloSeccion className={`mb-2`}>
          Obtén tu Beca<span className="text-idaclass4">Class</span>
        </TituloSeccion>
        <h3 className="mb-2 text-pretty text-center">
          Se parte de nuestra de la comunidad Classera y accede a nuestras Becas
          exclusivas beneficios y descuentos.
        </h3>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="bg-black w-1/2 aspect-square"></div>
          <div className="bg-black w-1/2 aspect-square"></div>
        </div>
     
    </section>
  );
};

export default Beca;
