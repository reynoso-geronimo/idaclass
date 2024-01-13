import Image from "next/image";
import { getBlogPostFromDb } from "../actions";

const Page = async () => {
  const blogPost = await getBlogPostFromDb();
  console.log(blogPost);
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl p-8 my-8 grid grid-cols-1 md:grid-cols-3 items-center	gap-12">
        {blogPost.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white flex mx-auto p-6 rounded-lg shadow-md max-w-[420px] min-h-[500px] ${
              index === 0
                ? "md:col-span-3 md:max-w-full md:w-full  md:min-h-[10px] "
                : ""
            }`}
          >
            <div
              className={`w-full flex flex-col justify-start space-y-6 h-full  ${
                index === 0 ? "md:flex-row md:gap-x-12 md:items-start" : ""
              }`}
            >
              <Image
                src={"/" + item.foto}
                alt={item.titulo}
                width={420}
                height={420}
                className={`rounded-lg object-cover  ${
                  index === 0 ? "md:w-2/3" : ""
                }`}
              />
              <div className={` ${index === 0 ? "" : ""}`}>
                <h2 className="text-xl font-semibold ">{item.titulo}</h2>
                <p className="text-gray-500">
                  {new Date(item.created_at).toLocaleDateString(undefined, {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <p
                  className={`text-gray-700 line-clamp-6 ${
                    index === 0 ? "md:line-clamp-[8]" : ""
                  }`}
                >
                  {item.introduccion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
