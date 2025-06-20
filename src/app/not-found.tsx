'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Data-themed 404 illustration */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-primary-100 rounded-lg transform rotate-12" />
            <div className="absolute inset-0 bg-primary-200 rounded-lg transform -rotate-6" />
            <div className="relative bg-primary-600 rounded-lg p-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-white font-mono">404</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-secondary-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
          >
            Return Home
          </Link>
        </motion.div>

        {/* Data-themed background pattern */}
        <div className="fixed inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern" style={{ backgroundSize: '30px 30px' }} />
        </div>
      </div>
    </div>
  )
} 