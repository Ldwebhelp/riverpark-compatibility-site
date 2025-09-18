import { Product } from '@/types/product'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
  showCompatibility?: boolean
  compatibilityScore?: number
  priority?: 'essential' | 'recommended' | 'optional'
  reason?: string
}

export default function ProductCard({ 
  product, 
  showCompatibility = false,
  compatibilityScore,
  priority,
  reason
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'essential':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'recommended':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'optional':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
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
    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      {/* Product Image */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-t-lg overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Priority Badge */}
        {priority && (
          <div className="absolute top-2 left-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(priority)}`}>
              {getPriorityIcon(priority)}
              <span className="ml-1 capitalize">{priority}</span>
            </span>
          </div>
        )}

        {/* Stock Status */}
        <div className="absolute top-2 right-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Compatibility Score */}
        {showCompatibility && compatibilityScore !== undefined && (
          <div className="absolute bottom-2 right-2">
            <div className="bg-white rounded-full px-2 py-1 text-xs font-bold text-aqua-600 shadow-md">
              {compatibilityScore}% match
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-1">
              {product.name}
            </h3>
            {product.brand && (
              <p className="text-sm text-gray-500 mb-2">
                by {product.brand}
              </p>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Recommendation Reason */}
        {reason && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
            <p className="text-blue-800 text-sm">
              <strong>Why recommended:</strong> {reason}
            </p>
          </div>
        )}

        {/* Product Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-3">
            <ul className="text-sm text-gray-600 space-y-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-aqua-500 rounded-full mr-2 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
              {product.features.length > 2 && (
                <li className="text-xs text-gray-500">
                  +{product.features.length - 2} more features
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Reviews */}
        {product.reviews && (
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.reviews!.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.reviews.rating} ({product.reviews.count} reviews)
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-aqua-600 text-white text-center py-2 px-4 rounded-lg hover:bg-aqua-700 transition-colors text-sm font-medium"
          >
            View Details
          </Link>
          <button
            className="flex-shrink-0 bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
            title="Add to wishlist"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}