'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-matte-navy text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-coral-red rounded-full flex items-center justify-center hover:bg-coral-red/90 transition-colors shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="container-fluid pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-coral-red to-deep-indigo rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">IUFA Accounts Academy</h3>
                  <p className="text-sm opacity-80">Future-Ready Accounting Education</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering students and professionals with practical accounting skills for successful careers.
                Join thousands of our alumni working in top companies across India and UAE.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/iufa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral-red transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/iufaaccounts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral-red transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/iufa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral-red transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/iufa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral-red transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Courses', href: '#courses' },
                { name: 'Success Stories', href: '#testimonials' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-coral-red transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Branches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Branches</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-coral-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">Kondotty</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-coral-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">Ayikkarapadi</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-coral-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">Farook College</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-coral-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">Ramanattukara</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-semibold">Dubai (Corporate Office)</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-coral-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 7909 111 009</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-coral-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">iufaacademy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-coral-red mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <p className="text-gray-300">www.iufa.in</p>
                  <p className="text-gray-300">@iufaaccounts</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Accreditation & Certifications */}


        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>© 2024 IUFA Accounts Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-coral-red transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-coral-red transition-colors">Terms of Service</a>
            <a href="/refund" className="hover:text-coral-red transition-colors">Refund Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
