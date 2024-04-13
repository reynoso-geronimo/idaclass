"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { ImagesSliderMobile } from "@/components/ui/images-slider-Mobile";
import TituloSeccion from "@/components/ui/titulo-seccion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CursosOnDemand = () => {
  const images = [
    "./home/CursosOnDemand/Img1.png",
    "./modalidad/IdaClass Web Img 7.jpg",
  ];

  //!! ESTO ESTA MAL NO SER HARAGAN Y ARREGLAR

  const imagesMobile = [
    "./home/CursosOnDemand/Img1.png",
    "./home/CursosOnDemand/Img1.png",
    "./home/CursosOnDemand/Img2.png",
    "./home/CursosOnDemand/Img2.png",
  ];

  const width = window.innerWidth;
  return (
    <section>
      <TituloSeccion>Cursos especializados</TituloSeccion>
      <h2 className="text-center text-xl px-2 mb-4">
        100% on Demand, lleva tu carrera a otro nivel, elegi tu area de
        especializacion
      </h2>
      {width >= 1204 ? (
        <ImagesSlider
          className="h-[500px] container bg-gradient-to-r from-[#1E2E57] to-[#021225]"
          images={images}
          overlay={false}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
           The hero section slideshow <br /> nobody asked for
        </motion.p>
         <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>  */}
          </motion.div>
        </ImagesSlider>
      ) : (
        <ImagesSliderMobile
          className="h-[400px] container bg-gradient-to-r from-[#1E2E57] to-[#021225]"
          images={imagesMobile}
          overlay={false}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
           <Link
              href={"/cursos"}
              className="flex items-center justify-center bg-idaclass4 py-0.5 w-[70vw] mx-8 h-[40px] rounded-xl font-bold text-xs  text-white absolute bottom-6 z-10"
            >
              <ArrowRight className="mr-2" /> ELEGÍ TU CURSO
            </Link>
        
        </ImagesSliderMobile>
      )}
    </section>
  );
};
export default CursosOnDemand;
