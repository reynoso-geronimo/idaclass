import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { categoriasOnDemand } from "@/lib/constants";

const classEscritorio =
  "hover:text-idaclass4 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-idaclass4 after:transition-all after:duration-150 hover:after:w-[70%]";

const NavbarWebMenu = ({ pathname, cursosFormacion }) => {
  return (
    <div className="hidden lg:flex justify-around items-stretch gap-8">
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
            className="px-6 pb-4 border-none rounded-b-xl flex justify-center mt-[11px] bg-black text-idaclass3 divide-x-[1px] divide-gray-500 gap-6"
          >
            <div>
              <h5 className="relative flex cursor-default items-center rounded-sm px-2 my-1 text-xl font-extrabold text-white">
                Cursos de Formación
              </h5>
              <p className="font-semibold text-sm my-4 max-lg:text-center text-orange-500 italic px-2">
                Modalidades: Online sincronico | Presencial
              </p>
              <div className="grid mr-6">
                {cursosFormacion.map((cursoFormacion, index) => (
                  <MenubarItem
                    key={index}
                    className="text-lg font-bold focus:bg-idaclass4 focus:text-white transition-all"
                    asChild
                  >
                    <Link
                      href={`/curso-formacion/${cursoFormacion.nombre}`}
                      className={`flex  gap-4 ${
                        pathname ===
                          `/curso-formacion/${cursoFormacion.nombre}` &&
                        `text-idaclass2`
                      } hover:cursor-pointer  `}
                    >
                      <div className="">
                        <p>{cursoFormacion.nombre}</p>
                      </div>
                    </Link>
                  </MenubarItem>
                ))}
              </div>
            </div>

            <div className="pl-8 flex flex-col">
              <h5 className="relative flex cursor-default items-center rounded-sm px-2 my-1 text-xl font-extrabold text-white">
                Cursos Especializados
              </h5>
              <p className="font-semibold text-sm my-4 max-lg:text-center text-orange-500 italic px-2">
                Modalidad: Online asincronico
              </p>
              <div className="flex flex-col justify-between flex-1">
                {categoriasOnDemand.map((categoriaOnDemand, index) => (
                  <MenubarSub key={index}>
                  <MenubarSubTrigger className="text-lg font-bold focus:bg-idaclass4 focus:text-white transition-all cursor-default select-none outline-none focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                    <span className="text-white">Categoria &nbsp; </span>
                    {categoriaOnDemand}
                  </MenubarSubTrigger>
                  <MenubarSubContent className="bg-black text-white font-bold ">
                    <MenubarItem className="text-lg font-bold focus:bg-idaclass4 focus:text-white transition-all cursor-default select-none outline-none focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                      CURSO 1
                    </MenubarItem>
                    <MenubarItem className="text-lg font-bold focus:bg-idaclass4 focus:text-white transition-all cursor-default select-none outline-none focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                      CURSO 2
                    </MenubarItem>
                    <MenubarItem className="text-lg font-bold focus:bg-idaclass4 focus:text-white transition-all cursor-default select-none outline-none focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                      CURSO 3
                    </MenubarItem>
                    <MenubarItem className="text-lg font-bold focus:bg-idaclass4 focus:text-white transition-all cursor-default select-none outline-none focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                      CURSO 4
                    </MenubarItem>
                    <MenubarItem className="text-lg font-bold focus:bg-idaclass4 focus:text-white transition-all cursor-default select-none outline-none focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                      CURSO 5
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                ))}
                {/* Nuevo codigo */}

                
                {/* fin nuevo dogio */}
                <MenubarSeparator />
                <MenubarItem
                  className="p-4 hover:bg-primary hover:cursor-pointer"
                  asChild
                >
                  <Button
                    size="sm"
                    className="rounded-2xl text-sm font-bold "
                    asChild
                  >
                    <Link href="/cursos">
                      <ArrowRight size={22} strokeWidth={3} className="mr-3" />{" "}
                      VER TODOS LOS CURSOS ON DEMAND
                    </Link>
                  </Button>
                </MenubarItem>
              </div>
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Link
        href="/comunidad"
        className={`${
          pathname === "/comunidad/blog" && "after:w-[100%] text-idaclass4"
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
  );
};

export default NavbarWebMenu;
