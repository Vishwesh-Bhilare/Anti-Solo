'use client'

import { CreditBadge } from '@/components/features/CreditBadge'
import { Button } from '@/components/ui/Button'
import { Search, Bell, HelpCircle } from 'lucide-react'

interface DashboardHeaderProps {
  user: any
  profile: any
}

export default function DashboardHeader({ user, profile }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Search */}
        <div className="flex flex-1 items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search teams, hackathons, or members..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button className="p-2 text-gray-600 hover:text-gray-900">
            <HelpCircle className="h-5 w-5" />
          </button>

          <div className="hidden lg:block">
            <CreditBadge score={profile?.social_credit || 600} />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right lg:block">
              <div className="text-sm font-medium text-gray-900">
                {profile?.name || user.email?.split('@')[0]}
              </div>
              <div className="text-xs text-gray-500">
                {profile?.college || 'Add your college'}
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-semibold">
              {profile?.name?.charAt(0) || user.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}