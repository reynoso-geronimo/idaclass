import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const etapas = [
  {
    titulo: "Fundamentos del entrenamiento",
    texto: "Anatomía funcional, fisiología, biomecánica y principios de entrenamiento.",
  },
  {
    titulo: "Diseño y planificación",
    texto: "Evaluación, programación, selección de ejercicios y seguimiento de alumnos.",
  },
  {
    titulo: "Aplicación y práctica profesional",
    texto: "Experiencias de campo, comunicación y resolución de situaciones reales.",
  },
  {
    titulo: "Desarrollo de carrera",
    texto: "Marca personal, habilidades comerciales y herramientas para impulsar tu actividad.",
  },
];

const ProgramaPersonalTrainer = () => {
  return (
    <section id="programa" className="container bg-gradient-to-r from-[#1E2E57] to-[#021225] text-white py-12 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-idaclass3">
            Certificación profesional
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Personal Trainer + Instructor de Musculación
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75 text-pretty max-w-xl mx-auto lg:mx-0">
            Un programa de formación de seis meses para desarrollar las competencias técnicas y humanas que necesitás
            para desempeñarte como Personal Trainer.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-14 rounded-full bg-idaclass4 px-8 text-base sm:text-lg font-bold text-white hover:bg-idaclass3"
          >
            <Link href="/v3/Personal-Trainer#form">
              Quiero recibir el programa
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
            <h3 className="text-lg sm:text-xl font-semibold">Tu recorrido de formación</h3>
            <span className="shrink-0 rounded-full bg-idaclass3/15 px-3 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-idaclass2">
              6 meses
            </span>
          </div>
          <ol className="space-y-6 py-6">
            {etapas.map((etapa, index) => (
              <li key={etapa.titulo} className="flex gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${
                    index === 0 ? "bg-idaclass4 text-white" : "bg-white/10 text-white/90"
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold leading-snug">{etapa.titulo}</h4>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed text-white/65">{etapa.texto}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-white/10 pt-6 text-xs sm:text-sm leading-relaxed text-white/50">
            Contenidos y secuencia sujetos al plan académico vigente. Solicitanos el programa actualizado y las
            condiciones de cursada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramaPersonalTrainer;
