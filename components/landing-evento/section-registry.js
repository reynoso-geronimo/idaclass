import Topbar from './sections/topbar'
import Hero from './sections/hero'
import Partners from './sections/partners'
import Stats from './sections/stats'
import Problem from './sections/problem'
import Video from './sections/video'
import Outcomes from './sections/outcomes'
import Speaker from './sections/speaker'
import Agenda from './sections/agenda'
import Testimonials from './sections/testimonials'
import Urgency from './sections/urgency'
import RegisterForm from './sections/register-form'
import Faq from './sections/faq'
import Footer from './sections/footer'
import StickyCta from './sections/sticky-cta'

/**
 * Mapa `type` -> componente. Para AGREGAR una sección nueva:
 *   1. Creá components/landing-evento/sections/mi-seccion.jsx (que devuelva null si le falta contenido)
 *   2. Importala y sumala acá con una clave de `type`
 *   3. Usala en el config: { type: 'mi-seccion', ...props }
 */
export const SECTION_REGISTRY = {
  topbar: Topbar,
  hero: Hero,
  partners: Partners,
  stats: Stats,
  problem: Problem,
  video: Video,
  outcomes: Outcomes,
  speaker: Speaker,
  agenda: Agenda,
  testimonials: Testimonials,
  urgency: Urgency,
  register: RegisterForm,
  faq: Faq,
  footer: Footer,
  'sticky-cta': StickyCta,
}
