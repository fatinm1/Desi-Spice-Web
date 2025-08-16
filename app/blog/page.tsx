'use client'

import React from 'react'
import Navigation from '@/components/layout/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: '1',
    title: 'The Art of Spice Blending: Traditional vs Modern Approaches',
    excerpt: 'Discover how traditional spice blending techniques compare to modern methods, and learn the secrets of creating perfect spice combinations.',
    author: 'Unique Desi Spice Team',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Cooking Tips',
    image: '/blog/spice-blending.jpg'
  },
  {
    id: '2',
    title: 'Saffron: The Golden Spice of Kashmir',
    excerpt: 'Explore the fascinating history and cultivation of saffron in the beautiful valleys of Kashmir, and learn why it\'s considered the king of spices.',
    author: 'Unique Desi Spice Team',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Spice Stories',
    image: '/blog/saffron-kashmir.jpg'
  },
  {
    id: '3',
    title: 'Organic vs Conventional Spices: What\'s the Difference?',
    excerpt: 'Understand the benefits of choosing organic spices and how they impact both your health and the environment.',
    author: 'Unique Desi Spice Team',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Health & Wellness',
    image: '/blog/organic-spices.jpg'
  }
]

const categories = ['All', 'Recipes', 'Spice Guide', 'Health', 'Tips & Tricks', 'Behind the Scenes']

export default function BlogPage() {
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
              <span className="spice-gradient-text">Unique Desi Spice Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover recipes, spice guides, and culinary insights from our expert team.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            {blogPosts.slice(0, 1).map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-unique-desi-spice-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-4">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <button className="bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-unique-desi-spice-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-unique-desi-spice-600 dark:hover:text-unique-desi-spice-400 rounded-full font-medium transition-colors border border-gray-200 dark:border-gray-600"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-unique-desi-spice-600 dark:group-hover:text-unique-desi-spice-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <button className="text-unique-desi-spice-600 dark:text-unique-desi-spice-400 hover:text-unique-desi-spice-700 dark:hover:text-unique-desi-spice-300 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  )
} 