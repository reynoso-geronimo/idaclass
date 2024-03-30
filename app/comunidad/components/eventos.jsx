import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CalendarClock,
  CalendarDaysIcon,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const eventos = [1, 2];

const Eventos = () => {
  return eventos.length > 0 ? (
    <div className=" flex max-lg:flex-col gap-4 py-2">
      <article className="w-full lg:w-1/2  rounded-3xl overflow-hidden text-white bg-blue-950 max-w-[520px] mx-auto">
        <div className="bg-black aspect-video mx-auto relative flex items-end">
          <Image src={""} alt="evento" fill className="object-cover" />
          <Badge className={"mb-4 ml-4 flex items-center gap-2 px-4"}>
            <CalendarDaysIcon />
            FECHA <Clock />
            HORA
          </Badge>
        </div>
        <div className="flex flex-col justify-between p-4 gap-6">
          <h5 className="leading-5 font-semibold line-clamp-[3]">{`evento`}</h5>
          <div className="text-idaclass3 flex justify-between items-center text-sm pb-2 pr-6">
            <p className="italic text-xs">
              Coordina: {`Nombre del coordinador`}
            </p>
            <Link
              href={``}
              className=" font-semibold text-right flex items-center"
            >
              VER MAS
              <ArrowRight className="inline" size={22} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </article>
      <article className="w-full lg:w-1/2  rounded-3xl overflow-hidden text-white bg-blue-950 max-w-[520px] mx-auto">
        <div className="bg-black aspect-video mx-auto relative flex items-end">
          <Image src={""} alt="evento" fill className="object-cover" />
          <Badge className={"mb-4 ml-4 flex items-center gap-2 px-4"}>
            <CalendarDaysIcon />
            FECHA <Clock />
            HORA
          </Badge>
        </div>
        <div className="flex flex-col justify-between p-4 gap-6">
          <h5 className="leading-5 font-semibold line-clamp-[3]">{`evento`}</h5>
          <div className="text-idaclass3 flex justify-between items-center text-sm pb-2 pr-6">
            <p className="italic text-xs">
              Coordina: {`Nombre del coordinador`}
            </p>
            <Link
              href={``}
              className=" font-semibold text-right flex items-center"
            >
              VER MAS
              <ArrowRight className="inline" size={22} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  ) : (
    <div className=" flex max-lg:flex-col gap-4 py-2text-center text-white bg-idaclass rounded-2xl">
      <p className="w-full aspect-[32/9] py-2 text-center text-2xl">
        Aun no hay eventos
      </p>
    </div>
  );
};

export default Eventos;
