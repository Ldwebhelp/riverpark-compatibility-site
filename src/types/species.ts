export type CompatibilityRating = 'Y' | 'N' | 'C'

export interface Species {
  id: string
  name: string
  category: string
  scientificName?: string
  compatibility: Record<string, CompatibilityRating>
  quickFacts?: string[]
  detailedInfo?: {
    description: string
    size: string
    temperament: string
    diet: string
    tankSize: string
    waterParams: {
      temperature: string
      ph: string
      hardness: string
    }
    careLevel: 'Beginner' | 'Intermediate' | 'Advanced'
    lifespan: string
  }
  products?: string[]
}

export interface TankSetup {
  id: string
  name: string
  size: number
  species: string[]
  equipment: string[]
  waterParams: {
    temperature: number
    ph: number
    hardness: number
  }
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  imageUrl?: string
  compatibility: string[]
  metadata: {
    compatible_with?: string[]
    temp_range?: string
    ph_range?: string
    hardness_range?: string
    tank_size_min?: number
    care_level?: 'beginner' | 'intermediate' | 'advanced'
    tags?: string[]
    bioload?: 'low' | 'medium' | 'high'
    aggression?: 'peaceful' | 'semi-aggressive' | 'aggressive'
  }
  variants?: ProductVariant[]
  reviews?: ProductReview[]
  stock?: number
  sku?: string
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  imageUrl?: string
  attributes: Record<string, string>
}

export interface ProductReview {
  id: string
  rating: number
  comment: string
  author: string
  date: string
  verified: boolean
}

export interface CartItem {
  product: Product
  variant?: ProductVariant
  quantity: number
  addedAt: Date
}

export interface BrowsingEvent {
  type: 'product_view' | 'species_view' | 'cart_add' | 'cart_remove' | 'checkout_start'
  productId?: string
  speciesId?: string
  timestamp: Date
  metadata?: Record<string, any>
}

export interface SmartRecommendation {
  product: Product
  reason: string
  confidence: number
  category: 'compatibility' | 'equipment' | 'care' | 'upgrade'
}

export interface CompatibilityCheck {
  species1: string
  species2: string
  rating: CompatibilityRating
  reason?: string
}