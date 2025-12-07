'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const heroTitleVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="IUFA Accounts Academy Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.h1
            variants={heroTitleVariants}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white"
          >
            <motion.span variants={wordVariants} className="block">
              Professional Accounting
            </motion.span>
            <motion.span variants={wordVariants} className="block">
              Training Academy
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl"
          >
            Expert-led training in manual & computerized accounting with real-world experience, 
            internships, and guaranteed placement support from industry professionals.
          </motion.p>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-start"
          >
            <button
              onClick={() => scrollToSection('#courses')}
              className="bg-white text-matte-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-matte-navy rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-matte-navy rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
