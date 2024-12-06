import Hero from "./_components/hero";
import CursosFormacion from "./_components/cursos-formacion";
import Certificacion from "./_components/certificacion";
import PartnersEducativos from "@/components/partnersEducativos";

import Soluciones from "./_components/soluciones";
import Intro from "./_components/intro";
import CasosExito from "../../components/casos-exito";
import EquipoProfesional from "../../components/equipo-profesional";
import BecaAsesorate from "../../components/becaAsesorate";
import EmpresasPartners from "../../components/empresasParteners";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Ventajas from "./_components/ventajas";
import Faq from "@/components/ui/faq";
import Sedes from "@/components/ui/sedes";
import Sede from "@/models/Sede";

const DynamicCursosEspecializacion = dynamic(() => import("./_components/cursos-especializacion"), {
  ssr: false,
  loading: () => (
    <div className="text-white pt-[15%] lg:pt-12 container text-center bg-black h-[400px]">
      <h3 className="text-idaclass3 text-4xl font-bold">CURSOS ESPECIALIZADOS</h3>

      <ul className="list-inside list-disc my-2">
        <li>Estudia a tu ritmo </li>
        <li>Expertos internacionales </li>
        <li>Elije tu area de especialización</li>
      </ul>
      <Link href={"/cursos-especializados"}>
        <Button variants="lg" className="rounded-lg mt-4">
          Ver todos los cursos
        </Button>
      </Link>
    </div>
  ),
});
export default async function Home() {
 

  return (
    <main className="overflow-hidden flex flex-col">
      <Hero />
      <PartnersEducativos />
      <Intro />
      <Ventajas />
      <CursosFormacion />
      {/* <Banderas/> */}
      <Soluciones />
      <DynamicCursosEspecializacion />

      <Certificacion />

      <EquipoProfesional
        titulo="Conoce al equipo de"
        titulo2="Trainers Educativos"
        titulo2Class="text-idaclass3"
        titulo3="que te guiará al éxito"
      />

      <CasosExito />

      <BecaAsesorate />
      <EmpresasPartners />

      <Faq preguntas={preguntas} />
    </main>
  );
}

const preguntas = [
  {
    pregunta: "¿Quién puede realizar los cursos de IdaClass?",
    respuesta:
      "Nuestros cursos están abiertos para personas mayores de 18 años, tanto si tienen experiencia previa como si no. Son ideales para amantes del ejercicio, deportistas, alumnos de gimnasios, instructores de fitness, profesores de educación física o profesionales de la salud que quieran aprender o ampliar sus conocimientos. También podrán aplicar alumnos desde los 16 años, con autorización de un mayor responsable.",
  },
  {
    pregunta: "¿Cuáles son las modalidades de estudio?",
    respuesta: (
      <div>
        <p>
          <strong>Cursos de formación</strong>
        </p>
        <ul>
          <li>
            <strong>Modalidad online en vivo:</strong> clases en vivo a través de Zoom una vez por semana, con material
            interactivo, autoevaluaciones y tutoría con nuestros trainers. Todos los cursos de formación están
            disponibles en esta modalidad.
          </li>
          <li>
            <strong>¡NUEVO! Modalidad híbrida presencial:</strong> clases en gimnasios cada 15 días, con parte teórica
            en nuestra Aula Virtual y recursos interactivos. Podrás encontrar algunos de nuestro cursos de fomación con
            esta modalidad. Consulta con nuestros asesores para más información.
          </li>
        </ul>
        <p>
          <strong>Cursos especializados</strong>
        </p>
        <ul>
          <li>
            <strong>Modalidad online asincrónica:</strong> Estudia a tu ritmo desde cualquier dispositivo, con acceso al
            curso completo sin fechas límite.
          </li>
        </ul>
      </div>
    ),
  },
  {
    pregunta: "¿De qué me servirá la certificación?",
    respuesta: (
      <div>
        <p>La certificación de IdaClass te brinda ventajas significativas:</p>
        <ul>
          <li>
            <strong>Reconocimiento en el sector:</strong> Con más de 25 años de experiencia, nuestra certificación te
            destaca en el mercado laboral, tanto a nivel nacional como internacional.
          </li>
          <li>
            <strong>Aval internacional:</strong> Respaldada por la universidad IUYMCA, presente en más de 100 países,
            nuestra certificación abre puertas en todo el mundo.
          </li>
          <li>
            <strong>Certificación múltiple:</strong> Puedes obtener múltiples certificaciones según el programa que
            elijas, enriqueciendo tu CV.
          </li>
          <li>
            <strong>Autenticación segura:</strong> Todas nuestras certificaciones de IdaClass cuentan con código QR y
            número de matrícula único, garantizando su autenticidad.
          </li>
          <li>
            <strong>Credibilidad y prestigio:</strong> Nuestros cursos están diseñados bajo estándares de calidad y
            ética profesional, otorgándote prestigio y credibilidad.
          </li>
        </ul>
      </div>
    ),
  },
  {
    pregunta: "¿Cuál es el sistema de acreditación del curso?",
    respuesta: (
      <div>
        <p>Nuestras formaciones tienen tres tipos de exámenes.</p>
        <ul>
          <li>
            <strong>Autoevaluaciones:</strong> se habilitará después de cada clase, no tienen una calificación numérica,
            sino conceptual.
          </li>
          <li>
            <strong>Examen intermedios:</strong> tendrás que realizarlo al finalizar cada módulo. Aprobarás con una
            calificación mínima de 4 puntos, lo equivalente al 75% de respuestas correctas.
          </li>
          <li>
            <strong>Examen final:</strong> lo rendirás al finalizar todos los módulos de cursada. Aprobarás con una
            calificación mínima de 7 puntos.
          </li>
        </ul>
        <p>
          Todas las calificaciones numéricas, de los exámenes intermedios y el final, se promedian al finalizar la
          carrera y para recibir la certificación deberás cumplir con un promedio de 7 puntos o más.
        </p>
      </div>
    ),
  },
  {
    pregunta: (
      <p>¿Es obligatorio tener nivel secundario o educación media finalizados para realizar estas formaciones?</p>
    ),
    respuesta: (
      <p>
        No. Sin embargo, para obtener el aval de extensión universitaria de IUYMCA, es necesario tener el nivel
        secundario o educación media aprobados y presentar los documentos que lo comprueben.
      </p>
    ),
  },
  {
    pregunta: <p>¿Cuál es el porcentaje mínimo de asistencia?</p>,
    respuesta: (
      <p>
        Para los cursos de formación, es necesario asistir al menos al 75% de las clases. Puedes tener hasta 2
        inasistencias por módulo. <br />
        Para cursos especializados, podrás hacerlo a tu ritmo y se evaluará tu progreso mediante el porcentaje de
        contenido que visualices y actividad en la plataforma.
      </p>
    ),
  },
  {
    pregunta: <p>¿Por cuánto tiempo tendré acceso al curso luego de haber egresado?</p>,
    respuesta: <p>Tendrás acceso de por vida a nuestras formaciones.</p>,
  },
  {
    pregunta: <p>¿Como accedo a una BecaClass?</p>,
    respuesta: (
      <p>
        Desde IdaClass creamos un sistema de becas para aquellos que buscan una solución que les permita hacer más
        accesible el inicio de su carrera. <br />
        Para acceder a una BecaClass, simplemente envía un correo electrónico a hola@idaclassacademy.com solicitando la
        beca. Nuestro departamento académico revisará tu solicitud y un asesor se pondrá en contacto contigo pronto.
      </p>
    ),
  },
];
