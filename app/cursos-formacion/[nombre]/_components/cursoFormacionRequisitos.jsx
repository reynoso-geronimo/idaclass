import TituloSeccion from "@/components/ui/titulo-seccion";

const CursoFormacionRequisitos = () => {
  return (
    <section className="container flex flex-col justify-center gap-4 lg:flex-row">
      <article className="w-full overflow-hidden border-2 rounded-2xl border-idaclass4 ">
        <TituloSeccion  className={`py-1 my-0 text-2xl lg:text-2xl text-white bg-gradient-to-b from-[#0A456C] to-[#0088CA]`}>
          Requisitos
        </TituloSeccion>
        <ul className="flex flex-col flex-1 py-4 mx-8 text-sm list-disc list-inside justify-evenly">
          <li>Mayor de 18 años o 16 con autorización de mayor responsable</li>
          <li>Completar formulario de inscripción</li>
          <li>Apto médico (solo modalidad presencial).</li>
       {/*    <li>
            Certificado de escolaridad secundaria completa (solamente aquellas
            personas que deseen adquirir la Extensión Universitaria que
            proporciona IUYMCA).
          </li> */}
        </ul>
      </article>
      <article className="w-full overflow-hidden border-2 rounded-2xl border-idaclass4 ">
      <TituloSeccion  className={`py-1 my-0 text-2xl lg:text-2xl text-white bg-gradient-to-b from-[#0A456C] to-[#0088CA]`}>
          ¿A quién va dirigido?
        </TituloSeccion>
        <ul className="flex flex-col flex-1 py-4 mx-8 text-sm list-disc list-inside justify-evenly">
          <li>Público en general, sin conocimientos previos.</li>
          <li>Estudiantes de carreras afines.</li>
          <li>
            Deportistas amateurs, profesionales del Deporte, Salud y Fitness.
          </li>
        </ul>
      </article>

      <article className="w-full overflow-hidden border-2 rounded-2xl border-idaclass4 ">
        <TituloSeccion  className={`py-1 my-0 text-2xl lg:text-2xl text-white bg-gradient-to-b from-[#0A456C] to-[#0088CA]`}>
          Potencia tu empleabilidad
        </TituloSeccion>
        <h3 className="py-4 font-bold text-center">
          Accede a recursos y herramientas para tu éxito
        </h3>
        <ul className="flex flex-col flex-1 pb-4 mx-8 text-sm list-disc list-inside justify-evenly">
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
