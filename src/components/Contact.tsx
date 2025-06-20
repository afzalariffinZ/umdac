'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { ContactFormData, ValidationError, submitContactForm } from '@/utils/forms'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/umdac',
    icon: FaInstagram,
    color: 'hover:text-pink-600',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/umdac',
    icon: FaLinkedin,
    color: 'hover:text-blue-600',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setIsSubmitting(true)

    try {
      await submitContactForm(formData)
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      if (err instanceof ValidationError) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred. Please try again later.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Have questions or want to collaborate? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl transform -rotate-6 scale-105 opacity-10" />
            <div className="relative bg-white rounded-2xl shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 rounded-md bg-red-50 border border-red-200"
                    >
                      <p className="text-sm text-red-600">{error}</p>
                    </motion.div>
                  )}
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 rounded-md bg-green-50 border border-green-200"
                    >
                      <p className="text-sm text-green-600">
                        Thank you for your message! We&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                      ${isSubmitting ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'} 
                      transition-colors duration-300`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-lg font-medium text-secondary-900">Email Us</h3>
                <div className="mt-3 flex items-center space-x-3 text-secondary-600">
                  <EnvelopeIcon className="h-6 w-6" />
                  <a
                    href="mailto:umdac@um.edu.my"
                    className="hover:text-primary-600 transition-colors duration-300"
                  >
                    umdac@um.edu.my
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-medium text-secondary-900">Follow Us</h3>
                <div className="mt-3 flex items-center space-x-6">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-secondary-600 ${item.color} transition-colors duration-300`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="prose prose-purple">
                <h3 className="text-lg font-medium text-secondary-900">Visit Us</h3>
                <p className="text-secondary-600">
                  Faculty of Computer Science & Information Technology<br />
                  University of Malaya<br />
                  50603 Kuala Lumpur<br />
                  Malaysia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 