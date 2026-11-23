import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import LeadForm from './lead-form'
import {
  wrap,
  sectionPad,
  btnPrimary,
  btnOutline,
  eyebrow,
  kicker,
  sectionTitle,
  sectionLead,
  grid3,
} from './estilos'

/**
 * Landing "Sede Oficial IdaClass 2027": captación de gimnasios para la red de sedes.
 * Portada del mockup landing_idaclass_2027_red_global_minimal.html (mismo diseño y copy).
 * Cambios respecto del mockup:
 *  - Logo real de IdaClass Academy (versión para fondo oscuro) en lugar del logotipo de texto.
 *  - Foto del hero provista por el equipo (public/landings/sedes-oficiales/hero-gimnasio.jpg)
 *    en lugar de la imagen de Unsplash enlazada.
 *  - Logos de la red extraídos del mockup a public/landings/sedes-oficiales/red/.
 *
 * Estilos en Tailwind: colores `so-*` y `font-montserrat` en tailwind.config.js, clases
 * repetidas en ./estilos.js. El navbar, footer y botón de contacto globales se ocultan
 * por path ("sedes-oficiales") en components/navbar.jsx, footer.jsx y contacto.jsx.
 */

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'Sede Oficial IdaClass 2027 | Una alianza que multiplica valor',
  description:
    'Convertí tu gimnasio en una Sede Oficial IdaClass 2027. Una alianza estratégica para generar una nueva unidad de negocio, formar talento y diferenciar tu marca.',
  openGraph: {
    title: 'Sede Oficial IdaClass 2027 | Una alianza que multiplica valor',
    description:
      'Convertí tu gimnasio en una Sede Oficial IdaClass 2027. Una alianza estratégica para generar una nueva unidad de negocio, formar talento y diferenciar tu marca.',
  },
}

export const viewport = {
  themeColor: '#022637',
}

const LOGO = { src: '/landings/logo-idaclass-academy-fondo-oscuro.png', width: 640, height: 214 }

// Logos de la red alrededor del globo. `pos` los ubica en desktop y en ≤700px.
const RED = [
  {
    src: 'baika-club.webp', alt: 'Baika Club', w: 254, h: 230,
    pos: 'left-[12%] top-[9%] max-[700px]:left-[5%] max-[700px]:top-[13%]',
  },
  {
    src: 'pow-training-club.webp', alt: 'POW Training Club', w: 536, h: 230,
    pos: 'right-[12%] top-[9%] max-[700px]:right-[5%] max-[700px]:top-[13%]',
  },
  {
    src: 'nitro-gym.webp', alt: 'Nitro Gym', w: 225, h: 230,
    pos: 'left-[4%] top-[48%] max-[700px]:left-0 max-[700px]:top-[51%]',
  },
  {
    src: 'levelgym.webp', alt: 'Level Gym', w: 560, h: 73,
    pos: 'right-[4%] top-[48%] max-[700px]:right-0 max-[700px]:top-[51%]',
  },
  { src: 'ab.webp', alt: 'AB', w: 194, h: 230, pos: 'bottom-[2%] left-[22%] max-[700px]:left-[19%]' },
  {
    src: 'buena-vida-club.webp', alt: 'Buena Vida Club', w: 493, h: 230,
    pos: 'bottom-[2%] right-[22%] max-[700px]:right-[19%]',
  },
]

const PROBLEMAS = [
  {
    title: 'Espacios ociosos',
    text: 'Salones y horarios vacíos que generan costos fijos sin rentabilizar todo el potencial de tu infraestructura.',
    icon: <path d="M3 20h18M5 20V8l7-4 7 4v12M9 20v-6h6v6" />,
  },
  {
    title: 'Fuga y rotación',
    text: 'Dificultad para atraer, capacitar y retener entrenadores de calidad que acompañen el crecimiento del gimnasio.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 0 1 0 6m2 3c2 .8 3 2.5 3 5" />
      </>
    ),
  },
  {
    title: 'Clientes más exigentes',
    text: 'Buscan más que máquinas: experiencias, bienestar, acompañamiento y resultados que los hagan elegirte.',
    icon: <path d="M3 12h18M12 3v18M5 5l14 14M19 5 5 19" />,
  },
]

const BENEFICIOS = [
  {
    tag: '01 / NUEVA UNIDAD DE NEGOCIO',
    title: '40% de comisión directa',
    text: 'Sumá una nueva oportunidad de ingresos aprovechando tus instalaciones en horarios valle acordados.',
  },
  {
    tag: '02 / CANTERA PROPIA DE TALENTO',
    title: 'Formá futuros entrenadores en tu sede',
    text: 'Accedé directamente a graduados formados en tu gimnasio y conocé profesionales que pueden integrarse a tu equipo.',
  },
  {
    tag: '03 / DIFERENCIACIÓN DE MARCA',
    title: 'Convertite en un centro oficial de formación',
    text: 'Fortalecé el posicionamiento de tu gimnasio como parte de una red de formación profesional fitness.',
  },
]

const APORTA_IDACLASS = [
  'Dirección académica y contenidos.',
  'Selección y pago de docentes.',
  'Plataforma interactiva y teoría online en microlearning.',
  'Gestión comercial y ventas.',
  'Cobros centralizados.',
  'Campañas de pauta publicitaria digital.',
]

const APORTA_GIMNASIO = ['El espacio físico en los horarios valle acordados.', 'Difusión orgánica de la propuesta.']

const PASOS = [
  {
    title: 'Postulás tu gimnasio',
    text: 'Completás tus datos, ubicación y disponibilidad de espacio para prácticas presenciales.',
  },
  {
    title: 'Coordinamos una charla',
    text: 'En una reunión de 30 minutos conocemos tu gimnasio y te explicamos el modelo de alianza.',
  },
  {
    title: 'Evaluamos la incorporación',
    text: 'Revisamos la viabilidad, las condiciones y la disponibilidad territorial para 2027.',
  },
]

const CIFRAS = [
  { value: '25', label: 'AÑOS DE EXPERIENCIA', short: 'AÑOS DE EXPERIENCIA' },
  { value: '+55.000', label: 'ALUMNOS EGRESADOS EN LATAM', short: 'EGRESADOS EN LATAM' },
  { value: '80%', label: 'DE EMPLEABILIDAD EN EGRESADOS', short: 'EMPLEABILIDAD EN EGRESADOS' },
]

const FAQ = [
  {
    q: '¿Tengo que contratar docentes o administrar los cursos?',
    a: 'No. IdaClass se encarga de la dirección académica, contenidos, selección y pago de docentes, plataforma interactiva, gestión comercial, ventas, cobros centralizados y campañas de pauta digital.',
  },
  {
    q: '¿Qué tiene que aportar mi gimnasio?',
    a: 'El gimnasio aporta el espacio físico en los horarios valle acordados y difusión orgánica de la propuesta.',
  },
  {
    q: '¿Cómo funciona el 40% de comisión?',
    a: 'La propuesta contempla un 40% de comisión directa para la sede. La base de cálculo, liquidación y demás condiciones se detallan en la charla y en el acuerdo comercial.',
  },
  {
    q: '¿Las clases son presenciales u online?',
    a: 'El modelo combina teoría online mediante una plataforma de microlearning con prácticas presenciales en el gimnasio sede, en los horarios acordados.',
  },
  {
    q: '¿Qué significa exclusividad de zona para 2027?',
    a: 'La propuesta contempla exclusividad de zona como Sede Oficial 2027. La disponibilidad territorial y las condiciones específicas se verifican durante el proceso de evaluación.',
  },
  {
    q: '¿Cómo puedo conocer todos los detalles?',
    a: 'Completá el formulario para coordinar una charla de 30 minutos con el equipo de IdaClass y conocer las condiciones de incorporación.',
  },
]

function Brand({ className = 'h-10 max-[620px]:h-8' }) {
  return (
    <a aria-label="IdaClass Academy" className="inline-flex shrink-0 items-center" href="#inicio">
      <Image
        src={LOGO.src}
        width={LOGO.width}
        height={LOGO.height}
        alt="IdaClass Academy"
        className={`block w-auto ${className}`}
      />
    </a>
  )
}

function CheckList({ items, dark = false }) {
  return (
    <ul className="grid gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.5]">
          <span
            className={`grid h-[22px] w-[22px] flex-[0_0_22px] place-items-center rounded-full text-[12px] font-black ${
              dark ? 'bg-[rgba(18,185,236,.16)] text-so-cyan' : 'bg-[#e3f8fe] text-[#058fb8]'
            }`}
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SedesOficialesPage() {
  return (
    <div
      className={`${montserrat.variable} w-full bg-white font-montserrat leading-[1.55] text-so-ink antialiased`}
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(2,38,55,.96)] backdrop-blur-[12px]">
        <div className={`${wrap} flex h-[76px] items-center justify-between gap-6 max-[620px]:h-[66px]`}>
          <Brand />
          <nav
            aria-label="Navegación principal"
            className="flex items-center gap-7 text-[12px] font-semibold text-[#d7e7ed] max-[900px]:hidden"
          >
            <a className="hover:text-so-cyan" href="#propuesta">
              La propuesta
            </a>
            <a className="hover:text-so-cyan" href="#modelo">
              Cómo funciona
            </a>
            <a className="hover:text-so-cyan" href="#preguntas">
              Preguntas frecuentes
            </a>
          </nav>
          <a
            className={`${btnPrimary} max-[620px]:px-[13px] max-[620px]:py-3 max-[620px]:text-[10px]`}
            href="#postulacion"
          >
            Postular mi gimnasio <span>→</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero. El brillo circular de arriba es el ::before. */}
        <section
          id="inicio"
          className={`${sectionPad} relative overflow-hidden bg-so-navy text-white before:absolute before:right-1/4 before:top-[-320px] before:h-[520px] before:w-[520px] before:rounded-full before:bg-[rgba(18,185,236,.1)] before:blur-[5px] before:content-['']`}
        >
          <div className={`${wrap} relative grid min-h-[610px] grid-cols-[1.03fr_.97fr] items-stretch max-[900px]:grid-cols-1`}>
            <div className="flex flex-col items-start justify-center pb-[76px] pr-12 pt-[82px] max-[900px]:pb-12 max-[900px]:pr-0 max-[900px]:pt-[70px] max-[620px]:pb-10 max-[620px]:pt-[58px]">
              <div className={eyebrow}>Sede Oficial IdaClass · 2027</div>
              <h1 className="mb-5 mt-6 max-w-[650px] text-[clamp(39px,5vw,62px)] font-extrabold leading-[1.05] tracking-[-2.6px] max-[620px]:text-[42px] max-[620px]:tracking-[-1.8px]">
                ÚNETE A LA MAYOR RED DE FORMACIÓN FITNESS DE <em className="not-italic text-so-cyan">LATAM.</em>
              </h1>
              <p className="mb-7 max-w-[550px] text-[17px] leading-[1.65] text-[#d5e4e9] max-[620px]:text-[15px]">
                Tu gimnasio puede ser mucho más que un espacio de entrenamiento. Convertí tu infraestructura en una nueva
                oportunidad de negocio, formación y diferenciación.
              </p>
              <div className="flex flex-wrap gap-3 max-[620px]:w-full">
                <a className={`${btnPrimary} max-[620px]:w-full`} href="#postulacion">
                  Quiero postular mi gimnasio <span>→</span>
                </a>
                <a className={`${btnOutline} max-[620px]:w-full`} href="#modelo">
                  Conocer el modelo
                </a>
              </div>
              <div className="mt-[22px] text-[11px] text-[#9bb5c0]">Una alianza estratégica que multiplica valor.</div>
            </div>

            {/* Foto: en desktop sangra hasta el borde derecho de la ventana. El ::after es el degradé. */}
            <div className="relative mr-[calc((min(1160px,100vw_-_44px)_-_100vw)_/_2)] min-h-[610px] overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(90deg,#022637_0%,rgba(2,38,55,.15)_38%,rgba(2,38,55,.1)_100%),linear-gradient(0deg,rgba(2,38,55,.62),transparent_55%)] after:content-[''] max-[900px]:mx-[-22px] max-[900px]:min-h-[380px] max-[900px]:after:bg-[linear-gradient(0deg,rgba(2,38,55,.7),transparent_75%)] max-[620px]:mx-[-17px] max-[620px]:min-h-[300px]">
              <Image
                src="/landings/sedes-oficiales/hero-gimnasio.jpg"
                alt="Gimnasio moderno con racks de mancuernas y espacio de entrenamiento"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                className="object-cover object-[62%_center]"
              />
              <div className="absolute bottom-12 left-12 z-[2] max-w-[330px] text-[22px] font-bold leading-[1.25] max-[900px]:bottom-7 max-[900px]:left-[25px]">
                Tu gimnasio puede ser mucho más
                <span className="block text-so-cyan">Una alianza estratégica que multiplica valor.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-so-line bg-white">
          <div className={`${wrap} grid grid-cols-3 gap-5 py-[26px] max-[620px]:gap-2 max-[620px]:py-5`}>
            {CIFRAS.map((c) => (
              <div key={c.value} className="border-r border-so-line text-center last:border-0">
                <strong className="block text-[31px] font-extrabold leading-[1.1] tracking-[-1px] text-so-navy max-[620px]:text-[24px]">
                  {c.value}
                </strong>
                <span className="text-[11px] font-semibold text-so-muted max-[620px]:text-[9px]">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className={`${sectionPad} bg-so-pale`}>
          <div className={wrap}>
            <div className={kicker}>El desafío del sector</div>
            <h2 className={sectionTitle}>Diferenciarse ya no es una opción. Es una necesidad.</h2>
            <p className={sectionLead}>
              El mercado crece, la competencia también. Hoy los gimnasios necesitan crear más valor, desarrollar talento y
              aprovechar mejor sus recursos.
            </p>
            <div className={grid3}>
              {PROBLEMAS.map((p) => (
                <article
                  key={p.title}
                  className="rounded-[18px] border border-[#e3edf1] bg-white px-[26px] py-7 shadow-[0_8px_24px_rgba(2,38,55,.035)]"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#e4f8fe] text-[#078fb8]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-[22px] w-[22px]"
                    >
                      {p.icon}
                    </svg>
                  </div>
                  <h3 className="mb-[9px] text-[18px] font-bold tracking-[-.4px] text-so-navy">{p.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-so-muted">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-so-navy py-[65px] text-white">
          <div className={`${wrap} flex items-center justify-between gap-[35px] max-[620px]:block`}>
            <div>
              <h2 className="max-w-[690px] text-[clamp(27px,3.5vw,39px)] font-bold leading-[1.15] tracking-[-1.2px]">
                Tu problema de talento y tu problema de horas ociosas{' '}
                <span className="text-so-cyan">tienen la misma solución.</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#b9cdd5]">
                Una alianza para formar talento, fortalecer tu marca y sumar una nueva unidad de negocio.
              </p>
            </div>
            <a className={`${btnPrimary} shrink-0 max-[620px]:mt-[22px] max-[620px]:w-full`} href="#postulacion">
              Evaluar mi gimnasio <span>→</span>
            </a>
          </div>
        </section>

        <section id="propuesta" className={`${sectionPad} bg-white`}>
          <div className={wrap}>
            <div className={kicker}>La oportunidad</div>
            <h2 className={sectionTitle}>Tres beneficios. Una alianza estratégica.</h2>
            <p className={sectionLead}>
              Convertí tu gimnasio en un espacio de formación profesional y sumá valor a tu negocio sin tener que crear
              una academia desde cero.
            </p>
            <div className={grid3}>
              {BENEFICIOS.map((b) => (
                <article
                  key={b.tag}
                  className="relative overflow-hidden rounded-[18px] border border-so-line px-[26px] py-[30px] before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:bg-so-cyan before:content-['']"
                >
                  <div className="text-[12px] font-extrabold tracking-[1px] text-so-cyan-dark">{b.tag}</div>
                  <h3 className="mb-2.5 mt-[15px] text-[19px] font-bold leading-[1.25] text-so-navy">{b.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-so-muted">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(130deg,#052f43,#022637)] py-[70px] text-white">
          <div className={`${wrap} grid grid-cols-2 items-center gap-[45px] max-[620px]:grid-cols-1 max-[620px]:gap-[25px]`}>
            <div>
              <div className={eyebrow}>Una nueva unidad de negocio</div>
              <h2 className="my-[15px] text-[clamp(31px,4vw,45px)] font-bold leading-[1.1] tracking-[-1.6px]">
                Tu gimnasio suma valor. <span className="text-so-cyan">IdaClass gestiona el sistema.</span>
              </h2>
              <p className="my-[1em] max-w-[540px] text-[14px] text-[#c1d2d9]">
                El modelo contempla una comisión directa del 40% para el gimnasio. La operación académica y comercial
                queda a cargo de IdaClass, según las condiciones de la alianza.
              </p>
              <a className={btnPrimary} href="#postulacion">
                Quiero conocer la propuesta <span>→</span>
              </a>
            </div>
            <div className="rounded-[20px] border border-[rgba(18,185,236,.4)] bg-white/[.045] p-[35px] text-center max-[620px]:p-7">
              <strong className="block text-[clamp(72px,10vw,112px)] font-extrabold leading-none tracking-[-6px] text-so-cyan">
                40%
              </strong>
              <b className="mt-3 block text-[17px] font-bold">DE COMISIÓN DIRECTA</b>
              <small className="mt-2 block text-[11px] text-[#a9c0ca]">
                Para la Sede Oficial, según las condiciones del acuerdo comercial.
              </small>
            </div>
          </div>
        </section>

        <section id="modelo" className={`${sectionPad} bg-so-pale`}>
          <div className={wrap}>
            <div className={kicker}>Modelo llave en mano</div>
            <h2 className={sectionTitle}>Cero trabajo operativo adicional para tu equipo.</h2>
            <p className={sectionLead}>
              Un modelo tercerizado de gestión académica, comercial y operativa. Cada parte sabe qué aporta.
            </p>
            <div className="grid grid-cols-2 items-stretch gap-5 max-[620px]:grid-cols-1">
              <div className="rounded-[18px] border border-so-navy bg-so-navy p-8 text-white">
                <h3 className="mb-[7px] text-[21px] font-bold">IdaClass aporta</h3>
                <p className="mb-6 text-[12px] text-[#b5cbd4]">Gestión integral del sistema educativo y comercial.</p>
                <CheckList items={APORTA_IDACLASS} dark />
              </div>
              <div className="rounded-[18px] border border-so-line bg-white p-8">
                <h3 className="mb-[7px] text-[21px] font-bold">Tu gimnasio aporta</h3>
                <p className="mb-6 text-[12px] text-so-muted">Dos recursos para activar la sede.</p>
                <CheckList items={APORTA_GIMNASIO} />
                <div className="mt-[34px] rounded-xl bg-[#eef8fb] p-5">
                  <strong className="text-[15px] text-so-navy">Teoría online + prácticas presenciales</strong>
                  <p className="mt-[7px] text-[12px] leading-[1.7] text-so-muted">
                    Los alumnos acceden a contenidos desde la plataforma y realizan sus prácticas presenciales en tu
                    gimnasio, durante los horarios acordados.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-[22px] text-center text-[12px] text-so-muted">
              Vos aportás el espacio y la difusión. IdaClass pone en marcha y gestiona el sistema.
            </p>
          </div>
        </section>

        <section className={`${sectionPad} bg-white`}>
          <div className={wrap}>
            <div className={kicker}>Cómo funciona</div>
            <h2 className={sectionTitle}>De gimnasio a Sede Oficial IdaClass.</h2>
            <p className={sectionLead}>Un proceso simple para evaluar la oportunidad y organizar la incorporación.</p>
            <div className={grid3}>
              {PASOS.map((paso, i) => (
                <article key={paso.title} className="rounded-2xl border border-so-line p-[27px]">
                  <div className="mb-[18px] text-[12px] font-extrabold tracking-[1px] text-so-cyan-dark">0{i + 1}</div>
                  <h3 className="mb-2 text-[17px] font-bold text-so-navy">{paso.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-so-muted">{paso.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionPad} bg-so-pale`}>
          <div className={`${wrap} grid grid-cols-[.8fr_1.2fr] items-center gap-[50px] max-[900px]:grid-cols-1 max-[900px]:gap-7`}>
            <div className="flex min-h-[255px] flex-col items-start justify-between rounded-[18px] bg-so-navy p-9 text-white max-[900px]:min-h-[200px]">
              <Brand className="h-14" />
              <p className="mt-7 text-[20px] leading-[1.3]">Únete a la mayor red de formación fitness de LATAM.</p>
            </div>
            <div>
              <div className={`${kicker} text-left`}>Quiénes somos</div>
              <h2 className="mb-[15px] text-[clamp(28px,3.4vw,39px)] font-bold leading-[1.15] tracking-[-1.3px] text-so-navy">
                Experiencia, trayectoria y formación profesional.
              </h2>
              <p className="my-[1em] text-[14px] leading-[1.8] text-so-muted">
                IdaClass Academy lidera el mercado de formación profesional fitness con 25 años de experiencia y una
                comunidad de egresados en Latinoamérica. Buscamos gimnasios que quieran formar parte de una red que
                multiplica oportunidades y valor.
              </p>
              <div className="mt-[25px] flex flex-wrap gap-7 max-[620px]:gap-[18px]">
                {CIFRAS.map((c) => (
                  <div key={c.value}>
                    <strong className="block text-[25px] font-extrabold text-so-navy max-[620px]:text-[22px]">
                      {c.value}
                    </strong>
                    <span className="text-[10px] font-semibold text-so-muted">{c.short}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="red-gimnasios"
          aria-labelledby="nw-title"
          className="relative overflow-hidden bg-[radial-gradient(ellipse_at_52%_43%,#07384c_0%,#022637_56%,#011b29_100%)] pb-[78px] pt-[88px] text-white max-[700px]:pb-14 max-[700px]:pt-[65px]"
        >
          <div className={wrap}>
            <div className="text-center text-[11px] font-bold uppercase tracking-[.26em] text-[#75d9ef]">
              La red IdaClass
            </div>
            <h2
              id="nw-title"
              className="mx-auto mb-3 mt-3.5 text-center text-[clamp(34px,4.6vw,61px)] font-extrabold leading-[1.08] tracking-[-.055em] text-white"
            >
              Más de <em className="not-italic text-so-cyan">30 gimnasios</em>
              <br />
              ya nos eligen.
            </h2>
            <p className="mx-auto mb-5 max-w-[610px] text-center text-[15px] leading-[1.65] text-[#b8d0d9] max-[700px]:px-2.5">
              Una comunidad de gimnasios que impulsa la formación de nuevos profesionales del fitness.
            </p>

            <div className="relative isolate mx-auto h-[555px] max-w-[1080px] max-[700px]:mx-[-10px] max-[700px]:mt-3 max-[700px]:h-[445px]">
              <svg
                aria-hidden="true"
                viewBox="0 0 540 540"
                className="absolute left-1/2 top-0 z-[-1] h-[540px] w-[540px] -translate-x-1/2 opacity-[.78] drop-shadow-[0_0_36px_rgba(18,185,236,.11)] max-[700px]:top-10 max-[700px]:h-[350px] max-[700px]:w-[350px]"
              >
                <defs>
                  <clipPath id="nw-clip">
                    <circle cx="270" cy="270" r="242" />
                  </clipPath>
                </defs>
                <circle cx="270" cy="270" fill="#052c3e" r="242" stroke="#2b839b" strokeWidth="1.2" />
                <g clipPath="url(#nw-clip)" fill="none" stroke="#3e9cb5" strokeOpacity=".25">
                  <ellipse cx="270" cy="270" rx="90" ry="242" />
                  <ellipse cx="270" cy="270" rx="175" ry="242" />
                  <path d="M28 270H512M47 180H493M47 360H493M95 105H445M95 435H445" />
                </g>
                <g clipPath="url(#nw-clip)" fill="#0b5770" stroke="#44b4d1" strokeOpacity=".8" strokeWidth="1.8">
                  <path d="M111 57 L169 35 229 58 252 87 246 110 215 116 202 148 183 157 172 184 157 195 153 226 133 223 117 198 102 179 82 157 68 129 82 104 99 93Z" />
                  <path d="M160 217 L188 221 208 244 219 262 241 269 254 299 245 324 263 344 253 370 240 400 224 426 214 467 194 498 178 479 174 449 160 420 157 392 145 365 136 335 126 315 132 285 118 261 136 238Z" />
                  <path d="M288 48 L357 30 407 56 435 95 466 117 472 151 441 172 413 169 390 191 371 196 355 227 326 230 312 206 300 177 279 159 271 123Z" />
                  <path d="M360 255 L390 240 424 259 437 295 417 323 389 339 375 363 347 350 338 318 342 289Z" />
                </g>
                <circle cx="270" cy="270" fill="none" r="242" stroke="#56cbe7" strokeOpacity=".25" strokeWidth="3" />
              </svg>

              {/* Conexiones entre logos (ilustrativas). */}
              <svg
                aria-hidden="true"
                preserveAspectRatio="none"
                viewBox="0 0 1080 555"
                className="pointer-events-none absolute inset-0 z-[1] h-full w-full max-[700px]:opacity-75"
              >
                <g fill="none" stroke="#4bc9e6" strokeWidth="1.5" strokeOpacity=".58" strokeLinecap="round">
                  <path d="M190 112 Q365 44 540 86 T890 112" />
                  <path d="M190 112 Q118 226 102 328 T322 488" />
                  <path d="M890 112 Q973 230 978 328 T758 488" />
                  <path d="M102 328 Q280 390 322 488 Q538 542 758 488 Q870 389 978 328" />
                  <path d="M190 112 Q325 292 102 328" />
                  <path d="M890 112 Q760 291 978 328" />
                  <path d="M322 488 Q528 365 758 488" />
                  <path d="M190 112 Q490 18 758 488" strokeOpacity=".16" />
                  <path d="M890 112 Q560 16 322 488" strokeOpacity=".16" />
                </g>
                <g fill="#9fe9f5">
                  <circle cx="190" cy="112" r="3" />
                  <circle cx="890" cy="112" r="3" />
                  <circle cx="102" cy="328" r="3" />
                  <circle cx="978" cy="328" r="3" />
                  <circle cx="322" cy="488" r="3" />
                  <circle cx="758" cy="488" r="3" />
                </g>
              </svg>

              <div className="absolute left-1/2 top-1/2 z-[3] flex h-[178px] w-[178px] -translate-x-1/2 -translate-y-[48%] items-center justify-center rounded-full border border-[rgba(83,212,239,.55)] bg-[rgba(1,24,36,.94)] px-[26px] shadow-[0_0_0_9px_rgba(18,185,236,.035),0_0_50px_rgba(18,185,236,.16)] max-[700px]:h-[126px] max-[700px]:w-[126px] max-[700px]:px-[18px]">
                <Image src={LOGO.src} width={LOGO.width} height={LOGO.height} alt="IdaClass Academy" className="block h-auto w-full" />
              </div>

              {RED.map((logo) => (
                <div
                  key={logo.src}
                  className={`absolute z-[3] flex h-[124px] w-[124px] items-center justify-center rounded-full border border-[rgba(128,216,236,.6)] bg-[#0b3445] p-6 shadow-[0_8px_28px_rgba(0,0,0,.2)] max-[700px]:h-[78px] max-[700px]:w-[78px] max-[700px]:p-[15px] ${logo.pos}`}
                >
                  <Image
                    src={`/landings/sedes-oficiales/red/${logo.src}`}
                    width={logo.w}
                    height={logo.h}
                    alt={logo.alt}
                    className="block h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="mt-2 text-center">
              <a
                href="#postulacion"
                className="inline-block rounded-[30px] bg-so-cyan px-[27px] py-[15px] text-[14px] font-extrabold text-[#002332] hover:bg-[#78ddf7]"
              >
                Sumá tu gimnasio a la red →
              </a>
              <p className="mb-3 mt-[13px] text-[12px] text-[#8eafbc]">
                Algunas de las marcas que forman parte de nuestra red · Conexiones ilustrativas, no ubicaciones geográficas
              </p>
            </div>
          </div>
        </section>

        <section id="preguntas" className={`${sectionPad} bg-white`}>
          <div className={wrap}>
            <div className={kicker}>Antes de postularte</div>
            <h2 className={sectionTitle}>Preguntas frecuentes</h2>
            <p className={sectionLead}>
              Lo esencial para entender la propuesta y evaluar si tu gimnasio puede convertirse en una sede.
            </p>
            <div className="mx-auto max-w-[850px]">
              {FAQ.map(({ q, a }) => (
                <details key={q} className="group border-b border-so-line py-[19px]">
                  <summary className="flex cursor-pointer list-none justify-between gap-5 text-[15px] font-bold text-so-navy after:text-[23px] after:leading-none after:text-so-cyan-dark after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">
                    {q}
                  </summary>
                  <p className="mt-3.5 max-w-[760px] text-[13px] leading-[1.8] text-so-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="postulacion"
          className={`${sectionPad} relative overflow-hidden bg-so-navy text-white after:absolute after:bottom-[-260px] after:right-[-130px] after:h-[450px] after:w-[450px] after:rounded-full after:bg-[rgba(18,185,236,.08)] after:content-['']`}
        >
          <div className={`${wrap} relative z-[1] grid grid-cols-[.9fr_1.1fr] items-start gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-[30px]`}>
            <div>
              <div className={eyebrow}>Sedes Oficiales 2027</div>
              <h2 className="my-4 text-[clamp(32px,4vw,46px)] font-bold leading-[1.1] tracking-[-1.5px]">
                Tu gimnasio puede ser parte de <span className="text-so-cyan">esta red.</span>
              </h2>
              <p className="my-[1em] text-[14px] leading-[1.8] text-[#bdd0d8]">
                Estamos buscando gimnasios que quieran sumar una nueva unidad de negocio, formar talento y diferenciar su
                propuesta. Completá tus datos y coordinemos una charla de 30 minutos para conocer tu sede.
              </p>
              <div className="mt-[26px] flex items-center gap-3 text-[13px] text-[#dcebf0]">
                <span>✦</span>
                <span>
                  Contacto directo: <strong className="text-white">Julio Anghilante · Fundador y CEO</strong>
                </span>
              </div>
              <div className="mt-[26px] flex items-center gap-3 text-[13px] text-[#dcebf0]">
                <span>✦</span>
                <span>
                  WhatsApp:{' '}
                  <a className="group" href="https://wa.me/5491130270462" target="_blank" rel="noopener noreferrer">
                    <strong className="text-white group-hover:text-so-cyan">+54 9 11 3027-0462</strong>
                  </a>
                </span>
              </div>
            </div>
            <div className="rounded-[18px] bg-white p-8 text-so-ink shadow-[0_20px_60px_rgba(0,0,0,.2)] max-[620px]:px-[18px] max-[620px]:py-[23px]">
              <h3 className="mb-[7px] text-[22px] font-bold text-so-navy">Postulá tu gimnasio</h3>
              <p className="mb-[22px] text-[12px] text-so-muted">
                Dejanos tus datos. Te contactaremos para conversar sobre la propuesta.
              </p>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#011d2a] py-7 text-[#9bb3bd] max-[620px]:pb-[88px]">
        <div className={`${wrap} flex items-center justify-between gap-5 max-[620px]:flex-col max-[620px]:items-start`}>
          <Brand className="h-[34px]" />
          <p className="text-[10px]">
            © {new Date().getFullYear()} IdaClass Academy · Sedes Oficiales ·{' '}
            <a
              className="hover:text-so-cyan"
              href="https://www.instagram.com/idaclass_oficial/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @idaclass_oficial
            </a>
          </p>
          <a className="hover:text-so-cyan" href="https://wa.link/8liepa" rel="noopener noreferrer" target="_blank">
            Contactar a IdaClass →
          </a>
        </div>
      </footer>

      {/* Barra fija con el CTA, solo en mobile. */}
      <div className="fixed inset-x-0 bottom-0 z-[60] hidden border-t border-white/[.13] bg-[rgba(2,38,55,.97)] px-3.5 pb-[calc(10px_+_env(safe-area-inset-bottom))] pt-2.5 max-[620px]:flex">
        <a className={`${btnPrimary} w-full`} href="#postulacion">
          Postular mi gimnasio <span>→</span>
        </a>
      </div>
    </div>
  )
}
