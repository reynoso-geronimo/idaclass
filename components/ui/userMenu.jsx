import { LogOutIcon, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
const UserMenu = ({ session, signOut }) => {
  return (
    <Menubar className="bg-black outline-none border-none w-10 h-10">
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar className="cursor-pointer text-black">
            <AvatarImage src={session.user.image} alt="avatar" />
            <AvatarFallback>
              {session.user.name
                ?.split(" ")
                .map((n, i) => (i < 2 ? n[0] : ""))
                .join("") || ""}{" "}
            </AvatarFallback>
          </Avatar>
          <MenubarContent
            align="center"
            className="bg-black text-white font-semibold shadow-2xl border-gray-500 border-2 mt-1 border-t-0 rounded-none "
            onCloseAutoFocus={e => e.preventDefault()}
          >
            <span className="text-center w-full flex justify-center font-bold mb-2">
              {session.user.name}
            </span>
            <MenubarItem className="cursor-pointer focus:bg-idaclass4 focus:text-white" asChild>
              <Link href={"/mi-perfil"}>Mi Perfil <User className="inline ml-auto" /></Link>
            </MenubarItem>
            <MenubarItem
              onClick={() => signOut()}
              className="cursor-pointer focus:bg-idaclass4 focus:text-white"
            >
              Cerrar Sesion <LogOutIcon className="inline ml-auto" />
            </MenubarItem>
          </MenubarContent>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
