'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Github, Mail, Lock, User, Building2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    githubUsername: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    
    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          college: formData.college,
          github_username: formData.githubUsername,
        },
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    // Create user profile in database
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: authData.user.id,
            name: formData.name,
            email: formData.email,
            college: formData.college,
            github_username: formData.githubUsername,
            social_credit: 600, // Starting credit
            created_at: new Date().toISOString(),
          },
        ])

      if (profileError) {
        console.error('Profile creation error:', profileError)
      }
    }

    // Redirect to profile setup
    router.push('/dashboard/profile/setup')
    setLoading(false)
  }

  const handleGithubSignup = async () => {
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) console.error(error)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">
              ANTI<span className="text-primary-600">-SOLO</span>
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Join the revolution
          </h2>
          <p className="mt-2 text-gray-600">
            Create your account and never hack alone again
          </p>
        </div>

        {/* GitHub OAuth */}
        <Button
          variant="secondary"
          fullWidth
          onClick={handleGithubSignup}
          className="group"
        >
          <Github className="mr-3 h-5 w-5" />
          Sign up with GitHub
          <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
          </div>
        </div>

        {/* Registration form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Alex Chen"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="developer@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                College/University
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="college"
                  name="college"
                  type="text"
                  required
                  value={formData.college}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Stanford University"
                />
              </div>
            </div>

            <div>
              <label htmlFor="githubUsername" className="block text-sm font-medium text-gray-700 mb-2">
                GitHub username (optional)
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  github.com/
                </div>
                <input
                  id="githubUsername"
                  name="githubUsername"
                  type="text"
                  value={formData.githubUsername}
                  onChange={handleChange}
                  className="pl-28 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                  minLength={8}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 8 characters
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{' '}
              <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button type="submit" fullWidth loading={loading}>
            Create account
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </div>
        </form>

        {/* Benefits */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Why join ANTI-SOLO?</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-sm text-gray-600">
              <div className="h-2 w-2 rounded-full bg-primary-500 mr-3" />
              AI-powered team matching
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <div className="h-2 w-2 rounded-full bg-primary-500 mr-3" />
              No more solo hacking
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <div className="h-2 w-2 rounded-full bg-primary-500 mr-3" />
              Build your social credit
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <div className="h-2 w-2 rounded-full bg-primary-500 mr-3" />
              Access to exclusive hackathons
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}