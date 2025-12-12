'use client'

import React, { useEffect } from 'react'

const heroStats = [
  { icon: '🎯', value: '2,847', label: 'Ya Registrados' },
  { icon: '🌎', value: '40+', label: 'Sedes Confirmadas' },
  { icon: '🏆', value: '12+', label: 'Empresas Aliadas' },
]

const pillars = [
  {
    icon: '💼',
    title: 'Oportunidades Reales',
    text: 'Casos de éxito reales de profesionales que transformaron su pasión en carreras rentables. Conoce las rutas probadas hacia el éxito.',
  },
  {
    icon: '🤝',
    title: 'Respaldo Global',
    text: 'Formación avalada por las empresas líderes del sector. Tu certificación tiene el respaldo de toda la industria unida.',
  },
  {
    icon: '📈',
    title: 'Crecimiento Sin Riesgo',
    text: 'Aprende de los errores de otros. Estrategias validadas que minimizan el fracaso y aceleran tu desarrollo profesional.',
  },
  {
    icon: '🌟',
    title: 'Comunidad Activa',
    text: 'Más fuerte juntos. Accede a una red de 40+ gimnasios y profesionales comprometidos con tu éxito mutuo.',
  },
]

const successItems = [
  {
    icon: '🎓',
    title: 'Formación Avalada',
    text: 'Certificaciones reconocidas por las principales marcas y gimnasios de Latinoamérica. Tu título tiene peso real en el mercado.',
  },
  {
    icon: '🚀',
    title: 'Casos Documentados',
    text: 'Más de 5,000 graduados trabajando en la industria. Testimonios reales, números verificables, transformaciones medibles.',
  },
  {
    icon: '🎯',
    title: 'Modelo Colaborativo',
    text: 'No competimos, colaboramos. Un ecosistema donde gimnasios, marcas y profesionales crecen juntos elevando el estándar.',
  },
  {
    icon: '💡',
    title: 'Tendencias 2026',
    text: 'Descubre qué busca el mercado HOY. Oportunidades emergentes, nichos sin explotar, y demandas actuales del sector.',
  },
]

const expectItems = [
  {
    number: '01',
    title: 'Modelo Educativo 2026',
    text: 'Programa completo renovado con metodologías validadas. Qué se enseña, por qué funciona, y cómo te diferencia.',
  },
  {
    number: '02',
    title: 'Casos de Éxito Reales',
    text: 'Graduados trabajando en gimnasios top, emprendimientos rentables, y transformaciones profesionales documentadas.',
  },
  {
    number: '03',
    title: 'Panel de Empresas',
    text: 'Marcas líderes revelando qué buscan al contratar. Oportunidades laborales, requisitos reales, salarios del mercado.',
  },
  {
    number: '04',
    title: 'Tendencias Emergentes',
    text: 'Nichos en crecimiento para 2026. Especialidades demandadas. Dónde está el dinero que nadie te cuenta.',
  },
  {
    number: '05',
    title: 'Red Global Confirmada',
    text: 'Anuncio de nuevas sedes internacionales. Expansión geográfica. Tu certificación vale en más países.',
  },
  {
    number: '06',
    title: 'Becas y Oportunidades',
    text: 'Sorteos en vivo, descuentos exclusivos, y beneficios solo para quienes asisten al streaming.',
  },
]

const fomoTestimonials = [
  {
    quote: 'Me registré apenas vi el anuncio. 25 años de trayectoria no mienten. Si IdaClass convoca, yo asisto.',
    author: '— Martín R., Personal Trainer',
  },
  {
    quote: 'Nuestro gimnasio ya es sede IdaClass. Ver el respaldo de marcas top me confirmó que voy por buen camino.',
    author: '— Carolina M., Instructora Certificada',
  },
  {
    quote: 'Llevo 3 años entrenando gratis por pasión. Hora de convertirlo en carrera. Esto es lo que necesitaba.',
    author: '— Diego L., Futuro Estudiante',
  },
]

const faqItems = [
  {
    q: '¿Para quién es este evento?',
    a: 'Para cualquier persona apasionada por el fitness que quiera convertir esa pasión en una profesión de impacto. Profesionales actuales, estudiantes, instructores en gimnasios, emprendedores del sector y todos aquellos que buscan elevar su formación y conocer las nuevas oportunidades del mercado.',
  },
  {
    q: '¿Cuál es el costo del evento?',
    a: 'El streaming es 100% GRATUITO. Nuestra filosofía es "educar educando": democratizar el conocimiento para generar transformación real. Solo necesitas registrarte para recibir el link de acceso.',
  },
  {
    q: '¿Qué incluye el acceso al streaming?',
    a: '2 horas de contenido de alto valor con presentaciones de expertos internacionales, paneles con líderes de la industria, casos de éxito reales, sesiones de Q&A en tiempo real, anuncios exclusivos sobre el programa 2026, acceso a sorteos de becas y beneficios únicos para participantes.',
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
    q: '¿Qué es "El Efecto Transformación"?',
    a: 'Es un movimiento que busca redefinir los estándares educativos del sector fitness a través de la colaboración entre gimnasios, empresas, educadores y profesionales. La idea es pasar de la competencia fragmentada a un ecosistema donde el crecimiento sostenible se logra elevando la formación de manera conjunta.',
  },
]

const Page = () => {
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
            🔴 En Vivo · 9 de Enero 2026
          </div>
          <h1 className="js-fade mb-6 max-w-4xl text-4xl font-bold leading-tight text-white opacity-0 transition duration-700 md:text-6xl lg:text-7xl">
            Transforma Tu Pasión en <span className="text-idaclass2">Profesión de Impacto</span>
          </h1>
          <p className="js-fade mb-8 max-w-3xl text-lg text-slate-200 opacity-0 transition duration-700 md:text-xl">
            Únete al movimiento que está redefiniendo los estándares educativos del fitness.{' '}
            <span className="font-semibold text-white">Descubre cómo convertir tu pasión en una carrera que transforma vidas.</span>
          </p>
          <p className="js-fade mb-8 text-xl font-semibold text-idaclass2 opacity-0 transition duration-700">
            9 DE ENERO 2026 · 2 HORAS DE CONTENIDO EXCLUSIVO
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
            <a
              href="#registro"
              className="rounded-full bg-idaclass4 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-idaclass4/30 transition hover:-translate-y-0.5 hover:bg-idaclass3"
            >
              Asegura tu lugar ahora
            </a>
            <span className="text-sm text-slate-200">✓ Acceso 100% Gratuito · ✓ Certificado de Participación · ✓ Becas Exclusivas</span>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
          {pillars.map(pillar => (
            <article
              key={pillar.title}
              className="group rounded-2xl border border-idaclass4/20 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{pillar.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-idaclass5">{pillar.title}</h3>
              <p className="text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,136,202,0.18),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">Validación real</p>
            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Por Qué Esto Funciona</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {successItems.map(item => (
              <article key={item.title} className="rounded-2xl border border-idaclass4/30 bg-white/5 p-6 text-center backdrop-blur">
                <div className="mb-3 text-4xl drop-shadow">{item.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-idaclass2">{item.title}</h3>
                <p className="text-sm text-slate-200">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="relative mx-auto max-w-5xl space-y-6 px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">El movimiento</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Un Ecosistema Global Que Eleva a Todos</h2>
          <p className="text-lg text-slate-200">
            El fitness latinoamericano está en su mejor momento: <span className="font-semibold text-white">crecimiento del 10.26% anual</span>. Pero con
            ese crecimiento llegó la fragmentación. Promesas vacías. Certificaciones sin respaldo. Profesionales que fracasan no por falta de pasión, sino por
            falta de guía.
          </p>
          <p className="text-lg text-slate-200">
            <span className="font-semibold text-white">IdaClass Academy</span> lleva 25 años formando a los mejores. Pero hoy, algo cambió. No basta con ser
            los mejores. Queremos que <span className="font-semibold text-white">toda la industria sea mejor</span>.
          </p>
          <blockquote className="rounded-xl border-l-4 border-idaclass4 bg-white/5 p-6 text-xl italic text-slate-100">
            “Tu pasión te transforma. Tu formación cambia vidas.”
          </blockquote>
          <p className="text-lg text-slate-200">
            Por eso convocamos a <span className="font-semibold text-white">40+ gimnasios</span>, <span className="font-semibold text-white">empresas líderes</span>,{' '}
            <span className="font-semibold text-white">casos de éxito reales</span> y la <span className="font-semibold text-white">nueva generación de entrenadores</span> para crear algo
            inédito: <span className="font-semibold text-white">un movimiento donde el éxito individual alimenta el crecimiento colectivo</span>.
          </p>
          <p className="text-lg text-slate-200">El 9 de enero, descubre:</p>
          <ul className="space-y-3 text-slate-200">
            {[
              'Rutas probadas hacia el éxito - Qué funciona, qué no, y por qué',
              'Oportunidades ocultas del mercado - Nichos rentables que nadie te cuenta',
              'Certificaciones con aval real - Respaldadas por las marcas que contratan',
              'Red de apoyo profesional - Mentores, pares y oportunidades laborales',
              'Estrategias antifrustración - Cómo evitar los errores que hunden a 8 de cada 10',
            ].map(item => (
              <li key={item} className="flex gap-3">
                <span className="text-idaclass2">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-idaclass4">Respaldo global</p>
          <h2 className="mt-3 text-center text-4xl font-bold text-idaclass5 md:text-5xl">Toda la Industria Unida Por Primera Vez</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">
            40+ gimnasios, empresas líderes, casos de éxito comprobados y la nueva generación de entrenadores revelando lo que funciona HOY en el mercado
            fitness.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🏋️',
                title: 'Red de Gimnasios',
                items: ['+40 Sedes Confirmadas', 'Presencia en Toda Latinoamérica', 'Oportunidades de Práctica Real', 'Inserción Laboral Garantizada'],
              },
              {
                icon: '🏢',
                title: 'Empresas Aliadas',
                items: ['Marcas Top del Sector', 'Equipamiento y Tecnología', 'Certificaciones Avaladas', 'Beneficios Exclusivos'],
              },
              {
                icon: '🎯',
                title: 'Casos de Éxito',
                items: ['Emprendedores Rentables', 'Transformaciones Reales', 'Modelos de Negocio Validados', 'Números y Estrategias'],
              },
              {
                icon: '⚡',
                title: 'Nueva Generación',
                items: ['Influencers del Fitness', 'Tendencias Emergentes', 'Marketing Digital Fitness', 'Nichos en Crecimiento'],
              },
            ].map(block => (
              <article key={block.title} className="rounded-2xl border border-idaclass4/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 text-3xl">{block.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-idaclass5">{block.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {block.items.map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="text-idaclass4">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base text-slate-600">
            <span className="font-semibold text-idaclass4">Esto es histórico:</span> Por primera vez, toda la cadena de valor del fitness (gimnasios, marcas,
            educadores, profesionales) se sienta en la misma mesa para compartir conocimiento sin competencia.{' '}
            <span className="font-semibold text-slate-900">Solo colaboración.</span>
          </p>
        </div>
      </section>

      <section className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">Programa del evento</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Lo Que Vas a Descubrir el 9 de Enero</h2>
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

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-idaclass5/70 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(116,209,234,0.16),transparent_55%),radial-gradient(circle_at_80%_50%,rgba(0,136,202,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center">
          <div className="inline-flex rounded-full bg-idaclass4/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-idaclass2">⚡ Momento decisivo</div>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Miles Ya Decidieron. ¿Y Tú?</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { value: '2,847', label: 'Profesionales Registrados' },
              { value: '40+', label: 'Gimnasios Confirmados' },
              { value: '12+', label: 'Empresas Participantes' },
            ].map(item => (
              <div key={item.label} className="rounded-2xl border border-idaclass4/30 bg-white/5 p-6 backdrop-blur">
                <div className="text-4xl font-bold text-idaclass2">{item.value}</div>
                <div className="text-sm uppercase tracking-wide text-slate-200">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg text-slate-200">
            Mientras lees esto, instructores en gimnasios, entrenadores personales, y emprendedores fitness están asegurando su lugar en el movimiento que definirá 2026.
          </p>
          <div className="mt-6 rounded-xl border-l-4 border-idaclass4 bg-white/5 p-6 text-left text-base text-slate-100">
            <span className="font-semibold text-white">No es FOMO. Es inteligencia de mercado.</span> Quienes llegan primero a las nuevas oportunidades, las capitalizan.
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {fomoTestimonials.map(item => (
              <article key={item.author} className="rounded-2xl border border-idaclass4/30 bg-white/5 p-5 text-left backdrop-blur">
                <p className="text-sm text-slate-200">“{item.quote}”</p>
                <div className="mt-3 text-xs font-semibold text-idaclass2">{item.author}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:grid-cols-2">
          {[
            { value: '25', label: 'Años de Trayectoria' },
            { value: '40+', label: 'Gimnasios Asociados' },
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
          <h2 className="text-4xl font-bold md:text-5xl">El 9 de Enero, Todo Cambia</h2>
          <p className="mt-4 text-lg text-white/90">
            No dejes que tu pasión se quede en el gimnasio. Conviértela en la carrera que transforma tu vida y la de miles de personas.{' '}
            <span className="font-semibold">Regístrate ahora y sé parte del movimiento más grande de la industria fitness.</span>
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="#registro"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-idaclass4 shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
            >
              Asegura tu Lugar - 100% Gratis
            </a>
            <div className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur">
              ✓ Acceso Completo | ✓ Certificado Digital | ✓ Becas en Vivo | ✓ Q&A Exclusivo
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

