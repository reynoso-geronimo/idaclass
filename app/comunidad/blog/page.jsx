import { getBlogPostsFromDb } from "../../actions";
import PostCard from "../components/postCard";

const Page = async () => {
  const blogPost = await getBlogPostsFromDb();

  return (
    <main className="flex flex-col items-center  ">
     
     <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 my-12 container ">
            {blogPost.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </div>

    </main>
  );
};

export default Page;
