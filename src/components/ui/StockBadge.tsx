import Badge from './Badge'
import { getStockBadgeVariant, getStockText, getStockIcon } from '@/utils/stockUtils'

interface StockBadgeProps {
  stock: number | undefined
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  showDot?: boolean
  className?: string
}

export default function StockBadge({
  stock,
  size = 'sm',
  showIcon = false,
  showDot = false,
  className = ''
}: StockBadgeProps) {
  const variant = getStockBadgeVariant(stock)
  const text = getStockText(stock)
  const icon = getStockIcon(stock)

  return (
    <Badge
      variant={variant}
      size={size}
      dot={showDot}
      className={className}
    >
      {showIcon && <span className="mr-1">{icon}</span>}
      {text}
    </Badge>
  )
}

// Alternative compact version for tight spaces
export function CompactStockBadge({ stock, className = '' }: {
  stock: number | undefined
  className?: string
}) {
  if (stock === undefined) return null

  const variant = getStockBadgeVariant(stock)
  const icon = getStockIcon(stock)

  return (
    <Badge variant={variant} size="sm" className={className}>
      <span className="text-xs">{icon}</span>
    </Badge>
  )
}

// Stock indicator with detailed tooltip information
export function DetailedStockBadge({
  stock,
  size = 'md',
  showTooltip = false
}: {
  stock: number | undefined
  size?: 'sm' | 'md' | 'lg'
  showTooltip?: boolean
}) {
  const variant = getStockBadgeVariant(stock)
  const text = getStockText(stock)
  const icon = getStockIcon(stock)

  const getStockMessage = () => {
    if (stock === undefined || stock === 0) {
      return 'Currently out of stock. Check back soon!'
    }
    if (stock <= 5) {
      return `Only ${stock} items remaining. Order soon!`
    }
    if (stock >= 100) {
      return 'Plenty in stock and ready to ship'
    }
    return `${stock} items available for immediate shipping`
  }

  return (
    <div className="relative group">
      <Badge variant={variant} size={size}>
        <span className="mr-1">{icon}</span>
        {text}
      </Badge>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-secondary-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
          {getStockMessage()}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-secondary-900"></div>
        </div>
      )}
    </div>
  )
}