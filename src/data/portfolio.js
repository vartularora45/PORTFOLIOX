// ===============================
// PERSONAL INFO
// ===============================
export const personalInfo = {
  name: "Vartul Arora",
  role: "Full Stack Developer | MERN Stack",
  tagline: "Building scalable backend services & real-world web applications",
  email: "vartul.arora_cs23@gla.ac.in", // Updated from resume [cite: 2]
  location: "Kosi Kalan, Mathura, India", // Updated from resume [cite: 2]
  availability: "Open to internships & opportunities",
  links: {
    github: "https://github.com/vartul",
    linkedin: "https://linkedin.com/in/vartul", 
    twitter: null,
  },
};

// ===============================
// ABOUT
// ===============================
export const about = {
  title: "About Me",
  content: [
    "I'm a Computer Science student at GLA University (Class of 2027) with a strong foundation in the MERN stack and software engineering. I have hands-on experience building RESTful APIs and optimizing database queries.",
    "My expertise lies in Backend Development, specifically working with Node.js, Express.js, and MongoDB to create secure, scalable architectures.",
    "Beyond development, I am an active competitive programmer with 400+ DSA problems solved and a finalist in national-level hackathons like Code X 2.0."
  ],
};

// ===============================
// SKILLS
// ===============================
export const skills = {
  title: "Skills",
  categories: [
    {
      name: "Languages",
      items: ["Java", "Python", "JavaScript", "SQL"], // [cite: 10]
    },
    {
      name: "Frontend",
      items: ["React.js", "HTML", "CSS", "Tailwind CSS"], // [cite: 11]
    },
    {
      name: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Pagination"], // [cite: 12, 16]
    },
    {
      name: "Database",
      items: ["MongoDB", "Indexing", "Schema Design", "PostgreSQL"], // [cite: 13]
    },
    {
      name: "Tools & Core",
      items: ["Git & GitHub", "Postman", "VS Code", "DSA", "OOP", "DBMS"], // [cite: 17, 18]
    },
  ],
};

// ===============================
// PROJECTS
// ===============================
export const projects = [
  {
    id: 1,
    title: "Tiffin Tales",
    description: "Full-stack food delivery web application",
    problem: "Need for a streamlined homemade food delivery system with secure payments",
    solution: "Developed a MERN app with Stripe integration, order lifecycle APIs, and admin dashboard",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"], // [cite: 28, 29]
    highlights: [
      "Implemented Stripe payment gateway & JWT session handling", // [cite: 31]
      "Designed admin APIs with pagination & filtering", // [cite: 32]
      "Managed user auth & cart management systems", // [cite: 30]
    ],
    github: "https://github.com/vartul/tiffin-tales", // Placeholder
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "AyurSutra",
    description: "AI-Powered Ayurvedic Healthcare Platform",
    problem: "Lack of digital integration in traditional Ayurvedic treatment workflows",
    solution: "Built a platform for patient management with AI-based health insights",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI API"], // [cite: 33, 34]
    highlights: [
      "Integrated AI-based health insights & recommendations", // [cite: 36]
      "Implemented Role-Based Access Control (RBAC)", // [cite: 38]
      "Optimized backend for scalable patient data handling", // [cite: 37]
    ],
    github: "https://github.com/vartul/ayursutra", // Placeholder
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: "Employee Management System", // Kept from original code as a filler, matches MERN skill
    description: "Web-based EMS for managing employees",
    problem: "Manual employee record handling is inefficient and error-prone",
    solution: "Built a full CRUD-based dashboard with role-based access control",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Admin dashboard with CRUD operations",
      "Role-based authentication",
      "Scalable backend structure",
    ],
    github: "https://github.com/vartul/ems-portal",
    live: null,
    featured: false,
  },
];

// ===============================
// EXPERIENCE
// ===============================
export const experience = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Development Intern",
    organization: "W3Grads & GLA University",
    location: "Mathura, India",
    date: "Jun 2025 - Jul 2025", // [cite: 22]
    description: "Worked on designing and developing RESTful APIs and optimizing backend performance.",
    highlights: [
      "Designed RESTful APIs using Node.js & Express (MVC)", // [cite: 23]
      "Implemented JWT authentication with Role-Based Access", // [cite: 24]
      "Optimized MongoDB queries using indexing", // [cite: 25]
    ],
  },
  {
    id: 2,
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "GLA University",
    location: "Mathura, India",
    date: "2023 - 2027", // [cite: 14, 15]
    description: "Pursuing CSE with a focus on Data Structures, Algorithms, and Web Development.",
    highlights: [
      "Consistent academic performer (12th Grade: 78%)", // [cite: 8]
      "Active participant in Hackathons",
      "Specializing in Full Stack Development",
    ],
  },
];

// ===============================
// ACHIEVEMENTS
// ===============================
export const achievements = [
  {
    id: 1,
    title: "Finalist, Code X 2.0",
    organization: "National Hackathon",
    date: "2025",
    description: "Competed in a 36-hour intense coding marathon building real-world solutions", // [cite: 40]
  },
  {
    id: 2,
    title: "Top 10 Team",
    organization: "Smart India Hackathon (Campus Round)",
    date: "2025",
    description: "Selected among top teams for innovative problem solving", // [cite: 41]
  },
  {
    id: 3,
    title: "400+ DSA Problems Solved",
    organization: "LeetCode & GeeksforGeeks",
    date: "Ongoing",
    description: "Strong grasp of Data Structures, Algorithms, and Logic Building", // 
  },
];