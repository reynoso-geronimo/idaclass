import { getCursosPorCategoriaFromDB } from "@/app/actions";
import Link from "next/link";
import React from "react";

const CursosSidebar = async ({ categoria }) => {
  let cursos = await getCursosPorCategoriaFromDB(null, categoria, 8);

  cursos.sort((a, b) => a.nombre.length - b.nombre.length);
  return (
    <div className="text-idaclass3 text-xs flex items-center justify-center flex-wrap font-semibold gap-2">
      {cursos.map(curso => (
        <div
          key={curso.id}
          className={`border-2 py-1 px-1.5 border-idaclass3  rounded-full w-fit order-${curso.nombre.length}`}
        >
          <Link href={`/cursos-especializados/${curso.nombre}`}>
            {curso.nombre}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CursosSidebar;
