import TarjetaModalidad from "./tarjeta-modalidad";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const CursoFormacionModalidades = ({ modalidades, nombre, tipo }) => {
  return (
    <section id="inscripcion" className="container relative">
      <Image
        src={"/cursosFormacion/modalidadesbg.png"}
        fill
        alt=""
        className="max-lg:hidden object-cover object-right"
      />
      {modalidades === "Online - Presencial" && (
        <TituloSeccion
          className={
            "z-10 px-0 md:text-3xl text-left lg:text-center text-white leading-[50px] md:leading-[80px] absolute top-4 max-lg:ml-8 lg:right-[50%] lg:translate-x-[50%] max-sm:w-60 max-w-md lg:max-w-max"
          }
        >
          Elegí la modalidad que más se{" "}
          <span className="text-idaclass3">adapte a tus necesidades</span>
        </TituloSeccion>
      )}

      <div className="flex w-full justify-center flex-col lg:flex-row lg:w-[54rem]">
        {modalidades.includes("Online") ? (
          <TarjetaModalidad modalidad={"ONLINE"} nombre={nombre} tipo={tipo}/>
        ) : (
          ""
        )}
        {modalidades.includes("Presencial") && <TarjetaModalidad modalidad={"PRESENCIAL"} nombre={nombre} tipo={tipo}/>}
      </div>
    </section>
  );
};

export default CursoFormacionModalidades;
