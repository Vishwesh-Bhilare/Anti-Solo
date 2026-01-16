'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, User, Bell, LogOut } from 'lucide-react'
import { CreditBadge } from '@/components/features/CreditBadge'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    checkUser()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    router.push('/')
    router.refresh()
  }

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'For Organizers', href: '#organizers' },
    { name: 'Pricing', href: '#pricing' },
  ]

  if (loading) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                ANTI<span className="text-primary-600">-SOLO</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              {user ? (
                <>
                  <Link href="/dashboard" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" fullWidth>Dashboard</Button>
                  </Link>
                  <Button variant="ghost" fullWidth onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" fullWidth>Sign In</Button>
                  </Link>
                  <Link href="/signup" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button fullWidth>Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}