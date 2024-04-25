import TituloSeccion from "@/components/ui/titulo-seccion";

const CursoFormacionRequisitos = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-4 container">
      <article className="w-full rounded-2xl overflow-hidden border-idaclass4 border-2 ">
        <TituloSeccion
          className={`py-1 my-0 text-2xl text-white bg-gradient-to-b from-idaclass to-idaclass4`}
        >
          Requisitos
        </TituloSeccion>
        <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly py-4">
          <li>Mayor de 18 años o 16 con autorizacion de mayor responsable</li>
          <li>Completar formulario de inscripción</li>
          <li>Apto médico (solo modalidad presencial).</li>
          <li>
            Certificado de escolaridad secundaria completa (solamente aquellas
            personas que deseen adquirir la Extensión Universitaria que
            proporciona IUYMCA).
          </li>
        </ul>
      </article>
      <article className="w-full rounded-2xl overflow-hidden  border-idaclass4 border-2 ">
        <TituloSeccion
          className={`py-1 my-0 text-2xl text-white bg-gradient-to-b from-idaclass to-idaclass4`}
        >
          A quien va dirigido
        </TituloSeccion>
        <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly py-4">
          <li>Público en general, sin conocimientos previos.</li>
          <li>Estudiantes de carreras afines.</li>
          <li>
            Deportistas amateurs, profesionales del Deporte, Salud y Fitness.
          </li>
        </ul>
      </article>

      <article className="w-full rounded-2xl overflow-hidden  border-idaclass4 border-2 ">
        <TituloSeccion
          className={`py-1 my-0 text-2xl text-white bg-gradient-to-b from-idaclass to-idaclass4`}
        >
          Potencia tu empleabilidad
        </TituloSeccion>
        <h3 className="text-center py-4 font-bold">
          Accede a recursos y herramientas para tu exito
        </h3>
        <ul className="mx-8 list-outside list-disc flex-1 flex flex-col justify-evenly py-4">
          <li>Bolsa de trabajo</li>
          <li>Pasantias</li>
          <li>Red de Networking</li>
          <li>Eventos con expertos internacionales</li>
        </ul>
      </article>
    </section>
  );
};

export default CursoFormacionRequisitos;
