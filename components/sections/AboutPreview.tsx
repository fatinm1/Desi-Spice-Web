'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Users, Award, Leaf } from 'lucide-react'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-turmeric-50 via-white to-basil-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="spice-gradient-text">Our Story</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Unique Desi Spice was born from a deep passion for authentic South Asian flavors and a commitment to bringing the finest spices directly from their source to your kitchen.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We work directly with farmers across Bangladesh to ensure you get the most authentic, fresh, and high-quality spices available.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Timeline/Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Journey</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-unique-desi-spice-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Founded in 2025</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Started with a mission to bring authentic South Asian spices to the world.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-unique-desi-spice-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Direct Sourcing</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Established partnerships with farmers across Bangladesh for direct sourcing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-basil-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Global Reach</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Now serving customers worldwide with premium spices and expert guidance.</p>
                  </div>
                </div>
              </div>

              {/* Origin Map */}
              <div className="mt-8 p-4 bg-gradient-to-r from-unique-desi-spice-50 to-saffron-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-unique-desi-spice-600" />
                  <h4 className="font-semibold text-gray-800 dark:text-white">Sourcing Regions</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-unique-desi-spice-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Chandpur, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-saffron-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-turmeric-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Sylhet, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-basil-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Chittagong, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 