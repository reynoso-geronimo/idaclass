'use client'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  {
    src: "/Aletic.png",
    alt: "logo",
  },
  {
    src: "/GimnasioST.jpg",
    alt: "logo",
  },
  {
    src: "/Graciela.jpeg",
    alt: "logo",
  },
  {
    src: "/gymPeru.png",
    alt: "logo",
  },
  {
    src: "/LogoB2Peru.png",
    alt: "logo",
  },
  {
    src: "/NeurofitRosario.jpg",
    alt: "logo",
  },
  {
    src: "/Aletic.png",
    alt: "logo",
  },
  {
    src: "/GimnasioST.jpg",
    alt: "logo",
  },
  {
    src: "/Graciela.jpeg",
    alt: "logo",
  },
  {
    src: "/gymPeru.png",
    alt: "logo",
  },
  {
    src: "/LogoB2Peru.png",
    alt: "logo",
  },
  {
    src: "/NeurofitRosario.jpg",
    alt: "logo",
  },
];

const Partners = () => {
  return (
    <div className="container flex justify-center items-center h-40">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration:6000,
          watchDrag:false
        }}
        className="mx-4 max-w-5xl"
        plugins={[
          Autoplay({
            delay: 0,
          }),
        ]}
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 sm:basis-1/6 md:basis-1/6"
            >
              <div>
                <div className="flex aspect-square items-center justify-center px-2 relative">
                  <Image
                    src={`/partners${partner.src}`}
                    width={120}
                    height={120}
                    alt="logo"
                    className=" rounded-xl cover"
                  ></Image>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
