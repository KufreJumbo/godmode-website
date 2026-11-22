# GodMode AI Website - Setup Guide

## Quick Start

### Option 1: Automatic Setup (Recommended)

Run the setup script:

```powershell
cd godmode-website
.\setup.ps1
```

This will install all dependencies and start the development server.

### Option 2: Manual Setup

```powershell
# 1. Navigate to project
cd godmode-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## What's Been Built

### ✅ Complete Features

1. **Home Page** - Fully animated with all 12 sections:
   - Hero with animated background
   - Capability strip (scrolling)
   - Payoff section (4 cards)
   - What We Do (4 service cards)
   - Selected Work (3 projects)
   - Motion Showcase (opposite-direction carousels)
   - Why GodMode (4 principles)
   - How We Work (5 steps with connector)
   - Proof (stats counter + testimonials)
   - Insights section (3 articles)
   - Final CTA
   
2. **Contact Page** - Full contact form with:
   - Form with validation
   - Quick contact info
   - WhatsApp integration
   - Success message animation

3. **Layout Components**:
   - Header with smooth scroll behavior
   - Mobile-responsive navigation
   - Footer with links and social icons
   - Floating WhatsApp button

4. **Motion System**:
   - Pop-up animations on scroll
   - Line-by-line text reveals
   - Opposite-direction carousels
   - Counter animations
   - Hover effects with gold glow
   - Reduced-motion support

5. **Design System**:
   - Dark navy (#050B1A) and gold (#D4AF37) theme
   - Poppins and Playfair Display fonts
   - Consistent spacing and typography
   - Mobile-first responsive design

## Next Steps

### 1. Content Updates

Replace placeholder content in these files:

**Team Information** (`components/Footer.tsx`, `app/about/page.tsx`):
- Add real photos of Gideon Akpan and Kufreabasi Jumbo
- Update bios and credentials
- Confirm titles

**Projects** (`components/home/SelectedWork.tsx`):
- Replace with 3-6 real projects
- Add actual screenshots
- Include verified results and metrics

**Testimonials** (`components/home/Proof.tsx`):
- Add real client quotes with permissions
- Include names, roles, and companies

**Contact Details** (multiple files):
- Confirm WhatsApp number (currently: 2347065822790)
- Verify phone numbers and email
- Update domain if different from godmodeai.org

### 2. Add Real Media

Place files in the `public/` folder:

```
public/
├── images/
│   ├── team/           # Team photos
│   ├── projects/       # Project screenshots
│   ├── clients/        # Client logos
│   └── training/       # Training session photos
├── videos/
│   └── demos/          # AI workflow demos
└── logo.svg            # Company logo
```

Update image references in components to use Next.js Image component.

### 3. Remaining Pages to Build

Copy the pattern from existing pages:

- `/services` - Services overview
- `/services/ai-transformation` - AI service page
- `/services/training` - Training page  
- `/services/web-development` - Web dev page
- `/services/creative-studio` - Creative page
- `/work` - Portfolio with filters
- `/about` - Team and story page
- `/insights` - Blog/articles page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### 4. Form Backend

Current contact form logs to console. Connect to:

- Email service (SendGrid, Mailgun, etc.)
- CRM (HubSpot, Pipedrive, etc.)
- Or serverless function (Vercel, Netlify)

Example with Vercel:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email or save to database
  return Response.json({ success: true });
}
```

### 5. Analytics & Tracking

Add to `app/layout.tsx`:

```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

Track events:
- Form submissions
- WhatsApp clicks
- Button interactions
- Page views

### 6. SEO Optimization

Update `app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://godmodeai.org'),
  title: {
    default: 'GodMode AI Solutions | AI Transformation Partner',
    template: '%s | GodMode AI Solutions'
  },
  description: '...',
  keywords: ['...'],
  openGraph: {
    images: ['/og-image.jpg'],
  },
};
```

Add page-specific metadata in each page file.

### 7. Performance Optimization

Before launch:

- [ ] Compress all images (use WebP format)
- [ ] Optimize videos (H.264, compressed)
- [ ] Run Lighthouse audit
- [ ] Test on slow 3G connection
- [ ] Enable Next.js Image optimization
- [ ] Add loading states for async content
- [ ] Implement error boundaries

### 8. Testing Checklist

- [ ] Test all forms submit correctly
- [ ] Verify WhatsApp links work on mobile
- [ ] Check all internal links navigate properly
- [ ] Test mobile menu on various devices
- [ ] Verify animations work (and reduced-motion)
- [ ] Check color contrast for accessibility
- [ ] Test with screen reader
- [ ] Verify keyboard navigation
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS and Android

## Environment Variables

Create `.env.local` file:

```env
# Optional: Add your configuration
NEXT_PUBLIC_SITE_URL=https://godmodeai.org
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SENDGRID_API_KEY=your_key_here
```

## Deployment

### Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow prompts to connect to your Vercel account.

### Deploy to Other Platforms

**Build command**: `npm run build`
**Output directory**: `.next`
**Install command**: `npm install`
**Node version**: 18+

Supports: Netlify, AWS Amplify, Digital Ocean, etc.

## Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    DEFAULT: "#YOUR_COLOR",
    mid: "#YOUR_COLOR",
  },
  gold: {
    DEFAULT: "#YOUR_COLOR",
  },
}
```

### Change Fonts

Update `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

And `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["Your Font", "sans-serif"],
}
```

### Adjust Animations

Edit animation durations in components or globally in `tailwind.config.ts`.

Disable animations: Set `prefers-reduced-motion` in your OS settings or remove `motion` components.

## Support & Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev/)

## Troubleshooting

**Dependencies not installing?**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

**Port 3000 already in use?**
```bash
# Use different port
npm run dev -- -p 3001
```

**Build errors?**
- Check Node.js version (need 18+)
- Ensure all files are saved
- Check for TypeScript errors: `npm run lint`

## Project Status

**Current Version**: 2.0
**Status**: Development
**Last Updated**: November 2, 2026

**Completed**: Home page, Contact page, Core components, Motion system, Design system

**In Progress**: Service pages, Portfolio page, About page, Blog

**Pending**: Content collection, Real media, Form backend, Analytics setup, Final testing, Launch
