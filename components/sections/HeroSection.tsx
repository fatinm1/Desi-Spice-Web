'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SpiceParticles from '@/components/3d/SpiceParticles'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-saffron-50 via-white to-turmeric-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Particles */}
      <SpiceParticles />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-unique-desi-spice-500/20 via-transparent to-saffron-500/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-gray-800/50 to-transparent" />
      
      {/* Floating Spice Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full opacity-20 blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-turmeric-400 to-turmeric-600 rounded-full opacity-20 blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-chili-400 to-chili-600 rounded-full opacity-20 blur-sm"
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-transparent to-unique-desi-spice-500 rounded-full"></div>
                <div className="w-2 h-2 bg-unique-desi-spice-500 rounded-full"></div>
                <div className="w-1 h-8 bg-gradient-to-b from-unique-desi-spice-500 to-transparent rounded-full"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight"
            >
              <span className="spice-gradient-text relative">
                Unique Desi Spice
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-unique-desi-spice-500 to-transparent"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-10 font-medium tracking-wide"
            >
              Flavor from the Roots
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Discover authentic South Asian spices sourced directly from the finest regions. 
              Premium quality turmeric, cumin, cardamom, and more.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-unique-desi-spice-500 to-unique-desi-spice-600 hover:from-unique-desi-spice-600 hover:to-unique-desi-spice-700 text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ShoppingBag className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Scroll to the bottom where SpiceBot is located
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
                });
                // Add a small delay and then trigger a click on the SpiceBot button
                setTimeout(() => {
                  const spiceBotButton = document.querySelector('[data-spicebot-button]');
                  if (spiceBotButton instanceof HTMLElement) {
                    spiceBotButton.click();
                  }
                }, 1000);
              }}
              className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-unique-desi-spice-600 dark:text-unique-desi-spice-400 border-2 border-unique-desi-spice-500 dark:border-unique-desi-spice-400 px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Talk to SpiceBot
            </motion.button>
          </motion.div>

          {/* Enhanced Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-saffron-100 to-saffron-200 dark:from-saffron-900/30 dark:to-saffron-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-saffron-600 dark:text-saffron-400 text-2xl">🌿</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">Premium Quality</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sourced from the finest regions</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-turmeric-100 to-turmeric-200 dark:from-turmeric-900/30 dark:to-turmeric-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-turmeric-600 dark:text-turmeric-400 text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">Fast Delivery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Free shipping on orders over $50</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-basil-100 to-basil-200 dark:from-basil-900/30 dark:to-basil-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-basil-600 dark:text-basil-400 text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">AI Assistant</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Get expert spice advice anytime</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Spice Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-16 h-16 bg-saffron-200 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-10 w-12 h-12 bg-turmeric-200 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-20 w-10 h-10 bg-chili-200 rounded-full opacity-60"
      />
    </section>
  )
} 