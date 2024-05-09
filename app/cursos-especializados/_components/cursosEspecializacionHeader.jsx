import Image from "next/image";

import headerWeb from "../../../public/cursosEspecializacion/HeaderWeb.png";
import headerMobile from "../../../public/cursosEspecializacion/HeaderMobile.png";
import vectorWeb from "../../../public/cursosEspecializacion/VectorWeb.svg";

const CursosEspecializacionHeader = () => {
  return (
    <header className="container w-full py-8 h-[700px] sm:h-[500px] relative text-white flex flex-col justify-end lg:justify-center overflow-hidden">
      <h1 className="text-4xl sm:text-6xl font-bold">
        Cursos{" "}
        <span className="text-idaclass4 max-sm:block">especializados</span>
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
        Accede a nuestros cursos grabados, podrás ver los videos cuando y desde
        donde quieras. Nuestro sistema On Demand es
        <span className="font-bold">
          ideal para personas que quieren aprender en sus ratos libres, y elegir
          su propio ritmo de aprendizaje.
        </span>
      </p>
      <p className="font-semibold text-sm my-4 max-sm:text-center text-orange-500 italic">
        Modalidad: On Demand (100% online y a tu ritmo).
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
