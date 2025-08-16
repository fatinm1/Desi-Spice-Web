import React from 'react'
import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedSpices from '@/components/sections/FeaturedSpices'
import AboutPreview from '@/components/sections/AboutPreview'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'
import SpiceBot from '@/components/chat/SpiceBot'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <FeaturedSpices />
        <AboutPreview />
        <Testimonials />
        <Newsletter />
        <SpiceBot />
      </main>
    </>
  )
} 