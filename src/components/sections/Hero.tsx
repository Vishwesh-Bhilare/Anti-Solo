'use client'

import { useState, useEffect } from 'react'
import { Play, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatCard } from '@/components/ui/StatCard'
import { mockData } from '@/lib/mockData'

export default function Hero() {
  const [stats, setStats] = useState(mockData.landingPage.hero.stats)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.label.includes('Matched') 
            ? `${(parseInt(stat.value.replace(',', '')) + Math.floor(Math.random() * 10)).toLocaleString()}`
            : stat.value
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 via-white to-white" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8">
            <CheckCircle className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              Trusted by 500+ hackathon participants
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6">
            <span className="block text-gray-900">No one's left behind in</span>
            <span className="text-gradient">hackathon team formation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            AI-powered, merit-based matching that eliminates solo participation and 
            builds diverse, high-performing teams across colleges.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                change={stat.change}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Join developers from top institutions
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {['Stanford', 'MIT', 'IIT Bombay', 'University of Toronto', 'ETH Zurich'].map((uni) => (
                <div key={uni} className="text-lg font-semibold text-gray-400">
                  {uni}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}