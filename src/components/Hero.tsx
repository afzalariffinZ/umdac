'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Network Lines Background */}
      <div className="absolute inset-0 network-lines opacity-30" />
      
      {/* Floating Data Visualization Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Data Bars */}
        <div className="absolute top-20 left-20 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 bg-primary-400"
              style={{ height: `${(i + 1) * 20}px` }}
              animate={{
                scaleY: [1, 0.5, 1.2, 0.8, 1],
                opacity: [0.7, 1, 0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Floating Charts */}
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 border-2 border-primary-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Data Points */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              right: `${10 + i * 10}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title */}
          <div className="mb-8">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-mono tracking-wider leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="mb-2">
                <span className="text-primary-300">UNIVERSITY</span>{" "}
                <span className="text-primary-200">MALAYA</span>
              </div>
              <div>
                <span className="text-primary-100">DATA</span>{" "}
                <span className="text-primary-200">ANALYTICS</span>{" "}
                <span className="text-primary-300">CLUB</span>
              </div>
            </motion.h1>
          </div>

          {/* Slogan with Typewriter Effect */}
          <motion.div
            className="text-3xl md:text-5xl font-bold mb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex justify-center items-center space-x-4">
              <motion.span 
                className="text-primary-300 font-mono"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Decode.
              </motion.span>
              <motion.div
                className="w-8 h-8 border-2 border-primary-400 rounded"
                animate={{ rotate: 45 }}
                transition={{ delay: 2, duration: 0.5 }}
              />
            </div>
            
            <div className="flex justify-center items-center space-x-4">
              <motion.div
                className="w-6 h-6 bg-primary-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: 2.5, duration: 0.5 }}
              />
              <motion.span 
                className="text-primary-200 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
              >
                Transform.
              </motion.span>
            </div>
            
            <div className="flex justify-center items-center space-x-4">
              <motion.span 
                className="text-primary-100 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.3 }}
              >
                Excel.
              </motion.span>
              <motion.div
                className="flex space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.8 }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-6 bg-primary-400 animate-wave" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <span className="text-primary-300">&gt;</span> Join our community of data enthusiasts at University Malaya
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.5, duration: 0.5 }}
          >
            <Link
              href="#about"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-mono font-semibold text-lg rounded-none border-2 border-primary-400 hover:border-primary-300 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">[LEARN_MORE]</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-300 rounded-none opacity-0 group-hover:opacity-30 blur"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <span className="text-xs font-mono">[SCROLL]</span>
        </div>
      </motion.div>
    </div>
  )
} 