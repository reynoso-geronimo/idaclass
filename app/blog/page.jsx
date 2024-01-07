import Image from "next/image";
import { getBlogPostFromDb } from "../actions";

const postCollection = [
  {
    id: 1,
    title: "salud nutricion y tecnologisdasdasdasdasdasdasdasdasdasdasdadasdasa",
    image: "/assets/funcionalcrosshiit.webp",
    paragraph: "Descripción del Item 1.",
  },
  {
    id: 2,
    title: "las claves de una rutina exitosa",
    image: "/assets/funcionalcrosshiit.webp",
    paragraph: "Descripción del Item 2.",
  },
  {
    id: 3,
    title: "Como desarrollar tu marca personal en el mundo fitness",
    image: "/assets/funcionalcrosshiit.webp",
    paragraph: "Descripción del Item 3.",
  },
  {
    id: 4,
    title: "Como desarrollar tu marca personal en el mundo fitness",
    image: "/assets/funcionalcrosshiit.webp",
    paragraph: "Descripción del Item 3.",
  },
  {
    id: 5,
    title: "Como desarrollar tu marca personal en el mundo fitness",
    image: "/assets/funcionalcrosshiit.webp",
    paragraph: "Descripción del Item 3.",
  },
  {
    id: 6,
    title: "Como desarrollar tu marca personal en el mundo fitness",
    image: "/assets/funcionalcrosshiit.webp",
    paragraph: "Descripción del Item 3.",
  },
  {
    id: 7,
    title: "Como desarrollar tu marca personal en el mundo fitness",
    image: "/assets/funcionalcrosshiit.webp",
    paragraph: "Descripción del Item 3.",
  },
];

 const Page = async () => {
 const blogPost=await getBlogPostFromDb();
  return (
    <main>
   
  
        <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      {postCollection.map((item, index) => (
        <div key={item.id} className={index === 0 ? "col-span-1 md:col-span-3 grid gap-4 md:gap-4vmin md:grid-cols-3 min-h-[320px] border-t relative" : "bg-white p-6 md:p-8 rounded-lg shadow-md flex items-center w-full md:w-auto"}>
          {index === 0 ? (
            <div className=" md:flex h-full">
                 <Image
                src={item.image}
                alt={item.title}
                width={920}
                height={1020}
                className="rounded-lg"
              />
              <div className="relative flex-shrink-0 w-1/2">
                {/* Aquí iría el contenido de tu imagen */}
             
            
              {/* Contenido del título, fecha, y párrafo a la derecha */}
              <div className=" p-6 md:w-96">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-500 mb-2">Fecha de publicación</p>
                <p className="text-gray-700 mb-2">{item.paragraph}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Leer más
                </button>
              </div>
              </div>
            </div>
          ) : (
            <div className=" md:mb-0 md:flex-shrink-0 p-6 md:w-96">
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={320}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-xl font-semibold ">{item.title}</h2>
                <p className="text-gray-500">Fecha de publicación</p>
                <p className="text-gray-700">{item.paragraph}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6 md:mt-0">
                  Leer más
                </button>
              </div>
            </div>
          )}
        </div>
        
      ))}
    </div>
    </main>
  );
};

export default Page;
