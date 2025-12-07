'use client'

import { motion } from 'framer-motion'
import { Clock, IndianRupee, Users, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function CourseCard({ course, index, onLearnMore }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 10px 30px rgba(20,38,74,0.12)',
        transition: { duration: 0.2 }
      }}
      className="card group cursor-pointer"
      onClick={() => onLearnMore(course)}
      role="article"
      aria-labelledby={`course-title-${course.id}`}
    >
      {/* Course Image */}
      <div className="relative overflow-hidden rounded-t-card">
        <Image
          src={course.image}
          alt={`Course illustration: ${course.title} — practical training and certification`}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-navy/60 via-transparent to-transparent" />
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-matte-navy text-xs font-semibold px-3 py-1 rounded-full">
            {course.level}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-accent-gold fill-current" />
            <span className="text-xs font-semibold text-matte-navy">4.8</span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Title */}
        <h3 
          id={`course-title-${course.id}`}
          className="text-xl font-bold text-matte-navy mb-2 group-hover:text-coral-red transition-colors duration-200"
        >
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {course.short}
        </p>

        {/* Course Meta */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>Live Classes</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {course.highlights.slice(0, 4).map((highlight, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-coral-red rounded-full flex-shrink-0" />
                <span className="text-xs text-gray-600 truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <IndianRupee className="w-5 h-5 text-coral-red" />
            <span className="text-2xl font-bold text-matte-navy">
              {course.fees.replace('INR ', '')}
            </span>
          </div>
          
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-coral-red font-semibold hover:text-coral-red/80 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              onLearnMore(course)
            }}
            aria-label={`Learn more about ${course.title}`}
          >
            <span>Know More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-coral-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card pointer-events-none" />
    </motion.article>
  )
}
