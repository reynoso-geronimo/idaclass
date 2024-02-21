import BlockRendererClient from "@/components/ui/BlockRendererClient";
import { Separator } from "@/components/ui/separator";
import Blog from "@/models/Blog";
import Image from "next/image";

const page = async ({ params }) => {
  const post = await Blog.findByPk(params.id);
  const contenido = JSON.parse(post.cuerpo);

  return (
    <main className="container max-w-4xl my-8">
      <h1 className="font-bold my-4 text-3xl">{post.titulo}</h1>
      <p className="italic my-12">{post.introduccion}</p>
      <Separator className="bg-gray-400 mb-12"/>
      <Image
        src={"/blog/" + post.foto}
        alt={post.titulo}
        width={420}
        height={420}
        className={`rounded-lg object-cover w-full h-auto`}
      />
      
      <BlockRendererClient content={contenido} />
    </main>
  );
};

export default page;
