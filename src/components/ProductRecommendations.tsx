'use client'

import { useState, useMemo } from 'react'
import { ProductRecommendationEngine } from '@/data/products'
import { TankEquipmentSetup } from '@/types/product'
import ProductCard from './ProductCard'

interface ProductRecommendationsProps {
  tankSize: number
  species: string[]
  budget?: number
  showBudgetFilter?: boolean
}

export default function ProductRecommendations({
  tankSize,
  species,
  budget,
  showBudgetFilter = true
}: ProductRecommendationsProps) {
  const [activeTab, setActiveTab] = useState<'essential' | 'recommended' | 'optional'>('essential')
  const [budgetLimit, setBudgetLimit] = useState<number>(budget || 1000)

  const recommendations = useMemo(() => {
    return ProductRecommendationEngine.getRecommendationsForSetup(
      tankSize,
      species,
      budgetLimit
    )
  }, [tankSize, species, budgetLimit])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const getTabColor = (tab: string, isActive: boolean) => {
    if (!isActive) return 'text-gray-600 hover:text-gray-800'
    
    switch (tab) {
      case 'essential':
        return 'bg-white text-red-700 shadow-sm'
      case 'recommended':
        return 'bg-white text-blue-700 shadow-sm'
      case 'optional':
        return 'bg-white text-gray-700 shadow-sm'
      default:
        return 'bg-white text-gray-700 shadow-sm'
    }
  }

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'essential':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        )
      case 'recommended':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )
      case 'optional':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  if (species.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Product Recommendations
        </h3>
        <div className="text-center py-8 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <p>Select fish species to get product recommendations</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Product Recommendations
        </h3>
        <div className="text-sm text-gray-500">
          For {tankSize} gallon tank
        </div>
      </div>

      {/* Budget Filter */}
      {showBudgetFilter && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget Limit
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              id="budget"
              min="100"
              max="2000"
              step="50"
              value={budgetLimit}
              onChange={(e) => setBudgetLimit(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-lg font-semibold text-gray-900 min-w-[80px]">
              {formatPrice(budgetLimit)}
            </span>
          </div>
        </div>
      )}

      {/* Cost Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-red-800">Essential</span>
          </div>
          <div className="text-2xl font-bold text-red-700">
            {formatPrice(recommendations.totalCost.essential)}
          </div>
          <div className="text-sm text-red-600">
            {recommendations.essential.length} items
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-blue-800">Recommended</span>
          </div>
          <div className="text-2xl font-bold text-blue-700">
            {formatPrice(recommendations.totalCost.recommended)}
          </div>
          <div className="text-sm text-blue-600">
            {recommendations.recommended.length} items
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-gray-800">Optional</span>
          </div>
          <div className="text-2xl font-bold text-gray-700">
            {formatPrice(recommendations.totalCost.optional)}
          </div>
          <div className="text-sm text-gray-600">
            {recommendations.optional.length} items
          </div>
        </div>
      </div>

      {/* Total Cost */}
      <div className="bg-gradient-to-r from-aqua-50 to-blue-50 border border-aqua-200 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">Total Setup Cost:</span>
          <span className="text-2xl font-bold text-aqua-700">
            {formatPrice(
              recommendations.totalCost.essential + 
              recommendations.totalCost.recommended + 
              recommendations.totalCost.optional
            )}
          </span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Essential: {formatPrice(recommendations.totalCost.essential)} • 
          With Recommended: {formatPrice(recommendations.totalCost.essential + recommendations.totalCost.recommended)}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {(['essential', 'recommended', 'optional'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${getTabColor(tab, activeTab === tab)}`}
          >
            <div className="flex items-center justify-center space-x-2">
              {getTabIcon(tab)}
              <span className="capitalize">{tab}</span>
              <span className="text-xs">
                ({tab === 'essential' ? recommendations.essential.length : 
                  tab === 'recommended' ? recommendations.recommended.length : 
                  recommendations.optional.length})
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations[activeTab].map((recommendation, index) => (
          <ProductCard
            key={recommendation.product.id}
            product={recommendation.product}
            showCompatibility={true}
            compatibilityScore={recommendation.compatibility}
            priority={recommendation.priority}
            reason={recommendation.reason}
          />
        ))}
      </div>

      {recommendations[activeTab].length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p>No {activeTab} products found within your budget</p>
          <p className="text-sm mt-1">Try increasing your budget limit</p>
        </div>
      )}

      {/* Action Buttons */}
      {(recommendations.essential.length > 0 || recommendations.recommended.length > 0) && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-aqua-600 text-white py-3 px-4 rounded-lg hover:bg-aqua-700 transition-colors font-medium">
              Add Essential Items to Cart
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Save Setup for Later
            </button>
          </div>
        </div>
      )}
    </div>
  )
}