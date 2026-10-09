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

## Opciones puntuales de algunas secciones

Todas son opcionales; si no las cargás, la sección se ve como siempre.

- `hero.badge.size: 'lg'` — agranda el antetítulo (la pastilla del ciclo/episodio).
  Sin `badge.num`, la pastilla se muestra solo con el texto de `badge.label`.
- `hero.image` — además de cambiar el fondo, decide el layout del hero:
  - **con imagen**: todo apilado en una columna a la izquierda sobre la foto
    (antetítulo, título, bajada, pastillas de fecha, CTA, countdown). Diseño original.
  - **sin imagen + `countdown`**: dos columnas en ≥1024px. Izquierda solo el relato
    (antetítulo, título, bajada); derecha un **panel de inscripción** que junta el
    countdown, los cupos, la fecha/horario (`datetime` como filas) y el CTA con su
    `note`. En mobile el panel se apila debajo de la bajada.
  - **sin imagen ni `countdown`**: todo apilado en una columna centrada y más ancha.
- `speaker.items` — array de oradores (una ficha por item) cuando el evento tiene
  más de un expositor. Cada item toma las mismas props que la ficha simple
  (`kicker`, `name`, `role`, `bio`, `bullets`, `tags`, `stats`, `photo`).
  Si no cargás `items`, la sección sigue funcionando con las props sueltas
  (`{ type: 'speaker', name, role, ... }`). También acepta `intro` en el encabezado.
- `partners` — si los logos entran en el ancho se muestran fijos; si no caben
  (típicamente en mobile) pasan solos a carrusel infinito (marquee CSS, se pausa
  con el mouse y queda estático con `prefers-reduced-motion`). La decisión se
  recalcula al cambiar el ancho. `partners.duration` (segundos) pisa la velocidad
  del carrusel por evento; por defecto ~4,5 s por logo.
- `problem.listTitle` — título que se muestra arriba de la lista de dolores
  (útil cuando el documento trae "el problema" y "los puntos de dolor" separados).
- `problem.contrast.bad/good.items` — convierte cada columna del "VS" en una lista
  (✕ en `bad`, ✓ en `good`) para comparar punto por punto; `icon`, `title` y `text`
  pasan a ser opcionales. Si además no cargás `list`/`listTitle` (ni `image`), el
  contraste ocupa todo el ancho y el `bridge` va debajo en un recuadro.
- `outcomes.intro` — bajada bajo el título de los pilares.
- `urgency.steps` — cadena de pasos numerados con flechas
  (`['Señales', 'Oportunidades', 'Negocio', 'Acción']`); el último se resalta. En
  fila desde 1024px, apilada debajo.
- `hero.datetime[].icon: 'video'` — ícono de transmisión (además de `calendar`,
  `clock`, `duration` y `shield`).
- `testimonials.items[]` sin `name`/`role`/`avatar` — la tarjeta muestra solo la
  frase (sirve para "voces de la comunidad" sin atribución).
- `footer.claim`, `footer.eventLine`, `footer.contact` (`{ title, text, email, phone }`),
  `footer.links` (`[{ label, href }]`) y `footer.cta` — arman el footer ampliado
  (marca + contacto + enlaces + CTA) arriba de la línea de copyright (`footer.text`).
  Con solo `brand` y `text` el footer sigue siendo la barra simple de una fila.
  Los `links` externos (`http…`, ej. Instagram o un canal de WhatsApp) abren en otra pestaña.

## Secciones para programas sin orador

Para eventos que no siguen el formato "Club de Expertos" (ej. `fitness-negocio-stream`,
que dirigen dos organizaciones) hay tres secciones más. Como todas, se ocultan solas
si les falta el contenido esencial.

- `audience` — "para quién es": `{ eyebrow, title, intro, items: [{ title, text, tag? }], quote? }`.
  Tarjetas numeradas solas (01, 02…; `tag` pisa el número) y una frase de cierre.
- `hosts` — "quiénes organizan": `{ eyebrow, title, intro, items: [{ logo: { src, alt }, kicker, name, text }], highlight?: { label, text } }`.
  Una tarjeta por organización con su logo en tarjeta blanca; con dos, las une un
  "+" en desktop. `highlight` destaca una pregunta o idea central al pie. Para
  personas seguí usando `speaker`.
- `closing` — cierre con CTA final antes del footer: `{ eyebrow, title, text, cta: { label, href? }, meta }`.
  `meta` es la línea de datos del evento ("28 de octubre · 14:30 hs · Online").

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
                           outcomes, audience, speaker, hosts, agenda,
                           testimonials, urgency, register-form, faq,
                           closing, footer, sticky-cta
```

## Imágenes

Las secciones usan `next/image` con `unoptimized` para aceptar cualquier `src`
(local `/public`, externa o data-URI) sin configurar `remotePatterns`. Si vas a
usar assets locales optimizados, podés quitar `unoptimized` en la sección puntual.
