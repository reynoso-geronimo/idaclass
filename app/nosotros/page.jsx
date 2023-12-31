import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    titulo: "Nuestra Historia",
    descripcion:
      "Somos la primera Digital School de Latam con estándar de formación.",
  },
  {
    titulo: "Nuestra Historia",
    descripcion:
      "Somos la primera Digital School de Latam con estándar de formación.",
  },
  {
    titulo: "Nuestra Historia",
    descripcion:
      "Somos la primera Digital School de Latam con estándar de formación.",
  },
  {
    titulo: "Nuestra Historia",
    descripcion:
      "Somos la primera Digital School de Latam con estándar de formación.",
  },
];

const Page = () => {
  return (
    <main className="flex flex-col items-center ">
      <div className="w-full max-w-3xl">
      {cards.map((card, index) => (
        <Card 
          key={index}
          className={`max-w-sm rounded-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
        >
          <CardHeader>
            <CardTitle className="text-xl text-center font-bold text-black">
              {card.titulo}
            </CardTitle>
            <CardDescription className="text-center text-blue-700 text-xl">
              {card.descripcion}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <Image
              src="/personaltrainer.webp"
              alt="curso"
              width={200}
              height={150}
              style={{ width: "100%", height: "100%" }}
            />
          </CardContent>
        </Card>
      ))}
      </div>
    </main>
  );
};

export default Page;


