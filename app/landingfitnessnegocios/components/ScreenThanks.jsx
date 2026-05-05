"use client";

import Logo from "./Logo";
import { Orb, GridTexture } from "./Atmosphere";

export default function ScreenThanks() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-7 pb-[72px] pt-[60px] text-center">
      <Orb
        style={{
          width: 680,
          height: 480,
          top: -150,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(0,170,221,0.10) 0%, transparent 65%)",
        }}
      />
      <Orb
        style={{
          width: 340,
          height: 340,
          bottom: -80,
          right: -70,
          background: "radial-gradient(circle, rgba(26,77,181,0.08) 0%, transparent 65%)",
        }}
      />
      <Orb
        style={{
          width: 210,
          height: 210,
          bottom: 50,
          left: -50,
          background: "radial-gradient(circle, rgba(255,107,26,0.05) 0%, transparent 70%)",
        }}
      />
      <GridTexture />

      <div className="relative z-[1] flex w-full flex-col items-center text-center">
        <div className="relative mx-auto mb-7 flex h-[86px] w-[86px] animate-pop-in items-center justify-center rounded-full">
          <span
            aria-hidden
            className="absolute -inset-0.5 -z-10 animate-expo-spin rounded-full"
            style={{
              background: "conic-gradient(#00AADD,#3370E8,#00AADD)",
            }}
          />
          <span
            aria-hidden
            className="absolute inset-0.5 -z-10 rounded-full bg-[#111826]"
          />
          <span className="text-[32px]">✓</span>
        </div>

        <div className="animate-fade-up [animation-delay:0.14s]">
          <Logo size="thanks" />
        </div>

        <h1 className="mb-1.5 mt-7 animate-fade-up font-barlow-c text-[44px] font-extrabold leading-none tracking-[-0.01em] text-white/[0.92] [animation-delay:0.28s]">
          Gracias por confiar
          <br />
          en <span className="text-[#33BBEE]">IdaClass.</span>
        </h1>
        <div className="mb-[22px] animate-fade-up font-barlow-c text-[20px] font-light tracking-[0.05em] text-white/65 [animation-delay:0.34s]">
          Ya recibimos tus datos.
        </div>
        <div className="mx-auto mb-[22px] h-0.5 w-11 animate-fade-up rounded bg-[linear-gradient(90deg,#3370E8,#00AADD)] [animation-delay:0.38s]" />

        <p className="mb-8 max-w-[320px] animate-fade-up text-[14.5px] font-light leading-[1.75] text-[#B5C4D6] [animation-delay:0.42s]">
          Pronto nos vamos a poner en contacto con vos. Seguinos en Instagram para ver todo lo que pasa en la comunidad IdaClass.
        </p>

        <div className="mb-8 flex w-full max-w-[340px] animate-fade-up flex-col gap-2 [animation-delay:0.48s]">
          {[
            { n: 1, h: "Recibiste tu confirmación", b: "Ya registramos tu consulta con éxito." },
            { n: 2, h: "Te contactamos en menos de 24 hs", b: "Sin intermediarios, directo al punto." },
            { n: 3, h: "Empezamos juntos", b: "Tu próximo paso empieza en esa conversación." },
          ].map((p) => (
            <div
              key={p.n}
              className="flex items-center gap-3.5 rounded-md border border-white/[0.07] bg-[#111826] p-3.5 text-left"
            >
              <div className="w-6 flex-shrink-0 font-barlow-c text-[20px] font-black leading-none text-[#33BBEE]/80">
                {p.n}
              </div>
              <div>
                <div className="mb-0 text-[13px] font-semibold text-white/75">{p.h}</div>
                <div className="text-[12px] font-light text-[#9AAAB8]">{p.b}</div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/idaclass_oficial/"
          target="_blank"
          rel="noreferrer"
          className="flex w-full max-w-[340px] animate-fade-up items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(135deg,#7B2FF7,#E1306C,#F77737)] px-6 py-4 text-white no-underline transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.99] [animation-delay:0.55s]"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="white" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="1.8" />
            <circle cx="17.5" cy="6.5" r="1.1" fill="white" />
          </svg>
          <div>
            <span className="block font-barlow-c text-[17px] font-extrabold tracking-[0.04em] text-white">
              Seguinos en Instagram
            </span>
            <span className="mt-0.5 block text-[11.5px] font-light text-white/65">
              @idaclass_oficial
            </span>
          </div>
        </a>

        <div className="mt-7 flex animate-fade-up items-center gap-2.5 text-[10.5px] tracking-[0.04em] text-white/40 [animation-delay:0.62s]">
          <span className="h-px w-5 bg-white/[0.07]" />
          Stand oficial de IdaClass · Expo Fitness + Negocios 2026
          <span className="h-px w-5 bg-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}
