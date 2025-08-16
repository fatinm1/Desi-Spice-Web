import React from 'react'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { CartProvider } from '@/components/providers/CartProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Unique Desi Spice - Premium South Asian Spices',
  description: 'Discover premium South Asian spices sourced directly from farmers. Organic, authentic, and delivered to your doorstep.',
  keywords: ['spices', 'South Asian', 'organic', 'authentic', 'premium', 'cooking', 'culinary'],
  authors: [{ name: 'Unique Desi Spice' }],
  creator: 'Unique Desi Spice',
  publisher: 'Unique Desi Spice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://uniquedesispice.com'),
  openGraph: {
    title: 'Unique Desi Spice - Premium South Asian Spices',
    description: 'Discover premium South Asian spices sourced directly from farmers.',
    url: 'https://uniquedesispice.com',
    siteName: 'Unique Desi Spice',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Unique Desi Spice - Premium South Asian Spices',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Desi Spice - Premium South Asian Spices',
    description: 'Discover premium South Asian spices sourced directly from farmers.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              {children}
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: '#22c55e',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    duration: 5000,
                    iconTheme: {
                      primary: '#ef4444',
                      secondary: '#fff',
                    },
                  },
                }}
              />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 