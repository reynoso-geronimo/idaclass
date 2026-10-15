/**
 * Configuración de la landing "Fitness + Negocio Stream · Programa 01".
 * Powered by RG Consulting Group + IdaClass Academy.
 *
 * Es un objeto de datos puros (JSON-serializable): editá los textos acá.
 * - Resaltá palabras con **doble asterisco**.
 * - Para OCULTAR una sección: borrá su objeto del array `sections` (o vaciá su contenido).
 * - Para AGREGAR una sección: registrala en components/landing-evento/section-registry.js.
 * - La paleta de este evento se ajusta en `theme` (abajo).
 *
 * Paleta: a pedido, todo lo destacado (textos, íconos, botones) va en el naranja de
 * la marca Fitness + Negocios (#fc682c, sacado de logo-4) en vez del celeste de
 * IdaClass. Los fondos azul oscuro quedan igual, y los logos conservan sus colores.
 *
 * Fecha: miércoles 28/10, 14:30 a 16:00 hs (ARG). Aparece en los lugares marcados
 * con `// FECHA` — si cambia, tocá solo esos.
 *
 * A diferencia del ciclo Club de Expertos, este programa no tiene un orador: lo
 * dirigen dos organizaciones (sección `hosts`). También usa `audience` (para quién
 * es), `urgency.steps` (señales → acción) y `closing` (cierre con CTA), y el
 * `problem` compara dos listas a todo el ancho (contrast con `items`, sin `list`).
 *
 * Logos de "Acompañan": IdaClass, Fitness + Negocios y RG van fijos. Los sponsors de
 * este programa todavía se están sumando: se agregan al array `logos` de `partners`.
 */
export const fitnessNegocioStreamConfig = {
  meta: {
    title:
      'Fitness + Negocio Stream: cómo construir un proyecto fitness rentable y sostenible en 2027 | IdaClass Academy',
    description:
      'Stream gratuito en vivo de RG Consulting Group + IdaClass Academy: qué está cambiando en la industria fitness, dónde están las oportunidades y cómo evaluar si son negocio (demanda, precios, costos y margen). Miércoles 28/10, 14:30 hs (ARG), por YouTube.', // FECHA
  },

  // Naranja Fitness + Negocios en lugar del celeste por defecto. `accentRgb` es el mismo
  // color en R G B (para los brillos y fondos translúcidos) y `onAccent` es el texto
  // oscuro sobre los botones naranjas: en blanco no llegaría al contraste mínimo.
  theme: {
    accent: '#fc682c',
    accentRgb: '252 104 44',
    accentStrong: '#e0531a',
    onAccent: '#1d0c03',
  },
  countdownTo: '2026-10-28T14:30:00-03:00', // FECHA
  registerHref: '#inscripcion',

  sections: [
    {
      type: 'topbar',
      // Logo del stream (STREAM · Fitness + Negocios) en versión para fondo oscuro: el
      // original trae el texto en azul marino sobre blanco y en esta barra no se leía, así
      // que va con fondo transparente y el texto en blanco. Sin la línea "Powered by", que
      // a este tamaño no se lee. Más alto que el default (28px) para que "STREAM" se lea.
      logo: {
        src: '/landings/logo-fitness-negocios-stream-fondo-oscuro.png',
        alt: 'Stream Fitness + Negocios',
        height: 40,
      },
      series: 'Evento online gratis · 28 de octubre · 14:30 hs (ARG)', // FECHA
      cta: { label: 'Reservar mi lugar' },
    },

    {
      type: 'hero',
      badge: { num: 'PROGRAMA 01', label: 'Fitness + Negocio Stream' },
      live: 'Transmisión en vivo · Acceso sin costo',
      title: 'Fitness+negocios: cómo construir un proyecto **rentable y sostenible** este 2027',
      subtitle:
        'Descubrí las claves que definirán los **negocios fitness exitosos** este 2027. Cómo evaluar oportunidades, profesionalizar la gestión y brindarte herramientas aplicables para construir un negocio fitness con futuro.',
      // Sin imagen de hero → fondo azul oscuro (fallback), igual que las landings anteriores.
      datetime: [
        { label: 'Día', value: 'Miércoles 28 de octubre', icon: 'calendar', highlight: true }, // FECHA
        { label: 'Horario', value: '14:30 a 16 hs (ARG)', icon: 'clock', highlight: true }, // FECHA
        { label: 'Transmisión', value: 'En vivo por YouTube', icon: 'video' },
        { label: 'Acceso', value: 'Sin costo, con registro previo', icon: 'shield' },
      ],
      ctas: {
        primary: { label: 'Reservá tu lugar gratis →' },
        // "Ver adelanto" aparece SOLO cuando cargás `embedUrl`; abre el video en un diálogo (modal).
        // secondary: { label: 'Ver adelanto', embedUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX' },
      },
      // Sin `spots`: el doc no habla de cupos limitados, así que no se muestra la barra de aforo.
      countdown: { label: 'La transmisión empieza en' },
    },

    {
      type: 'partners',
      label: 'Acompañan:',
      // Estas tres marcas van siempre. Los sponsors se suman a continuación cuando estén
      // confirmados: guardá el logo en /public/landings/ y agregá { src, alt } (con
      // onDark: true si el archivo trae fondo oscuro, como el de Fitness + Negocios).
      logos: [
        // Logo nuevo con margen transparente arriba y abajo, como traen los otros logos de la franja.
        { src: '/landings/logo-idaclass-academy-con-margen.png', alt: 'IdaClass Academy' },
        { src: '/landings/logo-4.jpeg', alt: 'Fitness + Negocios', onDark: true },
        { src: '/landings/logo-1.jpeg', alt: 'RG Consulting Group' },
      ],
    },

    {
      type: 'stats',
      items: [
        { value: '25', label: 'Años de trayectoria' },
        { value: '+50.000', label: 'Graduados en LATAM' },
        { value: '+300', label: 'Gimnasios impulsados' },
      ],
    },

    {
      type: 'problem',
      eyebrow: 'Lo que está pasando ahora',
      title: 'El fitness **está cambiando**. ¿Vas a esperar a que cambie para reaccionar?',
      intro:
        'Aparecen nuevas demandas, nuevos modelos de servicio, nuevas especializaciones y nuevas formas de relacionarse con los clientes. Pero detectar una tendencia no alcanza: hay que saber dónde está la oportunidad y si realmente puede convertirse en negocio.',
      // Sin `list`: el contraste ocupa todo el ancho y compara las dos listas punto por punto.
      contrast: {
        bad: {
          tag: 'Lo que pasa hoy',
          items: [
            'Invertís tiempo o dinero sin validar primero si existe una demanda real.',
            'Tenés una buena idea, pero no sabés si el modelo puede ser rentable.',
            'El negocio depende demasiado de vos y cuesta ordenar la operación.',
            'Mirás lo que pasa en la industria cuando otros ya están tomando posición.',
          ],
        },
        good: {
          tag: 'Lo que vas a llevarte',
          items: [
            'Identificar qué está cambiando y qué señales vale la pena seguir.',
            'Detectar nuevas oportunidades antes de invertir recursos.',
            'Evaluar si una oportunidad tiene demanda, modelo y números.',
            'Definir qué decisión tiene sentido tomar ahora para llegar mejor preparado a 2027.',
          ],
        },
      },
      bridge:
        'El fitness está cambiando más rápido que nunca. La pregunta no es si tu negocio tiene que adaptarse, sino **cuándo y cómo**. Este stream es para llegar a 2027 **un paso adelante**.',
    },

    {
      type: 'outcomes',
      eyebrow: 'Ejes estratégicos del programa',
      title: 'De la señal del mercado a una **decisión de negocio**.',
      intro:
        'No se trata de adivinar el futuro. Se trata de aprender a leer señales, detectar oportunidades y evaluar si tienen sentido para tu proyecto o carrera.',
      cards: [
        {
          tag: 'Pilar 01',
          title: 'Qué está cambiando',
          text: 'Radar de industria, nuevas demandas, tecnología, IA, especialización y modelos emergentes.',
        },
        {
          tag: 'Pilar 02',
          title: 'Dónde están las oportunidades',
          text: 'Necesidades que pueden convertirse en propuestas de valor, servicios, nichos o líneas de negocio.',
        },
        {
          tag: 'Pilar 03',
          title: 'Cómo saber si es negocio',
          text: 'Demanda, propuesta, precios, costos, margen, inversión, capacidad operativa y validación.',
        },
        {
          tag: 'Pilar 04',
          title: 'Qué hacer ahora',
          text: 'Qué observar, qué validar, qué mejorar y qué decisiones tomar para construir un 2027 más sólido.',
        },
      ],
    },

    {
      type: 'audience',
      eyebrow: 'Para quién es',
      title: 'Si trabajás, liderás o querés construir algo en fitness, **esto es para vos**.',
      intro: 'Un espacio pensado para conectar con todos los eslabones de la cadena de valor del sector fitness.',
      items: [
        {
          title: 'Entrenadores e instructores',
          text: 'Para quienes quieren pensar su profesión como un proyecto sostenible.',
        },
        {
          title: 'Coordinadores y gerentes',
          text: 'Para quienes toman decisiones sobre equipos, clientes, operación, resultados y crecimiento.',
        },
        {
          title: 'Emprendedores y dueños',
          text: 'Para quienes quieren abrir, mejorar, profesionalizar o expandir un proyecto fitness.',
        },
      ],
      quote:
        '“No importa si hoy estás empezando, si ya tenés un negocio o si querés escalarlo. Lo importante es entender **qué está cambiando y cómo tomar posición**.”',
    },

    {
      type: 'hosts',
      eyebrow: 'Una mirada 360° de la industria',
      title: 'Lo que está pasando en el mercado, **conectado con la realidad del negocio**.',
      intro:
        'Fitness + Negocio Stream reúne la experiencia de consultoría y gestión de RG Consulting Group + la mirada educativa de IdaClass Academy.',
      items: [
        {
          logo: { src: '/landings/logo-1.jpeg', alt: 'RG Consulting Group' },
          kicker: 'Gestión + negocio',
          name: 'RG Consulting Group',
          text: 'Mirada enfocada en gestión, estructura, rentabilidad y toma de decisiones.',
        },
        {
          // Logo nuevo de IdaClass Academy (PNG transparente, para fondo claro).
          logo: { src: '/landings/logo-idaclass-academy.png', alt: 'IdaClass Academy' },
          kicker: 'Educación + industria',
          name: 'IdaClass Academy',
          text: 'Más de 25 años formando profesionales y una comunidad conectada con gimnasios, entrenadores, especialistas y nuevos modelos de formación en Latinoamérica.',
        },
      ],
      highlight: { label: 'Pregunta central', text: '¿Esta tendencia puede convertirse **realmente en un negocio**?' },
    },

    {
      type: 'agenda',
      eyebrow: 'Mapa del programa',
      title: 'Así vamos a recorrer la hora.',
      items: [
        { title: 'El mercado del fitness que viene', text: 'Qué está cambiando y qué señales seguir de cara a 2027.' },
        { title: 'Del cambio a la oportunidad', text: 'Nuevos servicios, especializaciones, modelos híbridos y necesidades.' },
        {
          title: 'La oportunidad bajo la lupa',
          text: 'Demanda, propuesta, precio, costos, margen, inversión y capacidad operativa.',
        },
        { title: 'Gestión y decisiones clave', text: 'Qué ordenar, qué medir y qué decisiones cambian la sostenibilidad.' },
        { title: 'Q&A en vivo', text: 'Preguntas reales sobre proyectos, oportunidades, números y decisiones.' },
      ],
    },

    {
      type: 'urgency',
      eyebrow: 'El costo de llegar tarde',
      title: 'Muchas oportunidades no desaparecen. **Se llenan antes de que decidas entrar.**',
      intro:
        '2027 no empieza en enero. Empieza con las decisiones que tomás hoy: qué aprendés, qué observás, qué validás y qué empezás a profesionalizar.',
      steps: ['Señales', 'Oportunidades', 'Negocio', 'Acción'],
    },

    {
      type: 'testimonials',
      eyebrow: 'Comunidad IdaClass',
      title:
        'Una conversación pensada para profesionales que quieren entender **el negocio detrás de la profesión**.',
      // Frases de la comunidad tal como vienen en el doc: sin nombre, rol ni estrellas.
      items: [
        {
          quote:
            '“No alcanza con saber entrenar. Cuando empezás a pensar tu proyecto como negocio, las preguntas cambian.”',
        },
        {
          quote:
            '“Entender qué está pasando en el mercado ayuda a dejar de copiar modelos y empezar a tomar decisiones propias.”',
        },
        {
          quote:
            '“La oportunidad no es solamente encontrar una tendencia. Es saber si podés convertirla en una propuesta que funcione.”',
        },
      ],
    },

    {
      type: 'register',
      sideEyebrow: 'Atención',
      sideTitle: 'El streaming es gratuito. **La información que te llevás** puede cambiar cómo encarás 2027.',
      sideIntro: 'Registrate para recibir el acceso y participar del encuentro en vivo.',
      benefits: [
        'Acceso al streaming online en vivo.',
        'Radar de tendencias y nuevas demandas.',
        'Marco para evaluar oportunidades como negocio.',
        'Claves de números, gestión y decisiones.',
        'Preguntas y respuestas en vivo.',
      ],
      title: 'Registro rápido',
      subtitle: '100% gratis · Solo requiere registro previo',
      submitLabel: 'Asegurar mi cupo gratuito →',
      privacy: '🔒 Usamos tus datos solo para enviarte el acceso y la información del evento.',
      source: 'fitness-negocio-stream-01',
      fields: {
        email: { label: 'Email', placeholder: 'tu@email.com' },
      },
      // Solo mensaje de éxito: el lead queda en la DB y una automatización externa
      // le envía el acceso por WhatsApp (mismo flujo que los otros eventos).
      thankyou: {
        title: '✅ ¡Tu lugar está reservado!',
        intro:
          'Te vamos a enviar el acceso al streaming por WhatsApp antes de que empiece — asegurate de tener bien tu número. ¡Nos vemos el miércoles 28/10 a las 14:30 hs!', // FECHA
      },
    },

    {
      type: 'faq',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Para quién es este programa?',
          a: 'Para entrenadores, instructores, coordinadores, gerentes, emprendedores, dueños de gimnasios, estudios y profesionales del sector.',
        },
        {
          q: '¿Tengo que tener un negocio?',
          a: 'No. También es para quienes están pensando en emprender o trabajan como profesionales independientes.',
        },
        { q: '¿Es gratuito?', a: 'Sí. El acceso al streaming es sin costo y requiere registro previo.' },
        {
          q: '¿Hablan solamente de tendencias?',
          a: 'No. El programa conecta qué está cambiando, dónde están las oportunidades y cómo evaluar si son negocio.',
        },
        {
          q: '¿Qué aprendo sobre números?',
          a: 'Demanda, propuesta, precio, costos, margen, inversión y capacidad operativa.',
        },
        { q: '¿Quién organiza?', a: 'RG Consulting Group, en alianza con IdaClass Academy.' },
      ],
    },

    {
      type: 'closing',
      eyebrow: 'Fitness + Negocio Stream · Programa 01',
      title: 'El mercado **no avisa** cuando cambia.',
      text: 'Entendé las señales. Detectá las oportunidades. Evaluá el negocio. Empezá a prepararte hoy para construir un proyecto más sólido en 2027.',
      cta: { label: 'Quiero reservar mi lugar gratis →' },
      meta: '28 de octubre · 14:30 hs · Online · Acceso sin costo', // FECHA
    },

    {
      type: 'footer',
      brand: { text: 'Fitness', accent: ' + Negocio', sub: 'Stream' },
      claim: 'Powered by RG Consulting Group + IdaClass Academy.',
      eventLine: 'Programa 01 · 28/10 · 14:30 hs (ARG)', // FECHA
      links: [
        { label: 'Instagram', href: 'https://www.instagram.com/fitnessnegocios.stream/' },
        { label: 'Comunidad en WhatsApp', href: 'https://whatsapp.com/channel/0029Vb9IX2yDp2QAwfnIGT37' },
      ],
      text: '© Fitness + Negocios Stream · Todos los derechos reservados.',
    },

    {
      type: 'sticky-cta',
      dateLabel: 'Fitness + Negocio Stream · 28/10', // FECHA
      cta: { label: 'Reservar' },
    },
  ],
}
