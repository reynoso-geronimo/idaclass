import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full flex flex-col md:flex-row flex-wrap justify-evenly items-center pt-16 text-white text-center">
      <section className="flex flex-col items-center">
        <Image
          src={`/assets/idaclass.logo.webp`}
          alt="logo"
          width={200}
          height={50}
          
        />
        <p className="mt-6">Plataforma de cursos E-learning</p>
        <p>para la formación de profesionales.</p>
        <a
          href="mailto:hola@idaclassacademy.com"
          className="text-xl font-bold mt-12"
        >
          hola@idaclassacademy.com
        </a>
      </section>
      <section className="flex flex-col gap-2">
        <h3 className="text-lg font-bold mt-12 mb-2">Enlaces</h3>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/cursos">Cursos</Link>
        <Link href="/">Comunidad IdaClassw</Link>
        <Link href="/asesorate">Asesorate ya</Link>
      </section>

      <section className="w-full mt-6">
        <Separator className="h-[1px]  bg-gray-500"/>
        <div className="flex justify-center gap-4 my-4">
          <FacebookIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <p className="text-xs">
          Idaclass Academy© Todos los derechos reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
