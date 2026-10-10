import { Container, CtaButton } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/**
 * Cierre con CTA final, antes del footer: antetítulo, título grande, bajada, botón
 * y una línea con los datos del evento (`meta`, ej. "28 de octubre · 14:30 hs · Online").
 */
export default function Closing({ eyebrow, title, text, cta, meta, registerHref = '#inscripcion' }) {
  if (!hasContent(title)) return null

  return (
    <section className="relative overflow-hidden border-t border-le-line py-24 md:py-28">
      {/* Mismo lenguaje que el hero sin imagen: glow navy arriba y acento abajo. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(53,102,175,0.42),transparent_62%),radial-gradient(circle_at_50%_115%,rgb(var(--evt-accent-rgb)/0.16),transparent_55%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-[820px] text-center">
          {hasContent(eyebrow) && (
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-le-accent">{eyebrow}</p>
          )}
          <h2 className="font-barlow-c text-[clamp(34px,5.6vw,58px)] font-bold uppercase leading-[1.04] text-le-fg">
            {renderRich(title)}
          </h2>
          {hasContent(text) && (
            <p className="mx-auto mt-5 max-w-[620px] text-[16.5px] leading-relaxed text-[#cbd3dc]">{renderRich(text)}</p>
          )}
          {hasContent(cta?.label) && (
            <div className="mt-9">
              <CtaButton href={cta.href || registerHref} variant="primary">
                {cta.label}
              </CtaButton>
            </div>
          )}
          {hasContent(meta) && (
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.08em] text-le-muted">{meta}</p>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
