import {
  getBlogPostsDestacadosFromDB,
  getBlogPostsFromDB,
  getEventosFromDB,
} from "@/app/actions";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { ArrowBigRight, CalendarClock, Newspaper } from "lucide-react";
import Link from "next/link";
import React from "react";
import Eventos from "./eventos";

import PostCard from "./postCard";
import CardSidebar from "./cardSidebar";

const blogPosts = await getBlogPostsFromDB(3, null, true);
const blogPostDescatado = await getBlogPostsDestacadosFromDB(3);
const eventos = await getEventosFromDB(5);

const firstRow = eventos.slice(0, 2);
const secondRow = eventos.slice(2, 5);
const ComunidadContenido = () => {
  return (
    <section className="container">
      <TituloSeccion className={`mb-0 px-0`}>
        Accede a contenido exclusivo
      </TituloSeccion>
      <h4 className="text-center font-semibold mb-12 mt-4">
        Descubre contenido exclusivo y potencia tu conocimiento. Únete a la
        élite del fitness con nuestros recursos premium.
      </h4>
      <div className="w-full flex max-lg:flex-col justify-between items-stretch gap-8">
        <div className="lg:w-9/12 max-lg:max-w-lg mx-auto space-y-6">
          {/* BLOGPOSTS */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
            {blogPostDescatado.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
          {/* FIN BLOGPOSTS */}
          {/* EVENTOs */}

          <Eventos eventos={firstRow} />
          {/* FIN EVENTOS */}
        </div>

        {/* SIDEBAR */}

        <div className="bg-black w-full lg:w-3/12 rounded-3xl overflow-hidden flex flex-col lg:min-h-[650px] mx-auto max-w-lg">
          <div className="h-1/2 flex flex-col justify-between text-white text-xs font-semibold">
            <Link
              href={"/comunidad/blog/"}
              className={`text-center py-2 my-0 text-2xl bg-idaclass3 flex items-center justify-center`}
            >
              Otras notas
              <ArrowBigRight className=" mr-2" strokeWidth={2.5} size={32} />
            </Link>
            {blogPosts.map((post, index) => (
              <CardSidebar
                CardSidebar
                post={post}
                key={index}
                href={"comunidad/blog/"}
              />
            ))}
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
              Agenda de <span className="text-idaclass3">&#160;Eventos</span>
            </h2>
            {secondRow.map((evento, index) => (
              <CardSidebar CardSidebar evento={evento} key={index} />
            ))}
          </div>
        </div>

        {/* FIN SIDEBAR */}
      </div>
    </section>
  );
};

export default ComunidadContenido;
