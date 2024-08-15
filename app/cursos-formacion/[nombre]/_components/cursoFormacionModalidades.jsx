import AsesorateModalidad from "@/components/asesorateModalidad";
import TarjetaModalidad from "./tarjeta-modalidad";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import CampaignForm from "./campaignForm";

const CursoFormacionModalidades = ({ modalidades, nombre, tipo, curso, campaign }) => {
  return (
    <section id="inscripcion" className="container relative max-lg:bg-gradient-to-b from-[#12182D] to-[#1C2C53] ">
      <Image
        src={"/cursosFormacion/modalidadesbg2.png"}
        fill
        alt=""
        className="max-lg:hidden object-cover object-right"
      />
      {modalidades === "Online - Presencial" && (
        <TituloSeccion
          className={
            "z-10 px-0 md:text-3xl text-left lg:text-center text-white leading-[50px] md:leading-[80px] absolute top-4 max-lg:ml-8 lg:right-[50%] lg:translate-x-[50%] max-sm:w-64 max-w-md lg:max-w-max"
          }
        >
          Elegí la modalidad que más se <span className="text-idaclass3">adapte a tus necesidades</span>
        </TituloSeccion>
      )}

      <div className="flex w-full justify-center items-stretch flex-col lg:flex-row lg:gap-4">
        {modalidades.includes("Online") ? (
          <TarjetaModalidad modalidad={"ONLINE"} nombre={nombre} tipo={tipo} curso={curso} />
        ) : (
          ""
        )}
        {modalidades.includes("Presencial") && (
          <TarjetaModalidad modalidad={"PRESENCIAL"} nombre={nombre} tipo={tipo} curso={curso} />
        )}
        {campaign ? <CampaignForm nombre={nombre}/> : <AsesorateModalidad className="lg:mt-28 mb-12 lg:w-[440px]" />}
      </div>
    </section>
  );
};

export default CursoFormacionModalidades;
