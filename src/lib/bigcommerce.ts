import { Product } from '@/types/product'

// BigCommerce Storefront API configuration
const BIGCOMMERCE_STORE_HASH = process.env.NEXT_PUBLIC_BIGCOMMERCE_STORE_HASH
const BIGCOMMERCE_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_BIGCOMMERCE_STOREFRONT_TOKEN
const BIGCOMMERCE_API_URL = `https://store-${BIGCOMMERCE_STORE_HASH}.mybigcommerce.com/api/storefront`

// GraphQL queries for BigCommerce Storefront API
const PRODUCTS_QUERY = `
  query getProducts($first: Int, $metafields: [String!], $tags: [String!], $categoryId: Int) {
    site {
      products(first: $first, filters: { 
        metafields: $metafields,
        tags: $tags,
        categoryEntityId: $categoryId
      }) {
        edges {
          node {
            entityId
            name
            description
            sku
            prices {
              price {
                value
                currencyCode
              }
              salePrice {
                value
                currencyCode
              }
              basePrice {
                value
                currencyCode
              }
            }
            defaultImage {
              url(width: 300, height: 300)
              altText
            }
            inventory {
              isInStock
              aggregated {
                availableToSell
              }
            }
            brand {
              name
            }
            categories {
              edges {
                node {
                  name
                  path
                }
              }
            }
            metafields {
              edges {
                node {
                  key
                  value
                  namespace
                }
              }
            }
            reviewSummary {
              averageRating
              numberOfReviews
            }
          }
        }
      }
    }
  }
`

const PRODUCT_DETAILS_QUERY = `
  query getProduct($entityId: Int!) {
    site {
      product(entityId: $entityId) {
        entityId
        name
        description
        plainTextDescription
        sku
        prices {
          price {
            value
            currencyCode
          }
          salePrice {
            value
            currencyCode
          }
          basePrice {
            value
            currencyCode
          }
        }
        images {
          edges {
            node {
              url(width: 500, height: 500)
              altText
            }
          }
        }
        inventory {
          isInStock
          aggregated {
            availableToSell
          }
        }
        brand {
          name
        }
        categories {
          edges {
            node {
              name
              path
            }
          }
        }
        metafields {
          edges {
            node {
              key
              value
              namespace
            }
          }
        }
        productOptions {
          edges {
            node {
              entityId
              displayName
              isRequired
              values {
                edges {
                  node {
                    entityId
                    label
                  }
                }
              }
            }
          }
        }
        reviewSummary {
          averageRating
          numberOfReviews
        }
      }
    }
  }
`

const ADD_TO_CART_MUTATION = `
  mutation addCartLineItems($cartId: String!, $lineItems: [CartLineItemInput!]!) {
    cart {
      addCartLineItems(input: {
        cartEntityId: $cartId
        data: {
          lineItems: $lineItems
        }
      }) {
        cart {
          entityId
          lineItems {
            totalQuantity
            physicalItems {
              entityId
              name
              quantity
              productEntityId
            }
          }
        }
      }
    }
  }
`

const CREATE_CART_MUTATION = `
  mutation createCart($lineItems: [CartLineItemInput!]!) {
    cart {
      createCart(input: {
        lineItems: $lineItems
      }) {
        cart {
          entityId
          lineItems {
            totalQuantity
            physicalItems {
              entityId
              name
              quantity
              productEntityId
            }
          }
        }
      }
    }
  }
`

export interface BigCommerceProduct {
  entityId: number
  name: string
  description: string
  sku: string
  prices: {
    price: { value: number; currencyCode: string }
    salePrice?: { value: number; currencyCode: string }
    basePrice: { value: number; currencyCode: string }
  }
  defaultImage?: {
    url: string
    altText: string
  }
  images?: Array<{
    url: string
    altText: string
  }>
  inventory: {
    isInStock: boolean
    aggregated: {
      availableToSell: number
    }
  }
  brand?: {
    name: string
  }
  categories: Array<{
    name: string
    path: string
  }>
  metafields: Array<{
    key: string
    value: string
    namespace: string
  }>
  reviewSummary?: {
    averageRating: number
    numberOfReviews: number
  }
}

export interface CartLineItem {
  productEntityId: number
  quantity: number
  variantEntityId?: number
}

export interface CartResponse {
  entityId: string
  lineItems: {
    totalQuantity: number
    physicalItems: Array<{
      entityId: string
      name: string
      quantity: number
      productEntityId: number
    }>
  }
}

class BigCommerceAPI {
  private apiUrl: string
  private headers: Record<string, string>

  constructor() {
    if (!BIGCOMMERCE_STORE_HASH || !BIGCOMMERCE_STOREFRONT_TOKEN) {
      throw new Error('BigCommerce configuration missing. Please set environment variables.')
    }

    this.apiUrl = `${BIGCOMMERCE_API_URL}/graphql`
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BIGCOMMERCE_STOREFRONT_TOKEN}`,
    }
  }

  /**
   * Execute GraphQL query against BigCommerce Storefront API
   */
  private async executeQuery<T>(query: string, variables?: Record<string, any>): Promise<T> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          query,
          variables: variables || {}
        })
      })

      if (!response.ok) {
        throw new Error(`BigCommerce API error: ${response.status} ${response.statusText}`)
      }

      const result = await response.json()

      if (result.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`)
      }

      return result.data
    } catch (error) {
      console.error('BigCommerce API request failed:', error)
      throw error
    }
  }

  /**
   * Pull products by metafield or tag
   */
  async getProductsByMetafield(
    metafields: string[],
    limit: number = 20
  ): Promise<BigCommerceProduct[]> {
    const response = await this.executeQuery<{ site: { products: { edges: Array<{ node: BigCommerceProduct }> } } }>(
      PRODUCTS_QUERY,
      {
        first: limit,
        metafields: metafields
      }
    )

    return response.site.products.edges.map(edge => edge.node)
  }

  /**
   * Pull products by tags
   */
  async getProductsByTags(
    tags: string[],
    limit: number = 20
  ): Promise<BigCommerceProduct[]> {
    const response = await this.executeQuery<{ site: { products: { edges: Array<{ node: BigCommerceProduct }> } } }>(
      PRODUCTS_QUERY,
      {
        first: limit,
        tags: tags
      }
    )

    return response.site.products.edges.map(edge => edge.node)
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(
    categoryId: number,
    limit: number = 20
  ): Promise<BigCommerceProduct[]> {
    const response = await this.executeQuery<{ site: { products: { edges: Array<{ node: BigCommerceProduct }> } } }>(
      PRODUCTS_QUERY,
      {
        first: limit,
        categoryId: categoryId
      }
    )

    return response.site.products.edges.map(edge => edge.node)
  }

  /**
   * Get products filtered by species compatibility
   */
  async getProductsForSpecies(
    speciesIds: string[],
    limit: number = 20
  ): Promise<BigCommerceProduct[]> {
    // Create metafield filters for species compatibility
    const speciesMetafields = speciesIds.map(id => `species_${id}`)
    
    return this.getProductsByMetafield(speciesMetafields, limit)
  }

  /**
   * Get single product details
   */
  async getProduct(entityId: number): Promise<BigCommerceProduct | null> {
    try {
      const response = await this.executeQuery<{ site: { product: BigCommerceProduct | null } }>(
        PRODUCT_DETAILS_QUERY,
        { entityId }
      )

      return response.site.product
    } catch (error) {
      console.error('Failed to fetch product:', error)
      return null
    }
  }

  /**
   * Create a new cart with line items
   */
  async createCart(lineItems: CartLineItem[]): Promise<CartResponse> {
    const response = await this.executeQuery<{ cart: { createCart: { cart: CartResponse } } }>(
      CREATE_CART_MUTATION,
      { lineItems }
    )

    return response.cart.createCart.cart
  }

  /**
   * Add items to existing cart
   */
  async addToCart(cartId: string, lineItems: CartLineItem[]): Promise<CartResponse> {
    const response = await this.executeQuery<{ cart: { addCartLineItems: { cart: CartResponse } } }>(
      ADD_TO_CART_MUTATION,
      { cartId, lineItems }
    )

    return response.cart.addCartLineItems.cart
  }

  /**
   * Convert BigCommerce product to our Product type
   */
  convertToProduct(bcProduct: BigCommerceProduct): Product {
    // Extract compatibility from metafields
    const compatibilityMetafield = bcProduct.metafields.find(mf => 
      mf.namespace === 'species' && mf.key === 'compatibility'
    )
    
    const speciesCompatibility = compatibilityMetafield 
      ? JSON.parse(compatibilityMetafield.value)
      : { species: [], tankSizes: [], waterTypes: ['freshwater'] }

    // Map category from BigCommerce categories
    const primaryCategory = bcProduct.categories[0]?.name.toLowerCase() || 'accessories'
    const productCategory = this.mapToProductCategory(primaryCategory)

    return {
      id: bcProduct.entityId.toString(),
      name: bcProduct.name,
      description: bcProduct.description,
      price: bcProduct.prices.salePrice?.value || bcProduct.prices.price.value,
      compareAtPrice: bcProduct.prices.basePrice.value !== bcProduct.prices.price.value 
        ? bcProduct.prices.basePrice.value 
        : undefined,
      category: productCategory,
      imageUrl: bcProduct.defaultImage?.url || '',
      images: bcProduct.images?.map(img => img.url) || [],
      inStock: bcProduct.inventory.isInStock,
      stockLevel: bcProduct.inventory.aggregated.availableToSell,
      brand: bcProduct.brand?.name,
      sku: bcProduct.sku,
      compatibility: speciesCompatibility,
      reviews: bcProduct.reviewSummary ? {
        rating: bcProduct.reviewSummary.averageRating,
        count: bcProduct.reviewSummary.numberOfReviews
      } : undefined
    }
  }

  /**
   * Map BigCommerce category to our ProductCategory type
   */
  private mapToProductCategory(bcCategory: string): any {
    const mapping: Record<string, string> = {
      'aquarium tanks': 'tanks',
      'filters': 'filtration',
      'filtration': 'filtration',
      'heaters': 'heating',
      'heating': 'heating',
      'lighting': 'lighting',
      'substrate': 'substrate',
      'gravel': 'substrate',
      'decorations': 'decorations',
      'plants': 'plants',
      'fish food': 'food',
      'food': 'food',
      'water care': 'water-care',
      'water treatment': 'water-care',
      'test kits': 'test-kits',
      'testing': 'test-kits',
      'accessories': 'accessories',
      'maintenance': 'maintenance'
    }

    return mapping[bcCategory] || 'accessories'
  }
}

// Singleton instance
export const bigCommerceAPI = new BigCommerceAPI()

/**
 * Hook for easy product fetching in React components
 */
export function useBigCommerceProducts() {
  const getProductsForSpecies = async (speciesIds: string[]) => {
    try {
      const bcProducts = await bigCommerceAPI.getProductsForSpecies(speciesIds)
      return bcProducts.map(bcProduct => bigCommerceAPI.convertToProduct(bcProduct))
    } catch (error) {
      console.error('Failed to fetch products for species:', error)
      return []
    }
  }

  const getProductsByCategory = async (categoryName: string) => {
    try {
      // Map our category to BigCommerce category ID (this would be configured)
      const categoryMapping: Record<string, number> = {
        'tanks': 1,
        'filtration': 2,
        'heating': 3,
        'lighting': 4,
        'food': 5
        // Add more mappings as needed
      }

      const categoryId = categoryMapping[categoryName]
      if (!categoryId) return []

      const bcProducts = await bigCommerceAPI.getProductsByCategory(categoryId)
      return bcProducts.map(bcProduct => bigCommerceAPI.convertToProduct(bcProduct))
    } catch (error) {
      console.error('Failed to fetch products by category:', error)
      return []
    }
  }

  const addProductsToCart = async (productIds: number[], quantities: number[] = []) => {
    try {
      const lineItems: CartLineItem[] = productIds.map((id, index) => ({
        productEntityId: id,
        quantity: quantities[index] || 1
      }))

      // Try to get existing cart ID from localStorage or session
      const existingCartId = localStorage.getItem('bigcommerce_cart_id')

      if (existingCartId) {
        return await bigCommerceAPI.addToCart(existingCartId, lineItems)
      } else {
        const newCart = await bigCommerceAPI.createCart(lineItems)
        localStorage.setItem('bigcommerce_cart_id', newCart.entityId)
        return newCart
      }
    } catch (error) {
      console.error('Failed to add products to cart:', error)
      throw error
    }
  }

  return {
    getProductsForSpecies,
    getProductsByCategory,
    addProductsToCart
  }
}