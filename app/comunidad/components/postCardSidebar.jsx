import Link from 'next/link'

const PostCardSidebar = ({post,index}) => {
  return (
    <article className="border-b border-gray-500 flex justify-between items-center p-4 h-full gap-10 overflow-hidden">
    <h4 className="line-clamp-[4]">{post.titulo}</h4>
    <Link
      href={`comunidad/blog/${post.id}`}
      className="text-center leading-4 text-idaclass3"
    >
      SEGUIR <br />
      LEYENDO
    </Link>
  </article>
  )
}

export default PostCardSidebar