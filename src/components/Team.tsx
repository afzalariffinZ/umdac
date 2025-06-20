'use client'

import { motion } from 'framer-motion'

const committees = [
  {
    name: 'High Committee',
    members: [
      { name: 'Sarah Lee', role: 'President', image: '/placeholder-profile.jpg' },
      { name: 'Ahmad Razif', role: 'Vice President', image: '/placeholder-profile.jpg' },
      { name: 'Priya Sharma', role: 'Secretary', image: '/placeholder-profile.jpg' },
    ],
  },
  {
    name: 'Programme & Protocol',
    members: [
      { name: 'Ming Wei', role: 'Head of Programme', image: '/placeholder-profile.jpg' },
      { name: 'Aisha Abdullah', role: 'Programme Executive', image: '/placeholder-profile.jpg' },
      { name: 'Raj Kumar', role: 'Protocol Officer', image: '/placeholder-profile.jpg' },
    ],
  },
  {
    name: 'Multimedia & Publicity',
    members: [
      { name: 'Lisa Wong', role: 'Head of Multimedia', image: '/placeholder-profile.jpg' },
      { name: 'Zain Hassan', role: 'Design Lead', image: '/placeholder-profile.jpg' },
      { name: 'Emily Tan', role: 'Social Media Manager', image: '/placeholder-profile.jpg' },
    ],
  },
  {
    name: 'External Relations',
    members: [
      { name: 'Daniel Lim', role: 'Head of External Relations', image: '/placeholder-profile.jpg' },
      { name: 'Nurul Izzah', role: 'Partnership Executive', image: '/placeholder-profile.jpg' },
      { name: 'Alex Chen', role: 'Industry Liaison', image: '/placeholder-profile.jpg' },
    ],
  },
  {
    name: 'Logistic & Technical',
    members: [
      { name: 'Hafiz Ibrahim', role: 'Head of Technical', image: '/placeholder-profile.jpg' },
      { name: 'Grace Yap', role: 'Logistics Manager', image: '/placeholder-profile.jpg' },
      { name: 'Ravi Menon', role: 'Technical Support', image: '/placeholder-profile.jpg' },
    ],
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Our dedicated committee members working together to bring data analytics education to life.
          </p>
        </motion.div>

        <div className="mt-20 space-y-20">
          {committees.map((committee, committeeIndex) => (
            <motion.div
              key={committee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: committeeIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-8">
                {committee.name}
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {committee.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (committeeIndex * 0.1) + (memberIndex * 0.1) }}
                    className="relative group"
                  >
                    <div className="relative rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-primary-400 to-primary-600">
                        {/* Placeholder for profile image */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/30">
                          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="mt-1 text-sm text-secondary-600">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 