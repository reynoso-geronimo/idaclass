import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import BlockRendererClient from "@/components/ui/BlockRendererClient";
import { Badge } from "@/components/ui/badge";
import { textoEnDegrade } from "@/lib/constants";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Sidebar from "./_components/sidebar";
import { getBlogPostFromDb, getBlogPostsFromDb } from "@/app/actions";
import CursoAsociado from "./_components/cursoAsociado";
import Contenido from "./_components/contenido";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = async ({ params }) => {
  const [post, posts] = await Promise.all([
    getBlogPostFromDb(params.id),
    getBlogPostsFromDb(3, params.id),
  ]);
  const contenido = JSON.parse(post.cuerpo);

  return (
    <main className="">
      <div className=" w-full lg:aspect-[16/7] bg-gradient-to-t lg:bg-gradient-to-r from-[#1E2E57] from-60% md:from-40% lg:from-30% lg:container relative text-white">
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
          <div className="w-auto flex items-center mt-8 mb-8 gap-2">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src={`/profesional/${`profesional.nombre`}.png`}
                alt={`profesional.nombre`}
              />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <div className="pr-2">
             <p className="font-medium text-sm">Escrtio por:</p>
              <h2 className="font-bold text-lg">{post.profesionals[0].nombre}</h2>
              <p className="font-medium text-sm">{post.profesionals[0].titulo}</p>
            </div>
          </div>
        )}
        </div>
      </div>
      <div className="container w-full h-80 lg:h-20 relative max-lg:bg-gradient-to-b from-[#01080D] to-[#151C26] text-white flex max-lg:flex-col items-center">
        <h2 className="font-bold text-2xl text-center pt-6 lg:pt-2 pb-2 lg:text-left">
          Sumate a la <br className="lg:hidden" />
          Comunidad Ida<span className="text-idaclass3">Class</span>
        </h2>
        <ArrowDown
          className="text-idaclass3 max-lg:mx-auto lg:mx-4 lg:-rotate-90"
          size={32}
          strokeWidth={3}
        />
        <h3 className="text-sm py-4">
          Te invitamos a ser parte de esta revolución y{" "}
          <br className="max-lg:hidden" /> transformar tus aspiraciones en
          logros tangibles.
        </h3>
        {/* //!! que hacer con este link */}
        <Link
          href={"/signin"}
          className="w-full flex items-center justify-center rounded-2xl  lg:w-52 py-2.5 lg:mx-4 text-center bg-idaclass4 text-white font-bold text-sm"
        >
          ¡UNITE!
        </Link>

        <Image
          src={"/blog/bgWeb.png"}
          fill
          className="max-lg:hidden -z-10"
          alt=""
        />
        <Image
          src={"/blog/bgMobile.png"}
          fill
          className="lg:hidden object-contain object-right-bottom "
          alt=""
        />
      </div>
      <div className="container flex flex-col lg:flex-row gap-8 mt-12">
        <div className="w-full ">
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

          <CursoAsociado curso={post.cursos[0] ? post.cursos[0] : null} />
          <BlockRendererClient content={contenido} />
          <Toaster richColors position="top-right" />
        </div>
        <Sidebar posts={posts} />
      </div>
    </main>
  );
};

export default page;
