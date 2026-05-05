const SIZES = {
  hero: { wm: "text-[70px]", acad: "text-[12px]", letter: "tracking-[0.3em]" },
  header: { wm: "text-[26px]", acad: "text-[8px]", letter: "tracking-[0.24em]" },
  thanks: { wm: "text-[46px]", acad: "text-[10px]", letter: "tracking-[0.3em]" },
};

export default function Logo({ size = "hero", className = "" }) {
  const s = SIZES[size] ?? SIZES.hero;
  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`font-barlow-c font-black ${s.wm} leading-none tracking-[-0.02em] flex items-baseline justify-center`}
      >
        <span className="text-[#1A4DB5]">Ida</span>
        <span className="text-[#00AADD]">Class</span>
      </div>
      <span
        className={`font-barlow font-light ${s.acad} ${s.letter} uppercase text-[rgb(137,182,241)] block text-left pl-[2px]`}
      >
        Academy
      </span>
    </div>
  );
}
