import TituloSeccion from "@/components/ui/titulo-seccion";
import cert1 from "../../../public/certi/diplomas.jpg";
import medalla from "../../../public/certi/SelloCalidad.png";
import linea from "../../../public/assets/Linea img 4.png";
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
      <TituloSeccion className={"mb-0"}>
        Obtén la mejor certificación
      </TituloSeccion>
      <h2 className="text-lg container text-center text-balance my-4">
        Somos la primera academia digital con estándar de formación y los
        pioneros en contar con normas de código y ética y profesional,
        garantizándote una formación de calidad.
      </h2>
      <div className="container w-full px-0 relative text-white min-h-[310px] lg:min-h-[600px]">
        <Image src={cert1} alt="certificado" className="object-cover" fill />
        <div className="absolute -top-2 right-10 z-10 lg:hidden">
          <h5 className="text-2xl text-idaclass3 font-semibold lg:mt-12 my-4 text-center">
            Nos avalan
          </h5>
          <div className="flex flex-col gap-2 justify-center ">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={`/empresasPartners${partner.src}`}
                width={120}
                height={120}
                alt="logo"
                className=" rounded-xl object-contain aspect-video p-2 bg-white"
              ></Image>
            ))}
          </div>
        </div>
        <div className="absolute w-full top-0 right-0 flex justify-end text-white ">
          <div className="flex flex-col justify-center max-lg:hidden">
            <h5 className="text-2xl text-idaclass3 font-semibold">
              Certificación universitaria internacional
            </h5>
            <p className="max-w-sm">
              Al finalizar los cursos de formación, podrás acceder a la
              titulación de extensión universitaria de IUYMCA, con aval
              internacional.
            </p>
          </div>
          <Image
            src={medalla}
            alt="certificado"
            className="w-36 lg:w-1/5 max-lg:absolute top-[190px] right-[38px]"
          />
        </div>
        <div className="absolute bottom-12 w-[420px] right-0 z-10 flex items-center flex-col px-4 mr-8 max-lg:hidden">
          <h5 className="text-2xl text-idaclass3 font-semibold">
            Doble titulación
          </h5>
          <p className="">
            Además, podrás validar tus estudios en nuestra academia con el
            certificado de IdaClass, con autenticación QR exclusiva, y los 4
            certificados correspondientes a las especializaciones.
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

      <div className="container lg:hidden mt-4 text-xs space-y-2">
        <h5 className="text-2xl text-idaclass3 font-semibold text-center">
          Certificación universitaria internacional
        </h5>
        <p className="text-center">
          Al finalizar los cursos de formación, podrás acceder a la titulación
          de extensión universitaria de IUYMCA, con aval internacional.
        </p>
        <h5 className="text-2xl text-idaclass3 font-semibold text-center">
          Doble titulación
        </h5>
        <p className="text-center">
          Además, podrás validar tus estudios en nuestra academia con el
          certificado de IdaClass, con autenticación QR exclusiva, y los 4
          certificados correspondientes a las especializaciones.
        </p>

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
