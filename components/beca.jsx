import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const Beca = ({sideBar=false}) => {
  return (
    <article className={`w-full min-h-[480px] flex flex-col justify-end relative aspect-[9/13] container px-6 py-8 text-white ${!sideBar&&"lg:items-end lg:w-1/2 lg:aspect-auto lg:justify-between max-lg:max-w-md"}`} >
      <h3 className="text-left text-2xl p-0 m-0 relative z-10 font-extrabold w-[16rem]">
        Obtén tu <br /> BecaClass 40%
      </h3>
      <p className={`${!sideBar&&"w-[16rem] max-w-[90%]"} my-4 text-sm sm:text-base z-10 text-balanced `}>
        Nuestra misión es abrir las puertas a la educación en Latinoamérica.
        Facilitamos el acceso a la educación de calidad de una forma simple y
        accesible. Accedé ahora a la BecaClass del 40% y avanzá hacia tus metas
        profesionales con IdaClass.
      </p>

      <Button
        size="default"
        className={`${!sideBar&&"lg:w-[16rem]"} px-2 w-full z-10 rounded-2xl `}
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
        className={`${sideBar?"":"lg:hidden"} object-cover  rounded-3xl object-top`}
      />
      <Image
        src={`/assets/becaWeb.png`}
        alt="beca"
        fill
        className={`${sideBar?"hidden":"max-lg:hidden"} object-cover  rounded-3xl`}
      />
    </article>
  );
};

export default Beca;
