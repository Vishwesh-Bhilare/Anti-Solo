import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Product: ['How it Works', 'Features', 'Pricing', 'API'],
    Resources: ['Documentation', 'Blog', 'Guides', 'Support'],
    Company: ['About', 'Careers', 'Privacy', 'Terms'],
    Connect: ['Twitter', 'GitHub', 'LinkedIn', 'Discord'],
  }

  const socialIcons = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-white">
                ANTI<span className="text-primary-400">-SOLO</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              No one gets left behind. AI-powered, merit-based hackathon team formation 
              that eliminates solo participation and builds diverse, high-performing teams.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ANTI-SOLO. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary-900/30 to-primary-800/20 border border-primary-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Ready to transform hackathon participation?
              </h4>
              <p className="text-gray-300">
                Join 2,847+ developers who found their perfect team.
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}