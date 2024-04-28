import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dot } from "lucide-react";
import TituloSeccion from "@/components/ui/titulo-seccion";
import SkillClass from "@/components/skillClass";

const CursoOnDemandContenidoCurso = ({ modulos=null }) => {
  const contenido = JSON.parse(modulos)
  
 
  return (
    <section className="lg:container">
      <TituloSeccion className={"lg:text-6xl font-black"}>Contenido del <span className="text-idaclass3">Curso</span></TituloSeccion>
      {/* <p className="text-center my-4 container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea
        possimus, magnam autem quas eos iusto minima animi tempora commodi.
        Voluptatibus magni earum voluptas natus quidem minima doloremque illum
        iure.
      </p> */}

      <div className="flex  flex-col items-center lg:items-start lg:flex-row gap-4">
        {contenido!==null?(<Accordion type="single" collapsible className="lg:w-[50%] px-8">
          {JSON.parse(modulos).map((modulo, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="font-bold text-sm md:text-xl text-left px-4 ">
                {modulo.titulo}
              </AccordionTrigger>
              <AccordionContent className="font-semibold text-sm p-4 ">
                {modulo.contenido.map((item, index) => (
                  <p key={index} className="flex items-center mb-4">
                    <Dot className="text-black shrink-0" />
                    {item}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>):""}
        <SkillClass titulo="OPCIONAL"/>
      </div>
    </section>
  );
};

export default CursoOnDemandContenidoCurso;