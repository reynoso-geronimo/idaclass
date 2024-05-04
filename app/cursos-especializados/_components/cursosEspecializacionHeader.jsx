import Image from "next/image";

import headerWeb from "../../../public/cursosEspecializacion/HeaderWeb.png";
import headerMobile from "../../../public/cursosEspecializacion/HeaderMobile.png";
import vectorWeb from "../../../public/cursosEspecializacion/VectorWeb.svg";
import vectorMobile from "../../../public/cursosEspecializacion/VectorMobile.svg";

const CursosEspecializacionHeader = () => {
  return (
    <header className="container w-full py-8 h-[700px] sm:h-[500px] relative text-white flex flex-col justify-end lg:justify-center overflow-hidden">
      <h1 className="text-4xl sm:text-6xl font-bold">
        Cursos <span className="text-idaclass4 max-sm:block">On Demand</span>
      </h1>
      <div className="flex gap-1 items-center sm:-translate-x-8 relative">
        <h2 className="text-lg sm:text-2xl font-bold shrink-0">
          Aprendé a tu ritmo{" "}
        </h2>
        <Image
          src={vectorWeb}
          className="sm:-translate-y-1 translate-y-1.5 max-sm:-scale-100 sm:order-first"
          alt=""
        />
      </div>
      <p className="sm:max-w-lg my-9">
        Es nuestro sistema de cursos con videos grabados,{" "}
        <span className="font-bold">
          para que veas cuándo y desde dónde quieras
        </span>
        . Nuestro sistema On Demand es{" "}
        <span className="font-bold">
          ideal para personas que quieren aprender en sus ratos libres
        </span>
        , eligiendo su propio ritmo de aprendizaje.
      </p>
      <p className="font-semibold text-sm my-4 max-sm:text-center text-orange-500 italic">
        Modalidad: Online
      </p>
      <Image
        src={headerWeb}
        alt=""
        fill
        className="object-cover max-sm:hidden -z-10"
        placeholder="blur"
      />
      <Image
        src={headerMobile}
        alt=""
        fill
        className="object-cover object-top sm:hidden -z-10"
        placeholder="blur"
      />
    </header>
  );
};

export default CursosEspecializacionHeader;
