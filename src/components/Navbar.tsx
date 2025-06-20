'use client'

import { useState } from 'react'
import Link from 'next/link'
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-secondary-900/95 to-primary-900/95 backdrop-blur-md border-b border-primary-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 mr-3 relative overflow-hidden"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </motion.div>
              <span className="text-xl font-bold text-white font-mono group-hover:text-primary-300 transition-colors duration-300">
                <span className="text-primary-300">[</span>UMDAC<span className="text-primary-300">]</span>
              </span>
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