import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import imgAcerca from "../../../public/cursosOnDemand/acerca.png";
import imgAcercaMobile from "../../../public/cursosOnDemand/acercaMobile.png";
import blur from "../../../public/cursosOnDemand/blur.png";
const CursosOnDemandAcerca = () => {
  return (
    <section className="mx-auto max-w-[1400px] relative bg-gradient-to-b from-[#0088CA] to-[#1FB3E5] text-white flex flex-col lg:flex-row">
      <div className="lg:w-1/2 container">
        <TituloSeccion className={" lg:text-left text-white px-0 mx-0"}>
          Todos nuestros Cursos On Demand
        </TituloSeccion>
        <p className="max-lg:text-center mb-6">
          Lorem ipsum dolor sit amet. Qui beatae eius ut galisum aliquid et
          molestiae quisquam. Et quia nihil et molestiae aperiam et rerum sint.
          In tenetur voluptas aut consequuntur corrupti nam placeat voluptatem.
          Aut vero facere ea enim consequatur eos molestiae vero et perspiciatis
        </p>
        <Image
          src={imgAcerca}
          alt="Imagen acerca"
          className="max-lg:hidden "
          placeholder="blur"
        />
      </div>
      
        <Image
          src={imgAcercaMobile}
          alt="Imagen acerca"
          className="lg:hidden w-full"
          placeholder="blur"
        />
      
     
        <div className="w-auto min-h-96 lg:w-1/2 rounded-3xl bg-gray-200 container m-8 z-10 "></div>
      
    </section>
  );
};

export default CursosOnDemandAcerca;