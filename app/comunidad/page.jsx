import Introvideo from "@/components/ui/introvideo";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import React from "react";
import EmpresasPartners from "../(root)/_components/empresasParteners";
import Faq from "../(root)/_components/faq";

const Page = () => {
  return (
    <main className="min-h-[100svh]">
      <section className="flex flex-col md:flex-row container items-stretch my-12">
        <div className="w-full">
          <TituloSeccion className={`text-left`}>
            Comunidad{" "}
            <span className="text-left inline text-idaclass4">Class</span>era
          </TituloSeccion>

          <h3 className="text-lg">
            &quot;Conectado para transformar el ecosistema Sport Fitness&quot;
          </h3>
          <p>
            La comunidad classera es un espacio diseñado para impulsar a todo el
            ecosistema Sport Fitness
          </p>
          <p>
            Te invitamos a ser parte de esta revolución y transformar tus
            aspiraciones en logros tangibles
          </p>
          <Introvideo texto="Conoce como funciona la comunidad" />
        </div>
        <div className="bg-black w-full text-center text-white">Imagen</div>
      </section>
      <EmpresasPartners />
      <section className="flex container justify-around gap-12">
        <div className=" container border-2 border-black">
          <Image
            height={120}
            width={120}
            src={``}
            alt=""
            className="bg-black mx-auto"
          />
          <h4>IdaClass Jobs - Bolsa de trabajo y pasantías</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            deserunt ducimus harum officia sunt, similique ipsum nihil eos,
            maxime, placeat animi quidem ullam sit reiciendis officiis quia
            fugit? Recusandae, sit?
          </p>
        </div>
        <div className=" container border-2 border-black">
          <Image
            height={120}
            width={120}
            src={``}
            alt=""
            className="bg-black mx-auto"
          />
          <h4>IdaClass Jobs - Bolsa de trabajo y pasantías</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            deserunt ducimus harum officia sunt, similique ipsum nihil eos,
            maxime, placeat animi quidem ullam sit reiciendis officiis quia
            fugit? Recusandae, sit?
          </p>
        </div>
        <div className=" container border-2 border-black">
          <Image
            height={120}
            width={120}
            src={``}
            alt=""
            className="bg-black mx-auto"
          />
          <h4>IdaClass Jobs - Bolsa de trabajo y pasantías</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            deserunt ducimus harum officia sunt, similique ipsum nihil eos,
            maxime, placeat animi quidem ullam sit reiciendis officiis quia
            fugit? Recusandae, sit?
          </p>
        </div>
      </section>
      <section className="container my-12">
        <div className="container w-full flex bg-red-300 gap-12">
          <div className="w-1/2 aspect-video bg-black">video</div>
          <div className="w-1/2 bg-emerald-200 aspect-video"> Formulario</div>
        </div>
        <TituloSeccion className={`mb-0`}>
          Accede a contenido exclusivo
        </TituloSeccion>
        <h4 className="text-center mb-12">Subtitulo</h4>
        <div className="grid grid-cols-4 gap-12">
          <article className="border-2 border-black">
            <Image
              src={``}
              width={520}
              height={520}
              alt="Imagen de Blog"
              className="bg-black aspect-video mx-auto text-white"
            />
            <div className="container">
              <h5 className="text-bold">
                El poder de las emociones en la actividad física y el deporte:
                Explorando su influencia en los resultados.
              </h5>
              <p className="text-idaclass3 font-bold text-right">Leer Mas</p>
            </div>
          </article>
          <article className="border-2 border-black">
            <Image
              src={``}
              width={520}
              height={520}
              alt="Imagen de Blog"
              className="bg-black aspect-video mx-auto text-white"
            />
            <div className="container">
              <h5 className="text-bold">
                El poder de las emociones en la actividad física y el deporte:
                Explorando su influencia en los resultados.
              </h5>
              <p className="text-idaclass3 font-bold text-right">Leer Mas</p>
            </div>
          </article>
          <article className="border-2 border-black">
            <Image
              src={``}
              width={520}
              height={520}
              alt="Imagen de Blog"
              className="bg-black aspect-video mx-auto text-white"
            />
            <div className="container">
              <h5 className="text-bold">
                El poder de las emociones en la actividad física y el deporte:
                Explorando su influencia en los resultados.
              </h5>
              <p className="text-idaclass3 font-bold text-right">Leer Mas</p>
            </div>
          </article>
          <div className="bg-red-500 row-span-2">
            <TituloSeccion
              className={`text-left border-l-4 border-black mb-0 text-3xl`}
            >
              Noti<span className="text-idaclass4 ">Class</span>
            </TituloSeccion>
            <TituloSeccion
              className={`text-left border-l-4 border-black mb-0 text-3xl`}
            >
              Agenda
            </TituloSeccion>
          </div>
          <div className=" col-span-3 bg-emerald-400 flex gap-4 container py-2">
            <div className="w-1/2 bg-blue-500 aspect-video">Proximo Evento</div>
            <div className="w-1/2 bg-blue-500 aspect-video"></div>
          </div>
        </div>
      </section>

      <section>
        <TituloSeccion className={`border-black mb-0`}>
          Acerca de la comunidad
        </TituloSeccion>
        <Faq />
      </section>
    </main>
  );
};

export default Page;
