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

const NavBar = () => {
  const { data: session } = useSession();

  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="w-full flex justify-around items-center h-16 mt-2">
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-9 w-9 " aria-label="menu-navegacion"/>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-72 h-[100svh] flex flex-col gap-4 text-base font-medium"
          >
            <SheetClose asChild>
              <Link
                className={`${pathname === "/" && "text-sky-700"}`}
                href="/"
              >
                Inicio
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                className={`${pathname === "/nosotros" && "text-sky-700"}`}
                href="/nosotros"
              >
                Nosotros
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/cursos"
                className={`${pathname === "/cursos" && "text-sky-700"}`}
              >
                Cursos
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link href="/blog">Blog</Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link href="/asesorate">Asesorate ya</Link>
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
              "text-sky-700 underline decoration-2 underline-offset-4"
            } hover:text-sky-700 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-sky-700 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={`${
              pathname === "/nosotros" &&
              "text-sky-700 underline decoration-2 underline-offset-4"
            } hover:text-sky-700 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-sky-700 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >
            Nosotros
          </Link>

          <Link
            href="/cursos"
            className={`${
              pathname === "/cursos" &&
              "text-sky-700 underline decoration-2 underline-offset-4"
            } hover:text-sky-700 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-sky-700 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >
            Cursos
          </Link>

          <Link href="/blog" className={`${
              pathname === "/blog" &&
              "text-sky-700 underline decoration-2 underline-offset-4"
            } hover:text-sky-700 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-sky-700 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >Comunidad Ida Class</Link>

          <Link href="/asesorate" className={`${
              pathname === "/asesorate" &&
              "text-sky-700 underline decoration-2 underline-offset-4"
            } hover:text-sky-700 relative after:absolute after:left-0 after:bottom-0 after:h-0.5  after:w-0 after:bg-sky-700 after:transition-all after:duration-150 hover:after:w-[70%]`}
          >Asesorate ya</Link>
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
