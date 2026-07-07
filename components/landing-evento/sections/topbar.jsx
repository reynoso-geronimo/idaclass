'use client'

import Image from 'next/image'
import { useCountdown } from '../lib/use-countdown'
import { Container, CtaButton } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

/** Logotipo textual "Ida<Class> Academy" o imagen si `logo.src`. */
function Logo({ logo }) {
  if (!logo) return null
  if (logo.src) {
    return <Image src={logo.src} alt={logo.alt || 'Logo'} width={140} height={28} unoptimized className="h-7 w-auto" />
  }
  return (
    <span className="font-barlow-c text-[17px] font-bold tracking-tight text-le-fg">
      {logo.text}
      {logo.accent && <span className="text-le-accent">{logo.accent}</span>}
      {logo.sub && <span className="ml-1 text-[0.7em] font-normal text-le-muted">{logo.sub}</span>}
    </span>
  )
}

export default function Topbar({ logo, series, cta, countdownTo, registerHref = '#inscripcion' }) {
  const count = useCountdown(countdownTo)
  if (!hasContent(logo) && !hasContent(cta?.label)) return null

  return (
    <div className="sticky top-0 z-[200] border-b border-le-line bg-[rgb(10_12_16/0.94)] py-3 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <Logo logo={logo} />
          {hasContent(series) && (
            <span className="hidden border-l border-le-line pl-3.5 font-mono text-[11px] uppercase tracking-[0.04em] text-le-muted sm:block">
              {series}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {countdownTo && (
            <span className="hidden font-mono text-xs text-le-muted sm:block">
              {count ? `Cierra en ${count.days}d ${count.hours}h ${count.mins}m` : 'Cierra en --d --h --m'}
            </span>
          )}
          {hasContent(cta?.label) && (
            <CtaButton href={cta.href || registerHref} variant="solidLight">
              {cta.label}
            </CtaButton>
          )}
        </div>
      </Container>
    </div>
  )
}
