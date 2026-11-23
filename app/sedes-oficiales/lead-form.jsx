'use client'

import { useRef, useState } from 'react'
import { z } from 'zod'
import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'
import { btnPrimary } from './estilos'

// WhatsApp oficial de IdaClass al que se deriva la postulación (el mismo del bloque de contacto).
const WHATSAPP = '5491130270462'

// País del select → código ISO, para validar el teléfono con las reglas de ese país
// aunque lo escriban sin el +54/+598/etc. "Otro país de LATAM" exige el código de país.
const PAISES = { Argentina: 'AR', Uruguay: 'UY', Chile: 'CL', Bolivia: 'BO' }

const schema = z
  .object({
    nombre: z
      .string()
      .trim()
      .min(1, 'Ingresá tu nombre y apellido')
      .refine((v) => v.split(/\s+/).length >= 2 && v.length >= 5, 'Ingresá nombre y apellido'),
    telefono: z.string().trim().min(1, 'Ingresá tu número de WhatsApp'),
    gimnasio: z.string().trim().min(2, 'Ingresá el nombre del gimnasio'),
    rol: z.string().min(1, 'Elegí tu rol'),
    ciudad: z.string().trim().min(2, 'Ingresá la ciudad'),
    pais: z.string().min(1, 'Elegí el país'),
    sedes: z.string(),
    espacio: z.string(),
    interes: z.string(),
  })
  .superRefine((d, ctx) => {
    if (!d.telefono) return // ya lo marca el min(1)
    const country = PAISES[d.pais]
    if (country ? isValidPhoneNumber(d.telefono, country) : isValidPhoneNumber(d.telefono)) return
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['telefono'],
      message:
        country || !d.pais
          ? 'Ingresá un número de WhatsApp válido'
          : 'Ingresá el número con código de país (ej. +51 …)',
    })
  })

// Teléfono en formato internacional legible para el mensaje (+54 9 11 3027 0462).
function formatTelefono(telefono, pais) {
  try {
    return parsePhoneNumber(telefono, PAISES[pais]).formatInternational()
  } catch {
    return telefono
  }
}

const field = 'flex flex-col gap-[7px]'
const label = 'text-[11px] font-bold text-[#34505d]'
const control = (error) =>
  `w-full rounded-[7px] border bg-[#fbfdfe] px-3 py-[13px] text-[13px] text-so-ink outline-none focus:shadow-[0_0_0_3px_rgba(18,185,236,.12)] ${
    error ? 'border-[#d64545] focus:border-[#d64545]' : 'border-[#d7e3e8] focus:border-so-cyan'
  }`

function ErrorText({ name, error }) {
  if (!error) return null
  return (
    <p id={`${name}-error`} className="text-[11px] leading-[1.4] text-[#c53030]">
      {error}
    </p>
  )
}

// Props comunes de cada control: estilos según error y atributos de accesibilidad.
const controlProps = (name, errors) => ({
  id: name,
  name,
  className: control(errors[name]),
  'aria-invalid': errors[name] ? 'true' : undefined,
  'aria-describedby': errors[name] ? `${name}-error` : undefined,
})

/**
 * Formulario de postulación de gimnasios. Como en el mockup, no guarda nada en la
 * base: valida con Zod, arma un mensaje con los datos y abre WhatsApp para iniciar
 * la conversación. Los errores se muestran debajo de cada campo y se limpian al editarlo.
 */
export default function LeadForm() {
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  // Al editar un campo se borra su error. Cambiar el país también borra el del teléfono,
  // porque las reglas del número dependen del país (se vuelve a validar al enviar).
  function clearError(event) {
    const { name } = event.target
    setErrors((prev) => {
      const clearPhone = name === 'pais' && prev.telefono
      if (!prev[name] && !clearPhone) return prev
      return { ...prev, [name]: '', ...(clearPhone && { telefono: '' }) }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const values = Object.fromEntries(new FormData(event.currentTarget))
    const parsed = schema.safeParse(values)

    if (!parsed.success) {
      const fieldErrors = {}
      for (const issue of parsed.error.issues) {
        const name = issue.path[0]
        if (!fieldErrors[name]) fieldErrors[name] = issue.message
      }
      setErrors(fieldErrors)
      setSent(false)
      // Llevar el foco al primer campo con error (en el orden del formulario).
      const first = [...formRef.current.elements].find((el) => fieldErrors[el.name])
      first?.focus()
      return
    }

    const d = parsed.data
    setErrors({})
    const lines = [
      'Hola IdaClass. Quiero postular mi gimnasio como Sede Oficial 2027.',
      '',
      'Nombre: ' + d.nombre,
      'WhatsApp: ' + formatTelefono(d.telefono, d.pais),
      'Gimnasio: ' + d.gimnasio,
      'Rol: ' + d.rol,
      'Ciudad: ' + d.ciudad,
      'País: ' + d.pais,
      'Cantidad de sedes: ' + d.sedes,
      'Espacio en horarios valle: ' + (d.espacio || 'Sin especificar'),
      'Interés principal: ' + d.interes,
    ]
    setSent(true)
    const url = `https://wa.me/${WHATSAPP}?text=` + encodeURIComponent(lines.join('\n'))
    window.open(url, '_blank', 'noopener')
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} onInput={clearError} onChange={clearError} noValidate>
      <div className="grid grid-cols-2 gap-3.5 max-[620px]:grid-cols-1">
        <div className={field}>
          <label className={label} htmlFor="nombre">
            Nombre y apellido *
          </label>
          <input {...controlProps('nombre', errors)} autoComplete="name" placeholder="Tu nombre" />
          <ErrorText name="nombre" error={errors.nombre} />
        </div>
        <div className={field}>
          <label className={label} htmlFor="telefono">
            WhatsApp *
          </label>
          <input
            {...controlProps('telefono', errors)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+54 9 ..."
          />
          <ErrorText name="telefono" error={errors.telefono} />
        </div>
        <div className={field}>
          <label className={label} htmlFor="gimnasio">
            Nombre del gimnasio *
          </label>
          <input {...controlProps('gimnasio', errors)} placeholder="Nombre comercial" />
          <ErrorText name="gimnasio" error={errors.gimnasio} />
        </div>
        <div className={field}>
          <label className={label} htmlFor="rol">
            Tu rol *
          </label>
          <select {...controlProps('rol', errors)} defaultValue="">
            <option value="">Seleccionar</option>
            <option>Dueño / Propietario</option>
            <option>Socio</option>
            <option>Gerente / Director</option>
            <option>Responsable de operaciones</option>
            <option>Otro</option>
          </select>
          <ErrorText name="rol" error={errors.rol} />
        </div>
        <div className={field}>
          <label className={label} htmlFor="ciudad">
            Ciudad *
          </label>
          <input {...controlProps('ciudad', errors)} autoComplete="address-level2" placeholder="Ciudad" />
          <ErrorText name="ciudad" error={errors.ciudad} />
        </div>
        <div className={field}>
          <label className={label} htmlFor="pais">
            País *
          </label>
          <select {...controlProps('pais', errors)} defaultValue="">
            <option value="">Seleccionar</option>
            <option>Argentina</option>
            <option>Uruguay</option>
            <option>Chile</option>
            <option>Bolivia</option>
            <option>Otro país de LATAM</option>
          </select>
          <ErrorText name="pais" error={errors.pais} />
        </div>
        <div className={field}>
          <label className={label} htmlFor="sedes">
            Cantidad de sedes
          </label>
          <select {...controlProps('sedes', errors)} defaultValue="1 sede">
            <option>1 sede</option>
            <option>2 a 3 sedes</option>
            <option>4 o más sedes</option>
          </select>
        </div>
        <div className={field}>
          <label className={label} htmlFor="espacio">
            ¿Tenés espacio en horarios valle?
          </label>
          <select {...controlProps('espacio', errors)} defaultValue="">
            <option value="">Seleccionar</option>
            <option>Sí</option>
            <option>No</option>
            <option>A evaluar</option>
          </select>
        </div>
        <div className={`${field} col-span-full`}>
          <label className={label} htmlFor="interes">
            ¿Qué te interesa de la propuesta?
          </label>
          <select {...controlProps('interes', errors)} defaultValue="Nueva unidad de negocio / comisión">
            <option>Nueva unidad de negocio / comisión</option>
            <option>Formar futuros entrenadores</option>
            <option>Diferenciar mi gimnasio</option>
            <option>Conocer el modelo completo</option>
          </select>
        </div>
      </div>
      <button className={`${btnPrimary} mt-[18px] w-full`} type="submit">
        Enviar postulación por WhatsApp <span>→</span>
      </button>
      <p className="mt-3 text-[10px] leading-[1.5] text-[#8799a2]">
        Al enviar, se abrirá WhatsApp con tus datos para iniciar la conversación con IdaClass. Tus datos se utilizarán
        para responder esta consulta.
      </p>
      {sent && (
        <div className="mt-3.5 rounded-lg bg-[#e8f8fc] p-3 text-[12px] text-[#07516a]" role="status">
          Preparando tu mensaje para WhatsApp…
        </div>
      )}
    </form>
  )
}
