import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ProviderSession  from "./providers/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IdaClass Academy",
  description:
    "Plataforma de cursos E-learning para la formación de profesionales.",
    
};
import Contacto from "@/components/contacto";

import { getCursosFormacionFromDB, getCursosFromDB } from "@/app/actions";
export default async function RootLayout({ children}) {
  const cursosFormacion = await getCursosFormacionFromDB()
  const cursosEspecializacion = await  getCursosFromDB()
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
      <ProviderSession>
        <NavBar cursosFormacion={cursosFormacion} cursosEspecializacion={cursosEspecializacion}/>
       {children}
       <Contacto/>
        <Footer />
        </ProviderSession>
      </body>
    </html>
  );
}
