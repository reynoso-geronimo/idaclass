import Image from 'next/image'
import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/** Testimonios en tarjetas. `stars` (1-5) opcional; `name`/`avatar` opcionales. */
export default function Testimonials({ eyebrow, title, items }) {
  if (!hasContent(items)) return null

  return (
    <section id="testimonios" className="py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} center />
        </Reveal>

        <Reveal className="grid gap-[18px] md:grid-cols-3">
          {items.map((t, i) => (
            <article key={i} className="rounded-md border border-le-line bg-le-graphite p-[22px]">
              {t.stars && (
                <div className="mb-3 tracking-[2px] text-le-accent" aria-label={`${t.stars} de 5`}>
                  {'★'.repeat(Math.max(0, Math.min(5, t.stars)))}
                </div>
              )}
              <p className="text-[13.8px] leading-relaxed text-[#cbd3dc]">{renderRich(t.quote)}</p>
              <div className="mt-[18px] flex items-center gap-2.5">
                {t.avatar && (
                  <Image src={t.avatar} alt={t.name || ''} width={38} height={38} unoptimized className="h-[38px] w-[38px] rounded-full object-cover" />
                )}
                <div className="leading-tight">
                  {t.name && <div className="text-[13px] font-bold text-le-fg">{t.name}</div>}
                  {t.role && (
                    <div className="font-mono text-[11.5px] uppercase tracking-[0.04em] text-le-muted">
                      <span className="text-le-accent">— </span>
                      {t.role}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
