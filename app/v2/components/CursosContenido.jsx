import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dot } from "lucide-react";
import TituloSeccion from "@/components/ui/titulo-seccion";
import SkillClass from "@/components/cursos/skillClass";

const CursosContenido = ({ modulos = null, incluyeSkillClass, tituloSkicclass }) => {
  const contenido = process.env.dev === "true" ? JSON.parse(modulos) : modulos;
  return (
    <section className="lg:w-1/3">
      <TituloSeccion className={"font-black lg:hidden"}>Programa de Estudio</TituloSeccion>
      {/* <p className="text-center my-4 container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea
          possimus, magnam autem quas eos iusto minima animi tempora commodi.
          Voluptatibus magni earum voluptas natus quidem minima doloremque illum
          iure.
        </p> */}

      <div className="flex  flex-col items-center justify-center lg:items-start lg:flex-row gap-4">
        {contenido !== null && (
          <Accordion type="single" collapsible className={`w-full ${incluyeSkillClass && "mx-auto"} max:lg-px-8`}>
            {contenido.map((modulo, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="font-bold text-sm  text-left px-4 text-pretty gap-4">
                  {modulo.titulo}
                </AccordionTrigger>
                <AccordionContent className="font-semibold text-sm p-4 ">
                  {modulo.contenido.map((item, index) => (
                    <p key={index} className="flex items-center mb-4 mr-8">
                      <Dot className="text-black shrink-0" />
                      {item}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
        {incluyeSkillClass && <SkillClass />}
      </div>
    </section>
  );
};

export default CursosContenido;
