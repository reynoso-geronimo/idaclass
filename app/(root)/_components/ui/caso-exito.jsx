import { Avatar } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Link from "next/link";
import React from "react";

const CasoExito = () => {
  return (
    <div className="bg-gray-600 p-4 rounded-lg text-white">
      <Quote />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, magnam
        quos facilis laudantium enim dolores veritatis velit? Corporis
        consequuntur illo quibusdam veniam aut mollitia quo excepturi, quam
        cumque inventore nemo!
      </p>
      <Avatar/>
      <h3>Perez Con Pan</h3>
      <p>Preparador fisico</p>
      <Link href='/'>Ver Linkedin</Link>
    </div>
  );
};

export default CasoExito;
