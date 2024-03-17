const Herramienta = ({ rotar = false, contenido }) => {
  return (
    <h6
      className={`${
        rotar && `transform rotate-180`
      } h-28 flex flex-col items-center justify-center  bg-idaclass  text-white text-center text-base sm:text-2xl font-bold `}
    >
      {contenido}
    </h6>
  );
};

export default Herramienta;
