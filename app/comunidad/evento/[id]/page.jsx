import BlockRendererClient from "@/components/ui/BlockRendererClient";
import UniteComunidad from "../../components/uniteComunidad";
import { getEventoFromDB } from "@/app/actions";

import EventoHeader from "./components/EventoHeader";
import EventoBeneficios from "./components/EventoBeneficios";
import Oradores from "./components/Oradores";

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
      <EventoBeneficios />
      {evento.oradores?.length > 0 && <Oradores oradores={evento.oradores} />}
    </main>
  );
};

export default page;
