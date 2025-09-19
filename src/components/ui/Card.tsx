import { ReactNode, MouseEvent } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
  clickable = false,
  onClick,
  onMouseEnter,
  onMouseLeave
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-200'

  const variantClasses = {
    default: 'bg-white border border-secondary-200',
    elevated: 'bg-white shadow-soft hover:shadow-medium',
    outlined: 'bg-white border-2 border-secondary-300',
    glass: 'bg-white/80 backdrop-blur-sm border border-white/20'
  }

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  const hoverClasses = hover ? 'hover:shadow-medium hover:-translate-y-1' : ''
  const clickableClasses = clickable ? 'cursor-pointer hover:shadow-medium hover:scale-[1.02] active:scale-[0.98]' : ''

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${clickableClasses}
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <header className={`mb-4 ${className}`}>
      {children}
    </header>
  )
}

export function CardBody({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <footer className={`mt-6 ${className}`}>
      {children}
    </footer>
  )
}