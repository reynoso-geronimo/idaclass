import CursoEspecializacionCard from "@/app/cursos-especializados/_components/cursoEspecializacionCard";

const CursosEmbudo = async ({ cursosEmbudo }) => {
  return (
    <>
    <h2 className="text-white font-bold text-2xl text-center">
         SUPER DUPER EMBUDO
        </h2>
    <div className="space-y-4">
      {cursosEmbudo.map(curso => (
        <CursoEspecializacionCard key={curso.id} curso={curso}/>
      ))}
    </div>
    </>
  );
};

export default CursosEmbudo;
