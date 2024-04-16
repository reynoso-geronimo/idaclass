"use client";
import Link from "next/link";
import CursosOnDemandCategoria from "./cursosOnDemandCategoria";
import {  useState } from "react";


const CursosOnDemandCategorias = ({ categoriasOnDemand, cursos }) => {
  const [activo, setActivo] = useState();
  

  return (
    <section>
      <nav className="container sticky top-[64px] z-50 flex items-center justify-evenly bg-gray-100 h-[60px] w-full gap-8">
        {categoriasOnDemand.map((categoriaOnDemand, index) => (
          <Link
            onClick={setTimeout(() => {
              setActivo(index)
            }, 500)}
            key={index}
            href={`#${categoriaOnDemand}`}
            className={`${activo===index&&"bg-idaclass4 text-white"} rounded-2xl font-bold border-idaclass4 text-idaclass4 border-2 py-2 text-center w-full`}
          >
            Categoria {categoriaOnDemand}
          </Link>
        ))}
      </nav>
      {categoriasOnDemand.map((categoriaOnDemand, index) => (
        <CursosOnDemandCategoria
          key={index}
          categoria={categoriaOnDemand}
          cursos={cursos}
          index={index}
          setActivo={setActivo}
        />
      ))}
    </section>
  );
};

export default CursosOnDemandCategorias;
