/**
 * Configuración de la landing "Club de Expertos · Ep. 03 — Embarazo Activo".
 *
 * Es un objeto de datos puros (JSON-serializable): editá los textos acá.
 * - Resaltá palabras con **doble asterisco**.
 * - Para OCULTAR una sección: borrá su objeto del array `sections` (o vaciá su contenido).
 * - Para AGREGAR una sección: registrala en components/landing-evento/section-registry.js.
 * - Para cambiar la paleta de este evento: descomentá y ajustá `theme`.
 *
 * Fecha: viernes 25/09, 14:00 hs (ARG). Aparece en los 6 lugares marcados con
 * `// FECHA` — si cambia, tocá solo esos.
 *
 * Duración: 60 min. Además del chip marcado con `// DURACION`, se menciona en
 * `hero.note`, `problem.bridge`, `agenda.intro` y `register.sideIntro`.
 *
 * PENDIENTE — IMÁGENES (ver bloque marcado `// TODO FOTO`): falta el logo de Activedemy
 * en la sección `partners`. Ya están la foto de Mariela Villar y los logos de Embarazo
 * Activo, Post Parto Activo y RG Consulting Group.
 *
 * PENDIENTE — TESTIMONIOS: los 3 de abajo salen del doc, pero el propio doc los marca
 * como contenido de relleno. Reemplazar por testimonios reales antes de publicar.
 */
export const embarazoActivoConfig = {
  meta: {
    title: 'Embarazo Activo: entrenar embarazadas y posparto con criterio clínico | Club de Expertos IdaClass',
    description:
      'Masterclass gratuita en vivo con el equipo docente de Embarazo Activo (aval ACSM, AFAA y NASM). Fisiología materno-fetal, contraindicaciones, suelo pélvico y diástasis: cómo prescribir ejercicio seguro en cada trimestre y en el postparto. 25/9 14:00 hs (ARG) por YouTube.',
  },

  // theme: { accent: '#1cb1e5', accentRgb: '28 177 229', bg: '#0a0c10' },
  countdownTo: '2026-09-25T14:00:00-03:00', // FECHA
  registerHref: '#inscripcion',

  sections: [
    {
      type: 'topbar',
      logo: { text: 'Ida', accent: 'Class', sub: 'Academy' },
      series: 'Club de Expertos · Episodio 03',
      cta: { label: 'Reservar mi lugar' },
    },

    {
      type: 'hero',
      badge: { num: 'EP. 03', label: 'Club de Expertos · IdaClass Academy' },
      live: 'En vivo y 100% online vía YouTube · Acceso exclusivo con registro',
      title:
        'Embarazo Activo: aprendé a entrenar embarazadas y posparto con **criterio**, no por instinto',
      subtitle:
        'La diferencia entre "adaptar un poco la rutina" y **prescribir ejercicio seguro** en cada trimestre y en la recuperación postparto — explicada por el equipo docente de **Embarazo Activo**, referente internacional en la especialidad con aval triple americano (ACSM, AFAA, NASM).',
      // Imagen del hero desactivada → se muestra el fondo azul oscuro (fallback),
      // igual que en los episodios anteriores del ciclo.
      // image: { desktop: '/landings/hero-desktop.jpg', mobile: '/landings/hero-mobile.jpeg', alt: '...', position: '64% 22%' },
      datetime: [
        { label: 'Día', value: 'Viernes 25 de septiembre', icon: 'calendar', highlight: true }, // FECHA
        { label: 'Horario', value: '14:00 hs (ARG)', icon: 'clock', highlight: true }, // FECHA
        { label: 'Duración', value: '60 min en vivo', icon: 'duration' }, // DURACION
        { label: 'Acceso', value: 'Gratis vía YouTube', icon: 'shield' },
      ],
      ctas: {
        primary: { label: 'Asegurar mi cupo gratuito' },
        // "Ver adelanto" aparece SOLO cuando cargás `embedUrl`; abre el video en un diálogo (modal).
        // secondary: { label: 'Ver adelanto', embedUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX' },
      },
      note: '60 min de contenido clínico aplicado, sin rodeos · Cupos limitados por soporte técnico de la sala virtual',
      countdown: {
        label: 'Se cierran inscripciones en',
        spots: { label: '🔥 Cupos reservados', value: '78%', percent: 78 },
      },
    },

    {
      type: 'partners',
      label: 'Acompañan:',
      // TODO FOTO — falta el logo de Activedemy (la plataforma donde se cursa). El de
      // IdaClass Academy no hace falta acá: ya está en el topbar. Cuando llegue el
      // archivo, guardalo en /public/landings/logo-activedemy.png y sumalo al array.
      logos: [
        { src: '/landings/logo-embarazo-activo.png', alt: 'Embarazo Activo' },
        { src: '/landings/logo-postparto-activo.png', alt: 'Post Parto Activo' },
        { src: '/landings/logo-1.jpeg', alt: 'RG Consulting Group' },
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
      eyebrow: 'Lo que pasa todos los días en cualquier gimnasio o consultorio',
      title: '¿Recibís embarazadas o mamás recientes y sentís que **"improvisás"** la sesión?',
      intro:
        'Pasa en todos lados: una entrenadora le saca las cargas a una embarazada "por las dudas" sin saber que sí puede seguir entrenando fuerza con criterio; otra sigue entregando el mismo plan de piso pélvico que le enseñaron hace diez años, sin diferenciar hipopresivos de Kegel según el caso; y otra directamente rechaza clientas embarazadas porque no se siente segura de qué está permitido y qué no. Ninguno de estos errores nace de mala intención. El problema es que, sumados, son la razón por la que miles de mujeres embarazadas y en postparto entrenan sin acompañamiento profesional real — o dejan de entrenar por miedo.',
      contrast: {
        bad: {
          icon: '📱',
          tag: 'Lo que hacés hoy',
          title: 'Adaptás "a ojo" y con miedo',
          text: 'Bajás la intensidad porque "está embarazada", sin un criterio de prescripción por trimestre, patología asociada o antecedente obstétrico.',
        },
        good: {
          icon: '📊',
          tag: 'Lo que aprendés acá',
          title: 'Prescribís con protocolo clínico',
          text: 'Criterios de seguridad materno-fetal, señales de alarma para derivar, y progresión de cargas pensada para cada etapa de la gestación y el postparto.',
        },
      },
      list: [
        'Le sacás el **ejercicio de fuerza** a toda embarazada "por las dudas" — y en realidad la privás de uno de los recursos más efectivos para prevenir dolor lumbar, diástasis e incontinencia.',
        'Escuchaste hablar de **diástasis abdominal, suelo pélvico e hipopresivos** mil veces, pero en la práctica no sabés diferenciar cuándo indicar cada técnica ni cómo evaluarlas.',
        'Hacés la **misma rutina genérica de "embarazada"** para todas tus clientas, sin distinguir primer, segundo y tercer trimestre, ni el tipo de parto en la recuperación postparto.',
        'Copiás ejercicios de **videos de Instagram** sin preguntarte si esa progresión, esa postura o esa carga tiene contraindicaciones para el embarazo o la faja abdominal en recuperación.',
      ],
      bridge:
        '**Por eso existe este episodio.** En esta hora vas a entender qué puede y qué no puede hacer una embarazada según cada trimestre, cómo evaluar el suelo pélvico y la faja abdominal antes de programar, y cómo preparar el cuerpo para el parto sin adivinar — más de 22 años de trabajo clínico de Embarazo Activo, bajados a un criterio simple que podés aplicar el lunes.',
    },

    {
      type: 'outcomes',
      eyebrow: 'Los 4 pilares críticos de la charla',
      title: 'No es una rutina genérica para embarazadas, es un **protocolo clínico** para programar con seguridad.',
      cards: [
        {
          tag: 'Pilar 01',
          title: 'Fisiología materno-fetal aplicada al ejercicio',
          text: 'Los cambios cardiovasculares, respiratorios, hormonales y biomecánicos del embarazo explicados en criollo. Vas a entender de una vez por todas por qué el cuerpo gestante no es "un cuerpo normal con panza", sino un sistema con reglas propias.',
        },
        {
          tag: 'Pilar 02',
          title: 'Seguridad materna: contraindicaciones y señales de alarma',
          text: 'Por qué la evaluación previa es el pilar absoluto antes de programar — y cómo identificar contraindicaciones absolutas y relativas para derivar a tiempo, no después.',
        },
        {
          tag: 'Pilar 03',
          title: 'Suelo pélvico y faja abdominal (diástasis)',
          text: '¿Es obligatorio hacer hipopresivos en todas las clientas? Vas a aprender a diferenciar Kegel, hipopresivos y trabajo de faja abdominal según el momento gestacional y el tipo de parto, para prevenir y recuperar sin generar más presión intraabdominal de la debida.',
        },
        {
          tag: 'Pilar 04',
          title: 'Preparación al parto y programación para "mujeres reales"',
          text: 'Cómo estructurar una sesión real de preparación corporal y sensorial al parto: postura, respiración, movilidad de pelvis y frecuencia óptima semanal para clientas con vida ocupada y sin experiencia previa en entrenamiento.',
        },
      ],
      bonus:
        '🚀 **Anticipo exclusivo:** al cierre de la charla te mostramos el mapa de ruta completo de la **Certificación en Embarazo Activo — Ejercicio Físico en el Embarazo y Postparto** de IdaClass Academy, para quienes quieran dar el salto profesional.',
    },

    {
      type: 'speaker',
      eyebrow: 'Quién dicta la charla',
      title: '**22 años** formando profesionales en ejercicio físico y embarazo',
      kicker: 'Embarazo Activo',
      name: 'Dra. Mariela Villar Heidelberger',
      role: 'Creadora y Directora de Embarazo Activo · Referente internacional en ejercicio físico durante el embarazo y el postparto',
      bio: 'Embarazo Activo trabaja con un **equipo docente interdisciplinario** de profesionales de la salud y el ejercicio físico. Desde **2008** forma profesionales a nivel mundial, siendo el único sistema de ejercicio físico para embarazadas y postparto certificado con **triple aval americano**: American College of Sports Medicine (ACSM), Athletics and Fitness Association of America (AFAA) y National Academy of Sports Medicine (NASM) — Providership #729.270.',
      bullets: [
        'Formación con **aval institucional oficial** y créditos educativos reconocidos internacionalmente.',
        'Modalidad online a través de la plataforma educativa **Activedemy**, con conferencias virtuales y foros de consulta por asignatura.',
        'Instancia **presencial complementaria** de práctica (6 a 7 horas), con espacio de consultas directas al docente a cargo.',
        'Enfoque que combina **evidencia científica actualizada** con aplicación real de consultorio y sala de entrenamiento — no protocolos genéricos bajados de internet.',
        'Formato flexible: cursada individual, en grupos reducidos o **corporativa (in company)** para equipos de centros de salud y gimnasios.',
      ],
      tags: [
        'Fisiología materno-fetal aplicada al ejercicio',
        'Creadora del Sistema Embarazo Activo (2008)',
        'Formadora en Latinoamérica y Europa',
        'ACSM',
        'AFAA',
        'NASM',
      ],
      stats: [
        { value: '22+', label: 'Años formando profesionales' },
        { value: '2008', label: 'Fundación de Embarazo Activo' },
        { value: '3', label: 'Avales internacionales' },
      ],
      photo: { src: '/landings/mariela-villar.jpg', badge: 'Expositora' },
    },

    {
      type: 'agenda',
      eyebrow: 'Mapa de la charla',
      title: 'Así vamos a recorrer la hora',
      intro:
        'Un recorte de la Certificación completa de Embarazo Activo, adaptado a 60 minutos con foco en lo aplicable de inmediato.',
      items: [
        {
          title: 'Bases fisiológicas del embarazo y el postparto',
          text: 'Cambios cardiorrespiratorios, hormonales (relaxina) y musculoesqueléticos: los 3 ejes que todo profesional debe dominar antes de programar.',
        },
        {
          title: 'Evaluación y contraindicaciones sin misterio',
          text: 'Las formas prácticas de screening previo: qué preguntar, qué observar y cuándo pedir el visto bueno del equipo obstétrico.',
        },
        {
          title: 'Suelo pélvico y faja abdominal: Kegel, hipopresivos y diástasis',
          text: 'Cómo evaluar y trabajar la faja abdominal sesión a sesión sin depender de protocolos genéricos ni de un solo método.',
        },
        {
          title: 'Métodos que funcionan: fuerza, superficies inestables y respiración',
          text: 'Cuándo introducir ejercicios de fuerza, trabajo en superficies inestables y técnicas respiratorias según el trimestre y el nivel de la clientela.',
        },
        {
          title: 'Preparación al parto y programación real de la semana',
          text: 'Estructura de sesión para preparación corporal y sensorial al parto, y frecuencia semanal para que el plan se sostenga hasta el día del parto y en el regreso al movimiento postparto.',
        },
      ],
    },

    {
      type: 'testimonials',
      eyebrow: 'Comunidad IdaClass',
      title: 'Profesionales que ya vivieron un episodio del ciclo',
      // TODO: reemplazar por 3 testimonios reales. El propio doc marca estos como
      // contenido de relleno ("gap-filling") — no publicar así.
      items: [
        {
          stars: 5,
          quote:
            '"Vengo a cada episodio de Club de Expertos porque siempre me llevo algo que aplico esa misma semana con mis clientas embarazadas. Nivel de contenido muy por arriba del streaming gratuito promedio."',
          role: 'Entrenadora personal, 5 años en el rubro',
        },
        {
          stars: 5,
          quote:
            '"Trabajaba con embarazadas sacando ejercicios «por las dudas», sin ningún criterio. Después de un episodio del ciclo empecé a entender qué podía indicar en cada trimestre y por qué mis clientas no avanzaban en su recuperación."',
          role: 'Kinesióloga, especializada en piso pélvico',
        },
        {
          stars: 5,
          quote:
            '"Lo bueno de estas charlas es que no te venden humo: te dan un protocolo concreto para aplicar el lunes en tu consultorio o tu sala, con tus propias pacientes."',
          role: 'Profesora de Educación Física, Rosario',
        },
      ],
    },

    {
      type: 'urgency',
      eyebrow: 'Atención',
      title: 'La transmisión es abierta. **Los beneficios reales, no.**',
      intro:
        'El streaming se ve por YouTube sin restricción, pero el acceso a los materiales, la sesión de preguntas en vivo y los beneficios de lanzamiento de la Certificación son únicamente para quienes se registran en esta página.',
      cards: [
        {
          icon: '🎙️',
          title: 'Preguntas en vivo, una sola vez',
          text: 'El espacio de preguntas al equipo docente de Embarazo Activo es exclusivo del momento en vivo. En el replay ya no se puede participar.',
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
          text: 'Guía descargable con los criterios de seguridad y las técnicas de suelo pélvico vistas en la charla, y acceso preferencial a los beneficios de lanzamiento de la Certificación en Embarazo Activo de IdaClass Academy.',
        },
      ],
      cta: { label: 'Quiero registrarme y asegurar mis beneficios →' },
    },

    {
      type: 'register',
      sideEyebrow: 'Club de Expertos · Episodio 03',
      sideTitle: 'Reservá tu lugar gratis',
      sideIntro:
        'Un lugar en el streaming en vivo de 60 minutos, con acceso al replay privado y al material descargable — solo para quienes se registran.',
      benefits: [
        'Streaming en vivo por YouTube',
        'Preguntas en vivo al equipo docente de Embarazo Activo',
        'Replay privado enviado solo a inscriptos',
        'Guía descargable con los criterios de seguridad y evaluación de suelo pélvico',
        'Acceso preferencial a los beneficios de lanzamiento de la Certificación en Embarazo Activo',
        'Certificado de participación IdaClass Academy',
      ],
      title: 'Registro rápido',
      subtitle: '100% gratis · Cupos limitados',
      submitLabel: 'Asegurar mi cupo gratuito →',
      micro: '⏱️ La inscripción cierra de forma automática al completarse el aforo de la sala virtual.',
      privacy:
        '🔒 Usamos tus datos solo para enviarte el acceso y la información del evento. No los compartimos con terceros.',
      source: 'club-expertos-embarazo-activo',
      fields: {
        nombre: { label: 'Nombre', placeholder: 'Tu nombre' },
        apellido: { label: 'Apellido', placeholder: 'Tu apellido' },
        email: { label: 'Correo electrónico principal', placeholder: 'tu@email.com' },
        telefono: { label: 'WhatsApp', placeholder: '' },
      },
      // Solo mensaje de éxito: el lead queda en la DB y una automatización externa
      // le envía el acceso por WhatsApp (mismo flujo que los otros eventos).
      thankyou: {
        title: '✅ ¡Tu lugar está reservado!',
        intro:
          'Te vamos a enviar el acceso al streaming por WhatsApp antes de que empiece — asegurate de tener bien tu número. ¡Nos vemos el viernes 25/9 a las 14:00 hs!', // FECHA
      },
    },

    {
      type: 'faq',
      eyebrow: 'Antes de anotarte',
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Necesito experiencia previa para entender la charla?',
          a: 'No. La charla está pensada tanto para profesionales que ya trabajan con embarazadas y mamás en postparto como para quienes quieren empezar a especializarse en esta población. Vas a salir con criterios aplicables desde el primer día, sin necesidad de conocimientos previos en obstetricia.',
        },
        {
          q: '¿Qué pasa si no puedo verla en vivo?',
          a: 'Si te registrás antes del cierre de inscripción, recibís el replay privado del episodio junto con el material descargable, aunque no puedas conectarte en el horario en vivo. Eso sí: el espacio de preguntas en directo al equipo docente es exclusivo del streaming original.',
        },
        {
          q: '¿Tiene algún costo?',
          a: 'No, el episodio es 100% gratuito. Solo pedimos el registro previo porque los cupos de la sala virtual son limitados por capacidad técnica.',
        },
        {
          q: '¿Qué es Club de Expertos?',
          a: 'Es el ciclo de masterclasses en vivo de IdaClass Academy, donde referentes de distintas especialidades del fitness y la salud comparten, en formato breve y aplicado, los criterios clínicos que después se desarrollan en profundidad en las certificaciones profesionales de IdaClass.',
        },
        {
          q: '¿Necesito ser kinesiólogo/a para especializarme en Embarazo Activo?',
          a: 'No es excluyente. La Certificación está dirigida a profesionales del ejercicio físico y de la salud con perfil técnico deportivo (entrenadores personales, profesores de Educación Física, kinesiólogos, instructores de sala) y a estudiantes avanzados de esas carreras.',
        },
        {
          q: '¿Recibo algún certificado?',
          a: 'Sí. Por participar del episodio en vivo recibís un certificado de participación de IdaClass Academy. La Certificación completa en Embarazo Activo, en cambio, entrega un certificado de asistencia con aval internacional de ACSM, AFAA y NASM, además del material teórico digitalizado.',
        },
      ],
    },

    {
      type: 'footer',
      brand: { text: 'Ida', accent: 'Class', sub: 'Academy' },
      claim: '25 años formando profesionales del fitness en Latinoamérica, en alianza con Embarazo Activo.',
      eventLine: 'Club de Expertos · Episodio 03 · 25/9 · 14:00 hs', // FECHA
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
      dateLabel: 'Stream Embarazo Activo · 25/9', // FECHA
      cta: { label: 'Reservar' },
    },
  ],
}
