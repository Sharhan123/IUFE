# IUFA Accounts Academy - Deployment Guide

This guide covers deploying the IUFA Accounts Academy website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Built by the Next.js team
- Zero configuration deployment
- Automatic HTTPS and CDN
- Excellent performance
- Free tier available

**Steps:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure environment variables
5. Deploy!

**Environment Variables to Set:**
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SMTP_HOST=your-smtp-host
SMTP_USER=your-email
SMTP_PASS=your-password
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### 2. Netlify

**Steps:**
1. Build the project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `out` folder
4. Configure custom domain
5. Set up form handling

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 18.x

### 3. Custom Server/VPS

**Requirements:**
- Node.js 18+ 
- PM2 for process management
- Nginx for reverse proxy
- SSL certificate

**Steps:**
1. Clone repository on server
2. Install dependencies: `npm install`
3. Build project: `npm run build`
4. Start with PM2: `pm2 start npm --name "iufa-academy" -- start`
5. Configure Nginx reverse proxy

## 🔧 Pre-Deployment Checklist

### Content Updates
- [ ] Replace placeholder images with actual photos
- [ ] Update course information and pricing
- [ ] Add real testimonials and student photos
- [ ] Update contact information
- [ ] Add actual social media links

### SEO Configuration
- [ ] Update `lib/seo.js` with actual domain
- [ ] Configure Google Analytics
- [ ] Set up Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Verify Open Graph images

### Performance Optimization
- [ ] Optimize images (WebP format recommended)
- [ ] Enable compression
- [ ] Configure CDN
- [ ] Set up caching headers
- [ ] Test Core Web Vitals

### Security
- [ ] Set up HTTPS
- [ ] Configure security headers
- [ ] Set up rate limiting
- [ ] Validate all forms
- [ ] Secure API endpoints

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Get measurement ID
3. Add to environment variables
4. Verify tracking in GA4 dashboard

### Google Tag Manager
1. Create GTM container
2. Add GTM ID to environment
3. Configure conversion tracking
4. Set up enhanced ecommerce

### Search Console
1. Verify domain ownership
2. Submit sitemap
3. Monitor search performance
4. Fix any crawl errors

## 📧 Email Configuration

### SMTP Setup (Gmail Example)
1. Enable 2-factor authentication
2. Generate app password
3. Use these settings:
   - Host: smtp.gmail.com
   - Port: 587
   - Security: STARTTLS

### Email Templates
The contact form sends:
- Notification to admissions team
- Auto-reply to user
- Lead data for CRM integration

## 🔒 Security Best Practices

### Environment Variables
- Never commit `.env` files
- Use different values for production
- Rotate secrets regularly
- Use secure password generation

### Headers
Add these security headers:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### Rate Limiting
Implement rate limiting for:
- Contact form submissions
- API endpoints
- Search functionality

## 🚀 Performance Optimization

### Image Optimization
- Use Next/Image component
- Implement lazy loading
- Serve WebP/AVIF formats
- Optimize for different screen sizes

### Caching Strategy
- Static assets: 1 year
- HTML pages: 1 hour
- API responses: 5 minutes
- Images: 30 days

### CDN Configuration
- Enable global CDN
- Configure edge caching
- Optimize for Indian users
- Set up multiple regions

## 📱 Mobile Optimization

### Testing Checklist
- [ ] Test on real devices
- [ ] Verify touch targets (44px minimum)
- [ ] Check form usability
- [ ] Test navigation menu
- [ ] Verify image loading

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## 🔍 SEO Optimization

### Technical SEO
- [ ] XML sitemap submitted
- [ ] Robots.txt configured
- [ ] Schema markup implemented
- [ ] Meta descriptions optimized
- [ ] Internal linking structure

### Content SEO
- [ ] Keyword research completed
- [ ] Title tags optimized
- [ ] Header structure (H1-H6)
- [ ] Alt text for images
- [ ] Local SEO for Mumbai location

## 📈 Monitoring & Analytics

### Performance Monitoring
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse CI

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

### Error Tracking
- Sentry
- LogRocket
- Bugsnag

## 🔄 Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor security vulnerabilities
- Backup database regularly
- Review analytics data
- Update course content

### Content Updates
- Add new courses
- Update testimonials
- Refresh blog content
- Update pricing
- Add success stories

## 🆘 Troubleshooting

### Common Issues

**Build Failures**
- Check Node.js version compatibility
- Verify all dependencies installed
- Review build logs for errors

**Performance Issues**
- Optimize images
- Enable compression
- Check third-party scripts
- Review bundle size

**SEO Problems**
- Verify meta tags
- Check robots.txt
- Submit sitemap
- Monitor search console

### Support Contacts
- Technical: dev@iufa-academy.com
- Content: content@iufa-academy.com
- Emergency: +91-XXXX-XXXX

## 📋 Post-Launch Checklist

### Week 1
- [ ] Monitor error rates
- [ ] Check form submissions
- [ ] Verify analytics tracking
- [ ] Test all functionality
- [ ] Monitor performance

### Month 1
- [ ] Review analytics data
- [ ] Optimize based on user behavior
- [ ] Update content as needed
- [ ] Plan marketing campaigns
- [ ] Gather user feedback

---

**Need help with deployment? Contact our technical team for assistance.**
