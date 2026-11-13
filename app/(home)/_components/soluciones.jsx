"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image.js";

const soluciones = [
  {
    titulo: "Prácticas reales en gimnasios aliados",
    texto:
      "Aprendé haciendo y ganá confianza desde el primer día. Viví experiencias reales en gimnasios, practicá junto a tus docentes y compañeros para desarrollar la experiencia necesaria y dar tus primeros pasos con seguridad.",
  },
  {
    titulo: "Academia híbrida inteligente",
    texto:
      "Aprendé la teoría de manera simple y desde donde estés. Accede a videos, material de lectura y autoevaluaciones en nuestro campus. Para que disfrutes el aprendizaje y avances con confianza.",
  },
  {
    titulo: "Habilidades blandas y de negocio",
    etiqueta: "Pioneros",
    texto:
      "Somos pioneros en incorporar competencias humanas. Aprende a generar vínculos desde una comunicación empática para captar, fidelizar y retener clientes. Con una mirada comercial basada en la experiencia del usuario.",
  },
  {
    titulo: "Tesis y desarrollo de proyectos",
    texto:
      "Aprende a establecer metas personales, desarrollar tu marca personal, generar oportunidades laborales y cómo emprender. Accedé a nuestra bolsa de trabajo y pasantías en gimnasios.",
  },
];

const Soluciones = () => {
  const [activo, setActivo] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="min-h-[700px] bg-black text-white relative container px-0">
      <Image
        alt=""
        src="/assets/bg-soluciones.png"
        fill
        quality={100}
        sizes="100vw"
        className="object-cover  max-lg:hidden"
      />
      <Image
        alt=""
        src="/assets/bg-solucionesMobile.png"
        fill
        quality={100}
        sizes="100vw"
        className="object-cover lg:hidden"
      />
      <div className="flex flex-col justify-center min-h-[700px] container relative py-12">
        <h2
          ref={ref}
          className={`${
            inView ? `reveal-text` : `opacity-0`
          } max-w-xl text-3xl sm:text-[40px] text-left font-extrabold mb-6 sm:mb-8 tracking-tighter text-idaclass3`}
        >
          <span>Una formación pensada para el fitness actual.</span>
        </h2>

        <ul className="max-w-2xl divide-y divide-white/10">
          {soluciones.map((solucion, index) => {
            const abierto = activo === index;
            return (
              <li key={solucion.titulo}>
                <h3>
                  <button
                    type="button"
                    id={`solucion-${index}`}
                    aria-expanded={abierto}
                    aria-controls={`solucion-${index}-texto`}
                    onClick={() => setActivo(abierto ? null : index)}
                    className="group w-full flex items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-idaclass3 rounded-lg"
                  >
                    <span
                      className={`shrink-0 font-extrabold text-4xl sm:text-5xl min-w-[56px] sm:min-w-[70px] tracking-tighter font-mono scale-y-125 transition-all duration-700 ${
                        abierto ? `drop-shadow-[0_0_10px_rgba(100,100,255,1)] text-idaclass2` : ``
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="flex-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-bold text-lg sm:text-2xl leading-tight">
                      {solucion.titulo}
                      {solucion.etiqueta && (
                        <span className="rounded-full bg-idaclass3 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wide text-white">
                          {solucion.etiqueta}
                        </span>
                      )}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`shrink-0 h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-500 group-hover:text-idaclass2 ${
                        abierto ? "rotate-180 text-idaclass2" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`solucion-${index}-texto`}
                  role="region"
                  aria-labelledby={`solucion-${index}`}
                  inert={!abierto}
                  className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${
                    abierto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 sm:pl-[86px] pr-2 sm:pr-12 text-pretty font-normal sm:text-lg leading-relaxed text-white/85">
                      {solucion.texto}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Soluciones;
