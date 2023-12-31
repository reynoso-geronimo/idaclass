import { YouTubeEmbed } from "@next/third-parties/google";
import Hero from "@/app/(root)/components/hero";
import Pasos123 from "./components/ui/pasos123";
import Faq from "./components/faq";
import Cursos from "./components/cursos";
import Certificacion from "./components/certificacion";
import Modalidad from "./components/modalidad";
import Image from "next/image";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      
        <section className="grid grid-cols-2 gap-16 px-10 mt-8 justify-items-center text-center text-blue-700 font-medium md:flex md:justify-center ">
          <span className="flex flex-col justify-start items-center w-40">
          <Image src={'/assets/experiencia.webp'}width={72} height={72} alt="experiencia"/>
            25 años experiencia
          </span>
          <span className="flex flex-col justify-start items-center w-40">
            <Image src={'/assets/50milcertificados.webp'}width={72} height={72} alt="certificados"/>
            +50.000 certificados
          </span>
          <span className="flex flex-col justify-start items-center w-40">
          <Image src={'/assets/estandarformacion.webp'}width={72} height={72} alt="estandarformacion"/>
            1ra Digital School con estandar de formación
          </span>
          <span className="flex flex-col justify-start items-center w-40">
          <Image src={'/assets/empleabilidad.webp'}width={72} height={72} alt="empleabilidad"/>
            80% de empleabilidad
          </span>
        </section>
     
      <section>
        <h2 className="text-3xl text-center font-extrabold w-[full] mt-16 mb-4 mx-4 text-indigo-950 ">
          Súmate a la comunidad IdaClass Academy y vive una experiencia de
          aprendizaje transformadora.
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6 pt-10">
          <div className=" w-full max-w-[570px]  m-2 border-2  border-sky-500 shadow-2xl">
      
            <div>
              <YouTubeEmbed videoid="kfLDLD653zM" />
            </div>
          </div>
          <ol className="list-decimal list-inside flex flex-col justify-center w-full text-center md:text-left text-xl gap-1 md:w-1/2 max-w-[570px]">
            <li>Logra tu empleo soñado.</li>
            <li>Concreta tus ideas y proyectos.</li>
            <li>Desacaté como profesional y líder.</li>
            <li>Gana dinero haciendo lo que amas.</li>
            
          </ol>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h2 className="text-2xl text-center font-extrabold w-[full] mt-16 mb-4 mx-4 text-indigo-950 ">
          3 Pasos para tener una carrera exitosa y rentable.
        </h2>
        <div className="flex justify-around flex-wrap  text-blue-700 font-medium w-full max-w-7xl">
          <Pasos123
            paso={`ELIGE`}
            desc={`La capacitación que más te guste para tu futuro profesional`}
            imagen={`1.webp`}
          />
          <Pasos123
            paso={`APRENDE`}
            desc={`Con el método IdaClass y aplica de forma inmediata tus conocimientos`}
            imagen={`2.webp`}
          />
          <Pasos123
            paso={`¡DISFRUTA!`}
            desc={`De trabajar y ganar altas sumas de dinero como profesional certificado`}
            imagen={`3.webp`}
          />
        </div>
      </section>
      <Cursos />
      <Modalidad/>
      <Certificacion/>
      <Faq />
    </main>
  );
}
