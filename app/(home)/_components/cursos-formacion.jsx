import EmblaCarousel from "@/components/ui/EmblaCarousel";
import TituloSeccion from "@/components/ui/titulo-seccion";
import CursoFormacionCard from "./ui/curso-formacion-card";
import { getCursosFormacionFromDB } from "@/app/actions";

const CursosFormacion = async () => {
  const cursosFormacion = await getCursosFormacionFromDB();
  cursosFormacion.sort((a, b) => {
    if (a.nombre === "Preparación Física Deportiva") {
      return -1; // Mover este curso al principio del array
    } else if (b.nombre === "Preparación Física Deportiva") {
      return 1; // Mover este curso al final del array
    } else {
      return 0; // Mantener el orden de los demás cursos
    }
  });
  const OPTIONS = { align: "start" };
  return (
    <section className="my-12 container">
      <TituloSeccion className={`mb-0 px-2`} id="Cursos">
        Cursos de formación
      </TituloSeccion>
      <h2 className="text-center text-xl px-2 mb-4 text-balance">
        Alcanza tus sueños en el mundo del sport fitness, con nuestras
        formaciones profesionales.
      </h2>
      
        <EmblaCarousel
          options={OPTIONS}
          slides={cursosFormacion.map((curso, index) => (
            <CursoFormacionCard key={index} curso={curso} />
          ))}
        />
      
    </section>
  );
};

export default CursosFormacion;
