'use client'

import React from 'react'
import Navigation from '@/components/layout/Navigation'
import { motion } from 'framer-motion'
import { Users, Award, MapPin, Leaf, Heart, Globe, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 bg-gradient-to-br from-white to-saffron-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="spice-gradient-text">About Unique Desi Spice</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the story behind our passion for authentic South Asian spices
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Unique Desi Spice, we believe that every dish tells a story. Our mission is to preserve
                and share the authentic flavors of South Asian cuisine while supporting sustainable farming
                practices in Bangladesh.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We work directly with farmers and artisans who have been cultivating these precious
                spices for generations, ensuring that every product in your kitchen carries the
                authentic taste and tradition of South Asian cuisine.
              </p>
            </div>
            <div className="bg-gradient-to-br from-unique-desi-spice-100 to-saffron-100 dark:from-unique-desi-spice-900/30 dark:to-saffron-900/30 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-unique-desi-spice-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Authentic</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">True to tradition</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Organic</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Natural & pure</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-turmeric-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Global</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Worldwide reach</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-basil-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Premium</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Highest quality</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-gray-800 dark:text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-unique-desi-spice-100 dark:bg-unique-desi-spice-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-unique-desi-spice-600 dark:text-unique-desi-spice-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Supporting local farmers and preserving traditional farming practices.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-saffron-600 dark:text-saffron-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quality</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintaining the highest standards in sourcing, processing, and delivery.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-turmeric-100 dark:bg-turmeric-900/30 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-turmeric-600 dark:text-turmeric-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Authenticity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensuring every spice carries the true essence of its origin.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-unique-desi-spice-100 dark:bg-unique-desi-spice-900/30 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-unique-desi-spice-600 dark:text-unique-desi-spice-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Direct Sourcing</h4>
                    <p className="text-gray-600 dark:text-gray-300">We work directly with farmers in Bangladesh to ensure quality and fair compensation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turmeric-100 dark:bg-turmeric-900/30 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-turmeric-600 dark:text-turmeric-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Organic Certified</h4>
                    <p className="text-gray-600 dark:text-gray-300">All our spices are certified organic with no artificial additives or preservatives.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Premium Quality</h4>
                    <p className="text-gray-600 dark:text-gray-300">Every batch is tested for purity, freshness, and flavor before reaching you.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Commitment</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-basil-100 dark:bg-basil-900/30 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-basil-600 dark:text-basil-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Sustainability</h4>
                    <p className="text-gray-600 dark:text-gray-300">We support sustainable farming practices and environmental conservation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turmeric-100 dark:bg-turmeric-900/30 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-turmeric-600 dark:text-turmeric-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Food Safety</h4>
                    <p className="text-gray-600 dark:text-gray-300">We maintain the highest food safety standards throughout our supply chain.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Community Support</h4>
                    <p className="text-gray-600 dark:text-gray-300">We invest in local communities and support educational initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ready to Experience Authentic Flavors?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Join thousands of customers who trust us for their spice needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Shop Now
              </button>
              <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-unique-desi-spice-600 dark:text-unique-desi-spice-400 border-2 border-unique-desi-spice-500 dark:border-unique-desi-spice-400 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 