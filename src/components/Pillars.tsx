'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon, RocketLaunchIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const pillars = [
  {
    name: 'Data Debut',
    description: 'Start your data journey with foundational knowledge in statistics, programming, and data visualization.',
    icon: CodeBracketIcon,
    hashtag: '#Decode',
    color: 'from-primary-400 to-primary-600',
    code: 'INIT_001',
  },
  {
    name: 'Data Dev',
    description: 'Build real-world projects and develop practical skills through hands-on workshops and collaborative challenges.',
    icon: RocketLaunchIcon,
    hashtag: '#Transform',
    color: 'from-primary-500 to-primary-700',
    code: 'BUILD_002',
  },
  {
    name: 'Data@',
    description: 'Connect with industry professionals, attend tech talks, and explore career opportunities in data analytics.',
    icon: BuildingOfficeIcon,
    hashtag: '#Excel',
    color: 'from-primary-600 to-primary-800',
    code: 'CONNECT_003',
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Floating Data Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 border border-primary-400 rounded-lg"
        />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 border border-primary-500 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-900/50 rounded-full border border-primary-700 mb-6">
            <span className="text-primary-300 font-mono text-sm">PILLARS_SYSTEM.exe</span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl font-mono">
            [OUR_PILLARS]
          </h2>
          <p className="mt-6 text-lg text-primary-200 max-w-3xl mx-auto font-mono">
            {/* Three interconnected pathways designed to guide your journey */}<br/>
            {/* from data novice to analytics professional */}
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
              className="group relative"
            >
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="relative bg-primary-900/80 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8 hover:bg-primary-900/90 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                {/* Code Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-400 font-mono text-xs">{pillar.code}</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-2 h-2 bg-primary-700 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${pillar.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(pillar.icon, { className: "h-8 w-8 text-white", "aria-hidden": "true" })}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 font-mono group-hover:text-primary-300 transition-colors duration-300">
                  {pillar.name}
                </h3>
                <p className="text-primary-200 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Hashtag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-mono bg-primary-800/50 text-primary-300 border border-primary-600/30">
                    {pillar.hashtag}
                  </span>
                  
                  {/* Data Visualization Element */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => {
                      const baseHeight = 10 + (i * 3);
                      const maxHeight = baseHeight + 15;
                      return (
                        <motion.div
                          key={i}
                          className="w-1 bg-primary-400 rounded-full"
                          style={{ height: `${baseHeight}px` }}
                          animate={{
                            height: [`${baseHeight}px`, `${maxHeight}px`, `${baseHeight}px`],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
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

        {/* Bottom Code Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-500 font-mono text-sm">
            console.log(&ldquo;Pillars initialized successfully ✓&rdquo;);
          </p>
        </motion.div>
      </div>
    </section>
  )
} 