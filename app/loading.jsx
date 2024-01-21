import { Loader } from "lucide-react";
import Image from "next/image";

export default function Loading() {

  return (
    <div className="flex flex-row items-center justify-center h-screen">
       <Image
            src={`/assets/idaclass.logo.webp`}
            alt="logo"
            width={180}
            height={45}
            priority
            className="animate-pulse"
          />
      <Loader
        className="animate-spin"
        width={72}
        height={72}
        role="status"
        aria-label="Loading data"
      />
    </div>
  );
}
