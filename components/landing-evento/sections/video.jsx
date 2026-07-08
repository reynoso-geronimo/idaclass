'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { hasContent } from '../lib/rich-text'

/**
 * Teaser/adelanto. Es un reproductor: si no hay `embedUrl` (YouTube/Vimeo) la sección
 * NO se muestra. Con `embedUrl`, muestra un póster con botón de play y carga el iframe
 * recién al hacer click.
 */
export default function Video({ eyebrow, title, embedUrl, poster, caption, id = 'adelanto' }) {
  const [playing, setPlaying] = useState(false)
  if (!hasContent(embedUrl)) return null

  return (
    <section id={id} className="py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} center />
        </Reveal>

        <Reveal className="relative mx-auto aspect-video max-w-[920px] overflow-hidden rounded-md border border-le-line bg-le-graphite">
          {playing ? (
            <iframe
              src={`${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
              title={title || 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <>
              {poster?.src ? (
                <Image src={poster.src} alt={poster.alt || ''} fill unoptimized sizes="920px" className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgb(var(--evt-accent-rgb)/0.16),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(53,102,175,0.18),transparent_55%)] bg-le-graphite-2" />
              )}
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Reproducir video"
                className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3.5 bg-[rgba(10,12,16,0.35)]"
              >
                <span className="flex h-[74px] w-[74px] animate-[expo-blink_2s_infinite] items-center justify-center rounded-full bg-le-accent shadow-[0_0_0_0_rgb(var(--evt-accent-rgb)/0.5)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--evt-on-accent)" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {hasContent(caption) && (
                  <span className="rounded-full bg-[rgba(10,12,16,0.6)] px-3 py-[5px] font-mono text-xs tracking-[0.04em] text-[#eaedf1]">
                    {caption}
                  </span>
                )}
              </button>
            </>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
