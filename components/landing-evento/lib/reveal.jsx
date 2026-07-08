'use client'

import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

/**
 * Aparición con fade-up cuando el elemento entra en viewport (una sola vez).
 * Usa la animación `fade-up` definida en tailwind.config.js.
 * Respeta `prefers-reduced-motion`: muestra el contenido sin animar.
 */
export function Reveal({ as: Tag = 'div', className, children, delay = 0, ...props }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  })

  return (
    <Tag
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        // 'le-reveal' permite el fallback <noscript> del renderer: sin JS el contenido
        // igual se muestra (opacity:1), evitando una página en blanco.
        'le-reveal',
        inView ? 'animate-fade-up' : 'opacity-0',
        'motion-reduce:animate-none motion-reduce:opacity-100',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
