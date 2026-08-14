import { Container, CtaButton } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

function Brand({ brand, className }) {
  return (
    <span className={className}>
      {brand.text}
      {brand.accent && <span className="text-le-accent">{brand.accent}</span>}
      {brand.sub && <span className="ml-1 text-[0.7em] font-normal text-le-muted">{brand.sub}</span>}
    </span>
  )
}

/**
 * Cierre de la landing. Con solo `brand`/`text` rinde la barra simple de una fila
 * (layout histórico, sin cambios). Si además cargás `claim`, `eventLine`, `contact`,
 * `links` o `cta`, pasa al layout ampliado.
 */
export default function Footer({
  brand,
  text,
  claim,
  eventLine,
  cta,
  contact,
  links,
  registerHref = '#inscripcion',
}) {
  const hasExtended = hasContent(claim) || hasContent(eventLine) || hasContent(contact) || hasContent(links) || hasContent(cta?.label)
  if (!hasContent(brand) && !hasContent(text) && !hasExtended) return null

  // Footer simple: marca + copyright en una sola fila.
  if (!hasExtended) {
    return (
      <footer className="border-t border-le-line bg-le-bg py-11">
        <Container className="flex flex-wrap items-center justify-between gap-5">
          {hasContent(brand) && (
            <Brand brand={brand} className="font-barlow-c text-[19px] font-bold tracking-tight text-le-fg" />
          )}
          {hasContent(text) && <p className="text-xs text-le-muted">{text}</p>}
        </Container>
      </footer>
    )
  }

  // Footer ampliado: marca + claim, contacto, CTA/enlaces, y el copyright abajo.
  return (
    <footer className="border-t border-le-line bg-le-bg py-11">
      <Container>
        <div className="mb-9 grid gap-8 border-b border-le-line pb-9 md:grid-cols-[1.2fr_1fr_auto] md:gap-10">
          {/* Marca + claim + fecha del evento */}
          <div>
            {hasContent(brand) && (
              <Brand brand={brand} className="font-barlow-c text-[22px] font-bold tracking-tight text-le-fg" />
            )}
            {hasContent(claim) && <p className="mt-2.5 max-w-[380px] text-[13.5px] text-le-muted">{claim}</p>}
            {hasContent(eventLine) && (
              <p className="mt-3 font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-le-accent">
                {eventLine}
              </p>
            )}
          </div>

          {/* Datos de contacto */}
          {hasContent(contact) && (
            <div className="text-[13.5px] text-le-muted">
              {hasContent(contact.title) && <div className="font-bold text-le-fg">{contact.title}</div>}
              {hasContent(contact.text) && <p className="mt-1.5 leading-relaxed">{contact.text}</p>}
              {hasContent(contact.email) && (
                <a href={`mailto:${contact.email}`} className="mt-2.5 block transition hover:text-le-accent">
                  {contact.email}
                </a>
              )}
              {hasContent(contact.phone) && (
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className="mt-1 block transition hover:text-le-accent"
                >
                  {contact.phone}
                </a>
              )}
            </div>
          )}

          {/* CTA + enlaces del sitio */}
          <div className="flex flex-col gap-5 md:items-end">
            {hasContent(cta?.label) && (
              <CtaButton href={cta.href || registerHref} variant="solidLight">
                {cta.label}
              </CtaButton>
            )}
            {hasContent(links) && (
              <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-le-muted md:justify-end">
                {links.map((l, i) => (
                  <a key={i} href={l.href} className="transition hover:text-le-accent">
                    {l.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>

        {/* La marca ya se muestra arriba: acá va solo la línea de copyright. */}
        {hasContent(text) && <p className="text-xs text-le-muted">{text}</p>}
      </Container>
    </footer>
  )
}
