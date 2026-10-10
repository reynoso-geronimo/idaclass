import { Container, SectionHead, CtaButton } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/**
 * Cadena de pasos numerados unidos por flechas: en fila desde 1024px, apilados
 * debajo. El último se resalta como el destino (ej. Señales → … → Acción).
 * Las flechas van posicionadas en el gap para que todas las cajas midan igual.
 */
function Steps({ steps }) {
  return (
    <ol className="mx-auto flex max-w-[420px] flex-col gap-8 lg:max-w-[920px] lg:flex-row lg:gap-10">
      {steps.map((step, i) => {
        const last = i === steps.length - 1
        return (
          <li key={i} className="relative lg:flex-1">
            <div
              className={`h-full rounded-md border px-5 py-4 text-center ${
                last ? 'border-le-accent bg-le-accent text-le-on-accent' : 'border-le-line bg-le-graphite-2 text-le-fg'
              }`}
            >
              <div className={`font-mono text-[10.5px] font-bold tracking-[0.08em] ${last ? 'opacity-70' : 'text-le-accent'}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="mt-0.5 font-barlow-c text-xl font-bold uppercase tracking-wide">{step}</div>
            </div>
            {!last && (
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="absolute left-1/2 top-full mt-1.5 h-5 w-5 -translate-x-1/2 rotate-90 text-le-accent lg:left-full lg:top-1/2 lg:ml-2.5 lg:mt-0 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0"
              >
                <path d="M5 12H19M13 6L19 12L13 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </li>
        )
      })}
    </ol>
  )
}

/** Bloque de urgencia/escasez con tarjetas + CTA. `steps` agrega una cadena de pasos bajo el encabezado. */
export default function Urgency({ eyebrow, title, intro, steps, cards, cta, registerHref = '#inscripcion' }) {
  if (!hasContent(cards) && !hasContent(title)) return null

  return (
    <section className="border-y border-le-line bg-gradient-to-b from-le-graphite to-le-bg py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        </Reveal>

        {hasContent(steps) && (
          <Reveal className={hasContent(cards) ? 'mb-9' : undefined}>
            <Steps steps={steps} />
          </Reveal>
        )}

        {hasContent(cards) && (
          <Reveal className="mx-auto grid max-w-[840px] gap-4 md:grid-cols-3">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`rounded-md border p-[26px] ${
                  card.highlight ? 'border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.06)]' : 'border-le-line bg-le-graphite-2'
                }`}
              >
                {card.icon && <div className="mb-3 text-[22px]">{card.icon}</div>}
                <h3 className="text-[15px] font-bold text-le-fg">{card.title}</h3>
                {hasContent(card.text) && <p className="mt-2 text-[13px] leading-relaxed text-le-muted">{renderRich(card.text)}</p>}
              </div>
            ))}
          </Reveal>
        )}

        {hasContent(cta?.label) && (
          <Reveal className="mt-9 text-center">
            <CtaButton href={cta.href || registerHref} variant="primary">
              {cta.label}
            </CtaButton>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
