import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const EnsenaConNosotros = ({ sideBar = false }) => {
  return (
    <article
      className={`w-full flex flex-col relative aspect-[9/13] container px-6 py-8 text-white rounded-2xl overflow-hidden ${
        !sideBar
          ? "lg:items-end lg:w-1/2 lg:aspect-auto lg:justify-between max-lg:max-w-md min-h-[370px] max-lg:min-h-[480px]"
          : "min-h-[480px]"
      }`}
    >
      <div
        className={`z-10 flex flex-col h-full ${
          !sideBar ? "lg:w-64 max-lg:justify-end":" justify-end "
        }`}
      >
        <h3 className={`text-left text-2xl relative z-10 font-extrabold w-[16rem] ${!sideBar&&"mt-10"}`}>
          Se parte <br />
          de Ida<span className="text-idaclass4">Class</span>
        </h3>
        <ul className={`list-inside list-disc z-10 text-sm space-y-1 ${sideBar?"my-8":"mt-8"}`}>
          <li>Trabaja con nosotros</li>
          <li>Se uno de nuestros docentes</li>
          <li>Convertite en Sede</li>
        </ul>

        <Button variant="default" asChild className={`rounded-2xl z-10 ${!sideBar?"mt-8 lg:mt-auto":""}`}>
          <Link href="/">CONTACTANOS</Link>
        </Button>
      </div>
      <Image
        src={`/assets/ensenaConNosotros.png`}
        alt="asistencia"
        fill
        className={`object-cover rounded-3xl object-top ${!sideBar&&"lg:hidden"}`}
      />
      <Image
        src={`/assets/ensenaConNosotrosWeb.png`}
        alt="asistencia"
        fill
        className={`object-cover object-top hidden ${!sideBar&&"lg:block"}`}
      />
    </article>
  );
};

export default EnsenaConNosotros;
