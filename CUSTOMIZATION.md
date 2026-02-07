# Customization Guide

This guide shows you exactly how to customize every aspect of your portfolio.

## 📝 Content Customization

### 1. Personal Information

**File:** `src/data/portfolio.js`

**What to change:**
```javascript
export const personalInfo = {
  name: "Your Full Name",              // Your actual name
  role: "Your Job Title",               // e.g., "Full Stack Developer"
  tagline: "Your unique value prop",    // One compelling sentence
  email: "your.email@example.com",      // Professional email
  location: "City, State/Country",      // Your location
  availability: "Your status",          // e.g., "Seeking Summer 2024 internship"
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",  // Optional
  }
};
```

**Tips:**
- Use your full name for professionalism
- Make tagline action-oriented and specific
- Use a professional email (avoid nicknames)
- Be honest about availability

### 2. About Section

**What makes a good About section:**
- Focus on what you do, not who you are
- Highlight technical interests
- Show problem-solving approach
- Demonstrate learning mindset
- Keep it under 3 paragraphs

**Example 1 (Entry Level):**
```javascript
export const about = {
  title: "About",
  content: [
    "I'm a computer science student passionate about building tools that solve real problems. My focus is on web development, with growing interest in distributed systems and API design.",
    
    "I believe the best code is simple, well-documented, and maintainable. I approach problems methodically: understand the requirements, consider edge cases, implement a solution, then refactor for clarity.",
    
    "Currently exploring cloud infrastructure, learning Go, and contributing to open source projects in the developer tools space."
  ]
};
```

**Example 2 (With Experience):**
```javascript
export const about = {
  title: "About",
  content: [
    "I'm a software engineer with 2 years building production systems used by thousands of users daily. My work spans full-stack development, with particular strength in backend architecture and database optimization.",
    
    "I value engineering fundamentals over framework trends. Good systems design, clean abstractions, and thoughtful testing create software that lasts. I'm most energized when solving problems that require both technical depth and product thinking.",
    
    "Currently focused on distributed systems, event-driven architectures, and mentoring junior developers."
  ]
};
```

### 3. Skills

**How to organize your skills:**
- Categories: Languages, Frontend, Backend, Tools, Practices
- Only include skills you can discuss in an interview
- Order by proficiency (strongest first)
- Be specific (React > "JavaScript frameworks")

**Example for Full-Stack Developer:**
```javascript
export const skills = {
  title: "Skills",
  categories: [
    {
      name: "Languages",
      items: ["JavaScript/TypeScript", "Python", "Java", "SQL"]
    },
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "React Query"]
    },
    {
      name: "Backend",
      items: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      name: "DevOps & Tools",
      items: ["Docker", "AWS", "Git", "GitHub Actions", "Linux"]
    },
    {
      name: "Practices",
      items: ["REST APIs", "Testing", "CI/CD", "Agile", "Code Review"]
    }
  ]
};
```

**Example for ML Engineer:**
```javascript
export const skills = {
  title: "Skills",
  categories: [
    {
      name: "Languages & ML",
      items: ["Python", "PyTorch", "TensorFlow", "NumPy", "Pandas"]
    },
    {
      name: "ML Techniques",
      items: ["Deep Learning", "NLP", "Computer Vision", "Model Deployment"]
    },
    {
      name: "Engineering",
      items: ["REST APIs", "Docker", "AWS SageMaker", "MLflow"]
    },
    {
      name: "Practices",
      items: ["Experiment Tracking", "A/B Testing", "Data Pipelines"]
    }
  ]
};
```

### 4. Projects (MOST IMPORTANT!)

**What makes a great project entry:**
- Clear problem statement
- Concrete solution approach
- Quantified results (metrics!)
- Tech stack that's relevant
- Live link or detailed README

**Template:**
```javascript
{
  id: 1,
  title: "Clear, Descriptive Name",
  description: "One-sentence summary of what it does",
  
  problem: "What problem did you encounter? Why does it matter? Who does it affect?",
  
  solution: "How did you solve it? What technologies? What was your approach? What was the key technical challenge?",
  
  tech: ["Technology", "Stack", "Used"],
  
  highlights: [
    "Metric or achievement #1",
    "Metric or achievement #2",
    "Metric or achievement #3"
  ],
  
  github: "https://github.com/you/project",
  live: "https://project-demo.vercel.app",  // Optional
  featured: true  // Set 3-4 projects as featured
}
```

**Real Example (Strong):**
```javascript
{
  id: 1,
  title: "CodeReview Bot",
  description: "Automated code review tool using GPT-4 to identify bugs and suggest improvements",
  
  problem: "Code reviews are time-consuming and inconsistent. Junior developers wait hours for feedback on basic issues that could be automated.",
  
  solution: "Built a GitHub Actions bot that analyzes pull requests using GPT-4 API. Parses diffs, identifies patterns, checks against style guide, and posts review comments. Integrated with Slack for notifications.",
  
  tech: ["Python", "FastAPI", "OpenAI API", "GitHub Actions", "PostgreSQL"],
  
  highlights: [
    "Reduced review time by 40% for team of 12 developers",
    "Caught 127 bugs before human review in 2 months",
    "Processed 500+ pull requests with 95% useful feedback rate"
  ],
  
  github: "https://github.com/username/codereview-bot",
  live: null,
  featured: true
}
```

**What NOT to do:**
```javascript
// ❌ Weak - No metrics, vague problem
{
  title: "Todo App",
  description: "A todo app to manage tasks",
  problem: "People need to manage tasks",
  solution: "Built a todo app with React",
  highlights: ["Works well", "Good UI"]
}

// ✅ Better - Even todo app can be compelling
{
  title: "TaskFlow",
  description: "Team task manager with automatic workload balancing",
  problem: "Task management tools don't help teams distribute work evenly. Managers manually assign tasks without visibility into capacity.",
  solution: "Built algorithm that analyzes task complexity, team velocity, and current assignments to suggest optimal distribution. Real-time dashboard shows capacity utilization per person.",
  tech: ["React", "Node.js", "MongoDB", "Chart.js"],
  highlights: [
    "Improved sprint completion rate by 35%",
    "Used by 3 teams totaling 24 people",
    "Reduced overtime hours by 25%"
  ]
}
```

### 5. Experience

**Format:**
```javascript
{
  id: 1,
  type: "work",  // or "education", "project"
  title: "Software Engineering Intern",
  organization: "Company Name",
  location: "City, State",
  date: "Month Year - Month Year",
  description: "Brief overview of role and responsibilities",
  highlights: [
    "Specific achievement with metric",
    "Another concrete result",
    "Recognition or impact"
  ]
}
```

**Example:**
```javascript
{
  id: 1,
  type: "work",
  title: "Backend Engineering Intern",
  organization: "Stripe",
  location: "San Francisco, CA",
  date: "May 2024 - August 2024",
  description: "Worked on payments infrastructure team building API services processing millions of transactions daily.",
  highlights: [
    "Reduced API latency by 35% through database query optimization",
    "Implemented rate limiting that prevented $50K in fraudulent charges",
    "Shipped 2 major features used by 10,000+ merchants",
    "Received return offer for full-time position"
  ]
}
```

### 6. Achievements

**What to include:**
- Hackathon wins
- Certifications (AWS, GCP, etc.)
- Programming competitions
- Open source contributions
- Publications or talks

**Example:**
```javascript
{
  id: 1,
  title: "HackMIT Grand Prize Winner",
  organization: "MIT",
  date: "September 2024",
  description: "Built real-time collaborative debugging tool. Led team of 4, implemented WebSocket architecture, presented to 1000+ attendees.",
  award: "Grand Prize - Best Overall Hack"
}
```

---

## 🎨 Visual Customization

### 1. Change Accent Color

**File:** `tailwind.config.js`

**Find:**
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',  // Main accent color
    600: '#0284c7',
    700: '#0369a1',
  }
}
```

**Popular alternatives:**
```javascript
// Green
primary: {
  50: '#f0fdf4',
  500: '#10b981',
  600: '#059669',
  700: '#047857',
}

// Purple
primary: {
  50: '#faf5ff',
  500: '#a855f7',
  600: '#9333ea',
  700: '#7e22ce',
}

// Orange
primary: {
  50: '#fff7ed',
  500: '#f97316',
  600: '#ea580c',
  700: '#c2410c',
}

// Pink
primary: {
  50: '#fdf2f8',
  500: '#ec4899',
  600: '#db2777',
  700: '#be185d',
}
```

### 2. Change Fonts

**Step 1:** Find fonts at [fonts.google.com](https://fonts.google.com) or [fontshare.com](https://www.fontshare.com/)

**Step 2:** Update `index.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Step 3:** Update `tailwind.config.js`
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Inter', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

**Recommended font pairs:**
```javascript
// Professional
sans: ['Inter', 'system-ui'],
display: ['Inter', 'system-ui'],

// Modern
sans: ['DM Sans', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],

// Technical
sans: ['IBM Plex Sans', 'sans-serif'],
display: ['IBM Plex Sans', 'sans-serif'],

// Elegant
sans: ['Work Sans', 'sans-serif'],
display: ['Fraunces', 'serif'],
```

### 3. Adjust Spacing

**File:** `src/index.css`

**Section padding:**
```css
.section-container {
  @apply max-w-6xl mx-auto px-6 
         py-16 md:py-24;  /* Smaller spacing */
  
  /* OR */
  
  @apply max-w-6xl mx-auto px-6 
         py-32 md:py-40;  /* Larger spacing */
}
```

### 4. Modify Typography Scale

**File:** `tailwind.config.js`

```javascript
fontSize: {
  // Make headings smaller
  'display-xl': ['3.5rem', { lineHeight: '1.1' }],
  'display-lg': ['2.5rem', { lineHeight: '1.15' }],
  
  // OR make them larger
  'display-xl': ['5rem', { lineHeight: '1.1' }],
  'display-lg': ['4rem', { lineHeight: '1.15' }],
}
```

---

## 🔧 Functionality Customization

### 1. Add Dark Mode

**Step 1:** Update `tailwind.config.js`
```javascript
module.exports = {
  darkMode: 'class',
  // ...
}
```

**Step 2:** Create dark mode toggle component
```jsx
// src/components/DarkModeToggle.jsx
import { useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
    >
      {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  );
};
```

**Step 3:** Add dark mode classes
```jsx
// Example: Update background colors
<section className="bg-white dark:bg-neutral-900">
```

### 2. Add Resume Download

**Step 1:** Add PDF to `public/` folder
```
public/
  └── resume.pdf
```

**Step 2:** Add button in Hero section
```jsx
<a
  href="/resume.pdf"
  download="YourName-Resume.pdf"
  className="btn-secondary"
>
  <HiDownload />
  Download Resume
</a>
```

### 3. Add Blog Section

**Step 1:** Create blog data
```javascript
// src/data/portfolio.js
export const blogPosts = [
  {
    id: 1,
    title: "Building a Real-Time Chat App",
    excerpt: "How I built a scalable chat application...",
    date: "2024-01-15",
    readTime: "8 min read",
    link: "https://medium.com/@you/article"
  }
];
```

**Step 2:** Create Blog section
```jsx
// src/sections/Blog.jsx
import Section from '../components/Section';
import { blogPosts } from '../data/portfolio';

const Blog = () => {
  return (
    <Section id="blog" className="section-container">
      <h2 className="heading-lg mb-12">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map(post => (
          <a key={post.id} href={post.link} className="card group">
            <h3 className="heading-sm mb-2 group-hover:text-primary-600">
              {post.title}
            </h3>
            <p className="text-neutral-600 text-sm mb-3">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
```

### 4. Add Google Analytics

**File:** `index.html`

```html
<head>
  <!-- ... other tags ... -->
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

### 5. Disable Animations

**File:** `src/index.css`

```css
/* Add at the bottom */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* OR disable entirely */
* {
  animation: none !important;
  transition: none !important;
}
```

---

## 📱 Mobile Customization

### Adjust Mobile Navigation

**File:** `src/components/Navigation.jsx`

**Increase touch target size:**
```jsx
<button
  className="md:hidden p-4"  // Larger touch area
>
  {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
</button>
```

### Mobile Typography

**File:** `tailwind.config.js`

```javascript
fontSize: {
  // Responsive by default
  'display-xl': ['2.5rem', { lineHeight: '1.1' }],  // Mobile
  
  // Then use md: modifier in JSX
  // className="text-display-xl md:text-[4.5rem]"
}
```

---

## 🎯 SEO Optimization

### Update Meta Tags

**File:** `index.html`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Your Name - Software Engineer Portfolio</title>
  <meta name="title" content="Your Name - Software Engineer Portfolio">
  <meta name="description" content="Full-stack developer specializing in React, Node.js, and cloud architecture. View my projects and experience.">
  <meta name="keywords" content="software engineer, full stack developer, react, node.js, portfolio">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourwebsite.com/">
  <meta property="og:title" content="Your Name - Software Engineer">
  <meta property="og:description" content="Full-stack developer specializing in React and Node.js">
  <meta property="og:image" content="https://yourwebsite.com/og-image.png">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourwebsite.com/">
  <meta property="twitter:title" content="Your Name - Software Engineer">
  <meta property="twitter:description" content="Full-stack developer specializing in React and Node.js">
  <meta property="twitter:image" content="https://yourwebsite.com/og-image.png">
</head>
```

---

## 💡 Pro Tips

1. **Test Changes Locally First**
   ```bash
   npm run dev
   ```

2. **Use Git Branches for Experiments**
   ```bash
   git checkout -b experiment-dark-mode
   # Make changes
   # Test
   git checkout main  # Switch back if not satisfied
   ```

3. **Keep a Changelog**
   - Document what you change and why
   - Helpful for reverting if needed

4. **A/B Test with Friends**
   - Get feedback before making permanent changes
   - What looks good to you might confuse others

5. **Update Regularly**
   - Add new projects every month
   - Keep experience current
   - Refresh screenshots if project UI changes

---

**Remember:** The best portfolio is one that authentically represents your work and skills. Don't over-customize at the expense of content quality.
