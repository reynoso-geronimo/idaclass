import Hero from "./_components/hero";
import Ventajas from "@/app/(root)/_components/ventajas";
import CursosFormacion from "./_components/cursos-formacion";
import Modalidad from "./_components/modalidad";
import Certificacion from "./_components/certificacion";
import Partners from "@/components/partners";
import Faq from "./_components/faq";
import Soluciones from "./_components/soluciones";
import Intro from "./_components/intro";
import CasosExito from "./_components/casos-exito";
import Banderas from "./_components/banderas";
import EquipoProfesional from "./_components/equipo-profesional";
import Beca from "./_components/beca";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Intro />
      <Ventajas />
      {/* <Banderas/> */}
      <Soluciones />
      <CursosFormacion />
      <Modalidad />
      <Certificacion />
      <div className="flex flex-col lg:flex-row">
        <EquipoProfesional />
        <Beca />
      </div>
      <CasosExito />
      <div className="mt-12">
        <Partners />
      </div>
      <Faq />
    </main>
  );
}
