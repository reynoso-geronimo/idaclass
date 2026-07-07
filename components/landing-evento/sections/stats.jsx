import { Container } from '../lib/primitives'
import { hasContent } from '../lib/rich-text'

/** Franja de números de prueba (trayectoria, graduados, etc). */
export default function Stats({ items }) {
  if (!hasContent(items)) return null

  return (
    <div className="border-b border-le-line bg-le-bg py-[26px]">
      <Container className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-center">
        {items.map((item, i) => (
          <div key={i}>
            <div className="font-barlow-c text-[28px] font-bold text-le-accent">{item.value}</div>
            <div className="text-[11.5px] uppercase tracking-[0.05em] text-le-muted">{item.label}</div>
          </div>
        ))}
      </Container>
    </div>
  )
}
