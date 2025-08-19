import React from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import Programa from "./components/programa";
import Testimoniales from "./components/testimoniales";
import Certificacion from "./components/certificacion";
import Trainers from "./components/trainers";
import FaqSection from "./components/faq-section";
import CtaSection from "./components/cta-section";

const page = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Programa />
      <Testimoniales />
      <Certificacion />
      <Trainers />
      <FaqSection/>
      <CtaSection />
    </main>
  );
};

export default page;
