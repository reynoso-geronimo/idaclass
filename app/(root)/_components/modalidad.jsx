import TituloSeccion from "@/components/ui/titulo-seccion";
import modalidad1 from "../../../public/modalidad/IdaClass Web Img 6.2.jpg";
import modalidad2 from "../../../public/modalidad/modalidad2.webp";
import modalidad3 from "../../../public/modalidad/modalidad3.webp";
import Carousel from "./ui/carousel";

const slides = [
  {
    src: modalidad1,
    alt: "modalidad",
    // text: "Desarrolla tu futuro",
  },
  {
    src: modalidad2,
    alt: "modalidad",
    text: "Aprende haciendo",
  },
  {
    src: modalidad3,
    alt: "modalidad",
    text: "Expertos internacionales",
  },
];

const Modalidad = () => {
  return (
    <>
    
      <section className="text-center flex flex-col items-center w-full">
        <TituloSeccion className={`mb-2 px-2`}>
          Programa de educacion continua
        </TituloSeccion>
        <h3 className="text-center font-bold text-xl text-gray-700 max-w-md mb-4 px-2">
          Lleva tu carrera a otro nivel con los cursos de especializacion on demand a tu ritmo.
        </h3>

        <Carousel slides={slides} />
      </section>
    </>
  );
};

export default Modalidad;
