import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
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
    <div className="bg-gray-800 py-4 pr-8 pl-16 rounded-lg text-white flex flex-col">
      <Quote className="transform -rotate-180 -translate-x-12" />
      <p className="text-xs leading-6 ">
        {experiencia
          ? experiencia
          : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </p>
      <div className="flex my-4 gap-4">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback className="text-black">PP</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-bold flex items-center gap-1">
          <Image
              src={`https://flagcdn.com/${pais?pais:"ar"}.svg`}
              width={26}
              height={24}
              alt="Ukraine"
            ></Image>
            {nombre ? nombre : "Perez Con Pan"}
          </h3>
          <p className="text-sm font-light text-gray-200">
            {carrera ? carrera : "Preparador Fisico"}
          </p>
        </div>
      </div>
      <Link
        href={linkedin ? linkedin : "/"}
        className="text-sky-500 font-bold ml-auto"
      >
        Ver Linkedin
      </Link>
    </div>
  );
};

export default CasoExito;
