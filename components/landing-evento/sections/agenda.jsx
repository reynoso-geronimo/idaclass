import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/** Temario / mapa de la charla: lista numerada con línea de tiempo. */
export default function Agenda({ eyebrow, title, intro, items }) {
  if (!hasContent(items)) return null

  return (
    <section id="temario" className="border-y border-le-line bg-le-graphite py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        </Reveal>

        <Reveal className="mx-auto max-w-[680px]">
          <ol className="ml-2 border-l-2 border-le-line">
            {items.map((item, i) => (
              <li key={i} className="relative pb-[30px] pl-[34px] last:pb-0">
                <span className="absolute -left-[15px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-le-accent bg-le-bg font-mono text-[11px] font-bold text-le-accent">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-le-fg">{item.title}</h3>
                {hasContent(item.text) && <p className="mt-1.5 text-[13.5px] leading-relaxed text-le-muted">{renderRich(item.text)}</p>}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
