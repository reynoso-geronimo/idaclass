"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/videos/testimonio-1.mp4" },
  { src: "/videos/testimonio-2.mp4" },
  { src: "/videos/testimonio-3.mp4" },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(() => SLIDES.map(() => false));
  const videoRefs = useRef([]);
  const startX = useRef(0);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== current && !v.paused) {
        v.pause();
        setPlaying((p) => p.map((x, idx) => (idx === i ? false : x)));
      }
    });
  }, [current]);

  function play(i) {
    const v = videoRefs.current[i];
    if (!v) return;
    v.play();
    setPlaying((p) => p.map((x, idx) => (idx === i ? true : x)));
    v.onended = () =>
      setPlaying((p) => p.map((x, idx) => (idx === i ? false : x)));
  }

  function go(delta) {
    setCurrent((c) => (c + delta + SLIDES.length) % SLIDES.length);
  }

  return (
    <div className="pb-5">
      <div
        className="relative mx-6 overflow-hidden rounded-[18px]"
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const d = startX.current - e.changedTouches[0].clientX;
          if (Math.abs(d) > 40) go(d > 0 ? 1 : -1);
        }}
      >
        <div
          className="flex transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{ transform: `translateX(${-current * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="relative min-w-full overflow-hidden rounded-[18px] border border-white/[0.04] bg-[#111826]"
            >
              <div className="relative w-full overflow-hidden bg-[#060810] pb-[133%]">
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={s.src}
                  preload="metadata"
                  playsInline
                  className="absolute left-1/2 top-1/2 h-auto min-h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                />
                <span className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[70px] bg-[linear-gradient(transparent,rgba(17,24,38,0.95))]" />
                {!playing[i] && (
                  <button
                    type="button"
                    onClick={() => play(i)}
                    aria-label="Reproducir testimonio"
                    className="absolute inset-0 z-[2] flex cursor-pointer items-center justify-center bg-black/[0.18] transition-colors hover:bg-black/[0.08]"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B1A]/90 text-xl shadow-[0_0_0_10px_rgba(255,107,26,0.12)] transition-all hover:scale-105 hover:bg-[#FF8840]">
                      ▶
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="absolute left-2.5 top-[38%] z-10 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111826]/80 text-base text-white/70 backdrop-blur-md transition-colors hover:border-[#FF6B1A]/35 hover:bg-[#FF6B1A]/20 hover:text-white"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente"
          className="absolute right-2.5 top-[38%] z-10 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111826]/80 text-base text-white/70 backdrop-blur-md transition-colors hover:border-[#FF6B1A]/35 hover:bg-[#FF6B1A]/20 hover:text-white"
        >
          ›
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`h-[5px] w-[5px] rounded-full transition-all ${
              i === current ? "scale-[1.4] bg-[#FF8840]" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
