'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-unique-desi-spice-500 to-saffron-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Stay Spiced Up!
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Subscribe to our newsletter for exclusive recipes, spice tips, and special offers. 
            Get 10% off your first order when you sign up!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-unique-desi-spice-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          {isSubscribed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-white/90"
            >
              Thanks for subscribing! Check your email for your discount code.
            </motion.div>
          )}

          <p className="text-white/70 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 