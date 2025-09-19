'use client'

import { useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useCart } from '@/hooks/useCart'
import ModernNavigation from './ModernNavigation'
import CartSidebar from './CartSidebar'
import FilterSidebar from '../navigation/FilterSidebar'

interface ModernLayoutProps {
  children: ReactNode
}

export default function ModernLayout({ children }: ModernLayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 500] as [number, number],
    careLevel: [] as string[],
    tempRange: [] as string[],
    compatibility: [] as string[],
    inStock: false
  })

  const pathname = usePathname()
  const { getTotalItems } = useCart()

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  const handleClearFilters = () => {
    setFilters({
      categories: [] as string[],
      priceRange: [0, 500],
      careLevel: [] as string[],
      tempRange: [] as string[],
      compatibility: [] as string[],
      inStock: false
    })
  }

  const getPageAnimation = () => {
    switch (pathname) {
      case '/':
        return 'animate-fade-in'
      case '/products':
        return 'animate-slide-in-right'
      case '/species':
        return 'animate-slide-in-left'
      case '/compatibility':
        return 'animate-slide-in-up'
      default:
        return 'animate-scale-in'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Site Header */}
      <ModernNavigation
        onCartClick={() => setIsCartOpen(true)}
        onFilterClick={() => setIsFilterOpen(true)}
        cartItemCount={getTotalItems()}
      />

      {/* Main Content Area */}
      <main
        className={`transition-all duration-300 ${getPageAnimation()}`}
        role="main"
        aria-label="Main content"
      >
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {/* Cart Sidebar - Aside Element */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Filter Sidebar - Aside Element */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onClearFilters={handleClearFilters}
      />

      {/* Site Footer */}
      <footer
        className="bg-secondary-900 text-white mt-16"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Riverpark Aquarium</h3>
              <p className="text-secondary-300 text-sm leading-relaxed">
                Your trusted partner for freshwater aquarium compatibility and expert guidance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors" aria-label="Follow us on social media">
                  <span className="sr-only">Social Media</span>
                  🐠
                </a>
              </div>
            </section>

            {/* Quick Links */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2">
                <a href="/species" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Species Guide
                </a>
                <a href="/compatibility" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Compatibility Checker
                </a>
                <a href="/products" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Products
                </a>
                <a href="/tank-builder" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Tank Builder
                </a>
              </nav>
            </section>

            {/* Support */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Help Center
                </a>
                <a href="#" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Care Guides
                </a>
                <a href="#" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Contact Us
                </a>
                <a href="#" className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  FAQ
                </a>
              </nav>
            </section>

            {/* Newsletter */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-secondary-300 text-sm">
                Get aquarium tips and product updates.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            </section>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-secondary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © 2024 Riverpark Aquarium. All rights reserved.
            </p>
            <nav className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors text-sm">
                Accessibility
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-water-200/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-plant-200/20 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>
    </div>
  )
}