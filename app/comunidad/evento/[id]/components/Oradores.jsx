import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TituloSeccion from "@/components/ui/titulo-seccion";

const Oradores = ({ oradores }) => {
  return (
    <section>
      <TituloSeccion className={"mb-4"}>
        ¿Quiénes dan este Webinar?
      </TituloSeccion>
      <h2 className="text-center">
        Nuestros profesionales con mejor calificación del sector fitness de
        Latinoamérica
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
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
    <article className="bg-idaclass5 flex flex-col lg:flex-row p-4 gap-4 rounded-xl">
      <div className="bg-white w-full h-36 lg:w-52 lg:h-72 shrink-0 rounded-xl my-auto flex items-center justify-center p-4">
        <Avatar className="lg:w-full lg:h-auto w-auto h-full">
          <AvatarImage
            src={`/speakers/${orador.nombre}.png`}
            alt={`${orador.nombre}`}
          />
          <AvatarFallback>{orador.nombre}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col py-4">
        <h3 className="text-idaclass3 font-bold text-2xl">{orador.nombre}</h3>
        <h2 className="text-orange-500 font-bold text-lg">{orador.titulo}</h2>
        <p className="text-white my-auto">
          {orador.bio && orador.bio?.length > 0 && orador.bio}
        </p>
      </div>
    </article>
  );
};
