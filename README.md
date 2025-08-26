# Bristol Entrepreneurs Society (BES) Website

A modern, responsive website for the Bristol Entrepreneurs Society at the University of Bristol. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with BES brand colors
- **Responsive**: Mobile-first responsive design that works on all devices
- **Animations**: Subtle, tasteful animations using Framer Motion
- **SEO Optimized**: Built-in SEO best practices with meta tags and OpenGraph
- **Contact Form**: Integrated contact form with Resend email service
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Performance**: Optimized for speed with Next.js 14 App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom component library with shadcn/ui patterns
- **Email Service**: Resend
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/              # API routes
│   ├── committee/        # Committee page
│   ├── events/           # Events page
│   ├── gallery/          # Gallery page
│   ├── blog/             # Blog page
│   ├── partners/         # Partners page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   └── contact-form.tsx  # Contact form component
└── lib/                   # Utility functions and data
    ├── utils.ts           # Utility functions
    └── data/              # Static data (events, committee, partners)
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bes-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_TO_EMAIL=your_email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your Resend API key for email functionality | Yes |
| `CONTACT_TO_EMAIL` | Email address where contact form submissions will be sent | Yes |

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create a new API key in your dashboard
3. Add the key to your `.env.local` file

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with mission statement
- What we do highlights
- Upcoming events preview
- Featured partners
- Contact form CTA

### Committee (`/committee`)
- Committee member profiles
- Roles and responsibilities
- LinkedIn connections

### Events (`/events`)
- Upcoming and past events
- Category filtering
- Event details and registration

### Gallery (`/gallery`)
- Photo gallery with lightbox
- Category filtering
- Responsive grid layout

### Blog (`/blog`)
- Blog post listings
- Featured posts
- Category organization
- MDX-ready for future content

### Partners (`/partners`)
- Partnership tiers
- Current partner showcase
- Partnership benefits
- "Become a Partner" CTA

### Contact (`/contact`)
- Contact form
- Contact methods
- FAQ section
- Office hours and location

## 🎨 Customization

### Brand Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary Red**: `#E11D48` (rose-600)
- **Dark/Ink**: `#0F172A` (slate-900)
- **Slate Text**: `#334155`–`#64748B`
- **Accent**: `#22D3EE` (cyan-400)
- **Background**: `#F8FAFC` (slate-50)

### Content Updates

- **Events**: Update `src/lib/data/events.ts`
- **Committee**: Update `src/lib/data/committee.ts`
- **Partners**: Update `src/lib/data/partners.ts`
- **Blog Posts**: Add MDX files in `src/app/blog/` (future implementation)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Push your code to GitHub/GitLab
   - Connect your repository to Vercel

2. **Set environment variables**
   - Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel dashboard
   - Redeploy after adding variables

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Other Platforms

The website is compatible with any platform that supports Next.js:

- **Netlify**: Use `npm run build` and `npm run start`
- **Railway**: Deploy directly from GitHub
- **AWS/GCP**: Use Docker or build commands

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js 14 features
- **Image Optimization**: Built-in Next.js Image optimization

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Semantic HTML** structure
- **Keyboard navigation** support
- **Screen reader** friendly
- **Color contrast** compliant
- **Reduced motion** support

## 🔍 SEO Features

- **Meta tags** for all pages
- **OpenGraph** images and descriptions
- **Twitter Card** support
- **Structured data** ready
- **Sitemap.xml** included
- **Robots.txt** configured

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📝 Content Management

### Adding New Events

Edit `src/lib/data/events.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Event Title',
  date: '2024-12-01T18:00:00',
  location: 'Event Location',
  description: 'Event description...',
  isUpcoming: true,
  category: 'workshop' // or 'networking', 'speaker', 'competition', 'social'
}
```

### Adding Committee Members

Edit `src/lib/data/committee.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Member Name',
  role: 'Role Title',
  bio: 'Member bio...',
  year: '3rd Year',
  course: 'BSc Course Name',
  linkedin: 'https://linkedin.com/in/username'
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support or questions:

- **Email**: hello@besbristol.com
- **Website**: [besbristol.com](https://besbristol.com)
- **LinkedIn**: [Bristol Entrepreneurs Society](https://linkedin.com/company/bristol-entrepreneurs-society)

## 🙏 Acknowledgments

- University of Bristol for supporting student entrepreneurship
- Bristol SU for society affiliation
- All committee members and volunteers
- The open-source community for amazing tools and libraries

---

**Built with ❤️ by the BES Committee**
