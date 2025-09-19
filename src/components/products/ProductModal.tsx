'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../ui/Modal'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { DetailedStockBadge } from '../ui/StockBadge'
import { Product, ProductVariant } from '@/types/species'
import { useBrowsingTracker } from '@/hooks/useBrowsingTracker'
import { useCart } from '@/hooks/useCart'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { trackEvent } = useBrowsingTracker()
  const { addToCart, isLoading } = useCart()

  if (!product) return null

  const currentProduct = selectedVariant ? { ...product, ...selectedVariant } : product
  const images = [product.imageUrl, ...(product.variants?.map(v => v.imageUrl) || [])].filter(Boolean)

  const handleAddToCart = async () => {
    await addToCart({
      product,
      variant: selectedVariant || undefined,
      quantity,
      addedAt: new Date()
    })

    trackEvent({
      type: 'cart_add',
      productId: product.id,
      timestamp: new Date(),
      metadata: {
        variant: selectedVariant?.id,
        quantity
      }
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      animation="scale"
    >
      <ModalHeader onClose={onClose}>
        <div>
          <h2 className="text-2xl font-bold text-secondary-900">{product.name}</h2>
          <p className="text-secondary-600 mt-1">{product.category}</p>
        </div>
      </ModalHeader>

      <ModalBody className="p-0">
        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary-50 rounded-2xl overflow-hidden">
              {images[selectedImageIndex] ? (
                <Image
                  src={images[selectedImageIndex]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-secondary-400">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-primary-500 ring-2 ring-primary-200'
                        : 'border-secondary-200 hover:border-primary-300'
                    }`}
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-secondary-900">
                  ${currentProduct.price.toFixed(2)}
                </span>
                {product.stock !== undefined && (
                  <DetailedStockBadge stock={product.stock} showTooltip />
                )}
              </div>

              <p className="text-secondary-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-wrap gap-2">
              {product.metadata.care_level && (
                <Badge variant={compatibilityColor(product.metadata.care_level)} size="sm">
                  {product.metadata.care_level} level
                </Badge>
              )}
              {product.metadata.temp_range && (
                <Badge variant="water" size="sm">
                  {product.metadata.temp_range}°F
                </Badge>
              )}
              {product.metadata.ph_range && (
                <Badge variant="stone" size="sm">
                  pH {product.metadata.ph_range}
                </Badge>
              )}
              {product.metadata.bioload && (
                <Badge variant="secondary" size="sm">
                  {product.metadata.bioload} bioload
                </Badge>
              )}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h4 className="font-semibold text-secondary-900 mb-3">Options</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedVariant(null)}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      !selectedVariant
                        ? 'border-primary-500 bg-primary-50 text-primary-900'
                        : 'border-secondary-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">Standard</div>
                    <div className="text-sm text-secondary-600">${product.price.toFixed(2)}</div>
                  </button>
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-3 text-left rounded-lg border transition-all ${
                        selectedVariant?.id === variant.id
                          ? 'border-primary-500 bg-primary-50 text-primary-900'
                          : 'border-secondary-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-medium">{variant.name}</div>
                      <div className="text-sm text-secondary-600">${variant.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block font-semibold text-secondary-900 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-secondary-300 flex items-center justify-center hover:bg-secondary-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-secondary-300 flex items-center justify-center hover:bg-secondary-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button variant="outline" onClick={onClose}>
          Continue Shopping
        </Button>
        <Button
          onClick={handleAddToCart}
          isLoading={isLoading}
          loadingText="Adding..."
          disabled={product.stock === 0}
        >
          Add to Cart • ${(currentProduct.price * quantity).toFixed(2)}
        </Button>
      </ModalFooter>
    </Modal>
  )
}