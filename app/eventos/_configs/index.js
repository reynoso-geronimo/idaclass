import { hipertrofiaConfig } from './hipertrofia'
import { suplementacionConfig } from './suplementacion'
import { hyroxAdultosMayoresConfig } from './hyrox-adultos-mayores'
import { embarazoActivoConfig } from './embarazo-activo'
import { fitnessNegocioStreamConfig } from './fitness-negocio-stream'

/**
 * Registro de eventos. Agregá una landing nueva creando su config y sumándola acá:
 *   import { miEventoConfig } from './mi-evento'
 *   export const EVENTOS = { hipertrofia: hipertrofiaConfig, 'mi-evento': miEventoConfig }
 * La URL será /eventos/<slug>.
 */
export const EVENTOS = {
  hipertrofia: hipertrofiaConfig,
  suplementacion: suplementacionConfig,
  'hyrox-adultos-mayores': hyroxAdultosMayoresConfig,
  'embarazo-activo': embarazoActivoConfig,
  'fitness-negocio-stream': fitnessNegocioStreamConfig,
}

export function getEvento(slug) {
  return EVENTOS[slug] || null
}
