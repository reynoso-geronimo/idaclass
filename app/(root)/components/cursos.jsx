"use client";
import { useState, useEffect, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "@/components/ui/EmblaCarouselArrowsDotsButtons";
import CursoCard from "./ui/cursoCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <h2 className="text-3xl text-center font-extrabold  mb-4 mx-4 text-indigo-950 ">
          Descubri como podemos potenciarte
        </h2>
        <p className="text-center text-black text-lg font-normal leading-loose tracking-wide">
          Cursos, carreras y capacitaciones digitales, hibridas 100% enfocadas
          en la práctica basandonos en el modelo Learn By Doing.
        </p>
        <p className="text-center text-black text-lg font-normal leading-loose tracking-wide ">
          Formación y especialización para la industria del deporte, actividad
          física y fitness. Formamos a entrenadores y especialistas que luego
          pueden emprender sus propios negocios independientes y/o trabajar
          luego en instituciones deportivas y gimnasios.
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
        <Button size="lg" className="rounded-3xl m-10 font-bold" asChild>
          <Link href="/cursos">Ver todos los cursos</Link>
        </Button>
      </div>
    </section>
  );
};

export default Cursos;
