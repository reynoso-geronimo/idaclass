/**
 * Configuración de la landing "Club de Expertos — HYROX + Adultos Mayores".
 *
 * Es un objeto de datos puros (JSON-serializable): editá los textos acá.
 * - Resaltá palabras con **doble asterisco**.
 * - Para OCULTAR una sección: borrá su objeto del array `sections` (o vaciá su contenido).
 * - Para AGREGAR una sección: registrala en components/landing-evento/section-registry.js.
 * - Para cambiar la paleta de este evento: descomentá y ajustá `theme`.
 *
 * Fecha confirmada: jueves 10/09, 14:00 hs (ARG). Aparece en los 6 lugares
 * marcados con `// FECHA` — si cambia, tocá solo esos.
 *
 * PENDIENTE: los testimonios. El doc los dejaba "reservados para maquetar"; los de
 * abajo son de referencia y hay que reemplazarlos por testimonios reales antes de publicar.
 */
export const hyroxAdultosMayoresConfig = {
  meta: {
    title: 'HYROX + Adultos Mayores: las 2 disciplinas que redefinen el fitness | Club de Expertos IdaClass',
    description:
      'Stream gratuito en vivo con dos especialistas. Entrenamiento híbrido, HYROX, longevidad y envejecimiento activo: las tendencias de mayor crecimiento del fitness mundial y cómo posicionarte antes que el resto. 10/9 14:00 hs (ARG).',
  },

  // theme: { accent: '#1cb1e5', accentRgb: '28 177 229', bg: '#0a0c10' },
  countdownTo: '2026-09-10T14:00:00-03:00', // FECHA
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
      // Sin `num`: este episodio no lleva número de ciclo visible.
      badge: { label: 'Club de Expertos · IdaClass Academy', size: 'lg' },
      live: 'Stream en vivo · Evento 100% gratuito',
      title:
        'HYROX + adultos mayores: las **2 disciplinas de mayor crecimiento** que están redefiniendo la industria fitness',
      subtitle:
        'Conocé en vivo las nuevas tendencias, metodologías y oportunidades del **entrenamiento híbrido y la longevidad**. Descubrí cómo adelantarte al mercado antes de que sea tarde.',
      // Sin imagen de hero → fondo azul oscuro (fallback), igual que los episodios anteriores.
      // Para activarla: image: { desktop: '/landings/hero-desktop.jpg', mobile: '/landings/hero-mobile.jpeg', alt: '...', position: '64% 22%' }
      datetime: [
        { label: 'Fecha', value: 'Jueves 10 de septiembre', icon: 'calendar', highlight: true }, // FECHA
        { label: 'Horario', value: '14:00 hs (ARG)', icon: 'clock', highlight: true }, // FECHA
        { label: 'Duración', value: '90 minutos', icon: 'duration' },
        { label: 'Modalidad', value: '100% online en vivo' },
        { label: 'Acceso', value: 'Gratis vía YouTube', icon: 'shield' },
      ],
      ctas: {
        primary: { label: '¡Quiero asegurar mi cupo gratuito! →' },
        // "Ver adelanto" aparece SOLO cuando cargás `embedUrl`; abre el video en un diálogo (modal).
        // secondary: { label: 'Ver adelanto', embedUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX' },
      },
      note: 'Reservá tu lugar sin costo antes de completar aforo.',
      countdown: {
        label: '⏱️ Las inscripciones se cierran en',
        spots: { label: '🔥 Aforo reservado', value: '84%', percent: 84 },
      },
    },

    {
      type: 'partners',
      label: 'Acompañan:',
      // Logos heredados del ciclo. Reemplazalos si este episodio tiene otros acompañantes.
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
        { value: '25', label: 'Años de trayectoria educativa' },
        { value: '+50.000', label: 'Graduados y profesionales capacitados' },
        { value: '4', label: 'Países con presencia institucional' },
        { value: '80%', label: 'Empleabilidad de nuestra comunidad' },
      ],
    },

    {
      type: 'problem',
      eyebrow: 'Lo que está pasando ahora en el mundo fitness',
      title: '¿Estás preparado para ser el entrenador que el mercado va a exigir mañana?',
      intro:
        'El fitness tradicional dejó atrás el modelo de "entrenar a todos de la misma manera". La industria global se expandió hacia un público mucho más diverso, y en esa expansión se destacan dos disciplinas: HYROX y el entrenamiento híbrido, que llevan la combinación de fuerza, resistencia y rendimiento funcional a un nuevo nivel de masividad y competencia; y adultos mayores y longevidad, una población en crecimiento demográfico acelerado que busca fuerza, autonomía, salud real y calidad de vida — con la mayor capacidad de inversión del sector.',
      contrast: {
        bad: {
          icon: '❌',
          tag: 'Lo que hacés hoy',
          title: 'Seguís haciendo más de lo mismo',
          text: 'Trabajás únicamente con los formatos tradicionales mientras nuevas disciplinas ganan espacio en gimnasios, boxes y entrenamientos personales.',
        },
        good: {
          icon: '✅',
          tag: 'Lo que vas a descubrir acá',
          title: 'Mirás el mercado con ventaja estratégica',
          text: 'Dos especialistas van a analizar estas disciplinas, compartir su experiencia y mostrarte las claves para posicionarte primero.',
        },
      },
      listTitle:
        'Si alguna de estas situaciones te resulta familiar, necesitás conocer hacia dónde se mueve el mercado:',
      list: [
        'Sentís que cada vez hay **más entrenadores ofreciendo servicios idénticos** y compitiendo por precio.',
        'Querés diferenciarte pero **aún no encontraste una especialización con demanda real**.',
        'Escuchás hablar de **HYROX, rendimiento híbrido o envejecimiento activo**, pero no tenés claro qué hay detrás de estas tendencias.',
        'Te preocupa que, cuando estas disciplinas sean masivas en tu ciudad, **otros profesionales ya estén varios pasos adelante**.',
      ],
      bridge:
        '🚨 **El problema no es que estas oportunidades estén llegando. El problema es llegar tarde a ellas.** Por eso existe este episodio: 90 minutos con dos especialistas para entender qué hay detrás de cada disciplina y cómo convertirlas en una ventaja profesional concreta.',
    },

    {
      type: 'outcomes',
      eyebrow: 'Los 4 pilares críticos de la charla',
      title: 'Dos disciplinas. **Cuatro claves** para entender la nueva oportunidad profesional.',
      cards: [
        {
          tag: 'Pilar 01',
          title: 'HYROX — el entrenamiento híbrido que gana terreno',
          text: 'Qué hay detrás de esta nueva metodología, qué capacidades físicas combina y por qué está despertando tanto interés entre atletas, entrenadores y centros de entrenamiento a nivel global.',
        },
        {
          tag: 'Pilar 02',
          title: 'Del entrenamiento funcional al rendimiento híbrido',
          text: 'Qué herramientas debe dominar un entrenador para estructurar sesiones híbridas y cómo adaptar los recursos sin depender de infraestructuras sofisticadas o costosas.',
        },
        {
          tag: 'Pilar 03',
          title: 'Adultos mayores — la nueva frontera del fitness',
          text: 'Por qué el envejecimiento activo y la longevidad están creando una demanda masiva de profesionales capaces de prescribir fuerza, movilidad y capacidad funcional con seguridad.',
        },
        {
          tag: 'Pilar 04',
          title: 'De tendencia a oportunidad profesional',
          text: 'Cómo convertir estos conocimientos en verdaderas áreas de especialización, diferenciación de marca personal y aumento de rentabilidad para tu carrera o tu gimnasio.',
        },
      ],
      bonus:
        '🚀 **Anticipo exclusivo para asistentes:** al cierre del stream compartimos cómo seguir desarrollando tus competencias profesionales y profundizando en estas áreas dentro de las certificaciones de IdaClass Academy.',
    },

    {
      type: 'speaker',
      eyebrow: 'Quiénes protagonizan la conversación',
      title: 'Dos especialistas. Dos disciplinas.',
      intro:
        'Una conversación directa sobre el futuro de tu carrera profesional dentro de la industria del fitness.',
      items: [
        {
          kicker: 'HYROX & entrenamiento híbrido',
          name: 'Angel Ferrando',
          role: 'Prof. Nacional de Educación Física · Especialista en entrenamiento funcional e híbrido',
          // Sin `bio`: la ficha se arma con los bullets y la sección oculta el párrafo.
          bullets: [
            'Coach de **CrossFit** certificado.',
            'Atleta de **CrossFit Master LATAM**.',
            // La especialización en entrenamiento híbrido y funcional ya está en `role`.
            'Aporte en vivo: una mirada práctica sobre la evolución del entrenamiento híbrido y cómo aplicarlo para captar atletas y clientes de alto rendimiento.',
          ],
          tags: ['HYROX', 'CrossFit', 'Entrenamiento híbrido', 'Fuerza y resistencia', 'Rendimiento funcional'],
          photo: { src: '/landings/angel-ferrando-v2.jpg', badge: 'Expositor' },
        },
        {
          kicker: 'Adultos mayores & longevidad',
          name: 'Oscar Incarbone',
          role: 'Dr. en Ciencias de la Actividad Física y el Deporte · Rector del IUYMCA',
          // Sin `bio`: los datos que iban en el párrafo ahora están en los bullets,
          // así que la sección oculta el párrafo en vez de repetirlos.
          bullets: [
            'Rector del **Instituto Universitario YMCA** y coordinador de la Coalición Internacional de Universidades YMCA.',
            'Coordinador del **Manual Director de Actividad Física y Salud** de la República Argentina y del COA.',
            'Ex Director Nacional de Planeamiento Deportivo.',
            'Consultor de OPS/UNESCO/OMS · Expresidente de RAFA-PANA · Presidente de Sportsalud.',
            'Autor y coautor de **más de 20 libros** sobre actividad física, deporte y salud.',
            'Aporte en vivo: las claves biológicas, metodológicas y operativas para ingresar con éxito al nicho de mayor crecimiento demográfico.',
          ],
          tags: [
            'Longevidad',
            'Adultos mayores',
            'Actividad física y salud',
            'Envejecimiento activo',
            'Políticas públicas',
            'Capacidad funcional',
          ],
          stats: [
            { value: 'IUYMCA', label: 'Rector' },
            { value: '+20', label: 'Libros publicados' },
            { value: 'COA', label: 'Deporte y Sociedad Activa' },
            { value: 'OPS', label: 'Consultor internacional' },
          ],
          photo: { src: '/landings/oscar-incarbone.jpg', badge: 'Expositor' },
        },
      ],
    },

    {
      type: 'agenda',
      eyebrow: 'Mapa de la charla',
      title: 'Así vamos a recorrer la transmisión',
      intro: 'Una hoja de ruta clara para extraer el máximo valor aplicable de los 90 minutos.',
      items: [
        {
          title: 'El nuevo mapa del fitness global',
          text: 'Qué está cambiando en la industria y por qué el entrenador tradicional necesita actualizar su propuesta.',
        },
        {
          title: 'Anatomía del HYROX y el entrenamiento híbrido',
          text: 'Bases de la metodología, estructuración de rutinas y claves de su rápida adopción mundial.',
        },
        {
          title: 'Longevidad y adultos mayores',
          text: 'Necesidades reales de esta población, prescripción segura de la fuerza y oportunidades de mercado.',
        },
        {
          title: 'La conversación que no aparece en redes',
          text: 'Errores comunes, mitos y los desafíos reales detrás de la implementación de ambas disciplinas.',
        },
        {
          title: 'Dónde están las oportunidades para el entrenador',
          text: 'Cómo estructurar estas especializaciones como un camino concreto de desarrollo profesional e ingresos.',
        },
      ],
    },

    {
      type: 'testimonials',
      eyebrow: 'Comunidad IdaClass',
      title: 'Profesionales que ya forman parte de la comunidad de IdaClass Academy',
      // TODO: reemplazar por 3 testimonios reales (texto o video) de graduados del
      // Club de Expertos o de los cursos. Los de abajo son de referencia para maquetar.
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
            '"Me sirvió muchísimo para ver hacia dónde va la industria y dejar de competir por precio con el resto de los entrenadores de mi zona."',
          role: 'Instructor de sala',
        },
      ],
    },

    {
      type: 'urgency',
      eyebrow: 'Atención',
      title: 'La transmisión es abierta. **Pero no pierdas los beneficios de registrarte.**',
      intro:
        'Cualquier persona podrá ver la transmisión pública, pero solo los inscriptos confirmados tendrán acceso al ecosistema completo de beneficios:',
      cards: [
        {
          icon: '🎙️',
          title: 'Preguntas en vivo con los especialistas',
          text: 'Enviá tus dudas directo a los ponentes durante la transmisión. Al finalizar la emisión, esta oportunidad se cierra.',
          highlight: true,
        },
        {
          icon: '📹',
          title: 'Acceso al replay exclusivo',
          text: 'Si no podés estar en directo o querés repasar el contenido, recibirás el enlace de la grabación únicamente si estás registrado.',
        },
        {
          icon: '🎁',
          title: 'Materiales complementarios',
          text: 'Guías resumen y recursos exclusivos enviados directamente a tu WhatsApp o email después del evento.',
        },
      ],
      cta: { label: '¡Quiero registrarme y asegurar mis beneficios! →' },
    },

    {
      type: 'register',
      sideEyebrow: 'Club de Expertos | IdaClass Academy',
      sideTitle: 'Reservá tu lugar gratis y anticipate al futuro del fitness',
      sideIntro:
        'Un evento en vivo de 90 minutos para entender y aprovechar dos de las transformaciones más rentables de la industria.',
      benefits: [
        'Streaming online 100% en vivo',
        'Conversación directa con 2 especialistas referentes',
        'Espacio interactivo de preguntas en tiempo real',
        'Contenido práctico, aplicable y sin rodeos',
      ],
      title: 'Registro rápido',
      subtitle: '100% gratis · Cupos limitados',
      submitLabel: '🔥 Asegurar mi cupo gratuito ahora →',
      micro: '⏱️ El registro se cerrará de forma automática al completar el cupo de la sala.',
      privacy:
        '🔒 Cuidamos tus datos. Solo te enviaremos la información del evento y los accesos directos.',
      source: 'club-expertos-hyrox-adultos-mayores',
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
          'Te vamos a enviar el acceso al streaming por WhatsApp antes de que empiece — asegurate de tener bien tu número. ¡Nos vemos el jueves 10/9 a las 14:00 hs!', // FECHA
      },
    },

    {
      type: 'faq',
      eyebrow: 'Antes de anotarte',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Necesito ser entrenador graduado para participar?',
          a: 'No. El stream está diseñado para personal trainers, profesores de educación física, instructores, estudiantes y entusiastas que quieran entender las tendencias de la industria.',
        },
        {
          q: '¿Necesito experiencia previa en HYROX o adultos mayores?',
          a: 'No. La conversación está estructurada desde un nivel conceptual e interactivo para que comprendas las bases y las oportunidades aunque nunca hayas trabajado en estas áreas.',
        },
        {
          q: '¿La charla es realmente gratuita?',
          a: 'Sí, el acceso en vivo es 100% gratuito. En nuestro canal de YouTube quedará la grabación disponible.',
        },
        {
          q: '¿Qué pasa si no puedo asistir en vivo a esa hora?',
          a: 'Si te registraste previamente en este formulario, recibirás en tu correo y WhatsApp el acceso a la grabación del episodio.',
        },
        {
          q: '¿Habrá espacio para resolver mis dudas?',
          a: 'Sí, contaremos con un bloque dedicado de preguntas y respuestas en vivo donde los especialistas responderán las inquietudes del chat.',
        },
      ],
    },

    {
      type: 'footer',
      brand: { text: 'Ida', accent: 'Class', sub: 'Academy' },
      claim: '25 años formando profesionales del fitness en Latinoamérica.',
      eventLine: 'Club de Expertos · 10/9 · 14:00 hs', // FECHA
      cta: { label: 'Reservar mi lugar →' },
      contact: {
        title: 'IdaClass Academy',
        text: 'Plataforma de educación continua para la industria del deporte y el bienestar.',
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
      dateLabel: 'Stream HYROX + Adultos Mayores · 10/9', // FECHA
      cta: { label: '¡Reservar gratis!' },
    },
  ],
}
