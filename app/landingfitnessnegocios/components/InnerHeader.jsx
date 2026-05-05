"use client";

import Logo from "./Logo";

export default function InnerHeader({ onBack }) {
  return (
    <div className="sticky top-0 z-50 flex items-center gap-3.5 border-b border-white/[0.04] bg-[#07090E]/95 px-5 py-3 backdrop-blur-xl">
      <button
        type="button"
        onClick={onBack}
        className="flex flex-shrink-0 items-center gap-1.5 rounded-md border border-white/[0.07] px-3 py-1.5 font-barlow text-[11px] font-semibold uppercase tracking-[0.1em] text-[#B5C4D6] transition-colors hover:border-white/10 hover:bg-white/5 hover:text-white/85"
      >
        ← Volver
      </button>
      <Logo size="header" />
    </div>
  );
}
