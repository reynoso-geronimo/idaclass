// import Link from "next/link";

import Image from "next/image";

const Profesional = ({ profesional }) => {
  return (
    <div className="w-60 aspect-square bg-idaclass text-center rounded-3xl flex flex-col justify-between">
      <div className="h-[75%] relative">
        <Image
          src={`/equipo-profesional/${profesional.imagen}`}
          fill
          alt={profesional.nombre}
          className="object-cover object-top rounded-t-3xl"
        />
      </div>
      <div className="flex-1 bg-idaclass overflow-hidden z-10 rounded-b-3xl p-2">
        <h3 className="font-medium text-sm">{profesional.nombre}</h3>
        <p className="text-muted text-xs">{profesional.titulo}</p>
      </div>
    </div>
  );
};

export default Profesional;
