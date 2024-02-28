import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";

import Blog from "@/models/Blog";

import BlockRendererClient from "@/components/ui/BlockRendererClient";
import { Separator } from "@/components/ui/separator";
import Compartir from "./_components/compartir";

const page = async ({ params }) => {
  const post = await Blog.findByPk(params.id);
  const contenido = JSON.parse(post.cuerpo);

  return (
    <main className="container max-w-4xl my-8">
      <h1 className="font-bold my-8 text-4xl ">{post.titulo}</h1>
      <p className="italic text-lg">{post.introduccion}</p>
      <Separator className="bg-gray-400 my-4" />
      <div className="flex justify-between items-center my-4">
        <p className="text-gray-500 ">
          Publicado :
          {new Date(post.created_at).toLocaleDateString(undefined, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <Compartir />
      </div>
      <Image
        src={"/blog/" + post.foto}
        alt={post.titulo}
        width={420}
        height={420}
        className={`rounded-lg object-cover w-full h-auto`}
      />
      <Separator className="bg-gray-400 my-4" />
      <BlockRendererClient content={contenido} />
      <Toaster richColors position="top-right" />
    </main>
  );
};

export default page;
