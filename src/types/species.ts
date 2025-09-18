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
}

export interface CompatibilityCheck {
  species1: string
  species2: string
  rating: CompatibilityRating
  reason?: string
}