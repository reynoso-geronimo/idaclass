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
    src: "/LogorepresentantePeru.jpeg",
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
    <div className="container max-w-4xl flex justify-center grayscale">
      <Carousel
        className="w-full "
        opts={{
          align: "center",
          loop: true,
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
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center  relative w-32">
                  <Image
                    src={`/empresasPartners${partner.src}`}
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

export default EmpresasPartners;
