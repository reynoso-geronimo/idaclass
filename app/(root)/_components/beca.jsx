import { Button } from "@/components/ui/button";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import linea from "../../../public/assets/Línea img 4.png";

const Beca = () => {
  return (
    <section className="w-full container mt-12">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-center">
        <article className="w-full flex justify-around items-stretch gap-1 p-4 pr-2 border-2 border-black rounded-3xl">
          <div className="flex flex-col w-1/2 shrink-0">
            <TituloSeccion className="text-left text-2xl lg:text-3xl p-0 m-0">
              Necesitas ayuda <br /> o tienes alguna <br /> pregunta?
            </TituloSeccion>
            <p className="my-4 text-sm lg:text-base">
              Nuestros especialistas están disponibles <br /> para escucharte y
              despejar todas tus dudas
            </p>
            <div className="relative z-10 shrink-0">
              <Button
                size="default"
                className="bg-green-500 px-2 max-w-52 text-sm "
              >
                <div className="flex  items-center gap-1">
                  <svg viewBox="0 0 32 32" className="h-8 w-8">
                    <path
                      d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                      fillRule="evenodd"
                      fill="white"
                    ></path>
                  </svg>
                  Háblanos por Whatsapp
                </div>
              </Button>
            </div>
          </div>
          <div className="flex w-1/2  relative">
            <Image
              src={`/assets/asistencia.jpg`}
              alt="asistencia"
              fill
              className="object-contain"
            />
          </div>
        </article>
        <div className="bg-black w-full text-white text-center p-8 overflow-hidden rounded-3xl">
          <TituloSeccion className={"mb-4"}>
            Obten tu Beca<span className="inline text-idaclass4">Class</span> 40
            %
          </TituloSeccion>
          <h4 className="text-pretty md:text-lg">Impulsa tu futuro</h4>
          <p className="my-6 relative z-10 opacity-100 text-white">
            &quot;Nuestra misión es abrir las puertas a la educación en
            Latinoamérica Facilitamos el acceso a la educación de calidad de una
            forma simple y accesible . Accede ahora a la BecaClass del 40% y
            avanza hacia tus metas profesionales con IdaClass.&quot;
          </p>

          <div className="w-full relative">
            <div className="absolute right-12 -top-12 rotate-[90deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.769"
                height="14.821"
                className="fill-idaclass scale-[1700%] opacity-50"
              >
                <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.769"
                height="14.821"
                className="fill-idaclass4 scale-[600%] -translate-x-6 -translate-y-[36px] "
              >
                <path d="M10.212 12.007 7.645 9.414h10v-4H7.62l2.585-2.586L7.377 0 0 7.378l7.37 7.443 2.842-2.814z" />
              </svg>
            </div>
          </div>

          <div className="relative w-full">
            <Image
              src={linea}
              alt="linea"
              className="absolute -right-10 -bottom-4 scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beca;
