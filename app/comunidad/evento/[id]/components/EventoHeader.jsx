"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDaysIcon, Clock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const EventoHeader = ({ evento }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className=" w-full py-12 lg:min-h-fit lg:container relative text-white bg-gradient-to-t from-[70%] lg:bg-gradient-to-r lg:from-[35%] from-idaclass5 ">
      <div className="lg:hidden h-56 w-full">
      <Image
        loader={({ src }) => src}
        quality={100}
        src={`/eventos/${evento.id}.png`}
        alt={evento.titulo}
        fill
        priority
        onError={e => {
          e.target.id = "/assets/logoIdaClassAlt2.svg";
          e.target.srcset = "/assets/logoIdaClassAlt2.svg";
          setImgError(true);
        }}
        className={`${
          imgError
            ? "object-scale-down object-top pt-24"
            : "object-top object-scale-down "
        } -z-10 lg:hidden bg-black`}
      />
      </div>
      <div className="max-lg:hidden w-full">
        <Image
          loader={({ src }) => src}
          src={`/eventos/${evento.id}.png`}
          alt={evento.titulo}
          fill
          quality={100}
          priority
          onError={e => {
            e.target.id = "/assets/logoIdaClassAlt2.svg";
            e.target.srcset = "/assets/logoIdaClassAlt2.svg";
            setImgError(true);
          }}
          className={`${
            imgError
              ? "object-scale-down object-center"
              : "w-auto h-auto object-right-top lg:object-contain "
          } -z-10 max-lg:hidden `}
        />
      </div>
      <div className="w-full max-w-xl flex flex-col h-full justify-start gap-4 lg:justify-evenly lg:ml-0 container ">
        <div className="flex">
          <Badge
            className={
              "z-10 bg-orange-500 text-white flex items-center justify-center gap-2 py-2 px-4 font-bold sm:text-lg"
            }
            variant={"outline"}
          >
            <span className="text-center">{evento.clasificacion.toUpperCase()}</span>
            <CalendarDaysIcon />
            {new Date(evento?.fecha).toLocaleDateString()}
            <Clock />
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
          {
            <h2 className={`text-idaclass3 text-lg lg:text-2xl font-bold`}>
              {evento.subtitulo}
            </h2>
          }
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
