"use client";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { Avatar } from "@radix-ui/react-avatar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getVentasFromDB } from "../actions";
import { useEffect, useState } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [compras, setCompras] = useState([]);
  useEffect(() => {
    async function fetchVentas() {
      if (session && session.user) {
        const ventas = await getVentasFromDB(session.user.id);
        setCompras(ventas);
      }
    }

    fetchVentas();
  }, [session]);

  if (status === "unauthenticated") {
    signIn()
    return;
  }

  return (
    <main className="container mt-8 mb-auto">
      {session && session.user ? (
        <div className="flex flex-col items-center  space-y-4 container">
          {/* <Avatar className="h-12 w-12 rounded-full">
            <AvatarImage src={``} alt="imagen de perfil" />
            <AvatarFallback>Ida</AvatarFallback>
          </Avatar> */}

          <p className="text-center h-4 font-extrabold">{session.user.name}</p>
          <TituloSeccion>MIS CURSOS</TituloSeccion>
          {compras.map(compra => (
            <div
              key={compra.id}
              className="flex flex-col items-center  space-y-4 container"
            >
              <h3>{compra.descripcion}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center  space-y-4 container">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      )}
    </main>
  );
};
export default Page;
