import BlockRendererClient from "@/components/ui/BlockRendererClient";
import TituloSeccion from "@/components/ui/titulo-seccion";

const CursosEspciealizacionRequisitos = ({ dirigido }) => {
  const content = process.env.dev === true ? JSON.parse(dirigido) : dirigido;
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-4 container">
      <article className="w-full rounded-2xl overflow-hidden border-idaclass4 border-2 ">
        <TituloSeccion
          className={`py-1 my-0 text-2xl lg:text-2xl text-white bg-gradient-to-b from-[#0A456C] to-[#0088CA]`}
        >
          Requisitos
        </TituloSeccion>
        <ul className="text-sm mx-8 list-inside list-disc flex-1 flex flex-col justify-evenly py-4">
          <li>Mayor de 18 años o 16 con autorización de mayor responsable.</li>
          <li>Completar formulario de inscripción</li>
        </ul>
      </article>
      <article className="w-full rounded-2xl overflow-hidden  border-idaclass4 border-2 ">
        <TituloSeccion
          className={`py-1 my-0 text-2xl lg:text-2xl text-white bg-gradient-to-b from-[#0A456C] to-[#0088CA]`}
        >
          ¿A quién va dirigido?
        </TituloSeccion>
        {dirigido ? (
          <div className="text-sm mx-8 flex-1 flex flex-col justify-evenly py-4">
            <BlockRendererClient content={content} />
          </div>
        ) : (
          <ul className="text-sm mx-8 list-inside list-disc flex-1 flex flex-col justify-evenly py-4">
            <li>Público en general, sin conocimientos previos.</li>
            <li>Estudiantes de carreras afines.</li>
            <li>
              Deportistas amateurs, profesionales del Deporte, Salud y Fitness.
            </li>
          </ul>
        )}
      </article>

      <article className="w-full rounded-2xl overflow-hidden  border-idaclass4 border-2 ">
        <TituloSeccion
          className={`py-1 my-0 text-2xl lg:text-2xl text-white bg-gradient-to-b from-[#0A456C] to-[#0088CA]`}
        >
          Potencia tu empleabilidad
        </TituloSeccion>
        <h3 className="text-center py-4 font-bold">
          Accede a recursos y herramientas para tu exito
        </h3>
        <ul className="text-sm mx-8 list-inside list-disc flex-1 flex flex-col justify-evenly pb-4">
          <li>Bolsa de trabajo</li>
          <li>Red de Networking</li>
          <li>Eventos con expertos internacionales</li>
        </ul>
      </article>
    </section>
  );
};

export default CursosEspciealizacionRequisitos;
