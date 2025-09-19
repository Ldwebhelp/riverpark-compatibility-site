export function getStockBadgeVariant(stock: number | undefined): 'in-stock' | 'low-stock' | 'out-of-stock' {
  if (stock === undefined || stock === 0) {
    return 'out-of-stock'
  }

  if (stock <= 5) {
    return 'low-stock'
  }

  return 'in-stock'
}

export function getStockText(stock: number | undefined): string {
  if (stock === undefined || stock === 0) {
    return 'Out of Stock'
  }

  if (stock <= 5) {
    return `Low Stock (${stock} left)`
  }

  if (stock >= 100) {
    return 'In Stock (99+)'
  }

  return `${stock} in Stock`
}

export function getStockIcon(stock: number | undefined): string {
  if (stock === undefined || stock === 0) {
    return '❌'
  }

  if (stock <= 5) {
    return '⚠️'
  }

  return '✅'
}