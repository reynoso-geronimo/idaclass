/**
 * Configuración de la landing "Club de Expertos · Ep. 02 — Hipertrofia".
 *
 * Es un objeto de datos puros (JSON-serializable): editá los textos acá.
 * - Resaltá palabras con **doble asterisco**.
 * - Para OCULTAR una sección: borrá su objeto del array `sections` (o vaciá su contenido).
 * - Para AGREGAR una sección: registrala en components/landing-evento/section-registry.js.
 * - Para cambiar la paleta de este evento: descomentá y ajustá `theme`.
 */
export const hipertrofiaConfig = {
  meta: {
    title: 'Hipertrofia real: programá como un experto | Club de Expertos IdaClass',
    description:
      'Masterclass gratuita en vivo con Ariel Couceiro González. Aprendé a programar hipertrofia con criterio: RIR/RPE, sobrecarga progresiva y estructura de sesión. 17/7 18hs (ARG) por YouTube.',
  },

  // theme: { accent: '#1cb1e5', accentRgb: '28 177 229', bg: '#0a0c10' },
  countdownTo: '2026-07-17T18:00:00-03:00',
  registerHref: '#inscripcion',

  sections: [
    {
      type: 'topbar',
      logo: { text: 'Ida', accent: 'Class', sub: 'Academy' },
      series: 'Club de Expertos · Episodio 02',
      cta: { label: 'Reservar lugar' },
    },

    {
      type: 'hero',
      badge: { num: 'EP. 02', label: 'Club de Expertos · IdaClass Academy' },
      live: 'En vivo y 100% online vía YouTube · Acceso exclusivo con registro',
      title: 'Hipertrofia real: **programá como un experto**, no como influencer de Instagram',
      subtitle:
        'La diferencia entre seguir una rutina y programar hipertrofia — explicada por **Ariel Couceiro González**, creador del método Entrenamiento Inteligente.',
      // Imagen del hero desactivada por ahora → se muestra el fondo azul oscuro (fallback).
      // Descomentá para reactivar la foto (los archivos siguen en /public/landings).
      // image: {
      //   desktop: '/landings/hero-desktop.jpg', // ≥768px
      //   mobile: '/landings/hero-mobile.jpeg',  // <768px
      //   alt: 'Entrenamiento personalizado en grupo con coach de IdaClass Academy',
      //   position: '64% 22%',
      // },
      datetime: [
        { label: 'Día', value: 'Viernes 17 de julio', icon: 'calendar', highlight: true },
        { label: 'Horario', value: '18:00 hs (ARG)', icon: 'clock', highlight: true },
        { label: 'Duración', value: '60 min en vivo', icon: 'duration' },
        { label: 'Acceso', value: 'Gratis vía YouTube', icon: 'shield' },
      ],
      ctas: {
        primary: { label: 'Asegurar mi cupo gratuito' },
        // "Ver adelanto" aparece SOLO cuando cargás `embedUrl`; abre el video en un diálogo (modal).
        // La duración real ponela en el label cuando tengas el clip (ej: 'Ver adelanto (1:12)').
        secondary: { label: 'Ver adelanto' /* , embedUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX' */ },
      },
      note: '60 min de contenido avanzado, sin rodeos · Cupos limitados por soporte técnico de la sala virtual',
      countdown: {
        label: 'Se cierran inscripciones en',
        spots: { label: '🔥 Cupos reservados', value: '78%', percent: 78 },
      },
    },

    {
      type: 'partners',
      label: 'Acompañan:',
      // Cada logo se muestra en una tarjeta blanca. logo-4 (Fitness + Negocios) trae fondo negro
      // incrustado, por eso va con onDark: true (se muestra sin tarjeta, sobre el fondo oscuro).
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
        { value: '4', label: 'Países con sede' },
        { value: '80%', label: 'Empleados en 90 días' },
      ],
    },

    {
      type: 'problem',
      eyebrow: 'Lo que pasa todos los días en cualquier gimnasio',
      title: '¿Entrenás duro, pero sentís que hace meses no cambia nada?',
      intro:
        'Pasa en todos lados: alguien entrena "al fallo" en cada serie porque escuchó que así se crece más rápido, otro repite la misma rutina hace un año sin tocar una sola variable, y otro ni sabe qué es eso del RIR o el RPE que menciona todo el mundo — así que entrena a pura sensación, distinto cada día. Ninguno de estos errores es grave por sí solo. El problema es que, sumados, son la razón por la que mucha gente entrena años sin ver los resultados que debería.',
      contrast: {
        bad: {
          icon: '📱',
          tag: 'Lo que haces hoy',
          title: 'Copiás una rutina de Instagram',
          text: 'Series y ejercicios de alguien con otra genética, otro nivel y otro objetivo. Sin criterio de por qué.',
        },
        good: {
          icon: '📊',
          tag: 'Lo que aprendés acá',
          title: 'Programás con criterio propio',
          text: 'Sobrecarga, RPE/RIR y estructura de sesión pensados para tu cuerpo y el de tus clientes reales.',
        },
      },
      list: [
        'Entrenás **"al fallo"** en cada serie pensando que así el músculo crece más — y en realidad solo llegás reventado a la serie que de verdad importaba.',
        'Escuchaste hablar de **RIR y RPE** mil veces, pero en la práctica seguís entrenando a ojo, sin ningún criterio para saber si hoy tenés que apretar más o frenar.',
        'Hacés el mismo peso, las mismas series y la misma rutina **hace meses** — y le llamás constancia cuando en realidad es estancamiento.',
        'Copiás la rutina de algún **video de Instagram** sin preguntarte si tiene sentido para tu nivel, tu tiempo o tu objetivo real.',
      ],
      bridge:
        '**Por eso existe este episodio.** En esta hora vas a entender qué es realmente el RIR, cuándo (y si) conviene entrenar al fallo, y cómo salir del estancamiento sin adivinar — 30 años de trinchera de Ariel Couceiro González, bajados a un criterio simple que podés aplicar el lunes.',
    },

    {
      type: 'outcomes',
      eyebrow: 'Los 4 pilares críticos de la charla',
      title: 'No es entrenamiento de moda ni opinión de influencer fitness, es criterio para programar.',
      cards: [
        {
          tag: 'Pilar 01',
          title: 'El estímulo real de crecimiento',
          text: 'Las vías de señalización anabólica (mTOR) explicadas en criollo. Vas a entender de una vez por todas la diferencia entre tensión mecánica real y solo acumular fatiga sin sentido.',
        },
        {
          tag: 'Pilar 02',
          title: 'Sobrecarga de verdad',
          text: 'Por qué la sobrecarga progresiva es el pilar absoluto — y cómo aplicarla con 5 variables tácticas. No es solo meterle más discos a la barra.',
        },
        {
          tag: 'Pilar 03',
          title: 'Intensidad eficiente (RIR / RPE)',
          text: '¿Es obligatorio entrenar al fallo para ver resultados? Vas a usar el carácter de esfuerzo, RPE y RIR para ahorrar fatiga central y asegurar repeticiones verdaderamente efectivas.',
        },
        {
          tag: 'Pilar 04',
          title: 'Programación para "simples mortales"',
          text: 'Cómo estructurar una sesión real: el orden correcto de básicos, secundarios y accesorios, y la frecuencia óptima semanal para gente con una vida ocupada.',
        },
      ],
      bonus:
        '🚀 **Anticipo exclusivo:** al cierre de la charla te mostramos el mapa de ruta completo del Curso de Hipertrofia Muscular — Programación y Estrategias de IdaClass Academy, para quienes quieran dar el salto profesional.',
    },

    {
      type: 'speaker',
      eyebrow: 'Quién dicta la charla',
      title: '30 años programando fuerza e hipertrofia',
      kicker: 'Entrenamiento Inteligente®',
      name: 'Ariel Couceiro González',
      role: 'Profesor Nacional de Educación Física · Psicólogo Social',
      bio: 'Fundador de Corpo São — Entrenamiento Inteligente (1999) y referente de la programación de fuerza e hipertrofia en el mundo hispanohablante. Autor y docente de cientos de entrenadores, preparadores físicos y readaptadores en Latinoamérica y España, con un enfoque que combina evidencia científica con aplicación real de "trinchera".',
      bullets: [
        'Especialista en biomecánica aplicada al entrenamiento de la fuerza y la hipertrofia.',
        'Divulgador de ciencia del ejercicio, con años formando a miles de entrenadores y atletas en Latinoamérica.',
        'Profesor de Educación Física con más de 25 años formando entrenadores personales y preparadores físicos.',
      ],
      tags: [
        'Fuerza y potencia',
        'Programación del entrenamiento',
        'Biomecánica aplicada',
        'Autor y conferencista internacional',
      ],
      stats: [
        { value: '25+', label: 'Años formando entrenadores' },
        { value: '1999', label: 'Fundación Corpo São' },
        { value: '3', label: 'Libros publicados' },
      ],
      // Si borrás `src` (o falta el archivo), cae al fallback de iniciales: { initials: 'AC', badge: '...' }
      photo: { src: '/landings/ariel-couceiro.jpeg', badge: 'Expositor · Ep. 02' },
    },

    {
      type: 'agenda',
      eyebrow: 'Mapa de la charla',
      title: 'Así vamos a recorrer la hora',
      intro:
        'Un recorte del curso completo de Couceiro, adaptado a 60 minutos con foco en lo aplicable de inmediato.',
      items: [
        {
          title: 'Bases fisiológicas de la hipertrofia',
          text: 'Tensión mecánica, estrés metabólico y daño muscular: los 3 disparadores reales del crecimiento.',
        },
        {
          title: 'Sobrecarga progresiva sin misterio',
          text: 'Las formas prácticas de progresar la carga más allá de "subir el peso".',
        },
        {
          title: 'Cuantificar el esfuerzo: RPE, RIR y carácter de esfuerzo',
          text: 'Cómo regular la intensidad sesión a sesión sin depender del 1RM.',
        },
        {
          title: 'Métodos que funcionan: rest-pause, myo-reps y doble progresión',
          text: 'Cuándo usar cada uno según el nivel del entrenado.',
        },
        {
          title: 'Organización real de la semana y la sesión',
          text: 'Frecuencia por grupo muscular y orden de ejercicios para que el plan se sostenga en el tiempo.',
        },
      ],
    },

    {
      type: 'testimonials',
      eyebrow: 'Lo que dicen de Club de Expertos',
      title: 'Entrenadores que ya vivieron un episodio del ciclo',
      items: [
        {
          stars: 5,
          quote:
            '"Vengo a cada episodio de Club de Expertos porque siempre me llevo algo que aplico esa misma semana con mis clientes. Nivel de contenido muy por arriba del streaming gratuito promedio."',
          role: 'Entrenador personal, 4 años en el rubro',
        },
        {
          stars: 5,
          quote:
            '"Entrené años sin criterio, cambiando de rutina cada vez que veía algo nuevo en redes. Después de un episodio del ciclo empecé a entender qué estaba haciendo mal y por qué no avanzaba."',
          role: 'Profesora de Educación Física',
        },
        {
          stars: 5,
          quote:
            '"Lo bueno de estas charlas es que no te venden humo: te dan algo concreto para aplicar el lunes en el gimnasio, con tus propios alumnos."',
          role: 'Instructora de sala, Rosario',
        },
      ],
    },

    {
      type: 'urgency',
      eyebrow: 'Atención',
      title: 'La transmisión es abierta. Los beneficios reales, no.',
      intro:
        'El streaming se ve por YouTube sin restricción, pero el acceso a los materiales, la sesión de preguntas en vivo y los beneficios de lanzamiento del curso son únicamente para quienes se registran en esta página.',
      cards: [
        {
          icon: '🎙️',
          title: 'Preguntas en vivo, una sola vez',
          text: 'El espacio de preguntas a Couceiro es exclusivo del momento en vivo. En el replay ya no se puede participar.',
          highlight: true,
        },
        {
          icon: '📼',
          title: 'Replay solo para inscriptos',
          text: 'La charla queda grabada, pero el acceso al video es privado y se envía únicamente a quienes se registraron antes del cierre.',
        },
        {
          icon: '🎁',
          title: 'Material + beneficios de lanzamiento',
          text: 'Planilla con los métodos vistos (rest-pause, myo-reps, doble progresión) y acceso preferencial a los beneficios de lanzamiento del Curso de Hipertrofia Muscular de IdaClass.',
        },
      ],
      cta: { label: 'Quiero registrarme y asegurar mis beneficios' },
    },

    {
      type: 'register',
      sideEyebrow: 'Club de Expertos · Episodio 02',
      sideTitle: 'Reservá tu lugar gratis',
      sideIntro:
        'Un lugar en el streaming en vivo del 17 de julio, con acceso al replay privado y al material descargable — solo para quienes se registran.',
      benefits: [
        'Streaming en vivo por YouTube, 17/7 a las 18 hs',
        'Preguntas en vivo a Ariel Couceiro González',
        'Replay privado enviado solo a inscriptos',
        'Planilla descargable con los métodos de la charla',
        'Acceso preferencial a los beneficios de lanzamiento del Curso de Hipertrofia Muscular',
        'Certificado de participación IdaClass Academy',
      ],
      title: 'Registro rápido',
      subtitle: '100% gratis · Cupos limitados',
      submitLabel: 'Asegurar mi cupo gratuito →',
      micro: '⏱️ La inscripción cierra de forma automática al completarse el aforo de la sala virtual',
      privacy: '🔒 Usamos tus datos solo para enviarte el acceso y la información del evento. No los compartimos con terceros.',
      source: 'club-expertos-ep02',
      fields: {
        email: { label: 'Correo electrónico principal', placeholder: 'tu@email.com' },
        telefono: { label: 'WhatsApp', placeholder: '' },
      },
      // Solo mensaje de éxito: el lead queda en la DB (igual que los otros eventos) y una
      // automatización externa le envía el acceso por WhatsApp. Sin canal, sin botones extra.
      // (Si en el futuro querés botones/Calendar, la sección `register` soporta thankyou.actions[] y thankyou.calendar.)
      thankyou: {
        title: '✅ ¡Tu lugar está reservado!',
        intro:
          'Te vamos a enviar el acceso al streaming por WhatsApp antes de que empiece — asegurate de tener bien tu número. ¡Nos vemos el viernes 17/7 a las 18 hs!',
      },
    },

    {
      type: 'faq',
      eyebrow: 'Antes de anotarte',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Necesito experiencia previa para entender la charla?',
          a: 'No. Está pensada tanto para entrenadores que ya programan hipertrofia como para quienes recién empiezan. Couceiro baja los conceptos a un lenguaje aplicable, no solo académico.',
        },
        {
          q: '¿Qué pasa si no puedo verla en vivo?',
          a: 'Queda grabada y se envía el replay privado a quienes se hayan registrado antes del cierre de inscripción. Eso sí: el espacio de preguntas en vivo a Couceiro solo existe durante la transmisión.',
        },
        {
          q: '¿Tiene algún costo?',
          a: 'Es 100% gratuita. Es el episodio 2 del ciclo Club de Expertos de IdaClass Academy, en alianza con Ariel Couceiro González.',
        },
        {
          q: '¿Qué es Club de Expertos?',
          a: 'Es el ciclo de streamings gratuitos de IdaClass Academy donde referentes de la industria fitness comparten su expertise con la comunidad de entrenadores.',
        },
        {
          q: '¿Recibo algún certificado?',
          a: 'Sí, IdaClass Academy entrega certificado de participación a quienes se registren.',
        },
      ],
    },

    {
      type: 'footer',
      brand: { text: 'Ida', accent: 'Class', sub: 'Academy' },
      text: '© IdaClass Academy — 25 años formando profesionales del fitness en Latinoamérica. Club de Expertos, episodio 02.',
    },

    {
      type: 'sticky-cta',
      dateLabel: '17 de julio · 18 hs',
      cta: { label: 'Reservar' },
    },
  ],
}
