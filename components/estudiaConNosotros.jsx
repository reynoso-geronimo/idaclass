import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const EstudiaConNosotros = ({ sideBar = false }) => {
  return (
       <article
      className={`w-full flex flex-col relative aspect-[9/13] container px-6 py-8 text-white rounded-2xl overflow-hidden ${
        !sideBar
          ? "lg:items-end lg:w-1/2 lg:aspect-auto lg:justify-between max-lg:max-w-md min-h-[370px] max-lg:min-h-[480px]"
          :  "min-h-[480px]"
      }`}
    >
      <div
        className={`z-10 flex flex-col h-full justify-end ${
          !sideBar && "lg:w-64"
        }`}
      >
        <h3
          className={`text-5xl relative z-10 font-extrabold ${
            sideBar ? "text-center" : "text-left"
          } `}
        >
          Ida<span className="text-idaclass4">Class</span>
        </h3>
        <p
          className={`font-bold text-lg tracking-tighter z-10 ${
            !sideBar ? "text-left" : "text-center my-4 "
          }`}
        >
          Aprende con nosotros
        </p>
          <p className=" mb-12">Descubre todas nuestras propuestas educativas</p>
        <div className="space-y-4 z-10 flex flex-col">
          <Button variant="default" asChild className="rounded-2xl">
            <Link href="/#Cursos">CURSOS DE FORMACIÓN</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="bg-transparent text-idaclass3 border-idaclass3 rounded-2xl"
          >
            <Link href="/cursos">Cursos especializados</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="bg-transparent text-idaclass3 border-idaclass3 rounded-2xl"
          >
            <Link href="/comunidad">COMUNIDAD IDACLASS </Link>
          </Button>
        </div>
      </div>
      <Image
        src={`/assets/aprendeConNosotros.png`}
        alt="asistencia"
        fill
        className={`object-cover rounded-3xl object-top ${!sideBar&&"lg:hidden"}`}
      />
       <Image
        src={`/assets/aprendeConNosotrosWeb.png`}
        alt="asistencia"
        fill
        className={`object-cover object-top hidden ${!sideBar&&"lg:block"}`}
      />
    </article>
  );
};

export default EstudiaConNosotros;
