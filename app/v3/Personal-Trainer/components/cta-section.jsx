import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="px-6 py-20 text-center bg-gradient-to-br from-[#B1C2E8] to-[#22B0E6]">
      <div className="mx-auto space-y-8">
        {/* Main Heading */}
        <h2 className="font-bold leading-tight text-black md:text-5xl lg:text-6xl">
          Miles ya dieron el primer paso, <span className="text-[#3A5DAE]">ahora es tu turno</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto text-lg leading-relaxed text-black md:text-xl lg:text-2xl">
          Con doble certificación, aval internacional, clases en vivo y salida laboral asegurada.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="px-10 py-6 text-xl font-semibold text-black transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105"
          asChild
        >
        <Link href="#form" >
          ¡Inscribirme ahora!
          <ArrowRight className="w-6 h-6 ml-3" />
        </Link>
        </Button>
      </div>
    </div>
  );
}
