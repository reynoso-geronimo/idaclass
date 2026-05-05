"use client";

import { z } from "zod";
import InnerHeader from "./InnerHeader";
import LeadForm from "./LeadForm";
import VideoCarousel from "./VideoCarousel";
import { Orb, GridTexture } from "./Atmosphere";

const BENEFITS = [
  {
    icon: "🏆",
    title: "Vas a cobrar por hacer lo que ya hacés por amor",
    text: "Convertís una pasión en una fuente de ingresos real. Con una certificación que respalda tu trabajo y clientes que te eligen porque confían en tu formación.",
    pill: null,
  },
  {
    icon: "💪",
    title: "Vas a entrar al mercado con experiencia real, no solo un título",
    text: "Antes de terminar el curso ya vas a haber trabajado con alumnos reales. Pasantías en gimnasios que te dan el rodaje que la mayoría tarda años en conseguir.",
    pill: null,
  },
  {
    icon: "🧠",
    title: "Vas a destacar por lo que sabés hacer con las personas, no solo con los pesos",
    text: "Comunicación, motivación, manejo de expectativas y construcción de adherencia. Las habilidades que hacen que tus clientes se queden, te recomienden y vuelvan.",
    pill: "Lo que los gimnasios buscan y no encuentran",
  },
  {
    icon: "💼",
    title: "Vas a tener trabajo antes de recibir tu certificación",
    text: "Nuestra bolsa laboral conecta a los egresados con gimnasios y clientes que buscan instructores certificados. El 80% de nuestros alumnos consigue trabajo al terminar.",
    pill: "Diferencial clave",
  },
  {
    icon: "🤝",
    title: "Vas a ser parte de una comunidad que te impulsa",
    text: "Más de 50.000 egresados en Latinoamérica. Una red activa de profesionales del fitness donde el networking abre puertas que el título solo no puede abrir.",
    pill: null,
  },
];

const STATS = [
  { n: "+50K", l: "Alumnos certificados en Latinoamérica" },
  { n: "80%", l: "De empleabilidad en egresados" },
  { n: "30", l: "Sedes presenciales activas" },
  { n: "25", l: "Años de trayectoria en la industria" },
];

const STEPS = [
  {
    t: "Elegís cómo cursarlo",
    x: "Online en vivo con instructor o a tu ritmo con clases grabadas. Mismo nivel de formación, misma certificación, sin importar dónde estés.",
  },
  {
    t: "Aprendés lo que el mercado realmente pide hoy",
    x: "Metodologías actuales, funcional, nutrición aplicada, manejo de clientes. Contenido diseñado para que salgas listo para trabajar.",
  },
  {
    t: "Hacés pasantías con alumnos reales mientras estudiás",
    x: "Experiencia práctica desde el primer mes. El rodaje que la mayoría tarda años en conseguir, incluido en tu formación.",
  },
  {
    t: "Te certificás con 25 años de respaldo",
    x: "El aval que los gimnasios y clientes buscan antes de contratarte. Reconocimiento real en toda Latinoamérica.",
  },
];

const formSchema = z.object({
  nombre: z.string().min(1, { message: "Tu nombre es requerido" }),
  whatsapp: z.string().min(8, { message: "Ingresá un WhatsApp válido" }),
  modalidad: z.string().min(1, { message: "Elegí una modalidad" }),
  inicio: z.string().min(1, { message: "Elegí cuándo querés arrancar" }),
});

export default function ScreenStu({ onBack, onSubmit }) {
  return (
    <section className="flex min-h-screen flex-col bg-[#07090E]">
      <InnerHeader onBack={onBack} />

      <div className="relative overflow-hidden bg-[linear-gradient(170deg,#130700_0%,#07090E_100%)] px-6 pb-[42px] pt-12 text-center">
        <span className="absolute left-0 right-0 top-0 h-0.5 bg-[linear-gradient(90deg,transparent,#FF6B1A,#FFB020,transparent)]" />
        <Orb
          style={{
            width: 580,
            height: 440,
            top: -170,
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(255,107,26,0.12) 0%, transparent 65%)",
          }}
        />
        <Orb
          style={{
            width: 260,
            height: 260,
            bottom: -50,
            right: -40,
            background: "radial-gradient(circle, rgba(255,136,64,0.05) 0%, transparent 65%)",
          }}
        />
        <GridTexture />
        <div className="relative z-[1] mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B1A]/20 bg-[#FF6B1A]/[0.07] px-4 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] leading-[1.4] text-[#FF8840]/90">
          <span className="h-[5px] w-[5px] flex-shrink-0 animate-expo-blink rounded-full bg-[#FF8840]" />
          Curso de Personal Trainer & Instructor de Musculación
        </div>
        <h2 className="relative z-[1] mb-4 font-barlow-c text-[48px] font-extrabold leading-[0.97] tracking-[-0.01em] text-white/[0.92]">
          Hacé del fitness
          <br />
          tu <span className="text-[#FF6B1A]">forma de vivir.</span>
        </h2>
        <p className="relative z-[1] mx-auto max-w-[400px] text-[14.5px] font-light leading-[1.75] text-[#B5C4D6]">
          Sabés que esto es lo tuyo. Lo que falta es la formación que le dé estructura a esa pasión y te permita ejercerla como un profesional de verdad.
        </p>
      </div>

      <div className="px-6 py-8">
        <div className="mb-4 flex items-center gap-2.5 font-barlow-c text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          Lo que vas a lograr
          <span className="h-px flex-1 bg-white/[0.04]" />
        </div>
        <div className="flex flex-col gap-2">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="relative flex items-start gap-3.5 overflow-hidden rounded-[13px] border border-white/[0.04] bg-[#111826] p-[17px] transition-all hover:translate-x-0.5 hover:border-[#FF6B1A]/15"
            >
              <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-[linear-gradient(180deg,#FF6B1A,#FF8840)]" />
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#FF6B1A]/[0.07] text-lg">
                {b.icon}
              </div>
              <div className="flex-1">
                {b.pill && (
                  <span className="mb-1.5 inline-block rounded border border-[#FF6B1A]/15 bg-[#FF6B1A]/[0.08] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#FF8840]/80">
                    {b.pill}
                  </span>
                )}
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

      <div className="mx-6 h-px bg-white/[0.04]" />

      <div className="px-6 pt-6">
        <div className="relative overflow-hidden rounded-[13px] border border-[#FF6B1A]/10 bg-[#FF6B1A]/[0.04] p-6">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-2.5 left-2 font-barlow-c text-[140px] font-black leading-none text-[#FF6B1A]/[0.04]"
          >
            &ldquo;
          </span>
          <div className="relative z-[1] mb-2 font-barlow-c text-[21px] font-bold leading-[1.2] text-white/[0.88]">
            El fitness ya es parte de tu vida.
            <br />
            Ahora puede ser también tu carrera.
          </div>
          <div className="relative z-[1] text-[13px] font-light leading-[1.65] text-[#B5C4D6]">
            Convertirte en Personal Trainer certificado no es solo un título. Es la diferencia entre entrenar por hobby y cobrar por hacer lo que amás, con la autoridad y el respaldo que da 25 años de trayectoria en la industria.
          </div>
        </div>
      </div>

      <div className="px-6 pt-6">
        <div className="mb-3.5 flex items-center gap-2.5 font-barlow-c text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          25 años formando profesionales
          <span className="h-px flex-1 bg-white/[0.04]" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {STATS.map((s, i) => (
            <div key={i} className="rounded-[13px] border border-white/[0.04] bg-[#111826] p-4 text-center">
              <div className="mb-1 font-barlow-c text-[38px] font-black leading-none text-[#FF6B1A]">
                {s.n}
              </div>
              <div className="text-[11px] font-light leading-[1.45] text-[#B5C4D6]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mb-4 flex items-center gap-2.5 font-barlow-c text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
          Así funciona tu camino
          <span className="h-px flex-1 bg-white/[0.04]" />
        </div>
        <div className="flex flex-col">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-4 py-[18px] ${
                i < STEPS.length - 1 ? "border-b border-white/[0.04]" : ""
              }`}
            >
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute bottom-[-18px] left-[13px] top-[50px] w-px bg-[linear-gradient(180deg,rgba(255,107,26,0.2),transparent)]"
                />
              )}
              <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#FF6B1A]/20 bg-[#FF6B1A]/[0.08] font-barlow-c text-[13px] font-bold text-[#FF8840]/85">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="mb-0.5 text-[14px] font-semibold text-white/85">{s.t}</div>
                <div className="text-[12.5px] font-light leading-[1.6] text-[#B5C4D6]">{s.x}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-6 h-px bg-white/[0.04]" />

      <div className="pt-5">
        <VideoCarousel />
      </div>

      <div className="mx-6 mt-1 flex items-center gap-3 rounded-md border border-[#00AADD]/9 bg-[#00AADD]/[0.04] px-4 py-3.5">
        <div className="flex-shrink-0 text-base opacity-75">🎯</div>
        <div>
          <div className="mb-0.5 text-[13px] font-semibold text-white/75">Becas disponibles.</div>
          <div className="text-[12px] font-light leading-[1.55] text-[#9AAAB8]">
            Tenemos opciones de financiamiento para que el costo no sea el motivo por el que postergás tu carrera. Consultanos sin compromiso.
          </div>
        </div>
      </div>

      <div className="mx-6 mt-6 h-px bg-white/[0.04]" />

      <LeadForm
        profile="stu"
        variant="o"
        schema={formSchema}
        eyebrow="Tu primer paso"
        title={"Empecemos<br/>hoy."}
        subtitle="Dejá tus datos y te enviamos fechas, modalidades y opciones de financiamiento. Sin compromiso, sin presión."
        ctaLabel="Quiero mi certificación →"
        fields={[
          { name: "nombre", label: "Tu nombre", placeholder: "Ej. Sofía Martínez" },
          { name: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "+54 11 0000-0000" },
          {
            name: "modalidad",
            label: "¿Cómo preferís cursarlo?",
            type: "select",
            options: [
              "Online en vivo — con instructor",
              "Online grabado — a mi ritmo",
              "Todavía no lo decidí",
            ],
          },
          {
            name: "inicio",
            label: "¿Cuándo querés arrancar?",
            type: "select",
            options: [
              "Lo antes posible",
              "En el próximo mes",
              "En 2 o 3 meses",
              "Estoy explorando todavía",
            ],
          },
        ]}
        footerNote={
          <div className="mt-3 flex items-center justify-center gap-2 text-[11.5px] font-light text-white/55">
            <span className="h-1 w-1 rounded-full bg-[#FF6B1A]/50" />
            Cupos limitados por cohorte · Becas disponibles
            <span className="h-1 w-1 rounded-full bg-[#FF6B1A]/50" />
          </div>
        }
        onSuccess={onSubmit}
      />
    </section>
  );
}
