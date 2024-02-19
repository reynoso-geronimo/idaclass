import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import CursoFormacionCard from "./ui/curso-formacion-card";

const CursosFormacion = () => {
  const cursos = [
    {
      descuento: "70% Off",
      titulo: "Preparador Fisico",
      descripcion: "Contiene 2 modulos, 6 unidades",
      image: "/cursosFormacion/cursoimg1.jpg",
      hours: 15,
      days: 1.5,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Personal Trainer",
      descripcion: "Contiene 2 modulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Instructor de Musculacion",
      descripcion: "Contiene 2 modulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Gestion de Gimnasio",
      descripcion: "Contiene 2 modulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Nutricion Deportiva",
      descripcion: "Contiene 2 modulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
  ];

  const OPTIONS = { align: "start" };
  return (
    <section className="my-12 sm:container">
      <TituloSeccion className={`mb-0 px-2`}>Cursos de formacion</TituloSeccion>
      <h2 className="text-center font-bold text-xl px-2">
        Sé parte de la nueva generacion de entrenadores
      </h2>
      <h2 className="text-center font-bold text-xl mb-4 px-2">
        Forja tu camino en el mundo del Sport fitness
      </h2>
      <div className="max-w-2xl mx-auto  lg:max-w-full">
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
