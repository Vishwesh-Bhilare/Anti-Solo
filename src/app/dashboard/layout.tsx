import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardNav from '@/components/layout/DashboardNav'
import DashboardHeader from '@/components/layout/DashboardHeader'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={user} profile={profile} />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}