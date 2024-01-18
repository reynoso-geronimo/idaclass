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
    <section className="bg-slate-200 p-6">
      <div className="flex flex-col gap-4 max-w-2xl items-center mx-auto my-14">
        <h2 className="text-5xl text-left font-extrabold  mb-4  text-indigo-950 tracking-tighter">
          Soluciones personalizadas para tu exito
        </h2>

        <div className="sm:flex items-center gap-4">
         
            <span className="font-extrabold text-5xl min-w-[70px] tracking-titracking-tighter ">
              01
            
          </span>
          <div>
            <h5 className="font-bold">
              Acompañamiento Personalizado/ Docentes de clase mundial:
            </h5>
            <p>
              Nuestro equipo de trainer educativos y expertos internacionales te
              guiarán en cada paso de tu carrera, como alumno, como profesional
              o emprendedor para alcances tus metas con exito
            </p>
          </div>
        </div>

        <div className="sm:flex items-center gap-4">
         
            <span className="font-extrabold text-5xl min-w-[70px] tracking-tighter  ">
              02
            
          </span>
          <div>
            <h5 className="font-bold">
              Certificado Profesional y Aval Universitario:
            </h5>
            <p>
              Alcanza tus objetivos y certifica tus conocimientos con nuestro
              certificado profesional respaldado por un aval universitario.
            </p>
          </div>
        </div>

        <div className="sm:flex items-center gap-4">
         
            <span className="font-extrabold text-5xl min-w-[70px] tracking-tighter">
              03
            
          </span>
          <div>
            <h5 className="font-bold">IdaClass Hub nuestra comunidad:</h5>
            <p>
              Se parte de Learn Knowledge Hub (centro de conocimiento y
              aprendizaje) tu espacio para conectar con pares, profesionales,
              mentores para ampliar tu red y compartir experiencia de alto valor
              para tu desarrollo profesional
            </p>
          </div>
        </div>

        <div className="sm:flex items-center gap-4">
         
            <span className="font-extrabold text-5xl min-w-[70px] tracking-tighter">
              04
            
          </span>
          <div>
            <h5 className="font-bold">Ida Jobs bolsa de laboral:</h5>
            <p>
              Estamos comprometidos a ayudarte a que encuentres nuevas
              oportunidades laborales conectando con gimnasios , centro
              deportivos y personas en búsqueda de profesionales certificados
            </p>
          </div>
        </div>
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
