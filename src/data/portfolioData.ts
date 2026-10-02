import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Sahil',
    surname: 'SAMEER',
    monogram: 'ss.',
    email: 'sahilsameer.dev18@gmail.com',
    location: 'DELHI, INDIA / BACKEND & SYSTEMS',
    role: 'Backend-Focused Full Stack Developer',
    subrole: 'NODE.JS / POSTGRESQL / MONGODB / REACT / AI',
    heroHeadline: 'Engineering scalable systems.',
    heroItalic: 'Built for performance.',
    heroBio: 'Backend-focused full stack developer architecting resilient server-side architectures, high-QPS APIs, optimized databases, and AI-driven platforms.',
    availability: 'OPEN TO OPPORTUNITIES',
    asideCopy: 'From database schema modeling to production-grade interfaces.',
    aboutHeadline: 'Architecture first.',
    aboutItalic: 'Driven by precision.',
    aboutParagraphs: [
        "I'm Sahil Sameer Siddique, a full-stack software engineer specializing in backend architecture, database indexing, and high-performance API design.",
        'My core focus centers on architecting resilient microservices, achieving sub-40ms database query times via compound indexing, implementing replay-proof dual-token authentication, and building deterministic GenAI pipelines with Zod schema validation.',
        'While my passion lies in backend systems and database engineering, I pair this structural rigor with modern, highly responsive React and Next.js interfaces to deliver complete, production-grade web applications.'
      ],
    resumePdf: '/assets/sameer-resume.pdf',
    portraitPhoto: '/assets/sahil-outdoor.webp',
    outdoorPhoto: '/assets/sahil-portrait.jpg'
  },
  projects: [
    {
      id: 'prepstack',
      number: '01',
      kicker: '01 / SDE INTERVIEW ECOSYSTEM',
      badge: 'React 19 · Express 5 · Gemini AI',
      title: 'PrepStack — SDE Interview Ecosystem',
      subtitle: 'Centralized DSA tracking & AI project blueprint generator',
      description: 'A full-stack interview preparation ecosystem unifying Gemini AI project generation, asynchronous DSA progress tracking across industry sheets, and sub-40ms single-roundtrip dashboard aggregation.',
      image: '/assets/prepstack.png',
      imageAlt: 'PrepStack SDE Interview Ecosystem dashboard preview',
      tags: ['React 19', 'Express 5', 'MongoDB', 'Zod', 'Gemini AI', 'JWT'],
      wide: true,
      link: 'https://prepstack-ss.vercel.app/',
      github: 'https://github.com/SahilSameer18/prepstack'
    },
    {
      id: 'skillbridge-ai',
      number: '02',
      kicker: '02 / AI CAREER & RESUME ANALYZER',
      badge: 'PostgreSQL · Neon · Prisma · Redis',
      title: 'SkillBridge AI — Career Diagnostic Engine',
      subtitle: 'Deterministic skill gap resolution & readiness scoring',
      description: 'Transforms resumes and job descriptions into structured AI readiness reports with word-boundary regex skill gap resolution, Redis fail-open caching, and compound-indexed PostgreSQL queries.',
      image: '/assets/skillbridgeAI.png',
      imageAlt: 'SkillBridge AI Career Diagnostic Engine preview',
      tags: ['PostgreSQL', 'Neon', 'Prisma ORM', 'Redis Cloud', 'Gemini AI', 'Express 5'],
      link: 'https://skillbridgeai-s.vercel.app/',
      github: 'https://github.com/SahilSameer18/skillbridgeAI'
    },
    {
      id: 'safar-ai',
      number: '03',
      kicker: '03 / APPLIED AI & SCHEDULING',
      badge: 'Firebase · Gemini API · React',
      title: 'SafarAI — Context-Aware Travel Planner',
      subtitle: 'AI-powered personalized day-by-day travel itinerary scheduler',
      description: 'A context-aware day-by-day travel itinerary scheduler adjusting to user budget, timing constraints, and regional interests with schema-enforced Gemini JSON outputs and Firestore sync.',
      image: '/assets/safar.png',
      imageAlt: 'SafarAI Travel Planner application preview',
      tags: ['React', 'Node.js', 'Firebase', 'Gemini API', 'Tailwind CSS'],
      link: 'https://www.safarai.in/',
      github: 'https://github.com/SahilSameer18'
    }
  ],
  skills: [
    {
      number: '01',
      title: 'Backend & Systems Architecture',
      content: 'Node.js · Express 5 · PostgreSQL (Neon) · MongoDB (Mongoose) · Prisma ORM · Redis Cloud · REST APIs · Dual-Token Auth · Zod Validation · WebSockets (Socket.IO)'
    },
    {
      number: '02',
      title: 'Frontend & User Interfaces',
      content: 'React 19 · Next.js · TypeScript · JavaScript (ES6+) · Tailwind CSS · HTML5 & CSS3 · GSAP Motion · Responsive Mobile-First Design · State Management'
    },
    {
      number: '03',
      title: 'AI Integration & DevOps',
      content: 'Gemini AI SDK · Hugging Face · Docker · Git & GitHub · Postman · Vercel · Render · Linux Shell · Performance Monitoring & Caching Strategies'
    }
  ],
  experience: [
    {
      meta: 'DEGREE · 2021 – 2025',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'International Institute of Technology and Management, Sonipat',
      description: 'Comprehensive education in Data Structures & Algorithms, Relational & NoSQL Database Management, Operating Systems, and Distributed Web Engineering.'
    },
    {
      meta: 'FULL-STACK SYSTEMS',
      title: 'Architecting Production Platforms',
      organization: 'PrepStack & SkillBridge AI',
      description: 'Engineered complete production web platforms with sub-40ms aggregated response times, deterministic Zod-enforced GenAI pipelines, and fail-open Redis caching.'
    },
    {
      meta: 'SYSTEMS & SECURITY',
      title: 'High-QPS APIs & Database Engineering',
      organization: 'Zero-Collscan Queries & Token Rotation',
      description: 'Designed compound-indexed schemas, replay attack defense with refresh token rotation, structured Zod validation middleware, and cache-aside patterns.'
    },
    {
      meta: 'FOUNDATIONS · 2018 – 2020',
      title: 'Senior Secondary (Class XII - Science)',
      organization: 'Dr Zakir Hussain High School, Patna',
      description: 'Rigorous foundation in Mathematics, Physics, and Chemistry, cultivating strong analytical and algorithmic problem-solving capabilities.'
    }
  ]
};
