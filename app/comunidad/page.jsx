import Introvideo from "@/components/ui/introvideo";
import TituloSeccion from "@/components/ui/titulo-seccion";
import Image from "next/image";
import React from "react";
import EmpresasPartners from "../(root)/_components/empresasParteners";

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
          <Introvideo texto="Conoce como funciona la comunidad"/>
        </div>
        <div className="bg-black w-full text-center text-white">Imagen</div>
      </section>
      <EmpresasPartners/>
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
      <section className="container mb-12">
        <TituloSeccion>
          Ida<span className="text-idaclass4">Class</span> Hub
        </TituloSeccion>
        <div className="flex justify-evenly">
          <article className="w-1/4 border-2 border-black">
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
          <article className="w-1/4 border-2 border-black">
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
          <article className="w-1/4 border-2 border-black">
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
          <article>
            <TituloSeccion className={`border-l-4 border-black`}>
              Noti<span className="text-idaclass4 ">Class</span>
            </TituloSeccion>
            <h5></h5>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Page;
