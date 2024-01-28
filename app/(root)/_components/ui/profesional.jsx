import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Profesional = ({ rotar = false }) => {
  return (
    <div
      className={`${
        rotar && `transform rotate-180`
      }  h-44 flex flex-col items-center justify-evenly border-2 bg-idaclass px-2 text-white text-center`}
    >
      <Avatar>
        <AvatarImage src={""} />
        <AvatarFallback className="text-black">GR</AvatarFallback>
      </Avatar>
      <h1 className="text-sm sm:text-base font-bold">Geronimo Reynoso</h1>
      <h2 className="text-xs sm:text-sm text-gray-200 ">Desarrollador Web</h2>
      <Link href="/" className="text-sm sm:text-base">
        Linkedin
      </Link>
    </div>
  );
};

export default Profesional;
