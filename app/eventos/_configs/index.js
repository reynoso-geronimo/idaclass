import { hipertrofiaConfig } from './hipertrofia'

/**
 * Registro de eventos. Agregá una landing nueva creando su config y sumándola acá:
 *   import { miEventoConfig } from './mi-evento'
 *   export const EVENTOS = { hipertrofia: hipertrofiaConfig, 'mi-evento': miEventoConfig }
 * La URL será /eventos/<slug>.
 */
export const EVENTOS = {
  hipertrofia: hipertrofiaConfig,
}

export function getEvento(slug) {
  return EVENTOS[slug] || null
}
