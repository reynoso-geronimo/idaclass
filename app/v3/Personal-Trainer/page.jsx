import React from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import Programa from "./components/programa";
import Testimoniales from "./components/testimoniales";
import Certificacion from "./components/certificacion";
import Trainers from "./components/trainers";
import FaqSection from "./components/faq-section";
import CtaSection from "./components/cta-section";
import FechasHorarios from "./components/fechas-horarios";
import RegisterForm from "./components/RegisterForm";
import { getCursoFormacionFromDB } from "@/app/actions";
import OfertaExclusiva from "./components/oferta-exclusiva";
 const curso = await getCursoFormacionFromDB("Personal Trainer");
const page = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Programa />
      <Testimoniales />
      <Certificacion />
      <div className="container flex flex-wrap items-stretch justify-center gap-12 mb-12">
        <OfertaExclusiva  />  <RegisterForm/></div>
      
      <FechasHorarios />
      <Trainers />
      <FaqSection/>
      <CtaSection />
    </main>
  );
};

export default page;
