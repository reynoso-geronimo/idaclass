import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, ClipboardCheck, Heart, FolderCheck, ArrowRight } from "lucide-react"

export default function FitnessCourse() {
  const features = [
    {
      icon: Dumbbell,
      title: "Evaluación, entrenamiento para principiantes y manejo de sala de musculación",
    },
    {
      icon: ClipboardCheck,
      title: "Diseño de planes de entrenamiento y rutinas de ejercicios",
    },
    {
      icon: Heart,
      title: "Domina la anatomía y comprende cómo funciona tu cuerpo al entrenar",
    },
    {
      icon: FolderCheck,
      title: "Habilidades blandas para trabajar en gimnasios o de forma independiente",
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen p-6 mt-12 bg-gradient-to-br from-[#B1C2E8] to-[#22B0E6]">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            ¿Qué <span className="text-blue-600">Aprenderás?</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-800 md:text-xl">
            Domina técnicas de entrenamiento de la fuerza, descenso de peso, funcional, nutrición y anatomía aplicada al
            fitness.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 border-2 shadow-xl bg-white/20 backdrop-blur-md border-white/30 hover:shadow-2xl hover:scale-105 rounded-3xl lg:odd:mb-24 lg:even:mt-24`}
            >
              <CardContent className="p-8 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-blue-600/20">
                    <feature.icon className="w-12 h-12 text-blue-700" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-base font-medium leading-relaxed text-gray-800">{feature.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 space-y-8">
          <p className="max-w-2xl mx-auto text-lg font-medium text-gray-800 md:text-xl">
            Todo esto y más en un curso que te prepara para vivir del fitness
          </p>

          <Button
            size="lg"
            className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-black rounded-full shadow-xl hover:bg-gray-800 hover:shadow-2xl hover:scale-105"
          >
            ¡Quiero inscribirme!
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
