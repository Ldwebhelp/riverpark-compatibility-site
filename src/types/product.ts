export interface Product {
  id: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  category: ProductCategory
  subcategory?: string
  imageUrl: string
  images?: string[]
  inStock: boolean
  stockLevel?: number
  brand?: string
  sku: string
  compatibility: ProductCompatibility
  specifications?: Record<string, string>
  features?: string[]
  reviews?: {
    rating: number
    count: number
  }
  tags?: string[]
}

export interface ProductCompatibility {
  species: string[]
  tankSizes: number[]
  waterTypes: ('freshwater' | 'saltwater' | 'brackish')[]
  careLevel?: ('beginner' | 'intermediate' | 'advanced')[]
}

export type ProductCategory = 
  | 'tanks'
  | 'filtration'
  | 'heating'
  | 'lighting'
  | 'substrate'
  | 'decorations'
  | 'plants'
  | 'food'
  | 'water-care'
  | 'test-kits'
  | 'accessories'
  | 'maintenance'

export interface ProductRecommendation {
  product: Product
  reason: string
  priority: 'essential' | 'recommended' | 'optional'
  compatibility: number // 0-100 score
}

export interface TankEquipmentSetup {
  tankSize: number
  species: string[]
  essential: ProductRecommendation[]
  recommended: ProductRecommendation[]
  optional: ProductRecommendation[]
  totalCost: {
    essential: number
    recommended: number
    optional: number
  }
}

export interface ProductFilter {
  category?: ProductCategory
  priceRange?: {
    min: number
    max: number
  }
  tankSize?: number
  species?: string[]
  inStock?: boolean
  brand?: string
  rating?: number
}