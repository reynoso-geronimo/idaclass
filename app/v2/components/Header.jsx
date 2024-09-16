"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-center max-sm:max-w-80 transition-all duration-500 ease-in-out overflow-hidden lg:mr-4 ${
        isScrolled ? "max-lg:opacity-0 max-lg:max-h-0" : "opacity-100 max-h-32 max-lg:mb-4"
      }`}
      style={{ transition: "all 0.5s ease-in-out" }} // Smooth transition for height and opacity
    >
      <p className="text-3xl">🔥</p>
      <p>Inscribite hoy y accede al 40% de descuento con nuestra BecaClass</p>
    </div>
  );
};

export default Header;
