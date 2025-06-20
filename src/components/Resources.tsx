'use client'

import { motion } from 'framer-motion'
import { PlayCircleIcon, DocumentTextIcon, LinkIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

const workshops = [
  {
    title: 'DSSP 1: Python Fundamentals for Data Science',
    description: 'Master the basics of Python programming for data analysis and manipulation.',
    duration: '2h 30m',
    level: 'Beginner' as const,
    views: 1250,
    code: 'WS_001',
  },
  {
    title: 'DSSP 2: Data Visualization with Python',
    description: 'Learn to create compelling visualizations using matplotlib and seaborn.',
    duration: '2h 15m',
    level: 'Intermediate' as const,
    views: 980,
    code: 'WS_002',
  },
  {
    title: 'DSSP 3: Machine Learning Fundamentals',
    description: 'Introduction to supervised and unsupervised learning algorithms.',
    duration: '2h 45m',
    level: 'Advanced' as const,
    views: 750,
    code: 'WS_003',
  },
  {
    title: 'DSSP 4: Deep Learning with TensorFlow',
    description: 'Build and train neural networks for various applications.',
    duration: '3h',
    level: 'Advanced' as const,
    views: 650,
    code: 'WS_004',
  },
]

const learningResources = [
  {
    title: 'Data Analytics Roadmap 2024',
    description: 'Complete guide to becoming a data analyst in Malaysia',
    type: 'PDF Guide',
    downloads: 2340,
  },
  {
    title: 'Python Cheat Sheet Collection',
    description: 'Essential Python commands and functions for data science',
    type: 'Cheat Sheet',
    downloads: 1890,
  },
  {
    title: 'SQL for Data Analysis',
    description: 'Comprehensive SQL tutorial with real-world examples',
    type: 'Interactive Guide',
    downloads: 1650,
  },
  {
    title: 'Statistics Fundamentals',
    description: 'Statistical concepts every data analyst should know',
    type: 'PDF Guide',
    downloads: 1420,
  },
]

const collaborators = [
  { 
    name: 'TechCrunch Malaysia', 
    type: 'Tech Media',
    partnership: 'Content Partner',
    since: '2023'
  },
  { 
    name: 'Analytics Insight', 
    type: 'Industry Publication',
    partnership: 'Featured Articles',
    since: '2023'
  },
  { 
    name: 'Data Science Malaysia', 
    type: 'Community Partner',
    partnership: 'Event Collaboration',
    since: '2022'
  },
  { 
    name: 'AI Time Journal', 
    type: 'Academic Publication',
    partnership: 'Research Features',
    since: '2024'
  },
]

const levelColors = {
  Beginner: 'bg-green-500',
  Intermediate: 'bg-yellow-500',
  Advanced: 'bg-red-500',
}

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-24 h-24 border-2 border-primary-400 rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-900/50 rounded-full border border-primary-700 mb-6">
            <DocumentTextIcon className="w-4 h-4 text-primary-300 mr-2" />
            <span className="text-primary-300 font-mono text-sm">RESOURCES_DB.sql</span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl font-mono">
            [LEARNING_RESOURCES]
          </h2>
          <p className="mt-6 text-lg text-primary-200 max-w-3xl mx-auto font-mono">
            {/* Access our comprehensive collection of learning materials, */}<br/>
            {/* workshop recordings, and collaborative partnerships */}
          </p>
        </motion.div>

        {/* Workshop Recordings Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <VideoCameraIcon className="w-6 h-6 text-primary-400 mr-3" />
            <h3 className="text-2xl font-bold text-white font-mono">
              WORKSHOP_RECORDINGS[]
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="relative bg-primary-900/80 backdrop-blur-sm rounded-lg border border-primary-700/50 p-6 hover:bg-primary-900/90 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-400 font-mono text-xs">{workshop.code}</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${levelColors[workshop.level]} rounded-full`} />
                      <span className="text-xs font-mono text-primary-300">{workshop.level}</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary-600 rounded-full mr-4 cursor-pointer group-hover:bg-primary-500 transition-colors duration-300"
                    >
                      <PlayCircleIcon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-300 font-mono">
                        {workshop.title}
                      </h4>
                      <p className="text-sm text-primary-200 mt-1">
                        {workshop.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary-700/50">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs font-mono text-primary-400">
                        DURATION: <span className="text-primary-300">{workshop.duration}</span>
                      </span>
                      <span className="text-xs font-mono text-primary-400">
                        VIEWS: <span className="text-primary-300">{workshop.views}</span>
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => {
                        const baseHeight = 4 + (i * 2);
                        const maxHeight = baseHeight + 6;
                        return (
                          <motion.div
                            key={i}
                            className="w-1 bg-primary-400 rounded-full"
                            style={{ height: `${baseHeight}px` }}
                            animate={{
                              height: [`${baseHeight}px`, `${maxHeight}px`, `${baseHeight}px`],
                              opacity: [0.4, 1, 0.4]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Resources Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <DocumentTextIcon className="w-6 h-6 text-primary-400 mr-3" />
            <h3 className="text-2xl font-bold text-white font-mono">
              LEARNING_MATERIALS[]
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="relative bg-primary-900/80 backdrop-blur-sm rounded-lg border border-primary-700/50 p-6 hover:bg-primary-900/90 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-4">
                    <LinkIcon className="h-5 w-5 text-primary-400" />
                    <span className="text-xs font-mono text-primary-300 bg-primary-800/50 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-primary-300 transition-colors duration-300">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-primary-200 mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-primary-700/50">
                    <span className="text-xs font-mono text-primary-400">
                      DOWNLOADS: <span className="text-primary-300">{resource.downloads}</span>
                    </span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border border-primary-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media Collaborators Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <LinkIcon className="w-6 h-6 text-primary-400 mr-3" />
            <h3 className="text-2xl font-bold text-white font-mono">
              MEDIA_COLLABORATORS[]
            </h3>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={collaborator.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="relative bg-primary-900/80 backdrop-blur-sm rounded-lg border border-primary-700/50 p-6 hover:bg-primary-900/90 transition-all duration-300 text-center">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400/30 to-primary-600/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-primary-400 rounded"
                    />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-primary-300 transition-colors duration-300">
                    {collaborator.name}
                  </h4>
                  <p className="text-sm text-primary-200 mb-2">
                    {collaborator.type}
                  </p>
                  <p className="text-xs text-primary-400 mb-2">
                    {collaborator.partnership}
                  </p>
                  <span className="text-xs font-mono text-primary-500">
                    Since {collaborator.since}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <p className="text-primary-500 font-mono text-sm">
            console.log(&ldquo;Resources loaded: workshops, materials, collaborators ✓&rdquo;);
          </p>
        </motion.div>
      </div>
    </section>
  )
} 