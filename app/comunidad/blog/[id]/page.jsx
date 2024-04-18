import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import Blog from "@/models/Blog";
import BlockRendererClient from "@/components/ui/BlockRendererClient";
import { Separator } from "@/components/ui/separator";
import Compartir from "./_components/compartir";
import { Badge } from "@/components/ui/badge";
import { textoEnDegrade } from "@/lib/constants";

const page = async ({ params }) => {
  const post = await Blog.findByPk(params.id);
  const contenido = JSON.parse(post.cuerpo);

  return (
    <main className="">
      <div className=" w-full lg:aspect-[16/7] bg-gradient-to-t lg:bg-gradient-to-r from-[#1E2E57] from-65% lg:from-30% to-transparent lg:container relative text-white">
        <div className="max-lg:relative  w-[100vw] max-lg:aspect-video">
          <Image
            src={"/blog/" + post.foto}
            alt={post.titulo}
            fill
            className={`object-contain object-top lg:object-cover -z-10`}
          />
        </div>
        <div className="w-full max-w-xl flex flex-col h-full justify-start gap-4 lg:justify-evenly lg:ml-0 container">
          <div className="flex">
            <Badge className={"bg-orange-500 font-normal"}>
              NO SE QUE VA ACA
            </Badge>
            <Badge
              variant={"outline"}
              className={
                "-translate-x-4 pl-4 border-orange-500 italic text-orange-500"
              }
            >
              Publicado{" "}
              {new Date(post.created_at).toLocaleDateString(undefined, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Badge>
          </div>
          <div className="space-y-4">
            <h1 className="font-black text-4xl lg:text-5xl text-pretty">
              {post.titulo}
            </h1>
            <h2 className={`${textoEnDegrade} text-lg lg:text-2xl font-bold`}>
              SUBTITULO
            </h2>
          </div>
          <div className="w-auto flex items-center mt-8 mb-8 gap-2">
            <Image
              src={""}
              height={60}
              width={60}
              className="bg-white rounded-full"
              alt=""
            />
            <div className="pr-2">
              <p className="font-medium text-sm">Escrtio por:</p>
              <h2 className="font-bold text-lg">Prof. Relleno Emeritus</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="font-bold text-2xl my-4 text-idaclass">Introduccion</h3>
        <p className="text-base">{post.introduccion}</p>
        {/* <Separator className="bg-gray-400 my-4" />
        <div className="flex justify-between items-center my-4">
          <Compartir />
        </div>

        <Separator className="bg-gray-400 my-4" /> */}
        <BlockRendererClient content={contenido} />
        <Toaster richColors position="top-right" />
      </div>
    </main>
  );
};

export default page;
