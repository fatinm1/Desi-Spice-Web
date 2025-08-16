'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  quantity: number
  image: string
  weight: string
  origin: string
  category: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
  shipping: number
  tax: number
  total: number
  discountCode: string
  discountAmount: number
  setDiscountCode: (code: string) => void
  applyDiscount: () => void
  isDiscountApplied: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [discountCode, setDiscountCode] = useState('')
  const [discountAmount, setDiscountAmount] = useState(0)
  const [isDiscountApplied, setIsDiscountApplied] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('unique_desi_spice_cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setItems(parsedCart)
      } catch (error) {
        console.error('Error parsing saved cart:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('unique_desi_spice_cart', JSON.stringify(items))
  }, [items])

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === newItem.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    setDiscountCode('')
    setDiscountAmount(0)
    setIsDiscountApplied(false)
  }

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  // Free shipping on orders over $50
  const shipping = subtotal >= 50 ? 0 : 5.99
  
  // 8% tax rate
  const tax = (subtotal + shipping) * 0.08
  
  // Apply discount if code is valid
  const total = subtotal + shipping + tax - discountAmount

  const applyDiscount = () => {
    // Simple discount logic - you can expand this
    if (discountCode.toLowerCase() === 'welcome10') {
      setDiscountAmount(subtotal * 0.10)
      setIsDiscountApplied(true)
    } else if (discountCode.toLowerCase() === 'spice20') {
      setDiscountAmount(subtotal * 0.20)
      setIsDiscountApplied(true)
    } else {
      setDiscountAmount(0)
      setIsDiscountApplied(false)
    }
  }

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    shipping,
    tax,
    total,
    discountCode,
    discountAmount,
    setDiscountCode,
    applyDiscount,
    isDiscountApplied,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 