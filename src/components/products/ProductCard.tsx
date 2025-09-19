'use client'

import { useState } from 'react'
import Image from 'next/image'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import StockBadge from '../ui/StockBadge'
import { Product } from '@/types/species'
import { useBrowsingTracker } from '@/hooks/useBrowsingTracker'
import { useCart } from '@/hooks/useCart'

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
  showQuickAdd?: boolean
  className?: string
}

export default function ProductCard({
  product,
  onViewDetails,
  showQuickAdd = true,
  className = ''
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { trackEvent } = useBrowsingTracker()
  const { addToCart, isLoading } = useCart()

  const handleViewDetails = () => {
    trackEvent({
      type: 'product_view',
      productId: product.id,
      timestamp: new Date()
    })
    onViewDetails(product)
  }

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.stopPropagation()
    await addToCart({
      product,
      quantity: 1,
      addedAt: new Date()
    })

    trackEvent({
      type: 'cart_add',
      productId: product.id,
      timestamp: new Date(),
      metadata: { quickAdd: true }
    })
  }

  const compatibilityColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'success'
      case 'intermediate': return 'warning'
      case 'advanced': return 'danger'
      default: return 'default'
    }
  }

  return (
    <Card
      variant="elevated"
      padding="none"
      hover
      clickable
      onClick={handleViewDetails}
      className={`group overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-secondary-50 overflow-hidden">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-secondary-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}

        {/* Stock Status */}
        {product.stock !== undefined && (
          <div className="absolute top-3 left-3">
            <StockBadge stock={product.stock} size="sm" showIcon />
          </div>
        )}

        {/* Quick Actions */}
        {isHovered && showQuickAdd && product.stock !== 0 && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              onClick={handleQuickAdd}
              isLoading={isLoading}
              size="sm"
              className="backdrop-blur-sm bg-white/90 text-secondary-900 hover:bg-white"
            >
              Quick Add
            </Button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-secondary-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-secondary-600 mt-1">{product.category}</p>
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap gap-1">
          {product.metadata.care_level && (
            <Badge variant={compatibilityColor(product.metadata.care_level)} size="sm">
              {product.metadata.care_level}
            </Badge>
          )}
          {product.metadata.temp_range && (
            <Badge variant="water" size="sm">
              {product.metadata.temp_range}°F
            </Badge>
          )}
          {product.metadata.bioload && (
            <Badge variant="secondary" size="sm">
              {product.metadata.bioload}
            </Badge>
          )}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-lg font-bold text-secondary-900">
              ${product.price.toFixed(2)}
            </span>
            {product.variants && product.variants.length > 0 && (
              <span className="text-sm text-secondary-500 ml-1">+</span>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              handleViewDetails()
            }}
          >
            View Details
          </Button>
        </div>

        {/* Compatible Species (if available) */}
        {product.metadata.compatible_with && product.metadata.compatible_with.length > 0 && (
          <div className="pt-2 border-t border-secondary-100">
            <p className="text-xs text-secondary-500 mb-1">Compatible with:</p>
            <div className="flex flex-wrap gap-1">
              {product.metadata.compatible_with.slice(0, 3).map((species, index) => (
                <Badge key={index} variant="plant" size="sm">
                  {species}
                </Badge>
              ))}
              {product.metadata.compatible_with.length > 3 && (
                <Badge variant="secondary" size="sm">
                  +{product.metadata.compatible_with.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}