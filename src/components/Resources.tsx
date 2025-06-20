'use client'

import { motion } from 'framer-motion'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

const workshops = [
  {
    title: 'DSSP 2: Data Visualization with Python',
    description: 'Learn to create compelling visualizations using matplotlib and seaborn.',
    duration: '2h 15m',
    level: 'Intermediate',
  },
  {
    title: 'DSSP 3: Machine Learning Fundamentals',
    description: 'Introduction to supervised and unsupervised learning algorithms.',
    duration: '2h 45m',
    level: 'Advanced',
  },
  {
    title: 'DSSP 4: Deep Learning with TensorFlow',
    description: 'Build and train neural networks for various applications.',
    duration: '3h',
    level: 'Advanced',
  },
]

const collaborators = [
  { name: 'TechCrunch', logo: '/placeholder-techcrunch.svg' },
  { name: 'Analytics Insight', logo: '/placeholder-analytics.svg' },
  { name: 'Data Science Malaysia', logo: '/placeholder-dsm.svg' },
  { name: 'AI Time Journal', logo: '/placeholder-aitime.svg' },
]

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Learning Resources
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Access our recorded workshop sessions and explore learning materials to enhance your data analytics skills.
          </p>
        </motion.div>

        {/* Workshop Recordings */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8">
            Workshop Recordings
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <PlayCircleIcon className="h-8 w-8 text-primary-600 group-hover:text-primary-500 transition-colors duration-300" />
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {workshop.level}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                    {workshop.title}
                  </h4>
                  <p className="mt-2 text-sm text-secondary-600">
                    {workshop.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-secondary-500">
                    <span>{workshop.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media Collaborators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8">
            Media Collaborators
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={collaborator.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center p-8 bg-secondary-50 rounded-lg"
              >
                <div className="text-center">
                  {/* Placeholder for logo */}
                  <div className="w-32 h-12 bg-gradient-to-r from-primary-400/30 to-primary-600/30 rounded" />
                  <p className="mt-4 text-sm font-medium text-secondary-600">
                    {collaborator.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 