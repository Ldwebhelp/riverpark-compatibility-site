# Riverpark Aquarium Compatibility Guide

A comprehensive freshwater aquarium species compatibility web application that helps aquarists find perfect tank mates and make informed decisions about their aquarium setups.

## Features

### Core Compatibility System
- **Species Compatibility Checker**: Based on comprehensive compatibility matrix covering 31+ freshwater species
- **Tank Mate Recommendations**: AI-powered suggestions for compatible species combinations
- **Current Tank Setup Analyzer**: Evaluate existing tank compatibility and potential issues

### Intelligent Assistant
- **Stealth Mode Guided Assistant**: Non-intrusive contextual suggestions without decision trees
- **AI-Powered Quick Reference**: 10 key facts for each species generated intelligently
- **Product Recommendation Engine**: Smart suggestions for equipment and supplies

### BigCommerce Integration
- **Complete E-commerce Integration**: Connected to BigCommerce Catalyst backend
- **Product Catalog**: Real-time product recommendations based on species and tank requirements
- **Shopping Cart Integration**: Seamless add-to-cart functionality with persistent sessions

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS v3.4.17
- **Accessibility Features**: WCAG 2.1 compliant with screen reader support
- **Interactive Elements**: Responsive grid layouts for enhanced user engagement
- **Multiple Layout Options**: Grid views and responsive containers

## Technology Stack

- **Frontend**: Next.js 14.2.15 with TypeScript
- **Styling**: Tailwind CSS v3.4.17
- **Font**: Open Sans
- **Backend**: BigCommerce Catalyst
- **API**: BigCommerce Storefront API with GraphQL
- **Interactive Components**: Swiper.js
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── AccessibilityFeatures.tsx
│   ├── ResponsiveGrid.tsx
│   ├── StealthAssistant.tsx
│   └── TankSetupAnalyser.tsx
├── data/                   # Species database and compatibility matrix
│   └── species.ts
├── lib/                    # Core business logic
│   ├── bigcommerce.ts      # BigCommerce integration
│   └── intelligenceEngine.ts # AI compatibility engine
└── types/                  # TypeScript type definitions
    └── species.ts
```

## Species Database

The application includes a comprehensive compatibility matrix covering:
- Malawian Cichlids
- Tanganyikan Cichlids
- Various African Cichlids
- New World Cichlids
- Angelfish
- Community Fish (Tetras, Barbs, Corydoras, etc.)
- Specialty Fish (Discus, Bettas, Gouramis, etc.)
- Invertebrates and Aquatic Plants

## Compatibility Ratings

- **Y (Yes)**: Fully compatible species
- **C (Caution)**: Compatible with careful consideration
- **N (No)**: Not recommended together

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables for BigCommerce
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

The application is optimized for Vercel deployment with automatic builds from the main branch.

## Contributing

This project follows BigCommerce Catalyst best practices with components under 200 lines and semantic HTML structure.

## License

MIT License - Feel free to use this project for educational or commercial purposes.