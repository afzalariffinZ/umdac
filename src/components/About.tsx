'use client'

import { motion } from 'framer-motion'
import { ChartBarIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Mission',
    description: 'To cultivate data literacy and analytical thinking among University Malaya students through hands-on learning experiences and industry exposure.',
    icon: ChartBarIcon,
    code: 'MISSION_001',
  },
  {
    name: 'Vision',
    description: 'To be the premier student-led platform for data analytics education and innovation in Malaysian universities.',
    icon: UserGroupIcon,
    code: 'VISION_002',
  },
  {
    name: 'Faculty Support',
    description: 'Guided by experienced faculty members from the School of Computer Science and Information Technology.',
    icon: AcademicCapIcon,
    code: 'FACULTY_003',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-secondary-900 to-secondary-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 network-lines opacity-20" />
      
      {/* Floating Data Elements */}
      <div className="absolute top-20 right-20 opacity-30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-primary-400"
            style={{ 
              height: `${20 + i * 10}px`,
              left: `${i * 8}px`,
              top: `${i * 5}px`
            }}
            animate={{
              scaleY: [1, 0.5, 1.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-16 h-16 border-2 border-primary-400 rounded transform rotate-45">
                <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-400 rounded transform -rotate-45" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-primary-300">[</span>
              ABOUT_UMDAC
              <span className="text-primary-300">]</span>
            </h2>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            />

            <p className="text-lg md:text-xl text-primary-100 max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-primary-300">&gt;</span> We are a student-led organization dedicated to fostering data analytics skills
              through practical learning, industry engagement, and collaborative projects.
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-primary-900/50 to-secondary-800/50 backdrop-blur-sm border border-primary-500/30 p-8 rounded-none hover:border-primary-400/50 transition-all duration-300">
                  {/* Code Label */}
                  <div className="absolute top-4 right-4 text-xs font-mono text-primary-400 opacity-70">
                    {feature.code}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 p-4 mb-6 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-full h-full text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 font-mono">
                    <span className="text-primary-300">//</span> {feature.name}
                  </h3>
                  
                  <p className="text-primary-100 leading-relaxed font-mono text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-primary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Data Visualization Accent */}
                <div className="absolute -bottom-2 -right-2 flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary-400"
                      style={{ height: `${8 + i * 4}px` }}
                      animate={{
                        scaleY: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2 + index * 0.5
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-900/30 to-secondary-800/30 backdrop-blur-sm border border-primary-500/30 p-8 rounded-none">
            <p className="text-lg md:text-xl text-primary-100 max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-primary-300">console.log(</span>
              <span className="text-primary-200">"Through workshops, projects, and industry partnerships, we empower students to transform data into actionable insights and prepare for careers in the data-driven economy."</span>
              <span className="text-primary-300">);</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 