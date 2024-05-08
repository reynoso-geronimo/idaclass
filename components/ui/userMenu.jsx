import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
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
          <MenubarContent className="bg-black text-white" onCloseAutoFocus={e => e.preventDefault()}>
            <MenubarItem className="text-center font-bold justify-center">
              {session.user.name}
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
