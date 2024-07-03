import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Button } from "@/components/ui/button";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import Link from "next/link";

const caracteristicas = [
  {
    img: "/eventos/assets/Becas.png",
  },
  {
    img: "/eventos/assets/Ebook.png",
  },
  {
    img: "/eventos/assets/Sorteos.png",
  },
];
const OPTIONS = { align: "center" };
const Bonos = () => {
  return (
    <section className=" py-12 container ">
      <div className="lg:hidden">
        <EmblaCarousel
          options={OPTIONS}
          slides={caracteristicas.map(caracteristica => (
            <Bono key={caracteristica} {...caracteristica} />
          ))}
        />
      </div>
      <TituloSeccion className={""}>Beneficios exclusivos</TituloSeccion>
      <div className="flex gap-x-6 gap-y-6 max-lg:hidden justify-items-center">
        {caracteristicas.map((caracteristica, i) => (
          <Bono key={i} {...caracteristica} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-12 ">
        <Button className="bg-emerald-500 rounded-2xl font-bold text-xl  text-balance max-lg:py-12 min-h-16 ">
          <Link href={"#wa"}>
            Unete al grupo de WhatsApp para obtener los beneficos
          </Link>
        </Button>
      </div>
    </section>
  );
};

export const Bono = ({ img = "/cursosEspecializacion/Modulos.svg" }) => (
  <article className="relative w-[440px] max-w-[70vw] mx-4 h-[300px]">
    <Image src={img} alt={""} fill className="object-contain" />
  </article>
);

export default Bonos;
