'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useStealthAssistant } from './StealthAssistant'

export default function ResponsiveNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state } = useStealthAssistant()

  const navigation = [
    { name: 'Species Guide', href: '/species', icon: '🐠' },
    { name: 'Compatibility', href: '/compatibility', icon: '✅' },
    { name: 'Tank Builder', href: '/tank-builder', icon: '🏗️' },
    { name: 'Products', href: '/products', icon: '🛒' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-aqua-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Riverpark
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-aqua-600 transition-colors font-medium"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Setup Progress Indicator (Desktop) */}
          {state.selectedSpecies.length > 0 && (
            <div className="hidden lg:flex items-center space-x-3 bg-aqua-50 border border-aqua-200 rounded-full px-4 py-2">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-aqua-700 font-medium">
                  {state.selectedSpecies.length} species
                </span>
              </div>
              {state.tankSize && (
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-aqua-700 font-medium">
                    {state.tankSize}L
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-aqua-600 hover:bg-aqua-50 transition-colors rounded-lg mx-2"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Setup Progress */}
            {state.selectedSpecies.length > 0 && (
              <div className="mt-4 mx-2 p-4 bg-aqua-50 border border-aqua-200 rounded-lg">
                <h4 className="font-medium text-aqua-900 mb-2">Current Setup</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-aqua-700">Species</span>
                    <span className="font-medium text-aqua-900">{state.selectedSpecies.length}</span>
                  </div>
                  {state.tankSize && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-aqua-700">Tank Size</span>
                      <span className="font-medium text-aqua-900">{state.tankSize} gallons</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}