import BlockRendererClient from "@/components/ui/BlockRendererClient";
import UniteComunidad from "../../components/uniteComunidad";
import { getEventoFromDB } from "@/app/actions";
import EventoHeader from "./components/EventoHeader";
import EventoBeneficios from "./components/EventoBeneficios";
import Oradores from "./components/Oradores";
import GrupoWhatsApp from "./components/GrupoWhatsApp";
import Bonos from "./components/Bonos";


const page = async ({ params }) => {
  const evento = await getEventoFromDB(params.id);

  const contenido =
    process.env.dev === "true" ? JSON.parse(evento.cuerpo) : evento.cuerpo;
  return (
    <main className="">
      <EventoHeader evento={evento} />
      <UniteComunidad />
      <div className="container my-12 flex flex-col lg:flex-row gap-x-20 gap-y-4">
        <div>
          <BlockRendererClient content={contenido} />
        </div>
        <GrupoWhatsApp className={"lg:h-[30rem] w-96"} sideBar={true} linkGrupo={evento?.walink||""}/>
      </div>
      <EventoBeneficios />
      <Bonos/>
      {evento.speakers?.length > 0 && <Oradores oradores={evento.speakers} />}
    </main>
  );
};

export default page;
