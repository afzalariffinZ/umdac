'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon, PlayIcon } from '@heroicons/react/24/outline'

const events = [
  {
    title: 'DSSP Workshops',
    description: 'Data Science Student Programme - A series of hands-on workshops covering essential data science tools and techniques.',
    date: 'Monthly',
    location: 'Faculty of Computer Science',
    category: 'Workshop',
    status: 'active' as const,
    participants: 150,
  },
  {
    title: 'AirAsia Site Visit',
    description: 'Exclusive behind-the-scenes look at how AirAsia leverages data analytics in their operations.',
    date: 'September 2024',
    location: 'AirAsia RedQ',
    category: 'Industry Visit',
    status: 'completed' as const,
    participants: 45,
  },
  {
    title: 'Industrial Talks',
    description: 'Industry experts share insights on real-world applications of data analytics and career opportunities.',
    date: 'Bi-monthly',
    location: 'Hybrid',
    category: 'Talk',
    status: 'active' as const,
    participants: 200,
  },
  {
    title: 'Data Science Digital Race',
    description: 'Compete in teams to solve real-world data challenges and win exciting prizes.',
    date: 'November 2024',
    location: 'Virtual',
    category: 'Competition',
    status: 'upcoming' as const,
    participants: 80,
  },
  {
    title: 'MyDigitalMaker Fair',
    description: 'Showcase your data projects and connect with the tech community at this national-level event.',
    date: 'December 2024',
    location: 'KLCC Convention Centre',
    category: 'Exhibition',
    status: 'upcoming' as const,
    participants: 300,
  },
]

const statusColors = {
  active: 'bg-green-500',
  completed: 'bg-blue-500',
  upcoming: 'bg-primary-500',
}

export default function Events() {
  return (
    <section id="events" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 49%, rgba(147, 51, 234, 0.3) 50%, rgba(147, 51, 234, 0.3) 51%, transparent 52%)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Floating Network Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-800/50 rounded-full border border-primary-600 mb-6">
            <PlayIcon className="w-4 h-4 text-primary-300 mr-2" />
            <span className="text-primary-300 font-mono text-sm">EVENTS_CALENDAR.json</span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl font-mono">
            [EVENTS_&_ACTIVITIES]
          </h2>
          <p className="mt-6 text-lg text-primary-200 max-w-3xl mx-auto font-mono">
            {/* Join us for exciting events that combine learning, */}<br/>
            {/* networking, and hands-on experience in data analytics */}
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              
              <div className="relative bg-primary-950/80 backdrop-blur-sm rounded-lg border border-primary-700/50 overflow-hidden hover:bg-primary-950/90 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                {/* Header with Status */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900">
                  {/* Status Indicator */}
                  <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                    <div className={`w-2 h-2 ${statusColors[event.status]} rounded-full animate-pulse`} />
                    <span className="text-xs font-mono text-primary-300 uppercase">{event.status}</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-primary-700/80 text-primary-200 border border-primary-600/30">
                      {event.category}
                    </span>
                  </div>

                  {/* Data Visualization Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="grid grid-cols-8 gap-1">
                      {[...Array(32)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-primary-400 rounded-sm"
                          animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300 font-mono mb-3">
                    {event.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-primary-200 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-primary-300">
                      <CalendarIcon className="h-4 w-4 mr-2 text-primary-400" />
                      <span className="font-mono">{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-primary-300">
                      <MapPinIcon className="h-4 w-4 mr-2 text-primary-400" />
                      <span className="font-mono">{event.location}</span>
                    </div>
                  </div>

                  {/* Participants Counter */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary-700/50">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-primary-400">PARTICIPANTS:</span>
                      <motion.span 
                        className="text-primary-300 font-mono font-bold"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {event.participants}
                      </motion.span>
                    </div>
                    
                    {/* Mini Data Bars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(4)].map((_, i) => {
                        const baseHeight = 8 + (i * 3);
                        const maxHeight = baseHeight + 8;
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
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Status Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-500 font-mono text-sm">
            console.log(&ldquo;Events system loaded: {events.length} active events&rdquo;);
          </p>
        </motion.div>
      </div>
    </section>
  )
} 