import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/**
 * "Para quién es": un perfil por tarjeta, numeradas solas (01, 02, …; `tag` pisa
 * el número de una tarjeta) y una frase de cierre opcional (`quote`) debajo.
 */
export default function Audience({ eyebrow, title, intro, items, quote, id = 'para-quien' }) {
  if (!hasContent(items)) return null

  return (
    <section id={id} className="py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        </Reveal>

        <Reveal className="grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <article key={i} className="relative overflow-hidden rounded-md border border-le-line bg-le-graphite p-6 md:p-7">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-le-accent to-le-navy" />
              <div className="font-barlow-c text-[44px] font-bold leading-none text-le-accent">
                {item.tag || String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 font-barlow-c text-xl font-bold uppercase leading-tight text-le-fg">{item.title}</h3>
              {hasContent(item.text) && (
                <p className="mt-2 text-[13.5px] leading-relaxed text-le-muted">{renderRich(item.text)}</p>
              )}
            </article>
          ))}
        </Reveal>

        {hasContent(quote) && (
          <Reveal className="mx-auto mt-12 max-w-[760px] text-center">
            <span aria-hidden className="mx-auto mb-5 block h-[3px] w-12 bg-le-accent" />
            <blockquote className="font-barlow-c text-[22px] font-semibold leading-snug text-le-fg md:text-[26px]">
              {renderRich(quote)}
            </blockquote>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
