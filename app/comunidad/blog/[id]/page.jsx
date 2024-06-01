import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import BlockRendererClient from "@/components/ui/BlockRendererClient";
import { Badge } from "@/components/ui/badge";
import { textoEnDegrade } from "@/lib/constants";
import Sidebar from "./_components/sidebar";
import { getBlogPostFromDB, getBlogPostsFromDB } from "@/app/actions";
import CursoAsociado from "./_components/cursoAsociado";
import Contenido from "./_components/contenido";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UniteComunidad from "./_components/uniteComunidad";

const page = async ({ params }) => {
  const [post, posts] = await Promise.all([
    getBlogPostFromDB(params.id),
    getBlogPostsFromDB(3, params.id),
  ]);
  const contenido = JSON.parse(post.cuerpo);

  return (
    <main className="">
      <div className=" w-full pb-8 lg:aspect-[16/7] lg:container relative text-white">
        <Image
          src={`/blog/headerMobile/${post.titulo}.png`}
          alt={post.titulo}
          fill
          priority
          className={`w-full h-auto object-top object-cover -z-10 lg:hidden`}
        />
        <div className="max-lg:relative  w-[100vw] max-lg:aspect-video">
          <Image
            src={`/blog/headerWeb/${post.titulo}.png`}
            alt={post.titulo}
            fill
            priority
            className={`w-full h-auto object-top lg:object-cover -z-10 max-lg:hidden`}
          />
        </div>
        <div className="w-full max-w-xl flex flex-col h-full justify-start gap-4 lg:justify-evenly lg:ml-0 container">
          <div className="flex">
            <Badge
              className={"bg-orange-500 font-normal z-10 hover:bg-orange-500"}
            >
              {post.categorias[0].nombre || " "}
            </Badge>
            <Badge
              variant={"outline"}
              className={
                "-translate-x-6 pl-6 border-orange-500 italic text-orange-500"
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
              {post.subtitulo}
            </h2>
          </div>
          {post.profesionals[0] && (
            <div className="w-auto flex items-center gap-2">
              <Avatar className="h-14 w-14">
                <AvatarImage
                  src={`/profesional/${post.profesionals[0].nombre}.png`}
                  alt={`${post.profesionals[0].nombre}`}
                />
                <AvatarFallback>PR</AvatarFallback>
              </Avatar>
              <div className="pr-2">
                <p className="font-medium text-sm">Escrtio por:</p>
                <h2 className="font-bold text-lg">
                  {post.profesionals[0].nombre}
                </h2>
                <p className="font-medium text-sm">
                  {post.profesionals[0].titulo}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <UniteComunidad />
      <div className="px-0 container flex flex-col lg:flex-row gap-8 mt-12">
        <div className="w-full px-8">
          <div className="lg:flex lg:divide-x-[2px] gap-1 pt-2 divide-black">
            <p className="font-bold text-orange-500">
              {post.categorias[0].nombre}
            </p>
            <p className="lg:pl-1">{post.titulo}</p>
          </div>

          <Contenido />
          <h3 className="font-bold text-2xl my-4 text-idaclass">
            Introduccion
          </h3>
          <p className="text-base">{post.introduccion} </p>

          <CursoAsociado
            curso={post.cursos_formacions[0] ? post.cursos_formacions[0] : null}
          />
          <BlockRendererClient content={contenido} />
          <Toaster richColors position="top-right" />
        </div>
        <Sidebar
          posts={posts}
          categoria={post.categorias[0].id || " "}
          cursosEmbudo={post.cursosEmbudo}
        />
      </div>
    </main>
  );
};

export default page;
