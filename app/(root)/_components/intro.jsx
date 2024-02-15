import { ArrowUp } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Intro = () => {
  return (
    <section className="container lg:px-0 w-full mx-auto bg-slate-900 text-white py-8 gap-12 flex flex-col lg:flex-row items-center justify-end ">
      <div className="w-full lg:w-auto text-center lg:text-left">
        <h2 className="font-semibold text-3xl lg:max-w-sm">
          Ofrecemos la mejor solución probada para tu futuro{" "}
          <p className="whitespace-nowrap inline">
            profesional
            <ArrowUp
              className="text-idaclass4 scale-y-125 inline"
              strokeWidth={4}
            />
          </p>
        </h2>
        <p className="text-sm py-2 lg:max-w-sm">
          Somos la llave para transformar tu pasion <br /> en una carrera
          exitosa en tiempo record.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Carousel className="w-[100%]">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 basis-[40%]">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-idaclass4 border-0 left-2" />
          <CarouselNext className=" bg-idaclass4 border-0 right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Intro;
