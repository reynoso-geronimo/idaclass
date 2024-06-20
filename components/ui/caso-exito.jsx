import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CasoExito = ({
  experiencia,
  avatar,
  nombre,
  carrera,
  linkedin,
  pais,
}) => {


  return (
    <div className="bg-gray-200 container px-4 mx-auto py-4 flex flex-col justify-between rounded-3xl max-w-72 lg:max-w-80 aspect-square">
      <div className="flex gap-4">
        <Avatar className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 h-[60px] w-[60px] relative overflow-visible">
          <AvatarImage
            src={`https://flagcdn.com/${pais}.svg`}
            alt={`${pais ? pais : "argentina"}`}
            className="rounded-full p-1 bg-gray-200 w-full h-auto"
          />
          <AvatarFallback className="text-black">{pais}</AvatarFallback>
         {/*  <Image
            src={`https://flagcdn.com/${pais}.svg`}
            alt={`${pais ? pais : "argentina"}`}
            height={24}
            width={24}
            className="rounded-full absolute right-0 bottom-0 h-6 w-6"
          /> */}
        </Avatar>
        <div>
          <h3 className="font-bold flex items-center gap-1 text-sm lg:text-xl">
            {nombre ? nombre : "Perez Con Pan"}
          </h3>
          <p className="text-xs lg:text-base font-medium text-idaclass">
            {carrera ? carrera : "Preparador Físico"}
          </p>
        </div>
      </div>
      <p className="text-xs italic lg:text-sm">
        {experiencia
          ? experiencia
          : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </p>

      <Link
        href={linkedin ? linkedin : "/"}
        className="text-idaclass3 font-bold ml-auto flex items-center gap-2"
      >
        <Instagram /> Ver Perfil
      </Link>
    </div>
  );
};

export default CasoExito;
