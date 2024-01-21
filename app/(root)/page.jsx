import Hero from "./_components/hero";
import Ventajas from "@/app/(root)/_components/ventajas";
import Cursos from "./_components/cursos";
import Modalidad from "./_components/modalidad";
import Certificacion from "./_components/certificacion";
import Partners from "@/components/partners";
import Faq from "./_components/faq";
import Soluciones from "./_components/soluciones";
import Intro from "./_components/intro";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Intro/>
      <Ventajas />
      <Soluciones/>
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
