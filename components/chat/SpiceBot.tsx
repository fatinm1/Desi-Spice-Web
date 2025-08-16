'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function SpiceBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm SpiceBot, your AI assistant. Ask me anything about our spices, recipes, or company!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Company & About Questions
    if (input.includes('company') || input.includes('about') || input.includes('who are you') || input.includes('founded')) {
      return "Unique Desi Spice was founded in 2025 with a mission to bring authentic South Asian spices to the world. We work directly with farmers across Bangladesh to ensure the highest quality and freshest spices available."
    }
    
    if (input.includes('bangladesh') || input.includes('sourcing') || input.includes('farmers') || input.includes('origin')) {
      return "We source our spices directly from farmers in Bangladesh, specifically from regions like Chandpur, Dhaka, Sylhet, and Chittagong. This direct sourcing ensures quality, freshness, and fair compensation for our farming partners."
    }
    
    if (input.includes('mission') || input.includes('vision') || input.includes('goal')) {
      return "Our mission is to preserve and share the authentic flavors of South Asian cuisine while supporting sustainable farming practices in Bangladesh. We want to make premium spices accessible to home cooks and professional chefs worldwide."
    }
    
    // Specific Spice Questions
    if (input.includes('turmeric') || input.includes('haldi')) {
      return "Our turmeric is 100% organic and sourced from Chandpur, Bangladesh. It's rich in curcumin and perfect for cooking, health drinks, and skincare. Available in powder form. Great for curries, rice dishes, and golden milk!"
    }
    
    if (input.includes('cardamom') || input.includes('elaichi')) {
      return "Our cardamom comes from Dhaka, Bangladesh. We offer both green and black varieties. Green cardamom is sweeter and perfect for desserts, while black is more intense for savory dishes. Essential for biryani and chai!"
    }
    
    if (input.includes('cumin') || input.includes('jeera')) {
      return "Our cumin is sourced from Chandpur, Bangladesh. It's known for its digestive properties and adds a warm, earthy flavor to dishes. Available whole or ground. Perfect for tempering and spice blends!"
    }
    
    if (input.includes('black pepper') || input.includes('kali mirch')) {
      return "Our black pepper comes from Dhaka, Bangladesh. It's freshly ground and has a robust, spicy flavor. Essential for seasoning and adding heat to any dish. Available whole or ground!"
    }
    
    if (input.includes('red chili') || input.includes('lal mirch')) {
      return "Our red chili powder is sourced from Dhaka, Bangladesh. It's made from premium red chilies and adds the perfect amount of heat to your dishes. Great for curries, marinades, and spice rubs!"
    }
    
    if (input.includes('organic') || input.includes('natural') || input.includes('certified')) {
      return "All our spices are certified organic and sourced directly from farmers across Bangladesh. We maintain strict quality standards and never use artificial preservatives or additives. Every batch is tested for purity!"
    }
    
    // Recipe & Cooking Questions
    if (input.includes('biryani') || input.includes('rice')) {
      return "For biryani, I recommend our premium basmati rice with a blend of cardamom, cinnamon, and bay leaves. Our 'Biryani Masala' mix is perfect for authentic flavor! Use our whole spices for the best results."
    }
    
    if (input.includes('curry') || input.includes('masala')) {
      return "For authentic curries, you'll need our turmeric, cumin, coriander, and red chili powder. Our spices are ground fresh and will give your curries that authentic South Asian flavor. Start with a small amount and adjust to taste!"
    }
    
    if (input.includes('chai') || input.includes('tea')) {
      return "For perfect chai, use our green cardamom, cinnamon, ginger, and black pepper. The cardamom adds sweetness while the black pepper gives it a warming kick. Our spices will make your chai taste like it's from a traditional tea stall!"
    }
    
    if (input.includes('recipe') || input.includes('cook') || input.includes('how to')) {
      return "I'd love to help with recipes! What type of cuisine are you interested in? I can suggest spice combinations for Indian, Middle Eastern, or fusion dishes. Just tell me what you want to cook!"
    }
    
    if (input.includes('marinade') || input.includes('rub')) {
      return "For meat marinades, try our red chili powder, turmeric, cumin, and black pepper. For fish, use our turmeric and black pepper. Our spices are perfect for creating flavorful rubs and marinades!"
    }
    
    // Health & Benefits Questions
    if (input.includes('health') || input.includes('benefits') || input.includes('medicinal')) {
      return "Our spices offer many health benefits! Turmeric has anti-inflammatory properties, cumin aids digestion, black pepper enhances nutrient absorption, and cardamom is great for digestion. Always consult a healthcare provider for medical advice."
    }
    
    if (input.includes('digestion') || input.includes('stomach')) {
      return "Our cumin and cardamom are excellent for digestion. Cumin helps with bloating and gas, while cardamom soothes the stomach. Try adding them to your meals or making a simple digestive tea!"
    }
    
    if (input.includes('immunity') || input.includes('cold')) {
      return "Our turmeric is great for immunity! It contains curcumin which has powerful anti-inflammatory properties. Try our golden milk recipe with turmeric, black pepper, and warm milk for a natural immunity boost!"
    }
    
    // Storage & Freshness Questions
    if (input.includes('storage') || input.includes('store') || input.includes('freshness') || input.includes('expiry')) {
      return "Store our spices in airtight containers in a cool, dark place away from heat and sunlight. Whole spices last longer than ground ones. Our spices are packed fresh and have a shelf life of 2-3 years when stored properly!"
    }
    
    if (input.includes('grind') || input.includes('whole vs ground')) {
      return "Whole spices retain their flavor longer and can be ground fresh when needed. Ground spices are convenient but lose flavor faster. We recommend buying whole spices for long-term storage and grinding them as needed!"
    }
    
    // Shipping & Delivery Questions
    if (input.includes('shipping') || input.includes('delivery') || input.includes('how long')) {
      return "We offer free shipping on orders over $50. Standard delivery takes 3-5 business days, and express shipping (1-2 days) is available for an additional $10. International shipping is also available!"
    }
    
    if (input.includes('international') || input.includes('overseas') || input.includes('country')) {
      return "Yes, we ship internationally! Shipping times vary by country: Europe (5-7 days), Asia (3-5 days), Americas (5-8 days). International shipping costs are calculated at checkout based on your location."
    }
    
    if (input.includes('track') || input.includes('order status')) {
      return "Once your order ships, you'll receive a tracking number via email. You can track your package in real-time through our website or the shipping carrier's website. We'll also send you updates on your order status!"
    }
    
    // Returns & Customer Service Questions
    if (input.includes('return') || input.includes('refund') || input.includes('exchange')) {
      return "We offer a 30-day return policy. If you're not satisfied with your spices, contact us and we'll provide a full refund or replacement. Customer satisfaction is our priority! Damaged items are replaced immediately."
    }
    
    if (input.includes('contact') || input.includes('support') || input.includes('help')) {
      return "You can reach our customer support team at support@uniquedesispice.com or through our website's contact form. We typically respond within 24 hours. For urgent matters, you can also call our support line during business hours!"
    }
    
    if (input.includes('complaint') || input.includes('issue') || input.includes('problem')) {
      return "We're sorry to hear you're having an issue! Please contact our customer support team at support@uniquedesispice.com with details about your concern. We take all feedback seriously and will work to resolve it quickly!"
    }
    
    // Product Availability & Stock Questions
    if (input.includes('available') || input.includes('in stock') || input.includes('out of stock')) {
      return "We maintain regular stock of all our core spices. If something is temporarily out of stock, we'll notify you and provide an estimated restock date. You can also sign up for stock notifications on our website!"
    }
    
    if (input.includes('bulk') || input.includes('wholesale') || input.includes('restaurant')) {
      return "Yes, we offer bulk and wholesale pricing for restaurants, food businesses, and large orders! Contact us at wholesale@uniquedesispice.com for custom pricing and bulk order options. We can accommodate any size order!"
    }
    
    if (input.includes('gift') || input.includes('present') || input.includes('bundle')) {
      return "We offer beautiful gift sets and spice bundles perfect for food lovers! Our gift sets include a selection of our most popular spices in decorative packaging. Great for housewarming gifts, birthdays, or any special occasion!"
    }
    
    // Payment & Pricing Questions
    if (input.includes('price') || input.includes('cost') || input.includes('expensive')) {
      return "Our spices are competitively priced for their quality. We believe in fair pricing that reflects the premium quality and direct sourcing from farmers. We also offer discounts on bulk orders and seasonal promotions!"
    }
    
    if (input.includes('discount') || input.includes('sale') || input.includes('promo')) {
      return "We regularly offer discounts and promotions! Sign up for our newsletter to receive exclusive offers, seasonal sales, and early access to promotions. We also offer first-time customer discounts!"
    }
    
    if (input.includes('payment') || input.includes('credit card') || input.includes('paypal')) {
      return "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our encrypted payment system. We never store your payment information for security!"
    }
    
    // General Spice Questions
    if (input.includes('difference') || input.includes('compare') || input.includes('vs')) {
      return "Great question! Each spice has unique characteristics. Turmeric adds color and earthiness, cumin provides warmth, cardamom offers sweetness, and black pepper adds heat. Would you like me to explain specific differences between any spices?"
    }
    
    if (input.includes('substitute') || input.includes('alternative') || input.includes('replace')) {
      return "While each spice is unique, here are some alternatives: For turmeric, you can use saffron for color; for cardamom, try cinnamon; for cumin, caraway seeds work; for black pepper, white pepper is milder. But our authentic spices are always best!"
    }
    
    if (input.includes('quality') || input.includes('premium') || input.includes('best')) {
      return "Our spices are premium quality because we source directly from farmers, use no artificial additives, and maintain strict quality control. Every batch is tested for purity, freshness, and flavor. That's why chefs and home cooks choose us!"
    }
    
    // Seasonal & Special Questions
    if (input.includes('seasonal') || input.includes('limited') || input.includes('special')) {
      return "We offer seasonal spice blends and limited edition collections throughout the year! These include special harvest batches, festival-themed spice mixes, and chef collaboration blends. Follow us on social media for updates!"
    }
    
    if (input.includes('harvest') || input.includes('fresh') || input.includes('new crop')) {
      return "We harvest our spices at peak freshness and pack them immediately to preserve flavor and aroma. Our spices are never stored for long periods, ensuring you get the freshest possible product!"
    }
    
    // Cooking Tips & Techniques
    if (input.includes('tip') || input.includes('technique') || input.includes('how to use')) {
      return "Here are some cooking tips: Toast whole spices before grinding to enhance flavor, add ground spices toward the end of cooking to preserve aroma, and start with small amounts - you can always add more!"
    }
    
    if (input.includes('blend') || input.includes('mix') || input.includes('combination')) {
      return "Great spice combinations: For Indian dishes, try turmeric + cumin + coriander; for Middle Eastern, use cumin + coriander + cinnamon; for warming dishes, combine cardamom + cinnamon + black pepper. Experiment to find your favorites!"
    }
    
    // Default response for unrecognized questions
    return "Thanks for your question! I'm here to help with anything about our spices, recipes, shipping, company policies, or cooking tips. Feel free to ask about specific spices, health benefits, storage, or any other spice-related topics!"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        data-spicebot-button
        className="fixed bottom-6 right-6 w-16 h-16 bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 text-white rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-96 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-unique-desi-spice-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">SpiceBot</h3>
                    <p className="text-xs text-gray-500">AI Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-unique-desi-spice-500 text-black' // User messages with black text
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 text-gray-800 max-w-xs px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about spices..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-unique-desi-spice-500 focus:border-transparent text-black"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="w-10 h-10 bg-unique-desi-spice-500 hover:bg-unique-desi-spice-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 