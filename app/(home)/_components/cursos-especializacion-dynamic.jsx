"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Desde Next.js 15/16 `ssr: false` solo se permite en Client Components, por eso el
// import dinámico vive en este wrapper y no en la página (Server Component).
// La sección lee `window.innerWidth` al renderizar, así que no puede renderizarse en el servidor.
const DynamicCursosEspecializacion = dynamic(() => import("./cursos-especializacion"), {
  ssr: false,
  loading: () => (
    <div className="text-white pt-[15%] lg:pt-12 container text-center bg-black h-[400px]">
      <h3 className="text-4xl font-bold text-idaclass3">CURSOS ESPECIALIZADOS</h3>

      <ul className="my-2 list-disc list-inside">
        <li>Estudia a tu ritmo </li>
        <li>Expertos internacionales </li>
        <li>Elije tu area de especialización</li>
      </ul>
      <Link href={"/cursos-especializados"}>
        <Button variants="lg" className="mt-4 rounded-lg">
          Ver todos los cursos
        </Button>
      </Link>
    </div>
  ),
});

export default DynamicCursosEspecializacion;
