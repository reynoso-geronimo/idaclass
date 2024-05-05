import TarjetaModalidad from "./tarjeta-modalidad";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const CursoFormacionModalidades = ({ modalidades }) => {
  console.log(modalidades);
  return (
    <section id="inscripcion" className="container relative">
      <Image
        src={"/cursosFormacion/modalidadesbg.png"}
        fill
        alt=""
        className="max-lg:hidden object-cover object-right"
      />
      {modalidades === "Online - Presencial" && (
        <div className={"w-full max-w-md lg:max-w-full  absolute top-4  z-10"}>
          <TituloSeccion
            className={"text-center text-white text-balance leading-[50px]"}
          >
            Elegí la modalidad que más se{" "}
            <span className="text-idaclass3">adapte a tus necesidades</span>
          </TituloSeccion>
        </div>
      )}

      <div className="flex w-full justify-center flex-col lg:flex-row lg:w-[54rem]">
        {modalidades.includes("Online") ? (
          <TarjetaModalidad modalidad={"ONLINE"} />
        ) : (
          ""
        )}
        {modalidades.includes("Presencial") && <TarjetaModalidad />}
      </div>
    </section>
  );
};

export default CursoFormacionModalidades;
