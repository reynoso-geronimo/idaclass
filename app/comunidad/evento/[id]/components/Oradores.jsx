import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TituloSeccion from "@/components/ui/titulo-seccion";

const Oradores = ({ oradores }) => {
  return (
    <section>
      <TituloSeccion className={"mb-4 px-8"}>
        Conoce a los oradores expertos que te guiaran al éxito
      </TituloSeccion>
      <h2 className="text-center container">
        Nuestros profesionales con mejor calificación del sector fitness de
        Latinoamérica
      </h2>
      <div className={`container grid grid-cols-1 gap-4 my-12 ${oradores.length > 1? "md:grid-cols-2" : " max-w-lg"}`}>
        {oradores.length > 0 &&
          oradores.map(orador => <Orador key={orador} orador={orador} />)}
      </div>
    </section>
  );
};

export default Oradores;

const Orador = ({ orador }) => {
  console.log("orador", orador);
  return (
    <article className="bg-idaclass5 flex flex-col justify-start xl:flex-row p-4 rounded-xl gap-4">
      <div className="bg-white w-full h-36 xl:w-52 xl:h-72 shrink-0 rounded-xl mt-0 flex items-center justify-center p-4 xl:my-auto">
        <Avatar className="xl:w-full xl:h-auto w-auto h-full aspect-square">
          <AvatarImage
            src={`/speakers/${orador.nombre}.png`}
            alt={`${orador.nombre}`}
          />
          <AvatarFallback>{orador.nombre}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <h3 className="text-idaclass3 font-bold text-2xl">{orador.nombre}</h3>
        <h2 className="text-orange-500 font-bold text-lg">{orador.titulo}</h2>
        <p className="text-white mt-4">
          {orador.bio && orador.bio?.length > 0 && orador.bio}
        </p>
      </div>
    </article>
  );
};
