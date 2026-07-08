import { Container, SectionHead } from '../lib/primitives'
import { Reveal } from '../lib/reveal'
import { renderRich, hasContent } from '../lib/rich-text'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

/** Preguntas frecuentes usando el Accordion de shadcn. */
export default function Faq({ eyebrow, title, items }) {
  if (!hasContent(items)) return null

  return (
    <section id="faq" className="border-t border-le-line bg-le-graphite py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} center />
        </Reveal>

        <Reveal className="mx-auto max-w-[680px]">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-le-line">
                <AccordionTrigger className="text-left text-[15.5px] font-semibold text-le-fg no-underline hover:no-underline [&>svg]:text-le-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[640px] text-sm leading-relaxed text-le-muted">
                  {renderRich(item.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  )
}
