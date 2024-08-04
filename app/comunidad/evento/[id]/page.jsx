import BlockRendererClient from "@/components/ui/BlockRendererClient";
import UniteComunidad from "../../components/uniteComunidad";
import { getEventoFromDB } from "@/app/actions";
import EventoHeader from "./components/EventoHeader";
import EventoBeneficios from "./components/EventoBeneficios";
import Oradores from "./components/Oradores";
import GrupoWhatsApp from "./components/GrupoWhatsApp";
import Bonos from "./components/Bonos";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegisterToView from "./components/RegisterToView";
export const revalidate = 360;

const page = async ({ params }) => {
  const evento = await getEventoFromDB(params.id);

  const contenido = process.env.dev === "true" ? JSON.parse(evento.cuerpo) : evento.cuerpo;

  return (
    <main className="">
      <EventoHeader evento={evento} />
      {/*  <UniteComunidad /> */}
      <div className="container flex justify-center mt-12 ">
        {evento?.video_link ? (
          <Button className="bg-emerald-500 rounded-2xl font-bold text-xl  text-balance  py-6 ">
            <Link href={"#video"}>Revive la clase</Link>
          </Button>
        ) : (
          <Button className="bg-emerald-500 rounded-2xl font-bold text-xl  text-balance  py-6 lg:hidden">
            <Link href={"#wa"}>Quiero inscribirme</Link>
          </Button>
        )}
      </div>
      <div className="container my-12 flex flex-col lg:flex-row gap-x-20 gap-y-4">
        <div>
          <BlockRendererClient content={contenido} />
        </div>
        {!evento?.video_link && (
          <GrupoWhatsApp className={"lg:h-[30rem] w-96"} sideBar={true} linkGrupo={evento?.walink || ""} />
        )}
      </div>
      {evento?.video_link && (
        <div id="video">
          <RegisterToView videoid={evento?.video_link} />
        </div>
      )}

      {/*       <EventoBeneficios /> */}
      {!evento?.video_link && <Bonos />}
      {evento.speakers?.length > 0 && <Oradores oradores={evento.speakers} />}
    </main>
  );
};

export default page;
