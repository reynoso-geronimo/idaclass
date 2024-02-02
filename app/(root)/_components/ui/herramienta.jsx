
import { children } from "react";


const Herramienta = ({ rotar = false , contenido}) => {
  return (
    <div
      className={`${
        rotar && `transform rotate-180`
      }  h-44 flex flex-col items-center justify-evenly border-2 bg-idaclass px-2 text-white text-center`}
    >
      
      {contenido}
      
    </div>
  );
};

export default Herramienta;
