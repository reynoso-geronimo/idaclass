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

function CountdownCard({ label, spots, countdownTo }) {
  const count = useCountdown(countdownTo)
  const boxes = [
    { n: count?.days, u: 'Días' },
    { n: count?.hours, u: 'Hs' },
    { n: count?.mins, u: 'Min' },
    { n: count?.secs, u: 'Seg' },
  ]
  return (
    <div className="relative rounded border border-le-line bg-[rgb(20_23_29/0.9)] p-[22px] backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-[3px] rounded-t bg-gradient-to-r from-le-accent to-le-navy" />
      {hasContent(label) && (
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-le-muted">{label}</div>
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
    </div>
  )
}

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

  return (
    <section className="relative flex min-h-[clamp(600px,46vw,760px)] items-end overflow-hidden border-b border-le-line">
      {/* Fondo responsive (art direction): en ≥768px carga la imagen desktop, en mobile la
          mobile. Acepta también un `src` único (compat). El navegador descarga solo la que aplica. */}
      <div className="absolute inset-0 z-0">
        {image?.mobile || image?.desktop || image?.src ? (
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
          <div className="h-full w-full bg-le-bg bg-[radial-gradient(circle_at_75%_40%,rgba(53,102,175,0.55),transparent_60%),radial-gradient(circle_at_28%_82%,rgb(var(--evt-accent-rgb)/0.16),transparent_55%)]" />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, var(--evt-bg) 2%, rgba(10,12,16,0.05) 16%, rgba(10,12,16,0.08) 84%, var(--evt-bg) 100%), linear-gradient(90deg, rgba(6,9,14,0.82) 0%, rgba(6,9,14,0.62) 32%, rgba(6,9,14,0.22) 52%, rgba(6,9,14,0) 68%)',
          }}
        />
      </div>

      <Container className="relative z-[1] pb-12 pt-28">
        <div className="max-w-[600px]">
          {hasContent(badge) && (
            <div className="mb-[18px] inline-flex items-center gap-2.5 rounded-full border border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.12)] px-3.5 py-[7px]">
              {badge.num && (
                <span className="rounded-sm bg-le-accent px-[7px] py-0.5 font-mono text-[11px] font-bold text-le-on-accent">
                  {badge.num}
                </span>
              )}
              <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.07em] text-le-accent">
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

          <h1 className="max-w-[820px] font-barlow-c text-[clamp(36px,6.4vw,64px)] font-bold uppercase leading-[1.06] text-le-fg">
            {renderRich(title)}
          </h1>

          {hasContent(subtitle) && (
            <p className="mt-5 max-w-[580px] text-[17.5px] leading-relaxed text-[#cbd3dc]">{renderRich(subtitle)}</p>
          )}

          {hasContent(datetime) && (
            <div className="mt-[22px] flex flex-wrap gap-2.5">
              {datetime.map((pill, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 rounded-lg border bg-[rgb(20_23_29/0.85)] py-2.5 pl-3 pr-4 ${
                    pill.highlight
                      ? 'border-le-accent bg-[rgb(var(--evt-accent-rgb)/0.1)]'
                      : 'border-le-line'
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
          )}

          <div className="mt-8 grid gap-5">
            <div>
              <div className="flex flex-wrap items-center gap-3.5">
                {hasContent(ctas?.primary?.label) && (
                  <CtaButton href={ctas.primary.href || registerHref} variant="primary">
                    {ctas.primary.label}
                  </CtaButton>
                )}
                {/* "Ver adelanto": solo si hay video (embedUrl). Abre el clip en un diálogo. */}
                {hasContent(ctas?.secondary?.label) && hasContent(ctas?.secondary?.embedUrl) && (
                  <button
                    type="button"
                    onClick={() => setAdelantoOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-le-line bg-transparent px-6 py-4 font-barlow-c text-sm font-semibold uppercase tracking-wide text-le-fg transition hover:border-le-accent"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {ctas.secondary.label}
                  </button>
                )}
              </div>
              {hasContent(note) && <p className="mt-2 text-[12.5px] text-le-muted">{note}</p>}
            </div>

            {hasContent(countdown) && countdownTo && (
              <CountdownCard label={countdown.label} spots={countdown.spots} countdownTo={countdownTo} />
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
        </div>
      </Container>
    </section>
  )
}
