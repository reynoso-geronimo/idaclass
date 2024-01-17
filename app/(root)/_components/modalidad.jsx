import modalidad1 from "../../../public/modalidad/modalidad1.webp";
import modalidad2 from "../../../public/modalidad/modalidad2.webp";
import modalidad3 from "../../../public/modalidad/modalidad3.webp";
import Carousel from "./ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const slides = [
  {
    src: modalidad1,
    alt: "modalidad",
    text: "Desarrolla tu futuro",
  },
  {
    src: modalidad2,
    alt: "modalidad",
    text: "Aprende haciendo",
  },
  {
    src: modalidad3,
    alt: "modalidad",
    text: "Expertos internacionales",
  },
];

const Modalidad = () => {
  return (
    <>
      <section>
        <Tabs defaultValue="online" className="w-[400px] h-[500px] m-auto border-idaclass border-2 text-white bg-idaclass text-center">
          <TabsList className="flex w-full">
            <TabsTrigger value="online" className='w-1/2'>Online</TabsTrigger>
            <TabsTrigger value="presencial" className='w-1/2'>Presencial</TabsTrigger>
          </TabsList>
          <TabsContent value="online">
            Make changes to your online here.
          </TabsContent>
          <TabsContent value="presencial">Change your presencial here.</TabsContent>
        </Tabs>
      </section>

      <section className="text-center flex flex-col items-center w-full">
        <h2 className="text-3xl font-extrabold my-12 text-indigo-950 ">
          ¿Cómo es nuestro innovador modelo de capacitación?
        </h2>
        <p className="mx-8 mb-12 px-6 text-center text-md uppercase text-blue-700 font-medium leading-6 tracking-[4px] max-w-[1024px]">
          Es un revolucionario método de aprendizaje, creado para el desarrollo
          de habilidades actuales, que te lleva a cumplir tus metas
          profesionales con éxito.
        </p>

        <Carousel slides={slides} />
      </section>
    </>
  );
};

export default Modalidad;
