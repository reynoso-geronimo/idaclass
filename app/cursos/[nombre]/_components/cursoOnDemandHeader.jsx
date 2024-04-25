import { Button } from "@/components/ui/button";
import Introvideo from "@/components/ui/introvideo";
import Image from "next/image";

const CursoOnDemandHeader = ({
  nombre,
  descripcion,
  modalidades,
  videoid,
}) => {
  return (
    <section className="relative lg:container text-white">
      <div className="px-8 max-lg:min-h-[700px] flex flex-col pb-10 lg:py-20 justify-end lg:justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight max-w-32">
          {nombre}
        </h1>
        <p className="lg:w-1/2">{descripcion}</p>
        <p className="font-semibold text-sm my-4 max-lg:text-center text-orange-500 italic">
          Modalidad: {modalidades}
        </p>
        <div className="lg:flex lg:justify-center lg:items-center gap-6 lg:w-1/2">
          <Button size="lg" className="font-bold rounded-2xl w-full lg:w-1/2">
            INSCRIBIRME AHORA
          </Button>
          <Introvideo
            className={`flex items-center justify-center max-lg:mt-4 border-idaclass3 text-idaclass3 border-2 w-full h-[44px] lg:w-1/2 transition-none hover:scale-100 hover:drop-shadow-none`}
            texto="VER RESUMEN"
            videoid={videoid}
          />
        </div>
        <div className="w-auto py-2 bg-gray-500 bg-opacity-75 border-gray-400 border  rounded-full lg:absolute right-16 bottom-16 flex items-center px-2 gap-2 mt-8">
          <Image
            src={""}
            height={60}
            width={60}
            className="bg-white rounded-full"
          />
          <div className="pr-2">
            <h2 className="font-bold text-lg">Prof. Relleno Emeritus</h2>
            <p className="font-medium text-sm">Vendedor de humo</p>
          </div>
        </div>
      </div>
      <Image
        src={`/cursosOnDemand/cursos/headers/${nombre}Mobile.png`}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 object-top lg:hidden"
        alt=""
      />
      <Image
        src={`/cursosOnDemand/cursos/headers/${nombre}Web.png`}
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 object-rigth-top max-lg:hidden"
        alt=""
      />
    </section>
  );
};

export default CursoOnDemandHeader;
