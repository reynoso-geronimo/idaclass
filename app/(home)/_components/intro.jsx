"use client";
import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Dumbbell, Rocket } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import linea from "../../../public/assets/Linea img 3.png";

const situaciones = [
  {
    icon: Rocket,
    titulo: "Quiero trabajar de lo que me apasiona",
    texto:
      "Buscas una salida laboral rápida y segura para generar ingresos propios haciendo lo que amas, sin estar atado a un empleo tradicional que no te motiva ni te llena.",
  },
  {
    icon: Dumbbell,
    titulo: "Quiero entrenar con criterio propio",
    texto: (
      <>
        Estás cansado de ir al gimnasio, seguir rutinas genéricas de internet y sentir que nadie te corrige. Necesitas
        dominar la biomecánica y el <em>porqué</em> científico de cada ejercicio.
      </>
    ),
  },
  {
    icon: BadgeCheck,
    titulo: "Necesito certificar mis conocimientos",
    texto:
      "Ya tienes pasión por el fitness, pero te falta el respaldo institucional de peso y la estructura técnica profesional para que los gimnasios y clientes confíen en ti.",
  },
];

// Pasa lento para dar tiempo a leer cada tarjeta; se pausa con el mouse encima y las flechas permiten avanzar a mano.
const AUTOPLAY_DELAY = 9000;

const Intro = () => {
  const [api, setApi] = useState();
  const [autoplay] = useState(() =>
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      // Toma todo el carrusel (tarjetas + flechas) para pausar al pasar el mouse.
      rootNode: emblaRoot => emblaRoot.parentElement,
    })
  );

  const mover = useCallback(
    direccion => {
      if (!api) return;
      if (direccion < 0) api.canScrollPrev() ? api.scrollPrev() : api.scrollTo(api.scrollSnapList().length - 1);
      else api.canScrollNext() ? api.scrollNext() : api.scrollTo(0);
      // Reinicia la cuenta para que la próxima tarjeta tenga el tiempo completo de lectura.
      api.plugins()?.autoplay?.reset();
    },
    [api]
  );

  // En desktop el texto ocupa una columna fija a la izquierda y el carrusel el resto, así se ven
  // las tarjetas 1 y 2 y asoma la 3, invitando a pasar.
  return (
    <section className="container lg:pl-16 lg:pr-0 bg-black text-white py-10 gap-10 lg:gap-12 flex flex-col lg:flex-row items-center relative overflow-hidden">
      <div className="w-full lg:w-[380px] xl:w-[400px] lg:shrink-0 text-center lg:text-left">
        <h2 className="font-semibold text-3xl lg:max-w-md text-balance">
          Si te identificas con alguna de estas situaciones, esto es para vos
        </h2>
        <p className="text-sm sm:text-base py-3 lg:max-w-sm text-white/80 text-pretty">
          Sabemos exactamente qué te trae por acá y qué necesitas para dar el gran salto profesional.
        </p>
        <div className="-translate-x-[27px] lg:absolute bottom-10 left-7 w-full">
          <Image src={linea} alt="linea" className="absolute -translate-x-[8%] -translate-y-[55%] scale-[150%] " />
        </div>
      </div>
      <div className="w-full lg:flex-1 min-w-0">
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{
            align: "start",
            duration: 45,
          }}
          plugins={[autoplay]}
        >
          <CarouselContent className="-ml-4">
            {situaciones.map(({ icon: Icon, titulo, texto }) => (
              <CarouselItem key={titulo} className="pl-4 basis-[88%] sm:basis-[62%] lg:basis-[64%] xl:basis-[45%]">
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 transition-colors duration-500 hover:border-idaclass3/60">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-idaclass3/30 bg-idaclass4/15 text-idaclass3">
                    <Icon className="h-6 w-6" strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold leading-snug text-balance">{titulo}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70 text-pretty">{texto}</p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-5 flex justify-center lg:justify-end lg:pr-8 gap-3">
            <button
              type="button"
              onClick={() => mover(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-idaclass4 text-white transition-colors hover:bg-idaclass3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-idaclass2"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
              <span className="sr-only">Situación anterior</span>
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-idaclass4 text-white transition-colors hover:bg-idaclass3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-idaclass2"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
              <span className="sr-only">Situación siguiente</span>
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Intro;
