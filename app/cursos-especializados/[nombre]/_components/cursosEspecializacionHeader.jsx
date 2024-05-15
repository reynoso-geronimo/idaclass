import { Button } from "@/components/ui/button";
import Introvideo from "@/components/ui/introvideo";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const CursosEspciealizacionHeader = ({
  nombre,
  descripcion,
  videoid,
  profesional,
}) => {
  const splitNombreEnDosLineas = nombre => {
    const palabras = nombre.split(" ");
    const mitad = Math.ceil(palabras.length / 2);
    const primeraLinea = palabras.slice(0, mitad).join(" ");
    const segundaLinea = palabras.slice(mitad).join(" ");

    return (
      <>
        {primeraLinea}
        <br />
        {segundaLinea}
      </>
    );
  };

  return (
    <section className="relative lg:container text-white">
      <div className="px-8 max-lg:min-h-[700px] flex flex-col pb-10 lg:py-20 justify-end lg:justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
          {splitNombreEnDosLineas(nombre)}
        </h1>
        <p className="lg:w-1/2 mb-4">{descripcion}</p>

        <div className="lg:flex lg:justify-start lg:items-center gap-6 lg:w-1/2">
          <Button
            size="lg"
            className="font-bold rounded-2xl w-full lg:w-1/2"
            asChild
          >
            <Link href="#inscripcion">INSCRIBIRME AHORA</Link>
          </Button>
          {videoid && (
            <Introvideo
              className={`flex items-center justify-center max-lg:mt-4 border-idaclass3 text-idaclass3 border-2 w-full h-[44px] lg:w-1/2 transition-none hover:scale-100 hover:drop-shadow-none`}
              texto="VER RESUMEN"
              videoid={videoid}
            />
          )}
        </div>
        {profesional && (
          <div className="w-auto py-2 bg-gray-500 bg-opacity-50 backdrop-blur-lg border-gray-400 border  rounded-full lg:absolute right-16 bottom-16 flex items-center px-2 gap-2 mt-8">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src={`/profesional/${`profesional.nombre`}.png`}
                alt={`profesional.nombre`}
              />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <div className="pr-2">
              <h2 className="font-bold text-lg">{profesional.nombre}</h2>
              <p className="font-medium text-sm">{profesional.titulo}</p>
            </div>
          </div>
        )}
      </div>
      <Image
        src={`/cursosEspecializacion/cursos/headersMobile/${nombre}.png`}
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover -z-10 object-top lg:hidden"
        alt=""
      />
      <Image
        src={`/cursosEspecializacion/cursos/headersWeb/${nombre}.png`}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 object-rigth-top max-lg:hidden"
        alt=""
      />
    </section>
  );
};

export default CursosEspciealizacionHeader;
