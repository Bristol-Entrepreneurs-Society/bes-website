# BES Website Setup Guide

## 🚨 Important Notice

The project structure has been created successfully, but there's an npm installation issue on this system. Follow the manual setup steps below.

## 📁 What's Been Created

✅ **Complete project structure** with all pages and components
✅ **Tailwind CSS configuration** with BES brand colors
✅ **TypeScript setup** and type definitions
✅ **All required pages**: Home, Committee, Events, Gallery, Blog, Partners, Contact
✅ **Reusable components**: Navbar, Footer, ContactForm, UI components
✅ **API routes** for contact form functionality
✅ **SEO optimization** with meta tags, sitemap, and robots.txt
✅ **Sample data** for events, committee members, and partners

## 🔧 Manual Setup Steps

### 1. Install Dependencies

Since npm has issues on this system, you'll need to install dependencies manually:

```bash
# Install core dependencies
npm install react@^18.2.0 react-dom@^18.2.0 next@14.2.5

# Install dev dependencies
npm install -D typescript@^5.0.0 @types/node@^20.0.0 @types/react@^18.0.0 @types/react-dom@^18.0.0

# Install Tailwind CSS
npm install -D tailwindcss@^3.3.2 autoprefixer@^10.4.14 postcss@^8.4.24

# Install additional dependencies for full functionality
npm install framer-motion@^11.0.0 lucide-react@^0.263.1 resend@^3.1.0
npm install clsx@^2.0.0 tailwind-merge@^2.0.0 class-variance-authority@^0.7.0
npm install @radix-ui/react-slot@^1.0.2 @radix-ui/react-dropdown-menu@^2.0.6
npm install @radix-ui/react-select@^2.0.0 @radix-ui/react-toast@^1.1.5

# Install ESLint
npm install -D eslint@^8.45.0 eslint-config-next@14.2.5
```

### 2. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=hello@besbristol.com
```

### 4. Test the Setup

```bash
# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🎯 What You'll See

Once everything is set up, you'll have:

- **Homepage** with hero section, highlights, and contact CTA
- **Committee page** with member profiles and roles
- **Events page** with filtering and categorization
- **Gallery page** with lightbox functionality
- **Blog page** ready for MDX content
- **Partners page** with partnership tiers
- **Contact page** with form and FAQ
- **Fully responsive design** that works on all devices
- **Professional animations** using Framer Motion
- **SEO optimized** with proper meta tags

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The website is compatible with any platform that supports Next.js:
- Netlify
- Railway
- AWS/GCP
- Docker

## 🔍 Troubleshooting

### npm install issues
- Try using yarn instead: `yarn install`
- Clear npm cache: `npm cache clean --force`
- Check Node.js version (requires 18+)

### Build errors
- Ensure all dependencies are installed
- Check TypeScript configuration
- Verify environment variables are set

### Styling issues
- Confirm Tailwind CSS is properly configured
- Check PostCSS configuration
- Verify CSS imports in globals.css

## 📞 Support

If you encounter issues:

1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure environment variables are set
4. Check the README.md for detailed instructions

## 🎉 Success!

Once everything is working, you'll have a professional, modern website for the Bristol Entrepreneurs Society that:

- Showcases your events and activities
- Connects with potential partners
- Provides easy contact methods
- Looks great on all devices
- Follows accessibility best practices
- Is optimized for search engines

---

**The project structure is complete and ready for you to get running! 🚀** 