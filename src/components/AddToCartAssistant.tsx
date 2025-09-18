'use client'

import { useState } from 'react'
import { useBigCommerceProducts } from '@/lib/bigcommerce'
import { Product } from '@/types/product'

interface AddToCartAssistantProps {
  products: Product[]
  onSuccess?: () => void
  onError?: (error: string) => void
}

export default function AddToCartAssistant({ 
  products, 
  onSuccess, 
  onError 
}: AddToCartAssistantProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    products.map(p => p.id)
  )
  const { addProductsToCart } = useBigCommerceProducts()

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleAddToCart = async () => {
    if (selectedProducts.length === 0) {
      onError?.('Please select at least one product')
      return
    }

    setIsLoading(true)
    try {
      const productIds = selectedProducts.map(id => parseInt(id))
      const quantities = selectedProducts.map(() => 1) // Default quantity of 1

      await addProductsToCart(productIds, quantities)
      
      onSuccess?.()
      
      // Show success feedback
      const successMessage = `Added ${selectedProducts.length} ${selectedProducts.length === 1 ? 'item' : 'items'} to cart`
      showToast(successMessage, 'success')
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to add items to cart'
      onError?.(errorMessage)
      showToast(errorMessage, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBundleAddToCart = async () => {
    if (products.length === 0) return

    setIsLoading(true)
    try {
      // Bundle all products into one cart action
      const productIds = products.map(p => parseInt(p.id))
      const quantities = products.map(() => 1)

      await addProductsToCart(productIds, quantities)
      
      onSuccess?.()
      showToast(`Added complete bundle (${products.length} items) to cart`, 'success')
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to add bundle to cart'
      onError?.(errorMessage)
      showToast(errorMessage, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const totalPrice = products
    .filter(p => selectedProducts.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          🛒 Add to Cart Assistant
        </h3>
        <div className="text-sm text-gray-500">
          {selectedProducts.length} of {products.length} selected
        </div>
      </div>

      {/* Product Selection */}
      <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
        {products.map(product => (
          <div
            key={product.id}
            className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
              selectedProducts.includes(product.id)
                ? 'bg-aqua-50 border-aqua-200'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => toggleProduct(product.id)}
                className="w-4 h-4 text-aqua-600 border-gray-300 rounded focus:ring-aqua-500"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">
                  {product.name}
                </h4>
                {product.brand && (
                  <p className="text-xs text-gray-500">by {product.brand}</p>
                )}
                <div className="flex items-center mt-1">
                  <span className="text-sm font-semibold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {!product.inStock && (
                    <span className="ml-2 text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total and Actions */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium text-gray-900">Total:</span>
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(totalPrice)}
          </span>
        </div>

        <div className="space-y-2">
          {/* Individual Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={isLoading || selectedProducts.length === 0}
            className="w-full bg-aqua-600 text-white py-3 px-4 rounded-lg hover:bg-aqua-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding to Cart...
              </>
            ) : (
              `Add Selected Items to Cart (${selectedProducts.length})`
            )}
          </button>

          {/* Bundle Add to Cart */}
          {products.length > 1 && (
            <button
              onClick={handleBundleAddToCart}
              disabled={isLoading}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium text-sm"
            >
              {isLoading ? 'Adding Bundle...' : `Add Complete Bundle (${products.length} items)`}
            </button>
          )}

          {/* Quick Actions */}
          <div className="flex space-x-2 pt-2">
            <button
              onClick={() => setSelectedProducts(products.map(p => p.id))}
              className="flex-1 text-aqua-600 hover:text-aqua-800 text-sm font-medium"
            >
              Select All
            </button>
            <button
              onClick={() => setSelectedProducts([])}
              className="flex-1 text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Stock Warnings */}
        {products.some(p => !p.inStock) && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-800 text-sm">
                Some items are out of stock and will be excluded from your cart.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Show toast notification
 */
function showToast(message: string, type: 'success' | 'error') {
  // Create toast element
  const toast = document.createElement('div')
  toast.className = `fixed top-4 right-4 z-50 max-w-sm w-full rounded-lg shadow-lg p-4 transition-all duration-300 transform translate-x-full ${
    type === 'success' 
      ? 'bg-green-500 text-white' 
      : 'bg-red-500 text-white'
  }`
  
  toast.innerHTML = `
    <div class="flex items-center">
      <div class="flex-1">
        <p class="font-medium">${message}</p>
      </div>
      <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `

  document.body.appendChild(toast)

  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)'
  }, 100)

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)'
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast)
      }
    }, 300)
  }, 5000)
}

/**
 * Hidden form approach for add-to-cart (alternative method)
 */
export function createHiddenAddToCartForm(productId: string, quantity: number = 1) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = '/cart.php'
  form.style.display = 'none'

  const productInput = document.createElement('input')
  productInput.type = 'hidden'
  productInput.name = 'product_id'
  productInput.value = productId

  const quantityInput = document.createElement('input')
  quantityInput.type = 'hidden'
  quantityInput.name = 'qty'
  quantityInput.value = quantity.toString()

  form.appendChild(productInput)
  form.appendChild(quantityInput)
  document.body.appendChild(form)

  // Submit and remove
  form.submit()
  setTimeout(() => {
    if (form.parentElement) {
      form.parentElement.removeChild(form)
    }
  }, 100)
}