'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  {
    number: 4,
    suffix: '+',
    label: 'Years of Experience',
    icon: '⭐'
  },
  {
    number: 1000,
    suffix: '+',
    label: 'Patients Treated',
    icon: '👥'
  }
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counts, setCounts] = useState([0, 0])

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 steps for smooth animation
      const stepDuration = duration / steps

      const intervals = stats.map((stat, index) => {
        const target = stat.number
        const increment = target / steps
        let current = 0

        return setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(intervals[index])
          }
          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(current)
            return newCounts
          })
        }, stepDuration)
      })

      return () => intervals.forEach(interval => clearInterval(interval))
    }
  }, [isInView])

  return (
    <section className="py-16 bg-primary max-sm:mt-40">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                <span className="text-4xl">{stat.icon}</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="text-xl text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 