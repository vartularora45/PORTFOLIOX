# Deployment Guide

Complete guide to deploying your portfolio to production.

## Overview

Your portfolio consists of two parts:
1. **Frontend** (React app) - Static site hosting
2. **Backend** (Express API) - Node.js server hosting

You can deploy them separately or together, depending on your needs.

---

## 🚀 Frontend Deployment

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Free tier with generous limits
- Automatic HTTPS
- Built-in CDN
- Zero configuration for Vite/React
- Automatic deployments from Git

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio-site
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N`
   - Project name? (Accept default or customize)
   - Directory? `./` (current directory)
   - Override build command? `N`
   - Output directory? `dist`

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

5. **Custom Domain (Optional)**
   - Go to your Vercel dashboard
   - Select your project
   - Settings → Domains
   - Add your domain and follow DNS instructions

**Automatic Deployments:**
Connect GitHub repo in Vercel dashboard for automatic deploys on push.

### Option 2: Netlify

**Steps:**

1. **Build your site**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy
   ```

3. **Or use Netlify UI**
   - Drag and drop `dist` folder to netlify.com/drop
   - Or connect GitHub repo for automatic deploys

**Configuration:**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/' // Your repo name
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🖥️ Backend Deployment

### Option 1: Railway (Recommended - Easiest)

**Why Railway?**
- Free $5/month credit
- Simple GitHub integration
- Environment variables management
- Automatic SSL

**Steps:**

1. **Create Railway account** at railway.app

2. **Create new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your portfolio repository

3. **Configure build**
   - Railway auto-detects Node.js
   - Root directory: `./`
   - Build command: `npm install`
   - Start command: `node server/index.js`

4. **Add environment variables**
   - Go to project → Variables
   - Add:
     ```
     PORT=5000
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASSWORD=your-app-password
     RECIPIENT_EMAIL=your-email@gmail.com
     ```

5. **Deploy**
   - Railway automatically deploys on push
   - Get your backend URL (e.g., `your-app.railway.app`)

6. **Update frontend**
   - In `src/sections/Contact.jsx`, update API URL:
   ```javascript
   const response = await fetch('https://your-app.railway.app/api/contact', {
   ```

### Option 2: Render

**Steps:**

1. **Create Render account** at render.com

2. **Create new Web Service**
   - Connect GitHub repo
   - Name: portfolio-backend
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server/index.js`

3. **Add environment variables**
   - In Render dashboard, add same variables as Railway

4. **Deploy**
   - Render auto-deploys on push
   - Get your URL

### Option 3: Heroku

**Steps:**

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and create app**
   ```bash
   heroku login
   heroku create portfolio-backend
   ```

3. **Add Procfile**
   ```
   web: node server/index.js
   ```

4. **Set environment variables**
   ```bash
   heroku config:set SMTP_HOST=smtp.gmail.com
   heroku config:set SMTP_USER=your-email@gmail.com
   heroku config:set SMTP_PASSWORD=your-app-password
   heroku config:set RECIPIENT_EMAIL=your-email@gmail.com
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

---

## 📧 Email Service Setup

### Option 1: Gmail (Free - Good for Testing)

**Steps:**

1. **Enable 2FA on Google Account**
   - Google Account → Security → 2-Step Verification

2. **Generate App Password**
   - Security → 2-Step Verification → App passwords
   - Select app: Mail
   - Select device: Other (Custom name: Portfolio)
   - Copy the 16-character password

3. **Use in .env**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx  # App password
   ```

**Limitations:**
- 500 emails/day limit
- Less reliable than dedicated services

### Option 2: SendGrid (Recommended for Production)

**Why SendGrid?**
- Free tier: 100 emails/day forever
- Better deliverability
- Email analytics
- Professional appearance

**Steps:**

1. **Create SendGrid account** at sendgrid.com

2. **Create API Key**
   - Settings → API Keys → Create API Key
   - Name it "Portfolio"
   - Full Access or Restricted (Mail Send)
   - Copy the API key

3. **Verify sender email**
   - Settings → Sender Authentication
   - Verify Single Sender
   - Enter your email and verify

4. **Use in .env**
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASSWORD=SG.your-api-key-here
   ```

### Option 3: Mailgun

**Free Tier:** 5,000 emails/month

**Steps:**

1. **Create Mailgun account** at mailgun.com

2. **Get SMTP credentials**
   - Sending → Domain settings → SMTP credentials

3. **Use in .env**
   ```env
   SMTP_HOST=smtp.mailgun.org
   SMTP_PORT=587
   SMTP_USER=postmaster@your-domain.mailgun.org
   SMTP_PASSWORD=your-mailgun-password
   ```

---

## 🔄 Complete Deployment Workflow

### Step-by-Step Production Deployment

**1. Prepare Code**
```bash
# Ensure everything works locally
npm run dev      # Test frontend
npm run server   # Test backend
npm run build    # Test production build
```

**2. Set Up Email Service**
- Choose provider (SendGrid recommended)
- Get SMTP credentials
- Test email sending locally

**3. Deploy Backend**
```bash
# Choose Railway (easiest)
# - Push to GitHub
# - Create Railway project
# - Connect GitHub repo
# - Add environment variables
# - Deploy automatically
```

**4. Update Frontend with Backend URL**
```javascript
// src/sections/Contact.jsx
const response = await fetch('https://your-backend.railway.app/api/contact', {
  // ...
});
```

**5. Deploy Frontend**
```bash
# Build and deploy to Vercel
npm run build
vercel --prod
```

**6. Test Production**
- Visit your Vercel URL
- Test navigation
- Submit contact form
- Check email delivery
- Test on mobile

**7. Custom Domain (Optional)**
- Purchase domain (Namecheap, Google Domains)
- Add to Vercel: Settings → Domains
- Update DNS records as instructed
- Wait for SSL certificate (automatic)

---

## 🔒 Security Checklist

Before going live:

- [ ] Environment variables are not in code
- [ ] `.env` is in `.gitignore`
- [ ] API keys are rotated after testing
- [ ] CORS is configured for production domain
- [ ] Rate limiting is enabled (optional, see below)
- [ ] Input validation on client and server
- [ ] HTTPS is enabled (automatic with Vercel/Railway)

### Add Rate Limiting (Recommended)

Install:
```bash
npm install express-rate-limit
```

Update `server/index.js`:
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per 15 minutes
  message: 'Too many requests, please try again later.'
});

app.post('/api/contact', limiter, validateContactForm, async (req, res) => {
  // ...
});
```

---

## 🎯 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all sections
- [ ] Contact form submits successfully
- [ ] Email is received in inbox
- [ ] Auto-reply is sent to user
- [ ] Links open to correct destinations
- [ ] Mobile responsive works
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Custom domain works (if added)
- [ ] SSL certificate is active
- [ ] Analytics tracking works (if added)

---

## 📊 Monitoring & Analytics

### Google Analytics (Optional)

1. **Create GA4 property** at analytics.google.com

2. **Get Measurement ID** (G-XXXXXXXXXX)

3. **Add to index.html**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics

Already included if deployed to Vercel! Just enable in dashboard.

### Railway Monitoring

Railway provides basic monitoring:
- Request logs
- CPU/Memory usage
- Uptime statistics

---

## 🐛 Troubleshooting

### Frontend Issues

**Build fails on Vercel:**
```bash
# Check build locally first
npm run build

# If works locally but fails on Vercel:
# - Check Node version in Vercel settings
# - Ensure all dependencies are in package.json
```

**404 on page refresh:**
- Add redirect rules (see Netlify config above)
- Vercel handles this automatically

### Backend Issues

**Email not sending:**
1. Check environment variables are set correctly
2. Test SMTP credentials locally
3. Check Railway/Render logs
4. Verify sender email is verified (SendGrid)

**CORS errors:**
Update `server/index.js`:
```javascript
app.use(cors({
  origin: ['https://your-domain.vercel.app', 'https://your-custom-domain.com']
}));
```

**Server not starting:**
- Check logs in Railway/Render dashboard
- Verify start command is correct
- Ensure PORT environment variable is set

---

## 💰 Cost Breakdown

**Free Tier (Sufficient for Personal Portfolio):**
- Frontend: Vercel Free ($0/month)
- Backend: Railway Free ($5 credit = ~1-2 months)
- Email: SendGrid Free (100 emails/day)
- Domain: $10-15/year (optional)

**Total: $0-15/year**

**Scaling to Paid (if needed):**
- Vercel Pro: $20/month
- Railway: ~$5-10/month (pay as you go)
- SendGrid: $15/month (40K emails)

---

## 🚀 Advanced: CI/CD Pipeline

### GitHub Actions for Auto-Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

**You're all set!** Your portfolio is now deployed and ready to impress. 🎉

For updates:
1. Make changes locally
2. Push to GitHub
3. Automatic deployment happens
4. Check production site

Good luck with your job search! 🚀
