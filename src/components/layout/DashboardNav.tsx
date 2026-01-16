'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Trophy, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Bell,
  Search
} from 'lucide-react'

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Teams', href: '/dashboard/teams', icon: Users },
  { name: 'Hackathons', href: '/dashboard/hackathons', icon: Trophy },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardNav() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside className={`hidden lg:flex flex-col border-r border-gray-200 bg-white transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md"
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4 text-gray-600" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        )}
      </button>

      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-gray-900">
              ANTI<span className="text-primary-600">-SOLO</span>
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 border border-primary-100'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Quick stats */}
        {!collapsed && (
          <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200">
            <div className="text-sm font-medium text-primary-900 mb-2">
              Your Progress
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-primary-700 mb-1">
                  <span>Profile Complete</span>
                  <span>60%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-primary-200">
                  <div className="h-full w-3/5 rounded-full bg-primary-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-primary-700 mb-1">
                  <span>Social Credit</span>
                  <span>650/1000</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-primary-200">
                  <div className="h-full w-2/3 rounded-full bg-primary-500" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </aside>
  )
}