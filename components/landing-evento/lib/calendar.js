/**
 * Construye la URL de "Agregar a Google Calendar" a partir de register.thankyou.calendar.
 * @param {{title:string,start:string,end:string,details?:string,location?:string}} cal
 * @returns {string|null}
 */
export function googleCalendarUrl(cal) {
  if (!cal?.title || !cal?.start || !cal?.end) return null

  const start = new Date(cal.start)
  const end = new Date(cal.end)
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null

  const fmt = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '')
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: cal.title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: cal.details || '',
    location: cal.location || '',
  })
  return `https://www.google.com/calendar/render?${params.toString()}`
}

/**
 * URL de compartir por WhatsApp. `{nombre}` se reemplaza por el nombre del inscripto.
 * @param {string} message
 * @param {string} [nombre]
 * @returns {string|null}
 */
export function whatsappShareUrl(message, nombre = '') {
  if (!message) return null
  const text = message.replace(/\{nombre\}/g, nombre || 'Hola')
  return `https://wa.me/?text=${encodeURIComponent(text)}`
}
