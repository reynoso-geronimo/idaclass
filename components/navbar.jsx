"use client";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-full flex justify-around items-center h-16 mt-2">
        <Image src={`/idaclass.logo.webp`} alt="logo" width={180} height={100} />
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-9 w-9 " />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-72">
            <div className="flex flex-col gap-4 mt-10 text-sm font-medium">
              <Link
                className={`link ${pathname === "/" ? "text-sky-700" : ""}`}
                href="/"
              >
                Inicio
              </Link>
              <Separator />
              <Link href="/">Cursos</Link>
              <Separator />
              <Link href="/">Blog</Link>
              <Separator />
              <Link href="/">Asesorate ya</Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:flex justify-around gap-8 font-medium	">
          <Link
            className={`link ${pathname === "/" ? "text-sky-700 underline decoration-2 underline-offset-4" : ""}`}
            href="/"
          >
            Inicio
          </Link>

          <Link href="/">Cursos</Link>

          <Link href="/">Blog</Link>

          <Link href="/">Asesorate ya</Link>
        </div>
        <Button asChild className="rounded-3xl">
          <Link href="/">Ingresar</Link>
        </Button>
      </nav>
      <Separator className="hidden lg:block h-2 bg-gray-200"/>
    </>
  );
};

export default NavBar;
