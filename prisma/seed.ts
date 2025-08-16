import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@uniquedesispice.com' },
    update: {},
    create: {
      email: 'admin@uniquedesispice.com',
      password: await bcrypt.hash('admin123', 10),
      role: 'ADMIN',
      profile: {
        create: {
          firstName: 'Admin',
          lastName: 'User',
          phone: '+1234567890'
        }
      }
    }
  })

  // Create sample customer
  const customerUser = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      email: 'customer@example.com',
      password: await bcrypt.hash('customer123', 10),
      role: 'CUSTOMER',
      profile: {
        create: {
          firstName: 'John',
          lastName: 'Doe',
          phone: '+1987654321'
        }
      }
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
        discount: 20,
        inStock: true,
        rating: 4.8,
        reviews: 124,
        image: '/images/spices/tuemeric.webp',
        stockQuantity: 100
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
        discount: 21,
        inStock: true,
        rating: 4.6,
        reviews: 89,
        image: '/images/spices/chili.jpg',
        stockQuantity: 150
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
        discount: 23,
        inStock: true,
        rating: 4.7,
        reviews: 156,
        image: '/images/spices/cumin.jpg',
        stockQuantity: 80
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
        discount: 17,
        inStock: true,
        rating: 4.6,
        reviews: 203,
        image: '/images/spices/blackpepper.jpeg',
        stockQuantity: 120
      }
    })
  ])

  // Create sample blog posts
  const blogPosts = await Promise.all([
    prisma.blogPost.create({
      data: {
        title: 'The Art of Spice Blending',
        excerpt: 'Discover the secrets of creating perfect spice blends for authentic South Asian cuisine.',
        content: 'Spice blending is an art that has been perfected over centuries...',
        author: 'Unique Desi Spice Team',
        publishedAt: new Date(),
        category: 'Cooking Tips',
        readTime: '5 min read',
        image: '/images/blog/spice-blending.jpg',
        tags: ['spices', 'cooking', 'blending', 'cuisine']
      }
    }),
    prisma.blogPost.create({
      data: {
        title: 'Health Benefits of Turmeric',
        excerpt: 'Explore the incredible health benefits of this golden spice and how to incorporate it into your diet.',
        content: 'Turmeric, also known as the golden spice, has been used for thousands of years...',
        author: 'Unique Desi Spice Team',
        publishedAt: new Date(),
        category: 'Health & Wellness',
        readTime: '7 min read',
        image: '/images/blog/turmeric-benefits.jpg',
        tags: ['turmeric', 'health', 'benefits', 'wellness']
      }
    }),
    prisma.blogPost.create({
      data: {
        title: 'Sourcing the Finest Spices',
        excerpt: 'Learn about our journey to find and partner with the best spice farmers in Bangladesh.',
        content: 'At Unique Desi Spice, we believe that quality begins at the source...',
        author: 'Unique Desi Spice Team',
        publishedAt: new Date(),
        category: 'Our Story',
        readTime: '6 min read',
        image: '/images/blog/sourcing.jpg',
        tags: ['sourcing', 'farmers', 'quality', 'bangladesh']
      }
    })
  ])

  // Create sample orders
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        userId: customerUser.id,
        status: 'COMPLETED',
        total: 54.97,
        shippingAddress: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'USA'
        },
        items: {
          create: [
            {
              productId: products[0].id,
              quantity: 1,
              price: 19.99
            },
            {
              productId: products[1].id,
              quantity: 1,
              price: 14.99
            },
            {
              productId: products[2].id,
              quantity: 1,
              price: 16.99
            }
          ]
        }
      }
    })
  ])

  console.log('✅ Database seeded successfully!')
  console.log(`👤 Admin user: admin@uniquedesispice.com / admin123`)
  console.log(`👤 Customer user: customer@example.com / customer123`)
  console.log(`🛍️  ${products.length} products created`)
  console.log(`📝 ${blogPosts.length} blog posts created`)
  console.log(`📦 ${orders.length} orders created`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 