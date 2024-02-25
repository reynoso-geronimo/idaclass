import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import CursoFormacionCard from "./ui/curso-formacion-card";
import { getCursosFormacionFromDB } from "@/app/actions";

const CursosFormacion = async () => {
  const cursosFormacion = await getCursosFormacionFromDB();
  const cursos = [
    {
      descuento: "70% Off",
      titulo: "Preparador Físico",
      descripcion: "Contiene 2 módulos, 6 unidades",
      image: "/cursosFormacion/cursoimg1.jpg",
      hours: 15,
      days: 1.5,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Personal Trainer",
      descripcion: "Contiene 2 módulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Instructor de Musculación",
      descripcion: "Contiene 2 módulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Gestion de Gimnasio",
      descripcion: "Contiene 2 módulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
    {
      descuento: "70% Off",
      titulo: "Nutrición Deportiva",
      descripcion: "Contiene 2 módulos, 6 unidades",
      image: "https://source.unsplash.com/random/150x150",
      hours: 590 + "  horas",
      days: 1,
      turn: "Noche",
    },
  ];

  const OPTIONS = { align: "start" };
  return (
    <section className="my-12 sm:container">
      <TituloSeccion className={`mb-0 px-2`}>Cursos de formación</TituloSeccion>
      <h2 className="text-center text-xl px-2 mb-4">
        Sé parte de la nueva generación de entrenadores
        <br />
        Forja tu camino en el mundo del Sport fitness
      </h2>
      <div className="max-w-2xl mx-auto  lg:max-w-full">
        <EmblaCarousel
          options={OPTIONS}
          slides={cursosFormacion.map((curso, index) => (
            <CursoFormacionCard key={index} curso={curso} />
          ))}
        />
      </div>
    </section>
  );
};

export default CursosFormacion;
