import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/** Grilla de "pilares" / lo que te llevás. `bonus` es un puente opcional al pie. */
export default function Outcomes({ eyebrow, title, cards, bonus }) {
  if (!hasContent(cards)) return null

  return (
    <section id="logras" className="border-y border-le-line bg-le-graphite py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} center />
        </Reveal>

        <Reveal className="grid gap-4 md:grid-cols-2">
          {cards.map((card, i) => (
            <article key={i} className="flex items-start gap-4 rounded border border-le-line bg-le-graphite-2 p-6">
              {card.tag && <div className="mt-0.5 flex-shrink-0 font-mono text-sm font-bold text-le-accent">{card.tag}</div>}
              <div>
                <h3 className="text-[15.5px] font-bold text-le-fg">{card.title}</h3>
                {hasContent(card.text) && <p className="mt-1.5 text-[13.5px] leading-relaxed text-le-muted">{renderRich(card.text)}</p>}
              </div>
            </article>
          ))}
        </Reveal>

        {hasContent(bonus) && (
          <Reveal className="mx-auto mt-8 max-w-[820px] rounded border border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.08)] px-5 py-[18px] text-center text-sm text-le-fg">
            {renderRich(bonus)}
          </Reveal>
        )}
      </Container>
    </section>
  )
}
