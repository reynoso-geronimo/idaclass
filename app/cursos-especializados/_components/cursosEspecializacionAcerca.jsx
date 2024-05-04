import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import imgAcerca from "../../../public/cursosEspecializacion/Acerca.png";
import imgAcercaMobile from "../../../public/cursosEspecializacion/AcercaMobile.png";
import AcercaBg from "../../../public/cursosEspecializacion/AcercaBg.png";
const CursosEspecializacionAcerca = () => {
  return (
    <section className="mx-auto max-w-[1400px] relative text-white flex flex-col lg:flex-row">
      <Image src={AcercaBg} alt="Acerca fondo" className="absolute -z-10 w-full h-full object-cover" />
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

export default CursosEspecializacionAcerca;
