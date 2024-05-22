import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { cn } from "@/lib/utils";

const Faq = ({ preguntas, className }) => {
  return (
    <section className={cn("flex flex-col items-center", className)}>
      <TituloSeccion> Preguntas frecuentes</TituloSeccion>
      <Accordion
        type="single"
        collapsible
        className="m-6 w-[90%] max-w-[1024px]"
      >
        {preguntas.map((pregunta, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-sm md:text-lg  text-left px-4 ">
              {pregunta.pregunta}
            </AccordionTrigger>
            <AccordionContent className="text-xs md:text-base py-2 px-8  max-w-[1024px]">
              {pregunta.respuesta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
