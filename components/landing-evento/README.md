# Landing de eventos reutilizable (`landing-evento`)

Sistema **dirigido por configuración** para armar landings de eventos/masterclasses
(estilo "Club de Expertos") sin duplicar código. Cambiás textos en un archivo de
datos, y las secciones se muestran, ocultan o reordenan según ese archivo.

## Uso rápido

```jsx
import { LandingEvento } from '@/components/landing-evento'
import { hipertrofiaConfig } from '@/app/eventos/_configs/hipertrofia'

export default function Page() {
  return <LandingEvento config={hipertrofiaConfig} />
}
```

Ya hay una ruta dinámica lista: **`/eventos/[slug]`**. La demo del modelo vive en
**`/eventos/hipertrofia`** (config en `app/eventos/_configs/hipertrofia.js`).

## Editar textos

Toda la copy vive en el objeto `config` (ver `app/eventos/_configs/hipertrofia.js`).
Es **JSON-serializable** (datos puros, sin JSX): podés mantenerlo como `.js` o `.json`.

- Resaltar palabras con el color de acento: envolvelas en `**doble asterisco**`.
  Ej: `"programá como un **experto**"`.
- Los saltos de sección se controlan por el orden del array `config.sections`.

## Quitar una sección

Dos formas, ambas válidas:

1. **Borrala del array** `config.sections` (o comentala).
2. **Vaciá su contenido**: cada sección devuelve `null` si le falta el dato esencial
   (ej: `problem` sin `title` ni `list`, `speaker` sin `name`, `faq` sin `items`).
   Así "sin texto = sin sección", sin tocar código.

## Reordenar secciones

El orden de render = el orden del array `config.sections`. Movés los objetos y listo.

## Agregar una sección nueva

1. Creá `components/landing-evento/sections/mi-seccion.jsx`. Que devuelva `null`
   si no tiene contenido (usá el helper `hasContent`):

   ```jsx
   import { Container, SectionHead } from '../lib/primitives'
   import { hasContent } from '../lib/rich-text'

   export default function MiSeccion({ eyebrow, title, items }) {
     if (!hasContent(items)) return null
     return (
       <section className="py-20 md:py-24">
         <Container>
           <SectionHead eyebrow={eyebrow} title={title} />
           {/* ... */}
         </Container>
       </section>
     )
   }
   ```

2. Registrala en `components/landing-evento/section-registry.js`:

   ```js
   import MiSeccion from './sections/mi-seccion'
   export const SECTION_REGISTRY = { /* ... */, 'mi-seccion': MiSeccion }
   ```

3. Usala en el config: `{ type: 'mi-seccion', eyebrow: '...', title: '...', items: [...] }`.

Si usás un `type` no registrado, el renderer lo ignora y avisa por consola en dev.

## Cambiar la marca / colores (tema)

La paleta se define con CSS vars `--evt-*` (default en `app/globals.css`). Para
cambiarla por evento, pasá `config.theme`:

```js
theme: {
  accent: '#ff5a1f',
  accentRgb: '255 90 31', // triplete R G B (para transparencias)
  bg: '#0b0b0f',
  // graphite, graphite2, fg, muted, line, accentStrong, navy, success, danger, onAccent
}
```

Los componentes usan clases Tailwind `le-*` (`bg-le-graphite`, `text-le-accent`,
`border-le-line`, etc.) que resuelven a esas vars. Cualquier clave omitida usa el default.

## Formulario de registro

La sección `register` postea a **`/api/registro-evento`** con el shape que ese
endpoint espera hoy: `{ nombre, apellido, email, telefono }` (todos requeridos,
validados con Zod). Se pueden personalizar labels/placeholders vía `fields`, pero
cambiar el conjunto de campos requiere ajustar también el endpoint y el modelo
`RegistroEvento`. El teléfono usa el componente `PhoneInput` del proyecto.

La pantalla de "gracias" (`thankyou`) soporta acciones tipo `link` y `share`
(WhatsApp con mensaje pre-armado, `{nombre}` se reemplaza) y un link de Google
Calendar armado desde `thankyou.calendar`.

## Estructura

```
components/landing-evento/
  index.js                 barrel de exports
  landing-evento.jsx       <LandingEvento config /> — renderer (client)
  section-registry.js      type -> componente
  lib/
    primitives.jsx         Container, SectionHead, CtaButton, scrollToId
    rich-text.jsx          renderRich(**resaltado**), hasContent
    reveal.jsx             fade-up on scroll (react-intersection-observer)
    use-countdown.js       hook de cuenta regresiva (evita mismatch de hidratación)
    calendar.js            Google Calendar + WhatsApp share URLs
    theme.js               config.theme -> CSS vars --evt-*
  sections/                topbar, hero, partners, stats, problem, video,
                           outcomes, speaker, agenda, testimonials, urgency,
                           register-form, faq, footer, sticky-cta
```

## Imágenes

Las secciones usan `next/image` con `unoptimized` para aceptar cualquier `src`
(local `/public`, externa o data-URI) sin configurar `remotePatterns`. Si vas a
usar assets locales optimizados, podés quitar `unoptimized` en la sección puntual.
