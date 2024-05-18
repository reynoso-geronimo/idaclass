"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { Menu, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Promobar from "./promobar";
import NavbarWebMenu from "./navbarWebMenu";
import UserMenu from "./ui/userMenu";
import { Skeleton } from "./ui/skeleton";

const NavBar = ({ cursosFormacion, cursosEspecializacion }) => {
  const { data: session, status } = useSession();

  const pathname = decodeURIComponent(usePathname());
  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      {/* <Promobar /> */}
      <nav className="w-full flex justify-between items-center h-16 container max-sm:px-1 font-semibold">
        <Sheet>
          <SheetTrigger className="lg:hidden w-24">
            <Menu className="h-9 w-9" aria-label="menu-navegacion" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-72 h-[100svh] flex flex-col gap-4 text-base font-semibold"
          >
            <SheetClose asChild>
              <Link
                className={`-translate-x-3.5 flex items-center ${
                  pathname === "/" && "text-idaclass4"
                } `}
                href="/"
              >
                <Minus
                  className="rotate-90 -left-3 scale-x-[135%]"
                  size={28}
                  color="#0088ca"
                />
                Inicio
              </Link>
            </SheetClose>
            <Separator />

            <h1 className="-translate-x-3.5 flex items-center  text-idaclass">
              <Minus
                className="rotate-90 -left-3 scale-x-[135%]"
                size={28}
                color="#0088ca"
              />
              Cursos de formación
            </h1>
            {cursosFormacion.map((cursoFormacion, index) => (
              <SheetClose asChild key={index}>
                <Link
                  href={`/cursos-formacion/${cursoFormacion.nombre}`}
                  className={`${
                    pathname === `/cursos-formacion/${cursoFormacion.nombre}` &&
                    "text-idaclass4"
                  }`}
                >
                  {cursoFormacion.nombre}
                </Link>
              </SheetClose>
            ))}
            <Separator />
            <SheetClose asChild>
              <Link
                href="/cursos-especializados"
                className={`-translate-x-3.5 flex items-center ${
                  pathname.includes("cursos-especializados")&& "text-idaclass4"
                } `}
              >
                <Minus
                  className="rotate-90 -left-3 scale-x-[135%]"
                  size={28}
                  color="#0088ca"
                />
                Cursos Especializados
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/comunidad"
                className={`-translate-x-3.5 flex items-center ${
                  pathname.includes("comunidad") && "text-idaclass4"
                } `}
              >
                <Minus
                  className="rotate-90 -left-3 scale-x-[135%]"
                  size={28}
                  color="#0088ca"
                />
                Comunidad
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                className={`-translate-x-3.5 flex items-center ${
                  pathname === "/nosotros" && "text-idaclass4"
                } `}
                href="/nosotros"
              >
                <Minus
                  className="rotate-90 -left-3 scale-x-[135%]"
                  size={28}
                  color="#0088ca"
                />
                Nosotros
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="https://wa.me/+5491135872204"
                className={`-translate-x-3.5 flex items-center ${
                  pathname === "/asesorate" && "text-idaclass4"
                } `}
              >
                <Minus
                  className="rotate-90 -left-3 scale-x-[135%]"
                  size={28}
                  color="#0088ca"
                />
                Asesórate ya
                <svg
                  viewBox="0 0 32 32"
                  className="h-8 w-8 inline fill-green-500"
                >
                  <path
                    d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
        <Link href="/">
          <Image
            src={`/assets/idaclass.logo.webp`}
            alt="logo"
            width={180}
            height={45}
            priority
            className="brightness-150 hover:brightness-[100000%] transition-all ease-in-out duration-200"
          />
        </Link>
        <div className="flex items-center justify-end gap-12">
          <NavbarWebMenu
            pathname={pathname}
            cursosFormacion={cursosFormacion}
            cursosEspecializacion={cursosEspecializacion}
          />

          <div className="w-24 flex justify-end">
            {status === "loading" ? (
              <Skeleton className={"w-10 h-10 rounded-full"} />
            ) : session && session.user ? (
              <UserMenu session={session} signOut={signOut} />
            ) : (
              <Button className="rounded-3xl" onClick={() => signIn()}>
                Ingresar
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
