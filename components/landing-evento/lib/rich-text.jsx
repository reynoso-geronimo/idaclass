import React from 'react'

/**
 * Renderiza un string permitiendo resaltar fragmentos con **doble asterisco**.
 * Ej: "programá como un **experto**" -> "experto" se pinta con el color de acento.
 *
 * Esto deja los archivos de configuración como datos puros (JSON-serializables),
 * sin JSX embebido: los textos siguen siendo strings.
 *
 * @param {string|number|null|undefined} value
 * @param {{className?: string}} [opts]
 */
export function renderRich(value, { className = '' } = {}) {
  if (value == null) return null
  const text = String(value)
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <em key={i} className={`not-italic font-semibold text-le-accent ${className}`}>
          {part.slice(2, -2)}
        </em>
      )
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}

/**
 * ¿El valor trae contenido renderizable? Las secciones lo usan para auto-ocultarse
 * cuando la config no tiene el texto/dato correspondiente (returns null).
 */
export function hasContent(v) {
  if (v == null) return false
  if (typeof v === 'string') return v.trim().length > 0
  if (Array.isArray(v)) return v.length > 0
  if (typeof v === 'object') return Object.keys(v).length > 0
  return true
}
