import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./separator";

export default function Sedes({
  locations,
  showHours = false,
  title = "Encontrá la sede mas cercana a tu domicilio",
  modalidad,
  nombre,
  tipo,
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

  return (
    <div className="w-full max-w-4xl mx-auto p-4" id="sedes">
      <h1 className="text-2xl font-bold mb-6 text-[#1a237e]">{title}</h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {Object.entries(groupedLocations).map(([zone, places]) => (
          <AccordionItem key={zone} value={zone} className="border rounded-lg px-4">
            <AccordionTrigger className="text-base font-medium py-4">{zone}</AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              {places.map(location => {
                const checkoutParams = {
                  modalidad,
                  nombre,
                  tipo,
                  sede: location.nombre,
                };

                const queryParams = new URLSearchParams(checkoutParams).toString();

                return (
                  <div key={location.id} className="flex flex-col items-center justify-center gap-y-2">
                    <div className="flex gap-4 w-full">
                      <div className="flex flex-wrap items-start gap-4 md:gap-4 w-full">
                        {location.imagen && (
                          <Image
                            src={`/sedes/${location.imagen}`}
                            alt={location.nombre}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        )}
                        <div className="space-y-1 flex flex-col justify-center max-md:items-center place-self-center">
                          <h3 className="font-medium md:text-lg ">{location.nombre}</h3>
                          <span className="max-md:hidden text-xs md:text-sm text-muted-foreground">
                            {location.direccion}
                          </span>
                        </div>
                      </div>
                      <div className="max-md:hidden flex items-center justify-center shrink-0">
                        {showHours &&
                          location.horarios &&
                          location.horarios.map(horario => (
                            <span key={horario.id} className="text-lg">
                              {horario.dia} - {horario.hora.slice(0, 5)}
                            </span>
                          ))}
                      </div>

                      <div className="flex items-center justify-end">
                        <Button className="rounded bg-green-500 hover:bg-green-400">
                          <Link href={`/checkout?${queryParams}`}>Elegir sede</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="w-full md:hidden shrink-0">
                      {showHours &&
                        location.horarios &&
                        location.horarios.map(horario => (
                          <span key={horario.id}>
                            {horario.dia} - {horario.hora.slice(0, 5)}
                          </span>
                        ))}
                    </div>
                    <span className="md:hidden text-sm text-muted-foreground w-full ">{location.direccion}</span>
                    <Separator />
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
