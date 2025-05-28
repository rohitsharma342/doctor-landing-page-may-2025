'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const images = [
  {
    id: 1,
    src: 'https://media.istockphoto.com/id/805089584/photo/just-relax-ill-take-care-of-the-rest.jpg?s=612x612&w=0&k=20&c=QRmBhp-E_v8rFStb7hkgHmcz2ZrsAW2AdWcZxINhsvc=',
    alt: 'Physiotherapy Treatment'
  },
  {
    id: 2,
    src: 'https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGh5c2lvdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Exercise Therapy'
  },
  {
    id: 3,
    src: 'https://physio-shop.com.au/wp-content/uploads/2019/11/Physiotherapy-Treatments-gallery-1.jpg',
    alt: 'Manual Therapy'
  },
  {
    id: 4,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVhOtsOaeshVFFZvgYBrEg2iMDYELRQNIKQ&s',
    alt: 'Modern Equipment'
  },
  {
    id: 5,
    src: 'https://media.istockphoto.com/id/1384499192/photo/young-physiotherapist-exercising-with-senior-patient-in-a-physic-room.jpg?s=612x612&w=0&k=20&c=shM0Ml-TM9pKFOqtmceIFylGzHjfrH6ccsA4OnKy1lU=',
    alt: 'Consultation Room'
  },
  {
    id: 6,
    src: 'https://img.freepik.com/premium-photo/physiotherapist-working-with-male-patient-rehabilitation-center_392895-36725.jpg?semt=ais_hybrid&w=740',
    alt: 'Treatment Area'
  }
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">Our Clinic</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 