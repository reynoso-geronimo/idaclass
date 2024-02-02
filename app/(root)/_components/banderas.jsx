"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const paises = ["ar", "py", "bo", "uy", "cl", "pe", "ec", "co","mx","cr","ni","sv"];

const Banderas = () => {
  return (
    <section className=" flex justify-center items-center h-40 ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration:6000,
          watchDrag:false
        }}
        plugins={[
          Autoplay({
            delay: 0,
          }),
        ]}
        className="mx-4 max-w-6xl container"
       
        
      >
        <CarouselContent>
          {paises.map(pais => (
            <CarouselItem key={pais} className="basis-1/8 ">
              <div className="relative h-[50px] aspect-video ">
                <Image
                  src={`https://flagcdn.com/h240/${pais}.webp`}
                 fill
                  alt={pais}
                  sizes="90px"
                  className="border-[1px] border-gray-200"
                  
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Banderas;
