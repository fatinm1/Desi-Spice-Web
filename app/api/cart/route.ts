import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// Get cart items
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: true
      }
    })

    return NextResponse.json(cartItems)
  } catch (error) {
    console.error('Cart fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Add item to cart
export async function POST(request: NextRequest) {
  try {
    const { userId, productId, quantity = 1 } = await request.json()

    if (!userId || !productId) {
      return NextResponse.json(
        { error: 'User ID and product ID are required' },
        { status: 400 }
      )
    }

    // Check if product exists and is in stock
    const product = await prisma.product.findUnique({
      where: { id: productId }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    if (!product.inStock || product.stockQuantity < quantity) {
      return NextResponse.json(
        { error: 'Product is out of stock' },
        { status: 400 }
      )
    }

    // Check if item already exists in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId
        }
      }
    })

    if (existingItem) {
      // Update quantity
      const updatedItem = await prisma.cartItem.update({
        where: {
          userId_productId: {
            userId,
            productId
          }
        },
        data: {
          quantity: existingItem.quantity + quantity
        },
        include: {
          product: true
        }
      })

      return NextResponse.json(updatedItem)
    } else {
      // Add new item
      const newItem = await prisma.cartItem.create({
        data: {
          userId,
          productId,
          quantity
        },
        include: {
          product: true
        }
      })

      return NextResponse.json(newItem, { status: 201 })
    }
  } catch (error) {
    console.error('Cart add error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Update cart item quantity
export async function PUT(request: NextRequest) {
  try {
    const { userId, productId, quantity } = await request.json()

    if (!userId || !productId || quantity === undefined) {
      return NextResponse.json(
        { error: 'User ID, product ID, and quantity are required' },
        { status: 400 }
      )
    }

    if (quantity <= 0) {
      // Remove item if quantity is 0 or negative
      await prisma.cartItem.delete({
        where: {
          userId_productId: {
            userId,
            productId
          }
        }
      })

      return NextResponse.json({ message: 'Item removed from cart' })
    }

    // Update quantity
    const updatedItem = await prisma.cartItem.update({
      where: {
        userId_productId: {
          userId,
          productId
        }
      },
      data: { quantity },
      include: {
        product: true
      }
    })

    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error('Cart update error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Remove item from cart
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const productId = searchParams.get('productId')

    if (!userId || !productId) {
      return NextResponse.json(
        { error: 'User ID and product ID are required' },
        { status: 400 }
      )
    }

    await prisma.cartItem.delete({
      where: {
        userId_productId: {
          userId,
          productId
        }
      }
    })

    return NextResponse.json({ message: 'Item removed from cart' })
  } catch (error) {
    console.error('Cart remove error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 