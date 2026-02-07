# Complete File Index

Quick reference to find any file in the portfolio project.

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Complete documentation and setup guide |
| `QUICKSTART.md` | Get running in 5 minutes |
| `ARCHITECTURE.md` | Design decisions and technical details |
| `DEPLOYMENT.md` | How to deploy to production |
| `CUSTOMIZATION.md` | How to customize content and styling |
| `STRUCTURE.md` | Visual guide to project organization |
| `FILE_INDEX.md` | This file - complete file reference |

## ⚙️ Configuration Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `package.json` | Dependencies and scripts | Adding new libraries |
| `vite.config.js` | Vite build settings | Rarely needed |
| `tailwind.config.js` | Design system theme | Change colors/fonts |
| `postcss.config.js` | CSS processing | Never |
| `.env.example` | Environment variable template | Reference only |
| `.env` | Your actual secrets | For email setup |
| `.gitignore` | Files to exclude from Git | Adding sensitive files |
| `index.html` | HTML template | Meta tags, fonts |

## 🌐 Frontend Source Files

### Main Entry Points
| File | Purpose |
|------|---------|
| `src/main.jsx` | React application entry point |
| `src/App.jsx` | Root component that assembles all sections |
| `src/index.css` | Global styles, Tailwind directives, custom utilities |

### Components (`src/components/`)
| File | Purpose | Used By |
|------|---------|---------|
| `Navigation.jsx` | Sticky navbar with mobile menu | App.jsx |
| `Section.jsx` | Scroll reveal wrapper | All section components |
| `Footer.jsx` | Footer with social links | App.jsx |

### Sections (`src/sections/`)
| File | Order | Purpose |
|------|-------|---------|
| `Hero.jsx` | 1 | Landing section with CTA buttons |
| `About.jsx` | 2 | Professional narrative |
| `Skills.jsx` | 3 | Categorized technical skills |
| `Projects.jsx` | 4 | **Most important** - detailed project showcase |
| `Experience.jsx` | 5 | Work experience and education timeline |
| `Achievements.jsx` | 6 | Hackathons, certifications, awards |
| `Contact.jsx` | 7 | Contact form with backend integration |

### Data & Utilities
| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `src/data/portfolio.js` | **ALL CONTENT** | Often - this is your content! |
| `src/utils/animations.js` | Framer Motion animation presets | Rarely |

## 🖥️ Backend Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `server/index.js` | Express API server for contact form | Production config, rate limiting |

## 📦 Build Output (Generated)

| Directory | Purpose | Committed? |
|-----------|---------|------------|
| `node_modules/` | Installed dependencies | No |
| `dist/` | Production build output | No |

## 🗂️ Complete Directory Tree

```
portfolio-site/
│
├── 📚 Documentation
│   ├── README.md
│   ├── QUICKSTART.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── CUSTOMIZATION.md
│   ├── STRUCTURE.md
│   └── FILE_INDEX.md (this file)
│
├── ⚙️ Configuration
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   ├── .env (you create this)
│   └── .gitignore
│
├── 🌍 Public Assets
│   └── public/
│       └── (add your resume.pdf here)
│
├── 📄 HTML Entry
│   └── index.html
│
├── 🌐 Frontend Source
│   └── src/
│       ├── main.jsx (entry point)
│       ├── App.jsx (root component)
│       ├── index.css (global styles)
│       │
│       ├── components/
│       │   ├── Navigation.jsx
│       │   ├── Section.jsx
│       │   └── Footer.jsx
│       │
│       ├── sections/
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx (most important!)
│       │   ├── Experience.jsx
│       │   ├── Achievements.jsx
│       │   └── Contact.jsx
│       │
│       ├── data/
│       │   └── portfolio.js (🎯 EDIT THIS OFTEN)
│       │
│       └── utils/
│           └── animations.js
│
├── 🖥️ Backend Source
│   └── server/
│       └── index.js
│
└── 📦 Generated (Don't edit)
    ├── node_modules/
    └── dist/
```

## 🎯 Files You'll Edit Most

### Daily/Weekly
1. **`src/data/portfolio.js`** - Your content
   - Update projects as you build them
   - Add new skills
   - Update experience

### Initial Setup
2. **`index.html`** - Meta tags, page title
3. **`.env`** - Email configuration
4. **`tailwind.config.js`** - Colors, fonts

### Occasionally
5. **`src/sections/Projects.jsx`** - If changing project card layout
6. **`server/index.js`** - If adding rate limiting or new endpoints

### Rarely
- Other component files (they work well as-is)
- Configuration files (defaults are solid)

## 🔍 Finding Things Quickly

### "Where do I change..."

**...my name/email/bio?**
→ `src/data/portfolio.js` (personalInfo, about)

**...projects?**
→ `src/data/portfolio.js` (projects array)

**...colors?**
→ `tailwind.config.js` (theme.extend.colors.primary)

**...fonts?**
→ `index.html` (font imports) + `tailwind.config.js` (fontFamily)

**...the page title?**
→ `index.html` (<title> tag)

**...email settings?**
→ `.env` file (SMTP credentials)

**...navigation links?**
→ `src/components/Navigation.jsx` (navItems array)

**...footer content?**
→ `src/components/Footer.jsx`

**...form validation?**
→ `server/index.js` (validateContactForm function)

## 📋 Editing Checklist

When customizing your portfolio:

### Must Edit
- [ ] `src/data/portfolio.js` - All your content
- [ ] `.env` - Email configuration
- [ ] `index.html` - Page title and meta description

### Should Edit
- [ ] `tailwind.config.js` - Accent color (optional)
- [ ] `public/` - Add your resume PDF

### Optional
- [ ] `src/index.css` - Custom global styles
- [ ] Component files - Layout changes
- [ ] `server/index.js` - Add rate limiting

## 🚫 Don't Edit These

Unless you know what you're doing:
- `vite.config.js` - Build tool config
- `postcss.config.js` - CSS processing
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.gitignore` - Git rules

## 📞 Quick Reference

### Start Development
```bash
Terminal 1: npm run dev      # Frontend
Terminal 2: npm run server   # Backend
```

### Build for Production
```bash
npm run build
```

### Common File Paths
```javascript
// In JSX files, reference public assets:
<img src="/resume.pdf" />

// In CSS, use relative paths:
background-image: url('./assets/bg.png');

// Import from data:
import { projects } from '../data/portfolio';
```

## 🔗 File Relationships

```
index.html
    ↓ loads
src/main.jsx
    ↓ renders
src/App.jsx
    ↓ uses
src/components/* + src/sections/*
    ↓ import
src/data/portfolio.js
    ↓ exports
{ personalInfo, about, skills, projects, experience, achievements }
```

```
src/sections/Contact.jsx
    ↓ POST request
http://localhost:5000/api/contact
    ↓ handled by
server/index.js
    ↓ uses
nodemailer + .env credentials
    ↓ sends
Email via SMTP
```

## 📊 File Size Reference

```
Documentation files:      ~100 KB
Source code (src/):       ~150 KB
Node modules:             ~250 MB
Production build (dist/): ~500 KB (compressed)
```

## 🎓 Learning Path

**If you're new to this codebase:**

1. **Start here:**
   - Read `QUICKSTART.md`
   - Edit `src/data/portfolio.js`
   - Run `npm run dev`

2. **Then explore:**
   - Look at `src/sections/Hero.jsx` - simple component
   - Compare with `src/sections/Projects.jsx` - complex component
   - Check `src/index.css` - styling patterns

3. **Finally customize:**
   - Read `CUSTOMIZATION.md`
   - Try changing colors in `tailwind.config.js`
   - Add your own sections if desired

## 🛠️ Maintenance Tasks

### Monthly
- Update `src/data/portfolio.js` with new projects

### Quarterly
- Run `npm audit fix` for security updates
- Check and update dependencies if needed
- Review and update content for accuracy

### Yearly
- Major dependency upgrades
- Design refresh if trends change
- Performance audit with Lighthouse

---

**Pro tip:** Bookmark this file! It's your map to the entire project.

**Need to find something quickly?**
Use `Ctrl/Cmd + F` in your code editor to search across all files.
