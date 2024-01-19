const Soluciones = () => {
  return (
    <section
      className=" h-[800px] bg-zinc-800 text-white bg-no-repeat bg-[50%] bg-[length:_1400px] transform scale-x-[-1]"
      style={{ backgroundImage: `url("/assets/bg-soluciones2.jpg")` }}
    >
      <div className="backdrop-brightness-50 h-full transform scale-x-[-1] ">
        <div className="flex flex-col justify-center gap-4 h-full container">
          <h2 className="text-5xl text-left font-extrabold  mb-4 tracking-tighter">
            Soluciones personalizadas para tu exito
          </h2>

          <div className="sm:flex items-center gap-4 group min-h-[100px] md:max-h-[100px] max-w-2xl ">
            <span className="font-extrabold text-5xl min-w-[70px] tracking-tighter font-mono scale-y-125 group-hover:text-emerald-400">
              01
            </span>
            <div>
              <h5 className="font-bold sm:text-2xl group-hover:text-base transition-all duration-1000">
                Acompañamiento Personalizado/ Docentes de clase mundial:
              </h5>
              <p className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-40">
                Nuestro equipo de trainer educativos y expertos internacionales
                te guiarán en cada paso de tu carrera, como alumno, como
                profesional o emprendedor para alcances tus metas con exito
              </p>
            </div>
          </div>

          <div className="sm:flex items-center gap-4 group min-h-[100px] md:max-h-[100px] max-w-2xl">
            <span className="font-extrabold text-5xl min-w-[70px] tracking-tighter font-mono scale-y-125 group-hover:text-emerald-400">
              02
            </span>
            <div>
              <h5 className="font-bold sm:text-2xl group-hover:text-base transition-all duration-1000">
                Certificado Profesional y Aval Universitario:
              </h5>
              <p className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-40">
                Alcanza tus objetivos y certifica tus conocimientos con nuestro
                certificado profesional respaldado por un aval universitario.
              </p>
            </div>
          </div>

          <div className="sm:flex items-center gap-4 group min-h-[100px] md:max-h-[100px] max-w-2xl">
            <span className="font-extrabold text-5xl min-w-[70px] tracking-tighter font-mono scale-y-125 group-hover:text-emerald-400">
              03
            </span>
            <div>
              <h5 className="font-bold sm:text-2xl group-hover:text-base transition-all duration-1000">
                IdaClass Hub nuestra comunidad:
              </h5>
              <p className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-40">
                Se parte de Learn Knowledge Hub (centro de conocimiento y
                aprendizaje) tu espacio para conectar con pares, profesionales,
                mentores para ampliar tu red y compartir experiencia de alto
                valor para tu desarrollo profesional
              </p>
            </div>
          </div>

          <div className="sm:flex items-center gap-4 group min-h-[100px] md:max-h-[100px] max-w-2xl">
            <span className="font-extrabold text-5xl min-w-[70px] tracking-tighter font-mono scale-y-125 group-hover:text-emerald-400">
              04
            </span>
            <div>
              <h5 className="font-bold sm:text-2xl group-hover:text-base transition-all duration-1000">
                Ida Jobs bolsa de laboral:
              </h5>
              <p className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-40">
                Estamos comprometidos a ayudarte a que encuentres nuevas
                oportunidades laborales conectando con gimnasios , centro
                deportivos y personas en búsqueda de profesionales certificados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
