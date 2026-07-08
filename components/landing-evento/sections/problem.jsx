import Image from 'next/image'
import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/** Columna del gráfico de contraste "antes vs. después". */
function ContrastCol({ data, tone }) {
  const isGood = tone === 'good'
  return (
    <div
      className={`relative flex flex-1 flex-col justify-center gap-3 px-[22px] py-[30px] ${
        isGood
          ? 'border-t border-le-line bg-[linear-gradient(160deg,rgb(var(--evt-accent-rgb)/0.14),rgba(53,102,175,0.1))] sm:border-l sm:border-t-0'
          : 'bg-le-graphite-2'
      }`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${
          isGood ? 'bg-[rgb(var(--evt-accent-rgb)/0.18)] text-le-accent' : 'bg-[rgba(224,89,107,0.15)] text-le-danger'
        }`}
      >
        {data.icon}
      </span>
      {hasContent(data.tag) && (
        <span className={`font-mono text-[10.5px] font-bold uppercase tracking-[0.06em] ${isGood ? 'text-le-accent' : 'text-le-danger'}`}>
          {data.tag}
        </span>
      )}
      <h4 className="text-[15px] font-bold text-le-fg">{data.title}</h4>
      <p className="text-[12.5px] leading-snug text-le-muted">{data.text}</p>
    </div>
  )
}

export default function Problem({ eyebrow, title, intro, contrast, list, bridge, image }) {
  if (!hasContent(title) && !hasContent(list)) return null

  return (
    <section className="border-y border-le-line bg-le-graphite py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        </Reveal>

        <Reveal className="grid grid-cols-1 items-center gap-9 lg:grid-cols-2">
          {/* Visual: imagen real (aspecto fijo) o gráfico de contraste (alto libre para no cortarse en mobile). */}
          {image?.src ? (
            <div className="aspect-[4/3] overflow-hidden rounded-md border border-le-line">
              <Image
                src={image.src}
                alt={image.alt || ''}
                width={640}
                height={480}
                unoptimized
                className="h-full w-full object-cover [filter:grayscale(35%)_contrast(1.08)_brightness(0.88)]"
              />
            </div>
          ) : hasContent(contrast) ? (
            <div className="relative flex flex-col overflow-hidden rounded-md border border-le-line sm:flex-row">
              {contrast.bad && <ContrastCol data={contrast.bad} tone="bad" />}
              {contrast.good && <ContrastCol data={contrast.good} tone="good" />}
              {contrast.bad && contrast.good && (
                <span className="absolute left-1/2 top-1/2 z-[3] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-le-line bg-le-bg font-mono text-[11px] font-bold text-le-muted">
                  VS
                </span>
              )}
            </div>
          ) : (
            <div className="aspect-[4/3] rounded-md border border-le-line bg-le-graphite-2" />
          )}

          {/* Lista de dolores + puente */}
          <div>
            {hasContent(list) && (
              <div className="flex flex-col gap-3.5">
                {list.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 rounded-sm border border-l-[3px] border-le-line border-l-le-navy bg-le-graphite-2 px-[18px] py-4"
                  >
                    <span className="mt-px flex-shrink-0 font-mono font-bold text-le-danger">✕</span>
                    <p className="text-sm text-[#cbd3dc]">{renderRich(item)}</p>
                  </div>
                ))}
              </div>
            )}

            {hasContent(bridge) && (
              <div className="mt-[22px] rounded border border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.08)] px-5 py-[18px] text-sm text-le-fg">
                {renderRich(bridge)}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
