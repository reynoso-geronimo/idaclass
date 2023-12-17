import React from "react";
import  EmblaCarousel  from "./ui/EmblaCarousel";

const OPTIONS = {}
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
  return (
    <div>
      <h2 className="text-3xl font-extrabold max-w-[340px] mt-16 mb-4 mx-4 text-indigo-950 ">
        ¡ESTUDIA, TRABAJA Y EMPRENDE HOY!
      </h2>
      <EmblaCarousel slides={images} options={OPTIONS} />
    </div>
  );
};

export default Hero;
