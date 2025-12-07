# IUFA Accounts Academy - Modern Website

A modern, futuristic Next.js website for IUFA Accounts Academy featuring responsive design, smooth animations, and comprehensive course information.

## 🚀 Features

- **Modern Design**: Futuristic UI with custom color palette and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Complete SEO setup with metadata, Open Graph, and JSON-LD
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Interactive**: Smooth animations using Framer Motion
- **Course Management**: Dynamic course cards with detailed modals
- **Contact Forms**: Functional contact form with validation
- **Analytics Ready**: Google Analytics and conversion tracking setup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Images**: Next/Image with optimization
- **TypeScript**: Full TypeScript support

## 🎨 Design System

### Color Palette
- **Matte Navy**: #14264A (Primary)
- **Deep Indigo**: #1F3B8A (Accent)
- **Coral Red**: #E34234 (CTAs)
- **Warm Gray**: #F6F7F9 (Background)
- **Off White**: #FEFEFF (Text background)
- **Accent Gold**: #D4A84B (Trust badges)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800
- **Hierarchy**: Proper heading structure for SEO

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iufa-accounts-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.js          # Contact form API
│   ├── globals.css               # Global styles
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
├── components/
│   ├── Header.jsx                # Navigation header
│   ├── Hero.jsx                  # Hero section
│   ├── CourseCard.jsx            # Course card component
│   ├── CourseModal.jsx           # Course details modal
│   └── Footer.jsx                # Footer component
├── lib/
│   ├── courses.js                # Course data
│   └── seo.js                    # SEO configuration
├── public/
│   └── (static assets)
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## 🎯 Key Components

### Header
- Sticky navigation with scroll effects
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Call-to-action buttons

### Hero Section
- Animated headline with staggered text reveal
- Floating UI elements
- Background geometric shapes
- Call-to-action buttons

### Course Cards
- Hover animations and effects
- Course details modal
- Responsive grid layout
- Interactive elements

### Contact Form
- Form validation
- API integration
- Success/error handling
- Responsive design

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch Friendly**: Optimized for touch interactions

## ⚡ Performance Targets

- **Lighthouse Scores**:
  - Performance: ≥ 90
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - SEO: ≥ 90

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
# Email Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password

# Analytics
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
GTM_ID=GTM-XXXXXXX

# Database (if using)
DATABASE_URL=your-database-url
```

### SEO Configuration
Update `lib/seo.js` with your:
- Domain URL
- Social media links
- Contact information
- Business details

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

### Custom Server
1. Build: `npm run build`
2. Start: `npm start`

## 📊 Analytics Setup

1. **Google Analytics 4**
   - Add GA4 measurement ID to environment variables
   - Tracking events are already implemented

2. **Google Tag Manager**
   - Add GTM container ID
   - Configure conversion tracking

3. **Hotjar (Optional)**
   - Add Hotjar tracking code for heatmaps

## 🔒 Security

- Form validation on both client and server
- CSRF protection
- Rate limiting (implement as needed)
- Input sanitization
- Environment variable protection

## 📈 SEO Features

- **Metadata**: Complete meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Proper URL structure

## 🎨 Customization

### Colors
Update `tailwind.config.js` to change the color scheme:

```js
colors: {
  'matte-navy': '#14264A',
  'coral-red': '#E34234',
  // Add your colors
}
```

### Content
Update course data in `lib/courses.js`:
- Course information
- Testimonials
- FAQ content
- Statistics

### Images
Replace placeholder images with actual photos:
- Course images
- Team photos
- Facility images
- Student testimonials

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind styles not loading**
   - Check if PostCSS is configured correctly
   - Verify Tailwind config file

2. **Animations not working**
   - Ensure Framer Motion is installed
   - Check for JavaScript errors

3. **Images not displaying**
   - Verify image URLs are accessible
   - Check Next.js image configuration

## 📞 Support

For technical support or customization requests:
- Email: dev@iufa-academy.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## 📄 License

This project is proprietary software for IUFA Accounts Academy.

---

**Built with ❤️ for IUFA Accounts Academy**
