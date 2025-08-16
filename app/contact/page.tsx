'use client'

import React from 'react'
import Navigation from '@/components/layout/Navigation'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Twitter } from 'lucide-react'

const faqs = [
  {
    question: "What are your shipping policies?",
    answer: "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, while express shipping (1-2 days) is available for an additional fee."
  },
  {
    question: "Are your spices organic?",
    answer: "Yes, all our spices are certified organic and sourced directly from farmers who follow sustainable farming practices."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused products in their original packaging. Contact our customer service team to initiate a return."
  },
  {
    question: "How do I store my spices?",
    answer: "Store spices in a cool, dry place away from direct sunlight. We recommend using airtight containers and consuming within 1-2 years for optimal flavor."
  },
  {
    question: "Can I get bulk discounts?",
    answer: "Yes, we offer bulk pricing for orders over $200. Contact us for custom quotes on large orders."
  }
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 bg-gradient-to-br from-white to-saffron-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="spice-gradient-text">Contact Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about our spices? We're here to help! Reach out to our team for expert advice and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-800 dark:text-white">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-unique-desi-spice-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-unique-desi-spice-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-unique-desi-spice-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-unique-desi-spice-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="w-full bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-800 dark:text-white">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-unique-desi-spice-100 dark:bg-unique-desi-spice-900/30 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-unique-desi-spice-600 dark:text-unique-desi-spice-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">badrulbdmojumder@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-turmeric-100 dark:bg-turmeric-900/30 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-turmeric-600 dark:text-turmeric-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">443-980-2069</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Support */}
              <div className="bg-gradient-to-br from-unique-desi-spice-500 to-unique-desi-spice-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Live Chat Support</h3>
                    <p className="text-unique-desi-spice-100">Get instant help from our team</p>
                  </div>
                </div>
                <button className="w-full bg-white text-unique-desi-spice-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Start Chat
                </button>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-gray-800 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
} 