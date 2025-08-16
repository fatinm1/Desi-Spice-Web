import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@uniquedesispice.com' },
    update: {},
    create: {
      email: 'admin@uniquedesispice.com',
      name: 'Admin User',
      password: await bcrypt.hash('admin123', 10),
      role: 'ADMIN'
    }
  })

  // Create sample customer
  const customerUser = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      email: 'customer@example.com',
      name: 'John Doe',
      password: await bcrypt.hash('customer123', 10),
      role: 'CUSTOMER'
    }
  })

  // Create sample products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Premium Turmeric Powder',
        description: 'Organic turmeric powder from Chandpur, Bangladesh',
        price: 19.99,
        originalPrice: 24.99,
        weight: '100g',
        origin: 'Chandpur, Bangladesh',
        category: 'Powders',
        isNew: true,
        inStock: true,
        stockQuantity: 100,
        image: '/images/spices/tuemeric.webp',
        images: ['/images/spices/tuemeric.webp']
      }
    }),
    prisma.product.create({
      data: {
        name: 'Red Chili Powder',
        description: 'Premium red chili powder from Dhaka, Bangladesh',
        price: 14.99,
        originalPrice: 18.99,
        weight: '100g',
        origin: 'Dhaka, Bangladesh',
        category: 'Powders',
        isNew: false,
        inStock: true,
        stockQuantity: 150,
        image: '/images/spices/chili.jpg',
        images: ['/images/spices/chili.jpg']
      }
    }),
    prisma.product.create({
      data: {
        name: 'Cumin Seeds',
        description: 'Whole cumin seeds from Chandpur, Bangladesh',
        price: 16.99,
        originalPrice: 21.99,
        weight: '100g',
        origin: 'Chandpur, Bangladesh',
        category: 'Seeds',
        isNew: false,
        inStock: true,
        stockQuantity: 80,
        image: '/images/spices/cumin.jpg',
        images: ['/images/spices/cumin.jpg']
      }
    }),
    prisma.product.create({
      data: {
        name: 'Black Pepper',
        description: 'Whole black peppercorns from Dhaka, Bangladesh',
        price: 18.99,
        originalPrice: 22.99,
        weight: '100g',
        origin: 'Dhaka, Bangladesh',
        category: 'Whole Spices',
        isNew: false,
        inStock: true,
        stockQuantity: 120,
        image: '/images/spices/black-pepper.jpg',
        images: ['/images/spices/black-pepper.jpg']
      }
    })
  ])

  // Create sample order
  const order = await prisma.order.create({
    data: {
      userId: customerUser.id,
      status: 'CONFIRMED',
      totalAmount: 35.98,
      shippingAddress: '123 Main St, New York, NY 10001, USA',
      billingAddress: '123 Main St, New York, NY 10001, USA',
      paymentMethod: 'CREDIT_CARD',
      paymentStatus: 'PAID'
    }
  })

  // Create sample order items
  await prisma.orderItem.createMany({
    data: [
      {
        orderId: order.id,
        productId: products[0].id,
        quantity: 1,
        price: 19.99
      },
      {
        orderId: order.id,
        productId: products[1].id,
        quantity: 1,
        price: 14.99
      }
    ]
  })

  // Create sample reviews
  await prisma.review.createMany({
    data: [
      {
        userId: customerUser.id,
        productId: products[0].id,
        rating: 5,
        comment: 'Excellent quality turmeric powder!'
      },
      {
        userId: customerUser.id,
        productId: products[1].id,
        rating: 4,
        comment: 'Great chili powder, perfect heat level.'
      }
    ]
  })

  // Create sample addresses
  await prisma.address.create({
    data: {
      userId: customerUser.id,
      type: 'SHIPPING',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '+1987654321',
      isDefault: true
    }
  })

  // Create sample newsletter subscription
  await prisma.newsletter.create({
    data: {
      email: 'customer@example.com'
    }
  })

  // Create sample contact message
  await prisma.contact.create({
    data: {
      name: 'John Doe',
      email: 'customer@example.com',
      subject: 'Product Inquiry',
      message: 'I would like to know more about your turmeric powder.',
      status: 'PENDING'
    }
  })

  console.log('✅ Database seeding completed successfully!')
  console.log(`👤 Created ${adminUser.email} (Admin)`)
  console.log(`👤 Created ${customerUser.email} (Customer)`)
  console.log(`🛍️ Created ${products.length} products`)
  console.log(`📦 Created 1 order with items`)
  console.log(`⭐ Created sample reviews`)
  console.log(`📍 Created sample addresses`)
  console.log(`📧 Created sample newsletter and contact`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 