/**
 * Clases Tailwind que se repiten en la landing (botones, contenedor, encabezados de sección).
 * Los colores `so-*` y la fuente `font-montserrat` están en tailwind.config.js.
 * Cortes responsive del mockup: 900px, 700px y 620px (`max-[...]:`).
 * Tamaños de letra en px (`text-[12px]`, no `text-xs`): las escalas de Tailwind traen su
 * propio line-height y el mockup hereda 1.55 de la página.
 */

// Contenedor: 1160px máx. con 22px de aire a cada lado (17px en mobile).
export const wrap = 'mx-auto w-[min(1160px,calc(100%_-_44px))] max-[620px]:w-[min(100%_-_34px,1160px)]'

// Padding genérico de sección (en el mockup, `section { padding: 92px 0 }`).
export const sectionPad = 'py-[92px] max-[620px]:py-[68px]'

export const btn =
  'inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[7px] px-[22px] py-[15px] text-[12px] font-extrabold uppercase tracking-[.25px] transition-all duration-200 ease-[ease]'

export const btnPrimary = `${btn} bg-so-cyan text-so-navy shadow-[0_9px_24px_rgba(18,185,236,.2)] hover:-translate-y-0.5 hover:bg-[#48ccf3]`

export const btnOutline = `${btn} border border-white/[.48] bg-transparent text-white hover:border-so-cyan hover:text-so-cyan`

// Antetítulo con rayita a la izquierda (hero, comisión, postulación).
export const eyebrow =
  "inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[1.8px] text-so-cyan before:h-0.5 before:w-[27px] before:bg-so-cyan before:content-['']"

export const kicker = 'mb-3 text-center text-[11px] font-extrabold uppercase tracking-[1.8px] text-so-cyan-dark'

export const sectionTitle =
  'mx-auto mb-[15px] max-w-[790px] text-center text-[clamp(30px,4vw,43px)] font-extrabold leading-[1.13] tracking-[-1.5px] text-so-navy'

export const sectionLead =
  'mx-auto mb-[46px] max-w-[720px] text-center text-[15px] text-so-muted max-[620px]:mb-[30px] max-[620px]:text-[13px]'

// Grilla de 3 tarjetas (desafío, beneficios, pasos): 3 → 2 → 1 columnas.
export const grid3 = 'grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[620px]:grid-cols-1'
