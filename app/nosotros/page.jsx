import Image from "next/image";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="flex flex-wrap justify-center items-center bg-idaclass w-full p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Conoce nuestra Ed Tech
        </h1>
        <Image
          src={`/assets/HeroLG.webp`}
          alt="hero image"
          height={300}
          width={300}
          className="shrink-1"
        />
      </section>
      <section className="text-white bg-black w-full flex flex-col items-center p-4">
        <div className="text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold"> Sobre Nosotros</h2>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit ad magnam libero corporis repudiandae fuga rerum nisi
            qui, iusto odit quas eius. Quis, quam ipsam natus adipisci vel
            assumenda nulla?
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full max-w-3xl gap-10 pt-12">
          <article className="flex items-center justify-center mr-auto">
            <Image
              src={`/assets/HeroLG.webp`}
              alt="hero image"
              height={200}
              width={200}
              className="shrink-1"
            />
            <div className="w-56">
              <h3 className="text-lg md:text-xl font-semibold">
                Nuestra Historia
              </h3>
              <p className="text-pretty md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                fugit doloremque, temporibus, numquam quo inventore laudantium
                distinctio accusantium eos reiciendis tempora.
              </p>
            </div>
          </article>
          <article className="flex flex-row-reverse items-center justify-center ml-auto">
            <Image
              src={`/assets/HeroLG.webp`}
              alt="hero image"
              height={200}
              width={200}
              className="shrink-1"
            />
            <div className="w-56">
              <h3 className="text-lg md:text-xl font-semibold">
                Nuestra Presente
              </h3>
              <p className="text-pretty md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                fugit doloremque, temporibus, numquam quo inventore laudantium
                distinctio accusantium eos reiciendis tempora.
              </p>
            </div>
          </article>

          <article className="flex items-center justify-center mr-auto">
            <Image
              src={`/assets/HeroLG.webp`}
              alt="hero image"
              height={200}
              width={200}
              className="shrink-1"
            />
            <div className="w-56">
              <h3 className="text-lg md:text-xl font-semibold">
                Nuestro Futuro
              </h3>
              <p className="text-pretty md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                fugit doloremque, temporibus, numquam quo inventore laudantium
                distinctio accusantium eos reiciendis tempora.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="w-full flex flex-col items-center bg-slate-220 gap-4 py-12">
        <h2 className="text-2xl font-bold text-idaclass">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center content-center	">
          <Card className="w-56">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
            </CardContent>
          </Card>

          <Card className="w-56">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
            </CardContent>
          </Card>

          <Card className="w-56">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
            </CardContent>
          </Card>

          <Card className="w-56">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full flex flex-col items-center bg-gray-300 p-12">
        <h2 className="text-center text-2xl font-bold text-">
          Nuestros Partners
        </h2>
        <div className="w-full max-w-6xl flex flex-wrap justify-evenly items-center gap-6 p-12">
          <div className="bg-gray-700 w-28 h-20 flex justify-center items-center text-white font-extrabold text-xl">
            LOGO
          </div>
          <div className="bg-gray-700 w-28 h-20 flex justify-center items-center text-white font-extrabold text-xl">
            LOGO
          </div>
          <div className="bg-gray-700 w-28 h-20 flex justify-center items-center text-white font-extrabold text-xl">
            LOGO
          </div>
          <div className="bg-gray-700 w-28 h-20 flex justify-center items-center text-white font-extrabold text-xl">
            LOGO
          </div>
          <div className="bg-gray-700 w-28 h-20 flex justify-center items-center text-white font-extrabold text-xl">
            LOGO
          </div>
          <div className="bg-gray-700 w-28 h-20 flex justify-center items-center text-white font-extrabold text-xl">
            LOGO
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center sm:ml-auto sm:mr-2">
        <h4 className="text-lg font-semibold">Suscribete al newsletter</h4>
        <p className="px-4">Ultimas noticias relacionadas al mundo fitness</p>
        <label htmlFor="email">Ingresa tu E-Mail</label>
        <input
          type="text"
          placeholder="E-mail"
          className="border-2 border-idaclass m-4"
        />
        <Button className="mx-4 mb-4">Suscribirme</Button>
      </section>
    </main>
  );
};

export default Page;
