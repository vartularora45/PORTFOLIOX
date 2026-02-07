# Project Structure Visual Guide

```
portfolio-site/
│
├── 📄 README.md                    # Complete documentation
├── 📄 QUICKSTART.md                # 5-minute setup guide
├── 📄 ARCHITECTURE.md              # Design decisions and patterns
├── 📄 package.json                 # Dependencies and scripts
├── 📄 .env.example                 # Environment variables template
├── 📄 .gitignore                   # Git ignore rules
│
├── ⚙️  Configuration Files
│   ├── vite.config.js              # Vite build configuration
│   ├── tailwind.config.js          # Design system (colors, fonts, spacing)
│   └── postcss.config.js           # CSS processing
│
├── 🌐 Frontend (src/)
│   │
│   ├── 📄 main.jsx                 # React entry point
│   ├── 📄 App.jsx                  # Root component
│   ├── 📄 index.css                # Global styles & Tailwind
│   │
│   ├── 🧩 components/              # Reusable UI components
│   │   ├── Navigation.jsx          # Sticky nav with mobile menu
│   │   ├── Section.jsx             # Scroll reveal wrapper
│   │   └── Footer.jsx              # Footer with social links
│   │
│   ├── 📑 sections/                # Page sections (order matters)
│   │   ├── Hero.jsx                # 1. Landing with CTA
│   │   ├── About.jsx               # 2. Professional narrative
│   │   ├── Skills.jsx              # 3. Technical skills grid
│   │   ├── Projects.jsx            # 4. Detailed project showcase ⭐
│   │   ├── Experience.jsx          # 5. Timeline of work/education
│   │   ├── Achievements.jsx        # 6. Awards and certifications
│   │   └── Contact.jsx             # 7. Contact form with validation
│   │
│   ├── 📊 data/
│   │   └── portfolio.js            # 🎯 ALL CONTENT HERE
│   │                                  (Update this file to customize)
│   │
│   └── 🛠️  utils/
│       └── animations.js           # Framer Motion variants
│
├── 🖥️  Backend (server/)
│   └── index.js                    # Express API server
│                                      - Email handling
│                                      - Form validation
│                                      - CORS configuration
│
├── 📦 Build Output
│   └── dist/                       # Production build (generated)
│
└── 🌍 Public Assets
    └── public/                     # Static files (favicon, resume, etc.)
```

## Component Hierarchy

```
App
│
├── Navigation
│   └── Mobile Menu (conditional)
│
├── Hero Section
│   ├── Status Badge
│   ├── Headline
│   ├── CTA Buttons
│   └── Social Links
│
├── About Section (Section wrapper)
│   └── Text Content
│
├── Skills Section (Section wrapper)
│   └── Skill Categories (grid)
│       └── Skill Tags
│
├── Projects Section (Section wrapper)
│   ├── Featured Projects (2-col grid)
│   │   └── Project Cards (detailed)
│   │
│   └── More Projects (3-col grid)
│       └── Project Cards (compact)
│
├── Experience Section (Section wrapper)
│   └── Timeline
│       └── Experience Cards
│           ├── Icon
│           ├── Title & Organization
│           ├── Description
│           └── Highlights (list)
│
├── Achievements Section (Section wrapper)
│   └── Achievement Cards (2-col grid)
│       ├── Trophy Icon
│       ├── Title & Award
│       └── Description
│
├── Contact Section (Section wrapper)
│   ├── Contact Info
│   │   ├── Email
│   │   ├── Location
│   │   └── Social Links
│   │
│   └── Contact Form
│       ├── Name Input
│       ├── Email Input
│       ├── Subject Input
│       ├── Message Textarea
│       ├── Status Message
│       └── Submit Button
│
└── Footer
    ├── Name & Role
    ├── Social Links
    └── Copyright
```

## Data Flow

```
portfolio.js (Single Source of Truth)
    │
    ├──> personalInfo ──> Hero, Contact, Footer
    ├──> about ──────────> About Section
    ├──> skills ─────────> Skills Section
    ├──> projects ───────> Projects Section
    ├──> experience ─────> Experience Section
    └──> achievements ───> Achievements Section


Contact Form Flow:
    User Input
        │
        ├──> Client Validation
        │
        ├──> POST /api/contact
        │
        ├──> Server Validation
        │
        ├──> Nodemailer SMTP
        │       │
        │       ├──> Email to You (notification)
        │       └──> Auto-reply to Sender
        │
        └──> Success/Error Response
```

## Styling Architecture

```
Tailwind CSS
    │
    ├── Base Layer (index.css)
    │   ├── CSS Reset
    │   ├── Global Styles
    │   └── Font Settings
    │
    ├── Components Layer (index.css)
    │   ├── .heading-xl, .heading-lg, etc.
    │   ├── .btn-primary, .btn-secondary
    │   ├── .card
    │   ├── .tag
    │   └── .section-container
    │
    ├── Utilities Layer
    │   └── Tailwind utility classes
    │       (used directly in JSX)
    │
    └── Theme Configuration (tailwind.config.js)
        ├── Colors (primary, neutral)
        ├── Typography (fonts, sizes)
        ├── Spacing & Breakpoints
        └── Animations (custom keyframes)
```

## Animation Strategy

```
Page Load
    │
    ├──> Navigation: Slide down from top
    │
    └──> Hero: Fade in + slide up (staggered)


Scroll Interactions
    │
    └──> Each Section: IntersectionObserver
            │
            └──> Once in viewport: Fade in + slide up
                    (only triggers once)


Micro-interactions
    │
    ├──> Buttons: Hover scale/color
    ├──> Cards: Border color change
    ├──> Links: Color transition
    └──> Form inputs: Focus ring
```

## Key Files to Customize

### 1. Content (MOST IMPORTANT)
```
src/data/portfolio.js
    - Personal information
    - All text content
    - Project details
    - Experience timeline
```

### 2. Styling
```
tailwind.config.js
    - Colors (accent color)
    - Fonts (if changing)
    
src/index.css
    - Global styles
    - Custom utilities
```

### 3. Configuration
```
.env
    - Email service credentials
    
index.html
    - Page title
    - Meta description
    - Font imports
```

## Development Scripts

```bash
npm run dev       # Start frontend dev server (port 3000)
npm run build     # Build for production
npm run preview   # Preview production build
npm run server    # Start backend server (port 5000)
```

## File Size Reference

```
Total project size: ~50MB (with node_modules)
Source code only: ~500KB

After build:
├── dist/
│   ├── assets/
│   │   ├── index-[hash].js     (~200KB gzipped)
│   │   └── index-[hash].css    (~20KB gzipped)
│   └── index.html              (~2KB)
```

## Port Configuration

```
Frontend Dev:  http://localhost:3000
Backend API:   http://localhost:5000
    │
    └──> Endpoints:
         ├── POST /api/contact  (form submission)
         └── GET /api/health    (health check)
```

---

This structure is designed for:
✅ Easy customization (all content in one file)
✅ Clear separation of concerns
✅ Scalable architecture
✅ Production-ready code quality
✅ Simple deployment process
