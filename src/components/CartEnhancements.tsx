'use client'

import { useState, useEffect } from 'react'
import { useStealthAssistant } from './StealthAssistant'
import { IntelligenceEngine } from '@/lib/intelligenceEngine'
import { useBigCommerceProducts } from '@/lib/bigcommerce'
import Link from 'next/link'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  category: string
  species?: string[]
}

interface CartEnhancementsProps {
  cartItems: CartItem[]
  onCartUpdate?: () => void
}

export default function CartEnhancements({ 
  cartItems, 
  onCartUpdate 
}: CartEnhancementsProps) {
  const { state } = useStealthAssistant()
  const [setupAnalysis, setSetupAnalysis] = useState<any>(null)
  const [suggestedProducts, setSuggestedProducts] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    if (state.selectedSpecies.length > 0 && cartItems.length > 0) {
      analyzeCartSetup()
    }
  }, [cartItems, state.selectedSpecies])

  const analyzeCartSetup = async () => {
    // Extract equipment categories from cart
    const currentEquipment = cartItems.map(item => item.category)
    
    // Analyze what's missing for the selected species
    const analysis = IntelligenceEngine.analyzeProductNeeds(
      state.selectedSpecies,
      currentEquipment,
      [] // Would use real BigCommerce products here
    )
    
    setSetupAnalysis(analysis)
    
    // Get silent suggestions based on cart contents
    const suggestions = await generateSilentSuggestions(cartItems, state.selectedSpecies)
    setSuggestedProducts(suggestions)
  }

  const generateSilentSuggestions = async (
    items: CartItem[], 
    speciesIds: string[]
  ): Promise<any[]> => {
    const suggestions = []

    // Check for complementary products
    const hasFilter = items.some(item => item.category === 'filtration')
    const hasHeater = items.some(item => item.category === 'heating')
    const hasFood = items.some(item => item.category === 'food')

    // Silent suggestions based on cart analysis
    if (hasFilter && !hasHeater && speciesIds.some(s => ['discus', 'angelfish'].includes(s))) {
      suggestions.push({
        type: 'complement',
        title: 'Consider adding a heater',
        reason: 'Tropical fish need stable temperature',
        priority: 'medium',
        products: [] // Would fetch from BigCommerce
      })
    }

    if (hasHeater && !hasFood) {
      suggestions.push({
        type: 'essential',
        title: 'Don\'t forget fish food',
        reason: 'Essential for fish health and growth',
        priority: 'high',
        products: []
      })
    }

    // Species-specific suggestions
    if (speciesIds.includes('malawian-cichlids')) {
      const hasSubstrate = items.some(item => item.category === 'substrate')
      if (!hasSubstrate) {
        suggestions.push({
          type: 'species-specific',
          title: 'Cichlid substrate recommended',
          reason: 'Malawian cichlids prefer sand or fine gravel',
          priority: 'medium',
          products: []
        })
      }
    }

    return suggestions
  }

  const calculateCartCompatibility = () => {
    if (!state.selectedSpecies.length || !cartItems.length) return null

    // Simple compatibility check based on species in cart vs selected species
    const cartSpecies = cartItems.flatMap(item => item.species || [])
    const compatibleItems = cartItems.filter(item => 
      !item.species || item.species.some(s => state.selectedSpecies.includes(s))
    )

    return {
      compatible: compatibleItems.length,
      total: cartItems.length,
      percentage: Math.round((compatibleItems.length / cartItems.length) * 100)
    }
  }

  const compatibility = calculateCartCompatibility()

  return (
    <div className="space-y-4">
      {/* Review My Setup Link */}
      {state.selectedSpecies.length > 0 && (
        <div className="bg-aqua-50 border border-aqua-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-aqua-900 mb-1">
                🔍 Review Your Aquarium Setup
              </h4>
              <p className="text-aqua-700 text-sm">
                Check compatibility and completeness of your cart items with selected species
              </p>
            </div>
            <Link
              href={`/setup-review?species=${state.selectedSpecies.join(',')}&cart=true`}
              className="bg-aqua-600 text-white px-4 py-2 rounded-lg hover:bg-aqua-700 transition-colors text-sm font-medium"
            >
              Review Setup
            </Link>
          </div>
        </div>
      )}

      {/* Cart Compatibility Status */}
      {compatibility && (
        <div className={`rounded-lg border p-4 ${
          compatibility.percentage >= 80 
            ? 'bg-green-50 border-green-200' 
            : compatibility.percentage >= 60 
            ? 'bg-yellow-50 border-yellow-200'
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium mb-1 ${
                compatibility.percentage >= 80 
                  ? 'text-green-800' 
                  : compatibility.percentage >= 60 
                  ? 'text-yellow-800'
                  : 'text-red-800'
              }`}>
                Cart Compatibility: {compatibility.percentage}%
              </h4>
              <p className={`text-sm ${
                compatibility.percentage >= 80 
                  ? 'text-green-700' 
                  : compatibility.percentage >= 60 
                  ? 'text-yellow-700'
                  : 'text-red-700'
              }`}>
                {compatibility.compatible} of {compatibility.total} items are compatible with your species
              </p>
            </div>
            <div className={`text-2xl font-bold ${
              compatibility.percentage >= 80 
                ? 'text-green-600' 
                : compatibility.percentage >= 60 
                ? 'text-yellow-600'
                : 'text-red-600'
            }`}>
              {compatibility.percentage}%
            </div>
          </div>
        </div>
      )}

      {/* Setup Analysis Summary */}
      {setupAnalysis && setupAnalysis.missingItems.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium text-orange-900 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
                Missing Essential Items
              </h4>
              <div className="space-y-1">
                {setupAnalysis.missingItems
                  .filter((item: any) => item.priority === 'essential')
                  .slice(0, 3)
                  .map((item: any, index: number) => (
                  <p key={index} className="text-orange-700 text-sm">
                    • {item.category.replace('-', ' ')} - {item.reason}
                  </p>
                ))}
                {setupAnalysis.missingItems.filter((item: any) => item.priority === 'essential').length > 3 && (
                  <p className="text-orange-600 text-xs">
                    +{setupAnalysis.missingItems.filter((item: any) => item.priority === 'essential').length - 3} more items
                  </p>
                )}
              </div>
            </div>
            <Link
              href="/products?missing=essential"
              className="text-orange-600 hover:text-orange-800 text-sm font-medium whitespace-nowrap"
            >
              Shop Missing Items →
            </Link>
          </div>
        </div>
      )}

      {/* Silent Product Suggestions (Product Reminder Block) */}
      {suggestedProducts.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Helpful Suggestions
              </h4>
              <button
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                {showSuggestions ? 'Hide' : 'Show'}
              </button>
            </div>

            {showSuggestions && (
              <div className="space-y-3">
                {suggestedProducts.slice(0, 3).map((suggestion, index) => (
                  <div key={index} className="flex items-start p-3 bg-white rounded border border-gray-200">
                    <div className={`w-3 h-3 rounded-full mt-1 mr-3 ${
                      suggestion.priority === 'high' ? 'bg-red-400' :
                      suggestion.priority === 'medium' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    }`}></div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 text-sm mb-1">
                        {suggestion.title}
                      </h5>
                      <p className="text-gray-600 text-xs mb-2">
                        {suggestion.reason}
                      </p>
                      <button className="text-aqua-600 hover:text-aqua-800 text-xs font-medium">
                        View Products →
                      </button>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-gray-600 ml-2"
                      title="Dismiss suggestion"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {!showSuggestions && (
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  {suggestedProducts.length} helpful suggestion{suggestedProducts.length !== 1 ? 's' : ''} available
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/compatibility"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="font-medium text-gray-900 text-sm">Check Compatibility</div>
              <div className="text-gray-600 text-xs">Verify species work together</div>
            </div>
          </Link>

          <Link
            href="/tank-builder"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
          >
            <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <div className="font-medium text-gray-900 text-sm">Complete Setup</div>
              <div className="text-gray-600 text-xs">Finalize your aquarium plan</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Setup Progress Indicator */}
      {state.selectedSpecies.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Setup Progress
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Species Selected</span>
              <span className="font-medium">✅ {state.selectedSpecies.length} species</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Tank Size</span>
              <span className="font-medium">
                {state.tankSize ? `✅ ${state.tankSize} gallons` : '⏳ Not set'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Equipment in Cart</span>
              <span className="font-medium">
                {cartItems.length > 0 ? `✅ ${cartItems.length} items` : '⏳ Empty cart'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}