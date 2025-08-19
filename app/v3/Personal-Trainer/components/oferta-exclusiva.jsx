import { CheckCi, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OfertaExclusiva() {
  const beneficios = [
    "Clases online en vivo (2h. semanales).",
    "Grabación de las clases en vivo.",
    "Tutorías con staff trainer educativos.",
    "Video resúmenes y materiales descargable.",
    "Contenido teórico interactivo.",
    "Autoevaluaciones.",
    "Doble titulación bonificada.",
    "4 cursos complementarios (SkillClass).",
    "Acceso a webinars con expertos.",
  ]

  return (
    <div className="max-w-md mx-auto bg-white border-2 border-cyan-400 rounded-3xl p-6 relative">
      {/* Badge superior */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <Badge className="bg-white border-2 border-cyan-400 text-black px-6 py-2 rounded-full text-base font-semibold text-nowrap">
          Oferta exclusiva🔥
        </Badge>
      </div>

      {/* Lista de beneficios */}
      <div className="mt-8 space-y-2">
        {beneficios.map((beneficio, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5">
              <CheckCircle className="w-4 h-4 text-cyan-400 stroke-[3]" />
            </div>
            <span className="text-gray-800 text-base leading-relaxed">{beneficio}</span>
          </div>
        ))}
      </div>

      {/* Información de precio */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-semibold text-lg">BecaClass</span>
          <span className="text-lg">🚀</span>
          <span className="text-gray-600 text-base">disponible por tiempo limitado</span>
        </div>

        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold">40% OFF</Badge>
          <span className="text-gray-500 line-through text-lg">$500.000</span>
        </div>

        <div className="text-gray-600 text-base">Hasta 7 cuotas sin interés de:</div>

        <div className="text-cyan-400 text-5xl font-bold">$53.500 ARS</div>

        <div className="text-gray-600 text-lg">Precio final: $374.500 ARS</div>
      </div>
    </div>
  )
}
