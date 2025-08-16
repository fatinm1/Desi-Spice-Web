# 🚀 Unique Desi Spice Backend Setup Guide

## 📋 Overview

This guide will help you set up the complete backend infrastructure for Unique Desi Spice, including:
- PostgreSQL Database
- Prisma ORM
- API Routes
- Authentication System
- Database Seeding

---

## 🗄️ Database Setup

### 1. Install PostgreSQL

**Windows:**
- Download from [PostgreSQL Official Site](https://www.postgresql.org/download/windows/)
- Install with default settings
- Remember the password you set for the `postgres` user

**macOS:**
```bash
brew install postgresql
brew services start postgresql
```

**Linux (Ubuntu):**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 2. Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE unique_desi_spice_db;

# Exit psql
\q
```

### 3. Environment Variables

Create or update your `.env.local` file:

```env
# Database
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/unique_desi_spice_db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe (for payments)
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# OpenAI (for SpiceBot)
OPENAI_API_KEY="sk-your_openai_api_key"

# Email (for contact forms and newsletters)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

---

## 🔧 Database Schema

### Models Created:

1. **User** - Authentication and user management
2. **Product** - Spice products with details
3. **Order** - Customer orders
4. **OrderItem** - Individual items in orders
5. **CartItem** - Shopping cart items
6. **WishlistItem** - User wishlists
7. **Review** - Product reviews and ratings
8. **Address** - User shipping/billing addresses
9. **BlogPost** - Blog articles
10. **Newsletter** - Email subscriptions
11. **Contact** - Contact form submissions

### Key Features:
- ✅ User authentication with bcrypt
- ✅ Product catalog with filtering
- ✅ Shopping cart functionality
- ✅ Order management
- ✅ Review system
- ✅ Blog system
- ✅ Contact forms
- ✅ Newsletter subscriptions

---

## 🚀 Setup Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npm run db:generate
```

### 3. Push Schema to Database
```bash
npm run db:push
```

### 4. Seed Database with Sample Data
```bash
npm run db:seed
```

### 5. Start Development Server
```bash
npm run dev
```

---

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/[id]` - Get single product

### Cart
- `GET /api/cart?userId=...` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart` - Update cart item quantity
- `DELETE /api/cart?userId=...&productId=...` - Remove item from cart

### Orders (Coming Soon)
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/[id]` - Get specific order

### Reviews (Coming Soon)
- `POST /api/reviews` - Add product review
- `GET /api/products/[id]/reviews` - Get product reviews

---

## 🔐 Sample Users

After running the seed script, you'll have these test accounts:

### Admin User
- **Email:** admin@uniquedesispice.com
- **Password:** admin123
- **Role:** ADMIN

### Customer User
- **Email:** customer@example.com
- **Password:** customer123
- **Role:** CUSTOMER

---

## 📦 Sample Data

The seed script creates:

### Products (6 items)
- Premium Turmeric Powder
- Green Cardamom Pods
- Cumin Seeds
- Saffron Threads
- Black Pepper
- Cinnamon Sticks

### Blog Posts (2 articles)
- The Ultimate Guide to South Asian Spices
- 10 Traditional Biryani Recipes You Must Try

### Reviews
- Sample reviews for products

---

## 🛠️ Development Workflow

### 1. Database Changes
```bash
# After modifying schema.prisma
npm run db:generate
npm run db:push
```

### 2. Adding New API Routes
- Create new files in `app/api/`
- Follow the existing pattern
- Use Prisma client for database operations

### 3. Testing API Routes
- Use tools like Postman or Thunder Client
- Test with sample data from seed script

---

## 🔍 Troubleshooting

### Common Issues:

1. **Database Connection Error**
   - Check DATABASE_URL in `.env.local`
   - Ensure PostgreSQL is running
   - Verify database exists

2. **Prisma Client Error**
   - Run `npm run db:generate`
   - Restart development server

3. **Seed Script Error**
   - Ensure database is created
   - Check all environment variables
   - Run `npm run db:push` first

4. **API Route Errors**
   - Check console for detailed error messages
   - Verify request format
   - Ensure all required fields are provided

---

## 📈 Next Steps

### Immediate Tasks:
1. ✅ Database schema setup
2. ✅ Basic API routes
3. ✅ Authentication system
4. ✅ Sample data seeding

### Upcoming Features:
1. 🔄 Order management API
2. 🔄 Review system API
3. 🔄 Payment integration (Stripe)
4. 🔄 Email notifications
5. 🔄 Admin dashboard
6. 🔄 Real-time chat (SpiceBot)

---

## 🎯 Success Indicators

You'll know the backend is working when:

1. ✅ Database connects without errors
2. ✅ Seed script runs successfully
3. ✅ API routes return proper responses
4. ✅ Authentication works
5. ✅ Products load from database
6. ✅ Cart functionality works

---

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Verify all environment variables
3. Ensure PostgreSQL is running
4. Try restarting the development server

The backend is now ready to power your Unique Desi Spice e-commerce platform! 🚀 