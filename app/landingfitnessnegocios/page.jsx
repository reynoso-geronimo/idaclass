"use client";

import { useState } from "react";
import ScreenHero from "./components/ScreenHero";
import ScreenGym from "./components/ScreenGym";
import ScreenCoord from "./components/ScreenCoord";
import ScreenStu from "./components/ScreenStu";
import ScreenThanks from "./components/ScreenThanks";

export default function LandingFitnessNegociosPage() {
  const [screen, setScreen] = useState("hero");

  function goTo(next) {
    setScreen(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  const onSubmitLead = () => goTo("thanks");

  return (
    <main className="font-barlow text-white">
      <div key={screen} className="animate-fade-up">
        {screen === "hero" && <ScreenHero onSelect={goTo} />}
        {screen === "gym" && <ScreenGym onBack={() => goTo("hero")} onSubmit={onSubmitLead} />}
        {screen === "coord" && (
          <ScreenCoord onBack={() => goTo("hero")} onSubmit={onSubmitLead} />
        )}
        {screen === "stu" && <ScreenStu onBack={() => goTo("hero")} onSubmit={onSubmitLead} />}
        {screen === "thanks" && <ScreenThanks />}
      </div>
    </main>
  );
}
