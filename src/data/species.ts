import { Species, CompatibilityRating } from '@/types/species'

const compatibilityMatrix: Record<string, Record<string, CompatibilityRating>> = {
  'malawian-cichlids': {
    'malawian-cichlids': 'Y',
    'tanganyikan-cichlids': 'C',
    'misc-african-cichlids': 'C',
    'new-world-cichlids': 'C',
    'angelfish': 'N',
    'barbs': 'C',
    'bettas': 'N',
    'corydoras': 'C',
    'danios-minnows': 'N',
    'discus': 'N',
    'fancy-goldfish': 'N',
    'gouramis': 'N',
    'guppies': 'N',
    'hatchets': 'N',
    'killifish': 'N',
    'larger-catfish': 'C',
    'loaches': 'C',
    'mollies': 'N',
    'platies': 'N',
    'plecos': 'Y',
    'rainbowfish': 'N',
    'rasboras': 'N',
    'sharks': 'C',
    'suckermouth-catfish': 'C',
    'swordtails': 'N',
    'tetras': 'N',
    'misc-fish': 'C',
    'invertebrates': 'C',
    'brackish-fish': 'N',
    'pond-fish': 'N',
    'freshwater-plants': 'C'
  },
  'tanganyikan-cichlids': {
    'malawian-cichlids': 'C',
    'tanganyikan-cichlids': 'Y',
    'misc-african-cichlids': 'Y',
    'new-world-cichlids': 'Y',
    'angelfish': 'Y',
    'barbs': 'Y',
    'bettas': 'N',
    'cory-cats': 'Y',
    'danios-minnows': 'Y',
    'discus': 'C',
    'fancy-goldfish': 'N',
    'gouramis': 'Y',
    'guppies': 'Y',
    'hatchets': 'Y',
    'killifish': 'Y',
    'larger-catfish': 'Y',
    'loaches': 'Y',
    'mollies': 'Y',
    'platies': 'Y',
    'plecos': 'Y',
    'rainbowfish': 'Y',
    'rasboras': 'Y',
    'sharks': 'Y',
    'suckermouth-catfish': 'Y',
    'swordtails': 'Y',
    'tetras': 'Y',
    'misc-fish': 'Y',
    'invertebrates': 'Y',
    'brackish-fish': 'N',
    'pond-fish': 'C',
    'freshwater-plants': 'Y'
  }
}

export const speciesData: Species[] = [
  {
    id: 'malawian-cichlids',
    name: 'Malawian Cichlids',
    category: 'Cichlids',
    scientificName: 'Various Pseudotropheus, Melanochromis, Labidochromis',
    compatibility: compatibilityMatrix['malawian-cichlids'],
    quickFacts: [
      'Highly territorial and aggressive',
      'Require hard, alkaline water (pH 7.8-8.6)',
      'Minimum tank size: 55+ gallons',
      'Mouthbrooders - females carry eggs/fry',
      'Herbivorous diet preferred',
      'Colorful with vibrant blues, yellows, oranges',
      'Live 5-8 years in captivity',
      'Need plenty of rockwork for territories',
      'Best kept in species-only tanks',
      'Overstocking helps reduce aggression'
    ],
    detailedInfo: {
      description: 'Lake Malawi cichlids are among the most colorful freshwater fish, known for their vibrant colors and complex social behaviors.',
      size: '3-6 inches',
      temperament: 'Aggressive/Territorial',
      diet: 'Herbivorous',
      tankSize: '55+ gallons',
      waterParams: {
        temperature: '76-82°F',
        ph: '7.8-8.6',
        hardness: '10-25 dGH'
      },
      careLevel: 'Intermediate',
      lifespan: '5-8 years'
    }
  },
  {
    id: 'angelfish',
    name: 'Angelfish',
    category: 'Cichlids',
    scientificName: 'Pterophyllum scalare',
    compatibility: compatibilityMatrix['angelfish'] || {},
    quickFacts: [
      'Peaceful cichlid with semi-aggressive tendencies',
      'Grows up to 6 inches tall',
      'Prefers soft, slightly acidic water',
      'Forms monogamous breeding pairs',
      'Omnivorous diet',
      'Elegant, triangular body shape',
      'Lives 10+ years with proper care',
      'Needs tall tanks due to body shape',
      'Can eat small fish like neon tetras',
      'Social fish that do well in groups'
    ]
  }
]

export const getSpeciesById = (id: string): Species | undefined => {
  return speciesData.find(species => species.id === id)
}

export const checkCompatibility = (species1Id: string, species2Id: string): CompatibilityRating => {
  const species1 = getSpeciesById(species1Id)
  if (!species1) return 'N'
  
  return species1.compatibility[species2Id] || 'N'
}

export const getCompatibleSpecies = (speciesId: string): Species[] => {
  const species = getSpeciesById(speciesId)
  if (!species) return []
  
  return speciesData.filter(s => 
    s.id !== speciesId && species.compatibility[s.id] === 'Y'
  )
}

export const getCautionSpecies = (speciesId: string): Species[] => {
  const species = getSpeciesById(speciesId)
  if (!species) return []
  
  return speciesData.filter(s => 
    s.id !== speciesId && species.compatibility[s.id] === 'C'
  )
}