# Quick Setup Guide

## 🎯 Get Running in 5 Minutes

### Step 1: Prerequisites
Ensure you have Node.js 18+ installed:
```bash
node --version  # Should be v18 or higher
npm --version   # Should be v9 or higher
```

### Step 2: Install Dependencies
```bash
cd portfolio-site
npm install
```

This will install all frontend and backend dependencies (~2-3 minutes).

### Step 3: Configure Email (Optional for Testing)
```bash
cp .env.example .env
```

For now, you can skip email configuration. The form will work, but emails won't send.

To enable email later:
1. Use Gmail with App Password (see README.md)
2. Or use a service like SendGrid (free tier)

### Step 4: Start Development Servers

**Terminal 1 - Frontend:**
```bash
npm run dev
```
Opens at http://localhost:3000

**Terminal 2 - Backend:**
```bash
npm run server
```
Runs at http://localhost:5000

### Step 5: Customize Your Content

Open `src/data/portfolio.js` and update:
- Your name, role, and contact info
- About section narrative
- Skills and technologies
- Projects (the most important section!)
- Work experience and education
- Achievements and awards

**Important:** Replace all placeholder content with your real information.

## 🎨 Customization Checklist

- [ ] Personal info (name, email, links)
- [ ] About section story
- [ ] Skills categories
- [ ] At least 4 detailed projects
- [ ] Work experience / internships
- [ ] Education details
- [ ] Achievements (hackathons, certifications)
- [ ] Social media links
- [ ] Accent color (optional, in tailwind.config.js)

## 🚀 Quick Deployment

### Deploy Frontend (Vercel - Fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel

# Follow prompts, done in 2 minutes!
```

### Deploy Backend (Railway - Easiest)
1. Push code to GitHub
2. Go to railway.app
3. Click "New Project" → "Deploy from GitHub"
4. Select your repo
5. Add environment variables in settings
6. Deploy!

## 📱 Test Before Sharing

### Checklist:
- [ ] All sections load correctly
- [ ] Navigation smooth scrolls work
- [ ] All external links open (GitHub, LinkedIn)
- [ ] Contact form shows validation
- [ ] Mobile responsive (use browser dev tools)
- [ ] No console errors
- [ ] Fast loading (< 3 seconds)

## 🐛 Common Issues

**Port 3000 already in use:**
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Animations not working:**
- Clear browser cache
- Check browser console for errors
- Try in incognito mode

**Contact form not submitting:**
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Verify .env file exists (even if empty)

## 💡 Pro Tips

1. **Run Lighthouse audit** before sharing (Chrome DevTools → Lighthouse)
2. **Test on mobile device** via network (use your local IP)
3. **Get feedback** from a friend before sending to recruiters
4. **Keep projects updated** - add new work every month
5. **Measure metrics** - add impact numbers to projects

## 📚 Next Steps

1. Read full `README.md` for detailed documentation
2. Review `ARCHITECTURE.md` to understand design decisions
3. Customize styling in `tailwind.config.js`
4. Add your resume PDF to `public/` folder
5. Set up real email service for contact form

## 🎓 Learning Resources

**If you're new to these technologies:**
- React: https://react.dev/learn
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/introduction/
- Express: https://expressjs.com/en/starter/hello-world.html

## ⚡ Production Checklist

Before deploying to production:
- [ ] Update all placeholder content
- [ ] Test contact form with real email
- [ ] Run `npm run build` successfully
- [ ] Check for console errors
- [ ] Test on multiple browsers
- [ ] Verify mobile responsive design
- [ ] Update meta tags in index.html
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

---

**Need help?** Check the detailed README.md or ARCHITECTURE.md files.

**Ready to impress?** Your portfolio is designed to showcase engineering quality and thoughtful design. Good luck! 🚀
