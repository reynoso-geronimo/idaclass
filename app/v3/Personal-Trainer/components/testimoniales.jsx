"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimoniales() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Lucía Kaus",
      date: "12/06/2025",
      rating: 5,
      text: "Una gran experiencia, desde el contenido hasta la plataforma.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Brian Vázquez",
      date: "12/06/2025",
      rating: 5,
      text: "Herramientas que me permitieron iniciar mi proyecto propio y crear una comunidad en redes sociales.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Diana Tosorini",
      date: "12/06/2025",
      rating: 5,
      text: "Gracias por capacitarme con compromiso como instructora.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Osvaldo Contreras",
      date: "12/06/2025",
      rating: 5,
      text: "Recomiendo este prestigioso instituto para adquirir conocimientos sobre preparación física y salud.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / getItemsPerSlide()))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / getItemsPerSlide())) %
        Math.ceil(testimonials.length / getItemsPerSlide()),
    )
  }

  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4 // lg screens
      if (window.innerWidth >= 768) return 2 // md screens
      return 1 // sm screens
    }
    return 4 // default for SSR
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="px-6 py-16 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 space-y-6 text-left">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            ¿Qué dicen <span className="text-cyan-400">nuestros<br/>alumnos?</span>
          </h2>
          <p className="max-w-3xl text-lg lg:text-xl">
            Experiencias reales, resultados reales, de quienes ya completaron el curso y comenzaron su carrera.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          {/* Desktop View - 4 cards */}
          <div className="hidden gap-8 lg:grid lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="transition-shadow duration-300 bg-white border-0 shadow-md hover:shadow-lg rounded-3xl"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="flex-shrink-0 object-cover w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex justify-start space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-base font-medium leading-relaxed text-gray-700">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile/Tablet View - Carousel */}
          <div className="lg:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-shrink-0 w-full px-2">
                    <Card className="transition-shadow duration-300 bg-white border-0 shadow-md hover:shadow-lg rounded-3xl">
                      <CardContent className="p-8 space-y-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="flex-shrink-0 object-cover w-16 h-16 rounded-full"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">{testimonial.date}</p>
                          </div>
                        </div>
                        <div className="flex justify-start space-x-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-base font-medium leading-relaxed text-gray-700">"{testimonial.text}"</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-12 space-x-6">
              <Button variant="ghost" size="sm" onClick={prevSlide} className="p-3 rounded-full hover:bg-gray-100">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-3">
                {Array.from({ length: testimonials.length }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      i === currentSlide ? "bg-cyan-400 scale-110" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <Button variant="ghost" size="sm" onClick={nextSlide} className="p-3 rounded-full hover:bg-gray-100">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-medium leading-relaxed text-gray-800 lg:text-3xl">
            Más de <span className="font-bold text-cyan-400">50.000</span> certificados entregados.
            <br />
            El próximo puede ser el tuyo.
          </p>
        </div>
      </div>
    </div>
  )
}
