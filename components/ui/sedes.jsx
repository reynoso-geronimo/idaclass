import { MapPin, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Sedes({
  locations,
  showHours = false,
  showButton = false,
  title = "Encontrá la sede mas cercana a tu domicilio",
}) {
  // Group locations by zona
  const groupedLocations = locations.reduce((acc, location) => {
    const zona = location.zona || "Otras zonas";
    if (!acc[zona]) {
      acc[zona] = [];
    }
    acc[zona].push(location);
    return acc;
  }, {});
  console.log(groupedLocations);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-[#1a237e]">{title}</h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {Object.entries(groupedLocations).map(([zone, places]) => (
          <AccordionItem key={zone} value={zone} className="border rounded-lg px-4">
            <AccordionTrigger className="text-base font-medium py-4">{zone}</AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              {places.map(location => (
                <div key={location.id} className="grid grid-cols-1 gap-2 md:gap-8 items-center justify-center">
                  <div className="flex justify-between w-full gap-4">
                    <div className="flex items-center gap-4">
                      {location.imagen && (
                        <Image
                          src={`/sedes/${location.imagen}`}
                          alt={location.nombre}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      )}
                      <div className="space-y-1 flex flex-col">
                        <h3 className="font-medium md:text-lg">{location.nombre}</h3>
                        <span className="text-xs md:text-sm text-muted-foreground">{location.direccion}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center shrink-0">
                      {showHours &&
                        location.horarios &&
                        location.horarios.map(horario => (
                          <span key={horario.id} className="text-xs lg:text-lg">
                            {horario.dia} - {horario.hora.slice(0, 5)}
                          </span>
                        ))}
                    </div>
                    {/*  <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-12">
                      {location.linkmaps && (
                        <Link href={location.linkmaps} target="_blank">
                          <Image
                            src="/assets/google-maps.svg"
                            height={32}
                            width={32}
                            className="rounded-full border"
                            alt="Maps"
                          />
                        </Link>
                      )}
                      {location.linkredes && (
                        <Link href={location.linkredes} target="_blank">
                          <Image
                            src="/assets/instagram-icon.svg"
                            height={32}
                            width={32}
                            className="rounded-full border"
                            alt="Instagram"
                          />
                        </Link>
                      )}
                    </div> */}
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
