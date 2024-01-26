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
    <section className=" flex justify-center items-center h-40 container">
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
        className="mx-4 max-w-5xl container"
       
        
      >
        <CarouselContent>
          {paises.map(pais => (
            <CarouselItem key={pais} className="basis-1/7 ">
              <div className="relative h-24 w-24 border-2 rounded-full">
                <Image
                  src={`https://flagcdn.com/h240/${pais}.webp`}
                  fill
                  alt={pais}
                  className=" rounded-full "
                  style={{
                    objectFit: 'fill', // cover, contain, none
                  }}
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
