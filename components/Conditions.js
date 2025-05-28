'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const conditions = [
  'Cervical pain and dysfunction',
  'Post operative rehabilitation',
  'TKR/THR rehab',
  'Sciatica',
  'Frozen shoulder',
  'Tennis elbow',
  'Osteoarthritis knee',
  'Plantar fascitis',
  'Rotator cuff injuries',
  'Carpal tunnel syndrome',
  'Stroke',
  'Disc bulge and spine related conditions',
  'Sports injuries rehab',
  'Postural management',
  'Geriatric/ Elderly care',
  'Scoliosis'
]

export default function Conditions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="conditions" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">We Treat</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card bg-gray-50 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✓</span>
                </div>
                <h3 className="font-semibold">{condition}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 