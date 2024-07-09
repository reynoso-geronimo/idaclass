import Script from 'next/script'
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
      <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5N87Z2KL');
          `}
        </Script>
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
      <ProviderSession>
        <NavBar cursosFormacion={cursosFormacion} cursosEspecializacion={cursosEspecializacion}/>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5N87Z2KL"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
       {children}
       <Contacto/>
        <Footer />
        </ProviderSession>
      </body>
    </html>
  );
}
