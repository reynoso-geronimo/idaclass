"use client";
import { useState, useEffect, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";
import Image from "next/image";

const EmblaCarousel = props => {
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
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div className="embla__slide" key={index}>
                <Image
                  className="embla__slide__img"
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={300}
                  priority
                  quality={50}
                />
              </div>
            ))}
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
    </>
  );
};

export default EmblaCarousel;
