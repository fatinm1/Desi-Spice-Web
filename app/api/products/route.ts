import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const origin = searchParams.get('origin') || ''
    const minPrice = searchParams.get('minPrice') || ''
    const maxPrice = searchParams.get('maxPrice') || ''
    const isOrganic = searchParams.get('isOrganic') || ''
    const isNew = searchParams.get('isNew') || ''

    // Build where clause
    const where: any = {
      inStock: true
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (category && category !== 'All') {
      where.category = category
    }

    if (origin && origin !== 'All') {
      where.origin = origin
    }

    if (minPrice) {
      where.price = { ...where.price, gte: parseFloat(minPrice) }
    }

    if (maxPrice) {
      where.price = { ...where.price, lte: parseFloat(maxPrice) }
    }

    if (isOrganic === 'true') {
      where.isOrganic = true
    }

    if (isNew === 'true') {
      where.isNew = true
    }

    // Calculate pagination
    const skip = (page - 1) * limit

    // Get products with pagination
    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          reviews: {
            select: {
              rating: true
            }
          }
        }
      }),
      prisma.product.count({ where })
    ])

    // Calculate average rating for each product
    const productsWithRating = products.map(product => {
      const avgRating = product.reviews.length > 0
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
        : 0

      return {
        ...product,
        rating: avgRating,
        reviewCount: product.reviews.length,
        reviews: undefined // Remove reviews array from response
      }
    })

    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({
      products: productsWithRating,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    })
  } catch (error) {
    console.error('Products fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 