"use client";
import { ChevronDown } from "lucide-react";
import { soluciones1, soluciones2 } from "../../../lib/constants.js";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Soluciones = () => {
  const [activo, setActivo] = useState();
  const [ref1, inView1, entry1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2, entry2] = useInView({
    triggerOnce: true,
  });
  return (
    <section
      className=" h-[800px] bg-zinc-800 text-white bg-no-repeat bg-[50%] bg-[length:_1400px] transform scale-x-[-1]"
      style={{ backgroundImage: `url("/assets/bg-soluciones2.jpg")` }}
    >
      <div className="backdrop-brightness-50 h-full transform scale-x-[-1] ">
        <div className="flex flex-col justify-around h-full container relative lg:py-6">
          <h3
            ref={ref1}
            className={`${
              inView1 ? `reveal-text` : `opacity-0`
            } max-w-xl text-3xl sm:text-[40px] text-left font-extrabold  mb-4 tracking-tighter text-idaclass3`}
          >
            <span> Potenciamos tu empleabilidad </span>
          </h3>

          {soluciones1.map(solucion => (
            <div key={solucion.id + solucion.titulo}>
              <div
                className="sm:flex items-center gap-4 min-h-[100px] md:max-h-[100px] max-w-2xl relative"
                onMouseEnter={() => setActivo(solucion.id)}
              >
                <span
                  className={`flex items-center font-extrabold text-5xl min-w-[70px] tracking-tighter font-mono scale-y-125 transition-all duration-1000 ${
                    activo == solucion.id &&
                    ` drop-shadow-[0_0_10px_rgba(100,100,255,1)]  text-idaclass2`
                  } `}
                >
                  0{solucion.id + 1}
                  <span
                    className={`animate-bounce ml-4 transition-all duration-1000 sm:hidden ${
                      activo == solucion.titulo && `opacity-0`
                    }`}
                  >
                    <ChevronDown />
                  </span>
                </span>
                <div>
                  <h5
                    className={`flex items-center font-bold sm:text-2xl transition-all duration-1000 ${
                      activo == solucion.id && `sm:text-xl`
                    }`}
                  >
                    {solucion.titulo}
                    <span
                      className={`ml-4 py-12  transition-all duration-1000 hidden sm:block sm:absolute -right-4  ${
                        activo == solucion.id && `opacity-0`
                      }`}
                    >
                      <ChevronDown size={32} />
                    </span>
                  </h5>
                  <p
                    className={`max-h-0 overflow-hidden transition-all duration-1000 ease-in-out sm:text-lg leading-5 sm:leading-7 ${
                      activo == solucion.id && `max-h-40`
                    }`}
                  >
                    {solucion.texto}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <h3
            ref={ref2}
            className={`${
              inView2 ? `reveal-text` : `opacity-0`
            } max-w-xl text-3xl sm:text-[40px] text-left font-extrabold  mb-4 tracking-tighter text-idaclass3`}
          >
            <span>Impulsamos tu emprendimiento</span>
          </h3>

          {soluciones2.map(solucion => (
            <div key={solucion.id + solucion.titulo}>
              <div
                className="sm:flex items-center gap-4 min-h-[100px] md:max-h-[100px] max-w-2xl relative"
                onMouseEnter={() => setActivo(solucion.id)}
              >
                <span
                  className={`flex items-center font-extrabold text-5xl min-w-[70px] tracking-tighter font-mono scale-y-125 transition-all duration-1000 ${
                    activo == solucion.id &&
                    ` drop-shadow-[0_0_10px_rgba(100,100,255,1)]  text-idaclass2`
                  } `}
                >
                  0{solucion.id + 1}
                  <span
                    className={`animate-bounce ml-4 transition-all duration-1000 sm:hidden ${
                      activo == solucion.id && `opacity-0`
                    }`}
                  >
                    <ChevronDown />
                  </span>
                </span>
                <div>
                  <h5
                    className={`flex items-center font-bold sm:text-2xl transition-all duration-1000 ${
                      activo == solucion.id && `sm:text-xl`
                    }`}
                  >
                    {solucion.titulo}
                    <span
                      className={`ml-4 py-12  transition-all duration-1000 hidden sm:block sm:absolute -right-4  ${
                        activo == solucion.id && `opacity-0`
                      }`}
                    >
                      <ChevronDown size={32} />
                    </span>
                  </h5>
                  <p
                    className={`max-h-0 overflow-hidden transition-all duration-1000 ease-in-out sm:text-lg leading-5 sm:leading-7 ${
                      activo == solucion.id && `max-h-40`
                    }`}
                  >
                    {solucion.texto}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
