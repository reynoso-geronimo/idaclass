import BlockRendererClient from "@/components/ui/BlockRendererClient";
import UniteComunidad from "../../components/uniteComunidad";
import { getEventoFromDB } from "@/app/actions";

import EventoHeader from "./components/EventoHeader";

const page = async ({ params }) => {
  const [evento] = await Promise.all([getEventoFromDB(params.id)]);
  const contenido =
    process.env.dev === "true" ? JSON.parse(evento.cuerpo) : evento.cuerpo;
  return (
    <main className="">
      <EventoHeader evento={evento} />
      <UniteComunidad />
      <div className="container mt-12">
        <BlockRendererClient content={contenido} />
      </div>
    </main>
  );
};

export default page;
