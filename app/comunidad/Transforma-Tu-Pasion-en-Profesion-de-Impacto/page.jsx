'use client'

import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { PhoneInput } from '@/components/ui/phone-input'
import { cn } from '@/lib/utils'

const heroStats = [
  { icon: '🎯', value: '60', label: 'Minutos de Contenido' },
  { icon: '🌎', value: '100%', label: 'Gratuito' },
  { icon: '🏆', value: 'En Vivo', label: 'Q&A Interactivo' },
]

const pillars = [
  {
    icon: '💼',
    title: 'La Oportunidad Real',
    text: 'El Fitness está explotando. Este streaming te muestra qué funciona y qué no. Cómo destacar con una estrategia clara.',
  },
  {
    icon: '🤝',
    title: 'Sin Filtros',
    text: 'Te mostramos casos reales de dos entrenadores que hoy viven de esto. Escuchá historias reales, datos concretos y vivencias sin marketing "vendehumo".',
  },
  {
    icon: '📈',
    title: 'Datos NO opinion',
    text: 'Vas a ver como generan ingresos, cantidad de clientes, horas de trabajo y desafíos reales. No promesas. No teoría.',
  },
  {
    icon: '🌟',
    title: 'Preguntas claves',
    text: 'Respondemos todo: desde "¿cuánto se tarda en conseguir el primer cliente? ¿es posible vivir de esto?" hasta como superar los retos que muchos no te cuentan.',
  },
]

const expectItems = [
  {
    number: '01',
    title: 'Casos Reales Sin Filtros',
    text: 'Dos entrenadores comparten sus historias: uno independiente y uno docente de IdaClass. Números reales, errores y estrategias que funcionan.',
  },
  {
    number: '02',
    title: 'Datos Concretos',
    text: 'Ingresos reales, cantidad de clientes, horas de trabajo y desafíos que enfrentan día a día. No promesas, solo la verdad.',
  },
  {
    number: '03',
    title: 'Estrategias Validadas',
    text: 'Qué funciona y qué no en el fitness. Cómo destacar con una estrategia clara y construir una carrera real.',
  },
  {
    number: '04',
    title: 'Q&A en Vivo',
    text: 'Respondemos todas tus preguntas: desde "¿cuánto se tarda en conseguir el primer cliente?" hasta cómo superar los retos reales.',
  },
  {
    number: '05',
    title: 'Errores que Podés Evitar',
    text: 'Lecciones de quienes ya pasaron por ahí. Qué harían diferente y por qué formarse es clave para el éxito.',
  },
  {
    number: '06',
    title: 'Habilidades que Importan',
    text: 'Las soft skills que realmente hacen la diferencia. No son las que creés, son las que transforman vidas.',
  },
]

const faqItems = [
  {
    q: '¿Para quién es este evento?',
    a: 'Dirigido a Entrenadores, amantes del fitness y futuros profesionales. Si querés descubrir cómo transformar vidas y construir una carrera real en el fitness, este streaming es para vos.',
  },
  {
    q: '¿Cuál es el costo del evento?',
    a: 'El streaming es 100% GRATUITO. Nuestra filosofía es "educar educando": democratizar el conocimiento para generar transformación real. Solo necesitas registrarte para recibir el link de acceso.',
  },
  {
    q: '¿Qué incluye el acceso al streaming?',
    a: '60 minutos de contenido exclusivo en vivo con casos reales de entrenadores, datos concretos sobre ingresos y clientes, sesión de Q&A en tiempo real, testimonios sin filtros y estrategias reales que funcionan. Todo sin marketing ni promesas vacías.',
  },
  {
    q: '¿Podré hacer preguntas durante el evento?',
    a: '¡Absolutamente! Habrá sesiones interactivas de preguntas y respuestas en tiempo real. Es tu oportunidad para resolver dudas directamente con expertos y el equipo de IdaClass Academy.',
  },
  {
    q: '¿Qué pasa si no puedo verlo en vivo?',
    a: 'Aunque el evento en vivo tendrá interacción exclusiva y sorteos en tiempo real, las personas registradas recibirán acceso a una grabación posterior. Sin embargo, te recomendamos verlo en vivo para aprovechar al máximo la experiencia completa.',
  },
  {
    q: '¿Cómo me registro para el evento?',
    a: 'Haz clic en cualquiera de los botones "Regístrate ahora" en esta página. Completa el formulario con tus datos y recibirás automáticamente el link de acceso al streaming junto con toda la información necesaria.',
  },
  {
    q: '¿Qué hace diferente a este streaming?',
    a: 'Por primera vez, vas a ver la vida real de entrenadores sin marketing, sin exageraciones, sin pitch de ventas. Dos personas que ya están del otro lado comparten sus números reales, errores, estrategias y responden todas tus preguntas sin filtros.',
  },
]

const registroSchema = z.object({
  nombre: z.string().min(2, 'Ingresa al menos 2 caracteres'),
  apellido: z.string().min(2, 'Ingresa al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  telefono: z.string().min(8, 'Ingresa un teléfono válido'),
})

const Page = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({ nombre: '', apellido: '', email: '', telefono: '' })
  const [formErrors, setFormErrors] = useState({ nombre: '', apellido: '', email: '', telefono: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setFormErrors(prev => ({ ...prev, [name]: '' }))
    setSubmitError('')
  }

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, telefono: value || '' }))
    setFormErrors(prev => ({ ...prev, telefono: '' }))
    setSubmitError('')
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    setSubmitError('')
    setSubmitSuccess(false)
    
    const result = registroSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors = { nombre: '', apellido: '', email: '', telefono: '' }
      result.error.errors.forEach(err => {
        const fieldName = err.path[0]
        if (fieldName in fieldErrors) {
          fieldErrors[fieldName] = err.message
        }
      })
      setFormErrors(fieldErrors)
      return
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submit_attempt" });
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/registro-evento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result.data),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          setSubmitError('Este email ya está registrado. Revisa tu correo para el acceso al evento.')
        } else if (data.details) {
          // Si hay errores de validación del servidor
          const fieldErrors = { nombre: '', apellido: '', email: '', telefono: '' }
          data.details.forEach(err => {
            const fieldName = err.path[0]
            if (fieldName in fieldErrors) {
              fieldErrors[fieldName] = err.message
            }
          })
          setFormErrors(fieldErrors)
        } else {
          setSubmitError(data.error || 'Error al registrar. Por favor intenta nuevamente.')
        }
        setIsSubmitting(false)
        return
      }

      // Éxito
      window.dataLayer.push({ event: "form_submit_success" });
      setSubmitSuccess(true)
      setFormData({ nombre: '', apellido: '', email: '', telefono: '' })
      
      // Cerrar el diálogo después de 2 segundos
      setTimeout(() => {
        setIsDialogOpen(false)
        setSubmitSuccess(false)
      }, 2000)

    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitError('Error de conexión. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({ nombre: '', apellido: '', email: '', telefono: '' })
    setFormErrors({ nombre: '', apellido: '', email: '', telefono: '' })
    setSubmitError('')
    setSubmitSuccess(false)
  }

  const openDialog = () => {
    resetForm()
    setIsDialogOpen(true)
  }
  const closeDialog = () => {
    setIsDialogOpen(false)
    setTimeout(() => resetForm(), 300) // Reset después de la animación
  }
  useEffect(() => {
    const fadeEls = Array.from(document.querySelectorAll('.js-fade'))
    const faqToggles = Array.from(document.querySelectorAll('.js-faq-toggle'))
    const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    )

    fadeEls.forEach(el => observer.observe(el))

    const faqHandlers = faqToggles.map(btn => {
      const handler = () => {
        const answer = btn.nextElementSibling
        if (answer) {
          answer.classList.toggle('hidden')
        }
      }
      btn.addEventListener('click', handler)
      return { btn, handler }
    })

    const anchorHandlers = anchorLinks.map(link => {
      const handler = evt => {
        const targetId = link.getAttribute('href')
        if (targetId?.startsWith('#')) {
          evt.preventDefault()
          const target = document.querySelector(targetId)
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      link.addEventListener('click', handler)
      return { link, handler }
    })

    return () => {
      fadeEls.forEach(el => observer.unobserve(el))
      faqHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler))
      anchorHandlers.forEach(({ link, handler }) => link.removeEventListener('click', handler))
    }
  }, [])

  return (
    <main className="bg-slate-950 text-slate-100">
    {/*   <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-2xl font-semibold tracking-widest text-idaclass4">
            IDACLASS<span className="text-idaclass2"> ACADEMY</span>
          </div>
          <a
            href="#registro"
            className="hidden rounded-full bg-idaclass4 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-idaclass4/30 transition hover:bg-idaclass3 md:inline-flex"
          >
            Regístrate
          </a>
        </div>
      </header> */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-idaclass5/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(116,209,234,0.15),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,136,202,0.25),transparent_45%)]" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center px-4 py-20 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-idaclass4/60 bg-idaclass4/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-idaclass2">
            🔴 En Vivo · 20 de Febrero 2026
          </div>
          <h1 className="js-fade mb-6 max-w-4xl text-4xl font-bold leading-tight text-white opacity-0 transition duration-700 md:text-6xl lg:text-7xl">
            Transforma tu pasión en una <span className="text-idaclass2">carrera de impacto</span>
          </h1>
          <p className="js-fade mb-8 max-w-3xl text-lg text-slate-200 opacity-0 transition duration-700 md:text-xl">
            Descubre 1 hora lo que a muchos les lleva años: cómo transformar vidas y construir una carrera real en el fitness. Desafíos, estrategias, propuesta, mejores prácticas. Sin teoría. Solo la verdad que nadie te cuenta.
          </p>
          <p className="js-fade mb-4 text-xl font-semibold text-idaclass2 opacity-0 transition duration-700">
            📅 20 de Febrero 19 hs a 20 hs arg. 👉 60 minutos de contenido exclusivo en vivo.
          </p>
          <p className="js-fade mb-8 max-w-3xl text-base text-slate-300 opacity-0 transition duration-700">
            Dirigido a <span className="font-semibold text-white">Entrenadores, amantes del fitness y futuros profesionales.</span>
            <br />
            <span className="text-idaclass2">Acceso 100% Gratuito · Contenido real · Q&A en vivo</span>
          </p>
          <div className="js-fade grid w-full max-w-3xl grid-cols-1 gap-4 opacity-0 transition duration-700 sm:grid-cols-3">
            {heroStats.map(stat => (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-3 rounded-xl border border-idaclass4/40 bg-white/5 px-4 py-5 backdrop-blur"
              >
                <span className="text-3xl">{stat.icon}</span>
                <div className="text-left">
                  <div className="text-3xl font-bold text-idaclass2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openDialog}
              className="rounded-full bg-idaclass4 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-idaclass4/30 transition hover:-translate-y-0.5 hover:bg-idaclass3"
            >
              Reservá tu lugar ahora
            </button>
            <span className="text-sm text-slate-200">Acceso sin costo · Sesión interactiva · Testimonios en vivo</span>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
      <h2 className="pt-6 text-4xl font-bold md:text-5xl mx-auto text-center">Estas en el momento perfecto</h2>
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
          {pillars.map(pillar => (
            <article
              key={pillar.title}
              className="group rounded-2xl border border-idaclass4/20 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{pillar.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-idaclass5">{pillar.title}</h3>
              <p className="text-slate-600 text-pretty">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2 text-center">Historias reales</p>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl text-center">Dos Historias Reales, Una Conversación Honesta</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-200">
            Un entrenador online independiente que construyó su carrera por fuera de IdaClass. Un docente que se formó con nosotros y hoy transforma vidas. Ambos comparten sus números, sus errores y sus estrategias sin filtro.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🏋️',
                title: 'Entrenador Online Externo',
                items: ['Caso Real de la Industria', 'Credibilidad Sin Conflictos', 'Números y Estrategias Propias'],
              },
              {
                icon: '🏢',
                title: 'Docente de IdaClass',
                items: ['De Alumno a Profesional', 'Hoy Forma a Otros Entrenadores', 'Transformación Documentada'],
              },
              {
                icon: '🎯',
                title: 'Su Día a Día Real',
                items: ['Clientes e Ingresos Concretos', 'Desafíos y Frustraciones', 'Soft Skills que Importan'],
              },
              {
                icon: '⚡',
                title: 'Consejos para Empezar',
                items: ['Qué Harían Diferente', 'Errores que Podés Evitar', 'Por Qué Formarse es Clave'],
              },
            ].map(block => (
              <article key={block.title} className="rounded-2xl border border-idaclass4/30 bg-white/5 p-6 backdrop-blur">
                <div className="mb-3 text-4xl drop-shadow">{block.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-idaclass2">{block.title}</h3>
                <ul className="space-y-2 text-sm">
                  {block.items.map(item => (
                    <li key={item} className="flex gap-2 text-slate-200">
                      <span className="text-idaclass4">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base text-slate-200">
            Esto es diferente: por primera vez, vas a ver la vida real de un entrenador sin marketing, sin exageraciones, sin pitch de ventas. Solo dos personas que ya están del otro lado, dispuestas a responder TODO.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">La verdad sin filtros</p>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">La Verdad Que Nadie Te Cuenta Sobre ser Entrenador</h2>
          <div className="mt-8 space-y-6 text-lg text-slate-200">
            <p>
              Cada día, miles de personas entrenan. Conocen ejercicios, dominan técnicas, tienen pasión por el movimiento. Pero cuando intentan convertir eso en una carrera real, chocan contra una pared invisible.
            </p>
            <p>
              El problema no es falta de conocimiento técnico. Es todo lo que nadie te enseña: cómo conseguir clientes, cómo estructurar tu servicio, cómo generar confianza, cómo sostener un negocio mes a mes. Que realmente transforme vidas.
            </p>
            <p>
              IdaClass Academy lleva 25 años formando entrenadores que realmente trabajan. Sabemos qué funciona y qué no. Por eso creamos este streaming: para mostrarte la realidad sin filtros, sin promesas mágicas, sin pitch de ventas.
            </p>
            <p className="font-semibold text-white">
              Este 20 de Febrero descubre:
            </p>
            <ul className="space-y-3 text-slate-200">
              {[
                '→ La vida real de un entrenador - Sin la versión Instagram',
                '→ Fuentes de Ingresos, clientes, tiempo de trabajo',
                '→ Los errores que podés evitar - Lecciones de quienes ya pasaron por ahí',
                '→ Las habilidades que realmente importan - No son las que creés',
                '→ Cómo dar el primer paso informado - Dirección clara, sin humo',
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="text-idaclass2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

<section className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">Programa del evento</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Lo Que Vas a Descubrir el 20 de Febrero</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expectItems.map(item => (
              <article
                key={item.number}
                className="js-fade rounded-2xl border border-idaclass4/30 bg-white/5 p-6 opacity-0 transition duration-700 hover:-translate-y-1 hover:border-idaclass4/60 hover:bg-white/10"
              >
                <div className="text-5xl font-bold text-idaclass2">{item.number}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>





      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:grid-cols-2">
          {[
            { value: '25', label: 'Años de Trayectoria' },
            { value: '30+', label: 'Gimnasios Asociados' },
            { value: '10.26%', label: 'Crecimiento Anual del Sector' },
            { value: '100%', label: 'Gratuito y Accesible' },
          ].map(item => (
            <div key={item.label} className="rounded-2xl border border-idaclass4/20 bg-white p-6 text-center shadow-sm">
              <div className="text-5xl font-bold text-idaclass4">{item.value}</div>
              <div className="text-sm font-semibold uppercase tracking-wide text-idaclass5">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="registro" className="relative overflow-hidden bg-gradient-to-br from-idaclass5 via-idaclass4 to-idaclass3 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">El 20 de Febrero, Todo Cambia</h2>
          <p className="mt-4 text-lg text-white/90">
            No dejes que tu pasión se quede en el gimnasio. Conviértela en la carrera que transforma tu vida y la de miles de personas.{' '}
            <span className="font-semibold">Regístrate ahora y sé parte del movimiento más grande de la industria fitness.</span>
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={openDialog}
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-idaclass4 shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
            >
              Reservá tu Lugar - 100% Gratis
            </button>
            <div className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur">
              ✓ Acceso Completo | ✓ Contenido Real | ✓ Q&A en Vivo | ✓ Testimonios Sin Filtros
            </div>
            <p className="text-xs text-white/80">🔒 Tus datos están seguros. Solo usamos tu email para enviarte el link del streaming.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">Preguntas frecuentes</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Todo lo que Necesitas Saber</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map(item => (
              <article key={item.q} className="rounded-2xl border border-idaclass4/40 bg-white/5">
                <button
                  type="button"
                  className="js-faq-toggle flex w-full items-center justify-between px-5 py-4 text-left text-lg font-semibold text-white"
                >
                  {item.q} <span className="text-idaclass2">+</span>
                </button>
                <div className="faq-answer hidden px-5 pb-5 text-sm text-slate-200">{item.a}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeDialog} />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-8 text-slate-900 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass4">Regístrate</p>
                <h3 className="mt-2 text-2xl font-bold text-idaclass5">Reservá tu lugar ahora</h3>
                <p className="mt-1 text-sm text-slate-600">Completa tus datos y te enviaremos el acceso al streaming del 20 de Febrero.</p>
              </div>
              <button
                type="button"
                onClick={closeDialog}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-200"
                aria-label="Cerrar formulario de registro"
              >
                ✕
              </button>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-idaclass4 focus:outline-none focus:ring-2 focus:ring-idaclass4/30 ${
                    formErrors.nombre ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
                  }`}
                  placeholder="Tu nombre"
                />
                {formErrors.nombre && <p className="mt-1 text-xs text-red-500">{formErrors.nombre}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="apellido">
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  value={formData.apellido}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-idaclass4 focus:outline-none focus:ring-2 focus:ring-idaclass4/30 ${
                    formErrors.apellido ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
                  }`}
                  placeholder="Tu apellido"
                />
                {formErrors.apellido && <p className="mt-1 text-xs text-red-500">{formErrors.apellido}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-idaclass4 focus:outline-none focus:ring-2 focus:ring-idaclass4/30 ${
                    formErrors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
                  }`}
                  placeholder="tu@email.com"
                />
                {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="telefono">
                  Teléfono
                </label>
                <div className="mt-2">
                  <PhoneInput
                    defaultCountry="AR"
                    value={formData.telefono}
                    onChange={handlePhoneChange}
                    className={cn(
                      formErrors.telefono && '[&_input]:border-red-400 [&_input]:focus:border-red-500 [&_button]:border-red-400'
                    )}
                  />
                </div>
                {formErrors.telefono && <p className="mt-1 text-xs text-red-500">{formErrors.telefono}</p>}
              </div>
              
              {submitSuccess && (
                <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
                  <p className="text-sm font-semibold text-green-800">✓ ¡Registro exitoso!</p>
                  <p className="text-xs text-green-600 mt-1">Te enviaremos el acceso al streaming a tu email.</p>
                </div>
              )}
              
              {submitError && (
                <div className="rounded-xl bg-red-50 border border-red-200 p-4">
                  <p className="text-sm font-semibold text-red-800">Error</p>
                  <p className="text-xs text-red-600 mt-1">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="flex w-full items-center justify-center rounded-full bg-idaclass4 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-idaclass4/30 transition hover:-translate-y-0.5 hover:bg-idaclass3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </>
                ) : submitSuccess ? (
                  '✓ Registrado'
                ) : (
                  'Enviar y recibir acceso'
                )}
              </button>
              <p className="text-center text-xs text-slate-500">Tus datos están protegidos. Solo los usaremos para enviarte la información del evento.</p>
            </form>
          </div>
        </div>
      )}

     {/*  <footer className="border-t border-slate-800 bg-slate-950 px-4 py-10 text-center text-slate-200">
        <div className="text-3xl font-semibold tracking-widest text-idaclass4">
          IDACLASS <span className="text-idaclass2">ACADEMY</span>
        </div>
        <p className="mt-2 text-sm text-slate-300">Tu pasión te transforma, tu formación cambia vidas.</p>
        <div className="mt-4 text-xs text-slate-400">
          9 de Enero 2026 | Streaming Gratuito
          <br />
          25 Años Transformando la Industria Fitness
          <br />
          © 2026 IdaClass Academy. Todos los derechos reservados.
        </div>
      </footer> */}
    </main>
  )
}

export default Page

