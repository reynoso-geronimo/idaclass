import { Container } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

export default function Footer({ brand, text }) {
  if (!hasContent(brand) && !hasContent(text)) return null

  return (
    <footer className="border-t border-le-line bg-le-bg py-11">
      <Container className="flex flex-wrap items-center justify-between gap-5">
        {hasContent(brand) && (
          <span className="font-barlow-c text-[19px] font-bold tracking-tight text-le-fg">
            {brand.text}
            {brand.accent && <span className="text-le-accent">{brand.accent}</span>}
            {brand.sub && <span className="ml-1 text-[0.7em] font-normal text-le-muted">{brand.sub}</span>}
          </span>
        )}
        {hasContent(text) && <p className="text-xs text-le-muted">{text}</p>}
      </Container>
    </footer>
  )
}
