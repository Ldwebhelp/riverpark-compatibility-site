'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { Product } from '@/types/species'

interface ProductDetailProps {
  product: Product
  onAddToCart?: (product: Product, quantity: number) => void
}

export default function ProductDetail({ product, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState<string>('default')

  const handleAddToCart = () => {
    onAddToCart?.(product, quantity)
  }

  const stockAmount = product.stock ?? 0
  const stockStatus = stockAmount > 0 ?
    stockAmount <= 5 ? 'low-stock' : 'in-stock'
    : 'out-of-stock'

  const stockText = stockAmount === 0 ? 'Out of Stock' :
    stockAmount <= 5 ? `Low Stock (${stockAmount} left)` :
    `${stockAmount} in Stock`

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Scrollable Content */}
        <div className="space-y-8">
          {/* Product Image */}
          <div className="aspect-square relative bg-secondary-50 rounded-2xl overflow-hidden">
            <Image
              src={product.imageUrl || '/api/placeholder/400/400'}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Description */}
          <section>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Product Description
            </h2>
            <div className="prose prose-secondary max-w-none">
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="bg-secondary-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    High-quality materials and construction
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    Compatible with freshwater aquarium setups
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    Easy to install and maintain
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    Suitable for {product.metadata?.care_level || 'all'} level aquarists
                  </li>
                </ul>
              </div>

              {/* Compatibility Information */}
              {product.metadata?.compatible_with && (
                <div className="bg-water-50 border border-water-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-water-900 mb-4">
                    Species Compatibility
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.metadata.compatible_with.map((species, index) => (
                      <Badge
                        key={index}
                        variant="water"
                        size="sm"
                        className="text-water-800"
                      >
                        {species}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Care Instructions */}
              <div className="bg-plant-50 border border-plant-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-plant-900 mb-4">
                  Care & Maintenance
                </h3>
                <div className="space-y-4 text-secondary-700">
                  <div>
                    <h4 className="font-medium text-plant-800 mb-2">Setup Instructions</h4>
                    <p>Follow the included instructions for proper installation and setup in your aquarium environment.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-plant-800 mb-2">Maintenance</h4>
                    <p>Regular cleaning and maintenance will ensure optimal performance and longevity of this product.</p>
                  </div>
                  {product.metadata?.temp_range && (
                    <div>
                      <h4 className="font-medium text-plant-800 mb-2">Temperature Range</h4>
                      <p>Suitable for water temperatures: {product.metadata.temp_range}°F</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Product Images */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="aspect-video relative bg-secondary-100 rounded-lg overflow-hidden">
                  <Image
                    src="/api/placeholder/400/300"
                    alt="Product detail view 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-video relative bg-secondary-100 rounded-lg overflow-hidden">
                  <Image
                    src="/api/placeholder/400/300"
                    alt="Product detail view 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Reviews Section */}
              <div className="border-t border-secondary-200 pt-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  Customer Reviews
                </h3>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-secondary-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-secondary-600">4.2 out of 5 stars (24 reviews)</span>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-secondary-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-secondary-900">Sarah M.</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-secondary-500">2 days ago</span>
                    </div>
                    <p className="text-secondary-700">
                      "Excellent quality product! Easy to install and my fish seem to love it. Great value for money."
                    </p>
                  </div>

                  <div className="bg-white border border-secondary-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-secondary-900">Mike R.</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(4)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <svg className="w-4 h-4 text-secondary-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm text-secondary-500">1 week ago</span>
                    </div>
                    <p className="text-secondary-700">
                      "Good product overall. Installation was straightforward and it works well in my 40-gallon tank."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Sticky Product Info */}
        <div className="lg:sticky lg:top-8 lg:h-fit">
          <div className="bg-white border border-secondary-200 rounded-2xl p-8 shadow-soft">
            {/* Product Name & Brand */}
            <div className="mb-6">
              <Badge variant="primary" size="sm" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-secondary-900 mb-2">
                {product.name}
              </h1>
              <p className="text-secondary-600">
                Brand: <span className="font-medium">Riverpark Premium</span>
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-secondary-900">
                  ${product.price}
                </span>
                <span className="text-lg text-secondary-500 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-success-600 font-medium">
                Save ${((product.price * 1.2) - product.price).toFixed(2)} (17% off)
              </p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <Badge
                variant={stockStatus === 'in-stock' ? 'success' : stockStatus === 'low-stock' ? 'warning' : 'danger'}
                size="md"
                className="mb-2"
              >
                {stockText}
              </Badge>
            </div>

            {/* Product Options */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-secondary-700 mb-3">
                Size/Variant
              </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="default">Standard Size</option>
                <option value="large">Large Size (+$10)</option>
                <option value="xl">Extra Large (+$20)</option>
              </select>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-secondary-700 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
                  disabled={quantity <= 1}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-xl font-medium text-secondary-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
                  disabled={quantity >= stockAmount}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={stockAmount === 0}
                className="w-full"
                size="lg"
              >
                {stockAmount === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>

              <Button
                variant="outline"
                className="w-full"
                size="lg"
                leftIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              >
                Add to Wishlist
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-secondary-200 pt-6 space-y-4">
              <h3 className="font-semibold text-secondary-900 mb-4">Product Details</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Product ID:</span>
                  <span className="text-secondary-900 font-medium">{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Category:</span>
                  <span className="text-secondary-900 font-medium">{product.category}</span>
                </div>
                {product.metadata?.care_level && (
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Care Level:</span>
                    <span className="text-secondary-900 font-medium capitalize">{product.metadata.care_level}</span>
                  </div>
                )}
                {product.metadata?.temp_range && (
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Temperature:</span>
                    <span className="text-secondary-900 font-medium">{product.metadata.temp_range}°F</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Sharing */}
            <div className="border-t border-secondary-200 pt-6 mt-6">
              <h3 className="font-semibold text-secondary-900 mb-4">Share</h3>
              <div className="flex gap-3">
                <button className="p-2 rounded-lg border border-secondary-300 hover:bg-secondary-50 transition-colors">
                  <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg border border-secondary-300 hover:bg-secondary-50 transition-colors">
                  <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg border border-secondary-300 hover:bg-secondary-50 transition-colors">
                  <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.61 4.61 0 0 0-2.633 2.633 6.53 6.53 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/>
                    <circle cx="11.994" cy="11.979" r="3.003"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}