"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ImagesSliderMobile = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then(loadedImages => {
        setLoadedImages(loadedImages);
        setLoading(false);
      })
      .catch(error => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {}, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 0.5,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div className={cn("absolute inset-0  z-40", overlayClassName)} />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          {currentIndex === 0 || currentIndex === 2 ? (
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="image h-full absolute object-contain object-bottom"
            />
          ) : (
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="image h-full absolute text-white px-8 py-8"
            >
              <h4 className="text-orange-500 font-bold italic text-sm mb-6">
                Modalidad Virtual | Cursos Asincrónicos
              </h4>

              <h3 className="text-4xl font-extrabold text-left pb-6">
                {currentIndex === 1 ? "CURSOS" : "Especializate"} <br />
                <span className="text-idaclass4">
                  {currentIndex === 1 ? "On Demand" : "con Nosotros"}
                </span>
              </h3>

              {/* <h3 className="text-idaclass3 text-2xl font-bold">
                Lleva tu carrera al siguiente nivel!!!!
              </h3> */}
              {currentIndex === 1 ? (
                <div className="space-y-1.5 font-semibold text-lg">
                  <p>
                    <Check
                      className="rounded-full bg-idaclass text-black p-0.5 inline mr-2"
                      strokeWidth={2.5}
                      size={22}
                    />
                    Aprende a tu ritmo
                  </p>
                  <p>
                    <Check
                      className="rounded-full bg-idaclass text-black p-0.5 inline mr-2"
                      strokeWidth={2.5}
                      size={22}
                    />
                    Alcanza tus metas
                  </p>
                  <p>
                    <Check
                      className="rounded-full bg-idaclass text-black p-0.5 inline mr-2"
                      strokeWidth={2.5}
                      size={22}
                    />
                    Llevá tu carrera a otro nivel
                  </p>
                  <p>
                    <Check
                      className="rounded-full bg-idaclass text-black p-0.5 inline mr-2"
                      strokeWidth={2.5}
                      size={22}
                    />
                    Convertite en un especialista
                  </p>
                </div>
              ) : (
                <div className="space-y-2 font-semibold">
                  <p className="text-lg">
                    Dominá las habilidades que <br /> necesitás para destacar en
                    tu <br /> campo con nuestros programas <br /> de
                    especialización.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
