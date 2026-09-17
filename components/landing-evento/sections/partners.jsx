'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Container } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

// Separación entre logos. Tiene que coincidir con gap-[22px] / pr-[22px] de abajo,
// porque se usa para medir si el set entra en el ancho disponible.
const GAP = 22

// Segundos que tarda un logo en recorrer la franja (velocidad constante:
// la duración total escala con la cantidad de logos).
const SECONDS_PER_LOGO = 4.5

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

/**
 * Franja "Acompañan": label fijo + logos.
 *
 * Si los logos entran en el ancho disponible se muestran fijos, como una fila
 * normal. Solo cuando no caben pasan a carrusel: un marquee CSS con el set
 * duplicado que se desplaza -50% en loop. No tiene costura porque cada mitad
 * lleva el gap como padding derecho, así la unión entre copias mide igual que
 * el gap interno. Se pausa con el mouse; con prefers-reduced-motion queda
 * estático con scroll horizontal y sin la copia duplicada.
 *
 * La decisión se toma midiendo en el cliente (ResizeObserver) y se recalcula al
 * cambiar el ancho o cuando cargan las imágenes. En SSR arranca fijo.
 *
 * `duration` (segundos) permite pisar la velocidad por evento.
 */
export default function Partners({ label, logos, duration }) {
  const wrapRef = useRef(null) // área disponible para los logos (a la derecha del label)
  const setRef = useRef(null) // primer set de logos, esté o no duplicado
  const [overflow, setOverflow] = useState(false)
  const count = logos?.length ?? 0

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || !count || typeof ResizeObserver === 'undefined') return

    const measure = () => {
      const list = setRef.current
      if (!list) return
      const items = Array.from(list.children).slice(0, count)
      const setWidth = items.reduce((w, el) => w + el.getBoundingClientRect().width, 0) + GAP * (count - 1)
      setOverflow(setWidth > wrap.clientWidth + 1)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(wrap)
    if (setRef.current) ro.observe(setRef.current)
    return () => ro.disconnect()
    // `overflow` va en deps para re-observar el <ul> nuevo cuando cambia de modo.
  }, [count, overflow])

  if (!hasContent(logos)) return null

  const seconds = duration || Math.round(count * SECONDS_PER_LOGO)
  const rowClass = 'flex items-center gap-[22px]'

  return (
    <div className="border-b border-le-line bg-le-graphite py-[22px]">
      <Container className="flex items-center gap-[22px]">
        {hasContent(label) && (
          <span className="flex-shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.06em] text-le-muted">
            {label}
          </span>
        )}

        <div
          ref={wrapRef}
          className={`relative min-w-0 flex-1 overflow-hidden ${
            overflow
              ? '[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]'
              : ''
          }`}
        >
          {overflow ? (
            <div
              className="flex w-max animate-le-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
              style={{ '--le-marquee-duration': `${seconds}s` }}
            >
              <ul ref={setRef} className={`${rowClass} pr-[22px] motion-reduce:pr-0`}>
                {logos.map((logo, i) => (
                  <Logo key={i} logo={logo} />
                ))}
              </ul>
              <ul className={`${rowClass} pr-[22px] motion-reduce:hidden`} aria-hidden>
                {logos.map((logo, i) => (
                  <Logo key={i} logo={logo} />
                ))}
              </ul>
            </div>
          ) : (
            <ul ref={setRef} className={rowClass}>
              {logos.map((logo, i) => (
                <Logo key={i} logo={logo} />
              ))}
            </ul>
          )}
        </div>
      </Container>
    </div>
  )
}
