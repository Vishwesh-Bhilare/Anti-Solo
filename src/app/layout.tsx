import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ANTI-SOLO | AI-Powered Hackathon Team Formation',
  description: 'No one gets left behind. AI-powered, merit-based hackathon team formation that eliminates solo participation and builds diverse, high-performing teams.',
  keywords: ['hackathon', 'team formation', 'AI matching', 'developer community', 'anti-solo'],
  authors: [{ name: 'ANTI-SOLO Team' }],
  openGraph: {
    type: 'website',
    url: 'https://anti-solo.com',
    title: 'ANTI-SOLO | AI-Powered Hackathon Team Formation',
    description: 'No one gets left behind. AI-powered hackathon team formation.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANTI-SOLO',
    description: 'AI-Powered Hackathon Team Formation',
    images: ['/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  )
}