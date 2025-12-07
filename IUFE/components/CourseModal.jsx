'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, IndianRupee, Users, CheckCircle, Star, Award } from 'lucide-react'
import Image from 'next/image'

export default function CourseModal({ course, isOpen, onClose, onApply }) {
  if (!course) return null

  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      const element = document.querySelector('#contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            role="dialog"
            aria-labelledby="course-modal-title"
            aria-describedby="course-modal-description"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-matte-navy" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="relative bg-gradient-to-br from-matte-navy to-deep-indigo p-8">
                {/* Course Info */}
                <div className="text-white">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-6xl">{course.icon}</span>
                    <div>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  <h2 id="course-modal-title" className="text-3xl font-bold mb-2">
                    {course.title}
                  </h2>
                  <p className="text-xl opacity-90 mb-2">{course.fullTitle}</p>
                  <p id="course-modal-description" className="text-lg opacity-80">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Course Meta */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3 p-4 bg-warm-gray rounded-lg">
                    <Clock className="w-8 h-8 text-coral-red" />
                    <div>
                      <p className="font-semibold text-matte-navy">Duration</p>
                      <p className="text-gray-600">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-warm-gray rounded-lg">
                    <IndianRupee className="w-8 h-8 text-coral-red" />
                    <div>
                      <p className="font-semibold text-matte-navy">Investment</p>
                      <p className="text-gray-600">{course.fees}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-warm-gray rounded-lg">
                    <Users className="w-8 h-8 text-coral-red" />
                    <div>
                      <p className="font-semibold text-matte-navy">Format</p>
                      <p className="text-gray-600">Live Classes</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Course Features */}
                  <div>
                    <h3 className="text-xl font-bold text-matte-navy mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {course.features?.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Course Modules */}
                  <div>
                    <h3 className="text-xl font-bold text-matte-navy mb-4">Course Modules</h3>
                    <div className="space-y-3">
                      {course.points?.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="flex items-center space-x-3 p-3 bg-warm-gray rounded-lg"
                        >
                          <div className="w-8 h-8 bg-coral-red text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 font-medium">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certification & Benefits */}
                <div className="mt-8 p-6 bg-gradient-to-r from-matte-navy to-deep-indigo rounded-xl text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-8 h-8 text-accent-gold" />
                    <h3 className="text-xl font-bold">Certification & Benefits</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">You&apos;ll Receive:</h4>
                      <ul className="space-y-1 text-sm opacity-90">
                        <li>• Industry-recognized certificate</li>
                        <li>• Lifetime access to course materials</li>
                        <li>• Job placement assistance</li>
                        <li>• Alumni network access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Career Opportunities:</h4>
                      <ul className="space-y-1 text-sm opacity-90">
                        <li>• Junior Accountant</li>
                        <li>• Accounts Executive</li>
                        <li>• Tax Consultant</li>
                        <li>• Financial Analyst</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToContact}
                    className="btn-primary flex-1"
                  >
                    Enroll Now - {course.fees}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('tel:+919876543210')}
                    className="btn-secondary flex-1"
                  >
                    Call for Details
                  </motion.button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-warm-gray rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Next Batch Starts:</strong> December 1st, 2024 |
                    <strong>Limited Seats:</strong> Only 25 students per batch |
                    <strong>Early Bird Discount:</strong> Save 20% if you enroll before Nov 25th
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
