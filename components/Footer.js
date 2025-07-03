'use client'

import { Link } from 'react-scroll'
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaFacebook className="w-6 h-6" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram className="w-6 h-6" />, href: "https://instagram.com", label: "Instagram" },
    // { icon: <FaWhatsapp className="w-6 h-6" />, href: "https://wa.me/your-number", label: "WhatsApp" },
    { icon: <FaLinkedin className="w-6 h-6" />, href: "https://linkedin.com", label: "LinkedIn" }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-18 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold font-playfair px-2">P&P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-playfair text-white">
                  Pulse & Posture
                </span>
                <span className="text-sm text-gray-300">
                  Physiotherapy
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mt-4">
              Professional physiotherapy services dedicated to improving your quality of life through expert care and personalized treatment plans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-playfair mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold font-playfair mb-6">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contact Info</h4>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: contact@pulseposture.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Pulse & Posture Physiotherapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 