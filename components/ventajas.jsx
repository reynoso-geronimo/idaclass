import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <main className="flex flex-col items-center ">
      <div className="bg-blue-600 max-w-full w-full p-8 my-4 grid grid-cols-1 md:grid-cols-2 items-center	gap-12">
        {ventajasCollection.map((item, index) => (
          <Card
            className="transform hover:scale-105  transition-transform duration-300 ease-in-out max-w-4xl p-8 my-8 mx-auto "
            key={ventajasCollection.id}
          >
            <CardContent className="p-0">
              {
                <Image
                  src={"/" + item.image}
                  alt="alt"
                  width={400}
                  height={400}
                  className="rounded-t-md  mx-auto"
                />
              }
            </CardContent>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-blue-800 text-xl">
                {item.paragraph}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Ventajas;
