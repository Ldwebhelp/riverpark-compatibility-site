'use client'

import { useState, useEffect } from 'react'
import { CartItem } from '@/types/species'

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('aquarium-cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        setItems(parsed.map((item: any) => ({
          ...item,
          addedAt: new Date(item.addedAt)
        })))
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('aquarium-cart', JSON.stringify(items))
    }
  }, [items])

  const addToCart = async (newItem: CartItem): Promise<void> => {
    setIsLoading(true)

    try {
      setItems(currentItems => {
        const existingItemIndex = currentItems.findIndex(
          item =>
            item.product.id === newItem.product.id &&
            item.variant?.id === newItem.variant?.id
        )

        if (existingItemIndex > -1) {
          const updatedItems = [...currentItems]
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + newItem.quantity
          }
          return updatedItems
        }

        return [...currentItems, newItem]
      })

      await new Promise(resolve => setTimeout(resolve, 500))
    } finally {
      setIsLoading(false)
    }
  }

  const updateQuantity = (productId: string, variantId: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId)
      return
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId && item.variant?.id === variantId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const removeFromCart = (productId: string, variantId?: string) => {
    setItems(currentItems =>
      currentItems.filter(item =>
        !(item.product.id === productId && item.variant?.id === variantId)
      )
    )
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem('aquarium-cart')
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = item.variant?.price || item.product.price
      return total + (price * item.quantity)
    }, 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return {
    items,
    isLoading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getTotalItems
  }
}