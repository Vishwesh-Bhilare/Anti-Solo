// This file already exists but let's ensure it's complete
export interface Stat {
  value: string
  label: string
  change: string
}

export interface HowItWorksStep {
  step: number
  title: string
  description: string
  icon: string
  metrics: string
}

export interface Hackathon {
  id: string
  name: string
  college: string
  date: string
  teams: number
  participants: number
  openSlots: number
  tags: string[]
}

export interface Testimonial {
  name: string
  college: string
  role: string
  text: string
  avatar: string
  socialCredit: number
}

export interface Skill {
  name: string
  confidence: number
  experienceMonths: number
  category: 'frontend' | 'backend' | 'devops' | 'ai-ml'
  evidence: string[]
}

export interface User {
  id: string
  name: string
  college: string
  githubUsername?: string
  leetcodeUsername?: string
  derivedSkills: Skill[]
  socialCredit: number
  reliabilityScore: number
}

export const mockData = {
  landingPage: {
    hero: {
      title: "No one's left behind",
      subtitle: "AI-powered, merit-based hackathon team formation",
      stats: [
        { value: "2,847", label: "Developers Matched", change: "+42%" },
        { value: "94%", label: "Solo Inclusion Rate", change: "+52%" },
        { value: "4.7★", label: "User Satisfaction", change: "500+ reviews" },
        { value: "63%", label: "Cross-College Teams", change: "+48%" },
      ],
      cta: {
        primary: "Join Free",
        secondary: "Watch Demo",
      },
    },
    howItWorks: [
      {
        step: 1,
        title: "Connect Your Profiles",
        description: "Link GitHub, LeetCode, and upload resume",
        icon: "🔗",
        metrics: "Auto-skill extraction in 45s",
      },
      {
        step: 2,
        title: "Get AI-Enhanced Profile",
        description: "Gemini AI transforms raw data into compelling skill profile",
        icon: "✨",
        metrics: "92% accuracy rate",
      },
      {
        step: 3,
        title: "Find Perfect Teams",
        description: "Intelligent matching based on skill gaps and compatibility",
        icon: "🤝",
        metrics: "87% match satisfaction",
      },
    ],
    featuredHackathons: [
      {
        id: "hack-001",
        name: "Global AI Hackathon",
        college: "Stanford x MIT",
        date: "Mar 15-17, 2024",
        teams: 42,
        participants: 218,
        openSlots: 56,
        tags: ["AI/ML", "Prize: $50K", "Remote"],
      },
      {
        id: "hack-002",
        name: "Web3 Innovation Challenge",
        college: "Cross-College",
        date: "Mar 22-24, 2024",
        teams: 28,
        participants: 135,
        openSlots: 32,
        tags: ["Blockchain", "Prize: 5 ETH", "Hybrid"],
      },
      {
        id: "hack-003",
        name: "Climate Tech Hack",
        college: "ETH Zurich x Cambridge",
        date: "Apr 5-7, 2024",
        teams: 35,
        participants: 180,
        openSlots: 45,
        tags: ["Sustainability", "Prize: €30K", "In-person"],
      },
    ],
    testimonials: [
      {
        name: "Alex Chen",
        college: "IIT Bombay",
        role: "Solo Participant → Team Lead",
        text: "As an introvert from a small college, I never found teams. ANTI-SOLO matched me with the perfect team – we won 2nd place!",
        avatar: "👨‍💻",
        socialCredit: 845,
      },
      {
        name: "Sarah Johnson",
        college: "University of Toronto",
        role: "Hackathon Organizer",
        text: "Participation increased by 40% after using ANTI-SOLO. The social credit system eliminated ghosting completely.",
        avatar: "👩‍🏫",
        socialCredit: 920,
      },
      {
        name: "Marcus Rodriguez",
        college: "Stanford University",
        role: "Backend Developer",
        text: "Found a team with perfect skill complementarity. Our frontend/backend synergy was incredible thanks to the AI matching.",
        avatar: "👨‍💻",
        socialCredit: 780,
      },
    ],
  },
}