'use client'

import Image from 'next/image'
import Sidebar, { SidebarHeader, SidebarBody, SidebarFooter } from '../ui/Sidebar'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { useCart } from '@/hooks/useCart'
import { getStockBadgeVariant, getStockText } from '@/utils/stockUtils'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()

  const handleQuantityChange = (productId: string, variantId: string | undefined, newQuantity: number) => {
    updateQuantity(productId, variantId, newQuantity)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <Sidebar isOpen={isOpen} onClose={onClose} side="right" size="lg">
      <SidebarHeader onClose={onClose}>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-bold text-secondary-900">Shopping Cart</h2>
          {getTotalItems() > 0 && (
            <Badge variant="primary" size="sm">
              {getTotalItems()} items
            </Badge>
          )}
        </div>
      </SidebarHeader>

      <SidebarBody>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L7 13m0 0L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m10 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Your cart is empty</h3>
            <p className="text-secondary-600 mb-6">Start shopping to add items to your cart</p>
            <Button onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => {
              const itemPrice = item.variant?.price || item.product.price
              const itemTotal = itemPrice * item.quantity

              return (
                <div
                  key={`${item.product.id}-${item.variant?.id || 'default'}`}
                  className="flex gap-4 p-4 bg-secondary-50 rounded-xl"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg overflow-hidden">
                    {item.product.imageUrl ? (
                      <Image
                        src={item.variant?.imageUrl || item.product.imageUrl}
                        alt={item.product.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-secondary-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-secondary-900 truncate">
                      {item.product.name}
                    </h4>
                    {item.variant && (
                      <p className="text-sm text-secondary-600 truncate">
                        {item.variant.name}
                      </p>
                    )}
                    <p className="text-sm text-secondary-500">
                      {item.product.category}
                    </p>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(
                            item.product.id,
                            item.variant?.id,
                            item.quantity - 1
                          )}
                          className="w-6 h-6 rounded border border-secondary-300 flex items-center justify-center hover:bg-secondary-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(
                            item.product.id,
                            item.variant?.id,
                            item.quantity + 1
                          )}
                          className="w-6 h-6 rounded border border-secondary-300 flex items-center justify-center hover:bg-secondary-100 transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="font-semibold text-secondary-900">
                          {formatPrice(itemTotal)}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-xs text-secondary-500">
                            {formatPrice(itemPrice)} each
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id, item.variant?.id)}
                      className="mt-2 text-xs text-danger-600 hover:text-danger-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </SidebarBody>

      {items.length > 0 && (
        <SidebarFooter>
          <div className="space-y-4 w-full">
            {/* Total */}
            <div className="flex items-center justify-between py-3 border-t border-secondary-200">
              <span className="text-lg font-semibold text-secondary-900">Total</span>
              <span className="text-xl font-bold text-secondary-900">
                {formatPrice(getTotalPrice())}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Continue Shopping
              </Button>
              <Button className="flex-1">
                Checkout
              </Button>
            </div>

            {/* Additional Info */}
            <p className="text-xs text-secondary-500 text-center">
              Free shipping on orders over $75
            </p>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  )
}