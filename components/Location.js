'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">Location & Hours</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {/* <p className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <span>123 Health Street, Medical District, City, State 12345</span>
                  </p> */}
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <span>contact@physioclinic.com</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>

              {/* <div>
                <h3 className="text-xl font-semibold mb-4">Parking</h3>
                <p className="text-gray-600">
                  Free parking available in our dedicated lot. Accessible parking spaces are available near the entrance.
                </p>
              </div> */}
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden">
              {/* Placeholder for Google Maps iframe */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Google Maps will be embedded here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 