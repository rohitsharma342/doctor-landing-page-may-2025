'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 ">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-sm:mt-40">
              Relieve Pain. Restore Movement. Regain Life.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert physiotherapy services to help you recover from injuries, manage chronic pain, and improve your quality of life.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-primary inline-block cursor-pointer"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[380px]"
          >
            <div className="absolute inset-0 bg-blue-200 rounded-2xl overflow-hidden">
              <img 
                src="https://painhero.ca/wp-content/uploads/PainHero.ca-physiotherapy-canada-main-bg-.jpg" 
                alt="Hero Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 