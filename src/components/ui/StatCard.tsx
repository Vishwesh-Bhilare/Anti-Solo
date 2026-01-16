'use client'

import { useEffect, useState } from 'react'

interface StatCardProps {
  value: string
  label: string
  change: string
  delay?: number
}

export function StatCard({ value, label, change, delay = 0 }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  const isPositive = change.startsWith('+')

  return (
    <div 
      className={`stat-card transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-baseline gap-2">
        <div className="text-2xl md:text-3xl font-bold text-gray-900">{value}</div>
        <div className={`text-sm font-semibold px-2 py-0.5 rounded-full ${
          isPositive 
            ? 'text-green-700 bg-green-50' 
            : 'text-red-700 bg-red-50'
        }`}>
          {change}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600">{label}</div>
      <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${
            isPositive ? 'bg-green-500' : 'bg-red-500'
          }`}
          style={{ 
            width: isVisible ? '100%' : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  )
}