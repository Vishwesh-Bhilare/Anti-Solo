'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link as LinkIcon, Sparkles, Users } from 'lucide-react'
import { mockData } from '@/lib/mockData'

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const steps = mockData.landingPage.howItWorks

  const icons = [LinkIcon, Sparkles, Users]

  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">How ANTI-SOLO Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From solo developer to team player in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={step.step}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className={`card h-full pt-10 transition-all duration-300 ${
                  hoveredStep === index ? 'border-primary-300 shadow-elevated' : ''
                }`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl ${
                      hoveredStep === index 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'bg-gray-100 text-gray-600'
                    } transition-colors duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {step.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-sm font-medium text-primary-600 text-center">
                      {step.metrics}
                    </div>
                  </div>

                  {/* Progress indicator */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 z-10">
                      <div className="h-0.5 w-8 bg-gradient-to-r from-primary-300 to-primary-100" />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline connector for mobile */}
        <div className="md:hidden mt-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 via-primary-200 to-primary-100 transform -translate-y-1/2" />
          <div className="flex justify-between relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm"
              >
                {step.step}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to find your perfect team?
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Journey →
          </button>
        </div>
      </div>
    </section>
  )
}