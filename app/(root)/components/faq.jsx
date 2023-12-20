import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const preguntas = [
  {
    pregunta: "¿Quién puede realizar los cursos de IdaClass?",
    respuesta:
      "Los cursos están dirigidos a mayores de 18 años con o sin conocimientos previos, amantes de la actividad física, deportistas, alumnos de gimnasios, como así también instructores de fitness, profesores de educación física o profesionales de la salud con intención incorporar o ampliar sus conocimientos.",
  },
  {
    pregunta: "¿Cuáles son las modalidades de estudio?",
    respuesta: (
      <div>
        <p>
          En IdaClass puedes elegir la modalidad que más se adapte a tus
          necesidades, actualmente ofrecemos:
        </p>
        <ol className="list-inside list-decimal ml-6">
          <li>
            <span className="font-bold">
              Modalidad Online (Híbrida Sincrónica):{" "}
            </span>
            cuenta con clases teórico práctica en vivo mediante la plataforma
            zoom, se cursa una vez por semana y cada clase dura 2hs. Además
            tienen disponible material teórico interactivo, autoevaluaciones
            para medir tus avances, más videos con expertos, conferencias,
            material complementario y tutoría con nuestro equipo de trainers
            educativos, para que puedas despejar dudas o realizar consultas.
          </li>
          <li>
            <span className="font-bold">Modalidad Asincrónica Online:</span> con
            esta modalidad podrás estudiar a tu propio ritmo, desde cualquier
            computadora o dispositivo móvil. No cuenta con fecha de inicio ni de
            finalización, el tiempo de cursada lo manejas vos. Una vez
            inscrita/o al curso, accedes completamente al mismo en un plazo no
            mayor a 48hs hábiles. En la plataforma encontraras videos, material
            teórico y autoevaluaciones.
          </li>
          <li>
            <span className="font-bold">
              ¡NUEVO! Modalidad Híbrida Presencial:
            </span>{" "}
            con clases en los gimnasios Sedes, se cursa cada 15 días y cada
            clase dura 3hs. Además, la parte teórica del curso la realizan en
            nuestra Aula Virtual. donde encontraras todas las herramientas y
            recursos interactivos. Videos, tutorías acordes a una capacitación
            Premium.
          </li>
        </ol>
      </div>
    ),
  },
  {
    pregunta: "¿Que tipo de certificación obtengo?",
    respuesta: (
      <div>
        <p>
          IdaClass es una Institución Privada, cuenta con más de 25 años dentro
          del sector. La trayectoria y reconocimiento le brinda al egresado una
          mayor posibilidad al postular algún puesto laboral. Al tener esta
          característica puedes ejercer tanto a nivel nacional o internacional.
          Cabe destacar que nuestros cursos de formación cuentan con el Aval
          internacional de la universidad YMCA, ya que la misma se encuentra en
          más de 100 países. Según el lugar en el que te encuentres recuerda que
          pueden pedirte algún otro tipo de requisito adicional. Por último,
          nuestra certificación es única ya que las formaciones están diseñadas
          bajo un estándar de calidad y código de ética profesional, que suma
          prestigio y credibilidad en el mercado laboral.
        </p>
        <p>
          <span className="font-bold">Importante:</span> en IdaClass la
          capacitación es integral, esto hace que el alumno pueda acceder a una
          certificación múltiple según el programa que contrate, lo que
          impactará en acreditación de más certificaciones al momento de
          presentar su CV.
        </p>
        <p>
          Además todas las certificaciones son{" "}
          <span className="font-bold">
            autenticadas con código QR y número de matrícula
          </span>{" "}
          único por cada egresado.
        </p>
      </div>
    ),
  },
  {
    pregunta: "¿Cuál es el sistema de acreditación del curso?",
    respuesta: (
      <div>
        <p>Los cursos tienen las siguientes formas de exámenes.</p>
        <ul className="list-inside list-disc ml-6">
          <li>
            Autoexamen: Estos exámenes son luego de cada clase, el mismo tiene
            una calificación conceptual.
          </li>
          <li>
            Examen cierre de Módulo: Estos exámenes se habilitan luego del
            último tema visto en cada módulo, la misma cuenta con una
            calificación numérica.
          </li>
          <li>
            Examen Final: Este examen se realiza únicamente al completar la
            totalidad de meses y módulos de cursada, el mismo cuenta con
            calificación numérica.
          </li>
        </ul>
        <p>Exámenes con calificación Numérica:</p>
        <ul className="list-inside list-disc ml-6">
          <li>
            Se aprueba con una calificación mínima de 4 puntos (Exámenes
            Intermedios), dicha calificación se refiere al 75% del examen
            correctamente realizado. En cuanto al Examen Final debe contar con
            una calificación mínima de 7 puntos. Todas las calificaciones
            numéricas se promedian al finalizar la carrera, para recibir la
            certificación deben cumplir con un promedio de 7 puntos o más.
          </li>
        </ul>
      </div>
    ),
  },
  {
    pregunta: (
      <p>
        ¿Es obligatorio tener el Secundario o Educación Media finalizada para
        realizar estos cursos?
      </p>
    ),
    respuesta: (
      <p>
        No es obligatorio ya que se admiten alumnos desde los 16 años con
        autorización de un mayor responsable. En el caso de aquellas alumnos que
        deseen adquirir el Aval de Extensión Universitaria que proporciona
        IUYMCA, deben tener finalizado y aprobado el nivel secundario o
        educación media, para lo cual es requisito obligatorio presentar la
        documentación que así lo compruebe.
      </p>
    ),
  },
  {
    pregunta: <p>¿Cuál es el porcentaje mínimo de asistencia?</p>,
    respuesta: (
      <p>
        En caso de cursada Híbrido Presencial y/o Sincrónica, se solicita el 75%
        de Asistencia a la cursada. Con un máximo de 2 Inasistencias permitidas
        por módulo. Las mismas se renuevan al comenzar el siguiente módulo. En
        caso de cursar de Forma Asincrónica Virtual se medirá el porcentaje de
        progreso de la visualización de contenido subido en la plataforma.
      </p>
    ),
  },
  {
    pregunta: (
      <p>¿Por cuánto tiempo tengo acceso al curso luego de haber egresado?</p>
    ),
    respuesta: <p>Tienes acceso al curso de por vida.</p>,
  },
  {
    pregunta: <p>¿ Como accedo a una BecaClass o beneficio exclusivo ?</p>,
    respuesta: (
      <p>
        IdaClass Academy creó un <span className="font-bold">Beca Única</span>{" "}
        para aquellos que buscan una solución y de forma sencilla poder acceder
        a una ayuda, que le permita hacer más accesible el inicio de su carrera.
        Aquellos interesados deben solicitarlo por Email a
        hola@idaclassacademy.com el departamento académico recibirá la consulta
        y un asesor de nuestro equipo se pondrá en contacto a la brevedad.
      </p>
    ),
  },
];

const Faq = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl text-center font-extrabold w-[full] mt-16 mb-4 mx-4 text-indigo-950 ">
        Preguntas frecuentes
      </h2>
      <Accordion
        type="single"
        collapsible
        className="m-6 border-2 border-sky-950 border-t-0 w-[1024px]"
      >
        {preguntas.map((pregunta, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-sm md:text-lg border-t-2 border-sky-950 text-left px-4 ">
              {pregunta.pregunta}
            </AccordionTrigger>
            <AccordionContent className="text-xs md:text-base p-2 border-t-[1px] border-sky-950 ">
              {pregunta.respuesta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
