import AsesorateModalidad from "@/components/asesorateModalidad";
import TarjetaModalidad from "./tarjeta-modalidad";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const CursosEspciealizacionModalidades = ({ nombre, tipo, curso }) => {
  return (
    <section
      id="inscripcion"
      className="container relative max-lg:bg-gradient-to-b from-[#12182D] to-[#1C2C53] w-full"
    >
      <Image
        src={"/cursosFormacion/modalidadesbg2.png"}
        fill
        alt=""
        className="max-lg:hidden object-cover object-right"
      />

      <TituloSeccion
        className={
          "z-10 px-0 md:text-3xl text-left lg:text-center text-white leading-[50px] md:leading-[80px] absolute top-4 max-lg:ml-8 lg:right-[50%] lg:translate-x-[50%] max-sm:w-64 max-w-md lg:max-w-max"
        }
      >
        Estudia <span className="text-idaclass3">a tu ritmo</span>
      </TituloSeccion>

      <div className="flex w-full items-stretch justify-center flex-col lg:flex-row lg:gap-4">
        <TarjetaModalidad
          modalidad={"ONLINE"}
          nombre={nombre}
          tipo={tipo}
          curso={curso}
        />

        <AsesorateModalidad className="lg:mt-28 mb-12 lg:w-[440px]" />
      </div>
    </section>
  );
};

export default CursosEspciealizacionModalidades;
