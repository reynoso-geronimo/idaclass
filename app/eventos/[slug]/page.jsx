import { notFound } from 'next/navigation'
import { LandingEvento } from '@/components/landing-evento'
import { EVENTOS, getEvento } from '../_configs'

// Pre-genera una ruta estática por cada evento del registro.
export function generateStaticParams() {
  return Object.keys(EVENTOS).map((slug) => ({ slug }))
}

export async function generateMetadata(props) {
  const params = await props.params;
  const config = getEvento(params.slug)
  if (!config?.meta) return {}
  return {
    title: config.meta.title,
    description: config.meta.description,
    openGraph: { title: config.meta.title, description: config.meta.description },
  }
}

export default async function EventoPage(props) {
  const params = await props.params;
  const config = getEvento(params.slug)
  if (!config) notFound()
  return <LandingEvento config={config} />
}
