"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  {
    src: "/COALICIONUNIVERSIDADESYMCA.jpg",
    alt: "logo",
  },
  {
    src: "/Logo_instituto-leyenda-red.png",
    alt: "logo",
  },
  {
    src: "/LogorepresentantePeru.png",
    alt: "logo",
  },
  {
    src: "/MERCADOFITNESS.png",
    alt: "logo",
  },
  {
    src: "/QUEDEPORTE.png",
    alt: "logo",
  },
  {
    src: "/RGCONSULTING.jpg",
    alt: "logo",
  },
];

const EmpresasPartners = () => {
  return (
    <Carousel
      className="container max-w-4xl flex justify-center grayscale pb-4"
      opts={{
        align: "center",
        loop: true,
        watchDrag: false,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1 lg:h-full ">
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/8">
            <div className="p-1 flex items-center justify-center relative w-32 h-20">
              <Image
                src={`/empresasPartners${partner.src}`}
                fill
                alt="logo"
                className=" rounded-xl object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default EmpresasPartners;
