import Image from "next/image";
import React from "react";

const CursoCheckoutCard = ({tipo, nombre, modalidad}) => {
  return (
    <div className="flex pt-4 gap-4 w-full px-4">
      <Image width={140} height={140} src={"/cursosFormacion/cursos/headersMobile/1.png"} className="aspect-square object-cover object-top rounded-3xl" alt="curso card"/>
      <div className="flex flex-col justify-center items-start gap-2">
        <h2 className="text-muted-foreground">Estas Comprando:</h2>
        <h2 className="text-sm font-bold">{tipo}</h2>
        <h2 className="text-sm font-bold">{nombre}</h2>
        <h2 className="font-bold text-orange-500">Modalidad {modalidad}</h2>
      </div>
    </div>
  );
};

export default CursoCheckoutCard;
