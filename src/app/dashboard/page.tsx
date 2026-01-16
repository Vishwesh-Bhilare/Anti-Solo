import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardStats from '@/components/dashboard/DashboardStats'
import SkillCard from '@/components/dashboard/SkillCard'
import TeamCard from '@/components/dashboard/TeamCard'
import HackathonCard from '@/components/dashboard/HackathonCard'

export default async function DashboardPage() {
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

  // Mock data for now - replace with real queries
  const mockSkills = [
    { name: 'React', confidence: 85, category: 'frontend' },
    { name: 'TypeScript', confidence: 78, category: 'frontend' },
    { name: 'Node.js', confidence: 72, category: 'backend' },
    { name: 'Python', confidence: 65, category: 'backend' },
    { name: 'AWS', confidence: 58, category: 'devops' },
  ]

  const mockTeams = [
    { id: '1', name: 'Quantum Coders', members: 3, capacity: 5, skills: ['React', 'Node.js', 'AI/ML'] },
    { id: '2', name: 'Blockchain Builders', members: 4, capacity: 6, skills: ['Solidity', 'Web3', 'React'] },
    { id: '3', name: 'AI Innovators', members: 2, capacity: 4, skills: ['Python', 'TensorFlow', 'Data Science'] },
  ]

  const mockHackathons = [
    { id: '1', name: 'Global AI Hackathon', date: 'Mar 15-17, 2024', participants: 218 },
    { id: '2', name: 'Web3 Innovation Challenge', date: 'Mar 22-24, 2024', participants: 135 },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {profile?.name?.split(' ')[0] || 'Developer'}! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          {profile?.social_credit 
            ? `Your social credit: ${profile.social_credit} - Keep building your reputation!`
            : 'Complete your profile to get better team matches'
          }
        </p>
      </div>

      {/* Stats */}
      <DashboardStats 
        socialCredit={profile?.social_credit || 600}
        reliabilityScore={profile?.reliability_score || 80}
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-8">
          {/* Skills section */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Skills</h2>
              <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                Update Skills
              </button>
            </div>
            <div className="space-y-4">
              {mockSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <button className="w-full py-3 text-center text-primary-600 font-medium rounded-lg border-2 border-dashed border-primary-200 hover:border-primary-300 transition-colors">
                + Connect GitHub for auto-skill detection
              </button>
            </div>
          </div>

          {/* Recommended teams */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recommended Teams</h2>
              <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {mockTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Upcoming hackathons */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Hackathons</h2>
              <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                Browse all
              </button>
            </div>
            <div className="space-y-4">
              {mockHackathons.map((hackathon) => (
                <HackathonCard key={hackathon.id} hackathon={hackathon} />
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary-300 hover:bg-primary-50 transition-colors text-center">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-medium text-gray-900">Find Team</div>
                <div className="text-sm text-gray-500">Match with developers</div>
              </button>
              <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary-300 hover:bg-primary-50 transition-colors text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-medium text-gray-900">Join Event</div>
                <div className="text-sm text-gray-500">Browse hackathons</div>
              </button>
              <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary-300 hover:bg-primary-50 transition-colors text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium text-gray-900">Update Profile</div>
                <div className="text-sm text-gray-500">Boost your matches</div>
              </button>
              <button className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary-300 hover:bg-primary-50 transition-colors text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-medium text-gray-900">Invite Friends</div>
                <div className="text-sm text-gray-500">Earn social credit</div>
              </button>
            </div>
          </div>

          {/* Profile completion */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Profile Completion</h2>
              <span className="text-lg font-bold text-primary-600">60%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200 mb-2">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600" />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Complete your profile to get 25% better team matches
            </p>
            <div className="space-y-3">
              {[
                { task: 'Add your college', completed: true },
                { task: 'Connect GitHub account', completed: false },
                { task: 'Add 3+ skills', completed: false },
                { task: 'Upload resume', completed: false },
                { task: 'Set availability', completed: false },
              ].map((item) => (
                <div key={item.task} className="flex items-center">
                  <div className={`h-4 w-4 rounded-full border mr-3 ${item.completed ? 'bg-primary-500 border-primary-500' : 'border-gray-300'}`}>
                    {item.completed && (
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    )}
                  </div>
                  <span className={`text-sm ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-primary-50 text-primary-700 font-medium rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors">
              Complete Profile Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}