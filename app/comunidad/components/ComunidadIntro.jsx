import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ComunidadIntro = () => {
  return (
    <section className="container flex max-lg:flex-col justify-around gap-12 my-12">
      <div className="lg:w-1/3 rounded-3xl relative text-white overflow-hidden flex flex-col justify-between p-8 pt-6">
        <Image
          src={`/comunidad/Imagen Card 1.png`}
          alt=""
          fill
          className="object-cover object-top -z-10"
        />
        <h3 className="relative top-0 text-2xl text-idaclass font-bold leading-none">
          Ida<span className="text-idaclass4">Class</span>
          <br />
          <span className="text-white">Job</span>{" "}
        </h3>

        <h4 className="font-bold text-xl mt-12 mb-4">
          Bolsa de Trabajo <br /> y Pasantías
        </h4>
        <p className="text-sm font-light">
          Descubre oportunidades emocionantes para dar el siguiente paso en tu
          carrera. Desde puestos de trabajo hasta experiencias de pasantías,
          conectamos talento con las mejores oportunidades del sector
        </p>
        <Button className="w-48 mx-auto rounded-3xl mb-0 mt-4" size="sm">
          ¡UNITE!
        </Button>
      </div>

      <div className="lg:w-1/3 rounded-3xl relative text-white overflow-hidden flex flex-col justify-between p-8 pt-6">
        <Image
          src={`/comunidad/Imagen Card 2.png`}
          alt=""
          fill
          className="object-cover object-top -z-10"
        />
        <h3 className="relative top-0 text-2xl text-idaclass font-bold leading-none">
          Ida<span className="text-idaclass4">Class</span>
          <br />
          <span className="text-white">Hub</span>{" "}
        </h3>

        <h4 className="font-bold text-xl mt-12 mb-4">
          Mundo de Conocimiento <br /> con nuestro Hub
        </h4>
        <p className="text-sm font-light">
          Encontrá blogs, notas de interés y contenido exclusivo que te
          mantendrán a la vanguardia de las últimas tendencias y desarrollo en
          el ámbito del SportFitness
        </p>
        <Button className="w-48 mx-auto rounded-3xl mb-0 mt-4" size="sm">
          ¡UNITE!
        </Button>
      </div>

      <div className="lg:w-1/3 rounded-3xl relative text-white overflow-hidden flex flex-col justify-between p-8 pt-6">
        <Image
          src={`/comunidad/Imagen Card 3.png`}
          alt=""
          fill
          className="object-cover object-top -z-10"
        />
        <h3 className="relative top-0 text-2xl text-idaclass font-bold leading-none">
          Ida<span className="text-idaclass4">Class</span>
          <br />
          <span className="text-white">Conecta</span>{" "}
        </h3>

        <h4 className="font-bold text-xl mt-12 mb-4">¡Conectate!</h4>
        <p className="text-sm font-light">
          Establecé conexiones significativas con expertos, líderes, mentores y
          profesionales de la Industria. Participá en webinars emocionantes que
          te brindarán insights valiosos y perspectivas inspiradoras.
        </p>
        <Button className="w-48 mx-auto rounded-3xl mb-0 mt-4" size="sm">
          ¡UNITE!
        </Button>
      </div>
    </section>
  );
};

export default ComunidadIntro;
