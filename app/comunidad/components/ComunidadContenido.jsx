import { getBlogPostFromDb } from "@/app/actions";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { ArrowRight, CalendarClock, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const blogPost = await getBlogPostFromDb(3);
const ComunidadContenido = () => {
  return (
    <section className="container">
      <TituloSeccion className={`mb-0 px-0`}>
        Accede a contenido exclusivo
      </TituloSeccion>
      <h4 className="text-center mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, esse!
        Ratione a eius quidem animi quam eos fuga officia dolore odit, ipsam
        earum debitis rem praesentium vero libero ipsa quaerat?
      </h4>
      <div className="w-full flex max-lg:flex-col justify-between gap-12">
        <div className="">
          {/* BLOGPOSTS */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mb-4">
            {blogPost.map((post, index) => (
              <article
                className=" rounded-b-2xl rounded-t-3xl overflow-hidden"
                key={index}
              >
                <Image
                  src={"/blog/" + post.foto}
                  width={520}
                  height={520}
                  alt="Imagen de Blog"
                  className="bg-black aspect-video mx-auto text-white"
                />
                <div className="px-4 h-36 flex flex-col justify-between py-4 bg-gray-100">
                  <h5 className="leading-5 font-semibold line-clamp-[3]">
                    {post.titulo}
                  </h5>
                  <Link
                    href={`comunidad/blog/${post.id}`}
                    className="text-idaclass3 font-semibold text-sm text-right flex justify-end items-center gap-4"
                  >
                    SEGUIR LEYENDO
                    <ArrowRight className="inline" size={22} strokeWidth={3} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {/* FIN BLOGPOSTS */}
          {/* EVENTOs */}

          <div className="bg-emerald-400 flex max-lg:flex-col gap-4 py-2">
            <div className="w-full lg:w-1/2 bg-blue-500 aspect-video">Proximo Evento</div>
            <div className="w-full lg:w-1/2 bg-blue-500 aspect-video"></div>
          </div>
        {/* FIN EVENTOS */}
        </div>

        {/* SIDEBAR */}

        <div className="bg-black min-w-80 rounded-3xl overflow-hidden flex flex-col">
          <div className="h-1/2 flex flex-col justify-between text-white text-xs font-semibold">
            <h2
              className={`text-center py-2 my-0 text-2xl bg-idaclass flex items-center justify-center`}
            >
              <Newspaper className="inline mr-2" strokeWidth={2.5} size={26} />
              Noti
              <span className="text-idaclass3 ">Class</span>
            </h2>
            <article className="border-b border-gray-500 flex justify-between items-center p-4 h-full">
              <h4>Titulo de la noticia</h4>{" "}
              <Link href={"/"} className="text-center leading-4 text-idaclass3">
                SEGUIR <br />
                LEYENDO
              </Link>
            </article>
            <article className="border-b border-gray-500 flex justify-between items-center p-4 h-full">
              <h4>Titulo de la noticia</h4>{" "}
              <Link href={"/"} className="text-center leading-4 text-idaclass3">
                SEGUIR <br />
                LEYENDO
              </Link>
            </article>
            <article className="border-b border-gray-500 flex justify-between items-center p-4 h-full">
              <h4>Titulo de la noticia</h4>{" "}
              <Link href={"/"} className="text-center leading-4 text-idaclass3">
                SEGUIR <br />
                LEYENDO
              </Link>
            </article>
          </div>
          <div className="h-1/2 flex flex-col justify-between text-white text-xs font-semibold">
            <h2
              className={`text-center py-2 my-0 text-2xl bg-idaclass flex items-center justify-center`}
            >
              <CalendarClock
                className="inline mr-2"
                strokeWidth={2.5}
                size={26}
              />
              Agenda de <span className="text-idaclass3">&#160; Eventos</span>
            </h2>
            <article className="border-b border-gray-500 flex justify-between items-center p-4 h-full">
              <h4>Titulo del evento</h4>{" "}
              <Link href={"/"} className="text-center leading-4 text-idaclass3">
                SEGUIR <br />
                LEYENDO
              </Link>
            </article>
            <article className="border-b border-gray-500 flex justify-between items-center p-4 h-full">
              <h4>Titulo del evento</h4>{" "}
              <Link href={"/"} className="text-center leading-4 text-idaclass3">
                SEGUIR <br />
                LEYENDO
              </Link>
            </article>
            <article className="border-b border-gray-500 flex justify-between items-center p-4 h-full">
              <h4>Titulo del evento</h4>{" "}
              <Link href={"/"} className="text-center leading-4 text-idaclass3">
                SEGUIR <br />
                LEYENDO
              </Link>
            </article>
          </div>
        </div>

        {/* FIN SIDEBAR */}
      </div>
    </section>
  );
};

export default ComunidadContenido;
