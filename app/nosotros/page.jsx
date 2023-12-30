import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="max-w-lg mx-auto text-center mb-8">
          <h1 className="text-xl text-center font-bold text-black">Sobre Nosotros</h1>
          <p className="text-center text-blue-700 text-xl">
            Somos la primera Digital School de Latam con estándar de formación.
          </p>
          <p className="text-center text-blue-700">
            {/* ... Contenido ... */}
          </p>
          <div className="flex mb-8 ml-auto">
        
            <Image
              src="/personaltrainer.webp"
              alt="curso"
              width={200}
              height={150}
              style={{
                width: "90%",
                height: "300px",
                marginLeft:"500px"
              }}
            />
            
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="max-w-lg mx-auto text-center mb-8">
          <h1 className="text-xl text-center font-bold text-black">Nuestra historia</h1>
          <p className="text-center text-blue-700 text-xl">
            Somos la primera Digital School de Latam con estándar de formación.
          </p>
          <p className="text-center text-blue-700">
            {/* ... Contenido ... */}
          </p>
          <div className="flex justify-center mb-8">
            <Image
              src="/personaltrainer.webp"
              alt="curso"
              width={200}
              height={150}
              style={{
                width: "90%",
                height: "300px",
                marginRight:"500px"
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="max-w-lg mx-auto text-center mb-8">
          <h1 className="text-xl text-center font-bold text-black">Nuestro presente</h1>
          <p className="text-center text-blue-700 text-xl">
            Somos la primera Digital School de Latam con estándar de formación.
          </p>
          <p className="text-center text-blue-700">
            {/* ... Contenido ... */}
          </p>
          <div className="flex justify-center mb-8">
            <Image
              src="/personaltrainer.webp"
              alt="curso"
              width={200}
              height={150}
              style={{
                width: "90%",
                height: "300px",
                marginLeft:"500px"
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
        <div className="max-w-lg mx-auto text-center mb-8">
          <h1 className="text-xl text-center font-bold text-black">Nuestro futuro</h1>
          <p className="text-center text-blue-700 text-xl">
            Somos la primera Digital School de Latam con estándar de formación.
          </p>
          <p className="text-center text-blue-700">
            {/* ... Contenido ... */}
          </p>
          <div className="flex justify-center mb-8  ">
            <Image
              src="/personaltrainer.webp"
              alt="curso"
              width={200}
              height={150}
              style={{
                width: "90%",
                height: "300px",
                marginRight:"500px"
              }}
            />
          </div>
        </div>
      </div>
      </div>




      
    </>
  );
};

export default Page;


