"use client";
import { useEffect, useState } from "react";
import EmblaCarousel from "./ui/EmblaCarousel";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const OPTIONS = {};
const images = [
  {
    src: "/neurociencia.webp",
    alt: "neurociencia del deporte",
  },
  {
    src: "/prepfisico.webp",
    alt: "preparador fisico",
  },
  // ...
  {
    src: "/nutriciondeportiva.webp",
    alt: "nutricion deportiva",
  },
  {
    src: "/funcional.webp",
    alt: "funcional",
  },
  {
    src: "/funcionalcrosshiit.webp",
    alt: "funcional cross hiit",
  },
  {
    src: "/instructormusculacion.webp",
    alt: "instructor musculacion",
  },
  {
    src: "/personaltrainer.webp",
    alt: "personal trainer",
  },
];

const Hero = () => {
  const [anchoVentana, setAnchoVentana] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAnchoVentana(window.innerWidth);
      const manejarCambioTamaño = () => setAnchoVentana(window.innerWidth);
      window.addEventListener("resize", manejarCambioTamaño);
      return () => window.removeEventListener("resize", manejarCambioTamaño);
    }
  }, []);

  return (
    <div>
      {anchoVentana < 1024 ? (
        <>
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-[340px] md:max-w-[600px] mt-16 mb-4 mx-4 text-indigo-950 ">
            ¡ESTUDIA, TRABAJA Y EMPRENDE HOY!
          </h2>
          <EmblaCarousel slides={images} options={OPTIONS} />
          <h2 className="my-12 mx-8 text-center text-md uppercase text-blue-700 font-medium leading-6 tracking-[4px]	">
            Alcanza el exito como entrenador Obten una carrera rentable
            Transforma tu vida con IdaClass
          </h2>
        </>
      ) : (
        <>
          <div className="flex mt-16">
            <div className="w-1/2 text-center flex flex-col justify-around items-center">
              <h2 className="text-5xl font-extrabold mb-4 mx-4 text-indigo-950 ">
                ¡ESTUDIA, TRABAJA Y EMPRENDE HOY!
              </h2>
              <h2 className="text-md uppercase text-blue-700 font-medium tracking-[3px]	">
                Alcanza el exito como entrenador Obten una carrera rentable
                Transforma tu vida con IdaClass
              </h2>
              <Button size="lg" className='rounded-3xl m-10 font-bold w-44'>Ver todos los cursos</Button>
            </div>
            <div className="w-1/2">
              <EmblaCarousel slides={images} options={OPTIONS} />
            </div>
          </div>
          <Separator className="my-4 bg-gray-200" />
        </>
      )}
    </div>
  );
};

export default Hero;
