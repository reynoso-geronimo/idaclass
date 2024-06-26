"use client";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import CountUp from "react-countup";

const Count = () => {
  return (
    <section className="mb-12 container">
      <TituloSeccion className={"text-pretty"}>
        Somos la llave para que transformes tu pasión por el fitness en una
        carrera exitosa
      </TituloSeccion>
      <div className="grid grid-cols-2 gap-16 px-10 mt-8 justify-items-center text-center text-idaclass font-semibold md:flex md:justify-center ">
        <div className="flex flex-col items-center justify-between w-40">
          <Image
            src={"/assets/experiencia.webp"}
            width={72}
            height={72}
            alt="experiencia"
          />
          <span>
            <CountUp
              end={25}
              duration={3.75}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix=" "
              className=""
            />
          </span>
          <p className="leading-4">Años de</p>
          <p className="leading-4">experiencia</p>
        </div>
        <div className="flex flex-col items-center justify-evenly w-40">
          <Image
            src={"/assets/50milcertificados.webp"}
            width={72}
            height={72}
            alt="certificados"
          />
          <span>
            <CountUp
              end={50000}
              duration={3.75}
              separator="."
              enableScrollSpy={true}
              scrollSpyOnce={true}
              prefix="+"
              className=" pb-20"
            />
          </span>
          certificados
        </div>
        <div className="flex flex-col items-center justify-envenly w-40 leading-5">
          <Image
            src={"/assets/estandarformacion.webp"}
            width={72}
            height={72}
            alt="estandarformacion"
          />
          1ra Digital School con estandar de formación
        </div>
        <div className="flex flex-col items-center justify-envenly w-40">
          <Image
            src={"/assets/empleabilidad.webp"}
            width={72}
            height={72}
            alt="empleabilidad"
          />
          <span>
            <CountUp
              end={80}
              duration={3.75}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="%"
              className=" pb-20"
            />
          </span>
          <span>de empleabilidad</span>
        </div>
      </div>
    </section>
  );
};

export default Count;
