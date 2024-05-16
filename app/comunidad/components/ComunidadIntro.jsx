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
          Bolsa de empleo <br /> y pasantías
        </h4>
        <p className="text-sm font-light">
          Accede a nuestra bolsa de trabajo exclusiva y a nuestros convenios
          para obtener tus primeras experiencias laborales en gimnasios, centros
          deportivos y personas en búsqueda de profesionales certificados.
          Conéctate con las mejores oportunidades del sector y da un paso
          adelante en tu carrera.
        </p>
        <Button className="w-48 mx-auto rounded-3xl mb-0 mt-4" size="sm">
          Conoce las ofertas
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
          Únete a nuestro Hub y accede a contenido gratuito de alto valor para
          impulsar tus habilidades. Encontrarás masterclasses, webinars,
          podcasts, ebooks y más. ¡Descubre todos nuestros recursos gratuitos
          para potenciar tu camino laboral!
        </p>
        <Button className="w-48 mx-auto rounded-3xl mb-0 mt-4" size="sm">
          Descubre el Hub
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
          Amplía tu red de contactos con un espacio exclusivo de networking para
          conocer expertos, escuchar a líderes de la industria y estar en
          contacto con toda la comunidad. Encuentra mentores, proveedores y
          colegas que te acompañen a cumplir tus objetivos.
        </p>
        <Button className="w-48 mx-auto rounded-3xl mb-0 mt-4" size="sm">
          Únete a la comunidad
        </Button>
      </div>
    </section>
  );
};

export default ComunidadIntro;
