"use client";
import { X } from "lucide-react";
import { useState } from "react";

const Promobar = () => {
  const [Close, setClose] = useState(false);

  return (
    <div className={`py-2 bg-primary text-white text-center ${Close && "hidden"} flex justify-end`}>
      <p className="w-full text-center">¡Comprá ahora y pagá en 10 cuotas sin interés con tarjeta de crédito! &#128293;</p>
      <X className="mr-2 lg:mr-12" onClick={setClose} />
    </div>
  );
};

export default Promobar;
