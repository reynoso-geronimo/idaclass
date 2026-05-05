export function Orb({ className = "", style }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[80px] ${className}`}
      style={style}
    />
  );
}

export function GridTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent)",
        maskImage:
          "radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent)",
      }}
    />
  );
}

export function HLine({ top }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 right-0 h-px"
      style={{
        top,
        background:
          "linear-gradient(90deg, transparent, rgba(0,170,221,0.1), transparent)",
      }}
    />
  );
}
