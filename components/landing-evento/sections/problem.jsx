import Image from 'next/image'
import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/**
 * Columna del gráfico de contraste "antes vs. después". Con `items` suma una lista
 * (✕ en "bad", ✓ en "good") para comparar punto por punto; `icon`, `title` y `text`
 * pasan a ser opcionales.
 */
function ContrastCol({ data, tone }) {
  const isGood = tone === 'good'
  const hasItems = hasContent(data.items)
  return (
    <div
      className={`relative flex flex-1 flex-col ${hasItems ? 'justify-start' : 'justify-center'} gap-3 ${
        hasItems ? 'px-6 py-7 sm:px-8 sm:py-9' : 'px-[22px] py-[30px]'
      } ${
        isGood
          ? 'border-t border-le-line bg-[linear-gradient(160deg,rgb(var(--evt-accent-rgb)/0.14),rgba(53,102,175,0.1))] sm:border-l sm:border-t-0'
          : 'bg-le-graphite-2'
      }`}
    >
      {data.icon && (
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${
            isGood ? 'bg-[rgb(var(--evt-accent-rgb)/0.18)] text-le-accent' : 'bg-[rgba(224,89,107,0.15)] text-le-danger'
          }`}
        >
          {data.icon}
        </span>
      )}
      {hasContent(data.tag) && (
        <span
          className={`font-mono ${hasItems ? 'text-xs' : 'text-[10.5px]'} font-bold uppercase tracking-[0.06em] ${
            isGood ? 'text-le-accent' : 'text-le-danger'
          }`}
        >
          {data.tag}
        </span>
      )}
      {hasContent(data.title) && <h4 className="text-[15px] font-bold text-le-fg">{data.title}</h4>}
      {hasContent(data.text) && <p className="text-[12.5px] leading-snug text-le-muted">{data.text}</p>}
      {hasItems && (
        <ul className="mt-1 flex flex-col gap-3.5">
          {data.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-snug text-[#cbd3dc]">
              <span className={`mt-px flex-shrink-0 font-mono font-bold ${isGood ? 'text-le-accent' : 'text-le-danger'}`}>
                {isGood ? '✓' : '✕'}
              </span>
              <span>{renderRich(item)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Gráfico de contraste: columna "bad", columna "good" y el "VS" entre ambas. */
function Contrast({ contrast }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-md border border-le-line sm:flex-row">
      {contrast.bad && <ContrastCol data={contrast.bad} tone="bad" />}
      {contrast.good && <ContrastCol data={contrast.good} tone="good" />}
      {contrast.bad && contrast.good && (
        <span className="absolute left-1/2 top-1/2 z-[3] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-le-line bg-le-bg font-mono text-[11px] font-bold text-le-muted">
          VS
        </span>
      )}
    </div>
  )
}

export default function Problem({ eyebrow, title, intro, contrast, listTitle, list, bridge, image }) {
  if (!hasContent(title) && !hasContent(list)) return null

  // Sin lista de dolores (ni imagen), el contraste ocupa todo el ancho y el puente
  // va debajo: es el layout para comparar dos listas ("lo que pasa hoy" vs. "lo que
  // vas a llevarte"). Con `list` se mantiene el layout de dos columnas de siempre.
  const wide = hasContent(contrast) && !image?.src && !hasContent(list) && !hasContent(listTitle)

  return (
    <section className="border-y border-le-line bg-le-graphite py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} center />
        </Reveal>

        {wide ? (
          <Reveal className="mx-auto max-w-[960px]">
            <Contrast contrast={contrast} />
            {hasContent(bridge) && (
              <div className="mt-6 rounded border border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.08)] px-5 py-5 text-center text-[15px] leading-relaxed text-le-fg md:px-10">
                {renderRich(bridge)}
              </div>
            )}
          </Reveal>
        ) : (
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
              <Contrast contrast={contrast} />
            ) : (
              <div className="aspect-[4/3] rounded-md border border-le-line bg-le-graphite-2" />
            )}

            {/* Lista de dolores + puente */}
            <div>
              {hasContent(listTitle) && (
                <h3 className="mb-5 font-barlow-c text-xl font-bold uppercase leading-tight text-le-fg md:text-[22px]">
                  {renderRich(listTitle)}
                </h3>
              )}
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
        )}
      </Container>
    </section>
  )
}
