import Image from "next/image";
import bg from "../../../public/comunidad/ImagendefondoFormulario.png";
import bgWeb from "../../../public/comunidad/ImagendefondoFormularioWeb.png";
import RegisterForm from "@/app/signin/_components/registerForm";

const ComunidadRegistro = () => {
  return (
    <section className="container px-0 my-12 relative min-h-[32rem]">
      <Image src={bg} alt="" className="object-cover -z-10 max-lg:hidden" />
      <Image src={bgWeb} alt="" className="object-cover -z-10 lg:hidden w-full bg-black"/>
      <div className="absolute lg:top-8 top-[35%] right-[50%] translate-x-[50%] bg-gray-100 px-8 py-2 max-w-sm w-full rounded-2xl ">
      <RegisterForm/>
      </div>
    </section>
  );
};

export default ComunidadRegistro;
