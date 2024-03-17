import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import linea from "../public/assets/Línea img 4.png";
import Asesorate from "@/components/ui/asesorate";

const Beca = () => {
  return (
    <section className="container lg:px-0 mt-12">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-between">
        <Asesorate />
        <div className="w-full text-center p-8 overflow-hidden rounded-3xl border-2 border-black">
          <TituloSeccion className={"mb-4"}>
            Obtén tu Beca<span className="inline text-idaclass4">Class</span>{" "}
            40%
          </TituloSeccion>
          <h4 className="text-pretty md:text-lg">Impulsa tu futuro</h4>
          <p className="my-6 relative z-10 opacity-100 ">
            &quot;Nuestra misión es abrir las puertas a la educación en
            Latinoamérica Facilitamos el acceso a la educación de calidad de una
            forma simple y accesible. Accede ahora a la BecaClass del 40% y
            avanza hacia tus metas profesionales con IdaClass.&quot;
          </p>

          <div className="w-full relative">
            <div className="absolute right-12 -top-12 rotate-[90deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.769"
                height="14.821"
                className="fill-idaclass scale-[1700%] opacity-30"
              >
                <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.769"
                height="14.821"
                className="fill-idaclass4 scale-[600%] -translate-x-6 -translate-y-[36px] opacity-70"
              >
                <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
              </svg>
            </div>
          </div>

          <div className="relative w-full">
            <Image
              src={linea}
              alt="linea"
              className="absolute -right-10 -bottom-4 scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beca;
