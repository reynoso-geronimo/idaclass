import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function FechasHorarios() {
  const cursos = [
    {
      id: 1,
      fechaInicio: "06/10/2025",
      horarios: "Lunes de 20 a 22hs",
      estado: "agotado",
      lugares: null,
    },
    {
      id: 2,
      fechaInicio: "04/10/2025",
      horarios: "Sábados 19:00 a 21:00 hs",
      estado: "disponible",
      lugares: 9,
    },
    {
      id: 3,
      fechaInicio: "07/10/2025",
      horarios: "Martes 9:00 a 11:00 hs",
      estado: "disponible",
      lugares: 5,
    },
  ]

  return (
   <div className="container px-0">
     <div className="min-h-screen bg-gradient-to-br from-[#B1C2E8] to-[#22B0E6] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold  mb-4">
            Fechas y <span className="text-[#3A5DAE]">Horarios</span>
          </h1>
          <p className="text-lg md:text-xl ">Elige cuándo empezar.</p>
        </div>

        {/* Cards Container */}
        <div className="space-y-4 md:space-y-6">
          {cursos.map((curso) => (
            <Card
              key={curso.id}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Course Info */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-lg md:text-xl font-semibold text-gray-900">Comienza:</span>
                      <span className="text-lg md:text-xl text-gray-800">{curso.fechaInicio}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-lg md:text-xl font-semibold text-gray-900">Horarios:</span>
                      <span className="text-lg md:text-xl text-gray-800">{curso.horarios}</span>
                    </div>
                  </div>
                </div>

                {/* Status and Button */}
                <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
                  {curso.estado === "agotado" ? (
                    <span className="text-lg md:text-xl font-bold text-red-600">Agotado</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-lg md:text-xl font-bold text-red-600">
                        Quedan {curso.lugares} lugares
                      </span>
                      <span className="text-xl">🔥</span>
                    </div>
                  )}
                  <Link href="#form">
                  <Button
                    className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full text-base md:text-lg font-medium transition-colors duration-200"
                    disabled={curso.estado === "agotado"}
                  >
                    Comprar curso
                    <span className="ml-2">→</span>
                  </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
   </div>
  )
}
