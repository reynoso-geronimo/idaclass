import EmpresasPartners from "../../components/empresasParteners";

import ComunidadHero from "./components/ComunidadHero";
import ComunidadIntro from "./components/ComunidadIntro";
import ComunidadRegistro from "./components/ComunidadRegistro";
import ComunidadContenido from "./components/ComunidadContenido";
import Faq from "@/components/ui/faq";

const Page = () => {
  return (
    <main className="min-h-[100svh]">
      <ComunidadHero />
      <div className="my-8">
        <EmpresasPartners />
      </div>
      <ComunidadIntro />
      <ComunidadRegistro />
      <ComunidadContenido />
      <section>
        <Faq preguntas={preguntas} />
      </section>
    </main>
  );
};
const preguntas = [
  {
    pregunta: "¿Cuales son los beneficios de la Comunidad Classera?",
    respuesta:
      "Classera es una vibrante comunidad en on line diseñada para todos los que integran el ecosistema sport Fitness, profesionales estudiantes amantes de la actividad física emprendedores .todos los beneficios están divididos por 3 áreas de interés donde podrás acceder a una amplia gama de recursos, oportunidades de empleo, eventos gratuitos, networking y conexiones profesionales para ayudarte a avanzar en tu carrera y alcanzar tus objetivos personales.",
  },
  {
    pregunta: "¿Cuales son las áreas de interés de la Comunidad?",
    respuesta:
      "Nuestras tres áreas principales son: Idaclass Hub: Encontrarás contenido educativo, conocimiento para crecer en tu carrera profesional. Idaclass Jobs: Conecta con oportunidades laborales en la industria Sport fitness. Idaclass Connect: Amplía tu red de contactos profesionales para impulsar tus proyectos y carrera.",
  },
  {
    pregunta: "¿Tiene un costo unirse a la comunidad?",
    respuesta:
      "Unirse a la comunidad NO tiene ningún costo de membresia o inscripción es libre y gratuita",
  },
  {
    pregunta: "¿Cómo puedo unirme a la comunidad de IdaClass?",
    respuesta:
      "Es fácil unirse a la comunidad Classera. Simplemente completa nuestro formulario de inscripción en línea y estarás listo para acceder a todas las funciones y recursos que ofrecemos. Además, también puedes interactuar con otros miembros de la comunidad a través de nuestro servidor de Discord, donde encontrarás discusiones grupales y oportunidades de networking.",
  },
  {
    pregunta: "¿Puedo salir de la comunidad si así lo deseara?",
    respuesta:
      "Ser parte de la comunidad no tiene tiempo cada persona puede decidir en que momento deja su espacio y se retira de la misma",
  },
  {
    pregunta:
      "¿Cuáles son las consecuencias de no cumplir con las normas de la comunidad?",
    respuesta:
      "El incumplimiento de las normas de la comunidad puede resultar en acciones disciplinarias, que van desde una advertencia hasta la suspensión temporal o la expulsión permanente, dependiendo de la gravedad del caso y a discreción de los administradores.",
  },
];

export default Page;
