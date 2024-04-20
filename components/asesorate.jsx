import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Asesorate = ({sideBar=false}) => {
  return (
    <article className={`w-full min-h-[480px] flex flex-col justify-end relative aspect-[9/13] container px-6 py-8 text-white ${!sideBar&&"lg:items-end lg:w-1/2 lg:aspect-auto lg:justify-between max-lg:max-w-md"}`}>
      <h3 className="text-left text-2xl p-0 m-0 relative z-10 font-extrabold w-[16rem] lg:leading-10">
        ¿Necesitás <br className="max-lg:hidden"/> ayuda <br  className="lg:hidden"/> o{" "}
        <span className="text-[#22c55e]">
          tenés <br className="max-lg:hidden"/> alguna <br className="lg:hidden" /> pregunta?
        </span>
      </h3>
      <p className={`${!sideBar&&"w-[16rem] max-w-[90]"} my-4 text-sm sm:text-base z-10 text-pretty` }>
        Nuestros asesores están disponibles para escucharte y despejar todas tus
        dudas
      </p>

      <Button
        size="default"
        className={`${!sideBar&&"lg:w-[16rem]"} px-2 w-full z-10 rounded-2xl bg-green-500 `}
        asChild
      >
        <Link href="https://wa.me/+5491135872204">
          <div className="flex  items-center gap-1">
            <svg viewBox="0 0 32 32" className="h-8 w-8">
              <path
                d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                fillRule="evenodd"
                fill="white"
              ></path>
            </svg>
            Asesorate
          </div>
        </Link>
      </Button>

      <Image
        src={`/assets/asistenciaMobile.png`}
        alt="asistencia"
        fill
        className={`${sideBar?"":"lg:hidden"} object-cover rounded-3xl object-top`}
      />
      <Image
        src={`/assets/asistenciaWeb.png`}
        alt="asistencia"
        fill
        className={`${sideBar?"hidden":"max-lg:hidden"} object-cover rounded-3xl`}
      />
    </article>
  );
};

export default Asesorate;
