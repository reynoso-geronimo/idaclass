// import Link from "next/link";

import Image from "next/image";

const Profesional = ({ profesional }) => {
  return (
    <div className="w-60 aspect-square bg-idaclass text-center rounded-3xl flex flex-col justify-between mx-">
      <div className="h-[70%] relative">
        <Image
          src={`/${profesional.imagen}`}
          fill
          alt={profesional.nombre}
          className="object-cover rounded-t-3xl"
        />
      </div>
      <div className="flex-1 bg-idaclass4 overflow-hidden z-10 rounded-b-3xl py-2">
        <h3 className="font-medium text-sm">{profesional.nombre}</h3>
        <p className="text-muted text-xs">{profesional.titulo}</p>
      </div>
    </div>
  );
};

export default Profesional;
