import { Product, Species } from '@/types/species'

export interface MetadataRule {
  id: string
  name: string
  condition: (product: Product, species?: Species) => boolean
  action: (product: Product, species?: Species) => Partial<Product['metadata']>
  priority: number
}

export class MetadataEngine {
  private rules: MetadataRule[] = []

  constructor() {
    this.initializeDefaultRules()
  }

  private initializeDefaultRules() {
    this.rules = [
      {
        id: 'fish-food-compatibility',
        name: 'Fish Food Species Compatibility',
        condition: (product) => product.category === 'Fish Food',
        action: (product) => {
          const metadata: Partial<Product['metadata']> = {}

          if (product.name.toLowerCase().includes('tropical')) {
            metadata.compatible_with = ['Guppy', 'Tetra', 'Angel Fish', 'Discus']
            metadata.temp_range = '72-82'
          }

          if (product.name.toLowerCase().includes('goldfish')) {
            metadata.compatible_with = ['Goldfish', 'Koi']
            metadata.temp_range = '65-75'
          }

          if (product.name.toLowerCase().includes('betta')) {
            metadata.compatible_with = ['Betta']
            metadata.temp_range = '76-82'
          }

          if (product.name.toLowerCase().includes('cichlid')) {
            metadata.compatible_with = ['Cichlid', 'Angel Fish', 'Discus']
            metadata.temp_range = '76-84'
          }

          return metadata
        },
        priority: 10
      },
      {
        id: 'heater-temperature-mapping',
        name: 'Heater Temperature Requirements',
        condition: (product) => product.category === 'Heaters',
        action: (product) => {
          const metadata: Partial<Product['metadata']> = {}

          const watts = parseInt(product.name.match(/(\d+)w/i)?.[1] || '0')

          if (watts >= 25 && watts <= 50) {
            metadata.tank_size_min = 10
            metadata.temp_range = '68-82'
            metadata.compatible_with = ['Small Tropical Fish', 'Betta', 'Guppy']
          } else if (watts >= 75 && watts <= 100) {
            metadata.tank_size_min = 20
            metadata.temp_range = '68-84'
            metadata.compatible_with = ['Tropical Fish', 'Cichlids', 'Angel Fish']
          } else if (watts >= 150) {
            metadata.tank_size_min = 40
            metadata.temp_range = '68-86'
            metadata.compatible_with = ['Large Tropical Fish', 'Discus', 'Large Cichlids']
          }

          return metadata
        },
        priority: 9
      },
      {
        id: 'filter-bioload-capacity',
        name: 'Filter Bioload and Tank Size',
        condition: (product) => product.category === 'Filters',
        action: (product) => {
          const metadata: Partial<Product['metadata']> = {}

          if (product.name.toLowerCase().includes('canister')) {
            metadata.bioload = 'high'
            metadata.tank_size_min = 40
            metadata.compatible_with = ['Large Fish', 'Heavy Bioload Species']
          } else if (product.name.toLowerCase().includes('hang on back') || product.name.toLowerCase().includes('hob')) {
            metadata.bioload = 'medium'
            metadata.tank_size_min = 10
            metadata.compatible_with = ['Medium Fish', 'Community Tank']
          } else if (product.name.toLowerCase().includes('sponge')) {
            metadata.bioload = 'low'
            metadata.tank_size_min = 5
            metadata.compatible_with = ['Small Fish', 'Fry', 'Gentle Species']
            metadata.care_level = 'beginner'
          }

          return metadata
        },
        priority: 8
      },
      {
        id: 'water-conditioner-ph',
        name: 'Water Conditioner pH Targeting',
        condition: (product) => product.category === 'Water Conditioners',
        action: (product) => {
          const metadata: Partial<Product['metadata']> = {}

          if (product.name.toLowerCase().includes('ph up') || product.name.toLowerCase().includes('alkaline')) {
            metadata.ph_range = '7.5-8.5'
            metadata.compatible_with = ['African Cichlids', 'Livebearers', 'Goldfish']
          } else if (product.name.toLowerCase().includes('ph down') || product.name.toLowerCase().includes('acidic')) {
            metadata.ph_range = '6.0-7.0'
            metadata.compatible_with = ['Discus', 'Tetras', 'Angelfish', 'Soft Water Fish']
          } else if (product.name.toLowerCase().includes('neutral')) {
            metadata.ph_range = '6.8-7.2'
            metadata.compatible_with = ['Most Tropical Fish', 'Community Tank']
          } else {
            metadata.ph_range = '6.5-8.0'
            metadata.compatible_with = ['All Freshwater Fish']
          }

          return metadata
        },
        priority: 7
      },
      {
        id: 'lighting-plant-compatibility',
        name: 'Lighting for Plants and Fish',
        condition: (product) => product.category === 'Lighting',
        action: (product) => {
          const metadata: Partial<Product['metadata']> = {}

          if (product.name.toLowerCase().includes('led')) {
            metadata.care_level = 'beginner'
            metadata.tags = ['energy-efficient', 'long-lasting']
          }

          if (product.name.toLowerCase().includes('plant') || product.name.toLowerCase().includes('grow')) {
            metadata.compatible_with = ['Planted Tank', 'Live Plants']
            metadata.tags = [...(metadata.tags || []), 'plant-growth']
          }

          if (product.name.toLowerCase().includes('full spectrum')) {
            metadata.compatible_with = ['All Fish', 'Live Plants', 'Coral']
          }

          return metadata
        },
        priority: 6
      },
      {
        id: 'substrate-species-preference',
        name: 'Substrate Species Preferences',
        condition: (product) => product.category === 'Substrate',
        action: (product) => {
          const metadata: Partial<Product['metadata']> = {}

          if (product.name.toLowerCase().includes('sand')) {
            metadata.compatible_with = ['Bottom Dwellers', 'Corydoras', 'Loaches', 'Rays']
            metadata.care_level = 'intermediate'
          } else if (product.name.toLowerCase().includes('gravel')) {
            metadata.compatible_with = ['Most Fish', 'Community Tank']
            metadata.care_level = 'beginner'
          } else if (product.name.toLowerCase().includes('plant') || product.name.toLowerCase().includes('soil')) {
            metadata.compatible_with = ['Planted Tank', 'Live Plants']
            metadata.care_level = 'intermediate'
          }

          return metadata
        },
        priority: 5
      },
      {
        id: 'decoration-aggression-level',
        name: 'Decoration Aggression Compatibility',
        condition: (product) => product.category === 'Decorations',
        action: (product) => {
          const metadata: Partial<Product['metadata']> = {}

          if (product.name.toLowerCase().includes('cave') || product.name.toLowerCase().includes('hide')) {
            metadata.compatible_with = ['Shy Fish', 'Territorial Fish', 'Breeding Fish']
            metadata.aggression = 'peaceful'
          } else if (product.name.toLowerCase().includes('driftwood')) {
            metadata.compatible_with = ['Soft Water Fish', 'Natural Setup']
            metadata.ph_range = '6.0-7.0'
          } else if (product.name.toLowerCase().includes('rock') || product.name.toLowerCase().includes('stone')) {
            metadata.compatible_with = ['Cichlids', 'Hard Water Fish']
            metadata.ph_range = '7.5-8.5'
          }

          return metadata
        },
        priority: 4
      }
    ]
  }

  addRule(rule: MetadataRule) {
    this.rules.push(rule)
    this.rules.sort((a, b) => b.priority - a.priority)
  }

  removeRule(ruleId: string) {
    this.rules = this.rules.filter(rule => rule.id !== ruleId)
  }

  processProduct(product: Product, species?: Species): Product {
    let enhancedMetadata = { ...product.metadata }

    for (const rule of this.rules) {
      if (rule.condition(product, species)) {
        const ruleMetadata = rule.action(product, species)
        enhancedMetadata = this.mergeMetadata(enhancedMetadata, ruleMetadata)
      }
    }

    return {
      ...product,
      metadata: enhancedMetadata
    }
  }

  processProducts(products: Product[], species?: Species[]): Product[] {
    return products.map(product => this.processProduct(product, species?.[0]))
  }

  findCompatibleProducts(targetSpecies: Species, products: Product[]): Product[] {
    return products.filter(product => {
      const enhancedProduct = this.processProduct(product, targetSpecies)
      return this.isProductCompatible(enhancedProduct, targetSpecies)
    })
  }

  private mergeMetadata(
    existing: Product['metadata'],
    additional: Partial<Product['metadata']>
  ): Product['metadata'] {
    return {
      compatible_with: [
        ...(existing.compatible_with || []),
        ...(additional.compatible_with || [])
      ].filter((item, index, array) => array.indexOf(item) === index),
      temp_range: additional.temp_range || existing.temp_range,
      ph_range: additional.ph_range || existing.ph_range,
      hardness_range: additional.hardness_range || existing.hardness_range,
      tank_size_min: additional.tank_size_min || existing.tank_size_min,
      care_level: additional.care_level || existing.care_level,
      tags: [
        ...(existing.tags || []),
        ...(additional.tags || [])
      ].filter((item, index, array) => array.indexOf(item) === index),
      bioload: additional.bioload || existing.bioload,
      aggression: additional.aggression || existing.aggression
    }
  }

  private isProductCompatible(product: Product, species: Species): boolean {
    const metadata = product.metadata

    if (metadata.compatible_with) {
      const isDirectMatch = metadata.compatible_with.some(compatible =>
        compatible.toLowerCase().includes(species.name.toLowerCase()) ||
        species.name.toLowerCase().includes(compatible.toLowerCase())
      )
      if (isDirectMatch) return true
    }

    if (species.detailedInfo) {
      const speciesInfo = species.detailedInfo

      if (metadata.temp_range && speciesInfo.waterParams.temperature) {
        const productTempRange = this.parseRange(metadata.temp_range)
        const speciesTempRange = this.parseRange(speciesInfo.waterParams.temperature)
        if (!this.rangesOverlap(productTempRange, speciesTempRange)) {
          return false
        }
      }

      if (metadata.ph_range && speciesInfo.waterParams.ph) {
        const productPhRange = this.parseRange(metadata.ph_range)
        const speciesPhRange = this.parseRange(speciesInfo.waterParams.ph)
        if (!this.rangesOverlap(productPhRange, speciesPhRange)) {
          return false
        }
      }

      if (metadata.care_level && speciesInfo.careLevel) {
        const careLevelMatch = {
          'beginner': ['beginner'],
          'intermediate': ['beginner', 'intermediate'],
          'advanced': ['beginner', 'intermediate', 'advanced']
        }

        if (!careLevelMatch[metadata.care_level]?.includes(speciesInfo.careLevel.toLowerCase())) {
          return false
        }
      }
    }

    return true
  }

  private parseRange(range: string): [number, number] {
    const numbers = range.match(/\d+\.?\d*/g)
    if (!numbers || numbers.length < 2) {
      const single = parseFloat(numbers?.[0] || '0')
      return [single, single]
    }
    return [parseFloat(numbers[0]), parseFloat(numbers[1])]
  }

  private rangesOverlap(range1: [number, number], range2: [number, number]): boolean {
    return range1[1] >= range2[0] && range2[1] >= range1[0]
  }

  generateCompatibilityReport(species: Species, products: Product[]): {
    compatible: Product[]
    incompatible: Product[]
    recommendations: string[]
  } {
    const compatible: Product[] = []
    const incompatible: Product[] = []
    const recommendations: string[] = []

    products.forEach(product => {
      const enhancedProduct = this.processProduct(product, species)
      if (this.isProductCompatible(enhancedProduct, species)) {
        compatible.push(enhancedProduct)
      } else {
        incompatible.push(enhancedProduct)
      }
    })

    if (compatible.length === 0) {
      recommendations.push(`No compatible products found for ${species.name}. Consider checking care requirements.`)
    }

    const missingCategories = ['Fish Food', 'Water Conditioners', 'Filters']
      .filter(category => !compatible.some(p => p.category === category))

    missingCategories.forEach(category => {
      recommendations.push(`Consider adding ${category} suitable for ${species.name}`)
    })

    return { compatible, incompatible, recommendations }
  }
}

export const metadataEngine = new MetadataEngine()