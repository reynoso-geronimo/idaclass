import TituloSeccion from "@/components/ui/titulo-seccion";
import cert1 from "../../../public/certi/diplomas.jpg";
import medalla from "../../../public/certi/SelloCalidad.png";
import linea from "../../../public/assets/Línea img 4.png";
import Image from "next/image";
import { Dot } from "lucide-react";
const partners = [
  {
    src: "/COALICIONUNIVERSIDADESYMCA.jpg",
    alt: "logo",
  },
  {
    src: "/Logo_instituto-leyenda-red.png",
    alt: "logo",
  },
];

const Certificacion = () => {
  return (
    <section className="my-12 relative">
      <TituloSeccion>Certifica tus conocimientos</TituloSeccion>
      <div className="container w-full px-0 relative text-white min-h-[310px] lg:min-h-[600px]">
        <Image src={cert1} alt="certificado" className="object-cover" fill />

        <div className="absolute w-full top-0 right-0 flex justify-end text-white ">
          <div className="flex flex-col justify-center max-lg:hidden">
            <h5 className="text-2xl text-idaclass3 font-semibold">
              Calidad en formación profesional
            </h5>
            <p>
              <Dot className="inline" color="white" />
              1ra Digital School con estándar de formación
            </p>
            <p>
              <Dot className="inline" color="white" />
              1ra con normas de código y ética profesional
            </p>
          </div>
          <Image
            src={medalla}
            alt="certificado"
            className="hidden lg:block lg:w-1/5"
          />
        </div>
        <div className="absolute bottom-12 w-[420px] right-0 z-10 flex items-center flex-col px-4 mr-8 max-lg:hidden">
          <h5 className="text-2xl text-idaclass3 font-semibold">
            Accede a la doble titulación
          </h5>
          <p>
            <Dot className="inline" color="white" /> Certificado de Extensión
            Universitaria IUYMCA
          </p>
          <p>
            <Dot className="inline" color="white" />
            Certificado IdaClass con autenticación QR
          </p>
          <p>
            <Dot className="inline" color="white" />
            Certificado de 4 especializaciones
          </p>
          <h5 className="text-2xl text-idaclass3 font-semibold mt-12 mb-4">
            Nos avalan
          </h5>
          <div className="flex gap-4">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={`/empresasPartners${partner.src}`}
                width={190}
                height={190}
                alt="logo"
                className=" rounded-xl object-contain aspect-video p-2 bg-white"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container lg:hidden mt-4">
        <h5 className="text-2xl text-idaclass3 font-semibold text-center">
          Calidad en formación profesional
        </h5>
        <p>
          <Dot className="inline" color="black" />
          1ra Digital School con estándar de formación
        </p>
        <p>
          <Dot className="inline" color="black" />
          1ra con normas de código y ética profesional
        </p>
        <h5 className="text-2xl text-idaclass3 font-semibold text-center">
          Accede a la doble titulación
        </h5>
        <p>
          <Dot className="inline" color="black" /> Certificado de Extensión
          Universitaria IUYMCA
        </p>
        <p>
          <Dot className="inline" color="black" />
          Certificado IdaClass con autenticación QR
        </p>
        <p>
          <Dot className="inline" color="black" />
          Certificado de 4 especializaciones
        </p>
        <div className="max-lg:absolute top-24 sm:top-[50px] right-10">
          <h5 className="text-2xl text-idaclass3 font-semibold lg:mt-12 my-4 text-center">
            Nos avalan
          </h5>
          <div className="flex flex-col lg:flex-row gap-2 justify-center ">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={`/empresasPartners${partner.src}`}
                width={150}
                height={150}
                alt="logo"
                className=" rounded-xl object-contain aspect-video p-2 bg-white"
              ></Image>
            ))}
          </div>
        </div>
        <div className="relative w-full">
            <Image
              src={linea}
              alt="linea"
              className="absolute -right-10 -bottom-8 scale-150"
            />
          </div>
      </div>
    </section>
  );
};

export default Certificacion;
