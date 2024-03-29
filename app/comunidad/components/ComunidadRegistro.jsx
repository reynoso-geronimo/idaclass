import { ArrowRight } from "lucide-react";
import Image from "next/image";
import bg from "../../../public/comunidad/ImagendefondoFormulario.png";
const ComunidadRegistro = () => {
  return (
    <section className="container px-0 my-12 relative min-h-[30rem]">
      <Image
        src={bg}
      
        alt=""
        className="object-cover -z-10"
      />
      <div className="container w-full flexgap-12">
        {/* <div className="w-full text-white font-bold text-center text-2xl ">
          <h2 className="mt-8">
            Registrate para poder ingresar a la <br /> Comunidad Ida
            <span className="text-idaclass3">
              Class <ArrowRight className="inline" size={32} strokeWidth={3}/>
            </span>
          </h2>
 
        </div> */}
        {/* <div className="w-1/3 ml-auto bg-emerald-200 min-h-[30rem]">
          <h1>formulario</h1>
        </div> */}
      </div>
    </section>
  );
};

export default ComunidadRegistro;
