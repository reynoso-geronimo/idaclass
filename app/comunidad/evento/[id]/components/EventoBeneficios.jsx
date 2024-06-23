import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const caracteristicas = [
  {
    img: "/cursosEspecializacion/Modulos.svg",
    titulo: "Módulos de Aprendizaje",
    texto:
      "Los cursos están divididos en secciones con diferentes enfoques del tema principal. Cada una trata un aspecto específico para facilitar el aprendizaje.",
  },
  {
    img: "/cursosEspecializacion/Instructivos.svg",
    titulo: "Videos Instructivos",
    texto:
      "Encontrarás videos dinámicos y entretenidos que explicarán los conceptos de forma visual y simple..",
  },
  {
    img: "/cursosEspecializacion/Material.svg",
    titulo: "Material de Lectura",
    texto:
      "Tendrás material detallado para complementar los módulos de aprendizaje y obtener una comprensión profunda del tema, a tu propio ritmo.",
  },
  {
    img: "/cursosEspecializacion/Actividades.svg",
    titulo: "Actividades Prácticas",
    texto:
      "Ejercicios interactivos, proyectos prácticos o casos de estudio que te permitirán aplicar lo que han aprendido en situaciones reales.",
  },
  {
    img: "/cursosEspecializacion/Evaluaciones.svg",
    titulo: "Evaluaciónes y Exámenes",
    texto:
      "Están diseñados para medir la comprensión del material y proporcionarte retroalimentación útil para mejorar tu aprendizaje.",
  },
  {
    img: "/cursosEspecializacion/Recursos.svg",
    titulo: "Recursos Adicionales",
    texto:
      "Tendrás disponibles recursos adicionales para enriquecer tu experiencia. Encontrarás libros recomendados, conferencias grabadas, artículos, etc.",
  },
  {
    img: "/cursosEspecializacion/Acceso.svg",
    titulo: "Acceso Ilimitado",
    texto:
      "Tendrás acceso de por vida. Podrás hacerlo a tu ritmo y volver a revisar el material del curso todas las veces que lo necesites.",
  },
  {
    img: "/cursosEspecializacion/Certificacion.svg",
    titulo: "Certificación",
    texto:
      "Podrás validar tus estudios con una certificación reconocida por IdaClass, con autenticación QR exclusiva..",
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
        Beneficios de asistir al Webinar
      </TituloSeccion>
      <div className="grid grid-cols-4 gap-x-6 gap-y-6 max-lg:hidden justify-items-center">
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
