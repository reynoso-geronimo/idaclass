"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CalendarDaysIcon, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const EventoCard = ({ evento }) => {
  
  const [imgError, setImgError] = useState(false)

  return (
    <article className="w-full lg:w-1/2  rounded-3xl overflow-hidden text-white mx-auto flex flex-col">
      <div className="w-full mx-auto relative flex flex-col items-start justify-between gap-8 p-4 flex-1 ">
        <Image
          loader={({ src }) => src}
          src={"/"}
          alt="evento"
          fill
          onError={(e) => {
            e.target.id = "./assets/logoIdaClassAlt2.svg";
            e.target.srcset ="./assets/logoIdaClassAlt2.svg";
            setImgError(true)
           
        }}
          quality={100}
          className={`${imgError?"object-scale-down object-right":"object-cover"} -z-10 bg-black`}
        />
        <h2 className="text-4xl font-black mt-8">{evento?.clasificacion}</h2>
        <div className="max-w-[50%]">
          <Separator />
          <h2 className="font-bold text-lg py-2 w-full">{evento?.titulo}</h2>
          <Separator />
        </div>
        <Badge className={"flex items-center gap-2 px-4"}>
          <CalendarDaysIcon />
          {new Date(evento?.fecha).toLocaleDateString()} <Clock />
          {new Date(evento?.fecha).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Badge>
      </div>
      <div className="flex flex-col justify-between p-4 gap-6  bg-idaclass4">
        <div className="flex justify-between items-center text-sm pb-2">
          <p className="italic font-medium text-xs">
            Coordina: {evento?.profesionals[0].nombre}
          </p>
          <Link
            href={``}
            className=" font-semibold text-right flex gap-2 items-center text-xs"
          >
            VER MÁS
            <ArrowRight className="inline" size={22} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventoCard;
