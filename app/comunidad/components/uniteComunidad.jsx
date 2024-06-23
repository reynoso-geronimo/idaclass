"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const UniteComunidad = () => {
  const { data: session } = useSession();

  return (
    <div className="container w-full h-80 lg:h-20 relative max-lg:bg-gradient-to-b from-[#01080D] to-[#151C26] text-white flex max-lg:flex-col items-center">
      {!session ? (
        <>
          <h2 className="font-bold text-2xl text-center pt-6 lg:pt-2 pb-2 lg:text-left">
            Sumate a la <br className="lg:hidden" />
            Comunidad Ida<span className="text-idaclass3">Class</span>
          </h2>
          <ArrowDown
            className="text-idaclass3 max-lg:mx-auto lg:mx-4 lg:-rotate-90"
            size={32}
            strokeWidth={3}
          />
          <h3 className="text-sm py-4">
            Te invitamos a ser parte de esta revolución y{" "}
            <br className="max-lg:hidden" /> transformar tus aspiraciones en
            logros tangibles.
          </h3>
          {/*//!!ver que hacer con este vinculo */}
          <Button
            onClick={() => signIn()}
            className="z-10 flex items-center justify-center rounded-2xl w-52 py-2.5 lg:mx-4 text-center bg-idaclass4 text-white font-bold text-sm"
          >
            ¡UNITE!
          </Button>
        </>
      ) : (
        <>
          <h2 className="font-bold text-2xl text-center pt-6 lg:pt-2 pb-2 lg:text-left">
            Descubre más contenido en la comunidad
          </h2>
          <ArrowDown
            className="text-idaclass3 max-lg:mx-auto lg:mx-4 lg:-rotate-90"
            size={32}
            strokeWidth={3}
          />
          <Link
            href={"/comunidad"}
            className="z-10 flex items-center justify-center rounded-2xl w-52 py-2.5 lg:mx-4 text-center bg-idaclass4 text-white font-bold text-sm"
          >
            Comunidad
          </Link>
        </>
      )}

      <Image
        src={"/blog/bgWeb.png"}
        fill
        className="max-lg:hidden -z-10"
        alt=""
      />
      <Image
        src={"/blog/bgMobile.png"}
        fill
        className="lg:hidden object-contain object-right-bottom "
        alt=""
      />
    </div>
  );
};

export default UniteComunidad;
