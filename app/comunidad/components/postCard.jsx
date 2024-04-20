import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <article className=" rounded-b-2xl rounded-t-3xl overflow-hidden max-w-[520px] mx-auto">
      <Image
        src={"/blog/" + post.foto}
        width={520}
        height={520}
        alt="Imagen de Blog"
        className="bg-black aspect-video mx-auto text-white"
      />
      <div className="px-4 h-36 flex flex-col justify-between py-4 bg-gray-100">
        <h5 className="leading-5 font-semibold line-clamp-[3]">
          {post.titulo}
        </h5>
        <Link
          href={`/comunidad/blog/${post.id}`}
          className="text-idaclass3 font-semibold text-sm text-right flex justify-end items-center gap-4"
        >
          SEGUIR LEYENDO
          <ArrowRight className="inline" size={22} strokeWidth={3} />
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
