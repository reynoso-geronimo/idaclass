"use client";
import Link from "next/link";
import BlogCategoria from "./blogCategoria";
import { useState } from "react";

const BlogCategorias = ({ categoriasOnDemand, blogPosts }) => {
  const [activo, setActivo] = useState();

  // ordenar categoriasOnDemand por cantidad (descendiente)
  const sortedCategorias = categoriasOnDemand.slice().sort((a, b) => {
    const blogPostsA = blogPosts.filter(curso =>
      curso.categorias.some(c => c.nombre === a)
    );
    const blogPostsB = blogPosts.filter(curso =>
      curso.categorias.some(c => c.nombre === b)
    );
    return blogPostsB.length - blogPostsA.length; //  orden descendiente
  });

  return (
    <section>
      <nav className="max-lg:hidden container sticky top-[64px] z-50 flex items-center justify-evenly bg-gray-100 h-[60px] w-full gap-8">
        {sortedCategorias.map((categoriaOnDemand, index) => (
          <Link
            onClick={() => {
              setTimeout(() => {
                setActivo(index);
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
      <div className="flex flex-col gap-y-6 2xl:gap-y-16 mt-12">
        {sortedCategorias.map((categoria, index) => {
          // Filter courses for this category
          const blogPostsFiltrados = blogPosts.filter(curso =>
            curso.categorias.some(c => c.nombre === categoria)
          );

          return (
            <BlogCategoria
              key={categoria}
              categoria={categoria}
              index={index}
              setActivo={setActivo}
              blogPosts={blogPostsFiltrados}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogCategorias;
