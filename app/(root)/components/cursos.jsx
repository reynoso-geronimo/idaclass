"use client";
import { useState, useEffect, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "@/components/ui/EmblaCarouselArrowsDotsButtons";
import CursoCard from "./cursoCard";
import { Button } from "@/components/ui/button";

const Cursos = props => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    [Autoplay()],
    [AutoHeight()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    index => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback(emblaApi => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback(emblaApi => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="bg-slate-200 pb-4">
      <div className="text-center p-6">
        <h2 className="text-2xl text-center font-extrabold  mb-4 mx-4 text-indigo-950 ">
          Elige el curso para tu futuro profesional.
        </h2>
        <p className="text-center text-black text-lg font-normal leading-loose tracking-wide">
          Somos la propuesta más completa del mercado. Con nuestra formación
          integral, eliges 1 curso te llevas 4, lo que te permitirá
          diferenciarte en el mercado laboral.
        </p>
        <p className="text-center text-black text-lg font-normal leading-loose tracking-wide">
          Nuestros cursos incluyen: Marketing personal, Herramientas de
          liderazgo, Comunicación Asertiva, Ventas y Redes Sociales.
        </p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide__curso">
              <CursoCard />
            </div>
            <div className="embla__slide__curso">
              <CursoCard />
            </div>
            <div className="embla__slide__curso">
              <CursoCard />
            </div>
            <div className="embla__slide__curso">
              <CursoCard />
            </div>
            <div className="embla__slide__curso">
              <CursoCard />
            </div>
            <div className="embla__slide__curso">
              <CursoCard />
            </div>
          </div>
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
  
       <div className="w-100 flex justify-center">
       <Button size="lg" className='rounded-3xl m-10 font-bold'>Ver todos los cursos</Button>
 
       </div>
    </section>
  );
};

export default Cursos;
