# 🚂 Railway Deployment Guide for Unique Desi Spice

## 📋 **Prerequisites**
- [Railway Account](https://railway.app/)
- GitHub repository connected
- PostgreSQL database (Railway provides this)

## 🚀 **Deployment Steps**

### **1. Connect to Railway**
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `fatinm1/Desi-Spice-Web` repository

### **2. Set Environment Variables**
In Railway dashboard, add these environment variables:

```bash
# Database (Railway will provide this)
DATABASE_URL="postgresql://..."

# Next.js
NEXTAUTH_URL="https://your-app.railway.app"
NEXTAUTH_SECRET="generate-a-random-secret-key"

# Railway
RAILWAY_STATIC_URL="https://your-app.railway.app"
```

### **3. Add PostgreSQL Database**
1. In Railway project, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically provide the `DATABASE_URL`
4. Copy this URL to your environment variables

### **4. Deploy**
1. Railway will automatically detect it's a Next.js app
2. It will run `npm install` and `npm run build`
3. Then start with `npm start`

## 🔧 **Post-Deployment Setup**

### **1. Run Database Migrations**
```bash
# In Railway terminal or locally with DATABASE_URL
npx prisma db push
npx prisma generate
npx prisma db seed
```

### **2. Verify Deployment**
- Check your app URL: `https://your-app.railway.app`
- Verify all pages load correctly
- Test SpiceBot functionality

## 📁 **Files Created for Railway**
- `railway.toml` - Railway configuration
- `railway.json` - Alternative Railway config
- `env.example` - Environment variables template
- Updated `next.config.js` - Railway-optimized settings

## 🌐 **Your App Will Be Available At**
`https://your-app-name.railway.app`

## 🆘 **Troubleshooting**
- Check Railway logs for build errors
- Verify environment variables are set
- Ensure DATABASE_URL is correct
- Check if PostgreSQL service is running

## 🎯 **Next Steps After Deployment**
1. Set up custom domain (optional)
2. Configure database backups
3. Set up monitoring and alerts
4. Test all functionality

Your **Unique Desi Spice** website will be live on Railway! 🚀✨
