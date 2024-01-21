"use client"
import Image from "next/image";
import CountUp from 'react-countup';

const Intro = () => {
  return (
    <section>
      <div>
        <h2 className="text-3xl text-center font-extrabold w-full max-w-7xl mt-16 mb-4 mx-auto text-indigo-950 tracking-tight">
          IdaClass, es la llave para transformar tu pasión por el fitness en una
          carrera exitosa en tiempo record.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-16 px-10 mt-8 justify-items-center text-center text-blue-700 font-medium md:flex md:justify-center ">
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/experiencia.webp"}
            width={72}
            height={72}
            alt="experiencia"
          />
         <span><CountUp end={25} duration={2.75}/> años de experiencia</span>
        </span>
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/50milcertificados.webp"}
            width={72}
            height={72}
            alt="certificados"
          />
           <span>+<CountUp end={50000} duration={2.75} separator="."/> </span>
           certificados
        </span>
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/estandarformacion.webp"}
            width={72}
            height={72}
            alt="estandarformacion"
          />
          1ra Digital School con estandar de formación
        </span>
        <span className="flex flex-col justify-start items-center w-40">
          <Image
            src={"/assets/empleabilidad.webp"}
            width={72}
            height={72}
            alt="empleabilidad"
          />
          <span><CountUp end={80}  duration={2.75}/>% de empleabilidad</span>
        </span>
      </div>
    </section>
  );
};

export default Intro;
