'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { z } from 'zod'
import { PhoneInput } from '@/components/ui/phone-input'
import { cn } from '@/lib/utils'

const heroStats = [
  { icon: '⏱️', value: '60 min', label: 'En Vivo' },
  { icon: '🌎', value: '100%', label: 'Gratuito' },
  { icon: '💬', value: 'Q&A', label: 'Interactivo' },
]

const pillars = [
  {
    icon: '⚠️',
    title: 'Entrenás bien. La balanza no se mueve.',
    text: 'Tus alumnos entrenan con constancia, siguen el plan, y los resultados se estancan. El error no está en el esfuerzo — está en que nadie les explicó la parte metabólica.',
  },
  {
    icon: '🚨',
    title: 'Te formaron en movimiento. No en metabolismo.',
    text: 'La carrera enseña técnica de ejercicio pero no cómo interactúa con la nutrición para acelerar o frenar la quema de grasa. Ese vacío tiene un costo concreto en resultados.',
  },
  {
    icon: '❌',
    title: 'Más información que nunca. Más confusión también.',
    text: 'TikTok y YouTube inundan de protocolos contradictorios. Tu cliente llega desinformado y vos necesitás una respuesta científica, no otra opinión de influencer.',
  },
  {
    icon: '👥',
    title: 'El cliente exige más. La formación sigue igual.',
    text: 'El perfil del cliente evolucionó: busca resultados medibles, explicaciones basadas en evidencia y profesionales que integren entrenamiento y nutrición. El modelo fragmentado ya no alcanza.',
  },
]

const outcomes = [
  'El "Punto Ciego" Metabólico que frena la oxidación de grasas',
  'Sinergia Carga-Nutriente y el efecto EPOC real',
  'Cómo lograr adherencia inquebrantable en tus clientes',
  'Métricas vs. espejo: cambios estructurales en composición corporal',
  'El enfoque IdaClass Streaming: Q&A en vivo con la experta',
]

const faqItems = [
  {
    q: '¿Para quién es esta masterclass?',
    a: 'Para profesionales del fitness, entrenadores personales, nutricionistas, coordinadores de gimnasio y todo aquel que entrene con propósito. Si querés entender cómo el entrenamiento y la nutrición se potencian entre sí para generar descenso de peso real, este streaming es para vos.',
  },
  {
    q: '¿Cuál es el costo?',
    a: 'La masterclass es 100% GRATUITA. Nuestra filosofía es "educar educando": democratizar el conocimiento científico para generar transformación real. Solo necesitás registrarte para recibir el link de acceso.',
  },
  {
    q: '¿Qué incluye el acceso al streaming?',
    a: '1 hora de contenido exclusivo en vivo con Gabriela Di Meglio, sesión de Q&A interactiva en tiempo real, casos prácticos basados en evidencia científica y estrategias aplicables desde el día siguiente. Todo sin marketing ni promesas vacías.',
  },
  {
    q: '¿Podré hacer preguntas durante la masterclass?',
    a: '¡Absolutamente! Habrá un bloque dedicado de preguntas y respuestas en vivo. Es tu oportunidad de resolver dudas técnicas directamente con Gabriela.',
  },
  {
    q: '¿Qué pasa si no puedo verla en vivo?',
    a: 'Las personas registradas van a recibir acceso a la grabación posterior. Sin embargo, te recomendamos verla en vivo para aprovechar el Q&A y la interacción exclusiva.',
  },
  {
    q: '¿Cómo me registro?',
    a: 'Hacé click en cualquiera de los botones "Reservá tu lugar" en esta página. Completá tus datos y vas a recibir el link de acceso al streaming por email y WhatsApp.',
  },
  {
    q: '¿Qué hace diferente a esta masterclass?',
    a: 'Por primera vez, una especialista con doble respaldo científico (Profesora de Educación Física + Licenciada en Nutrición) te muestra cómo se integran ambas disciplinas para generar resultados reales. Evidencia primero, opinión después.',
  },
]

const registroSchema = z.object({
  nombre: z.string().min(2, 'Ingresá al menos 2 caracteres'),
  apellido: z.string().min(2, 'Ingresá al menos 2 caracteres'),
  email: z.string().email('Ingresá un email válido'),
  telefono: z.string().min(8, 'Ingresá un teléfono válido'),
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

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'form_submit_attempt', source: 'masterclass' })
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/registro-evento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      if (!response.ok) {
        setSubmitError('Hubo un error al registrar. Por favor intentá de nuevo.')
        setIsSubmitting(false)
        return
      }

      window.dataLayer.push({ event: 'form_submit_success', source: 'masterclass' })
      setSubmitSuccess(true)
      setFormData({ nombre: '', apellido: '', email: '', telefono: '' })

      setTimeout(() => {
        setIsDialogOpen(false)
        setSubmitSuccess(false)
      }, 2500)
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitError('Error de conexión. Por favor intentá de nuevo.')
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
    setTimeout(() => resetForm(), 300)
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
        if (answer) answer.classList.toggle('hidden')
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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-idaclass5/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(116,209,234,0.15),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,136,202,0.25),transparent_45%)]" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center px-4 py-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-idaclass4/60 bg-idaclass4/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-idaclass2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
            En Vivo · 5 de Junio 2026
          </div>
          <h1 className="js-fade mb-6 max-w-4xl text-4xl font-bold leading-tight text-white opacity-0 transition duration-700 md:text-6xl lg:text-7xl">
            Aprendé las claves para el <span className="text-idaclass2">descenso de peso sostenible.</span>
          </h1>
          <p className="js-fade mb-8 max-w-3xl text-lg text-slate-200 opacity-0 transition duration-700 md:text-xl">
            Descubrí el método que combina entrenamiento y nutrición estratégica para generar descenso de peso real,
            sin atajos ni improvisación.
          </p>
          <p className="js-fade mb-6 text-xl font-semibold text-idaclass2 opacity-0 transition duration-700">
            📅 5 de Junio · 19 hs (Arg). 👉 1 hora de contenido exclusivo en vivo.
          </p>

          <p className="js-fade mb-8 max-w-3xl text-base text-slate-300 opacity-0 transition duration-700">
            Dirigido a{' '}
            <span className="font-semibold text-white">
              profesionales del fitness, entrenadores, nutricionistas y coordinadores de gimnasio.
            </span>
            <br />
            <span className="text-idaclass2">Acceso 100% Gratuito · Contenido basado en evidencia · Q&A en vivo</span>
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openDialog}
              className="rounded-full bg-idaclass4 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-idaclass4/30 transition hover:-translate-y-0.5 hover:bg-idaclass3"
            >
              Reservá tu lugar ahora
            </button>
            <span className="text-sm text-slate-200">Acceso sin costo · Sesión interactiva · Cupos limitados</span>
          </div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="bg-slate-50 text-slate-900">
        <h2 className="pt-12 text-4xl font-bold md:text-5xl mx-auto text-center">El problema</h2>
        <h3 className="text-2xl font-bold md:text-3xl mx-auto text-center mt-2 text-idaclass4">
          El mercado pide resultados reales. ¿Estás preparado para darlos?
        </h3>
        <p className="text-slate-600 text-pretty text-center mx-auto max-w-3xl mt-2 px-4">
          Gran parte de las personas que intentan bajar de peso simplemente falla. El efecto rebote y la frustración
          aparecen por falta de conocimiento para aplicar estrategias científicas combinadas que transformen la
          composición corporal de forma efectiva.
        </p>
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

      {/* DIVISOR / TENSION */}
      <section className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-idaclass2 text-center">Masterclass 01</p>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl text-center">
            HABLAMOS DE LO QUE LA CIENCIA DICE
            <br />Y EL MERCADO IGNORA.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-200">
            Una masterclass sin filtros que va a cambiar cómo entendés el descenso de peso — y cómo lo aplicás con tus
            clientes desde el día siguiente.
          </p>
        </div>
      </section>

      {/* LA SOLUCIÓN */}
      <section className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-18 md:py-24">
          <p className="flex items-center gap-2 text-3xl font-bold uppercase tracking-widest text-idaclass2 mb-5">
            <span className="block w-6 h-0.5 bg-idaclass2"></span>
            La solución
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6 max-w-3xl">
            1 método integrado.
            <br />2 disciplinas.
            <br />
            <span className="text-idaclass2">Resultados que antes no llegaban.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-4">
            Una masterclass donde entrenamiento y nutrición dejan de ser mundos separados. Gabriela Di Meglio te muestra
            cómo funciona el descenso de peso real cuando se aborda desde las dos ciencias a la vez.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Aplicación práctica desde el primer día — sin atajos ni protocolos milagrosos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700/30 border border-slate-700/30 rounded mt-14 overflow-hidden">
            {[
              { n: '590K', l: 'TikTok' },
              { n: '273K', l: 'Instagram' },
              { n: '25', l: 'Años IdaClass' },
              { n: '50K', l: 'Graduados LATAM' },
            ].map(stat => (
              <div key={stat.l} className="bg-slate-900 px-4 md:px-6 py-7 md:py-8 text-center">
                <div className="text-3xl md:text-5xl font-black text-slate-100 leading-tight mb-2">{stat.n}</div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      {/* LA EXPERTA */}
      <section className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-18 md:py-24">
          <p className="flex items-center gap-2 text-3xl font-bold uppercase tracking-widest text-idaclass2 mb-5">
            <span className="block w-6 h-0.5 bg-idaclass2"></span>
            La experta
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            Quién va <br />
            <span className="italic text-idaclass2">a decirlo.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-12">
            La regla de esta masterclass: evidencia científica primero, opinión después. Sin atajos, sin protocolos
            milagrosos.
          </p>

          <div className="bg-slate-800 border border-slate-700/50 rounded p-7 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-idaclass2"></div>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center justify-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-idaclass4/40 shadow-xl shadow-idaclass4/30">
                  <Image
                    src="/landings/gabriela.jpg"
                    alt="Gabriela Di Meglio"
                    fill
                    sizes="144px"
                    className="object-cover"
                    quality={90}
                    priority
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-idaclass2 mb-2">Visión integrada</p>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-1">Gabriela Di Meglio</h3>
                <p className="text-sm text-gray-300 mb-1">Profesora de Educación Física · Licenciada en Nutrición</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
                  590K TikTok · 273K Instagram
                </p>
                <p className="text-sm md:text-base text-gray-200 italic leading-relaxed border-t border-slate-700/50 pt-4">
                  &ldquo;El cuerpo no entiende de rutinas separadas. Entiende de estímulo y combustible. Cuando los alineás,
                  los resultados son inevitables.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LO QUE VAS A DOMINAR */}
      <section className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-18 md:py-24">
          <p className="flex items-center gap-2 text-3xl font-bold uppercase tracking-widest text-idaclass2 mb-5">
            <span className="block w-6 h-0.5 bg-idaclass2"></span>
            Qué te llevás
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6 max-w-3xl">
            Los temas que vas a <span className="italic text-idaclass2">dominar.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-10">
            Entrenamiento sin nutrición estratégica es solo sudor. El método inteligente para el descenso de peso
            combina ambas disciplinas en vivo.
          </p>

          <div className="space-y-0 divide-y divide-slate-700/50">
            {outcomes.map((tema, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 py-4 group hover:pl-2 transition-all"
              >
                <span className="text-xs font-bold text-idaclass2 min-w-8 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-sm md:text-base font-bold uppercase tracking-tight text-slate-100 flex-1 leading-snug">
                  {tema}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONOCÉ A GABRIELA */}
      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass4">La experta</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl text-idaclass5">
            Conocé a Gabriela Di Meglio
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-idaclass4/20 shadow-lg">
                <Image
                  src="/landings/gabriela.jpg"
                  alt="Gabriela Di Meglio · Profesora de Educación Física y Licenciada en Nutrición"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-5 text-base md:text-lg text-slate-700 leading-relaxed">
              <p>
                En el mundo del fitness abundan los gurúes con opiniones, pero escasean los especialistas con doble
                respaldo científico. <span className="font-semibold text-idaclass5">Gabriela Di Meglio</span>{' '}
                representa esa nueva generación de profesionales: es Profesora de Educación Física y Licenciada en
                Nutrición.
              </p>
              <p>
                Esta combinación le permite entender el cuerpo humano desde el movimiento y el metabolismo exacto. En
                esta primera fecha del{' '}
                <span className="font-semibold text-idaclass5">Ciclo de Masterclasses de IdaClass Academy</span>,
                comparte el enfoque integrado que viene desarrollando con miles de alumnos y seguidores en redes.
              </p>
              <p className="text-sm italic text-slate-500">
                Más de 860.000 seguidores combinados en TikTok e Instagram avalan su forma de comunicar ciencia
                aplicada al fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="registro"
        className="relative overflow-hidden bg-gradient-to-br from-idaclass5 via-idaclass4 to-idaclass3 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">El 5 de Junio, todo cambia.</h2>
          <p className="mt-4 text-lg text-white/90">
            Una hora de contenido exclusivo en vivo con Gabriela Di Meglio para transformar cómo entendés y aplicás el
            descenso de peso. <span className="font-semibold">Reservá tu lugar y sumate al cambio.</span>
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
              ✓ Acceso en vivo | ✓ Contenido con evidencia | ✓ Q&A interactivo | ✓ Grabación posterior
            </div>
            <p className="text-xs text-white/80">
              🔒 Tus datos están seguros. Solo los usamos para enviarte el link del streaming.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">Preguntas frecuentes</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Todo lo que necesitás saber</h2>
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

      {/* MODAL DE REGISTRO */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeDialog} />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-8 text-slate-900 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass4">Registrate</p>
                <h3 className="mt-2 text-2xl font-bold text-idaclass5">Reservá tu lugar ahora</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Completá tus datos y te enviamos el acceso al streaming del 5 de Junio.
                </p>
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
                    formErrors.apellido
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                      : 'border-slate-200'
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
                      formErrors.telefono &&
                        '[&_input]:border-red-400 [&_input]:focus:border-red-500 [&_button]:border-red-400'
                    )}
                  />
                </div>
                {formErrors.telefono && <p className="mt-1 text-xs text-red-500">{formErrors.telefono}</p>}
              </div>

              {submitSuccess && (
                <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
                  <p className="text-sm font-semibold text-green-800">✓ ¡Registro exitoso!</p>
                  <p className="text-xs text-green-600 mt-1">
                    Te enviamos el acceso al streaming a tu email y WhatsApp.
                  </p>
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
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Procesando...
                  </>
                ) : submitSuccess ? (
                  '✓ Registrado'
                ) : (
                  'Enviar y recibir acceso'
                )}
              </button>
              <p className="text-center text-xs text-slate-500">
                Tus datos están protegidos. Solo los usamos para enviarte la información del evento.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}

export default Page
