'use client'

import { useState, useEffect } from 'react'
import { IntelligenceEngine, ProductNeedAnalysis } from '@/lib/intelligenceEngine'
import { sampleProducts } from '@/data/products'
import ProductCard from './ProductCard'

interface ProductNeedEngineProps {
  speciesIds: string[]
  currentEquipment?: string[]
  onAnalysisChange?: (analysis: ProductNeedAnalysis) => void
}

export default function ProductNeedEngine({ 
  speciesIds, 
  currentEquipment = [],
  onAnalysisChange 
}: ProductNeedEngineProps) {
  const [analysis, setAnalysis] = useState<ProductNeedAnalysis | null>(null)
  const [activeTab, setActiveTab] = useState<'requirements' | 'missing' | 'upgrades' | 'carekit'>('requirements')

  useEffect(() => {
    if (speciesIds.length > 0) {
      const newAnalysis = IntelligenceEngine.analyzeProductNeeds(
        speciesIds, 
        currentEquipment, 
        sampleProducts
      )
      setAnalysis(newAnalysis)
      onAnalysisChange?.(newAnalysis)
    }
  }, [speciesIds, currentEquipment, onAnalysisChange])

  if (!analysis || speciesIds.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 00-2-2z" />
          </svg>
          <p>Select fish species to analyze product needs</p>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'essential': return 'bg-red-100 text-red-800 border-red-200'
      case 'recommended': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'optional': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
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

  return (
    <div className="bg-white rounded-lg shadow-md border">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          🔧 Product Need Analysis
        </h3>
        <p className="text-gray-600">
          Comprehensive analysis for {speciesIds.length} selected species
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {[
          { id: 'requirements', label: 'Tank Requirements', icon: '📋' },
          { id: 'missing', label: 'Missing Items', icon: '❌', count: analysis.missingItems.length },
          { id: 'upgrades', label: 'Suggested Upgrades', icon: '⬆️', count: analysis.suggestedUpgrades.length },
          { id: 'carekit', label: 'Care Kit', icon: '🎁' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-aqua-500 text-aqua-600 bg-aqua-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {/* Tank Requirements Tab */}
        {activeTab === 'requirements' && (
          <div className="space-y-6">
            {/* Tank Size Requirements */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Tank Volume Requirements
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-blue-700">Minimum Required</div>
                  <div className="text-2xl font-bold text-blue-800">
                    {analysis.tankRequirements.minTankVolume} gallons
                  </div>
                </div>
                <div>
                  <div className="text-sm text-blue-700">Recommended</div>
                  <div className="text-2xl font-bold text-blue-800">
                    {analysis.tankRequirements.recommendedTankVolume} gallons
                  </div>
                </div>
              </div>
            </div>

            {/* Water Parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-medium text-purple-800 mb-2">Temperature</h5>
                <div className="text-lg font-semibold text-purple-900">
                  {analysis.tankRequirements.temperatureRange.min}° - {analysis.tankRequirements.temperatureRange.max}°F
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-medium text-green-800 mb-2">pH Range</h5>
                <div className="text-lg font-semibold text-green-900">
                  {analysis.tankRequirements.phRange.min} - {analysis.tankRequirements.phRange.max}
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-medium text-orange-800 mb-2">Hardness</h5>
                <div className="text-lg font-semibold text-orange-900">
                  {analysis.tankRequirements.hardnessRange.min} - {analysis.tankRequirements.hardnessRange.max} dGH
                </div>
              </div>
            </div>

            {/* Required Categories */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Required Product Categories</h4>
              <div className="space-y-2">
                {analysis.tankRequirements.requiredCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(category.priority)}`}>
                        {getPriorityIcon(category.priority)}
                        <span className="ml-1 capitalize">{category.priority}</span>
                      </span>
                      <span className="font-medium text-gray-900 capitalize">
                        {category.category.replace('-', ' ')}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{category.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Missing Items Tab */}
        {activeTab === 'missing' && (
          <div className="space-y-6">
            {analysis.missingItems.length > 0 ? (
              <>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    ❌ Missing Essential Items
                  </h4>
                  <p className="text-red-700 text-sm">
                    Your setup is missing {analysis.missingItems.filter(item => item.priority === 'essential').length} essential items
                  </p>
                </div>

                {analysis.missingItems.map((missing, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(missing.priority)}`}>
                          {getPriorityIcon(missing.priority)}
                          <span className="ml-1 capitalize">{missing.priority}</span>
                        </span>
                        <h5 className="font-semibold text-gray-900 capitalize">
                          {missing.category.replace('-', ' ')}
                        </h5>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{missing.reason}</p>
                    
                    {missing.suggestedProducts.length > 0 && (
                      <div>
                        <h6 className="font-medium text-gray-900 mb-3">Suggested Products:</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {missing.suggestedProducts.map(product => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              priority={missing.priority}
                              reason={missing.reason}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center py-8 text-green-600">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h4 className="text-lg font-semibold mb-2">✅ No Missing Items!</h4>
                <p>Your setup appears complete for the selected species.</p>
              </div>
            )}
          </div>
        )}

        {/* Suggested Upgrades Tab */}
        {activeTab === 'upgrades' && (
          <div className="space-y-6">
            {analysis.suggestedUpgrades.length > 0 ? (
              analysis.suggestedUpgrades.map((upgrade, index) => (
                <div key={index} className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h5 className="font-semibold text-blue-900 mb-1">
                        ⬆️ Upgrade: {upgrade.currentItem}
                      </h5>
                      <p className="text-blue-700 text-sm mb-2">{upgrade.reason}</p>
                      <p className="text-blue-600 text-sm font-medium">
                        💡 Benefit: {upgrade.benefit}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ProductCard
                      product={upgrade.upgrade}
                      reason={`Upgrade from ${upgrade.currentItem}: ${upgrade.benefit}`}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="text-lg font-semibold mb-2">No Upgrades Suggested</h4>
                <p>Your current equipment appears suitable for the selected species.</p>
              </div>
            )}
          </div>
        )}

        {/* Care Kit Tab */}
        {activeTab === 'carekit' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-purple-900 mb-2">
                    🎁 {analysis.careKit.name}
                  </h4>
                  <p className="text-purple-700">{analysis.careKit.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-900">
                    {formatPrice(analysis.careKit.totalCost)}
                  </div>
                  <div className="text-sm text-purple-700">
                    {analysis.careKit.items.length} items included
                  </div>
                </div>
              </div>
            </div>

            {analysis.careKit.items.length > 0 ? (
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Kit Contents:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.careKit.items.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      reason="Included in species care kit"
                    />
                  ))}
                </div>
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Add Complete Kit to Cart
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Customize Kit
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No care kit available for current species selection.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}