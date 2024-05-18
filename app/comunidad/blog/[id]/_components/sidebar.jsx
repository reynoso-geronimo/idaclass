import React from "react";
import Asesorate from "@/components/asesorate";
import Compartir from "./compartir";
import PostCard from "@/app/comunidad/components/postCard";
import EstudiaConNosotros from "@/components/estudiaConNosotros";
import CursosSidebar from "./cursosSidebar";
import CursosEmbudo from "./cursosEmbudo";

const Sidebar = ({ posts, categoria, curso, cursosEmbudo }) => {
  cursosEmbudo.forEach(curso => {
    console.log(curso.nombre);
  });
  return (
    <div className="w-full lg:w-[330px] max-lg:grid grid-cols-1 py-6 space-y-6 bg-[#020817] px-8 lg:px-4 lg:rounded-2xl mb-8">
      {cursosEmbudo?.length > 0 && <CursosEmbudo cursosEmbudo={cursosEmbudo} />}
      <div className="w-full grid grid-cols-1 mb-4 gap-6">
        <h2 className="text-white font-bold text-2xl text-center">
          Otras notas que pueden interesarte
        </h2>
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
      <div className="text-white font-bold text-2xl text-center flex flex-col items-center py-8 gap-6 border-y border-gray-700">
        ¿Te gustó el artículo?
        <Compartir />
      </div>
      <div className="space-y-6">
        <h2 className="text-white font-bold text-2xl text-center">
          ¡Estudiá con nosotros!
        </h2>
        <EstudiaConNosotros sideBar={true} />
      </div>
      <div className="space-y-6">
        <h2 className="text-white font-bold text-2xl text-center">
          Cursos que podrian interesarte
        </h2>
        <CursosSidebar categoria={categoria} />
      </div>

      <div className="space-y-6">
        <h2 className="text-white font-bold text-2xl text-center">Contacto</h2>
        <Asesorate sideBar={true} />
      </div>
    </div>
  );
};

export default Sidebar;
