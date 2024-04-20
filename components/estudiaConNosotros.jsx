import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const EstudiaConNosotros = ({ sideBar = false }) => {
  return (
    <article
      className={`w-full min-h-[480px] flex flex-col justify-end relative aspect-[9/13] container px-6 py-8 text-white`}
    >
      <h3 className="text-5xl relative z-10 font-extrabold text-center">
        Ida<span className="text-idaclass4">Class</span>
      </h3>
      <p className={`my-4 font-bold text-lg tracking-tighter text-center z-10`}>¡Aprendé con nosotros!</p>

      <div className="space-y-4 z-10 flex flex-col">
        <Button variant="default" asChild className="rounded-2xl">
          <Link href="https://wa.me/+5491135872204">CURSOS DE FORMACIÓN</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent text-idaclass3 border-idaclass3 rounded-2xl">
          <Link href="https://wa.me/+5491135872204">CURSOS DE DEMAND</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent text-idaclass3 border-idaclass3 rounded-2xl">
          <Link href="https://wa.me/+5491135872204">COMUNIDAD IDACLASS </Link>
        </Button>
      </div>
      <Image
        src={`/assets/aprendeConNosotros.png`}
        alt="asistencia"
        fill
        className={`object-cover rounded-3xl object-top`}
      />
     
    </article>
  );
};

export default EstudiaConNosotros;
