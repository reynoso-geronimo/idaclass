import EventoCard from "./eventoCard";

const Eventos = ({ eventos }) => {
  return eventos.length > 0 ? (
    <div className=" flex max-lg:flex-col gap-4 py-2">
      {eventos.map((evento, index) => (
        <EventoCard evento={evento} key={evento.id + index} />
      ))}
    </div>
  ) : (
    ""
  );
};

export default Eventos;
