import { Species, CompatibilityRating } from '@/types/species'
import { Product, ProductCategory } from '@/types/product'
import { getSpeciesById } from '@/data/species'
import { CompatibilityEngine } from './compatibility'

export interface CompatibilityEvaluation {
  status: '✅ Fully compatible' | '⚠️ Caution' | '❌ Incompatible'
  score: number
  pairwiseResults: Array<{
    species1: string
    species2: string
    rating: CompatibilityRating
    displayName1: string
    displayName2: string
  }>
  summary: {
    compatible: number
    caution: number
    incompatible: number
    totalPairs: number
  }
  recommendations: string[]
}

export interface TankRequirements {
  minTankVolume: number
  recommendedTankVolume: number
  temperatureRange: {
    min: number
    max: number
    unit: string
  }
  phRange: {
    min: number
    max: number
  }
  hardnessRange: {
    min: number
    max: number
    unit: string
  }
  requiredCategories: Array<{
    category: ProductCategory
    priority: 'essential' | 'recommended' | 'optional'
    reason: string
  }>
  waterType: 'freshwater' | 'saltwater' | 'brackish'
}

export interface ProductNeedAnalysis {
  tankRequirements: TankRequirements
  missingItems: Array<{
    category: ProductCategory
    priority: 'essential' | 'recommended' | 'optional'
    reason: string
    suggestedProducts: Product[]
  }>
  suggestedUpgrades: Array<{
    currentItem: string
    upgrade: Product
    reason: string
    benefit: string
  }>
  careKit: {
    name: string
    description: string
    items: Product[]
    totalCost: number
  }
}

export class IntelligenceEngine {
  /**
   * Comprehensive compatibility evaluation for selected species
   */
  static evaluateCompatibility(speciesIds: string[]): CompatibilityEvaluation {
    if (speciesIds.length < 2) {
      return {
        status: '✅ Fully compatible',
        score: 100,
        pairwiseResults: [],
        summary: { compatible: 0, caution: 0, incompatible: 0, totalPairs: 0 },
        recommendations: ['Select at least 2 species to evaluate compatibility']
      }
    }

    // Loop through all selected species and compare pairwise
    const pairwiseResults = []
    let compatibleCount = 0
    let cautionCount = 0
    let incompatibleCount = 0

    for (let i = 0; i < speciesIds.length; i++) {
      for (let j = i + 1; j < speciesIds.length; j++) {
        const species1 = getSpeciesById(speciesIds[i])
        const species2 = getSpeciesById(speciesIds[j])
        
        if (species1 && species2) {
          const check = CompatibilityEngine.checkPairCompatibility(speciesIds[i], speciesIds[j])
          
          pairwiseResults.push({
            species1: speciesIds[i],
            species2: speciesIds[j],
            rating: check.rating,
            displayName1: species1.name,
            displayName2: species2.name
          })

          switch (check.rating) {
            case 'Y': compatibleCount++; break
            case 'C': cautionCount++; break
            case 'N': incompatibleCount++; break
          }
        }
      }
    }

    const totalPairs = pairwiseResults.length
    const score = Math.round(((compatibleCount + cautionCount * 0.5) / totalPairs) * 100)

    // Determine overall status
    let status: '✅ Fully compatible' | '⚠️ Caution' | '❌ Incompatible'
    if (incompatibleCount > 0) {
      status = '❌ Incompatible'
    } else if (cautionCount > 0) {
      status = '⚠️ Caution'
    } else {
      status = '✅ Fully compatible'
    }

    // Generate recommendations
    const recommendations = this.generateCompatibilityRecommendations(
      speciesIds, 
      { compatible: compatibleCount, caution: cautionCount, incompatible: incompatibleCount, totalPairs }
    )

    return {
      status,
      score,
      pairwiseResults,
      summary: { compatible: compatibleCount, caution: cautionCount, incompatible: incompatibleCount, totalPairs },
      recommendations
    }
  }

  /**
   * Analyze product needs based on selected species
   */
  static analyzeProductNeeds(
    speciesIds: string[], 
    currentEquipment: string[] = [],
    availableProducts: Product[] = []
  ): ProductNeedAnalysis {
    const tankRequirements = this.calculateTankRequirements(speciesIds)
    const missingItems = this.identifyMissingItems(tankRequirements, currentEquipment, availableProducts)
    const suggestedUpgrades = this.identifySuggestedUpgrades(currentEquipment, speciesIds, availableProducts)
    const careKit = this.generateCareKit(speciesIds, availableProducts)

    return {
      tankRequirements,
      missingItems,
      suggestedUpgrades,
      careKit
    }
  }

  /**
   * Calculate tank requirements based on selected species
   */
  private static calculateTankRequirements(speciesIds: string[]): TankRequirements {
    const species = speciesIds.map(id => getSpeciesById(id)).filter(Boolean) as Species[]
    
    if (species.length === 0) {
      return this.getDefaultRequirements()
    }

    // Calculate minimum tank volume based on species adult sizes and bioload
    let minVolume = 20 // Base minimum
    let recommendedVolume = 40

    species.forEach(s => {
      if (s.detailedInfo?.tankSize) {
        const tankSize = parseInt(s.detailedInfo.tankSize.replace(/\D/g, ''))
        if (tankSize > minVolume) minVolume = tankSize
        if (tankSize * 1.5 > recommendedVolume) recommendedVolume = tankSize * 1.5
      }

      // Species-specific volume adjustments
      if (s.id.includes('cichlids')) {
        minVolume = Math.max(minVolume, 55)
        recommendedVolume = Math.max(recommendedVolume, 75)
      }
      if (s.id === 'discus') {
        minVolume = Math.max(minVolume, 75)
        recommendedVolume = Math.max(recommendedVolume, 120)
      }
    })

    // Temperature requirements
    const tempRanges = species.map(s => {
      if (s.detailedInfo?.waterParams.temperature) {
        const temp = s.detailedInfo.waterParams.temperature
        const numbers = temp.match(/\d+/g)
        if (numbers && numbers.length >= 2) {
          return { min: parseInt(numbers[0]), max: parseInt(numbers[1]) }
        }
      }
      return { min: 72, max: 78 } // Default tropical range
    })

    const minTemp = Math.max(...tempRanges.map(t => t.min))
    const maxTemp = Math.min(...tempRanges.map(t => t.max))

    // pH requirements
    const phRanges = species.map(s => {
      if (s.detailedInfo?.waterParams.ph) {
        const ph = s.detailedInfo.waterParams.ph
        const numbers = ph.match(/[\d.]+/g)
        if (numbers && numbers.length >= 2) {
          return { min: parseFloat(numbers[0]), max: parseFloat(numbers[1]) }
        }
      }
      return { min: 6.5, max: 7.5 } // Default range
    })

    const minPh = Math.max(...phRanges.map(p => p.min))
    const maxPh = Math.min(...phRanges.map(p => p.max))

    // Required categories based on species needs
    const requiredCategories = this.determineRequiredCategories(species)

    return {
      minTankVolume: minVolume,
      recommendedTankVolume: recommendedVolume,
      temperatureRange: {
        min: minTemp,
        max: maxTemp,
        unit: '°F'
      },
      phRange: {
        min: minPh,
        max: maxPh
      },
      hardnessRange: {
        min: 5,
        max: 15,
        unit: 'dGH'
      },
      requiredCategories,
      waterType: 'freshwater'
    }
  }

  /**
   * Determine required product categories based on species
   */
  private static determineRequiredCategories(species: Species[]): Array<{
    category: ProductCategory
    priority: 'essential' | 'recommended' | 'optional'
    reason: string
  }> {
    const categories = [
      {
        category: 'tanks' as ProductCategory,
        priority: 'essential' as const,
        reason: 'Primary habitat for your fish'
      },
      {
        category: 'filtration' as ProductCategory,
        priority: 'essential' as const,
        reason: 'Maintains water quality and clarity'
      },
      {
        category: 'food' as ProductCategory,
        priority: 'essential' as const,
        reason: 'Species-appropriate nutrition'
      }
    ]

    // Conditional requirements based on species
    const needsHeating = species.some(s => 
      s.id === 'discus' || s.id === 'angelfish' || s.id.includes('tropical')
    )
    if (needsHeating) {
      categories.push({
        category: 'heating',
        priority: 'essential',
        reason: 'Tropical species require stable temperature'
      })
    }

    const needsSpecialSubstrate = species.some(s => s.id.includes('cichlids'))
    if (needsSpecialSubstrate) {
      categories.push({
        category: 'substrate',
        priority: 'recommended',
        reason: 'Cichlids prefer specific substrate types'
      })
    }

    const needsDecorations = species.some(s => 
      s.id.includes('cichlids') || s.detailedInfo?.temperament?.includes('territorial')
    )
    if (needsDecorations) {
      categories.push({
        category: 'decorations',
        priority: 'recommended',
        reason: 'Territorial fish need hiding spots and caves'
      })
    }

    // Water care is always recommended
    categories.push({
      category: 'water-care',
      priority: 'recommended',
      reason: 'Maintains optimal water conditions'
    })

    categories.push({
      category: 'test-kits',
      priority: 'recommended',
      reason: 'Monitor water parameters'
    })

    return categories
  }

  /**
   * Identify missing essential items
   */
  private static identifyMissingItems(
    requirements: TankRequirements,
    currentEquipment: string[],
    availableProducts: Product[]
  ): Array<{
    category: ProductCategory
    priority: 'essential' | 'recommended' | 'optional'
    reason: string
    suggestedProducts: Product[]
  }> {
    const missing = []

    for (const reqCategory of requirements.requiredCategories) {
      const hasCategory = currentEquipment.some(item => 
        item.toLowerCase().includes(reqCategory.category)
      )

      if (!hasCategory) {
        const suggestedProducts = availableProducts
          .filter(p => p.category === reqCategory.category)
          .slice(0, 3)

        missing.push({
          category: reqCategory.category,
          priority: reqCategory.priority,
          reason: reqCategory.reason,
          suggestedProducts
        })
      }
    }

    return missing
  }

  /**
   * Identify suggested upgrades for current equipment
   */
  private static identifySuggestedUpgrades(
    currentEquipment: string[],
    speciesIds: string[],
    availableProducts: Product[]
  ): Array<{
    currentItem: string
    upgrade: Product
    reason: string
    benefit: string
  }> {
    const upgrades = []

    // Example upgrade logic
    const hasBasicFilter = currentEquipment.some(item => 
      item.toLowerCase().includes('filter') && 
      item.toLowerCase().includes('basic')
    )

    if (hasBasicFilter && speciesIds.some(s => s.includes('cichlids'))) {
      const canisterFilter = availableProducts.find(p => 
        p.category === 'filtration' && 
        p.name.toLowerCase().includes('canister')
      )

      if (canisterFilter) {
        upgrades.push({
          currentItem: 'Basic Filter',
          upgrade: canisterFilter,
          reason: 'Cichlids produce more waste and need stronger filtration',
          benefit: 'Better water quality and reduced maintenance'
        })
      }
    }

    return upgrades
  }

  /**
   * Generate a care kit for selected species
   */
  private static generateCareKit(
    speciesIds: string[],
    availableProducts: Product[]
  ): {
    name: string
    description: string
    items: Product[]
    totalCost: number
  } {
    const species = speciesIds.map(id => getSpeciesById(id)).filter(Boolean) as Species[]
    
    if (species.length === 0) {
      return {
        name: 'Basic Aquarium Care Kit',
        description: 'Essential items for aquarium maintenance',
        items: [],
        totalCost: 0
      }
    }

    const primarySpecies = species[0]
    const kitName = `${primarySpecies.name} Care Kit`
    
    // Select relevant products for the care kit
    const kitItems = []
    const essentialCategories = ['food', 'water-care', 'test-kits']
    
    essentialCategories.forEach(category => {
      const product = availableProducts.find(p => 
        p.category === category &&
        p.compatibility.species.includes(primarySpecies.id)
      )
      if (product) kitItems.push(product)
    })

    const totalCost = kitItems.reduce((sum, item) => sum + item.price, 0)

    return {
      name: kitName,
      description: `Complete care package for ${primarySpecies.name} including food, water care, and monitoring tools.`,
      items: kitItems,
      totalCost
    }
  }

  /**
   * Generate compatibility recommendations
   */
  private static generateCompatibilityRecommendations(
    speciesIds: string[],
    summary: { compatible: number, caution: number, incompatible: number, totalPairs: number }
  ): string[] {
    const recommendations = []

    if (summary.incompatible > 0) {
      recommendations.push('❌ Some species combinations are incompatible - consider removing conflicting species')
      recommendations.push('Consider separating aggressive species or choosing peaceful alternatives')
    }

    if (summary.caution > 0) {
      recommendations.push('⚠️ Some combinations require careful monitoring')
      recommendations.push('Ensure adequate tank size and hiding spots for territorial species')
      recommendations.push('Monitor fish behavior closely after introduction')
    }

    if (summary.incompatible === 0 && summary.caution === 0) {
      recommendations.push('✅ Excellent species combination!')
      recommendations.push('All selected species should coexist peacefully')
    }

    // Species-specific recommendations
    if (speciesIds.includes('bettas')) {
      recommendations.push('🐠 Betta-specific: Avoid fin-nipping species and provide gentle water flow')
    }

    if (speciesIds.some(s => s.includes('cichlids'))) {
      recommendations.push('🏔️ Cichlid setup: Provide caves, rocks, and territorial boundaries')
    }

    return recommendations
  }

  /**
   * Default requirements for empty selection
   */
  private static getDefaultRequirements(): TankRequirements {
    return {
      minTankVolume: 20,
      recommendedTankVolume: 40,
      temperatureRange: { min: 72, max: 78, unit: '°F' },
      phRange: { min: 6.5, max: 7.5 },
      hardnessRange: { min: 5, max: 15, unit: 'dGH' },
      requiredCategories: [
        { category: 'tanks', priority: 'essential', reason: 'Primary habitat' },
        { category: 'filtration', priority: 'essential', reason: 'Water quality' },
        { category: 'food', priority: 'essential', reason: 'Fish nutrition' }
      ],
      waterType: 'freshwater'
    }
  }
}