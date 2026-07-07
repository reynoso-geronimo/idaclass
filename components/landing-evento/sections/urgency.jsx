import { Container, SectionHead, CtaButton } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/** Bloque de urgencia/escasez con tarjetas + CTA. */
export default function Urgency({ eyebrow, title, intro, cards, cta, registerHref = '#inscripcion' }) {
  if (!hasContent(cards) && !hasContent(title)) return null

  return (
    <section className="border-y border-le-line bg-gradient-to-b from-le-graphite to-le-bg py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        </Reveal>

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
