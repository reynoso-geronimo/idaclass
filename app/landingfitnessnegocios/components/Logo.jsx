import Image from "next/image";

const DIMENSIONS = {
  hero: { width: 320, height: 82, h: "h-20" },
  header: { width: 140, height: 36, h: "h-9" },
  thanks: { width: 224, height: 56, h: "h-14" },
};

export default function Logo({ size = "hero", className = "" }) {
  const d = DIMENSIONS[size] ?? DIMENSIONS.hero;
  const align = size === "header" ? "" : "mx-auto";
  return (
    <Image
      src="/assets/idaclass.logo.webp"
      alt="IdaClass Academy"
      width={d.width}
      height={d.height}
      priority
      quality={100}
      className={`${d.h} w-auto ${align} ${className}`}
    />
  );
}
