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

import { getCursosFormacionFromDB } from "@/app/actions";
import Contacto from "@/components/contacto";
export default async function RootLayout({ children}) {
  const cursosFormacion = await getCursosFormacionFromDB()
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
      <ProviderSession>
        <NavBar cursosFormacion={cursosFormacion}/>
       {children}
       <Contacto/>
        <Footer />
        </ProviderSession>
      </body>
    </html>
  );
}
