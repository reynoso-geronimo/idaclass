"use client";
import { Button } from "@/components/ui/button";
import Introvideo from "@/components/ui/introvideo";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import useIsMobile from "@/app/hooks/UseIsMobile";

const CursoHeader = ({
  id,
  nombre,
  descripcion,
  videoid,
  profesional,
  modalidades,
  tipo, // Nuevo prop para diferenciar entre formación y especialización
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
  const isMobile = useIsMobile();
  const headerPath =
    tipo === "formacion" ? "cursosFormacion" : "cursosEspecializacion";
  const headerImagePath = isMobile
    ? `/${headerPath}/cursos/headersMobile/${id}.png`
    : `/${headerPath}/cursos/headersWeb/${id}.png`;
  // Importar imagen dinámicamente
  const headerImage = require(`../../public${headerImagePath}`);

  return (
    <section className="relative md:container text-white">
      <div className="px-8 max-md:min-h-[700px] flex flex-col pb-10 md:py-20 justify-end md:justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          {splitNombreEnDosLineas(nombre)}
        </h1>
        <p className="md:w-1/2 mb-4">{descripcion}</p>
        {modalidades && (
          <p className="font-semibold text-sm my-4 max-md:text-center text-orange-500 italic">
            Modalidad: {modalidades}
          </p>
        )}
        <div className="md:flex md:justify-start md:items-center gap-1 lg:gap-6 md:w-1/2">
          <Button
            size="lg"
            className="font-bold rounded-2xl w-full md:w-1/2"
            asChild
          >
            <Link href="#inscripcion">INSCRIBIRME AHORA</Link>
          </Button>
          {videoid && (
            <Introvideo
              className={`flex items-center text-sm justify-center max-md:mt-4 border-idaclass3 text-idaclass3 border-2 w-full h-[44px] md:w-1/2 transition-none hover:scale-100 hover:drop-shadow-none`}
              texto="VER RESUMEN"
              videoid={videoid}
            />
          )}
        </div>
        {profesional && (
          <div className="w-auto py-2 bg-gray-500 bg-opacity-50 backdrop-blur-md border-gray-400 border  rounded-full md:absolute right-16 bottom-16 flex items-center px-2 gap-2 mt-8">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src={`/profesional/${profesional.nombre}.png`}
                alt={profesional.nombre}
              />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <div className="pr-2">
              <h2 className="font-bold text-md">{profesional.nombre}</h2>
              <p className="font-medium text-sm">{profesional.titulo}</p>
            </div>
          </div>
        )}
      </div>
      <Image
        src={headerImage}
        placeholder="blur"
        fill
        priority
        sizes="100vw"
        quality={100}
        className={`object-cover -z-10 ${
          isMobile ? "object-top" : "object-right-top"
        }`}
        alt=""
      />
    </section>
  );
};

export default CursoHeader;
