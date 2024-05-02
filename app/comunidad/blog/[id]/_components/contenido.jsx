"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contenido = () => {
  const [headingsList, setheadingsList] = useState([]);
  useEffect(() => {
    const headings = document.querySelectorAll("h1");
    const headingsList = Array.from(headings)
      .slice(1)
      .map(heading => {
        const id =
          heading.id || heading.textContent.toLowerCase().replace(/\s/g, "-");

        return {
          text: heading.textContent,
          id,
        };
      });
    setheadingsList(headingsList);
  }, []);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold lg:text-2xl mt-8 mb-2 px-4 text-idaclass5 bg-gray-100 rounded-2xl flex justify-between items-center">
          Contenido del artículo
        </AccordionTrigger>
        <AccordionContent>
          <ul className="px-4">
            {headingsList.map(heading => (
              <li key={heading.id}>{heading.text}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Contenido;
