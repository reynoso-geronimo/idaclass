import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import linea from "../public/assets/Línea img 4.png";
import Asesorate from "@/components/asesorate";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Beca = () => {
  return (
    <section className="container mt-12">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <Asesorate />
        <article className="w-full lg:w-1/2 flex flex-col justify-end lg:justify-between lg:items-end relative aspect-[9/13] lg:aspect-auto max-lg:max-w-md container py-8 text-white">
          <h3 className="text-left text-2xl p-0 m-0 relative z-10 font-extrabold w-[16rem]">
            Obtén tu <br /> BecaClass 40%
          </h3>
          <p className="my-4 text-sm sm:text-base z-10 text-balanced w-[16rem]">
            Nuestra misión es abrir las puertas a la educación en Latinoamérica.
            Facilitamos el acceso a la educación de calidad de una forma simple
            y accesible. Accedé ahora a la BecaClass del 40% y avanzá hacia tus
            metas profesionales con IdaClass.
          </p>

          <Button
            size="default"
            className="px-2 w-full z-10 rounded-2xl lg:w-[16rem]"
            asChild
          >
            <Link href="https://wa.me/+5491135872204">
              <div className="flex  items-center gap-1">
                <ArrowRight /> IMPULSA TU FUTURO
              </div>
            </Link>
          </Button>

          <Image
            src={`/assets/becaMobile.png`}
            alt="beca"
            fill
            className="object-cover -z-10 rounded-3xl lg:hidden object-top"
          />
          <Image
            src={`/assets/becaWeb.png`}
            alt="beca"
            fill
            className="object-cover -z-10 rounded-3xl max-lg:hidden"
          />
        </article>
      </div>
    </section>
  );
};

export default Beca;
