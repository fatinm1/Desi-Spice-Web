'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Patel',
    role: 'Home Chef',
    image: '/testimonials/priya.jpg',
    content: 'The quality of Unique Desi Spice spices is unmatched! Their turmeric has transformed my cooking and the cardamom is absolutely divine.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Restaurant Owner',
    image: '/testimonials/rajesh.jpg',
    content: 'As a restaurant owner, I need consistent quality. Unique Desi Spice never disappoints. Their saffron is the real deal!',
    rating: 5
  },
  {
    id: 3,
    name: 'Fatima Ahmed',
    role: 'Food Blogger',
    image: '/testimonials/fatima.jpg',
    content: 'I love how Unique Desi Spice sources directly from farmers. The cumin seeds are so aromatic and fresh. Highly recommend!',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-basil-50 via-white to-turmeric-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their Unique Desi Spice experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-unique-desi-spice-200 mb-4" />
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 