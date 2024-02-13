import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import React from "react";

const Beca = () => {
  return (
    <section className="w-full lg:w-1/2   container ">
      <div className="w-[90%]  mx-auto">
        <TituloSeccion className={`mt-0`}>
          Accede a nuestras Becas educativas !
        </TituloSeccion>
        <p className="font-bold">
          Nuestra misión es democratizar la educación de calidad en
          Latinoamérica. Para eso, te ofrecemos una beca del 70% para que puedas
          capacitarte y crecer profesionalmente.
        </p>
        <TituloSeccion className={`mt-0`}>Requisitos</TituloSeccion>

        <Image
          src={"/img/beca.png"}
          width={950}
          height={400}
          className="border border-black"
          alt="beca"
        />

        <div className="text-center grid grid-cols-2 font-bold">
          <ol>requisito </ol>
          <ol>requisito </ol>
          <ol>requisito </ol>
          <ol>requisito </ol>
          <ol>requisito </ol>
          <ol>requisito </ol>
        </div>
      </div>
    </section>
  );
};

export default Beca;
