import { Species, CompatibilityRating, CompatibilityCheck } from '@/types/species'
import { speciesData, getSpeciesById } from '@/data/species'

export class CompatibilityEngine {
  /**
   * Check compatibility between two species
   */
  static checkPairCompatibility(species1Id: string, species2Id: string): CompatibilityCheck {
    const species1 = getSpeciesById(species1Id);
    const species2 = getSpeciesById(species2Id);

    if (!species1 || !species2) {
      console.warn(`Species not found: ${species1Id} or ${species2Id}`);
      return {
        species1: species1Id,
        species2: species2Id,
        rating: 'N',
        reason: 'Species not found'
      };
    }

    const rating = species1.compatibility?.[species2Id] || 'N';

    return {
      species1: species1Id,
      species2: species2Id,
      rating,
      reason: this.getCompatibilityReason(rating, species1, species2)
    };
  }

  /**
   * Check compatibility for multiple species in a tank
   */
  static checkTankCompatibility(speciesIds: string[]): CompatibilityCheck[] {
    const results: CompatibilityCheck[] = []
    
    for (let i = 0; i < speciesIds.length; i++) {
      for (let j = i + 1; j < speciesIds.length; j++) {
        results.push(this.checkPairCompatibility(speciesIds[i], speciesIds[j]))
      }
    }
    
    return results
  }

  /**
   * Get tank mate recommendations for a species
   */
  static getRecommendedTankMates(speciesId: string, maxResults: number = 10): Species[] {
    const species = getSpeciesById(speciesId);
    if (!species) {
      console.warn(`Species not found: ${speciesId}`);
      return [];
    }

    const compatible = speciesData
      .filter(s => s.id !== speciesId && species.compatibility?.[s.id] === 'Y')
      .slice(0, maxResults);

    return compatible;
  }

  /**
   * Get species that require caution with the given species
   */
  static getCautionaryTankMates(speciesId: string): Species[] {
    const species = getSpeciesById(speciesId);
    if (!species) {
      console.warn(`Species not found: ${speciesId}`);
      return [];
    }

    return speciesData.filter(s =>
      s.id !== speciesId && species.compatibility?.[s.id] === 'C'
    );
  }

  /**
   * Get incompatible species
   */
  static getIncompatibleSpecies(speciesId: string): Species[] {
    const species = getSpeciesById(speciesId);
    if (!species) {
      console.warn(`Species not found: ${speciesId}`);
      return [];
    }

    return speciesData.filter(s =>
      s.id !== speciesId && species.compatibility?.[s.id] === 'N'
    );
  }

  /**
   * Calculate overall tank compatibility score
   */
  static calculateTankScore(speciesIds: string[]): {
    score: number
    conflicts: number
    cautions: number
    compatible: number
  } {
    const checks = this.checkTankCompatibility(speciesIds)
    
    let compatible = 0
    let cautions = 0
    let conflicts = 0

    checks.forEach(check => {
      switch (check.rating) {
        case 'Y':
          compatible++
          break
        case 'C':
          cautions++
          break
        case 'N':
          conflicts++
          break
      }
    })

    const totalPairs = checks.length
    const score = totalPairs > 0 
      ? Math.round(((compatible + cautions * 0.5) / totalPairs) * 100)
      : 100

    return { score, conflicts, cautions, compatible }
  }

  /**
   * Can a new species be safely added to existing tank?
   */
  static canAddSpecies(existingSpecies: string[], newSpeciesId: string): {
    canAdd: boolean
    conflicts: CompatibilityCheck[]
    cautions: CompatibilityCheck[]
  } {
    const conflicts: CompatibilityCheck[] = []
    const cautions: CompatibilityCheck[] = []

    existingSpecies.forEach(existingId => {
      const check = this.checkPairCompatibility(existingId, newSpeciesId)
      
      if (check.rating === 'N') {
        conflicts.push(check)
      } else if (check.rating === 'C') {
        cautions.push(check)
      }
    })

    return {
      canAdd: conflicts.length === 0,
      conflicts,
      cautions
    }
  }

  /**
   * Get compatibility reason based on rating and species characteristics
   */
  private static getCompatibilityReason(
    rating: CompatibilityRating, 
    species1: Species, 
    species2: Species
  ): string {
    switch (rating) {
      case 'Y':
        return 'These species are generally compatible and can be kept together'
      case 'C':
        return 'Caution required - compatibility depends on tank size, individual temperament, and setup'
      case 'N':
        return 'These species are not compatible due to aggression, water requirements, or predation risk'
      default:
        return 'Compatibility unknown'
    }
  }

  /**
   * Filter species by compatibility with selected species
   */
  static filterByCompatibility(
    selectedSpecies: string[],
    compatibilityLevel: 'Y' | 'C' | 'Y,C' = 'Y'
  ): Species[] {
    if (selectedSpecies.length === 0) return speciesData;

    const allowedRatings = compatibilityLevel.split(',') as CompatibilityRating[];

    return speciesData.filter(species => {
      if (selectedSpecies.includes(species.id)) return false;

      return selectedSpecies.every(selectedId => {
        const selectedSpecies = getSpeciesById(selectedId);
        if (!selectedSpecies) {
          console.warn(`Species not found: ${selectedId}`);
          return false;
        }

        const rating = selectedSpecies.compatibility?.[species.id];
        return allowedRatings.includes(rating);
      });
    });
  }
}