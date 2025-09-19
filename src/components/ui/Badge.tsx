import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'water' | 'stone' | 'plant' | 'accent' | 'in-stock' | 'low-stock' | 'out-of-stock'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  dot?: boolean
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full'

  const variantClasses = {
    default: 'bg-secondary-100 text-secondary-800',
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-warning-100 text-warning-800',
    danger: 'bg-danger-100 text-danger-800',
    water: 'bg-water-100 text-water-800',
    stone: 'bg-stone-100 text-stone-800',
    plant: 'bg-plant-100 text-plant-800',
    accent: 'bg-accent-100 text-accent-800',
    'in-stock': 'bg-success-100 text-success-800 border border-success-200',
    'low-stock': 'bg-warning-100 text-warning-800 border border-warning-200',
    'out-of-stock': 'bg-danger-100 text-danger-800 border border-danger-200'
  }

  const sizeClasses = {
    sm: dot ? 'px-1.5 py-0.5 text-xs' : 'px-2 py-1 text-xs',
    md: dot ? 'px-2 py-1 text-sm' : 'px-2.5 py-1.5 text-sm',
    lg: dot ? 'px-2.5 py-1.5 text-base' : 'px-3 py-2 text-base'
  }

  const dotClasses = {
    default: 'bg-secondary-400',
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    danger: 'bg-danger-500',
    water: 'bg-water-500',
    stone: 'bg-stone-500',
    plant: 'bg-plant-500',
    accent: 'bg-accent-500',
    'in-stock': 'bg-success-500',
    'low-stock': 'bg-warning-500',
    'out-of-stock': 'bg-danger-500'
  }

  return (
    <span
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-2 h-2 rounded-full mr-1.5 ${dotClasses[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}