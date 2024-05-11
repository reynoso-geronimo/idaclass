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
  const url = window.location.href;
  const copyUrlToClipboard = () => {
    toast("Enlace copiado", {
      description: "Puedes compartirlo desde tu portapapeles",
      duration: 5000,
    });
    navigator.clipboard.writeText(url);
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${url}`, "_blank");
  };

  const shareOnTwitter = () => {
    const text = "Mira este artículo interesante:";
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank"
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 bg-idaclass4 text-white font-bold text-sm py-2 px-10 rounded-3xl outline-none">
        <Share2 fill="white" /> COMPARTIR
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex items-center gap-1 cursor-pointer"
          onClick={copyUrlToClipboard}
        >
          <Link
            className="rounded-full border border-gray-400 p-0.5 "
            size={24}
          />
          Copiar Enlace
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-1 cursor-pointer"
          onClick={shareOnFacebook}
        >
          <Facebook
            className="rounded-full border border-gray-400 p-0.5 "
            size={24}
          />
          Facebook
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-1 cursor-pointer"
          onClick={shareOnLinkedIn}
        >
          <Linkedin
            className="rounded-full border border-gray-400 p-0.5 "
            size={24}
          />
          Linkedin
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-1 cursor-pointer"
          onClick={shareOnTwitter}
        >
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
