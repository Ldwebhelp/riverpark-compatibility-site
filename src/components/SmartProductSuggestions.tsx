'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import { useStealthAssistant } from './StealthAssistant'
import { sampleProducts } from '@/data/products'
import ProductCard from './ProductCard'

interface SmartProductSuggestionsProps {
  currentProduct?: Product
  category?: string
  context: 'product-page' | 'category-page' | 'search-results'
}

export default function SmartProductSuggestions({ 
  currentProduct, 
  category,
  context 
}: SmartProductSuggestionsProps) {
  const { state, updateState } = useStealthAssistant()
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [suggestionReason, setSuggestionReason] = useState<string>('')

  useEffect(() => {
    generateSmartSuggestions()
  }, [currentProduct, state.selectedSpecies, state.tankSize, context])

  const generateSmartSuggestions = () => {
    let smartSuggestions: Product[] = []
    let reason = ''

    // Context-based suggestions
    if (context === 'product-page' && currentProduct) {
      const result = getProductPageSuggestions(currentProduct)
      smartSuggestions = result.products
      reason = result.reason
    } else if (context === 'category-page' && category) {
      const result = getCategoryPageSuggestions(category)
      smartSuggestions = result.products
      reason = result.reason
    }

    setSuggestions(smartSuggestions.slice(0, 4))
    setSuggestionReason(reason)
  }

  const getProductPageSuggestions = (product: Product): { products: Product[], reason: string } => {
    // Species-specific suggestions
    if (state.selectedSpecies.length > 0) {
      return getSpeciesBasedSuggestions(product)
    }

    // Product category-based suggestions
    return getCategoryBasedSuggestions(product)
  }

  const getSpeciesBasedSuggestions = (product: Product): { products: Product[], reason: string } => {
    const hasDiscus = state.selectedSpecies.includes('discus')
    const hasCichlids = state.selectedSpecies.some(s => s.includes('cichlids'))
    const hasCommunityFish = state.selectedSpecies.some(s => 
      ['tetras', 'barbs', 'rasboras', 'corydoras'].includes(s)
    )

    // Discus-specific suggestions
    if (hasDiscus) {
      if (product.category === 'heating') {
        return {
          products: sampleProducts.filter(p => 
            p.category === 'water-care' || 
            (p.category === 'food' && p.name.toLowerCase().includes('protein'))
          ),
          reason: 'Planning a Discus tank? You may also need specialized water care and high-protein food.'
        }
      }
      
      if (product.category === 'tanks') {
        return {
          products: sampleProducts.filter(p => 
            p.category === 'heating' && p.name.includes('150W') ||
            p.category === 'filtration'
          ),
          reason: 'For Discus, consider powerful filtration and reliable heating to maintain stable conditions.'
        }
      }
    }

    // Cichlid-specific suggestions
    if (hasCichlids) {
      if (product.category === 'substrate') {
        return {
          products: sampleProducts.filter(p => 
            p.category === 'decorations' ||
            (p.category === 'food' && p.name.toLowerCase().includes('cichlid'))
          ),
          reason: 'Cichlids love caves and hiding spots. Specialized cichlid food enhances their natural colors.'
        }
      }
    }

    // Community tank suggestions
    if (hasCommunityFish) {
      return {
        products: sampleProducts.filter(p => 
          p.compatibility.species.some(s => state.selectedSpecies.includes(s))
        ),
        reason: `Perfect for your community tank with ${state.selectedSpecies.length} species.`
      }
    }

    return { products: [], reason: '' }
  }

  const getCategoryBasedSuggestions = (product: Product): { products: Product[], reason: string } => {
    switch (product.category) {
      case 'tanks':
        return {
          products: sampleProducts.filter(p => 
            ['filtration', 'heating', 'lighting'].includes(p.category)
          ),
          reason: 'Essential equipment to get your new tank running.'
        }

      case 'filtration':
        return {
          products: sampleProducts.filter(p => 
            ['water-care', 'substrate', 'test-kits'].includes(p.category)
          ),
          reason: 'Complete your filtration setup with these water quality essentials.'
        }

      case 'heating':
        return {
          products: sampleProducts.filter(p => 
            p.category === 'food' || 
            (p.category === 'decorations' && p.name.toLowerCase().includes('plant'))
          ),
          reason: 'Tropical fish also need proper nutrition and natural environments.'
        }

      default:
        return {
          products: sampleProducts.filter(p => p.category !== product.category).slice(0, 4),
          reason: 'You might also be interested in these related products.'
        }
    }
  }

  const getCategoryPageSuggestions = (categoryName: string): { products: Product[], reason: string } => {
    // Filter products suitable for selected species
    if (state.selectedSpecies.length > 0) {
      const compatibleProducts = sampleProducts.filter(p =>
        p.compatibility.species.some(s => state.selectedSpecies.includes(s)) &&
        p.category !== categoryName
      )

      return {
        products: compatibleProducts,
        reason: `Based on your selected species: ${state.selectedSpecies.slice(0, 2).join(', ')}${state.selectedSpecies.length > 2 ? '...' : ''}`
      }
    }

    return { products: [], reason: '' }
  }

  const handleSpeciesFilter = () => {
    // Apply species filter to current product view
    updateState({ 
      interests: [...state.interests, 'species-filtering'],
      currentPage: window.location.pathname 
    })
    
    // Trigger filter application (this would integrate with your product filtering system)
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('applySpeciesFilter', { 
        detail: { species: state.selectedSpecies } 
      })
      window.dispatchEvent(event)
    }
  }

  if (suggestions.length === 0) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-aqua-50 to-blue-50 rounded-lg p-6 border border-aqua-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Smart Suggestions
          </h3>
          {suggestionReason && (
            <p className="text-gray-600 text-sm">
              {suggestionReason}
            </p>
          )}
        </div>
        
        {/* Species Filter Enhancement */}
        {state.selectedSpecies.length > 0 && context === 'category-page' && (
          <button
            onClick={handleSpeciesFilter}
            className="bg-aqua-600 text-white px-3 py-1 rounded-full text-sm hover:bg-aqua-700 transition-colors"
          >
            Filter by Species
          </button>
        )}
      </div>

      {/* Suggestions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {suggestions.map(product => (
          <div key={product.id} className="transform hover:scale-105 transition-transform">
            <ProductCard 
              product={product}
              showCompatibility={state.selectedSpecies.length > 0}
              compatibilityScore={
                state.selectedSpecies.length > 0 
                  ? Math.round(
                      (product.compatibility.species.filter(s => 
                        state.selectedSpecies.includes(s)
                      ).length / state.selectedSpecies.length) * 100
                    )
                  : undefined
              }
            />
          </div>
        ))}
      </div>

      {/* Enhanced Category Filtering */}
      {state.selectedSpecies.length > 0 && (
        <div className="mt-4 pt-4 border-t border-aqua-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Show products suitable for your {state.selectedSpecies.length} selected species
            </span>
            <button
              onClick={handleSpeciesFilter}
              className="text-aqua-600 hover:text-aqua-800 text-sm font-medium"
            >
              Apply Smart Filter →
            </button>
          </div>
        </div>
      )}

      {/* Tank Size Compatibility Notice */}
      {state.tankSize && currentProduct && (
        <div className="mt-4 pt-4 border-t border-aqua-200">
          {currentProduct.compatibility.tankSizes.includes(state.tankSize) ? (
            <div className="flex items-center text-green-700 text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ✓ Compatible with your {state.tankSize} gallon tank
            </div>
          ) : (
            <div className="flex items-center text-yellow-700 text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              ⚠ Check compatibility with your {state.tankSize} gallon tank
            </div>
          )}
        </div>
      )}
    </div>
  )
}