'use client'

import { ReactNode } from 'react'

interface ResponsiveGridProps {
  children: ReactNode
  variant?: 'species' | 'products' | 'features' | 'compatibility'
  className?: string
}

export default function ResponsiveGrid({ 
  children, 
  variant = 'species',
  className = '' 
}: ResponsiveGridProps) {
  const getGridClasses = () => {
    switch (variant) {
      case 'species':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'
      case 'products':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'
      case 'features':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
      case 'compatibility':
        return 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    }
  }

  return (
    <div className={`${getGridClasses()} ${className}`}>
      {children}
    </div>
  )
}

interface ResponsiveContainerProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

export function ResponsiveContainer({ 
  children, 
  size = 'lg',
  className = '' 
}: ResponsiveContainerProps) {
  const getContainerClasses = () => {
    switch (size) {
      case 'sm':
        return 'max-w-md mx-auto'
      case 'md':
        return 'max-w-2xl mx-auto'
      case 'lg':
        return 'max-w-4xl mx-auto'
      case 'xl':
        return 'max-w-6xl mx-auto'
      case 'full':
        return 'w-full'
      default:
        return 'max-w-4xl mx-auto'
    }
  }

  return (
    <div className={`${getContainerClasses()} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

interface ResponsiveStackProps {
  children: ReactNode
  spacing?: 'tight' | 'normal' | 'loose'
  direction?: 'vertical' | 'horizontal'
  className?: string
}

export function ResponsiveStack({ 
  children, 
  spacing = 'normal',
  direction = 'vertical',
  className = '' 
}: ResponsiveStackProps) {
  const getSpacingClasses = () => {
    if (direction === 'horizontal') {
      switch (spacing) {
        case 'tight':
          return 'space-x-2 sm:space-x-3'
        case 'normal':
          return 'space-x-4 sm:space-x-6'
        case 'loose':
          return 'space-x-6 sm:space-x-8'
        default:
          return 'space-x-4 sm:space-x-6'
      }
    } else {
      switch (spacing) {
        case 'tight':
          return 'space-y-3 sm:space-y-4'
        case 'normal':
          return 'space-y-6 sm:space-y-8'
        case 'loose':
          return 'space-y-8 sm:space-y-12'
        default:
          return 'space-y-6 sm:space-y-8'
      }
    }
  }

  const directionClass = direction === 'horizontal' ? 'flex flex-wrap' : 'flex flex-col'

  return (
    <div className={`${directionClass} ${getSpacingClasses()} ${className}`}>
      {children}
    </div>
  )
}

interface ResponsiveColumnsProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ResponsiveColumns({ 
  children, 
  columns = 2,
  gap = 'md',
  className = '' 
}: ResponsiveColumnsProps) {
  const getColumnClasses = () => {
    const gapClasses = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8'
    }

    const columnClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 lg:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    }

    return `grid ${columnClasses[columns]} ${gapClasses[gap]}`
  }

  return (
    <div className={`${getColumnClasses()} ${className}`}>
      {children}
    </div>
  )
}

interface ResponsiveLayoutProps {
  children: ReactNode
  sidebar?: ReactNode
  sidebarPosition?: 'left' | 'right'
  sidebarWidth?: 'narrow' | 'normal' | 'wide'
  className?: string
}

export function ResponsiveLayout({ 
  children, 
  sidebar,
  sidebarPosition = 'right',
  sidebarWidth = 'normal',
  className = '' 
}: ResponsiveLayoutProps) {
  const getSidebarClasses = () => {
    const widthClasses = {
      narrow: 'lg:w-1/4',
      normal: 'lg:w-1/3',
      wide: 'lg:w-2/5'
    }

    return widthClasses[sidebarWidth]
  }

  const getMainClasses = () => {
    const widthClasses = {
      narrow: 'lg:w-3/4',
      normal: 'lg:w-2/3',
      wide: 'lg:w-3/5'
    }

    return widthClasses[sidebarWidth]
  }

  const isLeftSidebar = sidebarPosition === 'left'

  return (
    <div className={`flex flex-col lg:flex-row gap-6 lg:gap-8 ${className}`}>
      {/* Sidebar - Left */}
      {sidebar && isLeftSidebar && (
        <aside className={`order-2 lg:order-1 ${getSidebarClasses()}`}>
          {sidebar}
        </aside>
      )}

      {/* Main Content */}
      <main className={`order-1 lg:order-${isLeftSidebar ? '2' : '1'} ${getMainClasses()}`}>
        {children}
      </main>

      {/* Sidebar - Right */}
      {sidebar && !isLeftSidebar && (
        <aside className={`order-2 ${getSidebarClasses()}`}>
          {sidebar}
        </aside>
      )}
    </div>
  )
}

interface BreakpointProps {
  children: ReactNode
  show?: ('mobile' | 'tablet' | 'desktop')[]
  hide?: ('mobile' | 'tablet' | 'desktop')[]
}

export function Breakpoint({ children, show, hide }: BreakpointProps) {
  let classes = ''

  if (show) {
    const showClasses = show.map(bp => {
      switch (bp) {
        case 'mobile': return 'block md:hidden'
        case 'tablet': return 'hidden md:block lg:hidden'
        case 'desktop': return 'hidden lg:block'
        default: return ''
      }
    }).join(' ')
    classes = showClasses
  }

  if (hide) {
    const hideClasses = hide.map(bp => {
      switch (bp) {
        case 'mobile': return 'hidden md:block'
        case 'tablet': return 'block md:hidden lg:block'
        case 'desktop': return 'block lg:hidden'
        default: return ''
      }
    }).join(' ')
    classes = hideClasses
  }

  return <div className={classes}>{children}</div>
}

interface ResponsiveTextProps {
  children: ReactNode
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  className?: string
}

export function ResponsiveText({ 
  children, 
  size = 'base',
  weight = 'normal',
  className = '' 
}: ResponsiveTextProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'text-xs sm:text-sm'
      case 'sm':
        return 'text-sm sm:text-base'
      case 'base':
        return 'text-base sm:text-lg'
      case 'lg':
        return 'text-lg sm:text-xl'
      case 'xl':
        return 'text-xl sm:text-2xl'
      case '2xl':
        return 'text-2xl sm:text-3xl'
      case '3xl':
        return 'text-3xl sm:text-4xl md:text-5xl'
      default:
        return 'text-base sm:text-lg'
    }
  }

  const getWeightClasses = () => {
    switch (weight) {
      case 'normal':
        return 'font-normal'
      case 'medium':
        return 'font-medium'
      case 'semibold':
        return 'font-semibold'
      case 'bold':
        return 'font-bold'
      default:
        return 'font-normal'
    }
  }

  return (
    <span className={`${getSizeClasses()} ${getWeightClasses()} ${className}`}>
      {children}
    </span>
  )
}