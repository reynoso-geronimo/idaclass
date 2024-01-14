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

const articles = [
  {
    title: "Nuestra Historia",
    paragraph:
      "IDACLASS, es fundada en Octubre 2021 en Florida, EE.UU., por Julio Alghilante ,Argentino residente en Buenos Aires. Cabe destacar que Julio, inició este negocio en forma presencial en Argentina hace más de 20 años, llegando a tener 40.000 alumnos distribuidos principalmente en Argentina, Uruguay y Bolivia. Producto de la pandemia, el negocio se vió fuertemente afectado y fue entonces que se fundó una nueva compañía en USA con el objetivo de una revolución Digital para la empresa misma buscando innovar en tecnología ,servicio y expandirnos asi a todo Latino America.",
  },
  {
    title: "Nuestra Presente",
    paragraph:
      "Esta nueva compañía, Edtech para el deporte y la actividad física, propone virtualizar el negocio y vender online a todo Hispanoamérica. Vendemos cursos de formación y especialización para la industria del deporte , actividad física y fitness. Formamos a entrenadores y especialistas que luego pueden emprender sus propios negocios independientes y/o trabajar luego en instituciones deportivas y gimnasios.",
  },
  {
    title: "Nuestro Futuro",
    paragraph:
      "En el horizonte de IdaClass LLC, vislumbramos un futuro vibrante y prometedor, marcado por nuestra incansable dedicación a transformar la educación y la formación en el ámbito del deporte y la actividad física en Hispanoamérica.",
  },
];

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
      <section className="text-white bg-gray-900 w-full flex flex-col items-center px-4 py-12">
        <div className="text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold"> Sobre Nosotros</h2>
          <p className="text-lg md:text-xl">
            Lddddorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit ad magnam libero corporis repudiandae fuga rerum nisi
            qui, iusto odit quas eius. Quis, quam ipsam natus adipisci vel
            assumenda nulla?
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full max-w-4xl gap-y-20 p-6">
          {articles.map((article, index) => (
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
      <section className="w-full max-w-4xl flex flex-col items-center bg-slate-220 gap-4 pñoñx-4 py-12">
        <h2 className="text-2xl font-bold text-idaclass">Nuestros Valores</h2>
        <div className="grid grid-cols-2  gap-2 md:gap-4 lg:grid-cols-4 justify-items-center content-center	">
          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
            </CardContent>
          </Card>

          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
            </CardContent>
          </Card>

          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
            </CardContent>
          </Card>

          <Card className="w-54">
            <CardHeader>
              <CardTitle className="text-xl text-center font-bold text-black">
                Innovacion
              </CardTitle>
              {/* <CardDescription className="text-center text-blue-700 text-xl"></CardDescription> */}
            </CardHeader>
            <CardContent className="text-pretty p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              delectus adipisci magnam distinctio veniam eligendi ipsam
              doloremque quia atque.
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
