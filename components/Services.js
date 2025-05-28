'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Manual Therapy',
    description: 'Hands-on treatment to reduce pain and improve joint mobility.',
    icon: '👐'
  },
  {
    title: 'Sports Injury Rehab',
    description: 'Specialized rehabilitation programs for athletes and sports injuries.',
    icon: '🏃'
  },
  {
    title: 'Post-Surgical Recovery',
    description: 'Comprehensive rehabilitation after surgical procedures.',
    icon: '🩺'
  },
  {
    title: 'Dry Needling',
    description: 'Advanced technique to release muscle tension and reduce pain.',
    icon: '💉'
  },
  {
    title: 'Home Visits',
    description: 'Convenient physiotherapy services in the comfort of your home.',
    icon: '🏠'
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="section-title text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:border-primary hover:border-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 