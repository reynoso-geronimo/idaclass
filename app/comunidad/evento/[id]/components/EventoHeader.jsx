"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDaysIcon, Clock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const EventoHeader = ({evento}) => {
    const [imgError, setImgError] = useState(false)

  return (
    <div className=" w-full pb-8 lg:aspect-[16/7] lg:container relative text-white bg-gradient-to-t lg:bg-gradient-to-r from-idaclass5">
      <Image
        loader={({ src }) => src}
        quality={100}
        src={`/eventos/${evento.titulo}.png`}
        alt={evento.titulo}
        fill
        priority
        onError={e => {
          e.target.id = "/assets/logoIdaClassAlt2.svg";
          e.target.srcset = "/assets/logoIdaClassAlt2.svg";
          setImgError(true);
        }}
        className={`${imgError?"object-scale-down object-top pt-24":"object-top object-scale-down "} -z-10 lg:hidden bg-black`}
      />
      <div className="max-lg:relative  w-[100vw] max-lg:aspect-video">
        <Image
          loader={({ src }) => src}
          src={`/eventos/${evento.titulo}.png`}
          alt={evento.titulo}
          fill
          quality={100}
          priority
          onError={e => {
            e.target.id = "/assets/logoIdaClassAlt2.svg";
            e.target.srcset = "/assets/logoIdaClassAlt2.svg";
            setImgError(true);
          }}
          className={`${imgError?"object-scale-down object-center":"w-full h-auto object-top lg:object-cover "} -z-10 max-lg:hidden bg-black`}
        />
      </div>
      <div className="w-full max-w-xl flex flex-col h-full justify-start gap-4 lg:justify-evenly lg:ml-0 container">
        <div className="flex">
          <Badge className={" font-normal z-10 hover:"}>{evento.clasificacion}</Badge>
          <Badge
            variant={"outline"}
            className={
              "-translate-x-6 pl-8 pr-2 italic text-white border-idaclass3 flex items-center gap-2"
            }
          >
            <CalendarDaysIcon />
            {new Date(evento?.fecha).toLocaleDateString()} <Clock />
            {new Date(evento?.fecha).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Badge>
        </div>
        <div className="space-y-4">
          <h1 className="font-black text-4xl lg:text-5xl text-pretty">
            {evento.titulo}
          </h1>
          {/* <h2 className={`${textoEnDegrade} text-lg lg:text-2xl font-bold`}>
          {evento.subtitulo}
        </h2> */}
        </div>
        {evento.profesionals[0] && (
          <div className="w-auto flex items-center gap-2">
            <Avatar className="h-14 w-14 text-black">
              <AvatarImage
                src={`/profesional/${evento.profesionals[0].nombre}.png`}
                alt={`${evento.profesionals[0].nombre}`}
              />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <div className="pr-2">
              <p className="font-medium text-sm">Coordina:</p>
              <h2 className="font-bold text-lg">
                {evento.profesionals[0].nombre}
              </h2>
              <p className="font-medium text-sm">
                {evento.profesionals[0].titulo}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventoHeader;
