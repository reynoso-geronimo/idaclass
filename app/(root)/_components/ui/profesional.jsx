import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Profesional = ({ rotar = false, profesional }) => {
  return (
    <div
      className={`${
        rotar && `transform rotate-180`
      }  h-72 flex flex-col items-center justify-evenly border-2 bg-idaclass4 px-2 text-white text-center rounded-xl profesionalbg`}
    >
      <Avatar className={`h-16 w-16 sm:h-24 sm:w-24 border-2 border-idaclass2`}>
        <AvatarImage src={`${profesional.imagen}`} className="object-cover" />
        <AvatarFallback className="text-black">GR</AvatarFallback>
      </Avatar>
      <div className="bg-idaclass w-full p-2 rounded-2xl border-2 border-idaclass2">
        <p className="text-sm sm:text-base font-bold">{profesional?.nombre}</p>
        <p className="text-xs sm:text-sm text-gray-200 ">
          {profesional?.titulo}
        </p>
      </div>
      <Link href="/" className="text-sm sm:text-base text-white font-bold">
        Linkedin
      </Link>
    </div>
  );
};

export default Profesional;
