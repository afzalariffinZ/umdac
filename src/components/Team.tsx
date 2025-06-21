'use client'

import { motion } from 'framer-motion'
import { UserGroupIcon, CodeBracketIcon } from '@heroicons/react/24/outline'


const committees = [
  {
    name: 'High Committee',
    code: 'EXEC_001',
    members: [
      { name: 'Syarifah Raini Naesha', role: 'President', image: 'https://media.licdn.com/dms/image/v2/D4E03AQG3jm4r09Oxxw/profile-displayphoto-shrink_400_400/B4EZdlQ2omHsAg-/0/1749750607116?e=1755734400&v=beta&t=9Mp7mqr0ON6SCjn7pY6dDhbRHSYuAUxj-IW4toc7AH8', id: 'PRES_001' },
      { name: 'Afzal Ariffin', role: 'Vice President', image: 'https://media.licdn.com/dms/image/v2/D5603AQFGb4WtaZmUoA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700821523667?e=1755734400&v=beta&t=PMb8nyBgkx2wt1gDpdtgThVQKK9QdRaMwDFf44OgoSI', id: 'VP_001' },
      { name: 'Izzhan Hakimi', role: 'Secretary', image: 'https://media.licdn.com/dms/image/v2/D5603AQGbrMTg3Aqadw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697729946404?e=1755734400&v=beta&t=5_v6Sg_U3vqhTrBlQ3JTitlPtl_w_kKJsKt_rS7Es80', id: 'SEC_001' },
    ],
  },
  {
    name: 'Programme & Protocol',
    code: 'PROG_002',
    members: [
      { name: 'Nurul Adhia Afiqah', role: 'Head of Programme', image: 'https://media.licdn.com/dms/image/v2/D5603AQGOKbspjbtABA/profile-displayphoto-shrink_800_800/B56Zcx3p8FHEAc-/0/1748888365720?e=1755734400&v=beta&t=2pfnu5RAJIYQhOnnZ1juKnGPrZbah_IWRfStrPDGzQc', id: 'PROG_HEAD' },
      { name: 'Aisha Abdullah', role: 'Programme Executive', image: '/placeholder-profile.jpg', id: 'PROG_EXEC' },
      { name: 'Raj Kumar', role: 'Protocol Officer', image: '/placeholder-profile.jpg', id: 'PROT_001' },
    ],
  },
  {
    name: 'Multimedia & Publicity',
    code: 'MEDIA_003',
    members: [
      { name: 'Lisa Wong', role: 'Head of Multimedia', image: '/placeholder-profile.jpg', id: 'MEDIA_HEAD' },
      { name: 'Zain Hassan', role: 'Design Lead', image: '/placeholder-profile.jpg', id: 'DESIGN_001' },
      { name: 'Emily Tan', role: 'Social Media Manager', image: '/placeholder-profile.jpg', id: 'SOCIAL_001' },
    ],
  },
  {
    name: 'External Relations',
    code: 'EXT_004',
    members: [
      { name: 'Daniel Lim', role: 'Head of External Relations', image: '/placeholder-profile.jpg', id: 'EXT_HEAD' },
      { name: 'Nurul Izzah', role: 'Partnership Executive', image: '/placeholder-profile.jpg', id: 'PART_001' },
      { name: 'Alex Chen', role: 'Industry Liaison', image: '/placeholder-profile.jpg', id: 'IND_001' },
    ],
  },
  {
    name: 'Logistic & Technical',
    code: 'TECH_005',
    members: [
      { name: 'Hafiz Ibrahim', role: 'Head of Technical', image: '/placeholder-profile.jpg', id: 'TECH_HEAD' },
      { name: 'Grace Yap', role: 'Logistics Manager', image: '/placeholder-profile.jpg', id: 'LOG_001' },
      { name: 'Ravi Menon', role: 'Technical Support', image: '/placeholder-profile.jpg', id: 'TECH_SUP' },
    ],
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.3) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 1px, transparent 1px), radial-gradient(circle at 40% 60%, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px, 30px 30px, 40px 40px'
        }} />
      </div>

      {/* Floating Organizational Chart Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-20 h-20 border-2 border-primary-400 rounded-lg"
        />
      </div>

      <div className="absolute bottom-10 left-10 opacity-10">
        <motion.div
          animate={{ 
            y: [-5, 5, -5],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 border border-primary-500 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-800/50 rounded-full border border-primary-600 mb-6">
            <UserGroupIcon className="w-4 h-4 text-primary-300 mr-2" />
            <span className="text-primary-300 font-mono text-sm">TEAM_STRUCTURE.org</span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl font-mono">
            [MEET_THE_TEAM]
          </h2>
          <p className="mt-6 text-lg text-primary-200 max-w-3xl mx-auto font-mono">
            {/* Our dedicated committee members working together */}<br/>
            {/* to bring data analytics education to life */}
          </p>
        </motion.div>

        <div className="space-y-16">
          {committees.map((committee, committeeIndex) => (
            <motion.div
              key={committee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: committeeIndex * 0.1 }}
              className="relative"
            >
              {/* Committee Header */}
              <div className="flex items-center mb-8">
                <CodeBracketIcon className="w-6 h-6 text-primary-400 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    {committee.name}
                  </h3>
                  <span className="text-primary-400 font-mono text-sm">{committee.code}</span>
                </div>
                
                {/* Animated Connection Line */}
                <motion.div
                  className="flex-1 h-px bg-gradient-to-r from-primary-600 to-transparent ml-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: committeeIndex * 0.1 + 0.3 }}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {committee.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (committeeIndex * 0.1) + (memberIndex * 0.1) }}
                    className="group relative"
                  >
                    {/* Animated Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    <div className="relative bg-primary-950/80 backdrop-blur-sm rounded-lg border border-primary-700/50 overflow-hidden hover:bg-primary-950/90 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                      {/* Member ID Header */}
                      <div className="px-4 py-2 bg-primary-900/50 border-b border-primary-700/50">
                        <div className="flex items-center justify-between">
                          <span className="text-primary-400 font-mono text-xs">{member.id}</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                          </div>
                        </div>
                      </div>

                      {/* Profile Section */}
                      <div className="p-6">
                        {/* Avatar */}
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          {member.image && !member.image.includes('placeholder') ? (
                            <>
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 rounded-lg object-cover"
                                loading="lazy"
                              />
                              {/* Overlay for better contrast */}
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent rounded-lg" />
                            </>
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                              <motion.svg 
                                className="w-10 h-10 text-white" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ 
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{ 
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </motion.svg>
                            </div>
                          )}
                          
                          {/* Animated Ring */}
                          <motion.div
                            className="absolute -inset-1 border-2 border-primary-400/30 rounded-lg"
                            animate={{ 
                              rotate: [0, 360],
                            }}
                            transition={{ 
                              duration: 10,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>

                        {/* Member Info */}
                        <div className="text-center">
                          <h4 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-300 font-mono mb-2">
                            {member.name}
                          </h4>
                          <p className="text-sm text-primary-200 mb-4 font-mono">
                            {member.role}
                          </p>
                          
                          {/* Status Bar */}
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(6)].map((_, i) => {
                              const baseHeight = 4 + (i % 3) * 2;
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
                                    duration: 2,
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-500 font-mono text-sm">
            console.log(&ldquo;Team structure loaded: {committees.length} committees, {committees.reduce((acc, c) => acc + c.members.length, 0)} members ✓&rdquo;);
          </p>
        </motion.div>
      </div>
    </section>
  )
}