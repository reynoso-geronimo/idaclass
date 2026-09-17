import Image from 'next/image'
import { Container } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

// Un logo (imagen en tarjeta blanca, imagen "onDark" sin tarjeta, o texto).
function Logo({ logo }) {
  if (!logo.src) {
    return (
      <li className="flex-shrink-0 whitespace-nowrap font-barlow-c text-sm font-semibold text-le-fg">{logo.text}</li>
    )
  }
  return (
    <li
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
    </li>
  )
}

// Segundos que tarda un logo en recorrer la franja, a velocidad constante
// (la duración total escala con la cantidad de logos de la mitad de la pista).
const SECONDS_PER_LOGO = 4.5

/**
 * Franja "Acompañan": label fijo + carrusel infinito de logos.
 *
 * Es un marquee CSS puro: el set de logos se repite hasta cubrir el ancho
 * (`copies`) y se renderiza dos veces; la pista se desplaza -50% en loop, así
 * la segunda copia entra justo donde termina la primera y no hay costura.
 * Se pausa al pasar el mouse. Con `prefers-reduced-motion` queda estático,
 * con scroll horizontal y sin la copia duplicada.
 *
 * `duration` (segundos) permite pisar la velocidad por evento.
 */
export default function Partners({ label, logos, duration }) {
  if (!hasContent(logos)) return null

  // Al menos 6 logos por mitad para que la pista supere el ancho del contenedor.
  const copies = Math.max(2, Math.ceil(6 / logos.length))
  const half = Array.from({ length: copies }, () => logos).flat()
  const seconds = duration || Math.round(half.length * SECONDS_PER_LOGO)

  // Cada mitad lleva el gap como padding derecho para que la unión entre copias
  // mida lo mismo que el gap interno (si no, el loop "salta" medio gap).
  const halfClass = 'flex items-center gap-[22px] pr-[22px] motion-reduce:pr-0'

  return (
    <div className="border-b border-le-line bg-le-graphite py-[22px]">
      <Container className="flex items-center gap-[22px]">
        {hasContent(label) && (
          <span className="flex-shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.06em] text-le-muted">
            {label}
          </span>
        )}
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
          <div
            className="flex w-max animate-le-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
            style={{ '--le-marquee-duration': `${seconds}s` }}
          >
            <ul className={halfClass}>
              {half.map((logo, i) => (
                <Logo key={i} logo={logo} />
              ))}
            </ul>
            <ul className={`${halfClass} motion-reduce:hidden`} aria-hidden>
              {half.map((logo, i) => (
                <Logo key={i} logo={logo} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
