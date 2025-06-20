'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Fallback Logo Component
const UMDACLogo = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>
    
    {/* Outer hexagon */}
    <path
      d="M40 8L64 22V54L40 68L16 54V22L40 8Z"
      stroke="url(#footerLogoGradient)"
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

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [imageError, setImageError] = useState(false)

  return (
    <footer className="bg-primary-950 border-t border-primary-700/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
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
            </Link>
            <p className="mt-4 text-sm text-primary-200 max-w-md font-mono">
              Empowering students with data analytics skills and fostering<br/>
              a community of data enthusiasts at University Malaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
              QUICK_LINKS[]
            </h3>
            <ul className="mt-4 space-y-4">
              {['About', 'Events', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-base text-primary-200 hover:text-primary-300 transition-colors duration-300 font-mono"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
              LEGAL_DOCS[]
            </h3>
            <ul className="mt-4 space-y-4">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-base text-primary-200 hover:text-primary-300 transition-colors duration-300 font-mono"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-primary-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-primary-300 font-mono">
              © {currentYear} UMDAC. All rights reserved.
            </p>
            <p className="mt-4 md:mt-0 text-sm text-primary-400 font-mono">
              console.log(&ldquo;Made with ❤️ by UMDAC Tech Team&rdquo;);
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 