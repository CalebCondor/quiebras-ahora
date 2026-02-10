"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "María González",
    role: "Empresaria, San Juan",
    content:
      "Gracias al Lcdo. Egozcue pude salvar mi casa y reorganizar mis deudas. El trato fue sumamente profesional y humano en un momento muy difícil.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Carlos Rodríguez",
    role: "Retirado, Bayamón",
    content:
      "Excelente 'track record'. Me explicaron todo el proceso de quiebra con claridad y hoy vivo con tranquilidad financiera. ¡Altamente recomendados!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Ana Martínez",
    role: "Profesional, Caguas",
    content:
      "La consulta inicial fue sin costo y muy honesta. Me dijeron que en mi caso no era necesaria la quiebra y me dieron otras alternativas. Ética intachable.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 rounded-full">
            Testimonios
          </div>
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] text-gray-900 mb-6">
            Lo que dicen nuestros{" "}
            <span className="text-primary italic">clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            La confianza de nuestros representados es nuestro mayor respaldo en
            el Tribunal de Quiebras.
          </p>
        </motion.div>

        {/* Testimonials Carousel / Grid */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.name}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full p-2"
                  >
                    <Card className="h-full bg-white border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl rounded-none relative overflow-hidden group">
                      {/* Decorative Gradient */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />

                      <CardContent className="p-10 flex flex-col h-full relative z-10">
                        {/* Quote Icon */}
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-8 group-hover:bg-primary transition-colors duration-500">
                          <Quote className="h-5 w-5 text-primary group-hover:text-white" />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-gray-700 leading-relaxed mb-8 italic text-lg grow">
                          &quot;{testimonial.content}&quot;
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-5 pt-6 border-t border-gray-100">
                          <div className="relative">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300 ring-2 ring-primary/10"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-500 font-medium">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Pagination Dots - Visible on mobile/tablet */}
            <CarouselDots className="lg:hidden mt-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
