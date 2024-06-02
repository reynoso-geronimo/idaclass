import BlockRendererClient from "@/components/ui/BlockRendererClient";
import UniteComunidad from "../../components/uniteComunidad";
import { getEventoFromDB } from "@/app/actions";


import EventoHeader from "./components/EventoHeader";

const page = async ({ params }) => {
  const [evento] = await Promise.all([getEventoFromDB(params.id)]);
  const contenido = JSON.parse(evento.cuerpo);
  return (
    <main className="">
     <EventoHeader evento={evento}/>
      <UniteComunidad />
      <div className="px-0 container flex flex-col lg:flex-row gap-8 mt-12">
        <BlockRendererClient content={contenido} />
      </div>
    </main>
  );
};

export default page;
