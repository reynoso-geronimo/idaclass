import TituloSeccion from "@/components/ui/titulo-seccion";
import cert1 from "../../../public/certi/cert1.webp";
import cert2 from "../../../public/certi/cert2.webp";
import medalla from "../../../public/certi/Medalla.webp";
import Image from "next/image";

const Certificacion = () => {
  return (
    <section className="flex flex-col items-center py-12 bg-gradient-to-r from-white via-sky-50 to-sky-100">
      <TituloSeccion className={`container mt-0`}>
       Certifica tus conocimientos
      </TituloSeccion>
      <p className="mb-12 text-center text-lg leading-6 container">
        Accede a la doble Titulación, Certificado de Extensión Universitaria
        IUYMCA, Certificado IdaClass con autenticación QR + Certificado de 4
        especializaciones.
      </p>
      <div className="flex flex-col justify-center items-center md:flex-row text-center gap-4">
        <div className="flex flex-col justify-evenly items-center w-full md:w-1/2 max-w-[512px]">
          <div>
            <Image src={medalla} alt="medalla" />
          </div>

          <TituloSeccion className="mb-4 mt-0">
            Sello de calidad en formación profesional
          </TituloSeccion>
          <p className="mb-12 text-center text-lg leading-6 container">
            1ra Digital School de Latam con estándar de formación. 1ra Digital
            School con normas de código y éticas profesional.
          </p>
          <p className="mb-12 text-center text-lg leading-6 container">
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
