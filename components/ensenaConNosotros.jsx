import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const EnsenaConNosotros = ({ sideBar = false }) => {
  return (
    <article
      className={`w-full min-h-[480px] flex flex-col justify-end relative aspect-[9/13] container px-6 py-8 text-white`}
    >
      <h3 className="text-left text-2xl p-0 m-0 relative z-10 font-extrabold w-[16rem]">
        Se parte <br />
        de Ida<span className="text-idaclass4">Class</span>
      </h3>
      <ul className="list-inside list-disc z-10 text-sm space-y-1 my-8">
        <li>Trabaja con nosotros</li>
        <li>Se uno de nuestros docentes</li>
        <li>Convertite en Sede</li>
      </ul>

      <Button variant="default" asChild className="rounded-2xl z-10">
        <Link href="/">CONTACTOS</Link>
      </Button>

      <Image
        src={`/assets/ensenaConNosotros.png`}
        alt="asistencia"
        fill
        className={`object-cover rounded-3xl object-top`}
      />
    </article>
  );
};

export default EnsenaConNosotros;
