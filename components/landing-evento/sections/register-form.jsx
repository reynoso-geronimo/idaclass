'use client'

import { useState } from 'react'
import { z } from 'zod'
import { PhoneInput } from '@/components/ui/phone-input'
import { cn } from '@/lib/utils'
import { Container } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'
import { googleCalendarUrl, whatsappShareUrl } from '../lib/calendar'

// El formulario mapea al contrato del endpoint existente /api/registro-evento:
// { nombre, apellido, email, telefono } (todos requeridos). Para cambiar los
// campos hay que ajustar también ese endpoint / modelo RegistroEvento.
const DEFAULT_FIELDS = {
  nombre: { label: 'Nombre', placeholder: 'Tu nombre' },
  apellido: { label: 'Apellido', placeholder: 'Tu apellido' },
  email: { label: 'Correo electrónico', placeholder: 'tu@email.com' },
  telefono: { label: 'WhatsApp', placeholder: '' },
}

const schema = z.object({
  nombre: z.string().min(2, 'Ingresá al menos 2 caracteres'),
  apellido: z.string().min(2, 'Ingresá al menos 2 caracteres'),
  email: z.string().email('Ingresá un email válido'),
  telefono: z.string().min(8, 'Ingresá un teléfono válido'),
})

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z" />
    </svg>
  )
}

function Field({ name, field, value, onChange, error, type }) {
  const errorId = `${name}-error`
  return (
    <div className="mb-3.5">
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold uppercase tracking-[0.05em] text-le-muted">
        {field.label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'w-full rounded-sm border bg-le-graphite px-3.5 py-3 text-[14.5px] text-le-fg placeholder:text-le-muted focus:outline focus:outline-2 focus:outline-le-accent',
          error ? 'border-le-danger' : 'border-le-line'
        )}
      />
      {error && (
        <p id={errorId} className="mt-1 text-xs text-le-danger">
          {error}
        </p>
      )}
    </div>
  )
}

function ThankYou({ data, nombre }) {
  const actions = data?.actions || []
  const calUrl = data?.calendar ? googleCalendarUrl(data.calendar) : null

  return (
    <div className="text-center">
      <h3 className="font-barlow-c text-[22px] font-bold uppercase text-le-fg">
        {data?.title || '✅ ¡Tu lugar está reservado!'}
      </h3>
      {hasContent(data?.intro) && <p className="mt-2.5 text-[13.5px] text-le-muted">{renderRich(data.intro)}</p>}

      {actions.length > 0 && (
        <div className="mt-6 flex flex-col gap-3.5 text-left">
          {actions.map((a, i) => {
            const href = a.type === 'share' ? whatsappShareUrl(a.message, nombre) : a.href
            const isNavy = a.accentBar === 'navy'
            return (
              <div
                key={i}
                className={cn(
                  'rounded-sm border border-l-[3px] border-le-line bg-le-graphite px-[18px] py-4',
                  isNavy ? 'border-l-le-navy' : 'border-l-le-accent'
                )}
              >
                {a.eyebrow && (
                  <div className={cn('mb-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.06em]', isNavy ? 'text-le-navy' : 'text-le-accent')}>
                    {a.eyebrow}
                  </div>
                )}
                {a.title && <div className="text-sm font-bold text-le-fg">{a.title}</div>}
                {hasContent(a.text) && <p className="mt-0.5 text-[13px] leading-relaxed text-le-muted">{renderRich(a.text)}</p>}
                {a.label && href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'mt-3 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-bold',
                      a.tone === 'whatsapp' ? 'bg-[#25D366] text-[#0b1a0f]' : 'bg-le-accent text-le-on-accent'
                    )}
                  >
                    {a.tone === 'whatsapp' && <WhatsAppIcon />}
                    {a.label}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      )}

      {calUrl && (
        <a href={calUrl} target="_blank" rel="noopener noreferrer" className="mt-3.5 block text-[12.5px] text-le-accent underline">
          {data?.calendar?.label || '+ Agregar a Google Calendar'}
        </a>
      )}
    </div>
  )
}

export default function RegisterForm({
  id = 'inscripcion',
  sideEyebrow,
  sideTitle,
  sideIntro,
  benefits,
  title,
  subtitle,
  submitLabel = 'Reservar mi lugar',
  micro,
  privacy,
  fields,
  endpoint = '/api/registro-evento',
  source = 'landing-evento',
  thankyou,
}) {
  const f = { ...DEFAULT_FIELDS, ...(fields || {}) }
  const [data, setData] = useState({ nombre: '', apellido: '', email: '', telefono: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success
  const [submitError, setSubmitError] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSubmitError('')
  }

  const onPhone = (value) => {
    setData((prev) => ({ ...prev, telefono: value || '' }))
    setErrors((prev) => ({ ...prev, telefono: '' }))
    setSubmitError('')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      const fieldErrors = {}
      parsed.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message
      })
      setErrors(fieldErrors)
      return
    }

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'form_submit_attempt', source })
    }
    setStatus('submitting')

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      if (!res.ok) {
        setSubmitError('Hubo un error al registrar. Por favor intentá de nuevo.')
        setStatus('idle')
        return
      }
      if (typeof window !== 'undefined') {
        window.dataLayer.push({ event: 'form_submit_success', source })
      }
      setSubmittedName(parsed.data.nombre)
      setStatus('success')
    } catch (err) {
      console.error('Error al enviar registro:', err)
      setSubmitError('Error de conexión. Por favor intentá de nuevo.')
      setStatus('idle')
    }
  }

  // Removibilidad: sin ningún contenido provisto, no renderizar la sección.
  if (!hasContent(title) && !hasContent(sideTitle) && !hasContent(sideEyebrow) && !hasContent(benefits)) {
    return null
  }

  return (
    <section id={id} className="bg-le-graphite py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_460px]">
          {/* Beneficios */}
          <Reveal>
            {hasContent(sideEyebrow) && (
              <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-le-accent">{sideEyebrow}</p>
            )}
            {hasContent(sideTitle) && (
              <h2 className="mt-2 font-barlow-c text-[clamp(26px,4vw,36px)] font-bold uppercase leading-[1.06] text-le-fg">
                {renderRich(sideTitle)}
              </h2>
            )}
            {hasContent(sideIntro) && <p className="mt-3.5 max-w-[440px] text-[15px] text-le-muted">{renderRich(sideIntro)}</p>}
            {hasContent(benefits) && (
              <ul className="mt-[22px] flex flex-col gap-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[#cbd3dc]">
                    <span className="flex-shrink-0 font-bold text-le-success">✓</span>
                    <span>{renderRich(b)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          {/* Tarjeta de formulario. aria-live anuncia el error de envío y el cambio a la pantalla de gracias. */}
          <Reveal aria-live="polite" className="relative overflow-hidden rounded-md border border-le-line bg-le-bg p-7 md:p-8">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-le-navy to-le-accent" />
            {status === 'success' ? (
              <ThankYou data={thankyou} nombre={submittedName} />
            ) : (
              <form onSubmit={onSubmit} noValidate>
                {hasContent(title) && <h3 className="text-center font-barlow-c text-[21px] font-bold uppercase text-le-fg">{title}</h3>}
                {hasContent(subtitle) && <p className="mb-6 mt-2 text-center text-[13px] text-le-muted">{subtitle}</p>}

                <Field name="nombre" field={f.nombre} value={data.nombre} onChange={onChange} error={errors.nombre} type="text" />
                <Field name="apellido" field={f.apellido} value={data.apellido} onChange={onChange} error={errors.apellido} type="text" />
                <Field name="email" field={f.email} value={data.email} onChange={onChange} error={errors.email} type="email" />

                <div className="mb-3.5">
                  <label htmlFor="telefono" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.05em] text-le-muted">
                    {f.telefono.label}
                  </label>
                  <PhoneInput
                    defaultCountry="AR"
                    value={data.telefono}
                    onChange={onPhone}
                    aria-invalid={errors.telefono ? 'true' : undefined}
                    aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                    className={cn(
                      // Tematiza el input claro de shadcn para la tarjeta oscura.
                      // (El popover de países se portalea y queda en tema claro: es legible y aceptable.)
                      '[&_input]:border-le-line [&_input]:bg-le-graphite [&_input]:text-le-fg [&_input]:placeholder:text-le-muted [&_button]:border-le-line [&_button]:bg-le-graphite [&_button]:text-le-fg [&_button:hover]:bg-le-graphite-2',
                      errors.telefono && '[&_input]:border-le-danger [&_button]:border-le-danger'
                    )}
                  />
                  {errors.telefono && (
                    <p id="telefono-error" className="mt-1 text-xs text-le-danger">
                      {errors.telefono}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div role="alert" className="mb-3 rounded-sm border border-le-danger bg-[rgba(224,89,107,0.1)] p-3 text-xs text-le-danger">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                  className="mt-1.5 flex w-full items-center justify-center rounded-sm bg-le-accent px-6 py-4 font-barlow-c text-base font-semibold uppercase tracking-wide text-le-on-accent transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === 'submitting' ? 'Procesando…' : submitLabel}
                </button>
                {hasContent(micro) && <p className="mt-3 text-center text-[11.5px] text-le-muted">{micro}</p>}
                {hasContent(privacy) && (
                  <p className="mt-2 text-center text-[10.5px] leading-snug text-le-muted">{renderRich(privacy)}</p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
