# Riverpark Compatibility Site - Implementation Plan

## Project Overview
Comprehensive freshwater aquarium species compatibility web application with BigCommerce Catalyst integration.

## Core Features

### 1. Species Compatibility System
- **Compatibility Matrix**: 31 species with Y/N/C ratings
- **Tank Mate Finder**: Select species → get compatible matches
- **Setup Analyzer**: Check if new species can join existing tank
- **Conflict Resolver**: Identify incompatible combinations

### 2. AI-Powered Information System
- **Quick Reference**: 10 key facts per species (AI-generated)
- **Detailed Pages**: Comprehensive species information
- **Care Requirements**: Tank size, water parameters, feeding
- **Behavior Profiles**: Aggression levels, schooling needs

### 3. Product Recommendation Engine
- **New Setup**: Complete equipment lists based on species selection
- **Existing Tank**: Identify missing equipment for new additions
- **BigCommerce Integration**: Real product data and pricing
- **Smart Filtering**: Filter by budget, tank size, experience level

### 4. Stealth Mode Guided Assistant
- **Contextual Suggestions**: Non-intrusive recommendations
- **Behavioral Tracking**: Learn from user browsing patterns
- **Progressive Disclosure**: Reveal relevant information gradually
- **No Decision Trees**: Free-form browsing with intelligent nudges

## Technical Architecture

### Frontend Stack
- **Framework**: Next.js with BigCommerce Catalyst
- **Styling**: Tailwind CSS v3.4.17
- **Components**: Small (<200 lines), reusable, semantic HTML
- **Interactions**: Swiper.js for carousels and galleries
- **Responsive**: Mobile-first design
- **Accessibility**: WCAG 2.1 compliance

### Backend Integration
- **E-commerce**: BigCommerce Catalyst
- **Species Data**: JSON-based compatibility matrix
- **AI Services**: Integration for species information generation
- **Product Sync**: Real-time BigCommerce catalog integration

### Data Structure
```
Species {
  id, name, category, compatibility[], 
  quickFacts[], detailedInfo{}, 
  careRequirements{}, products[]
}

Tank {
  id, size, currentSpecies[], 
  equipment[], waterParams{}, 
  recommendations[]
}

Product {
  id, name, category, species[], 
  price, availability, reviews
}
```

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] BigCommerce Catalyst setup
- [ ] Species database creation
- [ ] Core compatibility algorithm
- [ ] Basic UI components

### Phase 2: Core Features (Week 3-4)
- [ ] Species selection interface
- [ ] Compatibility checker
- [ ] Tank mate recommendations
- [ ] Product integration

### Phase 3: AI Integration (Week 5-6)
- [ ] Quick reference generator
- [ ] Detailed information system
- [ ] Smart recommendations
- [ ] Content optimization

### Phase 4: Advanced Features (Week 7-8)
- [ ] Stealth mode assistant
- [ ] Setup analyzer
- [ ] Product recommendations
- [ ] User personalization

### Phase 5: Polish & Deploy (Week 9-10)
- [ ] Accessibility improvements
- [ ] Performance optimization
- [ ] Testing & QA
- [ ] Vercel deployment

## Key Components

### Species Components
- `SpeciesCard` - Individual species display
- `CompatibilityMatrix` - Interactive compatibility grid
- `SpeciesSelector` - Multi-select species picker
- `CompatibilityChecker` - Real-time compatibility feedback

### Tank Components  
- `TankBuilder` - Visual tank composition
- `TankAnalyzer` - Compatibility analysis for existing setups
- `SetupWizard` - Guided new tank creation
- `EquipmentChecker` - Missing equipment identifier

### Product Components
- `ProductCard` - Individual product display
- `ProductRecommendations` - Smart product suggestions
- `CategoryFilter` - Product filtering interface
- `PriceComparison` - Price and availability display

### AI Components
- `QuickFacts` - 10 key species facts
- `SpeciesDetails` - Comprehensive information
- `SmartSuggestions` - Contextual recommendations
- `StealthAssistant` - Background guidance system

## Development Guidelines

### Component Standards
- Max 200 lines per component
- Semantic HTML structure
- Tailwind utility classes only
- TypeScript for type safety
- Accessibility-first design

### BigCommerce Best Practices
- Use Catalyst patterns
- Leverage existing components
- Follow API conventions
- Optimize for performance
- Maintain GraphQL consistency

### Performance Targets
- < 3s initial load time
- < 1s navigation between pages
- 90+ Lighthouse scores
- Responsive across all devices
- Optimized images and assets

## Success Metrics
- Species compatibility accuracy: 99%+
- Product recommendation relevance: 85%+
- User task completion rate: 90%+
- Page load performance: <3s
- Accessibility compliance: WCAG 2.1 AA