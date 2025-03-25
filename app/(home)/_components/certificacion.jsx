import Image from "next/image";
import CertificacionImg from "../../../public/v2/Certificacion.png";
import Certificados from "../../../public/v2/certificados.png";

const Certificacion = () => {
  return (
    <>
      <section className="container p-4 space-y-4 bg-gray-200 lg:hidden">
        <h2 className={"text-idaclass5 text-3xl font-black text-center px-4"}>
          🎓 Obtén <br /> Certificación:
        </h2>
        <h2 className={"text-idaclass text-3xl font-black text-center px-4"}>impulsa tu carrera</h2>
        <h3 className="font-bold text-center text-idaclass">Este curso brinda 4 certificados:</h3>
        <Image src={Certificados} alt="Certificados" className="object-cover w-full h-auto" />
        <p className="text-center">
          <span className="font-bold text-idaclass">Obtén tu certificado IdaClass</span>{" "}
          <span className="font-bold">
            respaldado por 25 años de trayectoria y con más de 50.000 certificados en Latinoamérica.
          </span>{" "}
          Accede a la Certificación de extensión universitaria.
        </p>
      </section>

      <section className="container space-y-4 bg-gray-200 max-lg:hidden">
        <div className="container flex justify-around h-full grow">
          <div className="flex flex-col justify-around w-1/2">
            <div>
              <h2 className={"text-idaclass5 text-3xl font-black  px-4"}>🎓 Obtén Certificación:</h2>
              <h2 className={"text-idaclass text-3xl font-black px-4"}>impulsa tu carrera</h2>
              <h3 className="px-4 font-bold text-idaclass">Este curso brinda 4 certificados:</h3>
            </div>
            <Image src={Certificados} alt="Certificados" className="object-cover w-full h-auto" quality={100} />
            <p className="">
              <span className="font-bold text-idaclass">Obtén tu certificado IdaClass</span>{" "}
              <span className="font-bold">
                respaldado por 25 años de trayectoria y con más de 50.000 certificados en Latinoamérica.
              </span>{" "}
              Accede a la Certificación de extensión universitaria.
            </p>
          </div>
          <div className="relative">
            <Image src={CertificacionImg} alt="Certificados" className="object-contain" height={500} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificacion;
