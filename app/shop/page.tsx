'use client'

import React from 'react'
import Navigation from '@/components/layout/Navigation'
import ProductGrid from '@/components/shop/ProductGrid'
import ShopFilters from '@/components/shop/ShopFilters'

export default function ShopPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 bg-gradient-to-br from-white to-saffron-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="spice-gradient-text">Shop Our Spices</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our premium collection of authentic South Asian spices, carefully sourced and selected for their exceptional quality.
            </p>
          </div>

          {/* Filters and Products */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <ShopFilters />
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 