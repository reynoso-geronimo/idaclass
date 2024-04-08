import { Badge } from "@/components/ui/badge";
import Introvideo from "@/components/ui/introvideo";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";

const ComunidadHero = () => {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row container items-stretch pt-6 pb-4 text-white relative z-10  max-lg:h-[45rem]">
        <div className="w-full flex flex-col max-lg:items-center max-lg:text-center">
          <TituloSeccion className={`lg:text-left mb-2 p-0 ml-0`}>
            ¡Sumate a la <br className="max-lg:hidden" />
            Comunidad <span className="text-idaclass4">Class</span>
            <span className="text-idaclass3">era!</span>
          </TituloSeccion>
          <h3 className="text-base font-semibold mb-4 text-idaclass4 italic">
            &quot;Conectado para transformar el ecosistema Sport Fitness&quot;
          </h3>
          <p className="text-sm tracking-tighter font-normal lg:mb-4 max-lg:max-w-[13rem]">
            La comunidad classera es un espacio diseñado para impulsar a todo el
            <br className="max-lg:hidden" />
            ecosistema Sport Fitness.
          </p>
          <p className="text-sm tracking-tighter font-normal max-lg:max-w-[13rem]">
            Te invitamos a ser parte de esta revolución y transformar tus{" "}
            <br className="max-lg:hidden" />
            aspiraciones en logros tangibles.
          </p>
          <Badge className={"my-12 lg:my-4 lg:w-[300px]"}>
            <Introvideo
              className={
                "text-white px-2 hover:scale-100 hover:drop-shadow-none transition-none"
              }
              texto="Conoce como funciona la comunidad"
            />
          </Badge>
        </div>

        <Image
          src={"/comunidad/Header.png"}
          fill
          className="object-cover -z-10 max-lg:hidden"
          alt=""
        />
        <Image
          src={"/comunidad/HeaderMobile.png"}
          fill
          className="object-cover object-bottom -z-10 lg:hidden"
          alt=""
        />
      </div>
    </section>
  );
};

export default ComunidadHero;
