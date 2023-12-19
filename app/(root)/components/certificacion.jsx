import cert1 from "../../../public/certi/cert1.webp";
import cert2 from "../../../public/certi/cert2.webp";
import medalla from "../../../public/certi/Medalla.webp";
import Image from "next/image";

const Certificacion = () => {
  return (
    <section className="flex flex-col items-center py-2">
      <h2 className="text-3xl text-center font-extrabold w-[full] mt-16 mb-4 mx-4 text-indigo-950 ">
        Obtén la Certificación de mayor reconocimiento del mercado y Aval
        Internacional.
      </h2>
      <p className="my-12 mx-8 text-center text-md uppercase text-blue-700 font-medium leading-6 tracking-[4px]	">
        Accede a la doble Titulación, Certificado de Extensión Universitaria
        IUYMCA, Certificado IdaClass con autenticación QR + Certificado de 4
        especializaciones.
      </p>
      <div className="flex flex-col justify-center items-center md:flex-row text-center">
        <div className="flex flex-col justify-evenly items-center w-full md:w-1/2 max-w-[512px]">
          <div>
            <Image src={medalla} alt="medalla" />
          </div>
          <h2 className="text-3xl font-extrabold w-[full] mb-4 mx-4 text-indigo-950 ">
            Sello de calidad en formación profesional
          </h2>
          <p className="mx-8 text-center text-md uppercase text-blue-700 font-medium leading-6 tracking-[4px]	">
            1ra Digital School de Latam con estándar de formación. 1ra Digital
            School con normas de código y éticas profesional.
          </p>
          <p className="mx-8 text-center text-md uppercase text-blue-700 font-medium leading-6 tracking-[4px]	">
            Nuestros partners educativos nos avalan.
          </p>
        </div>

        <div className="w-full md:w-1/2 max-w-[512px] flex flex-col justify-evenly gap-2 px-4">
          <div>
            <Image
              src={cert1}
              alt="certificado"
              className="shadow-2xl border-2 border-slate-400 rounded-lg"
            />
          </div>
          <div>
            <Image
              src={cert2}
              alt="certificado"
              className="shadow-2xl border-2 border-slate-400 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificacion;
