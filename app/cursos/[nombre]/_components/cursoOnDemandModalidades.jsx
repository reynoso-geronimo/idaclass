import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import TarjetaModalidad from "./tarjeta-modalidad";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const CursoFormacionModalidades = () => {
  return (
    <section id="inscripcion" className="pt-6 container px-0 ">
      <div className="flex max-lg:flex-col justify-center items-center lg:items-stretch lg:justify-start relative">
        <Image
          src={"/cursosFormacion/modalidadesbg.png"}
          fill
          alt=""
          className="max-lg:hidden object-cover object-right"
        />
        <div className={"w-full max-w-md lg:max-w-full  absolute top-4  z-10"}>
          <TituloSeccion
            className={"text-center text-white text-balance leading-[50px]"}
          >
            Elegí la modalidad que más se{" "}
            <span className="text-idaclass3">adapte a tus necesidades</span>
          </TituloSeccion>

          {/* <Button size={"sm"}>
            <MapPin />
            Ver sedes disponibles{" "}
          </Button> */}
        </div>
        <TarjetaModalidad modalidad={"ONLINE"} />
        <TarjetaModalidad />
      </div>
    </section>
  );
};

export default CursoFormacionModalidades;