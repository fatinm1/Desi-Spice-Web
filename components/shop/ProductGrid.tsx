'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Search } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: '1',
    name: 'Premium Turmeric Powder',
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
    discount: 20,
    inStock: true
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
    discount: 21,
    inStock: true
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
    discount: 25,
    inStock: true
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
    discount: 20,
    inStock: true
  }
]

export default function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search spices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-unique-desi-spice-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-unique-desi-spice-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    -{product.discount}%
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
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-unique-desi-spice-600 dark:text-unique-desi-spice-400">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{product.weight}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{product.origin}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{product.reviews} reviews</span>
                </div>

                <button className="w-full bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 