import { PortfolioData } from '../types/portfolio';
import heroPhoto from '../../public/assets/sahil-hero.webp';
import aboutPhoto from '../../public/assets/sahil-about.png';
import prepstackImage from '../../public/assets/prepstack.png';
import inforgeImage from '../../public/assets/inforge.png';
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
    heroHeadline: 'Backend-first full-stack developer.',
    heroItalic: 'APIs, data, and AI that behave.',
    heroBio: 'Full-stack developer who likes the backend best. I build APIs, databases and background jobs, and I add AI features carefully, with validation and a human in the loop.',
    availability: 'OPEN TO OPPORTUNITIES',
    asideCopy: 'From database schema to finished interface.',
    aboutHeadline: 'Architecture first.',
    aboutItalic: 'Driven by precision.',
    aboutParagraphs: [
      "I'm Sahil Sameer Siddique, a full-stack developer who likes the backend best: APIs, databases, sign-in and security, and the background work that keeps an app dependable.",
      "I like projects where the engineering behind the interface matters: secure authentication, uploads that don't overload the server, job queues for background work, and AI features that are checked before they touch real data.",
      "I also build the React interface, because a fast API only helps if the product around it feels good. I graduated in 2025 with a B.Tech in Computer Science, I'm based in Delhi, and I'm looking for backend or full-stack roles."
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
      title: 'PrepStack',
      subtitle: 'Centralized DSA tracking & AI project blueprint generator',
      problem: 'Interview prep is scattered across DSA sheets, CS notes, behavioural tips and generic AI project ideas.',
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
      id: 'inforge',
      number: '02',
      kicker: '02 / GMAIL SAFETY & AUTOMATION',
      badge: 'Node.js · BullMQ · PostgreSQL · Gemini',
      title: 'InForge',
      subtitle: 'Gmail triage where the AI only suggests and fixed rules decide',
      problem: "AI can't be trusted to change a real mailbox.",
      description: "InForge lets Gemini suggest actions while a rule engine decides what is allowed: bank, security and legal mail is never touched, nothing is deleted or sent, and every change can be undone. Built with background job queues, live Gmail push updates and encrypted tokens.",
      image: inforgeImage,
      imageAlt: 'InForge landing page: The AI proposes. The Safety Engine disposes.',
      metrics: [
        { value: '41', label: 'automated test suites covering safety rules, queues and security' },
        { value: '~16s', label: 'from a new email to showing in the app (live push test)' }
      ],
      tags: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis + BullMQ', 'Gemini AI', 'Gmail API'],
      link: 'https://inforge-s.vercel.app/',
      note: 'Code available on request. The first load can take about 30 seconds while the server wakes up.'
    },
    {
      id: 'vaultdrive',
      number: '03',
      kicker: '03 / CLOUD STORAGE & SECURITY',
      badge: 'React · Node.js · PostgreSQL · Cloudinary',
      title: 'VaultDrive',
      subtitle: 'Direct-to-cloud uploads, nested folders and secure file sharing',
      problem: 'Storing and sharing files securely, without the server handling large uploads or exposing raw storage links.',
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
    { number: '01', title: 'Languages', items: ['JavaScript', 'TypeScript', 'C++'] },
    {
      number: '02',
      title: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'REST APIs', 'Zod validation', 'Rate limiting']
    },
    {
      number: '03',
      title: 'Databases & Caching',
      items: ['PostgreSQL (Neon)', 'MongoDB', 'Prisma ORM', 'Redis', 'Schema design & indexing']
    },
    {
      number: '04',
      title: 'Auth & Security',
      items: ['JWT refresh-token rotation', 'Google OAuth 2.0', 'HTTP-only cookies', 'AES-256-GCM encryption']
    },
    { number: '05', title: 'Queues & Real-time', items: ['BullMQ', 'Socket.IO', 'Google Pub/Sub'] },
    { number: '06', title: 'AI Features', items: ['Gemini API', 'Structured output', 'Zod-validated responses'] },
    { number: '07', title: 'Frontend', items: ['React.js', 'Tailwind CSS', 'HTML', 'CSS'] },
    {
      number: '08',
      title: 'Tools & Deployment',
      items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Cloudinary']
    }
  ],
  strengths: [
    { number: '01', label: 'Database Design', detail: 'Indexes, migrations and safe cascading deletes' },
    { number: '02', label: 'Reliable APIs', detail: 'Validation, rate limiting and clear errors' },
    { number: '03', label: 'Auth & Security', detail: 'Rotating refresh tokens and Google sign-in' },
    { number: '04', label: 'AI Features', detail: 'Structured, validated AI responses' }
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
