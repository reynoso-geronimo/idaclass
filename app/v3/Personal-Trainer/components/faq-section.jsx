"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Necesito experiencia previa para inscribirme?",
      answer: (
        <>
          ¡No hace falta tener experiencia previa! Nuestros cursos están pensados para todo público, sin importar tu nivel de conocimiento o condición física.
          <br />
          Empezás desde cero, paso a paso, con el apoyo de docentes expertos que te guían en todo momento.
          <br />
          Vas a contar con materiales claros, prácticos y recursos diseñados para que aprendas fácil.
        </>
      ),
    },
    {
      question: "¿El curso es 100% online?",
      answer: (
        <>
          ¡Sí! El curso es 100% online e incluye clases en vivo cada semana. Vas a aprender desde donde estés, usando tu celular o computadora, sin perder calidad ni acompañamiento.
          <br />
          Contás con una plataforma exclusiva donde vas a encontrar:
          <br />
          Videos explicativos y claros.
          <br />
          <br />
          Material de lectura descargable.
          <br />
          <br />
          Autoevaluaciones para reforzar lo aprendido.
          <br />
          <br />
          Además, una vez por semana tenés tu clase en vivo por Zoom, junto a tu docente y compañeros, para resolver dudas, compartir experiencias y profundizar todos los temas de la semana.
          <br />
          👉 Todo sin moverte de tu casa y con el respaldo de docentes reales para acompañarte paso a paso.
        </>
      ),
    },
    {
      question: "¿Cómo accedo a los materiales y a las clases grabadas?",
      answer: (
        <>
          Acceder es muy fácil 📲💻. Una vez que te inscribas, un integrante de nuestro equipo, te guiará paso a paso para que puedas ingresar a nuestro campus virtual.
          <br />
          <br />
          Ahí vas a encontrar todos los instructivos y tutoriales para acceder de forma simple a: módulos, materiales, guías prácticas y clases grabadas. Todo organizado para que estudies cuando quieras y desde donde quieras, sin complicaciones.
        </>
      ),
    },
    {
      question: "¿Qué incluye el curso con mi inscripción?",
      answer: (
        <>
          <br />
          Tu inscripción incluye todo lo necesario para formarte de verdad y sentirte acompañado en cada paso:
          <br />
          ✔️ Material teórico (ebooks y guías de estudio)
          <br />
          ✔️ Videos complementarios.
          <br />
          ✔️ Clases grabadas para repasar cuando quieras
          <br />
          ✔️ Tutorías, foros de consulta y soporte continuo
          <br />
          ✔️ Autoevaluaciones por clase para medir tu avance
          <br />
          ✔️ Exámenes finales por cada módulo
          <br />
          ✔️ Certificado oficial con código QR y matrícula verificable
          <br />
          Todo está pensado para que estudies a tu ritmo, con herramientas claras y el respaldo de un equipo experto.
        </>
      ),
    },
    {
      question: "¿Cómo obtengo mi certificado?",
      answer: (
        <>
          Al finalizar el curso y cumplir con los requisitos de egreso, vas a recibir tu certificado digital, que incluye:
          <br />
          ✅ Código QR único de autenticación.
          <br />
          ✅ Número de matrícula verificable.
          <br />
          Te lo enviamos directamente a tu email o WhatsApp, para que lo tengas siempre a mano y puedas presentarlo fácilmente cuando lo necesites.
        </>
      ),
    },
    {
      question: "¿Qué validez tiene el curso y certificación?",
      answer: (
        <>
          Tu certificación de IdaClass te respalda como profesional capacitado para trabajar en gimnasios, estudios, clubes o de forma independiente, con alumnos particulares, asesorías online y/o emprender tu negocio propio!
          <br />
          Es una credencial con respaldo, que te abre puertas laborales, suma valor a tu perfil y demuestra que tenés los conocimientos y la práctica necesarios para ayudar a otros a transformar su vida a través del entrenamiento.
          <br />
          Además, incluye número de matrícula y QR de validación para que puedas mostrarla con confianza ante empleadores o clientes.
        </>
      ),
    },
    {
      question: "¿Hay beneficios o becas si me inscribo ahora?",
      answer: (
        <>
          Al inscribirte accedés automáticamente a una BecaClass, un beneficio exclusivo que te ofrece hasta un 25% de descuento en tus cuotas mensuales o un 40% de descuento abonando el valor total del curso de contado. 
          <br />
          Además, sumás SkillClass: 3 cursos extra 100% gratuitos en Comunicación, Liderazgo, Ventas y Habilidades Digitales. Todo diseñado para que consigas más clientes, generes ingresos y construyas una reputación sólida como profesional del fitness.
        </>
      ),
    },
    {
      question: "¿Cuáles son los medios de pago disponibles?",
      answer: (
        <>
          Podés abonar tu inscripción de forma fácil y segura con tarjeta de débito o crédito.
          <br />
          Solo tenes que hacer clic en el botón de inscripción en ésta página.
          <br />
          Ahí vas a poder elegir tu medio de pago, poner el monto si querés pagar el curso de contado o la primer cuota, y confirmas tu inscripción en pocos minutos.
          <br />
          Una vez hecho el pago, recibís la confirmación por mail y WhatsApp, junto con los pasos para ingresar al campus virtual.
          <br />
          Todo 100% online, rápido y sin complicaciones.
        </>
      ),
    },
  ]

  return (
    <div className="px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4 text-left">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            <span className="text-cyan-500">¿Tienes dudas?</span>
            <br />
            Te respondemos todo.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
            Te dejamos respuestas claras para que tomes la decisión con confianza.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-100 border-none shadow-sm rounded-xl">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-gray-800 hover:no-underline data-[state=open]:text-cyan-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 leading-relaxed text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}


/* 
1. ¿Necesito experiencia previa para inscribirme?
¡No hace falta tener experiencia previa! Nuestros cursos están pensados para todo público, sin importar tu nivel de conocimiento o condición física.
Empezás desde cero, paso a paso, con el apoyo de docentes expertos que te guían en todo momento.
 Vas a contar con materiales claros, prácticos y recursos diseñados para que aprendas fácil.
2. ¿El curso es 100% online?
¡Sí! El curso es 100% online e incluye clases en vivo cada semana. Vas a aprender desde donde estés, usando tu celular o computadora, sin perder calidad ni acompañamiento.
Contás con una plataforma exclusiva donde vas a encontrar:
Videos explicativos y claros.


Material de lectura descargable.


Autoevaluaciones para reforzar lo aprendido.


Además, una vez por semana tenés tu clase en vivo por Zoom, junto a tu docente y compañeros, para resolver dudas, compartir experiencias y profundizar todos los temas de la semana.
👉 Todo sin moverte de tu casa y con el respaldo de docentes reales para acompañarte paso a paso.
3. ¿Cómo accedo a los materiales y a las clases grabadas?
Acceder es muy fácil 📲💻. Una vez que te inscribas, un integrante de nuestro equipo, te guiará paso a paso para que puedas ingresar a nuestro campus virtual.

Ahí vas a encontrar todos los instructivos y tutoriales para acceder de forma simple a: módulos, materiales, guías prácticas y clases grabadas. Todo organizado para que estudies cuando quieras y desde donde quieras, sin complicaciones.

4. ¿Qué incluye el curso con mi inscripción?


Tu inscripción incluye todo lo necesario para formarte de verdad y sentirte acompañado en cada paso:
✔️ Material teórico (ebooks y guías de estudio)
 ✔️ Videos complementarios.
 ✔️ Clases grabadas para repasar cuando quieras
 ✔️ Tutorías, foros de consulta y soporte continuo
 ✔️ Autoevaluaciones por clase para medir tu avance
 ✔️ Exámenes finales por cada módulo
 ✔️ Certificado oficial con código QR y matrícula verificable
Todo está pensado para que estudies a tu ritmo, con herramientas claras y el respaldo de un equipo experto.
5. ¿Cómo obtengo mi certificado?
Al finalizar el curso y cumplir con los requisitos de egreso, vas a recibir tu certificado digital, que incluye:
✅ Código QR único de autenticación.
✅ Número de matrícula verificable.
Te lo enviamos directamente a tu email o WhatsApp, para que lo tengas siempre a mano y puedas presentarlo fácilmente cuando lo necesites.
6. ¿Qué validez tiene el curso y certificación?
Tu certificación de IdaClass te respalda como profesional capacitado para trabajar en gimnasios, estudios, clubes o de forma independiente, con alumnos particulares, asesorías online y/o emprender tu negocio propio!
Es una credencial con respaldo, que te abre puertas laborales, suma valor a tu perfil y demuestra que tenés los conocimientos y la práctica necesarios para ayudar a otros a transformar su vida a través del entrenamiento.
Además, incluye número de matrícula y QR de validación para que puedas mostrarla con confianza ante empleadores o clientes.
7. ¿Hay beneficios o becas si me inscribo ahora?
Al inscribirte accedés automáticamente a una BecaClass, un beneficio exclusivo que te ofrece hasta un 25% de descuento en tus cuotas mensuales o un 40% de descuento abonando el valor total del curso de contado. 
Además, sumás SkillClass: 3 cursos extra 100% gratuitos en Comunicación, Liderazgo, Ventas y Habilidades Digitales. Todo diseñado para que consigas más clientes, generes ingresos y construyas una reputación sólida como profesional del fitness.
8.  ¿Cuáles son los medios de pago disponibles?
Podés abonar tu inscripción de forma fácil y segura con tarjeta de débito o crédito.
Solo tenes que hacer clic en el botón de inscripción en ésta página.
Ahí vas a poder elegir tu medio de pago, poner el monto si querés pagar el curso de contado o la primer cuota, y confirmas tu inscripción en pocos minutos.
Una vez hecho el pago, recibís la confirmación por mail y WhatsApp, junto con los pasos para ingresar al campus virtual.
Todo 100% online, rápido y sin complicaciones.

*/