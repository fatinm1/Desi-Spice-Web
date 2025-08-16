'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/components/providers/CartProvider'
import toast from 'react-hot-toast'

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
    category: 'Powders',
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
    category: 'Powders',
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
    category: 'Seeds',
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
    category: 'Whole Spices',
    isNew: false,
    discount: 20
  }
]

export default function FeaturedSpices() {
  const { addItem } = useCart()

  const handleAddToCart = (spice: any) => {
    addItem({
      id: spice.id,
      name: spice.name,
      price: spice.price,
      originalPrice: spice.originalPrice,
      image: spice.image,
      weight: spice.weight,
      origin: spice.origin,
      category: spice.category
    })
    toast.success(`${spice.name} added to cart!`)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white to-saffron-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                    <button className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(spice.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({spice.reviews})
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
                    {spice.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                    {spice.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-unique-desi-spice-600 dark:text-unique-desi-spice-400">
                        ${spice.price}
                      </span>
                      {spice.originalPrice && (
                        <span className="text-gray-500 line-through">
                          ${spice.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {spice.weight}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {spice.origin}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {spice.category}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={() => handleAddToCart(spice)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 hover:bg-unique-desi-spice-50 dark:hover:bg-unique-desi-spice-900/20 text-unique-desi-spice-600 dark:text-unique-desi-spice-400 border-2 border-unique-desi-spice-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View All Spices
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 