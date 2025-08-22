"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: "Juan Ariel Tejera",
      role: "Magister en Alto Rendimiento Deportivo",
      image: "/v3/docentes/Ariel Tejera.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      id: 2,
      name: "Fernanda Garat",
      role: "Lic. en Nutrición",
      image: "/v3/docentes/Fernanda Garat.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      id: 3,
      name: "Florencia Scarmano",
      role: "Profesora Nacional de Educación Física",
      image: "/v3/docentes/Florencia Scarmato.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      id: 4,
      name: "Juan Manuel Renda",
      role: "Lic. en Kinesiología y Fisiatría Magíster en Educación Física",
      image: "/v3/docentes/Juan Manuel Renda.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      id: 5,
      name: "Marcelo Ducca",
      role: "Lic. en Educación Física",
      image: "/v3/docentes/Marcelo Ducca.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    {
      id: 6,
      name: "Pablo Pascualini",
      role: "Lic. en Educación Física",
      image: "/v3/docentes/Pablo Pascualini.jpg",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Nuestros <span className="text-cyan-400">Trainers Educativos</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed lg:text-xl">
            Conoce a los referentes del fitness que no solo enseñan, sino que inspiran. Cada uno de nuestros docentes
            combina experiencia práctica con formación académica para que aprendas de los mejores.
          </p>
        </div>

        <div className="relative mb-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {trainers.map((trainer) => (
                <CarouselItem
                  key={trainer.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/1 md:basis-1/2 lg:basis-1/4"
                >
                  <Card className="overflow-hidden transition-shadow duration-300 rounded-3xl hover:shadow-xl">
                    <CardContent className="relative p-0 border-0">
                      <Image
                        src={trainer.image || "/placeholder.svg"}
                        alt={trainer.name}
                        width={250}
                        height={250}
                        className="object-cover w-full h-auto transition-all duration-300 grayscale hover:grayscale-0"
                      />
                    </CardContent>
                    <div className="p-6 space-y-1 text-center">
                      <h3 className="text-xl font-bold text-cyan-400">{trainer.name}</h3>
                      <p className="text-sm text-gray-400">{trainer.role}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-gray-800/80 border-gray-700 hover:bg-gray-700 text-gray-400 hover:text-white" />
            <CarouselNext className="right-4 bg-gray-800/80 border-gray-700 hover:bg-gray-700 text-gray-400 hover:text-white" />
          </Carousel>
        </div>

        {/* Bottom Testimonial */}
        <div className="flex justify-center mt-16">
          <Card className="max-w-2xl p-8 text-center bg-white shadow-lg rounded-3xl">
            <CardContent className="p-0">
              <p className="text-lg font-medium leading-relaxed text-gray-800">
                &quot;Lo que más me gustó fue aprender de docentes que trabajan todos los días en gimnasios y con
                atletas reales.&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
