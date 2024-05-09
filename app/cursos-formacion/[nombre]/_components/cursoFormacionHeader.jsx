import { Button } from "@/components/ui/button";
import Introvideo from "@/components/ui/introvideo";
import Image from "next/image";
import Link from "next/link";

const CursoFormacionHeader = ({
  nombre,
  descripcion,
  modalidades,
  videoid,
  
}) => {
  return (
    <section className="relative lg:container text-white">
      <div className="px-8 max-lg:min-h-[700px] flex flex-col pb-10 lg:py-20 justify-end lg:justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight max-w-[22rem]">
          {nombre}
        </h1>
        <p className="lg:w-1/2">{descripcion}</p>
        <p className="font-semibold text-sm my-4 max-lg:text-center text-orange-500 italic">
          Modalidad: {modalidades}
        </p>
        <div className="lg:flex lg:justify-center lg:items-center gap-6 lg:w-1/2">
          <Button size="lg" className="font-bold rounded-2xl w-full lg:w-1/2" asChild>
            <Link href="#inscripcion">INSCRIBIRME AHORA</Link>
          </Button>
          <Introvideo
            className={`flex items-center justify-center max-lg:mt-4 border-idaclass3 text-idaclass3 border-2 w-full h-[44px] lg:w-1/2 transition-none hover:scale-100 hover:drop-shadow-none`}
            texto="VER RESUMEN"
            videoid={videoid}
          />
        </div>
      </div>
      <Image
        src={`/cursosFormacion/cursos/headersMobile/${nombre}.png`}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 object-top lg:hidden"
        alt=""
      />
      <Image
       src={`/cursosFormacion/cursos/headersWeb/${nombre}.png`}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 object-rigth-top max-lg:hidden"
        alt=""
      />
    </section>
  );
};

export default CursoFormacionHeader;
