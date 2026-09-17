'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useCountdown, pad2 } from '../lib/use-countdown'
import { Container, CtaButton } from '../lib/primitives'
import { renderRich, hasContent } from '../lib/rich-text'

// Set acotado de íconos para las pastillas de fecha/horario. `icon` en la config
// es un string; si no matchea, cae en un punto de acento.
const ICONS = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="1.8" />
      <path d="M3 9.5H21" strokeWidth="1.8" />
      <path d="M8 3V6.5" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 3V6.5" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      <path d="M12 7V12L15.5 14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  duration: (
    <>
      <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 12L11.2 13.7L14.8 10.1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  shield: <path d="M4 6L12 3L20 6V11C20 16 16.5 19.5 12 21C7.5 19.5 4 16 4 11V6Z" strokeWidth="1.8" strokeLinejoin="round" />,
}

function PillIcon({ icon }) {
  const glyph = ICONS[icon]
  return (
    <span className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-md bg-[rgb(var(--evt-accent-rgb)/0.14)]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-[18px] w-[18px] text-le-accent">
        {glyph || <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />}
      </svg>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Piezas del hero. Cada una se usa en más de un layout (ver `Hero`).  */
/* ------------------------------------------------------------------ */

// Cajas del contador + barra de cupos, sin el marco. `CountdownCard` lo envuelve
// en tarjeta; `HeroPanel` lo mete como primer bloque del panel de inscripción.
function CountdownBlock({ label, spots, countdownTo, center = false }) {
  const count = useCountdown(countdownTo)
  const boxes = [
    { n: count?.days, u: 'Días' },
    { n: count?.hours, u: 'Hs' },
    { n: count?.mins, u: 'Min' },
    { n: count?.secs, u: 'Seg' },
  ]
  return (
    <>
      {hasContent(label) && (
        <div
          className={`mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-le-muted ${
            center ? 'text-center' : ''
          }`}
        >
          {label}
        </div>
      )}
      <div className="grid grid-cols-4 gap-2">
        {boxes.map((b) => (
          <div key={b.u} className="rounded-sm border border-le-line bg-le-bg py-2.5 text-center">
            <div className="font-mono text-2xl font-bold text-le-accent">{b.n == null ? '00' : pad2(b.n)}</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-[0.06em] text-le-muted">{b.u}</div>
          </div>
        ))}
      </div>
      {hasContent(spots) && (
        <>
          <div className="mt-4 flex justify-between border-t border-dashed border-le-line pt-3.5 text-[12.5px] text-le-muted">
            <span>{spots.label}</span>
            <span className="font-mono font-bold text-le-fg">{spots.value}</span>
          </div>
          {spots.percent != null && (
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-le-bg">
              <div
                className="h-full bg-gradient-to-r from-le-navy to-le-accent"
                style={{ width: `${spots.percent}%` }}
              />
            </div>
          )}
        </>
      )}
    </>
  )
}

function CountdownCard(props) {
  return (
    <div className="relative rounded border border-le-line bg-[rgb(20_23_29/0.9)] p-[22px] backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-[3px] rounded-t bg-gradient-to-r from-le-accent to-le-navy" />
      <CountdownBlock {...props} />
    </div>
  )
}

// Fecha/horario como pastillas en fila (layout con imagen y layout centrado).
function DatetimePills({ items, center = false }) {
  return (
    <div className={`mt-[22px] flex flex-wrap gap-2.5 ${center ? 'justify-center' : ''}`}>
      {items.map((pill, i) => (
        <div
          key={i}
          className={`flex items-center gap-2.5 rounded-lg border bg-[rgb(20_23_29/0.85)] py-2.5 pl-3 pr-4 ${
            pill.highlight ? 'border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.1)]' : 'border-le-line'
          }`}
        >
          <PillIcon icon={pill.icon} />
          <span className="flex flex-col leading-tight">
            <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.07em] text-le-muted">
              {pill.label}
            </span>
            <span className="font-barlow-c text-[15px] font-semibold text-le-fg">{pill.value}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

// Fecha/horario como filas apiladas (dentro del panel de inscripción).
function DatetimeRows({ items }) {
  return (
    <ul className="divide-y divide-le-line">
      {items.map((row, i) => (
        <li key={i} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
          <PillIcon icon={row.icon} />
          <span className="flex flex-col leading-tight">
            <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.07em] text-le-muted">
              {row.label}
            </span>
            <span
              className={`font-barlow-c text-[15px] font-semibold ${row.highlight ? 'text-le-accent' : 'text-le-fg'}`}
            >
              {row.value}
            </span>
          </span>
        </li>
      ))}
    </ul>
  )
}

// CTA primario + "ver adelanto" + nota. `full` los estira al ancho del panel.
function HeroCtas({ ctas, note, registerHref, onAdelanto, center = false, full = false }) {
  const hasPrimary = hasContent(ctas?.primary?.label)
  const hasAdelanto = hasContent(ctas?.secondary?.label) && hasContent(ctas?.secondary?.embedUrl)
  if (!hasPrimary && !hasAdelanto && !hasContent(note)) return null
  return (
    <div>
      <div className={`flex flex-wrap items-center gap-3.5 ${center ? 'justify-center' : ''} ${full ? 'flex-col items-stretch' : ''}`}>
        {hasPrimary && (
          <CtaButton href={ctas.primary.href || registerHref} variant="primary" className={full ? 'w-full' : undefined}>
            {ctas.primary.label}
          </CtaButton>
        )}
        {/* "Ver adelanto": solo si hay video (embedUrl). Abre el clip en un diálogo. */}
        {hasAdelanto && (
          <button
            type="button"
            onClick={onAdelanto}
            className={`inline-flex items-center justify-center gap-2 rounded-sm border border-le-line bg-transparent px-6 py-4 font-barlow-c text-sm font-semibold uppercase tracking-wide text-le-fg transition hover:border-le-accent ${
              full ? 'w-full' : ''
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            {ctas.secondary.label}
          </button>
        )}
      </div>
      {hasContent(note) && (
        <p className={`mt-2 text-[12.5px] text-le-muted ${full ? 'mt-3 text-center leading-relaxed' : ''}`}>{note}</p>
      )}
    </div>
  )
}

// Panel de inscripción: columna derecha del hero sin imagen. Concentra lo
// operativo (cuánto falta, cupos, cuándo, botón) para que la columna izquierda
// quede solo con el relato y las dos pesen parecido.
function HeroPanel({ countdown, countdownTo, datetime, ctas, note, registerHref, onAdelanto }) {
  return (
    <aside className="relative overflow-hidden rounded border border-le-line bg-[rgb(20_23_29/0.92)] shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-le-accent to-le-navy" />
      <div className="p-6">
        <CountdownBlock label={countdown.label} spots={countdown.spots} countdownTo={countdownTo} center />

        {hasContent(datetime) && (
          <div className="mt-6 border-t border-le-line pt-5">
            <DatetimeRows items={datetime} />
          </div>
        )}

        <div className="mt-6 border-t border-le-line pt-5">
          <HeroCtas ctas={ctas} note={note} registerHref={registerHref} onAdelanto={onAdelanto} full />
        </div>
      </div>
    </aside>
  )
}

/* ------------------------------------------------------------------ */

export default function Hero({
  badge,
  live,
  title,
  subtitle,
  datetime,
  ctas,
  note,
  countdown,
  image,
  countdownTo,
  registerHref = '#inscripcion',
}) {
  const [adelantoOpen, setAdelantoOpen] = useState(false)
  if (!hasContent(title)) return null

  // El hero tiene tres layouts según lo que traiga la config:
  //  - `hasImage`  → copy, pastillas, CTA y countdown apilados a la izquierda
  //                  sobre la foto (diseño original).
  //  - `split`     → sin imagen pero con countdown: dos columnas. Izquierda solo
  //                  relato (antetítulo, título, bajada); derecha un panel de
  //                  inscripción con countdown, fecha/horario y CTA.
  //  - `centered`  → sin imagen ni countdown: todo apilado en una columna centrada.
  const hasImage = Boolean(image?.mobile || image?.desktop || image?.src)
  const showCountdown = hasContent(countdown) && Boolean(countdownTo)
  const split = !hasImage && showCountdown
  const centered = !hasImage && !showCountdown
  const openAdelanto = () => setAdelantoOpen(true)

  return (
    <section
      className={`relative flex overflow-hidden border-b border-le-line ${
        hasImage ? 'min-h-[clamp(600px,46vw,760px)] items-end' : 'min-h-[clamp(540px,42vw,700px)] items-center'
      }`}
    >
      {/* Fondo responsive (art direction): en ≥768px carga la imagen desktop, en mobile la
          mobile. Acepta también un `src` único (compat). El navegador descarga solo la que aplica. */}
      <div className="absolute inset-0 z-0">
        {hasImage ? (
          <picture>
            {(image.desktop || image.src) && (
              <source media="(min-width: 768px)" srcSet={image.desktop || image.src} />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element -- <picture> elige mobile/desktop por viewport */}
            <img
              src={image.mobile || image.src || image.desktop}
              alt={image.alt || ''}
              fetchPriority="high"
              style={image.position ? { objectPosition: image.position } : undefined}
              className="h-full w-full object-cover object-center [filter:grayscale(35%)_contrast(1.08)_brightness(0.88)]"
            />
          </picture>
        ) : (
          // Sin imagen: fondo azul oscuro (glow navy + acento sobre el fondo base).
          // El glow navy queda detrás de la columna derecha, donde va el panel.
          <div className="h-full w-full bg-le-bg bg-[radial-gradient(circle_at_75%_40%,rgba(53,102,175,0.55),transparent_60%),radial-gradient(circle_at_28%_82%,rgb(var(--evt-accent-rgb)/0.16),transparent_55%)]" />
        )}
        <div
          className="absolute inset-0"
          style={{
            // El degradé horizontal existe para que el texto se lea sobre la foto.
            // Sin imagen sobra: dejaría el lado izquierdo apagado sin motivo.
            background: hasImage
              ? 'linear-gradient(0deg, var(--evt-bg) 2%, rgba(10,12,16,0.05) 16%, rgba(10,12,16,0.08) 84%, var(--evt-bg) 100%), linear-gradient(90deg, rgba(6,9,14,0.82) 0%, rgba(6,9,14,0.62) 32%, rgba(6,9,14,0.22) 52%, rgba(6,9,14,0) 68%)'
              : 'linear-gradient(0deg, var(--evt-bg) 2%, rgba(10,12,16,0) 22%, rgba(10,12,16,0) 78%, var(--evt-bg) 100%)',
          }}
        />
      </div>

      <Container className={`relative z-[1] ${hasImage ? 'pb-12 pt-28' : 'pb-16 pt-28 md:pb-20 md:pt-32'}`}>
        <div
          className={
            split
              ? 'grid items-center gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,360px)] xl:gap-x-16 xl:grid-cols-[minmax(0,1fr)_minmax(360px,400px)]'
              : ''
          }
        >
          <div className={hasImage ? 'max-w-[600px]' : centered ? 'mx-auto max-w-[820px] text-center' : 'max-w-[640px]'}>
            {/* `badge.size: 'lg'` agranda el antetítulo (pastilla + texto) cuando el evento lo pide. */}
            {hasContent(badge) && (
              <div
                className={`mb-[18px] inline-flex items-center gap-2.5 rounded-full border border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.12)] ${
                  badge.size === 'lg' ? 'px-4 py-2' : 'px-3.5 py-[7px]'
                }`}
              >
                {badge.num && (
                  <span
                    className={`rounded-sm bg-le-accent px-[7px] py-0.5 font-mono ${
                      badge.size === 'lg' ? 'text-[13px]' : 'text-[11px]'
                    } font-bold text-le-on-accent`}
                  >
                    {badge.num}
                  </span>
                )}
                <span
                  className={`font-mono ${
                    badge.size === 'lg' ? 'text-[13px] md:text-[15px]' : 'text-[11.5px]'
                  } font-bold uppercase tracking-[0.07em] text-le-accent`}
                >
                  {badge.label}
                </span>
              </div>
            )}

            {hasContent(live) && (
              <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-le-accent">
                <span className="h-[7px] w-[7px] animate-expo-blink rounded-full bg-le-accent" />
                {live}
              </div>
            )}

            <h1
              className={`max-w-[820px] font-barlow-c text-[clamp(36px,6.4vw,64px)] font-bold uppercase leading-[1.06] text-le-fg ${
                centered ? 'mx-auto' : ''
              }`}
            >
              {renderRich(title)}
            </h1>

            {hasContent(subtitle) && (
              <p
                className={`mt-5 text-[17.5px] leading-relaxed text-[#cbd3dc] ${
                  centered ? 'mx-auto max-w-[640px]' : hasImage ? 'max-w-[580px]' : 'max-w-[600px]'
                }`}
              >
                {renderRich(subtitle)}
              </p>
            )}

            {/* En `split` las pastillas, el CTA y el countdown viven en el panel de la derecha. */}
            {!split && (
              <>
                {hasContent(datetime) && <DatetimePills items={datetime} center={centered} />}
                <div className="mt-8 grid gap-5">
                  <HeroCtas
                    ctas={ctas}
                    note={note}
                    registerHref={registerHref}
                    onAdelanto={openAdelanto}
                    center={centered}
                  />
                  {showCountdown && (
                    <CountdownCard label={countdown.label} spots={countdown.spots} countdownTo={countdownTo} />
                  )}
                </div>
              </>
            )}
          </div>

          {split && (
            <div className="relative w-full lg:justify-self-end">
              {/* Halo suave para que el panel se despegue del fondo. */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-full bg-[rgb(var(--evt-accent-rgb)/0.1)] blur-[60px]"
              />
              <div className="relative">
                <HeroPanel
                  countdown={countdown}
                  countdownTo={countdownTo}
                  datetime={datetime}
                  ctas={ctas}
                  note={note}
                  registerHref={registerHref}
                  onAdelanto={openAdelanto}
                />
              </div>
            </div>
          )}
        </div>

        {/* Diálogo del adelanto: el iframe se monta recién al abrir. */}
        {hasContent(ctas?.secondary?.embedUrl) && (
          <Dialog open={adelantoOpen} onOpenChange={setAdelantoOpen}>
            <DialogContent className="max-w-3xl overflow-hidden border-le-line bg-le-bg p-0">
              <DialogTitle className="sr-only">{ctas.secondary.label || 'Adelanto'}</DialogTitle>
              <div className="aspect-video w-full">
                {adelantoOpen && (
                  <iframe
                    src={`${ctas.secondary.embedUrl}${ctas.secondary.embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
                    title={ctas.secondary.label || 'Adelanto'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </Container>
    </section>
  )
}
