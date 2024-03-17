"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Partners from "@/components/partnersEducativos";
import { sobreNosotros } from "@/lib/constants";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HeroParallaxNosotros } from "./_components/hero";
import { HoverEffect } from "@/components/ui/card-hover";
import Count from "./_components/count";

export const valores = [
  {
    title: "Innovación",
    description:
      "Abrazamos la tecnología y la innovación en la educación, proporcionando un ambiente de aprendizaje virtual dinámico y accesible.",
    // link: "https://netflix.com",
  },
  {
    title: "Emprendedurismo",
    description:
      "Fomentamos el espíritu emprendedor en cada uno de nuestros estudiantes. En IdaClass, creemos en el poder de la innovación y la creatividad para transformar el mundo del fitness y el bienestar. ¡Sé valiente, sé audaz, sé emprendedor!",
    // link: "https://netflix.com",
  },
  {
    title: "Liderazgo",
    description:
      "En IdaClass, fomentamos el liderazgo en todos los niveles. Nos esforzamos por inspirar a nuestros estudiantes a convertirse en líderes en sus campos, capacitándolos con las habilidades y la confianza necesarias para liderar con éxito en el mundo del fitness y el bienestar.",
    // link: "https://google.com",
  },
  {
    title: "Inclusión",
    description:
      "La inclusión es un pilar fundamental de nuestra comunidad en IdaClass. Nos comprometemos a crear un ambiente acogedor y diverso donde cada persona se sienta valorada y respetada. Celebramos la diversidad en todas sus formas y promovemos la igualdad de oportunidades para todos.",
    // link: "https://meta.com",
  },
];

const Page = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="max-w-full">
        <HeroParallaxNosotros />
      </section>
      <Count />
      <section className=" bg-gray-900 w-full overflow-hidden">
        <TracingBeam className={""}>
          <div className="text-white flex flex-col items-center px-4 my-12 ">
            {/* <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Sobre Nosotros
              </h2>
              <p className="text-lg md:text-xl">
              Somos IdaClass, la Edtech líder en la industria del Sport Fitness y el Bienestar Humano. Nos dedicamos a proporcionar educación libre, de calidad y global, utilizando un innovador modelo educativo, una moderna plataforma digital y contenidos pedagógicos de alta calidad para el nuevo mundo.
              </p>
            </div> */}

            <div className="flex flex-col justify-center items-center w-full gap-y-20 p-12 min-[1500px]: md:min-[1100px]:">
              {sobreNosotros.map((article, index) => (
                <article
                  className="flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-4"
                  key={index}
                >
                  <Image
                    src={article.image}
                    alt="hero image"
                    height={200}
                    width={200}
                    className="w-full md:w-1/2 rounded-lg"
                  />
                  <div className="md:w-1/2">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {article.title}
                    </h3>
                    <p className="text-pretty md:text-lg">
                      {article.paragraph}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </TracingBeam>
      </section>
      <section className="container flex flex-col items-center bg-slate-220 gap-4 py-12">
        <h2 className="text-2xl font-bold text-idaclass">Nuestros Valores</h2>
        <HoverEffect items={valores} />
      </section>
      <Partners />
      <section className="flex flex-col text-center sm:ml-auto sm:mr-24 my-12">
        <h4 className="text-lg font-semibold">Suscribete al newsletter</h4>
        <p className="px-4">Ultimas noticias relacionadas al mundo fitness</p>
        <label htmlFor="email">Ingresa tu E-Mail</label>
        <input
          id="email"
          type="text"
          placeholder="E-mail"
          className="border-2 border-idaclass m-4"
        />
        <Button className="mx-4 mb-4">Suscribirme</Button>
      </section>
    </main>
  );
};

export default Page;
