'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ToolsSlider from '@/components/ToolsSlider'
import CourseCard from '@/components/CourseCard'
import CourseModal from '@/components/CourseModal'
import Footer from '@/components/Footer'
import { courses, testimonials, stats, faqs } from '@/lib/courses'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  TrendingUp,
  Award,
  Building,
  CheckCircle,
  Star,
  Quote,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Hide loading screen after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Show for 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCourse(null)
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <>
      {/* Initial Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
          >
            <div className="text-center">
              {/* Logo with pulse animation */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="relative w-64 h-64 mx-auto mb-4"
              >
                <Image
                  src="/second-logo.png"
                  alt="IUFA Accounts Academy"
                  fill
                  className="object-contain animate-pulse"
                  priority
                />

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <ToolsSlider />

        {/* About Us Section */}
        <section id="about" className="section-padding relative overflow-hidden bg-white">
          {/* Decorative Background Elements */}
          <div className="absolute top-20 left-0 w-[500px] h-[500px] opacity-30">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Coral Red Lines */}
              <path fill="none" stroke="#E34234" strokeWidth="0.5" opacity="0.4" d="M 0,80 Q 50,30 100,80 T 200,80" />
              <path fill="none" stroke="#E34234" strokeWidth="0.5" opacity="0.3" d="M 0,100 Q 50,50 100,100 T 200,100" />
              <path fill="none" stroke="#E34234" strokeWidth="0.5" opacity="0.2" d="M 0,120 Q 50,70 100,120 T 200,120" />
              {/* Matte Navy Lines */}
              <path fill="none" stroke="#1B2A4E" strokeWidth="0.5" opacity="0.3" d="M 0,90 Q 50,40 100,90 T 200,90" />
              <path fill="none" stroke="#1B2A4E" strokeWidth="0.5" opacity="0.2" d="M 0,110 Q 50,60 100,110 T 200,110" />
              <path fill="none" stroke="#1B2A4E" strokeWidth="0.5" opacity="0.15" d="M 0,130 Q 50,80 100,130 T 200,130" />
              {/* Deep Indigo Lines */}
              <path fill="none" stroke="#2D3E5F" strokeWidth="0.5" opacity="0.25" d="M 0,95 Q 50,45 100,95 T 200,95" />
              <path fill="none" stroke="#2D3E5F" strokeWidth="0.5" opacity="0.2" d="M 0,115 Q 50,65 100,115 T 200,115" />
              <path fill="none" stroke="#2D3E5F" strokeWidth="0.5" opacity="0.15" d="M 0,135 Q 50,85 100,135 T 200,135" />
              {/* Accent Gold Lines */}
              <path fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" d="M 0,105 Q 50,55 100,105 T 200,105" />
              <path fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.15" d="M 0,125 Q 50,75 100,125 T 200,125" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-deep-indigo/5 rounded-full blur-3xl"></div>

          <div className="container-wide relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-6 px-5 py-2 bg-coral-red/10 rounded-full"
              >
                <span className="text-coral-red font-semibold text-sm uppercase tracking-widest">About Us</span>
              </motion.div>

              {/* Text Section - Full Width */}
              <div className="mb-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-matte-navy mb-8 leading-tight">
                  We Craft <span className="text-gradient bg-gradient-to-r from-coral-red to-deep-indigo bg-clip-text text-transparent">Accounting Professionals</span> that Empower Businesses!
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Since our inception, we have been revolutionizing accounting education with <span className="font-semibold text-matte-navy">expert-led training</span> and <span className="font-semibold text-coral-red">hands-on experience</span>. With our cutting-edge curriculum and passion for excellence, we deliver exceptional learning tailored to meet your unique career needs.
                </p>

                {/* Quick Stats Inline */}
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-coral-red" />
                    <div>
                      <div className="text-2xl font-bold text-matte-navy">Expert Faculty</div>
                      <div className="text-sm text-gray-600">CAs, ACCAs & Industry Pros</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-coral-red" />
                    <div>
                      <div className="text-2xl font-bold text-matte-navy">Real Training</div>
                      <div className="text-sm text-gray-600">Internships & Live Projects</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credentials Grid - Below Text */}
              {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
            >
              {[
                { icon: Users, label: 'CAs & ACCAs', color: 'from-blue-500 to-blue-600' },
                { icon: Building, label: 'Business Experts', color: 'from-purple-500 to-purple-600' },
                { icon: Award, label: 'Industry Veterans', color: 'from-orange-500 to-orange-600' },
                { icon: TrendingUp, label: 'Certified Trainers', color: 'from-green-500 to-green-600' }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-matte-navy">{item.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div> */}
            </motion.div>

            {/* Feature Cards - Full Width Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Employment Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral-red via-coral-red to-coral-red/80 p-10 text-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Employment Assistance</h3>
                  <p className="text-white/90 leading-relaxed">
                    We believe it is our responsibility to help students find employment once they have completed our courses. Students who study here will find their efforts worth it because of the results.
                  </p>
                </div>
              </motion.div>

              {/* Professional Instruction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-white border-2 border-matte-navy/10 p-10 hover:border-deep-indigo hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-deep-indigo/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-deep-indigo/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-deep-indigo" />
                  </div>
                  <h3 className="text-2xl font-bold text-matte-navy mb-4">Expert Instruction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Students receive instruction from professionals in the disciplines of accounting and taxation. We cover all fields including well-known companies.
                  </p>
                </div>
              </motion.div>

              {/* Software Training */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-gold via-accent-gold to-accent-gold/80 p-10 text-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Modern Software Training</h3>
                  <p className="text-white/90 leading-relaxed">
                    After mastering manual accounting, we teach students how to use the latest versions of various accounting software, ensuring they're industry-ready.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Hands-On Training Section */}
            {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-warm-gray to-white border border-gray-200 p-12 md:p-16"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-coral-red/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-coral-red to-accent-gold rounded-2xl mb-8">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-matte-navy mb-6">
                Hands-On Training & Real-World Experience
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We offer students the opportunity to gain practical experience by preparing real-world business accounts through <span className="font-bold text-coral-red">site visits, internship programs</span> and other means. Students receive instruction from professionals in the disciplines of accounting and taxation, covering all fields including well-known companies.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                The education you receive at <span className="font-bold text-coral-red">IUFA Accounts Academy</span> will undoubtedly exceed that of any other institution. Our comprehensive approach combines theoretical knowledge with practical application, ensuring you're not just learning—you're preparing for a successful career.
              </p>

              
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
              <CheckCircle className="w-5 h-5 text-coral-red" />
              <span className="font-semibold text-matte-navy">Manual Accounting</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
              <CheckCircle className="w-5 h-5 text-coral-red" />
              <span className="font-semibold text-matte-navy">Computerized Systems</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
              <CheckCircle className="w-5 h-5 text-coral-red" />
              <span className="font-semibold text-matte-navy">Real-World Projects</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
              <CheckCircle className="w-5 h-5 text-coral-red" />
              <span className="font-semibold text-matte-navy">Industry Internships</span>
            </div>
          </div>
        </div>
      </motion.div> */}
          </div>
        </section >

        {/* Horizontal Marquee Strip */}
        <section className="relative overflow-hidden bg-gradient-to-r from-coral-red to-matte-navy py-6 shadow-xl">
          <div className="flex whitespace-nowrap animate-marquee-left">
            {/* First set */}
            <div className="flex items-center gap-16 px-16">
              <span className="text-white font-bold text-2xl uppercase tracking-wide">IUFA ACCOUNTS ACADEMY</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">92% PLACEMENT RATE</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">EXPERT-LED TRAINING</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">TRANSFORM YOUR FUTURE</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">INDUSTRY-READY SKILLS</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">EXCELLENCE IN ACCOUNTING EDUCATION</span>
            </div>
            {/* Duplicate */}
            <div className="flex items-center gap-16 px-16">
              <span className="text-white font-bold text-2xl uppercase tracking-wide">IUFA ACCOUNTS ACADEMY</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">92% PLACEMENT RATE</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">EXPERT-LED TRAINING</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">TRANSFORM YOUR FUTURE</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">INDUSTRY-READY SKILLS</span>
              <span className="text-white font-bold text-2xl uppercase tracking-wide">EXCELLENCE IN ACCOUNTING EDUCATION</span>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="relative bg-gradient-to-br from-matte-navy to-deep-indigo py-32">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Courses
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose from our comprehensive range of accounting courses designed for different career paths and skill levels.
              </p>
            </motion.div>

            {/* Simple Grid Layout */}
            <div className="space-y-12">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-warm-gray rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left Side - Course Info */}
                    <div className="relative bg-gradient-to-br from-coral-red/10 via-accent-gold/10 to-deep-indigo/10 p-8 md:p-10 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="text-6xl md:text-7xl mb-6">{course.icon}</div>
                        <span className="text-sm font-bold text-coral-red uppercase tracking-wider">
                          / {course.category} /
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-matte-navy mt-3 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 font-medium mb-4">
                          {course.fullTitle}
                        </p>
                        <div className="inline-block px-4 py-2 bg-coral-red text-white rounded-full text-sm font-semibold">
                          {course.duration}
                        </div>
                      </div>

                      {/* Course Points */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-matte-navy uppercase tracking-wide mb-3">Course Modules:</h4>
                        <div className="grid grid-cols-1 gap-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                          {course.points?.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-coral-red flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Description & Details */}
                    <div className="p-8 md:p-10 flex flex-col justify-between bg-white">
                      <div>
                        <h4 className="text-xl font-bold text-matte-navy mb-4">Course Highlights</h4>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                          {course.description}
                        </p>

                        {/* Certifications */}
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-matte-navy uppercase tracking-wide mb-3">Certifications:</h4>
                          <div className="space-y-2">
                            {course.certifications?.map((cert, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Award className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-2 mb-6">
                          <h4 className="text-sm font-bold text-matte-navy uppercase tracking-wide mb-3">Key Features:</h4>
                          {course.features?.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-deep-indigo flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => handleCourseClick(course.id)}
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-matte-navy text-white rounded-full font-semibold hover:bg-deep-indigo transition-all duration-300 w-full"
                      >
                        <span>Learn More & Enroll</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* Success Stories Section */}
        < section id="testimonials" className="section-padding bg-white" >
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-matte-navy mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our alumni who have successfully launched their accounting careers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card p-8 relative"
                >
                  <Quote className="w-8 h-8 text-coral-red/20 absolute top-4 right-4" />
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} - IUFA graduate`}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-matte-navy">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-coral-red">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-gold fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* How It Works Section */}
        < section className="section-padding bg-gradient-to-br from-matte-navy to-deep-indigo text-white" >
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How It Works
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Your journey to a successful accounting career in just 3 simple steps.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Choose Your Course',
                  description: 'Select the course that matches your career goals and current skill level.'
                },
                {
                  step: '02',
                  title: 'Learn & Practice',
                  description: 'Attend live classes, complete hands-on projects, and get mentored by industry experts.'
                },
                {
                  step: '03',
                  title: 'Get Placed',
                  description: 'Leverage our placement support to land your dream job in accounting and finance.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="w-20 h-20 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-coral-red" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section >


        {/* FAQ Section */}
        < section className="section-padding bg-white" >
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-matte-navy mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Got questions? We've got answers. Find everything you need to know about our courses.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full text-left p-6 bg-warm-gray rounded-lg hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span className="font-semibold text-matte-navy">{faq.question}</span>
                    {openFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-coral-red" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-coral-red" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* Contact Section */}
        < section id="contact" className="section-padding bg-matte-navy text-white" >
          <div className="container-fluid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Get in touch with our admissions team. We're here to help you choose the right course for your career goals.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-coral-red" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="opacity-90">+91 7909 111 009</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-coral-red" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="opacity-90">iufaacademy@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-coral-red mt-1" />
                    <div>
                      <p className="font-semibold mb-3">Our Branches</p>
                      <ul className="space-y-2 opacity-90">
                        <li>• Kondotty</li>
                        <li>• Ayikkarapadi</li>
                        <li>• Farook College</li>
                        <li>• Ramanattukara</li>
                        <li className="font-semibold">• Dubai (Corporate Office)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-coral-red" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="opacity-90">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-coral-red"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-coral-red"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-coral-red"
                      required
                    />
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-coral-red">
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.slug} className="text-matte-navy">
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    placeholder="Message (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-coral-red"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-coral-red hover:bg-coral-red/90 text-white font-semibold py-4 rounded-lg transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section >

        <Footer />

        {/* Course Modal */}
        <CourseModal
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={closeModal}
          onApply={() => scrollToSection('#contact')}
        />
      </main>
    </>
  )
}
