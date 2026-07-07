import Image from 'next/image'
import { Container } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

/** Franja "Acompañan": label + logos de marcas (imágenes o texto). */
export default function Partners({ label, logos }) {
  if (!hasContent(logos)) return null

  return (
    <div className="border-b border-le-line bg-le-graphite py-[22px]">
      <Container className="flex items-center gap-[22px] overflow-x-auto">
        {hasContent(label) && (
          <span className="flex-shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.06em] text-le-muted">
            {label}
          </span>
        )}
        {logos.map((logo, i) =>
          logo.src ? (
            <div
              key={i}
              className={`flex h-11 flex-shrink-0 items-center justify-center rounded-lg ${
                logo.onDark ? 'px-1.5' : 'bg-white px-[22px] shadow-[0_2px_10px_rgba(0,0,0,0.18)]'
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt || 'Marca'}
                width={150}
                height={44}
                unoptimized
                className={`h-full w-auto max-w-[150px] object-contain ${logo.onDark ? 'opacity-90' : ''}`}
              />
            </div>
          ) : (
            <span key={i} className="flex-shrink-0 whitespace-nowrap font-barlow-c text-sm font-semibold text-le-fg">
              {logo.text}
            </span>
          )
        )}
      </Container>
    </div>
  )
}
