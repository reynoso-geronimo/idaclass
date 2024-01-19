import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ventajasCollection = [
  {
    id: 1,
    title: "Aprende Haciendo",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Avanza con Learn By Doing metodo probado y eficaz basado en la experiencia practica te permite llevar a la practica los conocimientos aprendidos desde el primer dia ",
  },
  {
    id: 2,
    title: "Programas de estudios innovadores",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Creamos programas integrales con standard de formacion internacional, que reflejan las ultimas tendencias en entrenamiento,las ciencias aplicadas para que logreas empleabilidad o hacer despegar tu propio proyecto",
  },
  {
    id: 3,
    title: "SkillClass - Tu Herramienta Exclusiva",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Domina el arte de construir tu marca,ofrecer y vender tus servicios y comunicar efectivamente tus proyectos personales.SkillClass es el complemento necesario para garantizar tu exito.",
  },
  {
    id: 4,
    title: "Innovamos en la forma de aprender",
    image: "assets/funcionalcrosshiit.webp",
    paragraph:
      "Rompemos los moldes tradicionales con un enfoque innovador.Aprende en un entorno virtual interactio, simple e intuitivo con metodos que despiertan tu creatividad y facilitan tu aprendizaje",
  },
];

const Ventajas = async () => {
  return (
    <>
      {/* hacer seccion nosotros */}

      <main className="w-full flex flex-col items-center  ">
        <section className="flex flex-wrap justify-center items-center   w-full p-4 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
            Como es nuestro innovador modelo de capacitacion
          </h1>
        </section>

        {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

        <section className="  w-full flex flex-col items-center px-4 pb-12 bg-white">
          <div className="flex flex-col justify-center items-center w-full max-w-7xl gap-y-20 p-6">
            <article className="  flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-48">
              <Image
                src={`/funcional.webp`}
                alt="hero image"
                height={200}
                width={200}
                className="w-full md:w-1/2 rounded-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
                  Aprende Haciendo
                </h3>
                <p className="text-pretty md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus impedit perspiciatis in tempore quod corrupti neque.
                  Dicta blanditiis, dolorem commodi, eum beatae laboriosam
                  incidunt veritatis, rerum magni magnam pariatur ex.
                </p>
              </div>
            </article>
          </div>

          {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

          <article className="flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-4">
            <Image
              src={`/funcional.webp`}
              alt="hero image"
              height={100}
              width={100}
              className="w-full md:w-1/2 rounded-lg"
            />
           <div className="md:w-1/2 h-full flex flex-col justify-center">
  <div className="mb-24">
    <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
    Programas de estudios innovadores
    </h3>
    <p className="text-pretty md:text-lg">
    Creamos programas integrales con standard de formacion internacional, que reflejan las ultimas tendencias en entrenamiento
    ,las ciencias aplicadas para que logreas empleabilidad o hacer despegar tu propio proyecto
    </p>
  </div>
  <div className="mb-24">
    <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
    SkillClass - Tu Herramienta Exclusiva
    </h3>
    <p className="text-pretty md:text-lg">
    Domina el arte de construir tu marca,ofrecer y vender tus servicios y comunicar efectivamente
     tus proyectos personales.SkillClass es el complemento necesario para garantizar tu exito.
    </p>
  </div>
</div>

          </article>

          {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}
          <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-8 gap-y-20 p-6">
            <article className=" flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-64">
              <Image
                src={`/funcional.webp`}
                alt="hero image"
                height={200}
                width={200}
                className="w-full md:w-1/2 rounded-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-lg md:text-4xl  font-extrabold   text-indigo-950 tracking-tight">
                Innovamos en la forma de aprender
                </h3>
                <p className="text-pretty md:text-lg">
                Rompemos los moldes tradicionales con un enfoque innovador.
                Aprende en un entorno virtual interactio, simple e intuitivo con metodos que despiertan tu creatividad y facilitan tu aprendizaje</p>  
                           </div>
            </article>
          </div>

          {/* .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. */}

          {/* <article className="flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-4">
  <div className="md:w-1/2 md:order-2">
    <h3 className="text-lg md:text-xl font-semibold">titulossssssss</h3>
    <p className="text-pretty md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit perspiciatis in tempore quod corrupti neque. Dicta blanditiis, dolorem commodi, eum beatae laboriosam incidunt veritatis, rerum magni magnam pariatur ex.</p>
  </div>
  
  <Image
    src={`/funcional.webp`}
    alt="hero image"
    height={100}
    width={100}
    className="w-full md:w-1/2 rounded-lg md:order-1"
  />
</article> */}
        </section>
      </main>
    </>
  );
};

export default Ventajas;
