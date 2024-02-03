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
import Partners from "@/components/partners";
import { sobreNosotros } from "@/lib/constants";

const Page = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="flex flex-wrap justify-center items-center bg-idaclass w-full p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
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
      <section className="text-white bg-gray-900 w-full flex flex-col items-center px-4 pb-12">
        <div className="text-center max-w-3xl py-12">
          <h2 className="text-2xl md:text-3xl font-bold"> Sobre Nosotros</h2>
          <p className="text-lg md:text-xl">
            Lddddorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit ad magnam libero corporis repudiandae fuga rerum nisi
            qui, iusto odit quas eius. Quis, quam ipsam natus adipisci vel
            assumenda nulla?
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full max-w-4xl gap-y-20 p-6">
          {sobreNosotros.map((article, index) => (
            <article
              className="flex flex-col md:flex-row even:md:flex-row-reverse items-center justify-center gap-4"
              key={index}
            >
              <Image
                src={`/funcional.webp`}
                alt="hero image"
                height={200}
                width={200}
                className="w-full md:w-1/2 rounded-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-lg md:text-xl font-semibold">
                  {article.title}
                </h3>
                <p className="text-pretty md:text-lg">{article.paragraph}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container flex flex-col items-center bg-slate-220 gap-4 py-12">
        <h2 className="text-2xl font-bold text-idaclass">Nuestros Valores</h2>
        <div className="grid grid-cols-2  gap-2 md:gap-4 lg:grid-cols-4 justify-items-center content-center	">
          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-idaclass text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty md:text-lg p-4 font-bold text-idaclass">
              Abrazamos la tecnología y la innovación en la educación,
              proporcionando un ambiente de aprendizaje virtual dinámico y
              accesible.
            </CardContent>
          </Card>

          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Calidad Educativa
              </CardTitle>
              {/* <CardDescription className="text-center text-idaclass text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty md:text-lg p-4 font-bold text-idaclass">
              Nos comprometemos a ofrecer programas de formación de la más alta
              calidad, respaldados por profesionales expertos y actualizados en
              las últimas tendencias y avances en el ámbito deportivo y de la
              actividad física.
            </CardContent>
          </Card>

          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Empoderamiento:
              </CardTitle>
              {/* <CardDescription className="text-center text-idaclass text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty md:text-lg p-4 font-bold text-idaclass">
              Nuestra misión es empoderar a nuestros graduados para que se
              conviertan en líderes exitosos en la industria del deporte.
              Facilitamos el emprendimiento y la independencia, fomentando la
              creatividad y la autogestión
            </CardContent>
          </Card>

          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Colaboracion
              </CardTitle>
              {/* <CardDescription className="text-center text-idaclass text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty md:text-lg p-4 font-bold text-idaclass ">
              Valoramos la colaboración y la construcción de una comunidad
              sólida. Facilitamos la conexión entre estudiantes, profesores,
              profesionales y expertos en el campo, creando una red de apoyo que
              se extiende más allá de las fronteras.
            </CardContent>
          </Card>
        </div>
      </section>
      <Partners />
      <section className="flex flex-col text-center sm:ml-auto sm:mr-24 my-12">
        <h4 className="text-lg font-semibold">Suscribete al newsletter</h4>
        <p className="px-4">Ultimas noticias relacionadas al mundo fitness</p>
        <label htmlFor="email">Ingresa tu E-Mail</label>
        <input
          id="email"
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
