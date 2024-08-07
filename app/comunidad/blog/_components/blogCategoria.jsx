"use client";
import TituloSeccion from "@/components/ui/titulo-seccion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PostCard from "../../components/postCard";
import { Separator } from "@/components/ui/separator";

const BlogCategoria = ({ categoria, blogPosts, index, setActivo, freezeInView }) => {
  const countblogPosts = blogPosts.length;
  //console.log(countblogPosts);
  let basis = "basis-full";

  if (countblogPosts === 2) {
    basis = "md:basis-1/2";
  } else if (countblogPosts === 3) {
    basis = "md:basis-1/3";
  } else if (countblogPosts >= 4) {
    basis = "md:basis-[335px]";
  }

  const [ref, inView] = useInView({ threshold: 0.7, rootMargin: "0px" });

  useEffect(() => {
     if(inView &&!freezeInView) {
      setActivo(index);
      
    }
  }, [inView]);

  return (
    <section className={`relative`} ref={ref}>
      <div id={categoria} className="absolute -top-[65px]" />
      <TituloSeccion>
        Categoria <span className="text-idaclass4">{categoria}</span>
      </TituloSeccion>
      <Carousel
        className="container"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {blogPosts.map((post, index) => (
            <CarouselItem key={index} className={`pl-1 ${basis} md:mx-4`}>
              <PostCard post={post} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`left-5 h-10 w-10 ${countblogPosts <= 2 && "lg:hidden"}`}
        />
        <CarouselNext
          className={`right-5 h-10 w-10 ${countblogPosts <= 2 && "lg:hidden"}`}
        />
      </Carousel>
      <Separator className="mt-12" />
    </section>
  );
};

export default BlogCategoria;
