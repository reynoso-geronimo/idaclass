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
import EquipoProfesional from "./_components/equipo-profesional";
import Beca from "./_components/beca";
import EmpresasPartners from "./_components/empresasParteners";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DynamicModalidad = dynamic(() => import("./_components/modalidad"), {
  ssr: false,
  loading: () => (
    <div className="text-white pt-[15%] lg:pt-12 container text-center bg-black h-[400px]">
      <h3 className="text-idaclass3 text-4xl font-bold">CURSOS ON DEMAND</h3>

      <ul className="list-inside list-disc my-2">
        <li>Estudia a tu ritmo </li>
        <li>Expertos internacionales </li>
        <li>Elije tu area de especializacion</li>
      </ul>
      <Link href={"/cursos"}>
        <Button variants="lg" className="rounded-lg mt-4">
          Ver todos los cursos
        </Button>
      </Link>
    </div>
  ),
});
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
      <DynamicModalidad />
      <Certificacion />

      <EquipoProfesional />
      <Beca />

      <CasosExito />

      <PartnersEducativos />

      <Faq />
    </main>
  );
}
