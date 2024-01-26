import Image from "next/image";
const paises = ["ar", "py", "bo", "uy", "cl", "pe", "ec", "co"];

const Banderas = () => {
  return (
    <section  className="flex container justify-center mb-12">
      {paises.map(pais => (
        <div key={pais}>
          <Image
            src={`https://flagcdn.com/${pais}.svg`}
            width={100}
            height={100}
            alt={pais}
            className="shadow-2xl"
          ></Image>
          
        </div>
      ))}
    </section>
  );
};

export default Banderas;
