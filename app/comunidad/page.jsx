import EmpresasPartners from "../../components/empresasParteners";
import Faq from "../(home)/_components/faq";
import ComunidadHero from "./components/ComunidadHero";
import ComunidadIntro from "./components/ComunidadIntro";
import ComunidadRegistro from "./components/ComunidadRegistro";
import ComunidadContenido from "./components/ComunidadContenido";

const Page = () => {
  return (
    <main className="min-h-[100svh]">
      <ComunidadHero />
      <div className="my-8">
        <EmpresasPartners />
      </div>
      <ComunidadIntro />
      <ComunidadRegistro />
      <ComunidadContenido />
      <section>
        <Faq />
      </section>
    </main>
  );
};

export default Page;
