import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import FeaturedHackathons from '@/components/sections/FeaturedHackathons'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedHackathons />
        <Testimonials />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}