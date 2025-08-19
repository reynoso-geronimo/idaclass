import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Certificacion() {
  const benefits = [
    "Certificación IdaClass con autenticación QR.",
    "Certificación de extensión universitaria.",
    "Certificados adicionales por 4 formaciones extra (SkillClass).",
  ];

  const otherBenefits = [
    "Acceso a webinars con expertos.",
    "Material interactivo y autoevaluaciones.",
    "Acceso a comunidad exclusiva.",
  ];

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="p-8 bg-gradient-to-br from-[#22B0E633] to-[#22B0E633]/20 rounded-3xl lg:p-12">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column - Certificate */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative max-lg:h-24 max-lg:w-full">
                <Image src="/v3/certificado.png" alt="Certificacion" width={600} height={400} className="max-lg:absolute left-1/2 max-lg:-translate-x-1/2 -top-40 max-lg:max-w-96"/>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                  Conviértete en un <span className="text-cyan-500">profesional del fitness</span> con{" "}
                  <span className="text-cyan-500">doble certificación y aval internacional</span>
                </h2>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#22B0E6] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg font-medium text-gray-800">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Other Benefits */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#22B0E6] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="mb-3 text-lg font-medium text-gray-800">Otros Beneficios:</p>
                    <ul className="ml-4 space-y-2">
                      {otherBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#22B0E6]"></div>
                          <p className="text-gray-700">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg text-black font-semibold transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-[#22B0E6] to-[#3A5DAE] hover:shadow-2xl hover:scale-105"
                >
                  Comprar curso
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
