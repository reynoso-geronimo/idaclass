import { Button } from "@/components/ui/button";
import PersonalTrainer from "../../../public/v2/Instructor-de-Fitness-Grupal.jpg";
import Certificados from "../../../public/v2/certificados.png";
import Certificacion from "../../../public/v2/Certificacion.png";
import Skillclass from "../../../public/v2/skillclass.png";
import Contenidos from "../../../public/v2/ContenidosAlt.jpg";
import Flecha from "../../../public/v2/Flecha.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import CampaignForm from "../components/campaignForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CasosExito from "@/components/casos-exito";
import CursosContenido from "../components/CursosContenido";
import { getCursoFormacionFromDB } from "@/app/actions";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Header from "../components/Header";
import Link from "next/link";
import CursoFormacionModalidades from "@/app/cursos-formacion/[nombre]/_components/cursoFormacionModalidades";
import { ScheduleCard } from "../components/schedule-card";

const curso = {
  nombre: "Instructor de Fitness Grupal",
  modulos: [
    {
      titulo: "Módulo 1 de Fortaleza",
      contenido: [
        "Presentación del curso. Foco del módulo",
        "Aprendizaje de coreografías y conteo musical",
        "Técnica, ejecución y corrección de ejercicios",
        "Distintos ejercicios localizados y dinámicos con la utilización de materiales. Barra y discos más sus variantes",
        "Enseñanza de cargas recomendadas sobre músculos reclutados",
        "Manejo de grupo y corrección al alumno de técnicas varias",
        "Que los alumnos cumplan el objetivo de dictar clase con todas las herramientas entregadas",
      ],
    },
    {
      titulo: "Módulo 2 de Energía",
      contenido: [
        "Presentación del curso. Foco del modulo",
        "Aprendizaje de coreografías y conteo musical",
        "Técnica, ejecución y corrección de ejercicios",
        "Utilización de materiales y variantes",
        "Manejo de grupo, corrección de técnicas y motivación hacia el alumno",
      ],
    },
    {
      titulo: "Módulo 3 de Euforia",
      contenido: [
        "Presentación de curso. Foco del modulo",
        "Aprendizaje de coreografías y conteo musical",
        "Enfoque de Técnicas varias en puños patadas",
        "Manejo de grupo",
        "Concepto sobre las distintas artes marciales aplicadas al fitness grupal",
        "Que los alumnos cumplan el objetivo de dictar clase con todas las herramientas entregadas",
      ],
    },
    {
      titulo: "Módulo 4 Sprint Cycle",
      contenido: [
        "Presentación del curso, estructura de la clase",
        "Interpretacion musical y conteo",
        "Técnica de pedaleo",
        "Posiciones Básicas",
      ],
    },
    {
      titulo: "ANATOMIA",
      contenido: [
        "Anatomía aplicada al entrenamiento y a la condición física",
        "Capacidades motrices básicas y específicas",
      ],
    },
    {
      titulo: "BIOMECANICA",
      contenido: ["Definición. Posición anatómica. Ejes y planos"],
    },
    {
      titulo: "FISIOLOGIA",
      contenido: [
        "Bases fisiológicas del acondicionamiento muscular",
        "Sistemas energéticos, Descripción. Cronología dentro del acondicionamiento físico",
      ],
    },
  ],
};

const page = async () => {
  return (
    <main className="flex flex-col justify-start grow">
      <div className="bg-[#3A5DAE] text-white font-bold py-4 mt-0 flex flex-col sm:flex-row justify-center items-center sticky top-0 z-50">
        <div className="flex items-center justify-center max-sm:max-w-80">
          <Header />
        </div>
        <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit lg:hidden">
          <Link href="#form">QUIERO INSCRIBIRME</Link>
        </Button>
        <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit max-lg:hidden">
          <Link href="#form-lg">QUIERO INSCRIBIRME</Link>
        </Button>
      </div>

      <section className="w-full relative text-white lg:hidden">
        <Image src={PersonalTrainer} alt="Instructor de Fitness Grupal" className="w-full h-auto object-cover" />
        <div className="absolute bottom-10 left-8 space-y-2">
          <Badge className={"bg-orange-500 border border-white py-1.5"}>CURSO ONLINE</Badge>
          <h1 className="text-4xl font-black">
            Conviértete en <br />
            Instructor de Fitness Grupal
          </h1>
          <h2 className="text-sm">Transforma tu pasión en una carrera de éxito</h2>
        </div>
      </section>

      <section className="w-full flex justify-between gap-4 relative max-lg:hidden container mt-12">
        <Image
          src={PersonalTrainer}
          alt="Instructor de Fitness Grupal"
          className="object-cover object-top w-[380px] h-[500px] rounded-3xl"
        />

        <div className="space-y-2">
          <Badge variant={"outline"} className={"border-orange-500 border-2 text-orange-500 py-1.5"}>
            CURSO ONLINE
          </Badge>
          <h1 className="text-4xl font-black text-idaclass5">
            Conviértete en <br />
            Instructor de Fitness Grupal
          </h1>
          <h2 className="text-xl font-bold text-idaclass relative">
            Transforma tu pasión en una carrera de éxito
            <Image src={Flecha} alt="" className="absolute -right-8 -bottom-8 rotate-12" height={54} width={165} />
          </h2>
          <ul className="space-y-8 my-12">
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Obtén tu certificado y destácate
            </li>
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Trabaja en gimnasios en solo unos meses
            </li>
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Cambia la vida con entrenamiento
            </li>
            <li className="flex items-center gap-2">
              <Check className="bg-idaclass rounded-full text-white p-0.5" />
              Conviértete en líder en fitness grupal
            </li>
          </ul>
        </div>
        <div id="form-lg" />
        <div className="w-[300px]">
          <CampaignForm nombre={"Instructor de Fitness Grupal"} />
        </div>
      </section>

      <div className="lg:hidden" id="form">
        <CampaignForm nombre={"Instructor de Fitness Grupal"} />
      </div>

      <section className="container p-4 space-y-4">
        <h2 className={"text-idaclass5 text-4xl font-black text-center px-4"}>¿Qué aprenderás en este curso?</h2>
        <p className="text-pretty text-center">
          Esta formación de 6 meses te prepara para liderar las clases grupales más demandadas en gimnasios, combinando
          sólidas bases técnicas, teóricas y habilidades prácticas.
        </p>
        <div className="space-y-4">
          <p className="font-bold">En el curso, aprenderás:</p>
          <ul className="space-y-2">
            <li>• Dominio del conteo musical y técnicas de motivación grupal</li>
            <li>• Metodologías personalizadas según la intensidad y nivel de tus alumnos</li>
            <li>
              • Habilidad para planificar y dirigir sesiones completas que incluyan entrada en calor, parte principal y
              vuelta a la calma
            </li>
          </ul>
        </div>
      </section>

      <section className="container p-4 space-y-4">
        <h3 className="font-bold">Abordarás las cuatro técnicas más solicitadas:</h3>
        <ul className="space-y-4">
          <li>• Fitness de Combate: Euforia®, perfecto para mejorar el cardio y la resistencia</li>
          <li>• Localizada con Barras: Fortaleza® La combinación ideal para tonificar y fortalecer</li>
          <li>• Localizada / funcional: Energia® Sesiones dirigidas a tonificar de forma integral y aeróbica</li>
          <li>• Ciclismo Interior: Sprint Cycle® Ciclismo de interior energía y cardio al ritmo de la música</li>
        </ul>
      </section>
      <section className="p-4 bg-gray-200 space-y-4 lg:hidden">
        <h2 className={"text-idaclass5 text-3xl font-black text-center px-4"}>
          🎓 Obtén <br /> Certificación:
        </h2>
        <h2 className={"text-idaclass text-3xl font-black text-center px-4"}>impulsa tu carrera</h2>
        <h3 className="text-idaclass font-bold text-center">Este curso brinda 4 certificados:</h3>
        <Image src={Certificados} alt="Certificados" className="w-full h-auto object-cover" />
        <p className="text-center">
          <span className="text-idaclass font-bold">Obtén tu certificado IdaClass</span>{" "}
          <span className="font-bold">
            respaldado por 25 años de trayectoria y con más de 50.000 certificados en Latinoamérica.
          </span>{" "}
          Accede a la Certificación de extensión universitaria.
        </p>
      </section>

      <section className=" bg-gray-200 space-y-4 max-lg:hidden">
        <div className="flex container justify-around grow h-full">
          <div className="w-1/2 flex flex-col justify-around">
            <div>
              <h2 className={"text-idaclass5 text-3xl font-black  px-4"}>🎓 Obtén Certificación:</h2>
              <h2 className={"text-idaclass text-3xl font-black px-4"}>impulsa tu carrera</h2>
              <h3 className="text-idaclass font-bold px-4">Este curso brinda 4 certificados:</h3>
            </div>
            <Image src={Certificados} alt="Certificados" className="w-full h-auto object-cover" quality={100} />
            <p className="">
              <span className="text-idaclass font-bold">Obtén tu certificado IdaClass</span>{" "}
              <span className="font-bold">
                respaldado por 25 años de trayectoria y con más de 50.000 certificados en Latinoamérica.
              </span>{" "}
              Accede a la Certificación de extensión universitaria.
            </p>
          </div>
          <div className="relative">
            <Image src={Certificacion} alt="Certificados" className="object-contain" height={500} />
          </div>
        </div>
      </section>

      <section className="p-4 space-y-4">
        <h2 className={"text-idaclass5 text-3xl font-black text-center px-4"}>
          ¿Cómo te ayudamos a cumplir tus objetivos?
        </h2>
        <div className="px-4 flex flex-col items-center gap-4 ">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-center"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-full flex items-center justify-center" arrow={false}>
                <div className="flex flex-col lg:min-w-80 items-center justify-center gap-2 ">
                  <div className="bg-orange-500 rounded-full font-semibold flex items-center justify-center text-white size-7 text-center">
                    1
                  </div>
                  <h1 className="text-idaclass font-bold text-lg text-center">
                    Te brindamos clases <br />
                    en vivo con expertos
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" lg:max-w-80 ">
                <p className="text-center text-pretty">
                  Lo que te permite aclarar tus dudas al instante. Con nuestra plataforma podrás acceder al material de
                  estudio de forma sencilla, trabajarás en equipo y desarrollarás proyectos propios, con el apoyo de tus
                  compañeros y tutores.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="w-full flex items-center justify-center" arrow={false}>
                <div className="flex flex-col lg:min-w-80 items-center justify-center gap-2 ">
                  <div className="bg-orange-500 rounded-full font-semibold flex items-center justify-center text-white size-7 text-center">
                    2
                  </div>
                  <h1 className="text-idaclass font-bold text-lg text-center">
                    Te ayudamos a alcanzar <br />
                    tus metas profesionales
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" lg:max-w-80 ">
                <p className="text-center text-pretty">
                  Te equipamos con todas las habilidades claves para alcanzar tus metas profesionales, crear tu marca
                  personal hasta atraer a tus primeros clientes y convertirte en un experto en el manejo de clientes.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="w-full flex items-center justify-center" arrow={false}>
                <div className="flex flex-col lg:min-w-80 items-center justify-center gap-2 ">
                  <div className="bg-orange-500 rounded-full font-semibold flex items-center justify-center text-white size-7 text-center">
                    3
                  </div>
                  <h1 className="text-idaclass font-bold text-lg text-center">
                    Te preparamos para tu trabajo <br /> soñado desde el primer dia
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" lg:max-w-80 ">
                <p className="text-center text-pretty">
                  Con prácticas laborales reales y acceso a nuestra bolsa de empleo, te asesoramos para que emprendas o
                  empieces a trabajar de inmediato. ¡Todo lo que necesitas para lanzarte al éxito!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit lg:hidden">
            <Link href="#form"> QUIERO INSCRIBIRME </Link>
          </Button>
          <Button size="sm" className="bg-green-500 hover:bg-green-500/50 rounded-3xl w-fit max-lg:hidden">
            <Link href="#form-lg"> QUIERO INSCRIBIRME </Link>
          </Button>
        </div>
      </section>
      <section className="p-4 space-y-6 bg-gray-200 lg:hidden">
        <div className="space-y-2">
          <h2 className={"text-idaclass5 text-3xl font-black text-center px-4"}>🎁 Recibe tu </h2>
          <h2 className={"text-idaclass text-3xl font-black text-center px-4"}>Beneficio Exclusivo</h2>
        </div>
        <p className="text-center">
          Con tu inscripción accedes a 4 formaciones extras totalmente gratis para que aprendas como generar ingresos
          haciendo lo que amas:
        </p>

        <Image src={Skillclass} alt="skillclass" className="w-full h-auto object-cover" />
      </section>

      <section className="p-4 space-y-6 bg-gray-200 max-lg:hidden">
        <div className="max-w-4xl mx-auto flex flex-col ">
          <h2 className={"text-idaclass5 text-3xl font-black  "}>
            🎁 Recibe tu
            <span className={"text-idaclass text-3xl font-black  "}> Beneficio Exclusivo</span>
          </h2>
          <div className="flex items-center justify-center gap-8">
            <p className="w-1/2">
              Con tu inscripción accedes a 4 formaciones extras totalmente gratis para que aprendas como generar
              ingresos haciendo lo que amas:
            </p>

            <Image src={Skillclass} alt="skillclass" className="w-1/2" />
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <CursosContenido modulos={curso.modulos} />
      </section>
      <section className="max-lg:hidden container flex flex-wrap items-center justify-center gap-x-24 mb-12 ">
        <TituloSeccion className={"w-full"}>Programa de Estudio</TituloSeccion>
        <CursosContenido modulos={curso.modulos} />
        <Image src={Contenidos} alt="skillclass" className="w-1/3 object-contain" />
      </section>

      {/*    <ScheduleCard /> */}

      {/*  <CursoFormacionModalidades
        modalidades={"Online"}
        curso={curso}
        nombre={curso.nombre}
        tipo={"CURSO DE FORMACION"}
      />
 */}
      <CasosExito variant={"secondary"} />
    </main>
  );
};

export default page;
