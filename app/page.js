'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Conditions from '@/components/Conditions'
import Blog from '@/components/Blog'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import FloatingCTA from '@/components/FloatingCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Conditions />
      <Blog />
      <Location />
      <Contact />
      <FloatingCTA />
      <Footer />
    </main>
  )
}
