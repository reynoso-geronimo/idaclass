"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const ImagesSlider = ({
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
      }, 10000);
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
  const slideVariants2 = {
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
      y: "-250%",
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
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-1/2 absolute inset-0 object-contain object-bottom"
          />
        </AnimatePresence>
      )}

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="visible"
          exit={direction === "up" ? "upExit" : "downExit"}
          variants={slideVariants2}
          className="text-white absolute right-0 w-1/2 container flex flex-col justify-between space-y-10 pl-36"
        >
          <h4 className="text-orange-500 font-bold italic text-lg">
            Modalidad Virtual | Cursos Asincrónicos
          </h4>

          <div className="relative">
            <img
              src="/home/cursosEspecializacion/flechitas.svg"
              width={90}
              height={120}
              alt="Cursos On Demand"
              className="absolute -left-28"
            />

            <h3 className="inline text-5xl font-extrabold text-left my-4">
              {currentIndex === 0 ? "CURSOS" : "Conviértete en especialista"}{" "}
              <br />
              <span className="text-idaclass4">
                {currentIndex === 0
                  ? "On Demand"
                  : "y lleva tu carrera a otro nivel"}
              </span>
            </h3>
          </div>
          {/* <h3 className="text-idaclass3 text-2xl font-bold">
                Lleva tu carrera al siguiente nivel!!!!
              </h3> */}
          {currentIndex === 0 ? (
            <div className="space-y-2 font-semibold text-lg">
             
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
              <p className="text-lg">100% online, aprende a tu ritmo.</p>
            </div>
          )}
          <div className="mt-5 relative">
            <Link
              href={"/cursos-especializados"}
              className="flex items-center bg-idaclass4 py-0.5 px-2 rounded-xl font-bold text-xs w-40"
            >
              <ArrowRight className="mr-2" /> ELEGÍ TU CURSO
            </Link>
            <img
              src="/home/cursosEspecializacion/linearecta.png"
              width={400}
              height={100}
              alt="Cursos On Demand"
              className="absolute scale-125 left-60 bottom-3"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
