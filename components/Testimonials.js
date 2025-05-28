'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "The treatment I received was exceptional. My chronic back pain has significantly improved, and I'm back to my daily activities.",
    name: "Sarah Johnson",
    rating: 5
  },
  {
    quote: "Professional, knowledgeable, and caring. The physiotherapist took time to understand my sports injury and provided excellent rehabilitation.",
    name: "Michael Chen",
    rating: 5
  },
  {
    quote: "After my knee surgery, the rehabilitation program was perfectly tailored to my needs. I'm grateful for the support throughout my recovery.",
    name: "Emma Thompson",
    rating: 5
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">What Our Patients Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="card bg-gray-50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 