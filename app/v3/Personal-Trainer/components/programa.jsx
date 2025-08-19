import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Programa() {
  const units = [
    {
      title: "Unidad 1",
      description: "Introducción al entrenamiento, anatomía y fisiología.",
    },
    {
      title: "Unidad 2",
      description: "Principios del entrenamiento, sistemas energéticos y enseñanza del movimiento.",
    },
    {
      title: "Unidad 3",
      description: "Entrenamiento funcional, HIIT y nutrición para el fitness.",
    },
    {
      title: "Anexos",
      description: "Biomecánica, Anatomía y Fisiología.",
      skillClass: "Habilidades blandas profesionales para el éxito.",
    },
  ];

  return (
    <div className="px-6 py-16 text-white bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Program Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold lg:text-5xl">
                Programa de <span className="text-cyan-400">Estudio</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Todo lo que necesitas para formarte como personal trainer y ejercer con confianza.
              </p>
            </div>

            {/* Units */}
            <div className="space-y-6">
              {units.map((unit, index) => (
                <Card key={index} className="transition-colors border-gray-700 bg-gray-800/50 hover:bg-gray-800/70">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-white">{unit.title}</h3>
                    <p className="mb-2 leading-relaxed text-gray-300">{unit.description}</p>
                    {unit.skillClass && (
                      <p className="leading-relaxed text-gray-300">
                        <span className="font-medium text-cyan-400">SkillClass:</span> {unit.skillClass}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Online Modality */}
          <div className="space-y-8">
            {/* Online Class Image */}
            <div className="relative">
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src="/v3/online.png"
                  alt="Modalidad Online - Clases virtuales"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Online Badge */}
              <div className="absolute items-center pl-8 pr-4 py-2.5 space-x-2 rounded-tr-3xl -bottom-1 -left-4 bg-black  hidden md:flex">
              <div className="flex items-center justify-center bg-red-200 rounded-full w-6 h-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
                <span className="font-medium text-cyan-400">Modalidad Online</span>
              </div>

              <div className="mx-auto w-fit flex items-center px-4 py-2 space-x-2 rounded-full mt-4 bg-black/70  md:hidden">
               <div className="flex items-center justify-center bg-red-200 rounded-full w-6 h-6">
               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
               </div>
                <span className="font-medium text-cyan-400">Modalidad Online</span>
              </div>

            </div>

            {/* Online Features */}
            <div className="space-y-6 text-center">
              <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Con clases en vivo (2 horas semanales), grabaciones disponibles, tutorías y materiales descargables.
              </p>

              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold text-black transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-[#22B0E6] to-[#3A5DAE] hover:bg-cyan-600 hover:shadow-2xl hover:scale-105"
              >
                Comprar curso
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
