import Image from "next/image";
import linea from "../../public/assets/Linea img 4.png";
import { cn } from "@/lib/utils";
const LineaConectar = ({ className, dir }) => {
  return (
    <div className="w-full overflow-hidden">
      <Image
        src={linea}
        alt="linea"
        className={cn(
          "relative bottom-0 scale-150",
          `${dir === "left" ? "-scale-x-150" : "-right-[60%]"}`,
          className
        )}
      />
    </div>
  );
};

export default LineaConectar;
