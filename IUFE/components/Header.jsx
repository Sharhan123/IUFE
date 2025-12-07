'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section based on scroll position
      const sections = ['hero', 'about', 'courses', 'testimonials', 'pricing', 'contact']
      const scrollPosition = window.scrollY + 200 // Offset for header height

      let currentSection = 'hero' // Default to hero

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            currentSection = sectionId
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'WHO ARE WE?', href: '#hero', hasDropdown: false, section: 'hero' },
    { name: 'ABOUT US', href: '#about', hasDropdown: true, section: 'about' },
    { name: 'OUR COURSES', href: '#courses', hasDropdown: true, section: 'courses' },
    // { name: 'ADMISSIONS', href: '#pricing', hasDropdown: true, section: 'pricing' },
    { name: 'SUCCESS STORIES', href: '#testimonials', hasDropdown: false, section: 'testimonials' },
    { name: 'RESOURCES', href: '#contact', hasDropdown: true, section: 'contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-0 md:px-10">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white md:rounded-b-3xl shadow-lg border border-gray-100 w-full"
      >
        <div className="px-4 md:px-8 py-3 md:py-5">
          <div className="flex items-center justify-between h-12 md:h-16">
            {/* Left Section - Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              {/* Logo - Different for mobile and desktop */}
              <div className="flex items-center">
                {/* Mobile Logo */}
                <Image
                  src="/logo.png"
                  alt="IUFA Accounts Academy Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:hidden object-contain"
                  priority
                />
                {/* Desktop Logo */}
                <Image
                  src="/second-logo.png"
                  alt="IUFA Accounts Academy Logo"
                  width={120}
                  height={120}
                  className="hidden md:block w-24 h-24 object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Center Section - Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-full font-medium text-sm tracking-wide uppercase transition-all duration-200 focus:outline-none focus:ring-0 ${activeSection === item.section
                      ? 'bg-matte-navy text-white'
                      : 'text-gray-700 hover:bg-gray-300 hover:text-white'
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-3 h-3 transition-all duration-200 ${activeSection === item.section ? 'text-white' : 'text-gray-500 group-hover:text-white'
                        }`} />
                    )}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Right Section - CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => scrollToSection('#contact')}
                className="hidden lg:block bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Get in touch
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 rounded-b-2xl"
            >
              <div className="px-8 py-6">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left font-medium py-2 text-sm tracking-wide uppercase transition-colors duration-200 focus:outline-none focus:ring-0 ${activeSection === item.section
                        ? 'text-matte-navy font-bold'
                        : 'text-gray-700 hover:text-black'
                        }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    Get in touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
