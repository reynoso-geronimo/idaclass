import Hero from "./_components/hero";
import Ventajas from "@/app/(root)/_components/ventajas";
import CursosFormacion from "./_components/cursos-formacion";
import Modalidad from "./_components/modalidad";
import Certificacion from "./_components/certificacion";
import PartnersEducativos from "@/components/partnersEducativos";
import Faq from "./_components/faq";
import Soluciones from "./_components/soluciones";
import Intro from "./_components/intro";
import CasosExito from "./_components/casos-exito";
import Banderas from "./_components/banderas";
import EquipoProfesional from "./_components/equipo-profesional";
import Beca from "./_components/beca";
import EmpresasPartners from "./_components/empresasParteners";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <EmpresasPartners />
      <Intro />
      <Ventajas />
      {/* <Banderas/> */}
      <Soluciones />
      <CursosFormacion />
      <Modalidad />
      <Certificacion />

      <EquipoProfesional />
      <Beca />

      <CasosExito />

      <PartnersEducativos />

      <Faq />
    </main>
  );
}
