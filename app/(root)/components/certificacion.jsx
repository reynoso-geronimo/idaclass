import { AwardIcon } from "lucide-react";
import cert1 from "../../../public/certi/cert1.webp";
import cert2 from "../../../public/certi/cert2.webp";
import Image from "next/image";

const Certificacion = () => {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col items-center justify-evenly text-center  w-1/2">
        <h2>
          Obtén la Certificación de mayor reconocimiento del mercado y Aval
          Internacional.
        </h2>
        <AwardIcon />
        <p>
          Accede a la doble Titulación, Certificado de Extensión Universitaria
          IUYMCA, Certificado IdaClass con autenticación QR + Certificado de 4
          especializaciones.
        </p>
        <div>
          <h2>Sello de calidad en formación profesional</h2>
          <p>
            1ra Digital School de Latam con estándar de formación. 1ra Digital
            School con normas de código y éticas profesional.
          </p>
          <p>Nuestros partners educativos nos avalan.</p>
        </div>
      </div>

      <div className=" w-1/2">
        <Image src={cert1} alt="certificado" />
        <Image src={cert2} alt="certificado" />
      </div>
    </section>
  );
};

export default Certificacion;
