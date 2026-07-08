import { cn } from '@/lib/utils'
import { renderRich, hasContent } from './rich-text'

/** Ancho de contenido consistente en todas las secciones. */
export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6', className)}>{children}</div>
}

/**
 * Encabezado de sección (eyebrow + título + intro). Se auto-oculta si no hay
 * ni título ni eyebrow. `center` centra el bloque.
 */
export function SectionHead({ eyebrow, title, intro, center = true, className }) {
  if (!hasContent(title) && !hasContent(eyebrow)) return null
  return (
    <div className={cn('mb-12 max-w-3xl', center && 'mx-auto text-center', className)}>
      {hasContent(eyebrow) && (
        <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-le-accent">
          {eyebrow}
        </p>
      )}
      {hasContent(title) && (
        <h2 className="font-barlow-c text-3xl font-bold uppercase leading-[1.06] text-le-fg md:text-4xl">
          {renderRich(title)}
        </h2>
      )}
      {hasContent(intro) && (
        <p className="mt-4 text-[15px] leading-relaxed text-le-muted">{renderRich(intro)}</p>
      )}
    </div>
  )
}

/** Scroll suave hacia un id (#inscripcion). Seguro en SSR. */
export function scrollToId(id) {
  if (typeof document === 'undefined' || !id) return
  const selector = id.startsWith('#') ? id : `#${id}`
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Botón/enlace de CTA. Si `href` empieza con "#" hace scroll suave;
 * si no, navega normal (soporta target/rel para links externos).
 */
export function CtaButton({
  href = '#inscripcion',
  children,
  variant = 'primary',
  className,
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm font-barlow-c font-semibold uppercase tracking-wide transition'
  const styles = {
    primary:
      'bg-le-accent px-8 py-4 text-base text-le-on-accent shadow-[0_10px_30px_rgb(var(--evt-accent-rgb)/0.3)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgb(var(--evt-accent-rgb)/0.42)]',
    ghost:
      'border border-le-line bg-transparent px-6 py-4 text-sm text-le-fg hover:border-le-accent',
    solidLight:
      'bg-le-accent px-5 py-2.5 text-[13px] text-le-on-accent hover:brightness-105',
  }

  if (!children) return null // backstop: nunca renderizar un CTA sin contenido

  const handleClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      scrollToId(href)
    }
    onClick?.(e)
  }

  return (
    <a href={href} onClick={handleClick} className={cn(base, styles[variant], className)} {...props}>
      {children}
    </a>
  )
}
