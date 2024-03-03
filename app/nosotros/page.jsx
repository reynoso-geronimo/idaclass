"use client"
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Partners from "@/components/partnersEducativos";
import { sobreNosotros } from "@/lib/constants";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HeroParallaxNosotros } from "./_components/hero";
import { HoverEffect } from "@/components/ui/card-hover";

export const valores = [
  {
    title: "Innovación",
    description:
      "Abrazamos la tecnología y la innovación en la educación, proporcionando un ambiente de aprendizaje virtual dinámico y accesible.",
      // link: "https://netflix.com",
  },
  {
    title: "Calidad Educativa",
    description:
      "Nos comprometemos a ofrecer programas de formación de la más alta calidad, respaldados por profesionales expertos y actualizados en las últimas tendencias y avances en el ámbito deportivo y de la actividad física.",
    // link: "https://netflix.com",
  },
  {
    title: "Empoderamiento",
    description:
      "Nuestra misión es empoderar a nuestros graduados para que se conviertan en líderes exitosos en la industria del deporte. Facilitamos el emprendimiento y la independencia, fomentando la creatividad y la autogestión.",
    // link: "https://google.com",
  },
  {
    title: "Colaboración",
    description:
      "Valoramos la colaboración y la construcción de una comunidad sólida. Facilitamos la conexión entre estudiantes, profesores, profesionales y expertos en el campo, creando una red de apoyo que se extiende más allá de las fronteras.",
    // link: "https://meta.com",
  },
 
];


const Page = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="container">
      <HeroParallaxNosotros/>
      </section>
      
      <section className=" bg-gray-900 w-full overflow-hidden">
        <TracingBeam className={""}>
          <div className="text-white flex flex-col items-center px-4 my-12 ">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Sobre Nosotros
              </h2>
              <p className="text-lg md:text-xl">
                Lddddorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit ad magnam libero corporis repudiandae fuga rerum
                nisi qui, iusto odit quas eius. Quis, quam ipsam natus adipisci
                vel assumenda nulla?
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-full gap-y-20 p-6">
              {sobreNosotros.map((article, index) => (
                <article
                  className="flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-4"
                  key={index}
                >
                  <Image
                    src={`/funcional.webp`}
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
