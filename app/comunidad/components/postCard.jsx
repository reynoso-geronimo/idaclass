import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <article className=" rounded-b-2xl rounded-t-3xl overflow-hidden max-w-[420px] mx-auto relative">
      {
        <Badge className={`absolute top-4 -left-4 pl-6 bg-orange-500`}>
          {post.categorias[0].nombre || " "}
        </Badge>
      }
      <div className="relative aspect-video w-full">
      <Image
        src={"/blog/cards/" + post.titulo + ".png"}
        quality={100}
        fill
        alt="Imagen de Blog"
        className="bg-black text-white object-cover -z-10"
      />
      </div>
      <div className="px-4 h-32 flex flex-col justify-between py-4 bg-gray-100">
        <h5 className="leading-5 font-medium line-clamp-[3]">{post.titulo}</h5>
        <Link
          href={`/comunidad/blog/${post.id}`}
          className="text-idaclass3 font-bold text-xs text-right flex justify-end items-center gap-4"
        >
          SEGUIR LEYENDO
          <ArrowRight className="inline" size={22} strokeWidth={3} />
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
