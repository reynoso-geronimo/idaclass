'use client'

import { cn } from '@/lib/utils'
import { themeToVars } from './lib/theme'
import { SECTION_REGISTRY } from './section-registry'

/**
 * Renderiza una landing de evento a partir de un objeto de configuración.
 *
 * config = {
 *   theme?: { accent, bg, ... },   // sobrescribe la paleta por defecto (opcional)
 *   countdownTo?: string,          // ISO. Valor compartido para countdowns (topbar/hero/sticky)
 *   registerHref?: string,         // ancla del formulario (default "#inscripcion")
 *   sections: [{ type, ...props }] // orden = orden de render. Quitá un objeto para ocultar la sección.
 * }
 *
 * Removibilidad: además de omitir la sección del array, cada componente devuelve
 * `null` si no tiene el contenido esencial. Así "sin texto = sin sección".
 */
export default function LandingEvento({ config }) {
  if (!config) return null
  const { theme, countdownTo, registerHref = '#inscripcion', sections = [] } = config
  const shared = { countdownTo, registerHref }
  const hasSticky = sections.some((s) => s?.type === 'sticky-cta')

  return (
    <main
      style={themeToVars(theme)}
      className={cn(
        // Nota: no usar overflow-x-hidden acá; rompería el position:sticky del topbar.
        'min-h-screen bg-le-bg font-barlow text-le-fg antialiased',
        hasSticky && 'pb-[76px] md:pb-0'
      )}
    >
      {/* Fallback sin JS: si el IntersectionObserver no corre, mostrar el contenido igual. */}
      <noscript>
        <style>{`.le-reveal{opacity:1 !important;transform:none !important;animation:none !important}`}</style>
      </noscript>
      {sections.map((section, i) => {
        if (!section?.type) return null
        const Comp = SECTION_REGISTRY[section.type]
        if (!Comp) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(
              `[LandingEvento] Sección desconocida: "${section.type}". Registrala en components/landing-evento/section-registry.js`
            )
          }
          return null
        }
        const { type, key, ...props } = section
        return <Comp key={key || `${type}-${i}`} {...shared} {...props} />
      })}
    </main>
  )
}
