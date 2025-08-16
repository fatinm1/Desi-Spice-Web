'use client'

import React, { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import { motion } from 'framer-motion'
import { useCart } from '@/components/providers/CartProvider'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Package, Truck, CreditCard, Tag, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function CartPage() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    totalItems, 
    subtotal, 
    shipping, 
    tax, 
    total,
    discountCode,
    discountAmount,
    setDiscountCode,
    applyDiscount,
    isDiscountApplied
  } = useCart()

  const [discountInput, setDiscountInput] = useState('')

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      toast.success('Item removed from cart')
    } else {
      updateQuantity(id, newQuantity)
      toast.success('Cart updated')
    }
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id)
    toast.success('Item removed from cart')
  }

  const handleClearCart = () => {
    clearCart()
    toast.success('Cart cleared')
  }

  const handleApplyDiscount = () => {
    if (discountInput.trim()) {
      setDiscountCode(discountInput.trim())
      applyDiscount()
      if (discountAmount > 0) {
        toast.success(`Discount applied! Saved $${discountAmount.toFixed(2)}`)
      } else {
        toast.error('Invalid discount code')
      }
    }
  }

  if (items.length === 0) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-16 bg-gradient-to-br from-white to-saffron-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="w-24 h-24 bg-unique-desi-spice-100 dark:bg-unique-desi-spice-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-unique-desi-spice-600 dark:text-unique-desi-spice-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Your Cart is Empty
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Looks like you haven't added any spices to your cart yet. Start shopping to discover our premium collection!
              </p>
              
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Start Shopping
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </main>
      </>
    )
  }

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="spice-gradient-text">Shopping Cart</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Cart Items
                  </h2>
                  <button
                    onClick={handleClearCart}
                    className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-xl"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {item.weight} • {item.origin}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-unique-desi-spice-600 dark:text-unique-desi-spice-400">
                            ${item.price.toFixed(2)}
                          </p>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <p className="text-sm text-gray-500 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>
                        
                        <span className="w-12 text-center font-semibold text-gray-800 dark:text-white">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>
                      </div>

                      {/* Total Price */}
                      <div className="text-right min-w-0">
                        <p className="font-bold text-gray-800 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Order Summary
                </h2>

                {/* Discount Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Discount code"
                      value={discountInput}
                      onChange={(e) => setDiscountInput(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <button
                      onClick={handleApplyDiscount}
                      className="px-4 py-2 bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white rounded-lg font-medium transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {isDiscountApplied && (
                    <div className="flex items-center gap-2 mt-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Discount applied!</span>
                    </div>
                  )}
                </div>

                {/* Summary Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 dark:text-green-400" : ""}>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white py-4 rounded-xl font-semibold text-lg transition-colors mb-4">
                  Proceed to Checkout
                </button>

                {/* Continue Shopping */}
                <Link href="/shop">
                  <button className="w-full border-2 border-unique-desi-spice-500 text-unique-desi-spice-500 hover:bg-unique-desi-spice-500 hover:text-white py-4 rounded-xl font-semibold text-lg transition-colors">
                    Continue Shopping
                  </button>
                </Link>

                {/* Shipping Info */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="w-5 h-5 text-unique-desi-spice-500" />
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {shipping === 0 ? "Free Shipping" : "Standard Shipping"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {shipping === 0 
                      ? "Free shipping on orders over $50! Standard delivery 3-5 business days."
                      : "Add ${(50 - subtotal).toFixed(2)} more for free shipping. Standard delivery 3-5 business days."
                    }
                  </p>
                </div>

                {/* Payment Info */}
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-5 h-5 text-unique-desi-spice-500" />
                    <span className="font-semibold text-gray-800 dark:text-white">Secure Payment</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We accept all major credit cards and PayPal. Your payment is secure and encrypted.
                  </p>
                </div>

                {/* Discount Codes Info */}
                <div className="mt-4 p-4 bg-unique-desi-spice-50 dark:bg-unique-desi-spice-900/20 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Tag className="w-5 h-5 text-unique-desi-spice-500" />
                    <span className="font-semibold text-gray-800 dark:text-white">Discount Codes</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Try: <span className="font-mono bg-white dark:bg-gray-700 px-2 py-1 rounded">WELCOME10</span> for 10% off or <span className="font-mono bg-white dark:bg-gray-700 px-2 py-1 rounded">SPICE20</span> for 20% off
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
