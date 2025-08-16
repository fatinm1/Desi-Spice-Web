# Unique Desi Spice - Premium South Asian Spices

A modern, futuristic e-commerce website for Unique Desi Spice, a premium South Asian spices business. Built with Next.js, React, TypeScript, and featuring 3D elements, AI chatbot, and modern design.

## 🚀 Features

### Core Features
- **Modern Hero Section** with animated 3D spice particles
- **AI Chatbot (SpiceBot)** - Intelligent assistant for spice queries
- **User Authentication** - Account creation, login, and profile management
- **Shopping Cart** - Persistent cart with localStorage
- **Product Catalog** - Grid layout with filters and search
- **3D Product Viewer** - Interactive 3D spice jar models
- **Responsive Design** - Mobile-first approach with modern UI

### Design Features
- **Futuristic UI** with glass morphism effects
- **Animated Elements** using Framer Motion
- **Custom Color Palette** - Spice-inspired colors (saffron, turmeric, chili, basil)
- **3D Animations** - Floating spice particles and rotating elements
- **Modern Typography** - Inter and Poppins fonts

### E-commerce Features
- **Product Management** - Add, edit, and categorize spices
- **Order History** - Track past purchases
- **Wishlist** - Save favorite spices
- **Search & Filters** - Find spices by type, origin, price
- **Payment Integration** - Stripe payment processing

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics and animations
- **Lucide React** - Icon library

### Backend & Database
- **Node.js** - Server-side runtime
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication

### AI & Integrations
- **OpenAI API** - AI chatbot functionality
- **Stripe** - Payment processing
- **React Hook Form** - Form handling
- **Zustand** - State management

## 📁 Project Structure

```
unique-desi-spice-web/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── 3d/               # 3D components
│   ├── chat/             # AI chatbot
│   ├── layout/           # Layout components
│   ├── providers/        # Context providers
│   └── sections/         # Page sections
├── lib/                  # Utility functions
├── public/               # Static assets
└── types/                # TypeScript types
```

## 🎨 Design System

### Colors
- **Unique Desi Spice Orange**: `#f97316` - Primary brand color
- **Saffron**: `#eab308` - Warm accent
- **Turmeric**: `#facc15` - Bright yellow
- **Chili Red**: `#ef4444` - Spicy accent
- **Basil Green**: `#22c55e` - Fresh accent

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Animations
- **Floating Elements** - Subtle hover animations
- **3D Particles** - Animated background spice particles
- **Page Transitions** - Smooth route transitions
- **Loading States** - Skeleton screens and spinners

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/unique-desi-spice-web.git
   cd unique-desi-spice-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```
   DATABASE_URL="postgresql://..."
   OPENAI_API_KEY="your-openai-key"
   STRIPE_SECRET_KEY="your-stripe-key"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
   NEXTAUTH_SECRET="your-nextauth-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with 3D animated particles
- Featured spices showcase
- About preview with company story
- Customer testimonials
- Newsletter subscription
- Floating AI chatbot

### Shop (`/shop`)
- Product grid with filters
- Search functionality
- Category filtering
- Price range slider
- Sort by popularity, price, name
- Quick add to cart

### Product Details (`/product/[id]`)
- 3D product viewer
- Detailed specifications
- Customer reviews
- Related products
- Add to cart/wishlist
- Nutritional information

### User Account (`/account`)
- Order history
- Personal information
- Address management
- Wishlist
- Account settings

### AI Chatbot
- Real-time chat interface
- Spice recommendations
- Recipe suggestions
- Product information
- Customer support

## 🔧 Configuration

### Tailwind CSS
Custom configuration with spice-themed colors and animations.

### Next.js
Optimized for performance with image optimization and static generation.

### Database Schema
- Users (authentication and profiles)
- Products (spice catalog)
- Orders (purchase history)
- Cart items (shopping cart)
- Reviews (product ratings)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for high-quality spice images
- **Lucide** for beautiful icons
- **Framer Motion** for smooth animations
- **Three.js** for 3D graphics

## 📞 Support

For support, email support@uniquedesispice.com or join our Discord community.

---

**Unique Desi Spice** - Flavor from the Roots 🌿 