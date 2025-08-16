'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import Link from 'next/link'

const featuredSpices = [
  {
    id: '1',
    name: 'Premium Turmeric',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.8,
    reviews: 124,
    image: '/images/spices/tuemeric.webp',
    description: 'Organic turmeric powder from Chandpur, Bangladesh',
    weight: '100g',
    origin: 'Chandpur, Bangladesh',
    isNew: true,
    discount: 20
  },
  {
    id: '2',
    name: 'Red Chili Powder',
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.9,
    reviews: 89,
    image: '/images/spices/chili.jpg',
    description: 'Premium red chili powder from Dhaka, Bangladesh',
    weight: '100g',
    origin: 'Dhaka, Bangladesh',
    isNew: false,
    discount: 21
  },
  {
    id: '3',
    name: 'Cumin Seeds',
    price: 9.99,
    originalPrice: 12.99,
    rating: 4.7,
    reviews: 156,
    image: '/images/spices/cumin.jpg',
    description: 'Whole cumin seeds from Chandpur, Bangladesh',
    weight: '100g',
    origin: 'Chandpur, Bangladesh',
    isNew: false,
    discount: 25
  },
  {
    id: '4',
    name: 'Black Pepper',
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.6,
    reviews: 203,
    image: '/images/spices/blackpepper.jpeg',
    description: 'Whole black peppercorns from Dhaka, Bangladesh',
    weight: '100g',
    origin: 'Dhaka, Bangladesh',
    isNew: false,
    discount: 20
  }
]

export default function FeaturedSpices() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-saffron-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="spice-gradient-text">Featured Spices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular spices, carefully sourced and selected for their exceptional quality and authentic flavors.
          </p>
        </motion.div>

        {/* Spices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredSpices.map((spice, index) => (
            <motion.div
              key={spice.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={spice.image}
                    alt={spice.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotateY: 5 }}
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {spice.isNew && (
                      <span className="bg-unique-desi-spice-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        NEW
                      </span>
                    )}
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      -{spice.discount}%
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-unique-desi-spice-500 hover:text-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-unique-desi-spice-500 hover:text-white transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{spice.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{spice.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{spice.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-unique-desi-spice-600">${spice.price}</span>
                      <span className="text-sm text-gray-400 line-through">${spice.originalPrice}</span>
                    </div>
                    <span className="text-sm text-gray-500">{spice.weight}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{spice.origin}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{spice.reviews} reviews</span>
                  </div>

                  <button className="w-full mt-4 bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-unique-desi-spice-600 border-2 border-unique-desi-spice-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View All Spices
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 