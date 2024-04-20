import React from "react";
import Asesorate from "@/components/asesorate";
import Beca from "@/components/beca";
import Compartir from "./compartir";
import PostCard from "@/app/comunidad/components/postCard";
import EstudiaConNosotros from "@/components/estudiaConNosotros";
import EnsenaConNosotros from "@/components/ensenaConNosotros";

const Sidebar = ({ posts }) => {
  return (
    <div className="w-full lg:w-[330px] max-lg:grid grid-cols-1 md:grid-cols-2 py-6 space-y-6 bg-[#020817] px-8 lg:rounded-2xl">
      <div className="w-full grid grid-cols-1 mb-4  gap-6">
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
      <h2 className="text-white font-bold text-2xl text-center">
        ¡Estudiá con nosotros!
      </h2>
      <EstudiaConNosotros sideBar={true} />
      <Beca sideBar={true} />
      <h2 className="text-white font-bold text-2xl text-center">¡Enseñá con nosotros!</h2>
      <EnsenaConNosotros sideBar={true} />
      <h2 className="text-white font-bold text-2xl text-center">Contacto</h2>
      <Asesorate sideBar={true} />
    </div>
  );
};

export default Sidebar;
