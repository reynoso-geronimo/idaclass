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
 

} from "@/components/ui/carousel"



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

<section className="flex flex-col items-center bg-blue-100 h-[650px]">
<h1 className="mt[50px] text-5xl text-left font-extrabold  mb-4  text-indigo-950 tracking-tighter"> ventajas de estudiar con nosotros</h1>
  <Carousel className="w-auto mx-auto ">
   
    <CarouselContent >
    
      {ventajasCollection.map((item, index) => (
        <CarouselItem key={index}>
       
          <div className="p-8 mx-auto">
         
            <Card
              className=" bg-blue-100 text-center border-none transform hover:scale-105 transition-transform duration-300 ease-in-out max-w-6xl p-4 mx-auto h-[450px]"
              key={ventajasCollection.id + index}
            >
            
              {/* <CardContent className="p-0 mb-4">
              
                <Image
                  src={"/" + item.image}
                  alt="alt"
                  width={400}
                  height={400}
                  className="rounded-t-md mx-auto"
                />
              </CardContent> */}
            
              <CardHeader className="p-0">
                <CardTitle className="">{item.title}</CardTitle>
                <CardDescription className="text-blue-800 text-xl">
                  {item.paragraph}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
   
    <CarouselPrevious />
    

    <CarouselNext />
  </Carousel>
</section>

   
    </>

  );

};

export default Ventajas;
