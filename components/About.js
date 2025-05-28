'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            {/* Placeholder for profile image */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300" /> */}
            <img className="h-[400px] object-cover" src="https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg" alt="Hero Image" fill  />
          </div>

          <div>
            <h2 className="section-title max-sm:-mt-8">Meet Your Physiotherapist</h2>
            <p className="text-gray-600 mb-6">
              With over 10 years of experience in physiotherapy, I am dedicated to helping patients achieve their optimal physical health and well-being. My approach combines evidence-based techniques with personalized care to ensure the best outcomes for each individual.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="min-w-[48px] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Master's</h3>
                  <p className="text-gray-600">Master's in Physiotherapy At Atal vihari vajpayee medical university lucknow</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="min-w-[48px] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor's</h3>
                  <p className="text-gray-600">Bachelor's of physiotherapy - Amity University noida</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h3 className="font-semibold">Experience</h3>
                  <p className="text-gray-600">10+ Years of Clinical Practice</p>
                </div>
              </div> */}

              <div className="flex items-center gap-3">
                <div className="min-w-[48px] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="font-semibold">Certifications</h3>
                  <p className="text-gray-600">certification in manipulation therapy(CMT), CDCT, Certified dry needling therapist, CIASTM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 