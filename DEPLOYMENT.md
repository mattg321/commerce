# BCYL Pokishop Deployment Guide

## ✅ What's Been Done

1. **Homepage redesigned** with neon BCYL POKISHOP branding
2. **Announcement banner** added (cyan-to-pink gradient)
3. **Hero section** with animated background and Pokéballs
4. **Shopify integration** configured
5. **Environment variables** set up
6. **Project built successfully** ✓

## 🚀 Deploy to Vercel (Free Hosting)

### Step 1: Push to GitHub (if not already done)
```bash
git add .
git commit -m "Add new BCYL Pokishop design and Shopify integration"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in
3. Click "Add New" → "Project"
4. Import your GitHub repository (`bcyl_shop`)
5. **Environment Variables**: Add these in the "Environment Variables" section:
   - `COMPANY_NAME` = `BCYL`
   - `SITE_NAME` = `BCYL Pokishop`
   - `SHOPIFY_STORE_DOMAIN` = `bcyl-pokistop.myshopify.com`
   - `SHOPIFY_STOREFRONT_ACCESS_TOKEN` = Your token from Shopify
   - `SHOPIFY_REVALIDATION_SECRET` = Your secret from Shopify
6. Click "Deploy"

**Your site will be live at**: `https://your-project.vercel.app`

### Step 3: Connect Your Custom Domain
1. In Vercel dashboard → your project → "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS instructions provided by Vercel
4. Point your domain registrar to Vercel's nameservers OR add CNAME record

---

## 🛍️ Shopify Integration Setup

Your site is already configured to work with Shopify! Here's how:

### In Shopify Admin:

1. **Create a Storefront Access Token**:
   - Go to: Admin → Settings → Apps and integrations → API credentials
   - Click "Create an access token"
   - Select these scopes:
     - `read_products`
     - `read_collections`
     - `read_cart`
     - `write_cart`
     - `read_storefront_menus`
   - Copy the token and add to Vercel environment variables as `SHOPIFY_STOREFRONT_ACCESS_TOKEN`

2. **Create a Revalidation Secret**:
   - Go to: Admin → Settings → Apps and integrations → API credentials
   - Look for "Admin API access token" section
   - Create/copy your token and add to Vercel as `SHOPIFY_REVALIDATION_SECRET`

3. **Products Automatically Sync**:
   - Products linked to the "Online Store" channel will appear on your site
   - Collections must be manually created and added to the storefront

4. **Set Up Navigation Menu** (optional but recommended):
   - Go to: Shopify Admin → Navigation → Main menu
   - Create your menu structure
   - The site automatically pulls from the "next-js-frontend-header-menu"

---

## 📊 How It Works

### Data Flow:
- **Site hosted on**: Vercel (fast, scalable)
- **Products stored in**: Shopify
- **Real-time sync**: Your site fetches product data from Shopify's Storefront API
- **Checkout**: Customers can add to cart and checkout directly through your site

### Key Files:
- **Homepage**: `/app/page.tsx` (the neon hero you see)
- **Navigation**: Pulls automatically from Shopify menus
- **Products**: `/app/product/[handle]/page.tsx` (individual product pages)
- **Search**: `/app/search/page.tsx` (search and filter products)
- **Cart**: `/components/cart/` (shopping cart functionality)

---

## 🔧 Environment Variables Needed

Create `.env.local` locally or add to Vercel:

```
COMPANY_NAME=BCYL
SITE_NAME=BCYL Pokishop
SHOPIFY_STORE_DOMAIN=bcyl-pokistop.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here
SHOPIFY_REVALIDATION_SECRET=your_secret_here
```

---

## 📲 Test Locally Before Deploying

```bash
# Run development server
pnpm dev

# Then visit http://localhost:3000
# You should see:
# - Announcement banner (top)
# - Neon BCYL POKISHOP hero section
# - Featured products carousel
# - Product grid
```

---

## ✨ Customization

### Change Hero Text/Colors:
Edit: `components/hero-section.tsx`

### Change Announcement Banner:
Edit: `components/announcement-banner.tsx`

### Change Site Name/Branding:
Edit: `.env.local` or Vercel environment variables (`SITE_NAME`, `COMPANY_NAME`)

### Add Collections/Categories:
1. Create in Shopify Admin
2. Link to "Online Store" sales channel
3. Update navigation menu in Shopify

---

## 🆘 Troubleshooting

### Products not showing?
- ✓ Check Shopify token is valid
- ✓ Products must be linked to "Online Store" sales channel in Shopify
- ✓ Wait 5-10 min for cache to update (revalidate from Shopify Admin)

### Build fails on Vercel?
- ✓ Check all environment variables are set correctly
- ✓ Run `pnpm build` locally to test
- ✓ Check TypeScript errors: `pnpm build`

### Site looks different after deployment?
- ✓ Clear browser cache (Ctrl+Shift+Del)
- ✓ Hard refresh (Ctrl+F5)
- ✓ Check CSS is loading in browser DevTools

---

## 📞 Support

For issues:
1. Check Vercel logs: Project → Deployments → View logs
2. Check Shopify API status: https://shopifystatus.com/
3. Review `/lib/shopify/` files for API calls

---

**Your site is ready to launch! 🚀**
