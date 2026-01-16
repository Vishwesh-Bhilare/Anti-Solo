'use client'

import { useState } from 'react'
import { Calendar, Users, Tag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { mockData } from '@/lib/mockData'

export default function FeaturedHackathons() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const hackathons = mockData.landingPage.featuredHackathons

  const getStatusColor = (openSlots: number) => {
    if (openSlots > 30) return 'bg-green-100 text-green-800'
    if (openSlots > 15) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  return (
    <section id="hackathons" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Featured Hackathons</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join upcoming hackathons with teams ready to welcome you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className={`card transition-all duration-300 ${
                hoveredCard === hackathon.id ? 'border-primary-300 shadow-elevated transform -translate-y-1' : ''
              }`}
              onMouseEnter={() => setHoveredCard(hackathon.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hackathon header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {hackathon.name}
                  </h3>
                  <p className="text-gray-600">{hackathon.college}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(hackathon.openSlots)}`}>
                  {hackathon.openSlots} slots
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{hackathon.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{hackathon.participants} participants • {hackathon.teams} teams</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  Match score: <span className="font-semibold text-gray-900">92%</span>
                </div>
                <Button variant="primary" size="sm" className="group">
                  View Teams
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <Button variant="secondary" className="px-8">
            View All Hackathons
          </Button>
        </div>
      </div>
    </section>
  )
}