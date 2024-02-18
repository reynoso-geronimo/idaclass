import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import CursoFormacionCard from "./ui/curso-formacion-card";

const CursosFormacion = () => {
  const cursos = [
    {
      title: "70% Off",
      descripcion: "Aprende a programar páginas web increíbles desde cero",
      image: "/cursosFormacion/cursoimg1.jpg",
      hours: 15,
      days: 1.5,
      turn: "Noche",
    },
    {
      title: "70% Off",
      descripcion:
        "Fórmate como Personal Trainer con los mejores docentes con un modelo híbrido que contempla clases online, actividades presenciales y un set de herramientas educativa",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      title: "70% Off",
      descripcion:
        "Fórmate como Personal Trainer con los mejores docentes con un modelo híbrido que contempla clases online, actividades presenciales y un set de herramientas educativa",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      title: "70% Off",
      descripcion:
        "Fórmate como Personal Trainer con los mejores docentes con un modelo híbrido que contempla clases online, actividades presenciales y un set de herramientas educativaia Artificial en los negocios",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
  ];

  const OPTIONS = { align: "start" };
  return (
    <section className="my-12 ">
      <TituloSeccion className={`mb-0`}>Cursos de formacion</TituloSeccion>
      <h2 className="text-center font-bold text-xl text-gray-700 ">
        Sé parte de la nueva generacion de entrenadores
      </h2>
      <h2 className="text-center font-bold text-xl text-gray-700 mb-4">
        Forja tu camino en el mundo del Sport fitness
      </h2>
      <div className="max-w-2xl mx-auto container lg:max-w-full">
        <EmblaCarousel
          options={OPTIONS}
          slides={cursos.map((curso, index) => (
            <CursoFormacionCard key={index} curso={curso} index={index} />
          ))}
        />
      </div>
    </section>
  );
};

export default CursosFormacion;
