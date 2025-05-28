'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Back Pain: Causes and Prevention',
    excerpt: 'Learn about the common causes of back pain and effective prevention strategies to maintain a healthy spine.',
    date: 'March 15, 2024',
    author: 'Dr. John Smith',
    slug: 'understanding-back-pain',
    image: 'https://premiaspine.com/wp-content/uploads/2024/06/female-back-pain-chart-1024x853.png',
    content: `
      Back pain is one of the most common health issues affecting people worldwide. Understanding its causes and prevention methods is crucial for maintaining a healthy spine.

      ## Common Causes of Back Pain

      1. Poor Posture
      - Sitting for long periods
      - Incorrect lifting techniques
      - Slouching while standing

      2. Muscle Strain
      - Overexertion
      - Sudden movements
      - Heavy lifting

      3. Structural Problems
      - Herniated discs
      - Arthritis
      - Osteoporosis

      ## Prevention Tips

      1. Maintain Good Posture
      - Keep your back straight while sitting
      - Use ergonomic furniture
      - Take regular breaks from sitting

      2. Exercise Regularly
      - Core strengthening exercises
      - Flexibility training
      - Low-impact cardio

      3. Lifestyle Changes
      - Maintain a healthy weight
      - Quit smoking
      - Stay hydrated

      ## When to Seek Professional Help

      If you experience any of the following, it's important to consult a physiotherapist:
      - Persistent pain lasting more than a few weeks
      - Pain that radiates down the legs
      - Numbness or tingling
      - Difficulty with daily activities

      Remember, early intervention can prevent chronic back problems and improve your quality of life.
    `
  },
  {
    id: 2,
    title: 'The Role of Exercise in Injury Recovery',
    excerpt: 'Discover how proper exercise can accelerate your recovery process and prevent future injuries.',
    date: 'March 10, 2024',
    author: 'Dr. Sarah Johnson',
    slug: 'exercise-injury-recovery',
    image: 'https://i0.wp.com/www.componentfitness.co.in/blogs/wp-content/uploads/2024/05/The-Role-of-Stretching-in-Injury-Prevention-and-Recovery.webp?fit=1078%2C700&ssl=1',
    content: `
      Exercise plays a crucial role in the recovery process after an injury. Understanding how to properly incorporate exercise into your recovery plan can significantly improve outcomes.

      ## Benefits of Exercise During Recovery

      1. Improved Blood Flow
      - Enhances healing
      - Reduces inflammation
      - Promotes tissue repair

      2. Muscle Strengthening
      - Prevents muscle atrophy
      - Improves joint stability
      - Enhances overall function

      3. Range of Motion
      - Maintains flexibility
      - Prevents stiffness
      - Improves mobility

      ## Types of Recovery Exercises

      1. Range of Motion Exercises
      - Gentle stretching
      - Joint mobility exercises
      - Controlled movements

      2. Strengthening Exercises
      - Progressive resistance
      - Bodyweight exercises
      - Functional movements

      3. Balance and Coordination
      - Stability exercises
      - Proprioception training
      - Core strengthening

      ## Important Considerations

      Always consult with your physiotherapist before starting any exercise program during recovery. They can:
      - Assess your condition
      - Design a personalized program
      - Monitor your progress
      - Adjust exercises as needed

      Remember, recovery is a gradual process. Be patient and consistent with your exercise routine.
    `
  },
  {
    id: 3,
    title: 'Tips for Maintaining Good Posture at Work',
    excerpt: 'Essential tips and exercises to maintain proper posture and prevent work-related musculoskeletal issues.',
    date: 'March 5, 2024',
    author: 'Dr. Michael Brown',
    slug: 'maintaining-good-posture',
    image: 'https://www.hss.edu/images/articles/work-from-home-sitting-standing-table-counter-03-large.jpg',
    content: `
      Maintaining good posture at work is essential for preventing musculoskeletal problems and improving overall well-being. Here are some practical tips to help you maintain proper posture throughout your workday.

      ## Ergonomic Setup

      1. Chair Position
      - Feet flat on the floor
      - Knees at 90 degrees
      - Back supported
      - Armrests at elbow height

      2. Desk Setup
      - Monitor at eye level
      - Keyboard at elbow height
      - Mouse within easy reach
      - Documents at eye level

      3. Lighting
      - Adequate brightness
      - No screen glare
      - Natural light when possible

      ## Posture Tips

      1. Sitting Position
      - Keep back straight
      - Shoulders relaxed
      - Head aligned with spine
      - Take regular breaks

      2. Standing Position
      - Weight evenly distributed
      - Knees slightly bent
      - Core engaged
      - Shoulders back

      3. Movement
      - Change positions frequently
      - Stretch regularly
      - Walk around periodically
      - Stay hydrated

      ## Exercises for Better Posture

      1. Stretching
      - Neck stretches
      - Shoulder rolls
      - Back stretches
      - Hip flexor stretches

      2. Strengthening
      - Core exercises
      - Back exercises
      - Shoulder exercises
      - Glute exercises

      Remember, good posture is a habit that needs to be developed and maintained. Start implementing these tips today for a healthier tomorrow.
    `
  }
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`} as={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-primary font-medium hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 