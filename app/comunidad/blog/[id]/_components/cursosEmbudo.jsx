import { CursoCard } from "@/app/cursos-formacion/[nombre]/_components/cursoFormacionOtrosCursos";

const CursosEmbudo = async ({ cursosEmbudo }) => {
  return (
    <>
      <h2 className="text-white font-bold text-2xl text-center">
      Conoce nuestras capacitaciones
      </h2>
      <div className="space-y-4">
        {cursosEmbudo.map(curso => (
          <CursoCard key={curso.id} curso={curso} className={"w-full"}/>
        ))}
      </div>
    </>
  );
};

export default CursosEmbudo;
