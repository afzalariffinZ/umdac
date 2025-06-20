'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'About', href: '#about', code: '01' },
  { name: 'Pillars', href: '#pillars', code: '02' },
  { name: 'Events', href: '#events', code: '03' },
  { name: 'Team', href: '#team', code: '04' },
  { name: 'Resources', href: '#resources', code: '05' },
  { name: 'Contact', href: '#contact', code: '06' },
]

// Fallback Logo Component
const UMDACLogo = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>
    
    {/* Outer hexagon */}
    <path
      d="M40 8L64 22V54L40 68L16 54V22L40 8Z"
      stroke="url(#logoGradient)"
      strokeWidth="2"
      fill="none"
    />
    
    {/* Inner data visualization elements */}
    <circle cx="40" cy="40" r="3" fill="#8B5CF6" />
    <circle cx="28" cy="32" r="2" fill="#A855F7" />
    <circle cx="52" cy="32" r="2" fill="#A855F7" />
    <circle cx="28" cy="48" r="2" fill="#A855F7" />
    <circle cx="52" cy="48" r="2" fill="#A855F7" />
    
    {/* Connecting lines */}
    <line x1="40" y1="40" x2="28" y2="32" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
    <line x1="40" y1="40" x2="52" y2="32" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
    <line x1="40" y1="40" x2="28" y2="48" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
    <line x1="40" y1="40" x2="52" y2="48" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
    
    {/* Text */}
    <text x="40" y="62" textAnchor="middle" className="fill-primary-400 text-xs font-mono">UMDAC</text>
  </svg>
)

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-secondary-900/95 to-primary-900/95 backdrop-blur-md border-b border-primary-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {!imageError ? (
                  <Image
                    src="https://cdn.prod.website-files.com/66f8f154e9e4ff2af1e8e3f5/66f8faf031bbec4cdf3e713a_Copy%20of%20Transparent%20Background-p-500.png"
                    alt="UMDAC Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <UMDACLogo className="w-20 h-20" />
                )}
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-mono text-primary-100 hover:text-white transition-colors duration-300"
                >
                  <span className="relative z-10">
                    <span className="text-primary-400 text-xs">{item.code}.</span>
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-500/20 rounded-none opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              type="button"
              className="text-primary-300 hover:text-white p-2 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <motion.div
                  animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-gradient-to-b from-secondary-900/98 to-primary-900/98 backdrop-blur-md border-b border-primary-500/30">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="group block px-3 py-2 text-base font-mono text-primary-100 hover:text-white hover:bg-primary-600/20 rounded-none transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary-400 text-xs mr-2">{item.code}.</span>
                {item.name}
                <div className="w-full h-px bg-gradient-to-r from-primary-600/0 via-primary-500/50 to-primary-600/0 mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  )
} 