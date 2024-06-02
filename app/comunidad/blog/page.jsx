import TituloSeccion from "@/components/ui/titulo-seccion";
import { getBlogPostsFromDB } from "../../actions";
import PostCard from "../components/postCard";
import BlogCategorias from "./_components/blogCategorias";

const Page = async () => {
  const blogPosts = await getBlogPostsFromDB();
  const todasCategorias = blogPosts.map(blog => blog.categorias);

  // Aplanar en un solo array
  const categorias = todasCategorias.flat();

  // Obtener solo los nombres únicos
  const categoriasBlog = [
    ...new Set(categorias.map(cat => cat.nombre)),
  ];
  return (
    <main className="mb-16">
     <BlogCategorias categoriasOnDemand={categoriasBlog}  blogPosts={blogPosts}/>
      

    </main>
  );
};

export default Page;
