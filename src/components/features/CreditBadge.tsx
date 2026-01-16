'use client'

interface CreditBadgeProps {
  score: number
}

export function CreditBadge({ score }: CreditBadgeProps) {
  const getTier = (score: number) => {
    if (score >= 900) return { 
      name: 'PLATINUM', 
      color: 'from-cyan-500 to-blue-600',
      icon: '💎'
    }
    if (score >= 800) return { 
      name: 'GOLD', 
      color: 'from-yellow-500 to-orange-500',
      icon: '🏆'
    }
    if (score >= 700) return { 
      name: 'SILVER', 
      color: 'from-gray-300 to-gray-400',
      icon: '🥈'
    }
    if (score >= 600) return { 
      name: 'BRONZE', 
      color: 'from-yellow-700 to-yellow-800',
      icon: '🥉'
    }
    return { 
      name: 'PROVISIONAL', 
      color: 'from-gray-400 to-gray-500',
      icon: '⚡'
    }
  }

  const tier = getTier(score)
  const progress = (score % 100) / 100

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <div className={`relative h-16 w-16 rounded-full bg-gradient-to-br ${tier.color} p-0.5 shadow-lg`}>
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <span className="text-2xl font-bold text-gray-900">{score}</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-md flex items-center gap-1">
            <span>{tier.icon}</span>
            <span>{tier.name}</span>
          </div>
        </div>
      </div>
      <div className="w-24">
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 text-center mt-1">
          {score % 100}/100 to next tier
        </div>
      </div>
    </div>
  )
}