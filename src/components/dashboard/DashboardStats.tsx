'use client'

import { TrendingUp, Users, Trophy, Target } from 'lucide-react'

interface DashboardStatsProps {
  socialCredit: number
  reliabilityScore: number
}

export default function DashboardStats({ socialCredit, reliabilityScore }: DashboardStatsProps) {
  const stats = [
    {
      title: 'Social Credit',
      value: socialCredit,
      change: '+42 this month',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Reliability Score',
      value: `${reliabilityScore}%`,
      change: 'Based on 5 events',
      icon: Target,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Teams Joined',
      value: '3',
      change: 'Active: 1 team',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Hackathons',
      value: '2',
      change: 'Next: in 2 weeks',
      icon: Trophy,
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.title} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}