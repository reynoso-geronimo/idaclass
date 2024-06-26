"use client";
import Link from "next/link";
import CursosEspecializacionCategoria from "./cursosEspecializacionCategoria";
import { useState } from "react";

const CursosEspecializacionCategorias = ({ categoriasOnDemand, cursos }) => {
  
  const [freezeInView, setFreezeInView] = useState(false)
  const [activo, setActivo] = useState();
  // ordenar categoriasOnDemand por cantidad (descendiente)
  const sortedCategorias = categoriasOnDemand.slice().sort((a, b) => {
    const cursosA = cursos.filter(curso =>
      curso.categorias.some(c => c.nombre === a)
    );
    const cursosB = cursos.filter(curso =>
      curso.categorias.some(c => c.nombre === b)
    );
    return cursosB.length - cursosA.length; //  orden descendiente
  });

  return (
    <section>
      <nav className="max-lg:hidden container sticky top-[64px] z-50 flex items-center justify-evenly bg-gray-100 h-[60px] w-full gap-8">
        {sortedCategorias.map((categoriaOnDemand, index) => (
          <Link
          onClick={() => {
            setFreezeInView(true)
            setActivo(index);
            setTimeout(() => {
              setFreezeInView(false)
            }, 800);
          }}
            key={index}
            href={`#${categoriaOnDemand}`}
            className={`${
              activo === index && "bg-idaclass4 text-white"
            } rounded-2xl font-bold border-idaclass4 text-idaclass4 border-2 py-2 text-center w-full`}
          >
            Categoria {categoriaOnDemand}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col gap-y-6 2xl:gap-y-16">
        {sortedCategorias.map((categoria, index) => {
          // Filter courses for this category
          const cursosFiltrados = cursos.filter(curso =>
            curso.categorias.some(c => c.nombre === categoria)
          );

          return (
            <CursosEspecializacionCategoria
              key={categoria}
              categoria={categoria}
              index={index}
              setActivo={setActivo}
              cursos={cursosFiltrados}
              freezeInView={freezeInView}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CursosEspecializacionCategorias;
