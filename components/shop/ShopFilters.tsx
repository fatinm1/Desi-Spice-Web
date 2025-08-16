'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, ChevronDown } from 'lucide-react'

const categories = ['All', 'Powders', 'Whole Spices', 'Seeds', 'Premium']
const priceRanges = [
  { label: 'All Prices', min: 0, max: 1000 },
  { label: 'Under $10', min: 0, max: 10 },
  { label: '$10 - $25', min: 10, max: 25 },
  { label: '$25 - $50', min: 25, max: 50 },
  { label: 'Over $50', min: 50, max: 1000 }
]

export default function ShopFilters() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices')
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Filters</h3>
        <Filter className="w-5 h-5 text-gray-500" />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-unique-desi-spice-500 border-gray-300 focus:ring-unique-desi-spice-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                value={range.label}
                checked={selectedPriceRange === range.label}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-4 h-4 text-unique-desi-spice-500 border-gray-300 focus:ring-unique-desi-spice-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setSelectedCategory('All')
          setSelectedPriceRange('All Prices')
        }}
        className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Clear All Filters
      </motion.button>
    </div>
  )
} 