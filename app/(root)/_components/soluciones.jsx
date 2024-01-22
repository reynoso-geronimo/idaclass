import { ChevronDown } from "lucide-react";
import { soluciones } from "../../../lib/constants.js";

const Soluciones = () => {
  return (
    <section
      className=" h-[800px] bg-zinc-800 text-white bg-no-repeat bg-[50%] bg-[length:_1400px] transform scale-x-[-1]"
      style={{ backgroundImage: `url("/assets/bg-soluciones2.jpg")` }}
    >
      <div className="backdrop-brightness-50 h-full transform scale-x-[-1] ">
        <div className="flex flex-col justify-center gap-4 h-full container">
          <h3 className="text-2xl sm:text-5xl text-left font-extrabold  mb-4 tracking-tighter text-sky-400">
            Soluciones personalizadas para tu exito
          </h3>

          {soluciones.map((solucion, index) => (
            <div
              className="sm:flex items-center gap-4 group min-h-[100px] md:max-h-[100px] max-w-2xl relative"
              key={index + solucion.titulo}
            >
              <span className="flex items-center font-extrabold text-5xl min-w-[70px] tracking-tighter font-mono scale-y-125 group-hover:drop-shadow-[0_0_10px_rgba(100,100,255,1)] transition-all duration-1000 group-hover:text-sky-300 hover:animate-none">
                0{index + 1}
                <span className="animate-bounce ml-4 group-hover:opacity-0 transition-all duration-1000 sm:hidden">
                  <ChevronDown />
                </span>
              </span>
              <div>
                <h5 className="flex items-center font-bold sm:text-2xl group-hover:text-base transition-all duration-1000">
                  {solucion.titulo}
                  <span className="ml-4 py-12 group-hover:opacity-0 transition-all duration-1000 hidden sm:block sm:absolute -right-4">
                    <ChevronDown size={32} />
                  </span>
                </h5>
                <p className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-40 sm:text-md">
                  {solucion.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
