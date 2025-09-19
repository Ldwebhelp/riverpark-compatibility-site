import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-md mx-auto p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-4h-2m-8 2h2" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">
            Product Not Found
          </h1>
          <p className="text-secondary-600">
            The product you're looking for doesn't exist or may have been removed.
          </p>
        </div>

        <div className="space-y-3">
          <Link href="/products">
            <Button className="w-full">
              Browse All Products
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}