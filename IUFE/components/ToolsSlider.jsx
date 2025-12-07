'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ToolsSlider() {
  const originalTools = [
    { name: 'Excel', logo: '/tools/excel.svg' },
    { name: 'SAP', logo: '/tools/sap-logo-svg.svg' },
    { name: 'Tally', logo: '/tools/tally-logo-black.svg' },
    { name: 'Zoho', logo: '/tools/zoho-logo-web.svg' },
  ]
  
  // Create multiple duplicates for seamless infinite scroll
  const tools = [...originalTools, ...originalTools, ...originalTools]

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-fluid">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Tools & Software We Teach
          </h3>
          <p className="text-gray-500">
            Master industry-standard accounting software and tools
          </p>
        </div>
        
        {/* Animated Slider */}
        <div className="relative overflow-hidden group">
          <motion.div
            className="flex items-center space-x-24"
            animate={{
              x: [0, -((120 + 96) * originalTools.length)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {tools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale group-hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={tool.logo}
                  alt={`${tool.name} Logo`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Fade Effect - Left Side */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          
          {/* Fade Effect - Right Side */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  )
}
