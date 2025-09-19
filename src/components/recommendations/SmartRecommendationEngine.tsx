'use client'

import { useState, useEffect } from 'react'
import { Product, Species, SmartRecommendation } from '@/types/species'
import { useBrowsingTracker } from '@/hooks/useBrowsingTracker'
import { useCart } from '@/hooks/useCart'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import ProductCard from '../products/ProductCard'

interface SmartRecommendationEngineProps {
  products: Product[]
  species: Species[]
  onProductSelect: (product: Product) => void
  className?: string
}

export default function SmartRecommendationEngine({
  products,
  species,
  onProductSelect,
  className = ''
}: SmartRecommendationEngineProps) {
  const [recommendations, setRecommendations] = useState<SmartRecommendation[]>([])
  const { getRecentProducts, getRecentSpecies, getUserIntent } = useBrowsingTracker()
  const { items: cartItems } = useCart()

  useEffect(() => {
    generateRecommendations()
  }, [products, species, cartItems])

  const generateRecommendations = () => {
    const userIntent = getUserIntent()
    const recentProducts = getRecentProducts(5)
    const recentSpecies = getRecentSpecies(5)
    const cartProductIds = cartItems.map(item => item.product.id)

    let newRecommendations: SmartRecommendation[] = []

    if (userIntent === 'shopping' || userIntent === 'planning') {
      newRecommendations = [
        ...generateCompatibilityRecommendations(recentSpecies),
        ...generateCartCompletionRecommendations(cartItems),
        ...generateUpgradeRecommendations(cartItems)
      ]
    } else if (userIntent === 'researching') {
      newRecommendations = [
        ...generateSpeciesBasedRecommendations(recentSpecies),
        ...generateCareRecommendations(recentSpecies)
      ]
    } else {
      newRecommendations = [
        ...generateTrendingRecommendations(),
        ...generatePersonalizedRecommendations(recentProducts)
      ]
    }

    const filteredRecommendations = newRecommendations
      .filter(rec => !cartProductIds.includes(rec.product.id))
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 8)

    setRecommendations(filteredRecommendations)
  }

  const generateCompatibilityRecommendations = (speciesIds: string[]): SmartRecommendation[] => {
    const recommendations: SmartRecommendation[] = []

    speciesIds.forEach(speciesId => {
      const currentSpecies = species.find(s => s.id === speciesId)
      if (!currentSpecies) return

      const compatibleProducts = products.filter(product =>
        product.metadata.compatible_with?.includes(currentSpecies.name) ||
        product.metadata.compatible_with?.includes(speciesId)
      )

      compatibleProducts.forEach(product => {
        recommendations.push({
          product,
          reason: `Perfect for your ${currentSpecies.name}`,
          confidence: 0.9,
          category: 'compatibility'
        })
      })
    })

    return recommendations
  }

  const generateCartCompletionRecommendations = (cartItems: any[]): SmartRecommendation[] => {
    const recommendations: SmartRecommendation[] = []
    const cartCategories = cartItems.map(item => item.product.category)

    if (cartCategories.includes('Fish Food') && !cartCategories.includes('Test Kits')) {
      const testKits = products.filter(p => p.category === 'Test Kits')
      testKits.forEach(product => {
        recommendations.push({
          product,
          reason: 'Monitor water quality with your new fish',
          confidence: 0.8,
          category: 'care'
        })
      })
    }

    if (cartCategories.includes('Filters') && !cartCategories.includes('Water Conditioners')) {
      const conditioners = products.filter(p => p.category === 'Water Conditioners')
      conditioners.forEach(product => {
        recommendations.push({
          product,
          reason: 'Complete your filtration setup',
          confidence: 0.85,
          category: 'equipment'
        })
      })
    }

    return recommendations
  }

  const generateUpgradeRecommendations = (cartItems: any[]): SmartRecommendation[] => {
    const recommendations: SmartRecommendation[] = []

    cartItems.forEach(item => {
      if (item.product.metadata.care_level === 'beginner') {
        const upgradeProducts = products.filter(p =>
          p.category === item.product.category &&
          p.metadata.care_level === 'intermediate' &&
          p.price > item.product.price
        )

        upgradeProducts.slice(0, 2).forEach(product => {
          recommendations.push({
            product,
            reason: 'Upgrade to premium quality',
            confidence: 0.6,
            category: 'upgrade'
          })
        })
      }
    })

    return recommendations
  }

  const generateSpeciesBasedRecommendations = (speciesIds: string[]): SmartRecommendation[] => {
    const recommendations: SmartRecommendation[] = []

    speciesIds.forEach(speciesId => {
      const currentSpecies = species.find(s => s.id === speciesId)
      if (!currentSpecies?.detailedInfo) return

      const tempRange = currentSpecies.detailedInfo.waterParams.temperature
      const phRange = currentSpecies.detailedInfo.waterParams.ph

      const compatibleProducts = products.filter(product => {
        if (product.metadata.temp_range && tempRange) {
          return true
        }
        if (product.metadata.ph_range && phRange) {
          return true
        }
        return false
      })

      compatibleProducts.forEach(product => {
        recommendations.push({
          product,
          reason: `Matches ${currentSpecies.name} requirements`,
          confidence: 0.75,
          category: 'compatibility'
        })
      })
    })

    return recommendations
  }

  const generateCareRecommendations = (speciesIds: string[]): SmartRecommendation[] => {
    const recommendations: SmartRecommendation[] = []

    const careProducts = products.filter(p =>
      ['Fish Food', 'Water Conditioners', 'Test Kits', 'Medications'].includes(p.category)
    )

    careProducts.forEach(product => {
      recommendations.push({
        product,
        reason: 'Essential for fish health and care',
        confidence: 0.7,
        category: 'care'
      })
    })

    return recommendations.slice(0, 4)
  }

  const generateTrendingRecommendations = (): SmartRecommendation[] => {
    const trendingProducts = products
      .filter(p => p.metadata.tags?.includes('popular') || p.metadata.tags?.includes('trending'))
      .slice(0, 4)

    return trendingProducts.map(product => ({
      product,
      reason: 'Popular choice among aquarists',
      confidence: 0.5,
      category: 'equipment' as const
    }))
  }

  const generatePersonalizedRecommendations = (recentProductIds: string[]): SmartRecommendation[] => {
    const recentProducts = products.filter(p => recentProductIds.includes(p.id))
    const recommendations: SmartRecommendation[] = []

    recentProducts.forEach(product => {
      const similarProducts = products.filter(p =>
        p.category === product.category &&
        p.id !== product.id &&
        Math.abs(p.price - product.price) < 50
      )

      similarProducts.slice(0, 2).forEach(similar => {
        recommendations.push({
          product: similar,
          reason: `Similar to your recently viewed ${product.name}`,
          confidence: 0.6,
          category: 'equipment'
        })
      })
    })

    return recommendations
  }

  const getCategoryBadgeVariant = (category: string) => {
    switch (category) {
      case 'compatibility': return 'success'
      case 'equipment': return 'primary'
      case 'care': return 'water'
      case 'upgrade': return 'warning'
      default: return 'default'
    }
  }

  if (recommendations.length === 0) {
    return null
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-secondary-900">Recommended for You</h2>
          <p className="text-secondary-600 mt-1">
            Based on your browsing and {getUserIntent()} activity
          </p>
        </div>
        <Badge variant="primary" size="lg">
          {recommendations.length} suggestions
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((recommendation, index) => (
          <div key={`${recommendation.product.id}-${index}`} className="relative">
            <div className="absolute -top-2 -left-2 z-10">
              <Badge
                variant={getCategoryBadgeVariant(recommendation.category)}
                size="sm"
              >
                {recommendation.category}
              </Badge>
            </div>
            <ProductCard
              product={recommendation.product}
              onViewDetails={onProductSelect}
              showQuickAdd={true}
            />
            <div className="mt-3 p-3 bg-secondary-50 rounded-lg">
              <p className="text-sm text-secondary-700 font-medium">
                {recommendation.reason}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-secondary-500">
                  {Math.round(recommendation.confidence * 100)}% match
                </span>
                <div className="w-16 h-1.5 bg-secondary-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500 transition-all duration-500"
                    style={{ width: `${recommendation.confidence * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}