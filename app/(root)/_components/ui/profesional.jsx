// import Link from "next/link";

import Image from "next/image";

const Profesional = ({ profesional }) => {
  return (
    <div className="aspect-square bg-idaclass text-center rounded-3xl">
      <div className="h-[77%] relative">
        <Image
          src={`/${profesional.imagen}`}
          fill
          alt={profesional.nombre}
          className="object-cover rounded-t-3xl"
        />
      </div>
      <div className="h-[23%] bg-idaclass overflow-hidden z-10 rounded-b-3xl pt-1">
        <h3 className="font-medium text-sm">{profesional.nombre}</h3>
        <p className="text-muted text-xs">{profesional.titulo}</p>
      </div>
    </div>
  );
};

export default Profesional;
