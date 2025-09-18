# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Riverpark Compatibility Site is a comprehensive freshwater aquarium species compatibility web application built with Next.js, TypeScript, and Tailwind CSS. It features a compatibility checker, species database, tank recommendations, and BigCommerce Catalyst integration.

## Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Install dependencies
npm install
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components (<200 lines each)
├── data/               # Species data and compatibility matrix
├── lib/                # Utility functions and algorithms
└── types/              # TypeScript type definitions
```

## Key Files

- `src/data/species.ts` - Species database and compatibility matrix from chart
- `src/lib/compatibility.ts` - Core compatibility checking algorithms
- `src/types/species.ts` - TypeScript definitions for all data types
- `PROGRESS.md` - Current development status and todo tracking

## Architecture

### Species Compatibility System
- 31 species with Y/N/C compatibility ratings from chart
- Real-time compatibility checking between multiple species
- Tank scoring algorithm (0-100% compatibility)
- Conflict detection and caution warnings

### Component Design
- Small, focused components under 200 lines
- Semantic HTML structure for accessibility
- Tailwind v3.4.17 utility classes only
- Open Sans font throughout
- Responsive mobile-first design

### Data Flow
```
Species Selection → Compatibility Engine → Real-time Results
User Input → Filters → Filtered Species → UI Update
```

## Development Guidelines

### Component Standards
- Maximum 200 lines per component
- Use semantic HTML elements
- Implement proper ARIA labels
- Support keyboard navigation
- Use Tailwind utility classes only

### Compatibility Algorithm
- Use `CompatibilityEngine` class for all compatibility checks
- Always check both directions of compatibility pairs
- Provide clear reasoning for compatibility ratings
- Calculate tank-wide compatibility scores

### Color Scheme
- Primary: Aqua (#06a9db) - main actions, selections
- Secondary: Coral (#ff5722) - warnings, highlights  
- Success: Green - compatible species
- Warning: Yellow - caution required
- Error: Red - incompatible species

### BigCommerce Integration
- Follow Catalyst patterns and conventions
- Use existing Catalyst components when available
- Maintain GraphQL consistency
- Optimize for performance

## Current Status

The foundation is complete with species selection, compatibility checking, and core UI components. See `PROGRESS.md` for detailed status and next steps.

## Notes

- Species data extracted from freshwater compatibility chart image
- All components designed for accessibility and responsive design
- Stealth mode guided assistant architecture planned for Phase 4
- Product recommendations will integrate with BigCommerce Catalyst backend