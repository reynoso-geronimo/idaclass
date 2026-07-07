'use client'

import { useCountdown } from '../lib/use-countdown'
import { CtaButton } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

/** Barra fija inferior solo en mobile: fecha + countdown + botón de reserva. */
export default function StickyCta({ dateLabel, cta, countdownTo, registerHref = '#inscripcion' }) {
  const count = useCountdown(countdownTo)
  if (!hasContent(cta?.label)) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[150] flex items-center justify-between gap-3 border-t border-le-line bg-le-bg px-4 py-3 md:hidden">
      <div className="text-[11px] text-le-muted">
        {dateLabel && <strong className="block text-[12.5px] text-le-fg">{dateLabel}</strong>}
        {countdownTo && (count ? `${count.days}d ${count.hours}h ${count.mins}m` : '-- d -- h -- m')}
      </div>
      <CtaButton href={cta.href || registerHref} variant="primary" className="px-[18px] py-3 text-[13px]">
        {cta.label}
      </CtaButton>
    </div>
  )
}
