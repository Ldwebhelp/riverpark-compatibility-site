import { Product, ProductRecommendation, TankEquipmentSetup } from '@/types/product'

// Sample product data - would be replaced with BigCommerce API data
export const sampleProducts: Product[] = [
  {
    id: 'tank-55-gallon',
    name: '55 Gallon Glass Aquarium',
    description: 'Premium glass aquarium perfect for community tanks. Includes black trim and is designed for freshwater setups.',
    price: 189.99,
    compareAtPrice: 229.99,
    category: 'tanks',
    imageUrl: '/images/products/55-gallon-tank.jpg',
    inStock: true,
    stockLevel: 12,
    brand: 'Aqueon',
    sku: 'AQ-55-BLK',
    compatibility: {
      species: ['malawian-cichlids', 'angelfish', 'barbs', 'tetras', 'plecos'],
      tankSizes: [55],
      waterTypes: ['freshwater'],
      careLevel: ['beginner', 'intermediate']
    },
    specifications: {
      'Dimensions': '48" L x 13" W x 21" H',
      'Weight': '78 lbs empty',
      'Glass Thickness': '10mm',
      'Warranty': '1 Year'
    },
    features: [
      'High-quality glass construction',
      'Black silicone seal',
      'Distortion-free viewing',
      'Standard hood compatible'
    ],
    reviews: {
      rating: 4.5,
      count: 234
    },
    tags: ['community-tank', 'cichlids', 'beginner-friendly']
  },
  {
    id: 'filter-canister-fluval',
    name: 'Fluval 407 Canister Filter',
    description: 'Professional-grade canister filter for tanks up to 100 gallons. Multi-stage filtration with biological, chemical, and mechanical media.',
    price: 199.99,
    category: 'filtration',
    imageUrl: '/images/products/fluval-407.jpg',
    inStock: true,
    brand: 'Fluval',
    sku: 'FL-407',
    compatibility: {
      species: ['malawian-cichlids', 'angelfish', 'discus', 'larger-catfish'],
      tankSizes: [55, 75, 90],
      waterTypes: ['freshwater'],
      careLevel: ['intermediate', 'advanced']
    },
    specifications: {
      'Flow Rate': '383 GPH',
      'Max Tank Size': '100 gallons',
      'Media Capacity': '1.5 liters',
      'Power Consumption': '34W'
    },
    features: [
      'Multi-stage filtration',
      'Self-priming pump head',
      'Easy maintenance',
      'Quiet operation'
    ],
    reviews: {
      rating: 4.7,
      count: 156
    }
  },
  {
    id: 'heater-aqueon-150w',
    name: 'Aqueon Pro 150W Heater',
    description: 'Fully submersible aquarium heater with shatterproof construction and LED temperature display.',
    price: 34.99,
    category: 'heating',
    imageUrl: '/images/products/aqueon-heater-150w.jpg',
    inStock: true,
    brand: 'Aqueon',
    sku: 'AQ-PRO-150',
    compatibility: {
      species: ['angelfish', 'discus', 'tetras', 'barbs', 'gouramis'],
      tankSizes: [40, 55, 75],
      waterTypes: ['freshwater'],
      careLevel: ['beginner', 'intermediate', 'advanced']
    },
    specifications: {
      'Wattage': '150W',
      'Tank Size': '40-75 gallons',
      'Length': '11 inches',
      'Temperature Range': '68-88°F'
    },
    features: [
      'LED temperature display',
      'Shatterproof construction',
      'Auto shut-off protection',
      '3-year warranty'
    ],
    reviews: {
      rating: 4.3,
      count: 89
    }
  },
  {
    id: 'food-cichlid-pellets',
    name: 'Hikari Cichlid Gold Pellets',
    description: 'Premium cichlid food with natural color enhancers. Floating pellets ideal for surface and mid-water feeders.',
    price: 12.99,
    category: 'food',
    imageUrl: '/images/products/hikari-cichlid-gold.jpg',
    inStock: true,
    brand: 'Hikari',
    sku: 'HK-CG-250',
    compatibility: {
      species: ['malawian-cichlids', 'tanganyikan-cichlids', 'new-world-cichlids', 'angelfish'],
      tankSizes: [20, 29, 40, 55, 75, 90, 125],
      waterTypes: ['freshwater'],
      careLevel: ['beginner', 'intermediate', 'advanced']
    },
    specifications: {
      'Size': '250g',
      'Pellet Size': 'Medium (3mm)',
      'Protein': '32% min',
      'Fat': '4% min'
    },
    features: [
      'Color enhancing formula',
      'High protein content',
      'Floating pellets',
      'No artificial colors'
    ],
    reviews: {
      rating: 4.6,
      count: 312
    }
  },
  {
    id: 'substrate-sand-black',
    name: 'CaribSea Super Naturals Black Sand',
    description: 'Natural aquarium sand substrate, pH neutral and safe for all freshwater fish. Creates a striking contrast for colorful fish.',
    price: 19.99,
    category: 'substrate',
    imageUrl: '/images/products/caribsea-black-sand.jpg',
    inStock: true,
    brand: 'CaribSea',
    sku: 'CS-SN-BLK-20',
    compatibility: {
      species: ['malawian-cichlids', 'tanganyikan-cichlids', 'corydoras', 'plecos'],
      tankSizes: [29, 40, 55, 75],
      waterTypes: ['freshwater'],
      careLevel: ['beginner', 'intermediate', 'advanced']
    },
    specifications: {
      'Weight': '20 lbs',
      'Coverage': '25-30 gallons',
      'Grain Size': '0.25-1mm',
      'pH': 'Neutral'
    },
    features: [
      'pH neutral',
      'Pre-washed',
      'Natural coloration',
      'Safe for bottom dwellers'
    ],
    reviews: {
      rating: 4.4,
      count: 78
    }
  }
]

export class ProductRecommendationEngine {
  /**
   * Get product recommendations for a tank setup
   */
  static getRecommendationsForSetup(
    tankSize: number,
    species: string[],
    budget?: number
  ): TankEquipmentSetup {
    const recommendations = this.generateRecommendations(tankSize, species)
    
    const essential = recommendations.filter(r => r.priority === 'essential')
    const recommended = recommendations.filter(r => r.priority === 'recommended')
    const optional = recommendations.filter(r => r.priority === 'optional')

    // Apply budget filtering if provided
    if (budget) {
      const filtered = this.applyBudgetConstraints(
        { essential, recommended, optional },
        budget
      )
      return {
        tankSize,
        species,
        ...filtered,
        totalCost: this.calculateTotalCost(filtered)
      }
    }

    return {
      tankSize,
      species,
      essential,
      recommended,
      optional,
      totalCost: this.calculateTotalCost({ essential, recommended, optional })
    }
  }

  /**
   * Get missing equipment for existing setup
   */
  static getMissingEquipment(
    currentEquipment: string[],
    tankSize: number,
    species: string[]
  ): ProductRecommendation[] {
    const allRecommendations = this.generateRecommendations(tankSize, species)
    
    return allRecommendations.filter(rec => 
      !currentEquipment.some(eq => 
        rec.product.category === this.getProductCategory(eq)
      )
    )
  }

  /**
   * Generate product recommendations based on tank setup
   */
  private static generateRecommendations(
    tankSize: number,
    species: string[]
  ): ProductRecommendation[] {
    const recommendations: ProductRecommendation[] = []

    // Filter products by compatibility
    const compatibleProducts = sampleProducts.filter(product =>
      this.isProductCompatible(product, tankSize, species)
    )

    // Tank (if needed for new setup)
    const tanks = compatibleProducts.filter(p => p.category === 'tanks')
    if (tanks.length > 0) {
      recommendations.push({
        product: tanks[0],
        reason: `Perfect size for your ${tankSize} gallon setup`,
        priority: 'essential',
        compatibility: 100
      })
    }

    // Filtration - Essential
    const filters = compatibleProducts.filter(p => p.category === 'filtration')
    if (filters.length > 0) {
      recommendations.push({
        product: filters[0],
        reason: 'Maintains water quality and clarity',
        priority: 'essential',
        compatibility: this.calculateCompatibilityScore(filters[0], species)
      })
    }

    // Heating - Essential for tropical species
    const needsHeating = species.some(s => 
      ['angelfish', 'discus', 'tetras', 'gouramis'].includes(s)
    )
    if (needsHeating) {
      const heaters = compatibleProducts.filter(p => p.category === 'heating')
      if (heaters.length > 0) {
        recommendations.push({
          product: heaters[0],
          reason: 'Maintains stable temperature for tropical fish',
          priority: 'essential',
          compatibility: this.calculateCompatibilityScore(heaters[0], species)
        })
      }
    }

    // Food - Essential
    const food = compatibleProducts.filter(p => p.category === 'food')
    if (food.length > 0) {
      recommendations.push({
        product: food[0],
        reason: 'Specialized nutrition for your fish species',
        priority: 'essential',
        compatibility: this.calculateCompatibilityScore(food[0], species)
      })
    }

    // Substrate - Recommended
    const substrate = compatibleProducts.filter(p => p.category === 'substrate')
    if (substrate.length > 0) {
      recommendations.push({
        product: substrate[0],
        reason: 'Creates natural environment and supports beneficial bacteria',
        priority: 'recommended',
        compatibility: this.calculateCompatibilityScore(substrate[0], species)
      })
    }

    return recommendations.sort((a, b) => b.compatibility - a.compatibility)
  }

  /**
   * Check if product is compatible with tank setup
   */
  private static isProductCompatible(
    product: Product,
    tankSize: number,
    species: string[]
  ): boolean {
    // Check tank size compatibility
    if (!product.compatibility.tankSizes.includes(tankSize)) {
      return false
    }

    // Check species compatibility
    const hasCompatibleSpecies = species.some(speciesId =>
      product.compatibility.species.includes(speciesId)
    )

    return hasCompatibleSpecies
  }

  /**
   * Calculate compatibility score for product with species
   */
  private static calculateCompatibilityScore(
    product: Product,
    species: string[]
  ): number {
    const compatibleSpecies = species.filter(s =>
      product.compatibility.species.includes(s)
    )

    return Math.round((compatibleSpecies.length / species.length) * 100)
  }

  /**
   * Apply budget constraints to recommendations
   */
  private static applyBudgetConstraints(
    recommendations: {
      essential: ProductRecommendation[]
      recommended: ProductRecommendation[]
      optional: ProductRecommendation[]
    },
    budget: number
  ): {
    essential: ProductRecommendation[]
    recommended: ProductRecommendation[]
    optional: ProductRecommendation[]
  } {
    let remaining = budget
    const result: {
      essential: ProductRecommendation[]
      recommended: ProductRecommendation[]
      optional: ProductRecommendation[]
    } = { essential: [], recommended: [], optional: [] }

    // Essential items first
    for (const rec of recommendations.essential) {
      if (remaining >= rec.product.price) {
        result.essential.push(rec)
        remaining -= rec.product.price
      }
    }

    // Recommended items second
    for (const rec of recommendations.recommended) {
      if (remaining >= rec.product.price) {
        result.recommended.push(rec)
        remaining -= rec.product.price
      }
    }

    // Optional items last
    for (const rec of recommendations.optional) {
      if (remaining >= rec.product.price) {
        result.optional.push(rec)
        remaining -= rec.product.price
      }
    }

    return result
  }

  /**
   * Calculate total cost for recommendation groups
   */
  private static calculateTotalCost(recommendations: {
    essential: ProductRecommendation[]
    recommended: ProductRecommendation[]
    optional: ProductRecommendation[]
  }) {
    return {
      essential: recommendations.essential.reduce((sum, r) => sum + r.product.price, 0),
      recommended: recommendations.recommended.reduce((sum, r) => sum + r.product.price, 0),
      optional: recommendations.optional.reduce((sum, r) => sum + r.product.price, 0)
    }
  }

  /**
   * Map equipment name to product category
   */
  private static getProductCategory(equipmentName: string): string {
    const mapping: Record<string, string> = {
      'filter': 'filtration',
      'heater': 'heating',
      'light': 'lighting',
      'substrate': 'substrate',
      'decoration': 'decorations',
      'food': 'food'
    }

    const key = Object.keys(mapping).find(k => 
      equipmentName.toLowerCase().includes(k)
    )
    
    return key ? mapping[key] : 'accessories'
  }
}