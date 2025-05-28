'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Back Pain: Causes and Prevention',
    date: 'March 15, 2024',
    author: 'Dr. John Smith',
    slug: 'understanding-back-pain',
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
    `,
    image: 'https://premiaspine.com/wp-content/uploads/2024/06/female-back-pain-chart-1024x853.png'
  },
  {
    id: 2,
    title: 'The Role of Exercise in Injury Recovery',
    date: 'March 10, 2024',
    author: 'Dr. Sarah Johnson',
    slug: 'exercise-injury-recovery',
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
    `,
    image: 'https://i0.wp.com/www.componentfitness.co.in/blogs/wp-content/uploads/2024/05/The-Role-of-Stretching-in-Injury-Prevention-and-Recovery.webp?fit=1078%2C700&ssl=1'
  },
  {
    id: 3,
    title: 'Tips for Maintaining Good Posture at Work',
    date: 'March 5, 2024',
    author: 'Dr. Michael Brown',
    slug: 'maintaining-good-posture',
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
    `,
    image: 'https://www.hss.edu/images/articles/work-from-home-sitting-standing-table-counter-03-large.jpg'
  }
]

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace('##', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={index} className="list-disc ml-6 mb-4">
                      <li>{paragraph.replace('-', '')}</li>
                    </ul>
                  )
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />
                }
                return <p key={index} className="mb-4">{paragraph}</p>
              })}
            </div>
          </article>
        </motion.div>
      </div>
    </main>
  )
} 