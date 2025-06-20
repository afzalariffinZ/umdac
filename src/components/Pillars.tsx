'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon, RocketLaunchIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const pillars = [
  {
    name: 'Data Debut',
    description: 'Start your data journey with foundational knowledge in statistics, programming, and data visualization.',
    icon: CodeBracketIcon,
    hashtag: '#Decode',
    color: 'from-primary-400 to-primary-600',
  },
  {
    name: 'Data Dev',
    description: 'Build real-world projects and develop practical skills through hands-on workshops and collaborative challenges.',
    icon: RocketLaunchIcon,
    hashtag: '#Transform',
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Data@',
    description: 'Connect with industry professionals, attend tech talks, and explore career opportunities in data analytics.',
    icon: BuildingOfficeIcon,
    hashtag: '#Excel',
    color: 'from-primary-600 to-primary-800',
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Our Pillars
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Three interconnected pathways designed to guide your journey from data novice to analytics professional.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r rounded-lg shadow-lg transform 
                  group-hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                  style={{ 
                    background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                />
                <div className="relative bg-white rounded-lg shadow-sm px-6 py-8 hover:bg-opacity-95 transition-colors duration-300">
                  <div className={`inline-flex items-center justify-center p-2 bg-gradient-to-r ${pillar.color} rounded-lg`}>
                    <pillar.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-secondary-900">
                    {pillar.name}
                  </h3>
                  <p className="mt-2 text-secondary-600">
                    {pillar.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {pillar.hashtag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 