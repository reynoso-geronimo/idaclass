import Image from 'next/image'
import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/**
 * "Quiénes organizan": una tarjeta por organización (logo, kicker, nombre, texto),
 * para eventos que dirigen marcas en vez de un orador (para personas usá `speaker`).
 * Con dos organizaciones, en desktop las une un "+". `highlight: { label, text }`
 * destaca una pregunta o idea central al pie. Sin ningún `name` no se renderiza.
 */
export default function Hosts({ eyebrow, title, intro, items, highlight, id = 'organizan' }) {
  const list = (items || []).filter((h) => hasContent(h?.name))
  if (!list.length) return null

  return (
    <section id={id} className="border-t border-le-line py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        </Reveal>

        <Reveal className={`relative grid gap-5 ${list.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-[640px]'}`}>
          {list.map((h, i) => (
            <article key={i} className="flex flex-col rounded-md border border-le-line bg-le-graphite p-7 md:p-9">
              {h.logo?.src && (
                <div className="mb-6 flex h-[60px] w-fit items-center rounded-lg bg-white px-5 shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
                  <Image
                    src={h.logo.src}
                    alt={h.logo.alt || h.name}
                    width={170}
                    height={44}
                    unoptimized
                    className="h-9 w-auto max-w-[170px] object-contain"
                  />
                </div>
              )}
              {hasContent(h.kicker) && (
                <div className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-le-accent">{h.kicker}</div>
              )}
              <h3 className="mt-2 font-barlow-c text-[26px] font-bold uppercase leading-tight text-le-fg">{h.name}</h3>
              {hasContent(h.text) && <p className="mt-3 text-[14.5px] leading-relaxed text-le-muted">{renderRich(h.text)}</p>}
            </article>
          ))}
          {list.length === 2 && (
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 z-[2] hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-le-line bg-le-bg font-barlow-c text-2xl font-bold text-le-accent md:flex"
            >
              +
            </span>
          )}
        </Reveal>

        {hasContent(highlight?.text) && (
          <Reveal className="mx-auto mt-8 max-w-[820px] rounded border border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.08)] px-6 py-6 text-center">
            {hasContent(highlight.label) && (
              <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-le-accent">{highlight.label}</p>
            )}
            <p className="mt-2 font-barlow-c text-2xl font-bold uppercase leading-tight text-le-fg md:text-[28px]">
              {renderRich(highlight.text)}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
