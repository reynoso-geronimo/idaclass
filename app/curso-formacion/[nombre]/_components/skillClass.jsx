import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import Image from "next/image";

const contenido = [
  {
    titulo: "Habilidades para el éxito profesional",
    unidades: [
      {
        titulo: "Marketing y ventas",
        contenido: [
          "Proceso de comunicación",
          "Comunicación asertiva",
          "Empatía para comunicar",
        ],
      },
      {
        titulo: "Comunicación asertiva",
        contenido: [
          "El mensaje verbal: estructura",
          "Copywriting y Storytelling: diferencias y consejos",
        ],
      },
      {
        titulo: "Liderazgo",
        contenido: [
          "8 pasos para armar tu propia historia",
          "El Viaje del Héroe",
          "Método Self-Us-Now",
        ],
      },
      {
        titulo: "Herramientas digitales",
        contenido: [
          "Ejercicio de FODA para tu marca personal",
          "El autorretrato para una comunicación efectiva",
        ],
      },
    ],
  },
];
const SkillClass = () => {
  return (
    <section className="relative w-full lg:w-[60%] max-lg:px-0 flex flex-col justify-stretch items-center lg:items-start lg:rounded-3xl overflow-hidden p-12">
     {/* //!!CORREGIR IMAGEN */}
      <Image
        src="/cursosFormacion/SkillClassMobile.png"
        fill
        alt="SkillClass"
        className="object-cover -z-10"
      />
      
      <Badge className="text-lg text-center font-semibold justify-center bg-idaclass w-[26rem]">
        BONO EXTRA
      </Badge>
      <h3 className="text-center text-6xl font-bold m-4 text-white w-[26rem]">
        SkillClass
      </h3>
      <div className="rounded-3xl overflow-hidden bg-white w-[26rem]">
        <h4 className="text-center text-white bg-idaclass w-full py-2">
          Habilidades Profesionales para el Éxito
        </h4>
        {contenido.map((item, index) => (
          <div key={item + index}>
            {/* <h3 className="text-center font-bold">{item.titulo}</h3> */}
            <Accordion type="single" collapsible className="w-full ">
              {item.unidades.map((unidad, i) => (
                <AccordionItem
                  value={unidad}
                  key={unidad.titulo + i}
                  className="m-0"
                >
                  <AccordionTrigger className="font-bold text-sm md:text-xl text-left px-4 py-4 text-idaclass4">
                    {unidad.titulo}
                  </AccordionTrigger>
                  <AccordionContent className="font-semibold text-sm p-4">
                    {unidad.contenido.map((item, j) => (
                      <p key={j} className="flex items-center mb-4">
                        <Dot className="text-black shrink-0" />
                        {item}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillClass;
