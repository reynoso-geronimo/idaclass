import Image from "next/image";

import Hero from "./_components/hero";
import Ventajas from "@/components/ventajas";
import Cursos from "./_components/cursos";
import Modalidad from "./_components/modalidad";
import Certificacion from "./_components/certificacion";
import Partners from "@/components/partners";
import Faq from "./_components/faq";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      

      <section>
        <h2 className="text-3xl text-center font-extrabold w-full max-w-7xl mt-16 mb-4 mx-auto text-indigo-950 tracking-tight">
          IdaClass, es la llave para transformar tu pasión por el fitness en una
          carrera exitosa en tiempo record. 
        </h2>
        
      </section>
      <section className="grid grid-cols-2 gap-16 px-10 mt-8 justify-items-center text-center text-blue-700 font-medium md:flex md:justify-center ">
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/experiencia.webp"}
            width={72}
            height={72}
            alt="experiencia"
          />
          25 años experiencia
        </span>
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/50milcertificados.webp"}
            width={72}
            height={72}
            alt="certificados"
          />
          +50.000 certificados
        </span>
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/estandarformacion.webp"}
            width={72}
            height={72}
            alt="estandarformacion"
          />
          1ra Digital School con estandar de formación
        </span>
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/empleabilidad.webp"}
            width={72}
            height={72}
            alt="empleabilidad"
          />
          80% de empleabilidad
        </span>
      </section>
      
      <Ventajas />
      <Cursos />
      <Modalidad />

      <Certificacion />

      <div className="mt-12">
      <Partners />
      </div>
      <Faq />
    </main>
  );
}
