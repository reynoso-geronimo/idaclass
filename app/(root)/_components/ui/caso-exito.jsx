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
    <div className="bg-gray-800 container px-4 mx-auto py-2 text-white flex flex-col justify-around rounded-3xl max-w-60 aspect-square">
      <div className="flex gap-1">
        <Quote className="transform -rotate-180" />
        <Avatar>
          <AvatarImage src={`https://flagcdn.com/${pais ? pais : "ar"}.svg`} alt={pais}/>
          <AvatarFallback className="text-black">PP</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-bold flex items-center gap-1 text-sm">
            {nombre ? nombre : "Perez Con Pan"}
          </h3>
          <p className="text-xs font-light text-gray-200">
            {carrera ? carrera : "Preparador Fisico"}
          </p>
        </div>
      </div>
      <p className="text-xs italic">
        {experiencia
          ? experiencia
          : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </p>

      <Link
        href={linkedin ? linkedin : "/"}
        className="text-idaclass3 font-bold ml-auto"
      >
        Ver Linkedin
      </Link>
    </div>
  );
};

export default CasoExito;
