"use client";

import Logo from "./Logo";
import { Orb, GridTexture, HLine } from "./Atmosphere";

const CARDS = [
  {
    id: "gym",
    icon: "🏟️",
    title: "Soy dueño de gimnasio",
    sub: "Estoy buscando nuevas formas de generar valor en mi espacio y diferenciarlo de la competencia.",
    hook: "Descubrí lo que IdaClass puede hacer por tu gimnasio →",
    bar: "linear-gradient(90deg,#00AADD,#3370E8)",
    iconBg: "bg-[#00AADD]/[0.08]",
    hoverBorder: "hover:border-[#00AADD]/30 hover:shadow-[0_8px_28px_rgba(0,170,221,0.08),0_2px_6px_rgba(0,0,0,0.5)]",
    hookCls: "bg-[#00AADD]/[0.08] text-[#00AADD]/85 border-[#00AADD]/20",
    arrowHover: "group-hover:bg-[#00AADD]/10 group-hover:border-[#00AADD]/30 group-hover:text-[#00AADD] group-hover:translate-x-0.5",
    shine: "linear-gradient(135deg, rgba(0,170,221,0.04) 0%, transparent 55%)",
  },
  {
    id: "coord",
    icon: "📋",
    title: "Soy coordinador de gimnasio",
    sub: "Quiero capacitar a mi equipo de trabajo · Busco contenido que eleve el nivel de mis instructores.",
    hook: "Conocé nuestros programas para equipos →",
    bar: "linear-gradient(90deg,#2258CC,#00AADD)",
    iconBg: "bg-[#1A4DB5]/[0.14]",
    hoverBorder: "hover:border-[#1A4DB5]/35 hover:shadow-[0_8px_28px_rgba(26,77,181,0.10),0_2px_6px_rgba(0,0,0,0.5)]",
    hookCls: "bg-[#3370E8]/[0.10] text-[#6A9AF8]/90 border-[#3370E8]/20",
    arrowHover: "group-hover:bg-[#3370E8]/10 group-hover:border-[#3370E8]/30 group-hover:text-[#6A9AF8] group-hover:translate-x-0.5",
    shine: "linear-gradient(135deg, rgba(26,77,181,0.07) 0%, transparent 55%)",
  },
  {
    id: "stu",
    icon: "💪",
    title: "Quiero ser Personal Trainer",
    sub: "El fitness es mi pasión y quiero convertirla en una carrera de impacto real. Estoy listo para dar el paso.",
    hook: "Tu certificación profesional empieza acá →",
    bar: "linear-gradient(90deg,#FF6B1A,#FFB020)",
    iconBg: "bg-[#FF6B1A]/[0.08]",
    hoverBorder: "hover:border-[#FF6B1A]/30 hover:shadow-[0_8px_28px_rgba(255,107,26,0.08),0_2px_6px_rgba(0,0,0,0.5)]",
    hookCls: "bg-[#FF6B1A]/[0.08] text-[#FF8840]/90 border-[#FF6B1A]/20",
    arrowHover: "group-hover:bg-[#FF6B1A]/10 group-hover:border-[#FF6B1A]/30 group-hover:text-[#FF8840] group-hover:translate-x-0.5",
    shine: "linear-gradient(135deg, rgba(255,107,26,0.04) 0%, transparent 55%)",
  },
];

export default function ScreenHero({ onSelect }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#07090E] px-6 pb-[68px] pt-[54px] text-center">
      <Orb
        style={{
          width: 680,
          height: 480,
          top: -170,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(0,170,221,0.11) 0%, transparent 65%)",
        }}
      />
      <Orb
        style={{
          width: 380,
          height: 380,
          bottom: -90,
          right: -70,
          background: "radial-gradient(circle, rgba(26,77,181,0.08) 0%, transparent 65%)",
        }}
      />
      <Orb
        style={{
          width: 230,
          height: 230,
          bottom: 50,
          left: -50,
          background: "radial-gradient(circle, rgba(255,107,26,0.05) 0%, transparent 70%)",
        }}
      />
      <GridTexture />
      <HLine top="24%" />
      <HLine top="70%" />

      <div className="relative z-[1] flex w-full max-w-[480px] flex-1 flex-col items-center text-center">
        <div className="mb-[34px] inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-[#FF6B1A]/20 bg-[#FF6B1A]/[0.07] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF6B1A] [animation-delay:0.1s]">
          <span className="h-[7px] w-[7px] animate-expo-blink rounded-full bg-[#FF6B1A] shadow-[0_0_7px_#FF6B1A]" />
          Expo Fitness + Negocios · En vivo desde el stand
        </div>

        <div className="mb-1 animate-fade-up [animation-delay:0.15s]">
          <Logo size="hero" />
        </div>

        <div className="mb-12 animate-fade-up font-barlow-c text-[11px] font-light uppercase tracking-[0.3em] text-white/50 [animation-delay:0.2s]">
          Fitness Education · Argentina
        </div>

        <h1 className="mb-3 max-w-[500px] animate-fade-up font-barlow-c text-[40px] font-bold leading-[1.06] text-white/[0.92] [animation-delay:0.26s]">
          Gracias por tu interés.
          <br />
          <em className="not-italic text-[#33BBEE]">¿Qué te trae por acá?</em>
        </h1>

        <p className="mx-auto mb-12 max-w-[340px] animate-fade-up text-[15px] font-light leading-[1.75] text-[#B5C4D6] [animation-delay:0.32s]">
          Contanos tus intereses y te mostramos las soluciones que tenemos para vos.
        </p>

        <div className="mb-3.5 flex w-full max-w-[480px] animate-fade-up items-center gap-3 font-barlow-c text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 [animation-delay:0.38s]">
          <span className="h-px flex-1 bg-white/[0.04]" />
          Soy…
          <span className="h-px flex-1 bg-white/[0.04]" />
        </div>

        <div className="flex w-full max-w-[480px] flex-col gap-2.5">
          {CARDS.map((c, i) => (
            <button
              type="button"
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`group relative animate-fade-up cursor-pointer overflow-hidden rounded-[18px] border border-white/[0.11] bg-[#111826] text-left transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] ${c.hoverBorder}`}
              style={{ animationDelay: `${0.44 + i * 0.06}s` }}
            >
              <span className="absolute left-0 right-0 top-0 h-0.5" style={{ background: c.bar }} />
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: c.shine }}
              />
              <div className="relative z-[1] flex items-center gap-4 px-5 py-[19px] pl-[21px]">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-[21px] ${c.iconBg}`}
                >
                  {c.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 font-barlow-c text-[20px] font-bold leading-[1.1] tracking-[0.01em] text-white/90">
                    {c.title}
                  </div>
                  <div className="mb-2.5 text-[12.5px] font-light leading-[1.55] text-[#B5C4D6]">
                    {c.sub}
                  </div>
                  <div
                    className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all group-hover:gap-2.5 ${c.hookCls}`}
                  >
                    {c.hook}
                  </div>
                </div>
                <div
                  className={`flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border border-white/[0.07] text-[13px] text-[#9AAAB8] transition-all ${c.arrowHover}`}
                >
                  →
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-7 flex animate-fade-up items-center gap-2.5 text-[10.5px] tracking-[0.04em] text-white/40 [animation-delay:0.64s]">
          <span className="h-px w-5 bg-white/[0.08]" />
          Stand oficial de IdaClass · Expo Fitness + Negocios 2026
          <span className="h-px w-5 bg-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}
