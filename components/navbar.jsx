"use client";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-full flex justify-around items-center h-16 mt-2">
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-9 w-9 " />
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
                href="/cursos"
                className={`${pathname === "/cursos" && "text-sky-700"}`}
              >
                Cursos
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link href="/">Blog</Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link href="/">Asesorate ya</Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
        <Link href="/">
          {" "}
          <Image
            src={`/idaclass.logo.webp`}
            alt="logo"
            width={180}
            height={45}
          />
        </Link>
        <div className="hidden lg:flex justify-around gap-8 font-medium	">
          <Link
            href="/"
            className={`${
              pathname === "/" &&
              "text-sky-700 underline decoration-2 underline-offset-4"
            }`}
          >
            Inicio
          </Link>

          <Link
            href="/cursos"
            className={`${
              pathname === "/cursos" &&
              "text-sky-700 underline decoration-2 underline-offset-4"
            }`}
          >
            Cursos
          </Link>

          <Link href="/">Blog</Link>

          <Link href="/">Asesorate ya</Link>
        </div>
        <Button asChild className="rounded-3xl">
          <Link href="/">Ingresar</Link>
        </Button>
      </nav>
      <Separator className="hidden lg:block h-2 bg-gray-200" />
    </>
  );
};

export default NavBar;
