'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/components/providers/AuthProvider'
import CartDropdown from './CartDropdown'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-unique-desi-spice-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <span className="text-xl font-bold text-white">
              Unique Desi Spice
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-unique-desi-spice-300 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <CartDropdown />
            
            {user ? (
              <div className="flex items-center gap-2">
                <Link href="/account" className="flex items-center gap-2 text-white hover:text-unique-desi-spice-300 transition-colors">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-white hover:text-unique-desi-spice-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/auth/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  Sign In
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-unique-desi-spice-300 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200/20"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:text-unique-desi-spice-300 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200/20">
                  {user ? (
                    <div className="space-y-3">
                      <Link
                        href="/account"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-white hover:text-unique-desi-spice-300 font-medium transition-colors"
                      >
                        Account
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          setIsMenuOpen(false)
                        }}
                        className="block text-white hover:text-unique-desi-spice-300 font-medium transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link href="/auth/login">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                      >
                        Sign In
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 