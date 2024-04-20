"use client";

import { toast } from "sonner";
import { Facebook, Link, Linkedin, Share2, Twitter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Compartir = () => {
  const copyUrlToClipboard = () => {
    toast("Enlace copiado", {
      description: "Puedes compartirlo desde tu portapapeles",
      duration: 5000,
    });
    navigator.clipboard.writeText(window.location.href);
  };
  //!! AREGLAR LOS VINCULOS
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 bg-idaclass4 text-white font-bold text-sm py-2 px-10 rounded-3xl outline-none">
        <Share2 fill="white"/> COMPARTIR
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex items-center gap-1"
          onClick={copyUrlToClipboard}
        >
          <Link
            className="rounded-full border border-gray-400 p-0.5 "
            size={24}
          />
          Copiar Enlace
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-1">
          <Facebook
            className="rounded-full border border-gray-400 p-0.5 "
            size={24}
          />
          Facebook
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-1">
          <Linkedin
            className="rounded-full border border-gray-400 p-0.5 "
            size={24}
          />
          Linkedin
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-1">
          <Twitter
            className="rounded-full border border-gray-400 p-0.5 "
            size={24}
          />
          Twitter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Compartir;
