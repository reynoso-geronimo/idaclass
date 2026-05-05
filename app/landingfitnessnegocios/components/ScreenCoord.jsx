"use client";

import { z } from "zod";
import InnerHeader from "./InnerHeader";
import LeadForm from "./LeadForm";
import { Orb, GridTexture } from "./Atmosphere";

const BENEFITS = [
  {
    icon: "🧠",
    title: "Equipos que elevan la percepción de valor en cada sesión",
    text: "Comunicación empática, gestión de la motivación y construcción de adherencia. Las competencias que determinan si un cliente renueva o cancela — y las más rentables que un profesional puede desarrollar hoy.",
  },
  {
    icon: "🔗",
    title: "Menos rotación de socios. Más razones para quedarse.",
    text: "El vínculo entre el instructor y el socio es el activo más frágil y más valioso del negocio. Formamos profesionales que construyen relaciones que trascienden la sesión y convierten membresías en hábitos de vida.",
  },
  {
    icon: "📈",
    title: "Instructores que entienden el negocio, no solo el entrenamiento",
    text: "Un entrenador que comprende cómo su trabajo impacta en la retención toma decisiones completamente distintas a uno que solo cumple su horario. Esa visión se forma — y hace toda la diferencia.",
  },
  {
    icon: "⚡",
    title: "Ventaja competitiva que no se replica en semanas",
    text: "La tecnología se democratizó. El equipamiento se copia. Lo que no se replica es un equipo formado bajo los mismos criterios, con criterio profesional compartido y una experiencia consistente en cada interacción.",
  },
];

const formSchema = z.object({
  nombre: z.string().min(1, { message: "Tu nombre es requerido" }),
  gimnasio: z.string().min(1, { message: "Nombre del gimnasio requerido" }),
  whatsapp: z.string().min(8, { message: "Ingresá un WhatsApp válido" }),
  tamanoEquipo: z.string().min(1, { message: "Elegí una opción" }),
  areaPrioritaria: z.string().min(1, { message: "Elegí una opción" }),
});

export default function ScreenCoord({ onBack, onSubmit }) {
  return (
    <section className="flex min-h-screen flex-col bg-[#07090E]">
      <InnerHeader onBack={onBack} />

      <div className="relative overflow-hidden bg-[linear-gradient(170deg,#040819_0%,#07090E_100%)] px-6 pb-[42px] pt-12 text-center">
        <span className="absolute left-0 right-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,#2258CC,#00AADD,transparent)]" />
        <Orb
          style={{
            width: 580,
            height: 440,
            top: -170,
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(26,77,181,0.15) 0%, transparent 65%)",
          }}
        />
        <Orb
          style={{
            width: 280,
            height: 280,
            bottom: -70,
            right: -50,
            background: "radial-gradient(circle, rgba(0,170,221,0.06) 0%, transparent 65%)",
          }}
        />
        <GridTexture />
        <div className="relative z-[1] mb-5 inline-flex items-center gap-2 rounded-full border border-[#3370E8]/22 bg-[#1A4DB5]/[0.10] px-4 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] leading-[1.4] text-[#6A9AF8]/90">
          <span className="h-[5px] w-[5px] flex-shrink-0 animate-expo-blink rounded-full bg-[#6A9AF8]" />
          Programa de habilidades para equipos y negocio
        </div>
        <h2 className="relative z-[1] mb-4 font-barlow-c text-[48px] font-extrabold leading-[0.97] tracking-[-0.01em] text-white/[0.92]">
          Transformá a tu equipo
          <br />
          en el activo más
          <br />
          <span className="text-[#6A9AF8]">estratégico del negocio.</span>
        </h2>
        <p className="relative z-[1] mx-auto max-w-[400px] text-[14.5px] font-light leading-[1.75] text-[#B5C4D6]">
          Dotamos a tu staff de las habilidades que el mercado demanda hoy. Porque tus alumnos no eligen entrenamientos — eligen experiencias.
        </p>
      </div>

      <div className="mx-6 mt-6 flex items-start gap-3.5 rounded-[13px] border border-[#3370E8]/13 bg-[#1A4DB5]/[0.07] p-5">
        <div className="mt-0.5 flex-shrink-0 text-xl opacity-85">📌</div>
        <div>
          <div className="mb-1.5 text-[14px] font-semibold leading-[1.3] text-white/80">
            El entrenador que retiene socios vale más que cualquier campaña de captación.
          </div>
          <div className="text-[13px] font-light leading-[1.65] text-[#B5C4D6]">
            Un usuario no cancela su membresía porque el equipamiento sea viejo. La cancela porque no encontró una razón emocional para quedarse. Tu equipo es esa razón — o la ausencia de ella.
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mb-4 flex items-center gap-2.5 font-barlow-c text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          Lo que conseguís con IdaClass
          <span className="h-px flex-1 bg-white/[0.04]" />
        </div>
        <div className="flex flex-col gap-2">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="relative flex items-start gap-3.5 overflow-hidden rounded-[13px] border border-white/[0.04] bg-[#111826] p-[17px] transition-all hover:translate-x-0.5 hover:border-[#3370E8]/20"
            >
              <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-[linear-gradient(180deg,#3370E8,#00AADD)]" />
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#1A4DB5]/[0.12] text-lg">
                {b.icon}
              </div>
              <div className="flex-1">
                <div className="mb-1 text-[13.5px] font-semibold leading-[1.25] text-white/85">
                  {b.title}
                </div>
                <div className="text-[12.5px] font-light leading-[1.6] text-[#B5C4D6]">
                  {b.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-6 flex items-start gap-3.5 rounded-[13px] border border-[#3370E8]/13 bg-[#1A4DB5]/[0.07] p-5">
        <div className="mt-0.5 flex-shrink-0 text-xl opacity-85">💬</div>
        <div>
          <div className="mb-1.5 text-[14px] font-semibold leading-[1.3] text-white/80">
            Julio Anghilante · Director de IdaClass Academy
          </div>
          <div className="text-[13px] font-light leading-[1.65] text-[#B5C4D6]">
            &ldquo;El mercado no busca más entrenadores que sepan programar rutinas. Ese es el requisito de entrada. Lo que los gimnasios demandan — y con frecuencia no encuentran — es un profesional que opere en tres dimensiones: dominio técnico, comprensión del negocio y habilidades humanas aplicadas.&rdquo;
          </div>
        </div>
      </div>

      <div className="mx-6 mt-6 flex items-center gap-3 rounded-md border border-[#00AADD]/9 bg-[#00AADD]/[0.04] px-4 py-3.5">
        <div className="flex-shrink-0 text-base opacity-75">🎯</div>
        <div>
          <div className="mb-0.5 text-[13px] font-semibold text-white/75">Propuesta a medida para tu equipo.</div>
          <div className="text-[12px] font-light leading-[1.55] text-[#9AAAB8]">
            No ofrecemos paquetes genéricos. Escuchamos la realidad de tu gimnasio y diseñamos un programa que eleva el nivel de tu staff sin disrupciones en tu operación.
          </div>
        </div>
      </div>

      <div className="mx-6 mt-6 h-px bg-white/[0.04]" />

      <LeadForm
        profile="coord"
        variant="b"
        schema={formSchema}
        eyebrow="Próximo paso"
        title={"Completá el formulario<br/>y te ayudamos a<br/>impulsar tu equipo."}
        subtitle="El Director de IdaClass se pone en contacto con vos personalmente para diseñar una propuesta que encaje con tu realidad."
        ctaLabel="Quiero mi asesoría gratuita →"
        fields={[
          { name: "nombre", label: "Tu nombre", placeholder: "Ej. Diego Fernández" },
          { name: "gimnasio", label: "Gimnasio donde coordinás", placeholder: "Ej. Fitness Zone" },
          { name: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "+54 11 0000-0000" },
          {
            name: "tamanoEquipo",
            label: "¿Cuántos instructores tiene tu equipo?",
            type: "select",
            options: [
              "1 a 3 instructores",
              "4 a 8 instructores",
              "9 a 15 instructores",
              "Más de 15 instructores",
            ],
          },
          {
            name: "areaPrioritaria",
            label: "¿Qué área querés fortalecer primero?",
            type: "select",
            options: [
              "Habilidades blandas y experiencia del usuario",
              "Comunicación y retención de socios",
              "Visión de negocio para instructores",
              "Actualización técnica y metodologías",
              "No lo tengo definido aún",
            ],
          },
        ]}
        footerNote={
          <div className="mt-3 flex items-center justify-center gap-2.5">
            <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#00AADD]/25 bg-[linear-gradient(135deg,#1A4DB5,#00AADD)] text-xs">
              👤
            </div>
            <div className="text-[11.5px] font-light leading-[1.45] text-white/55">
              El Director de IdaClass te contacta personalmente · Asesoría sin costo · Menos de 24 hs
            </div>
          </div>
        }
        onSuccess={onSubmit}
      />
    </section>
  );
}
