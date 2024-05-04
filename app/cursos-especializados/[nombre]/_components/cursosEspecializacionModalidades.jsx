import TarjetaModalidad from "./tarjeta-modalidad";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const CursosEspciealizacionModalidades = () => {
  return (
    <section id="inscripcion" className="pt-6 container px-0 ">
      <div className="flex max-lg:flex-col justify-center items-center lg:items-stretch lg:justify-start relative max-lg:pb-[100%] bg-gradient-to-l from-[#1D2F57] to-[#12182D]">
        <Image
          src={"/cursosEspecializacion/cursos/modalidadesbg.png"}
          height={400}
          width={410}
          alt=""
          className="max-lg:hidden absolute right-0 bottom-0 object-right order-3"
        />
        <Image
          src={"/cursosEspecializacion/cursos/modalidadesbgMobile.png"}
          fill
          alt=""
          className="lg:hidden object-cover object-bottom"
        />
        <div
          className={"w-full max-w-md lg:max-w-full  lg:absolute top-4  z-10"}
        >
          <TituloSeccion
            className={"text-center text-white text-balance leading-[50px]"}
          >
            Elegí el plan que mas se{" "}
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

export default CursosEspciealizacionModalidades;
