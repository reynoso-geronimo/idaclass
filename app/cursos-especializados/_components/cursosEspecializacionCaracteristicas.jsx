import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const caracteristicas = [
  {
    img: "/cursosEspecializacion/Modulos.svg",
    titulo: "Módulos de Aprendizaje",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
  {
    img: "/cursosEspecializacion/Instructivos.svg",
    titulo: "Videos Instructivos",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
  {
    img: "/cursosEspecializacion/Material.svg",
    titulo: "Material de Lectura",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
  {
    img: "/cursosEspecializacion/Actividades.svg",
    titulo: "Actividades Prácticas",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
  {
    img: "/cursosEspecializacion/Evaluaciones.svg",
    titulo: "Evaluaciónes y Exámenes",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
  {
    img: "/cursosEspecializacion/Recursos.svg",
    titulo: "Recursos Adicionales",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
  {
    img: "/cursosEspecializacion/Acceso.svg",
    titulo: "Acceso Ilimitado",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
  {
    img: "/cursosEspecializacion/Certificacion.svg",
    titulo: "Certificación",
    texto:
      " Los cursos se dividen en módulos o secciones que cubean diferentes aspectos del tema principal.",
  },
];
const OPTIONS = { align: "center" };
const CursosEspecializacionCaracteristicas = () => {
  return (
    <section className="container mb-8">
      <div className="lg:hidden">
        <EmblaCarousel
          options={OPTIONS}
          slides={caracteristicas.map(caracteristica => (
            <Caracteristica key={caracteristica.titulo} {...caracteristica} />
          ))}
        />
      </div>
      <TituloSeccion className={"lg:my-12"}>
        Características{" "}
        <span className="text-transparent bg-gradient-to-b from-idaclass3 to-idaclass4 bg-clip-text max-lg:block">On Demand</span>
      </TituloSeccion>
      <div className="grid grid-cols-4 gap-x-6 gap-y-6 max-lg:hidden">
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
  <article className="mx-4 h-[250px] container py-3 w-[280px] lg:w-full bg-gray-100 rounded-3xl text-center flex flex-col justify-evenly items-center gap-3">
    <Image src={img} alt={titulo} width={64} height={64} />
    <h3 className="text-idaclass text-xl font-bold">{titulo}</h3>
    <p className="text-sm text-pretty">{texto}</p>
  </article>
);

export default CursosEspecializacionCaracteristicas;
