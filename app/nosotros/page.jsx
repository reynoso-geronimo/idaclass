"use client";
import Image from "next/image";
import Partners from "@/components/partnersEducativos";
import { sobreNosotros } from "@/lib/constants";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HeroParallaxNosotros } from "./_components/hero";
import { HoverEffect } from "@/components/ui/card-hover";
import Count from "./_components/count";
import EnsenaConNosotros from "@/components/ensenaConNosotros";
import EstudiaConNosotros from "@/components/estudiaConNosotros";
 const valores = [
  {
    title: "Innovación",
    description:
      "Abrazamos la tecnología y la innovación en la educación, proporcionando un ambiente de aprendizaje virtual dinámico y accesible.",
    // link: "https://netflix.com",
    image: `/nosotros/Innovación.png`
  },
  {
    title: "Emprendedurismo",
    description:
      "Fomentamos el espíritu emprendedor en cada uno de nuestros estudiantes. En IdaClass, creemos en el poder de la innovación y la creatividad para transformar el mundo del fitness y el bienestar. ¡Sé valiente, sé audaz, sé emprendedor!",
    // link: "https://netflix.com",
    image: `/nosotros/Emprendedurismo.png`
  },
  {
    title: "Liderazgo",
    description:
      "En IdaClass, fomentamos el liderazgo en todos los niveles. Nos esforzamos por inspirar a nuestros estudiantes a convertirse en líderes en sus campos, capacitándolos con las habilidades y la confianza necesarias para liderar con éxito en el mundo del fitness y el bienestar.",
    // link: "https://google.com",
   image: `/nosotros/Liderazgo.png`

  },
  {
    title: "Inclusión",
    description:
      "La inclusión es un pilar fundamental de nuestra comunidad en IdaClass. Nos comprometemos a crear un ambiente acogedor y diverso donde cada persona se sienta valorada y respetada. Celebramos la diversidad en todas sus formas y promovemos la igualdad de oportunidades para todos.",
    // link: "https://meta.com",
   image: `/nosotros/Inclusión.png`

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

            <div className="flex flex-col justify-center items-center w-full gap-y-20 p-12 min-h-[1500px]: md:min-h-[1100px]:">
              {sobreNosotros.map((article, index) => (
                <article
                  className="flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-12"
                  key={index}
                >
                  <Image
                    src={article.image}
                    alt="hero image"
                    height={200}
                    width={200}
                    className="w-full md:w-1/2 rounded-xl"
                  />
                  <div className="md:w-1/2">
                    <h3 className="text-lg md:text-4xl font-extrabold text-idaclass4 mb-6">
                      {article.title}
                    </h3>
                    {article.paragraph}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </TracingBeam>
      </section>
      <section className="container px-0 flex flex-col items-center bg-slate-220 gap-4 py-12">
        <h2 className="text-3xl font-extrabold text-idaclass">Nuestros <span className="text-idaclass4">Valores</span></h2>
        <HoverEffect items={valores} />
      </section>
      <Partners />
      <section className="lg:flex max-lg:flex-col justify-evenly items-stretch container max-lg:space-y-12 gap-6 py-12">
        <EstudiaConNosotros />
        <EnsenaConNosotros />
      </section>
      <section className="container bg-gradient-to-b from-[#1FB3E5] to-[#0088CA] flex flex-col gap-12 items-center justify-center lg:flex-row  text-white min-h-[264px]">
        <h1 className="font-bold text-8xl w-full lg:w-[45%] text-center lg:text-right">
          IdaClass
        </h1>{" "}
        <p className="text-2xl font-bold w-full lg:w-[55%]">
          Transformamos la educación en una puerta abierta hacia un futuro de
          posibilidades y bienestar.
        </p>
      </section>
    </main>
  );
};

export default Page;
