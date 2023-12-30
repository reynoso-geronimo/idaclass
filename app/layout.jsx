import { Inter } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Loading from "./loading";
import ProviderSession  from "./providers/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IdaClass Academy",
  description:
    "Plataforma de cursos E-learning para la formación de profesionales.",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
      <ProviderSession>
        <NavBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        </ProviderSession>
      </body>
    </html>
  );
}
