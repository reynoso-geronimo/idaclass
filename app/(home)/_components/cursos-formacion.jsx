import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import CursoFormacionCard from "./ui/curso-formacion-card";
import { getCursosFormacionFromDB } from "@/app/actions";

const CursosFormacion = async () => {
  const cursosFormacion = await getCursosFormacionFromDB();
  

  const OPTIONS = { align: "start" };
  return (
    <section className="my-12 sm:container">
      <TituloSeccion className={`mb-0 px-2`} id="Cursos">Cursos de formación</TituloSeccion>
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
