import Image from 'next/image'
import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'

/** Ficha del orador/expositor: foto (o iniciales), bio, bullets, tags y stats. */
export default function Speaker({ eyebrow, title, kicker, name, role, bio, bullets, tags, stats, photo }) {
  if (!hasContent(name)) return null

  return (
    <section id="ponente" className="py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} center />
        </Reveal>

        <Reveal className="grid overflow-hidden rounded-md border border-le-line bg-le-graphite md:grid-cols-[360px_1fr]">
          {/* Foto o iniciales */}
          <div className="relative min-h-[380px] bg-le-graphite-2">
            {photo?.src ? (
              <Image src={photo.src} alt={name} fill unoptimized sizes="360px" className="object-cover" />
            ) : (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center gap-3.5 bg-[radial-gradient(circle_at_50%_30%,rgb(var(--evt-accent-rgb)/0.12),transparent_60%)]">
                {photo?.initials && (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-le-accent to-le-navy font-barlow-c text-3xl font-bold text-le-on-accent">
                    {photo.initials}
                  </div>
                )}
              </div>
            )}
            {photo?.badge && (
              <div className="absolute bottom-4 left-4 z-[2] rounded-sm bg-le-accent px-2.5 py-1.5 font-mono text-[11px] font-bold uppercase text-le-on-accent">
                {photo.badge}
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="p-8 md:p-9">
            {hasContent(kicker) && (
              <div className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-le-accent">{kicker}</div>
            )}
            <h3 className="mt-2 font-barlow-c text-[27px] font-bold uppercase text-le-fg">{name}</h3>
            {hasContent(role) && <div className="mt-1 text-sm text-le-muted">{role}</div>}
            {hasContent(bio) && <p className="mt-4 text-[14.5px] leading-relaxed text-le-muted">{renderRich(bio)}</p>}

            {hasContent(bullets) && (
              <ul className="mt-[18px] flex flex-col gap-2">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] text-[#cbd3dc]">
                    <span className="flex-shrink-0 text-le-accent">✓</span>
                    <span>{renderRich(b)}</span>
                  </li>
                ))}
              </ul>
            )}

            {hasContent(tags) && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((t, i) => (
                  <span key={i} className="rounded-full border border-le-line px-2.5 py-1.5 text-[11.5px] text-le-muted">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {hasContent(stats) && (
              <div className="mt-[22px] flex flex-wrap gap-6 border-t border-le-line pt-5">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="font-barlow-c text-xl font-bold text-le-accent">{s.value}</div>
                    <div className="text-[11px] uppercase tracking-wide text-le-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
