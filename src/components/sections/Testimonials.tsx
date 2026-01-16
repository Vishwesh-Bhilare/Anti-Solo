'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { CreditBadge } from '@/components/features/CreditBadge'
import { mockData } from '@/lib/mockData'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = mockData.landingPage.testimonials

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Trusted by Developers & Organizers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how ANTI-SOLO is transforming hackathon experiences worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="card relative overflow-hidden">
            <Quote className="absolute -top-4 -left-4 h-24 w-24 text-primary-100 opacity-50" />
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>

            {/* Testimonial content */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar and badge */}
              <div className="flex flex-col items-center gap-4">
                <div className="text-6xl">{testimonials[currentIndex].avatar}</div>
                <CreditBadge score={testimonials[currentIndex].socialCredit} />
              </div>

              {/* Text content */}
              <div className="flex-1">
                <Quote className="h-8 w-8 text-primary-300 mb-4" />
                <p className="text-xl italic text-gray-700 mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].college}
                  </div>
                  <div className="text-sm text-primary-600 font-medium mt-1">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-primary-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">94%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">40%</div>
              <div className="text-sm text-gray-600">More Participation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}