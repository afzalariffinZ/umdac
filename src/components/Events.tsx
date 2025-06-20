'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const events = [
  {
    title: 'DSSP Workshops',
    description: 'Data Science Student Programme - A series of hands-on workshops covering essential data science tools and techniques.',
    date: 'Monthly',
    location: 'Faculty of Computer Science',
    imageUrl: '/placeholder-dssp.jpg',
    category: 'Workshop',
  },
  {
    title: 'AirAsia Site Visit',
    description: 'Exclusive behind-the-scenes look at how AirAsia leverages data analytics in their operations.',
    date: 'September 2024',
    location: 'AirAsia RedQ',
    imageUrl: '/placeholder-airasia.jpg',
    category: 'Industry Visit',
  },
  {
    title: 'Industrial Talks',
    description: 'Industry experts share insights on real-world applications of data analytics and career opportunities.',
    date: 'Bi-monthly',
    location: 'Hybrid',
    imageUrl: '/placeholder-talks.jpg',
    category: 'Talk',
  },
  {
    title: 'Data Science Digital Race',
    description: 'Compete in teams to solve real-world data challenges and win exciting prizes.',
    date: 'November 2024',
    location: 'Virtual',
    imageUrl: '/placeholder-race.jpg',
    category: 'Competition',
  },
  {
    title: 'MyDigitalMaker Fair',
    description: 'Showcase your data projects and connect with the tech community at this national-level event.',
    date: 'December 2024',
    location: 'KLCC Convention Centre',
    imageUrl: '/placeholder-fair.jpg',
    category: 'Exhibition',
  },
]

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Events & Activities
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Join us for exciting events that combine learning, networking, and hands-on experience in data analytics.
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
              className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/10 transition-colors duration-300 z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-primary-800">
                    {event.category}
                  </span>
                </div>
                {/* Placeholder for image - in production, replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="mt-2 text-secondary-600">
                  {event.description}
                </p>
                <div className="mt-4 flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-secondary-500">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-secondary-500">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    {event.location}
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