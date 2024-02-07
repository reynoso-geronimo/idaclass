"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { Menu } from "lucide-react";
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
const NavBar = () => {
  const { data: session } = useSession();

  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="w-full flex justify-around items-center h-16 mt-2">
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-9 w-9 " aria-label="menu-navegacion" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-72 h-[100svh] flex flex-col gap-4 text-base font-medium"
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
            <h1 className="border-l-2 border-idaclass4 pl-2  text-idaclassGray">
              Cursos de formacion
            </h1>
            <SheetClose asChild>
              <Link
                href="/cursos"
                className={`${pathname === "/cursos" && "text-idaclass4"}`}
              >
                Cursos de formacion 1
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/cursos"
                className={`${pathname === "/cursos" && "text-idaclass4"} `}
              >
                Cursos de formacion 2
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/cursos"
                className={`${pathname === "/cursos" && "text-idaclass4"} `}
              >
                Cursos de formacion 3
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/cursos"
                className={`${pathname === "/cursos" && "text-idaclass4"} `}
              >
                Cursos de formacion 4
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/cursos-on-demand"
                className={`border-l-2 border-idaclass4 pl-2 ${
                  pathname === "/cursos-on-demand" && "text-idaclass4"
                } `}
              >
                Cursos on Demand
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/blog"
                className={`border-l-2 border-idaclass4 pl-2 ${
                  pathname === "/blog" && "text-idaclass4"
                } `}
              >
                Comunidad IdaClass
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/asesorate"
                className={`border-l-2 border-idaclass4 pl-2 ${
                  pathname === "/asesorate" && "text-idaclass4"
                } `}
              >
                Asesorate ya
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
        <div className="hidden lg:flex justify-around gap-8 font-medium	">
          <Link
            href="/"
            className={`${
              pathname === "/" &&
              "text-idaclass4 underline decoration-2 underline-offset-4"
            } hover:text-idaclass4 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-idaclass4 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={`${
              pathname === "/nosotros" &&
              "text-idaclass4 underline decoration-2 underline-offset-4"
            } hover:text-idaclass4 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-idaclass4 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >
            Nosotros
          </Link>

          <Menubar className="border-none outline-none hover:text-idaclass4 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-idaclass4 after:transition-all after:duration-150 hover:after:w-[70%]">
            <MenubarMenu>
              <MenubarTrigger>Cursos</MenubarTrigger>
              <MenubarContent className="w-[100vw] flex justify-center gap-x-44 mt-4 bg-gray-200">
                <div>
                  <h5 className="relative flex cursor-default items-center rounded-sm px-2 my-1 text-lg font-bold text-idaclass  border-l-4 border-idaclass4">
                    Cursos de Formacion
                  </h5>
                  <MenubarSeparator />
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter
                  </MenubarItem>
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter
                  </MenubarItem>
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter
                  </MenubarItem>
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter
                  </MenubarItem>
                </div>
                <div>
                  <h5 className="relative flex cursor-default items-center rounded-sm px-2 my-1 text-lg font-bold text-idaclass  border-l-4 border-idaclass4">
                    Cursos on demand
                  </h5>
                  <MenubarSeparator />
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter{" "}
                  </MenubarItem>
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter
                  </MenubarItem>
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter
                  </MenubarItem>
                  <MenubarItem className="text-xl font-medium">
                    Personal trainter
                  </MenubarItem>
                  <MenubarItem className="p-0 mx-2">
                    <Button size="sm" className="rounded-xl text-sm font-bold">
                      Ver todos los cursos{" "}
                    </Button>
                  </MenubarItem>
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link
            href="/blog"
            className={`${
              pathname === "/blog" &&
              "text-idaclass4 underline decoration-2 underline-offset-4"
            } hover:text-idaclass4 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-idaclass4 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >
            Comunidad IdaClass
          </Link>

          <Link
            href="/asesorate"
            className={`${
              pathname === "/asesorate" &&
              "text-idaclass4 underline decoration-2 underline-offset-4"
            } hover:text-idaclass4 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-idaclass4 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >
            Asesorate ya
          </Link>
        </div>
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
      </nav>
      <Separator className="hidden lg:block h-2 bg-gray-200" />
    </header>
  );
};

export default NavBar;
