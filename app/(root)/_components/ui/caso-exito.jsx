import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
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
    <div className="bg-gray-800 container px-4 mx-auto py-4 text-white flex flex-col justify-between rounded-3xl max-w-72 lg:max-w-80 aspect-square">
      <div className="flex gap-1">
        <Quote className="transform -rotate-180" />
        <Avatar>
          <AvatarImage
            src={`https://flagcdn.com/${pais}.svg`}
            alt={`${pais ? pais : "argentina"}`}
          />
          <AvatarFallback className="text-black">{pais}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-bold flex items-center gap-1 text-sm lg:text-base">
            {nombre ? nombre : "Perez Con Pan"}
          </h3>
          <p className="text-xs lg:text-sm font-light text-gray-200">
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
        className="text-idaclass3 font-bold ml-auto"
      >
        Ver Perfil
      </Link>
    </div>
  );
};

export default CasoExito;
