"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import React from "react";

//!!ESTO NECESITA CORRECCION, RENDERIZAR IMAGENES DEPENDIENDO DEL Tamaño de la pantalla

const Modalidad=()=> {
  const images = [
    "./modalidad/IdaClass Web Img 6.2.jpg",
    "./modalidad/IdaClass Web Img 7.jpg",
  ];
  const imagesCelular =[
    "./modalidad/IdaClass Web Img 8.jpg",
    "./modalidad/IdaClass Web Img 10.jpg",
    "./modalidad/IdaClass Web Img 9.jpg",
  
  ]
  return (
   <>
    <ImagesSlider className="h-[400px] container max-lg:hidden" images={images} overlay={false}>
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
    <ImagesSlider className="min-h-[400px] container lg:hidden" images={imagesCelular} overlay={false}>
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
   </>
  );
}
export default Modalidad;