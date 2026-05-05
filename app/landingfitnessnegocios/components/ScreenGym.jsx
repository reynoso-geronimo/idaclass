"use client";

import { z } from "zod";
import InnerHeader from "./InnerHeader";
import LeadForm from "./LeadForm";
import { Orb, GridTexture } from "./Atmosphere";

const BENEFITS = [
  {
    icon: "🎓",
    title: "Formás los instructores que después querés en tu equipo",
    text: "Tu gimnasio se convierte en la cantera de tu propio talento. Instructores formados con las metodologías más actuales, que ya conocen tu espacio y tu cultura.",
  },
  {
    icon: "🏆",
    title: "Te diferenciás de cualquier competencia de tu zona",
    text: "Ser Sede Oficial IdaClass es el sello que te posiciona como el espacio de referencia del fitness profesional, por encima de cualquier gimnasio de la zona.",
  },
  {
    icon: "⚙️",
    title: "IdaClass lleva el 90% de la operación. Vos acompañás el resto.",
    text: "Contenido, instructores, inscripciones y comunicación van por nuestra cuenta. Tu rol es simple: abrir las puertas y ser parte de algo que crece.",
  },
  {
    icon: "💰",
    title: "Tus horarios ociosos generan ingresos reales",
    text: "Mañanas tranquilas, tardes intermedias, fines de semana. Esos espacios se convierten en cursos certificados que generan una nueva fuente de ingresos para tu negocio.",
  },
];

const formSchema = z.object({
  nombre: z.string().min(1, { message: "Tu nombre es requerido" }),
  gimnasio: z.string().min(1, { message: "Nombre del gimnasio requerido" }),
  whatsapp: z.string().min(8, { message: "Ingresá un WhatsApp válido" }),
  provincia: z.string().min(1, { message: "Elegí una provincia" }),
});

export default function ScreenGym({ onBack, onSubmit }) {
  return (
    <section className="flex min-h-screen flex-col bg-[#07090E]">
      <InnerHeader onBack={onBack} />

      <div className="relative overflow-hidden bg-[linear-gradient(170deg,#030e1a_0%,#07090E_100%)] px-6 pb-[42px] pt-12 text-center">
        <span className="absolute left-0 right-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,#00AADD,#3370E8,transparent)]" />
        <Orb
          style={{
            width: 580,
            height: 440,
            top: -170,
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(0,170,221,0.11) 0%, transparent 65%)",
          }}
        />
        <GridTexture />
        <div className="relative z-[1] mb-5 inline-flex items-center gap-2 rounded-full border border-[#00AADD]/20 bg-[#00AADD]/[0.07] px-4 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] leading-[1.4] text-[#00AADD]/90">
          <span className="h-[5px] w-[5px] flex-shrink-0 animate-expo-blink rounded-full bg-[#00AADD]" />
          Sumate a la red educativa más grande de Latinoamérica
        </div>
        <h2 className="relative z-[1] mb-4 font-barlow-c text-[48px] font-extrabold leading-[0.97] tracking-[-0.01em] text-white/[0.92]">
          Tu gimnasio,
          <br />
          un <span className="text-[#00AADD]">centro completo</span>
          <br />
          de formación.
        </h2>
        <p className="relative z-[1] mx-auto max-w-[400px] text-[14.5px] font-light leading-[1.75] text-[#B5C4D6]">
          Más allá del entrenamiento, tu espacio puede convertirse en un lugar donde se forman los profesionales del fitness del mañana. IdaClass hace posible ese salto, con vos adentro.
        </p>
      </div>

      <div className="mx-6 mt-6 flex items-start gap-3.5 rounded-[13px] border border-[#00AADD]/10 bg-[#00AADD]/[0.05] p-5">
        <div className="mt-0.5 flex-shrink-0 text-xl opacity-85">💡</div>
        <div>
          <div className="mb-1.5 text-[14px] font-semibold leading-[1.3] text-white/80">
            Los gimnasios que lideran el mercado no solo entrenan — forman.
          </div>
          <div className="text-[13px] font-light leading-[1.65] text-[#B5C4D6]">
            Tener un área educativa dentro de tu espacio te posiciona como referente del sector y abre las puertas a un perfil de cliente más comprometido con el fitness profesional.
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mb-4 flex items-center gap-2.5 font-barlow-c text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          Lo que cambia en tu gimnasio
          <span className="h-px flex-1 bg-white/[0.04]" />
        </div>
        <div className="flex flex-col gap-2">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="relative flex items-start gap-3.5 overflow-hidden rounded-[13px] border border-white/[0.04] bg-[#111826] p-[17px] transition-all hover:translate-x-0.5 hover:border-[#00AADD]/15"
            >
              <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-[linear-gradient(180deg,#00AADD,#3370E8)]" />
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#00AADD]/[0.07] text-lg">
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

      <div className="mx-6 flex items-center gap-3 rounded-md border border-[#FF6B1A]/10 bg-[#FF6B1A]/[0.04] px-4 py-3.5">
        <div className="flex-shrink-0 text-base opacity-75">🤝</div>
        <div>
          <div className="mb-0.5 text-[13px] font-semibold text-white/75">Alianza, no proveedor.</div>
          <div className="text-[12px] font-light leading-[1.55] text-[#9AAAB8]">
            No te vendemos un servicio. Te sumamos a una red educativa en crecimiento donde tu gimnasio juega un rol estratégico real.
          </div>
        </div>
      </div>

      <div className="mx-6 mt-6 h-px bg-white/[0.04]" />

      <LeadForm
        profile="gym"
        variant="c"
        schema={formSchema}
        eyebrow="Próximo paso"
        title={"Quiero que mi gimnasio<br/>sea sede de IdaClass."}
        subtitle="Completá tus datos y el Director de IdaClass se pone en contacto con vos personalmente para contarte cómo funciona el modelo en tu gimnasio."
        ctaLabel="Quiero ser sede oficial →"
        fields={[
          { name: "nombre", label: "Tu nombre", placeholder: "Ej. Martina García" },
          { name: "gimnasio", label: "Nombre del gimnasio", placeholder: "Ej. Club Energía" },
          { name: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "+54 11 0000-0000" },
          {
            name: "provincia",
            label: "Provincia",
            type: "select",
            placeholder: "Seleccioná tu provincia",
            options: ["Buenos Aires", "CABA", "Córdoba", "Santa Fe", "Mendoza", "Otra"],
          },
        ]}
        footerNote={
          <div className="mt-3 flex items-center justify-center gap-2.5">
            <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#00AADD]/25 bg-[linear-gradient(135deg,#1A4DB5,#00AADD)] text-xs">
              👤
            </div>
            <div className="text-[11.5px] font-light leading-[1.45] text-white/55">
              El Director de IdaClass te contacta personalmente · Sin intermediarios · Menos de 24 hs
            </div>
          </div>
        }
        onSuccess={onSubmit}
      />
    </section>
  );
}
