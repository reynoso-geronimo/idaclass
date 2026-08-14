/**
 * Configuración de la landing "Club de Expertos — Suplementación Nutricional Avanzada".
 *
 * Es un objeto de datos puros (JSON-serializable): editá los textos acá.
 * - Resaltá palabras con **doble asterisco**.
 * - Para OCULTAR una sección: borrá su objeto del array `sections` (o vaciá su contenido).
 * - Para AGREGAR una sección: registrala en components/landing-evento/section-registry.js.
 * - Para cambiar la paleta de este evento: descomentá y ajustá `theme`.
 *
 * Nota: el número de episodio quedaba marcado en rojo en el documento fuente
 * ("[EPISODIO]" / "EP. [XX]"), así que no se muestra en ninguna sección.
 */
export const suplementacionConfig = {
  meta: {
    title: 'Suplementación deportiva: qué funciona y qué no | Club de Expertos IdaClass',
    description:
      'Masterclass gratuita en vivo con la Lic. Fernanda Garat. Aprendé a decidir tu suplementación con evidencia: rendimiento físico, cognitivo y biohacking sin humo. 26/8 18:30 hs (ARG).',
  },

  // theme: { accent: '#1cb1e5', accentRgb: '28 177 229', bg: '#0a0c10' },
  countdownTo: '2026-08-26T18:30:00-03:00',
  registerHref: '#inscripcion',

  sections: [
    {
      type: 'topbar',
      logo: { text: 'Ida', accent: 'Class', sub: 'Academy' },
      series: 'Club de Expertos',
      cta: { label: 'Reservar lugar' },
    },

    {
      type: 'hero',
      // Sin `num`: el "EP. [XX]" del documento estaba en rojo (sacar).
      // `size: 'lg'` agranda el antetítulo, como pedía la nota del documento.
      badge: { label: 'Club de Expertos · IdaClass Academy', size: 'lg' },
      live: 'En vivo y 100% online · Acceso exclusivo con registro',
      title: 'Suplementación deportiva: **qué funciona, qué no** y cómo decidir con evidencia',
      subtitle:
        'Dejá de elegir suplementos por moda o recomendaciones de redes. Aprendé cómo **potenciar tus resultados** y alcanzar tus objetivos.',
      // Sin imagen de hero → se muestra el fondo azul oscuro (fallback), igual que en hipertrofia.
      datetime: [
        { label: 'Día', value: 'Miércoles 26 de agosto', icon: 'calendar', highlight: true },
        { label: 'Horario', value: '18:30 hs (ARG)', icon: 'clock', highlight: true },
        { label: 'Duración', value: '90 min en vivo', icon: 'duration' },
        { label: 'Modalidad', value: '100% online en vivo' },
        { label: 'Acceso', value: 'Gratis vía YouTube', icon: 'shield' },
      ],
      ctas: {
        primary: { label: 'Quiero asegurar mi cupo gratuito →' },
        // "Ver adelanto" aparece SOLO cuando cargás `embedUrl`; abre el video en un diálogo (modal).
        // secondary: { label: 'Ver adelanto', embedUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX' },
      },
      note: '90 minutos de contenido avanzado, sin mitos ni promesas mágicas.',
      countdown: {
        label: 'Se cierran las inscripciones en',
        spots: { label: '🔥 Cupos reservados', value: '72%', percent: 72 },
      },
    },

    {
      type: 'partners',
      label: 'Acompañan:',
      // Logos heredados del ciclo (mismos partners que el episodio anterior).
      // Reemplazalos si este episodio tiene otros acompañantes.
      logos: [
        { src: '/landings/logo-1.jpeg', alt: 'RG Consulting Group' },
        { src: '/landings/logo-2.jpeg', alt: 'Mis Actividades' },
        { src: '/landings/logo-3.jpeg', alt: 'MIR Fitness' },
        { src: '/landings/logo-4.jpeg', alt: 'Fitness + Negocios', onDark: true },
      ],
    },

    {
      type: 'stats',
      items: [
        { value: '25', label: 'Años de trayectoria' },
        { value: '+50.000', label: 'Graduados en LATAM' },
        { value: '4', label: 'Países con presencia' },
        { value: '80%', label: 'Empleabilidad de nuestros estudiantes' },
      ],
    },

    {
      type: 'problem',
      eyebrow: 'Lo que pasa todos los días en el mundo fitness',
      title: '¿Tomás suplementos, pero realmente sabés por qué los estás tomando?',
      intro:
        'Proteínas, creatina, vitaminas, pre-entrenos... La cantidad de productos disponibles creció muchísimo, pero también creció la confusión. Un día un suplemento parece imprescindible; al día siguiente, alguien dice que es inútil. En medio de tanta información, cuesta distinguir evidencia científica de marketing. El problema no es tener acceso a suplementos: el problema es no tener criterio para decidir.',
      contrast: {
        bad: {
          icon: '📱',
          tag: 'Lo que hacés hoy',
          title: 'Seguís consejos de Instagram',
          text: 'Elegís productos porque alguien en redes los recomienda, porque están de moda o porque prometen resultados rápidos.',
        },
        good: {
          icon: '🔬',
          tag: 'Lo que aprendés acá',
          title: 'Decidís con criterio',
          text: 'Aprendés a interpretar la evidencia, entender el objetivo de cada suplemento y evaluar cuándo realmente tiene sentido utilizarlo.',
        },
      },
      listTitle:
        'Si alguna de estas situaciones te resulta familiar, necesitás entender mejor la suplementación.',
      list: [
        'Comprás suplementos **sin saber si realmente los necesitás**. Tenés una lista de productos, pero no un criterio claro para decidir.',
        'No sabés diferenciar **evidencia científica de marketing**. Un estudio, un influencer y una publicidad pueden sonar igual de convincentes.',
        'Pensás que **más suplementos significa mejores resultados**. Terminás acumulando productos sin entender qué aporta realmente cada uno.',
        'Escuchás **recomendaciones contradictorias** todo el tiempo: "esto es peligroso", "esto es imprescindible". ¿Dónde está realmente la evidencia?',
      ],
      bridge:
        '**Por eso existe este episodio.** En una hora y media vas a aprender a mirar la suplementación desde otra perspectiva: menos hype, más criterio. Vas a entender qué lugar puede ocupar un suplemento dentro de una estrategia de rendimiento.',
    },

    {
      type: 'outcomes',
      eyebrow: 'Los 4 pilares críticos de la charla',
      title: 'No se trata de tomar más. Se trata de **saber cómo hacerlo**.',
      cards: [
        {
          tag: 'Pilar 01',
          title: 'La ciencia detrás de la suplementación',
          text: 'Qué significa realmente que un suplemento tenga evidencia científica y cómo diferenciar resultados consistentes de afirmaciones exageradas.',
        },
        {
          tag: 'Pilar 02',
          title: 'Rendimiento físico: qué puede aportar realmente',
          text: 'Suplementos utilizados en el contexto deportivo. Qué sabemos, para quién pueden ser útiles y qué expectativas son razonables.',
        },
        {
          tag: 'Pilar 03',
          title: 'Rendimiento cognitivo y biohacking sin humo',
          text: 'Energía, concentración, recuperación y rendimiento mental. Qué conceptos de biohacking tienen respaldo y cuáles conviene mirar con mayor cautela.',
        },
        {
          tag: 'Pilar 04',
          title: 'Cómo construir una estrategia inteligente',
          text: 'No existe un "stack" universal que funcione igual para todos. Aprendé a pensar en objetivos antes de tomar decisiones.',
        },
      ],
      bonus:
        '🚀 **Anticipo exclusivo:** al cierre de la charla te mostramos cómo seguir profundizando en suplementación, nutrición y rendimiento dentro de la formación profesional de IdaClass Academy.',
    },

    {
      type: 'speaker',
      eyebrow: 'Quién dicta la charla',
      title: 'Ciencia aplicada al rendimiento, sin promesas mágicas',
      name: 'Fernanda Garat',
      role: 'Licenciada en Nutrición — UBA · M.N. 3652',
      bio: 'Licenciada en Nutrición por la Universidad de Buenos Aires, especializada en nutrición deportiva y actividad física. Su enfoque combina conocimiento científico con aplicación práctica para ayudar a profesionales y personas activas a tomar decisiones más informadas sobre alimentación, suplementación y rendimiento.',
      bullets: [
        'Nutricionista en instituciones deportivas como **Club Deportivo Riestra** y **Vélez Sarsfield**.',
        'Antropometrista, docente universitaria y especialista en nutrición deportiva.',
        'Experiencia en el ámbito de la salud, la alimentación vegetariana y la nutrición funcional.',
      ],
      tags: [
        'Nutrición deportiva',
        'Suplementación',
        'Rendimiento físico',
        'Nutrición funcional',
        'Antropometría',
        'Docencia universitaria',
      ],
      stats: [
        { value: 'UBA', label: 'Licenciada en Nutrición' },
        { value: 'M.N. 3652', label: 'Matrícula profesional' },
        { value: 'Deporte', label: 'Instituciones deportivas' },
        { value: 'Docencia', label: 'Formación universitaria' },
      ],
      // Si borrás `src` (o falta el archivo), cae al fallback de iniciales: { initials: 'FG', badge: '...' }
      photo: { src: '/landings/fernanda-garat.jpg', badge: 'Expositora' },
    },

    {
      type: 'agenda',
      eyebrow: 'Mapa de la charla',
      title: 'Así vamos a recorrer los 90 minutos',
      intro:
        'Un recorte práctico sobre suplementación nutricional, rendimiento y biohacking, concentrado en los conceptos que necesitás conocer para tomar mejores decisiones.',
      items: [
        {
          title: 'Fundamentos: suplemento, necesidad y evidencia',
          text: 'Qué es realmente un suplemento nutricional, qué lugar ocupa dentro de una estrategia de rendimiento y por qué no todos necesitan suplementarse de la misma manera.',
        },
        {
          title: 'Suplementos con mayor respaldo científico',
          text: 'Una mirada práctica sobre los suplementos más utilizados en deporte: qué sabemos sobre creatina, proteínas, cafeína y otras herramientas habituales del rendimiento.',
        },
        {
          title: 'Mitos, marketing y falsas promesas',
          text: 'Cómo detectar afirmaciones exageradas, interpretar la calidad de la evidencia y evitar caer en recomendaciones basadas únicamente en tendencias.',
        },
        {
          title: 'Biohacking y rendimiento cognitivo',
          text: 'Concentración, energía, recuperación y rendimiento mental. Qué estrategias tienen sentido, cuáles requieren cautela y dónde termina la ciencia y empieza el marketing.',
        },
        {
          title: 'Cómo pensar una estrategia de suplementación',
          text: 'Objetivo → contexto → alimentación → entrenamiento → recuperación → suplementación. El objetivo no es sumar productos: es tomar mejores decisiones.',
        },
      ],
    },

    {
      type: 'testimonials',
      eyebrow: 'Lo que dicen de Club de Expertos',
      title: 'Profesionales que ya vivieron un episodio del ciclo',
      items: [
        {
          stars: 5,
          quote:
            '"Vengo a cada episodio porque siempre termino llevándome algo que puedo aplicar con mis alumnos. El nivel de contenido está muy por encima del típico contenido gratuito que encontrás en redes."',
          role: 'Entrenador personal',
        },
        {
          stars: 5,
          quote:
            '"Lo que más valoro es que no se quedan solamente con la teoría. Te ayudan a entender por qué una estrategia tiene sentido y cuándo realmente conviene aplicarla."',
          role: 'Profesora de Educación Física',
        },
        {
          stars: 5,
          quote:
            '"Hay demasiada información sobre suplementos en redes. Esta charla me ayudó a ordenar conceptos y dejar de tomar decisiones solamente porque alguien las recomienda."',
          role: 'Instructora de sala',
        },
      ],
    },

    {
      type: 'urgency',
      eyebrow: 'Atención',
      title: 'La transmisión es abierta. **No pierdas los beneficios.**',
      intro:
        'La transmisión puede verse online en vivo, pero el acceso a los materiales complementarios, la participación en la sesión de preguntas y los beneficios exclusivos del evento están reservados para quienes se registren.',
      cards: [
        {
          icon: '🎙️',
          title: 'Preguntas en vivo, una sola vez',
          text: 'Vas a poder plantear tus dudas y participar del espacio de preguntas durante la transmisión. Una vez finalizado el evento, esa posibilidad desaparece.',
          highlight: true,
        },
        {
          icon: '📼',
          title: 'Replay para inscriptos',
          text: 'Si no podés estar presente en vivo, el acceso a la grabación estará disponible para quienes se hayan registrado previamente.',
        },
        {
          icon: '🎁',
          title: 'Material + beneficios exclusivos',
          text: 'Accedé a material complementario para ordenar los conceptos principales de la charla y a los beneficios especiales asociados al evento.',
        },
      ],
      cta: { label: 'Quiero registrarme y asegurar mis beneficios →' },
    },

    {
      type: 'register',
      sideEyebrow: 'Club de Expertos',
      sideTitle: 'Reservá tu lugar gratis',
      sideIntro:
        'Una hora y media para entender la suplementación desde la evidencia, separar ciencia de marketing y llevarte criterios que puedas aplicar en tu práctica profesional y personal.',
      benefits: [
        'Streaming en vivo online',
        'Preguntas en vivo con la especialista',
        'Acceso al replay para inscriptos',
        'Contenido basado en evidencia científica',
      ],
      title: 'Registro rápido',
      subtitle: '100% gratis · Registro obligatorio',
      submitLabel: 'Asegurar mi cupo gratuito →',
      micro: '⏱️ La inscripción puede cerrarse al completarse el aforo disponible.',
      privacy:
        '🔒 Usamos tus datos únicamente para enviarte el acceso y la información relacionada con el evento. No los compartimos con terceros.',
      source: 'club-expertos-suplementacion',
      fields: {
        nombre: { label: 'Nombre', placeholder: 'Tu nombre' },
        apellido: { label: 'Apellido', placeholder: 'Tu apellido' },
        email: { label: 'Correo electrónico', placeholder: 'tu@email.com' },
        telefono: { label: 'WhatsApp', placeholder: '' },
      },
      // Solo mensaje de éxito: el lead queda en la DB y una automatización externa
      // le envía el acceso por WhatsApp (mismo flujo que los otros eventos).
      thankyou: {
        title: '✅ ¡Tu lugar está reservado!',
        intro:
          'Te vamos a enviar el acceso al streaming por WhatsApp antes de que empiece — asegurate de tener bien tu número. ¡Nos vemos el miércoles 26/8 a las 18:30 hs!',
      },
    },

    {
      type: 'faq',
      eyebrow: 'Antes de anotarte',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Necesito ser nutricionista para participar?',
          a: 'No. La charla está pensada para profesionales y estudiantes del mundo fitness, entrenadores, preparadores físicos y personas interesadas en comprender mejor la suplementación y el rendimiento.',
        },
        {
          q: '¿Necesito conocimientos previos?',
          a: 'No. Los conceptos serán explicados de forma clara y progresiva, aunque el contenido está pensado especialmente para personas que quieren profundizar profesionalmente.',
        },
        {
          q: '¿La charla es realmente gratuita?',
          a: 'Sí. El acceso a la transmisión es gratuito con registro previo.',
        },
        {
          q: '¿Qué pasa si no puedo verla en vivo?',
          a: 'Los participantes registrados podrán acceder al replay según las condiciones comunicadas por IdaClass Academy.',
        },
        {
          q: '¿Vamos a hablar de suplementos específicos?',
          a: 'Sí. Se abordarán suplementos de uso frecuente en el ámbito deportivo y se explicará qué sabemos sobre ellos, qué beneficios pueden tener y en qué contexto tiene sentido considerarlos.',
        },
        {
          q: '¿También se hablará de biohacking?',
          a: 'Sí. Se abordará el concepto de biohacking aplicado al rendimiento físico y cognitivo, diferenciando estrategias respaldadas por evidencia de aquellas que presentan afirmaciones exageradas o insuficientemente respaldadas.',
        },
        {
          q: '¿Puedo hacer preguntas durante la charla?',
          a: 'Sí. Habrá un espacio de preguntas y respuestas en vivo para los participantes.',
        },
        {
          q: '¿Qué es Club de Expertos?',
          a: 'Es el ciclo de encuentros de IdaClass Academy diseñado para acercar a estudiantes y profesionales del fitness a especialistas y referentes de distintas áreas del entrenamiento, la nutrición, el rendimiento y la gestión profesional.',
        },
      ],
    },

    {
      type: 'footer',
      brand: { text: 'Ida', accent: 'Class', sub: 'Academy' },
      claim: '25 años formando profesionales del fitness en Latinoamérica.',
      eventLine: 'Club de Expertos · 26/8 · 18:30 hs',
      cta: { label: 'Reservar mi lugar →' },
      contact: {
        title: 'IdaClass Academy',
        text: 'Plataforma de formación profesional para el sector fitness.',
        email: 'hola@idaclassacademy.com',
        phone: '+54 9 11 3421-6102',
      },
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Cursos', href: '/cursos-especializados' },
        { label: 'Comunidad IdaClass', href: '/comunidad' },
        { label: 'Contacto', href: '/asesorate' },
      ],
      text: '© IdaClass Academy',
    },

    {
      type: 'sticky-cta',
      dateLabel: '26 de agosto · 18:30 hs',
      cta: { label: 'Reservar' },
    },
  ],
}
