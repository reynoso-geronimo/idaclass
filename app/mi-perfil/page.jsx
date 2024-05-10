"use client";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  

  return (
    <div className="container">
      {session && session.user ? (
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 rounded-full" >
            <AvatarImage src={``} alt="imagen de perfil" />
            <AvatarFallback>Ida</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <p className="h-4 w-[250px]">{session.user.name}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Page;
