"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { ChevronDown, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Promobar from "./promobar";

const classEscritorio =
  "hover:text-idaclass4 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-idaclass4 after:transition-all after:duration-150 hover:after:w-[70%]";

const NavBar = ({ cursosFormacion }) => {
  const { data: session } = useSession();

  const pathname = usePathname().replace(/%20/g, " ");
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <Promobar />
      <nav className="w-full flex justify-between items-center h-16  container max-sm:px-1 font-semibold">
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
                className={`${pathname === "/" && "text-idaclass4"} `}
                href="/"
              >
                Inicio
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                className={`border-l-2 border-idaclass4 pl-2 ${
                  pathname === "/nosotros" && "text-idaclass4"
                } `}
                href="/nosotros"
              >
                Nosotros
              </Link>
            </SheetClose>
            <Separator />
            <h1 className="border-l-2 border-idaclass4 pl-2  text-idaclass">
              Cursos de formación
            </h1>
            {cursosFormacion.map((cursoFormacion, index) => (
              <SheetClose asChild key={index}>
                <Link
                  href={`/curso-formacion/${cursoFormacion.nombre}`}
                  className={`${
                    pathname === `/curso-formacion/${cursoFormacion.nombre}` &&
                    "text-idaclass4"
                  }`}
                >
                  {cursoFormacion.nombre}
                </Link>
              </SheetClose>
            ))}

            <SheetClose asChild>
              <Link
                href="/cursos"
                className={`border-l-2 border-idaclass4 pl-2 ${
                  pathname === "/cursos" && "text-idaclass4"
                } `}
              >
                Cursos on Demand
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/comunidad"
                className={`border-l-2 border-idaclass4 pl-2 ${
                  pathname === "/comunidad/blog" && "text-idaclass4"
                } `}
              >
                Comunidad IdaClass
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="https://wa.me/+5491135872204"
                className={`border-l-2 border-idaclass4 pl-2 ${
                  pathname === "/asesorate" && "text-idaclass4"
                } `}
              >
                Asesórate ya
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
            className="hover:brightness-125 transition-all ease-in duration-200"
          />
        </Link>
        <div className="flex items-center justify-end gap-12">
          <div className="hidden lg:flex justify-around items-center gap-8">
            <Link
              href="/"
              className={`${
                pathname === "/" && "after:w-[100%] text-idaclass4"
              } ${classEscritorio}`}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className={`${
                pathname === "/nosotros" && "after:w-[100%] text-idaclass4"
              } ${classEscritorio}`}
            >
              Nosotros
            </Link>

            <Menubar className="border-none outline-none bg-transparent">
              <MenubarMenu>
                <MenubarTrigger
                  className={`${classEscritorio} ${
                    (pathname.includes("curso-formacion") ||
                      pathname.includes("cursos")) &&
                    "after:w-[100%] text-idaclass4"
                  }  `}
                >
                  Cursos
                  <ChevronDown
                    className={`inline transition-transform duration-200`}
                  />
                </MenubarTrigger>
                <MenubarContent
                  align="center"
                  className="px-12 pb-4 border-none rounded-b-xl flex justify-center gap-x-44 mt-[11px] bg-black text-white"
                >
                  <div>
                    <h5 className="relative flex cursor-default items-center rounded-sm px-2 my-1 text-xl font-bold text-idaclass  border-l-4 border-idaclass4">
                      Cursos de Formación
                    </h5>
                    <MenubarSeparator />
                    {cursosFormacion.map((cursoFormacion, index) => (
                      <MenubarItem
                        className="text-xl focus:bg-idaclass4 focus:text-white transition-all"
                        key={index}
                        asChild
                      >
                        <Link
                          href={`/curso-formacion/${cursoFormacion.nombre}`}
                          className={`${
                            pathname ===
                              `/curso-formacion/${cursoFormacion.nombre}` &&
                            `text-idaclass4`
                          } hover:cursor-pointer font-medium `}
                        >
                          {cursoFormacion.nombre}
                        </Link>
                      </MenubarItem>
                    ))}
                  </div>
                  <div>
                    <h5 className="relative flex cursor-default items-center rounded-sm px-2 my-1 text-xl font-bold text-idaclass  border-l-4 border-idaclass4">
                      Cursos on demand
                    </h5>
                    <MenubarSeparator />
                    <MenubarItem className="text-xl">
                      Personal trainer
                    </MenubarItem>
                    <MenubarItem className="text-xl">
                      Personal trainer
                    </MenubarItem>
                    <MenubarItem className="text-xl">
                      Personal trainer
                    </MenubarItem>
                    <MenubarItem className="text-xl">
                      Personal trainer
                    </MenubarItem>
                    <MenubarItem
                      className="p-0 mx-2 hover:bg-primary hover:cursor-pointer"
                      asChild
                    >
                      <Button
                        size="sm"
                        className="rounded-xl text-sm font-bold"
                        asChild
                      >
                        <Link href="/cursos"> Ver todos los cursos</Link>
                      </Button>
                    </MenubarItem>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <Link
              href="/comunidad"
              className={`${
                pathname === "/comunidad/blog" &&
                "after:w-[100%] text-idaclass4"
              } ${classEscritorio}`}
            >
              Comunidad IdaClass
            </Link>

            <Link
              href="https://wa.me/+5491135872204"
              className={`${
                pathname === "/asesorate" && "after:w-[100%] text-idaclass4"
              } ${classEscritorio} fill-green-500 hover:fill-idaclass4`}
            >
              Asesórate ya
              <svg viewBox="0 0 32 32" className="h-8 w-8 inline ">
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="w-24 flex justify-end">
            {session && session.user ? (
              <Avatar onClick={() => signOut()} className="cursor-pointer">
                <AvatarImage src={session.user.image} alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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
