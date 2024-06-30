import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const caracteristicas = [
  {
    img: "/eventos/assets/Herramientas Digitales.svg",
    titulo: "Herramientas Digitales",
    texto:"Aprende a utilizar herramientas digitales para optimizar tu negocio"
  },
  {
    img: "/eventos/assets/Visibilidad.svg",
    titulo: "Visibilidad Online",
    texto:"Incrementa tu visibilidad online y atrae más clientes"
  },
  {
    img: "/eventos/assets/Contacto.svg",
    titulo: "Contacto",
    texto:"Conéctate con otros profesionales del sector Fitness"
  },
];
const OPTIONS = { align: "center" };
const EventoBeneficios = () => {
  return (
    <section className=" py-12 bg-idaclass5 container ">
      <div className="lg:hidden">
        <EmblaCarousel
          options={OPTIONS}
          slides={caracteristicas.map(caracteristica => (
            <Caracteristica key={caracteristica.titulo} {...caracteristica} />
          ))}
        />
      </div>
      <TituloSeccion className={"text-white"}>
        Que aprenderás
      </TituloSeccion>
      <div className="flex gap-x-6 gap-y-6 max-lg:hidden justify-items-center">
        {caracteristicas.map(caracteristica => (
          <Caracteristica key={caracteristica.titulo} {...caracteristica} />
        ))}
      </div>
    </section>
  );
};

export const Caracteristica = ({
  img = "/cursosEspecializacion/Modulos.svg",
  titulo = "Titulo",
  texto = "Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
}) => (
  <article className="mx-4 max-lg:h-[250px] container py-3 w-[280px] lg:w-full bg-gray-100 rounded-3xl text-center flex flex-col justify-start items-center gap-3">
    <Image src={img} alt={titulo} width={64} height={64} />
    <h3 className="text-idaclass text-xl font-bold">{titulo}</h3>
    <p className="text-xs lg:text-sm text-balance my-auto">{texto}</p>
  </article>
);

export default EventoBeneficios;
