import { PortfolioData } from '../types/portfolio';
import heroPhoto from '../../public/assets/sahil-outdoor.webp';
import aboutPhoto from '../../public/assets/sahil-portrait.jpg';
import prepstackImage from '../../public/assets/prepstack.png';
import skillbridgeImage from '../../public/assets/skillbridgeAI.png';
import vaultdriveImage from '../../public/assets/vaultdrive.png';

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
    heroPhoto,
    aboutPhoto
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
      image: prepstackImage,
      imageAlt: 'PrepStack SDE Interview Ecosystem dashboard preview',
      metrics: [
        { value: '−31%', label: 'initial bundle size via route-based code splitting' },
        { value: '<20s', label: 'AI project ideation, down from hours' }
      ],
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
      image: skillbridgeImage,
      imageAlt: 'SkillBridge AI Career Diagnostic Engine preview',
      tags: ['PostgreSQL', 'Neon', 'Prisma ORM', 'Redis Cloud', 'Gemini AI', 'Express 5'],
      link: 'https://skillbridgeai-s.vercel.app/',
      github: 'https://github.com/SahilSameer18/skillbridgeAI'
    },
    {
      id: 'vaultdrive',
      number: '03',
      kicker: '03 / CLOUD STORAGE & SECURITY',
      badge: 'React · Node.js · PostgreSQL · Cloudinary',
      title: 'VaultDrive — Cloud Asset & Storage Platform',
      subtitle: 'Direct-to-cloud uploads, nested folders and secure file sharing',
      description: 'A cloud storage platform with a zero-memory, direct-to-cloud upload pipeline, nested folder trees with cycle guards, soft-delete trash recovery, and user-to-user or public-link sharing with instant access revocation, secured by JWT token rotation and Google OAuth 2.0.',
      image: vaultdriveImage,
      imageAlt: 'VaultDrive cloud storage workspace preview',
      metrics: [
        { value: '100MB', label: 'files uploaded direct-to-cloud with zero server memory' },
        { value: 'O(1)', label: 'refresh-token lookup through an indexed token ID' }
      ],
      tags: ['React', 'Node.js', 'PostgreSQL (Neon)', 'Prisma ORM', 'Cloudinary', 'JWT', 'Google OAuth 2.0'],
      link: 'https://vaultdrive-s.vercel.app/',
      github: 'https://github.com/SahilSameer18/vaultDrive'
    }
  ],
  skills: [
    { number: '01', title: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'C++'] },
    { number: '02', title: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'] },
    {
      number: '03',
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'Socket.IO', 'Zod', 'REST APIs', 'JWT Auth', 'Google OAuth 2.0']
    },
    { number: '04', title: 'Databases', items: ['MongoDB', 'PostgreSQL (Neon)', 'Redis', 'Prisma ORM'] },
    { number: '05', title: 'AI & APIs', items: ['Gemini API'] },
    { number: '06', title: 'Tools & Deployment', items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Cloudinary'] }
  ],
  strengths: [
    { number: '01', label: 'DB Indexing', detail: 'B-Trees, Poolers & Cascades' },
    { number: '02', label: 'High-QPS APIs', detail: 'Cache-Aside & Sub-50ms REST' },
    { number: '03', label: 'Auth & Security', detail: 'HttpOnly Refresh Token Rotation' },
    { number: '04', label: 'AI Streaming', detail: 'Strict JSON Schema Enforcement' }
  ],
  education: [
    {
      meta: 'DEGREE · 2021 – 2025',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'International Institute of Technology and Management, Sonipat',
      location: 'SONIPAT, HARYANA',
      highlights: ['Data Structures & Algorithms', 'Database Management', 'Full Stack Web Dev'],
      description: 'Comprehensive education in Data Structures & Algorithms, Relational & NoSQL Database Management, Operating Systems, and Distributed Web Engineering.'
    },
    {
      meta: 'FOUNDATIONS · 2018 – 2020',
      title: 'Senior Secondary (Class XII - Science)',
      organization: 'Dr Zakir Hussain High School, Patna',
      location: 'PATNA, BIHAR',
      highlights: ['Physics', 'Chemistry', 'Mathematics'],
      description: 'Rigorous foundation in Mathematics, Physics, and Chemistry, cultivating strong analytical and algorithmic problem-solving capabilities.'
    }
  ]
};
