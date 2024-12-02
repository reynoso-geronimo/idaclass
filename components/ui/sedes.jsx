import { MapPin, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Sample data structure

export default function Sedes({
  locations,
  showHours = false,
  showButton = false,
  title = "Encontrá la sede mas cercana a tu domicilio",
}) {
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-[#1a237e]">{title}</h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {Object.entries(locations).map(([zone, places]) => (
          <AccordionItem key={zone} value={zone} className="border rounded-lg px-4">
            <AccordionTrigger className="text-base font-medium py-4">{zone}</AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              {places.map((location, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 ${
                    showHours && "md:grid-cols-[2fr,1fr]"
                  } gap-2 md:gap-8 items-center justify-center `}
                >
                  <div className="flex justify-between w-full gap-4">
                    <div className="flex items-center gap-4">
                      <img src={location.logo} alt={`${location.name} logo`} className="w-12 h-12 rounded-full" />
                      <div className="space-y-1 flex flex-col">
                        <h3 className="font-medium md:text-lg">{location.name}</h3>
                        <span className="text-xs md:text-sm text-muted-foreground">{location.address}</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-12">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Image src="/assets/google-maps.svg" height={32} width={32} className="rounded-full border" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/instagram-icon.svg"
                          height={32}
                          width={32}
                          className="rounded-full border"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-4">
                    {showHours && (
                      <div className="text-center md:text-start">
                        <span className="font-medium">Día y Horario</span>
                        <br />
                        <span className="text-xs text-muted-foreground">{location.hours}</span>
                      </div>
                    )}
                    {showButton && (
                      <Button variant={"outline"} className="border-green-500 border-2 rounded-xl text-green-500 px-8">
                        ELEGIR
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
