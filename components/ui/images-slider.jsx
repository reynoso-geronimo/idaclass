"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import Link from "next/link";

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
            className="image h-full w-full absolute inset-0 object-cover lg:object-contain object-center"
          />
        </AnimatePresence>
      )}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="visible"
          //exit={direction === "up" ? "upExit" : "downExit"}
          variants={slideVariants}
          className="text-white absolute bottom-10 text-center lg:hidden z-10"
        >
          <Link href={"/cursos"}>
            <Button className={"h-12 w-[80vw]  text-lg"}>
              {currentIndex === 0 && "Impulsa tu carrera hoy mismo"}
              {currentIndex === 1 && "Elige tu curso"}
              {currentIndex === 2 && "Ver todos los cursos"}
            </Button>
          </Link>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="visible"
          exit={direction === "up" ? "upExit" : "downExit"}
          variants={slideVariants2}
          className="text-white absolute lg:right-0 top-[10%] lg:top-[20%] w-1/2 text-center"
        >
          {currentIndex === 1 && (
            <>
              <h3 className="text-idaclass3 text-4xl font-bold">
                CURSOS ON DEMAND
              </h3>
              {/* <h3 className="text-idaclass3 text-2xl font-bold">
                Lleva tu carrera al siguiente nivel!!!!
              </h3> */}

              <ul className="list-inside list-disc my-2">
                <li>Estudia a tu ritmo </li>
                <li>Expertos internacionales </li>
                <li>Elije tu area de especializacion</li>
              </ul>
              <Link href={"/cursos"} className="max-lg:hidden">
                <Button variants="lg" className="rounded-lg mt-4">
                  Ver todos los cursos
                </Button>
              </Link>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
