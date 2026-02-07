# Professional Portfolio Website

A production-grade personal portfolio built with React, Tailwind CSS, and Express. Designed for software engineers applying to product companies, startups, and internships.

## 🎯 Design Philosophy

- **Minimal & Professional**: Clean UI inspired by modern SaaS landing pages
- **Engineering Quality**: Production-ready code with scalable architecture
- **Performance First**: Optimized bundle size, lazy loading, smooth animations
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **Responsive**: Desktop-first design that works beautifully on mobile

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Subtle, purposeful animations
- **React Icons** - Consistent iconography

### Backend
- **Express** - REST API server
- **Nodemailer** - Email handling for contact form
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.jsx   # Sticky navigation with scroll effects
│   │   ├── Section.jsx      # Section wrapper with scroll reveal
│   │   └── Footer.jsx       # Footer with social links
│   │
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # Professional narrative
│   │   ├── Skills.jsx       # Categorized skills
│   │   ├── Projects.jsx     # Detailed project showcase
│   │   ├── Experience.jsx   # Timeline view
│   │   ├── Achievements.jsx # Awards and certifications
│   │   └── Contact.jsx      # Contact form
│   │
│   ├── data/
│   │   └── portfolio.js     # All content configuration
│   │
│   ├── utils/
│   │   └── animations.js    # Framer Motion variants
│   │
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── server/
│   └── index.js             # Express API server
│
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind theme
└── postcss.config.js       # PostCSS config
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone or download this project**
   ```bash
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your SMTP credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

### Development

**Run frontend and backend separately:**

```bash
# Terminal 1 - Frontend (port 3000)
npm run dev

# Terminal 2 - Backend (port 5000)
npm run server
```

Visit `http://localhost:3000` to view your portfolio.

### Production Build

```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Guide

### 1. Personal Information

Edit `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your value proposition",
  email: "your.email@example.com",
  // ... update all fields
};
```

### 2. Content Sections

All content lives in `src/data/portfolio.js`:
- `about` - Your professional narrative
- `skills` - Categorized technical skills
- `projects` - Detailed project descriptions
- `experience` - Work experience and education
- `achievements` - Awards and certifications

### 3. Styling & Theme

**Colors**: Edit `tailwind.config.js`
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change accent color
    // ...
  }
}
```

**Typography**: Update font imports in `index.html` and `tailwind.config.js`

**Spacing**: Modify section padding in `src/index.css`

### 4. Resume/CV Download

Add a resume PDF to `public/` folder and link it in the Hero section:

```jsx
<a
  href="/resume.pdf"
  download
  className="btn-secondary"
>
  Download Resume
  <HiDownload />
</a>
```

## 📧 Email Configuration

### Gmail Setup (Recommended for Testing)

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Google Account → Security → 2-Step Verification → App passwords
3. Use the generated 16-character password in `.env`

### Production Email Services

For production, use a dedicated email service:

**SendGrid** (Free tier: 100 emails/day)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

**Mailgun** (Free tier: 5000 emails/month)
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.com
SMTP_PASSWORD=your-mailgun-password
```

## 🌐 Deployment

### Frontend (Vercel/Netlify)

**Vercel** (Recommended):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify**:
```bash
# Build command
npm run build

# Publish directory
dist
```

### Backend (Heroku/Railway/Render)

**Railway**:
1. Push to GitHub
2. Connect Railway to your repo
3. Set environment variables in Railway dashboard
4. Deploy

**Render**:
1. Create new Web Service
2. Connect to GitHub repo
3. Build command: `npm install`
4. Start command: `node server/index.js`
5. Add environment variables

### Full-Stack Deployment

Update the API endpoint in `src/sections/Contact.jsx`:
```javascript
const response = await fetch('https://your-backend-url.com/api/contact', {
  // ...
});
```

## 🎨 Design System

### Typography Hierarchy
- `heading-xl` - Hero headlines (72px)
- `heading-lg` - Section titles (48px)
- `heading-md` - Subsections (32px)
- `heading-sm` - Cards (24px)
- `body-lg` - Large body text (18px)
- `body-base` - Regular body text (16px)

### Color Palette
- **Neutral**: Grays for text and backgrounds
- **Primary**: Blue accent for CTAs and highlights
- **White**: Clean backgrounds and cards

### Components
- `card` - White card with border and hover effect
- `tag` - Pill-shaped badge for skills
- `btn-primary` - Solid button
- `btn-secondary` - Outlined button

## ⚡ Performance Optimizations

- **Code Splitting**: Dynamic imports for heavy components
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Preconnect to font services
- **Lazy Loading**: Images and sections load on scroll
- **CSS Purging**: Tailwind removes unused styles
- **Minification**: Production builds are compressed

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## 🐛 Troubleshooting

### Frontend issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for port conflicts
lsof -ti:3000 | xargs kill -9
```

### Backend issues
```bash
# Test email configuration
node -e "console.log(require('./server/index.js'))"

# Check server logs
npm run server
```

### Contact form not working
1. Verify `.env` file exists and has correct SMTP credentials
2. Check backend is running on port 5000
3. Look for CORS errors in browser console
4. Test with a different email provider

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Nodemailer](https://nodemailer.com/)

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 💡 Tips for Success

1. **Keep Projects Focused**: 4-6 high-quality projects > 20 shallow ones
2. **Quantify Results**: Use metrics to demonstrate impact
3. **Show the Process**: Include problem-solution-results structure
4. **Update Regularly**: Add new projects and experiences
5. **Be Authentic**: Let your personality show through professional tone
6. **Test Everything**: Check all links, forms, and responsive behavior
7. **Get Feedback**: Have peers review before sharing with recruiters

---

Built with ❤️ and attention to detail. Good luck with your job search!
