/**
 * Mapea config.theme (nombres amigables) a las CSS vars --evt-* que consume el
 * módulo. Devolvé el objeto para pasarlo como `style` al wrapper raíz. Cualquier
 * clave omitida cae en el valor por defecto definido en globals.css.
 *
 * Ejemplo de config.theme:
 *   { accent: "#ff5a1f", accentRgb: "255 90 31", bg: "#0b0b0f" }
 */
const VAR_MAP = {
  bg: '--evt-bg',
  graphite: '--evt-graphite',
  graphite2: '--evt-graphite-2',
  fg: '--evt-fg',
  muted: '--evt-muted',
  line: '--evt-line',
  accent: '--evt-accent',
  accentRgb: '--evt-accent-rgb',
  accentStrong: '--evt-accent-strong',
  navy: '--evt-navy',
  success: '--evt-success',
  danger: '--evt-danger',
  onAccent: '--evt-on-accent',
}

export function themeToVars(theme = {}) {
  const vars = {}
  for (const [key, cssVar] of Object.entries(VAR_MAP)) {
    if (theme?.[key] != null) vars[cssVar] = theme[key]
  }
  return vars
}
