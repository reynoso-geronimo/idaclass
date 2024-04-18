"use client";
import Image from "next/image";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({ content }) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="text-normal mb-4">{children}</p>,
        list:({ children }) => <ul className="list-disc list-inside">{children}</ul>,
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="my-4 font-bold text-2xl text-idaclass">{children}</h1>
            case 2:
              return <h2 className="mt-4 text-idaclass4 font-bold">{children}</h2>
            case 3:
              return <h3 className="my-4 text-lg">{children}</h3>
            case 4:
              return <h4 className="my-4 text-lg">{children}</h4>
            case 5:
              return <h5 className="my-4 text-lg">{children}</h5>
            case 6:
              return <h6 className="my-4 text-lg">{children}</h6>
            default:
              return <h1 className="my-4 text-lg">{children}</h1>
          }
        },
        image: ({ image }) => {
          console.log(image);
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          );
        },
      }}
    />
  );
}
