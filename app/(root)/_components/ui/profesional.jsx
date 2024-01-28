import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Profesional = ({ rotar = false }) => {
  return (
    <div
      className={`${
        rotar && `transform rotate-180`
      }  h-36 flex flex-col items-center justify-evenly border-2 bg-idaclass px-2 text-white`}
    >
      <Avatar>
        <AvatarImage src={""} />
        <AvatarFallback className="text-black">GR</AvatarFallback>
      </Avatar>
      <h1 className="font-bold">Geronimo Reynoso</h1>
      <h2 className="text-gray-200 text-sm">Desarrollador Web</h2>
      <Link href="/">Linkedin</Link>
    </div>
  );
};

export default Profesional;
