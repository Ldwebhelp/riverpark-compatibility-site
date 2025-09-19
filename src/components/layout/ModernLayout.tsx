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
      {/* Modern Navigation */}
      <ModernNavigation
        onCartClick={() => setIsCartOpen(true)}
        onFilterClick={() => setIsFilterOpen(true)}
        cartItemCount={getTotalItems()}
      />

      {/* Main Content with Page Transitions */}
      <main className={`transition-all duration-300 ${getPageAnimation()}`}>
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onClearFilters={handleClearFilters}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-water-200/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-plant-200/20 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>
    </div>
  )
}