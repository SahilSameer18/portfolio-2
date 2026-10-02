import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Sahil',
    surname: 'SAMEER',
    monogram: 'ss.',
    email: 'sahilsameer.dev18@gmail.com',
    location: {
      de: 'DELHI, INDIEN / BACKEND & SYSTEME',
      en: 'DELHI, INDIA / BACKEND & SYSTEMS'
    },
    role: {
      de: 'Backend-fokussierter Full-Stack-Entwickler',
      en: 'Backend-Focused Full Stack Developer'
    },
    subrole: {
      de: 'NODE.JS / POSTGRESQL / MONGODB / REACT / AI',
      en: 'NODE.JS / POSTGRESQL / MONGODB / REACT / AI'
    },
    heroHeadline: {
      de: 'Skalierbare Systeme bauen.',
      en: 'Engineering scalable systems.'
    },
    heroItalic: {
      de: 'Für maximale Performance.',
      en: 'Built for performance.'
    },
    heroBio: {
      de: 'Backend-fokussierter Full-Stack-Entwickler mit Leidenschaft für skalierbare Serverarchitektur, High-QPS-APIs, Datenbankoptimierung und GenAI-Pipelines.',
      en: 'Backend-focused full stack developer architecting resilient server-side architectures, high-QPS APIs, optimized databases, and AI-driven platforms.'
    },
    availability: {
      de: 'OFFEN FÜR PROJEKTE & POSITIONEN',
      en: 'OPEN TO OPPORTUNITIES'
    },
    asideCopy: {
      de: 'Vom relationalen Datenbankschema bis zum responsiven Frontend.',
      en: 'From database schema modeling to production-grade interfaces.'
    },
    aboutHeadline: {
      de: 'Architektur im Fokus.',
      en: 'Architecture first.'
    },
    aboutItalic: {
      de: 'Präzise bis ins Detail.',
      en: 'Driven by precision.'
    },
    aboutParagraphs: {
      de: [
        'Ich bin Sahil Sameer Siddique, ein Full-Stack-Entwickler mit starkem Fokus auf Backend-Engineering, relationale Datenbanken und performante API-Architekturen.',
        'Mein Schwerpunkt liegt auf der Entwicklung robuster REST-Microservices, sub-40ms Datenbankabfragen via Compound Indexing, Replay-sicheren JWT-Dual-Token-Systemen und typsicheren GenAI-Pipelines mit Zod.',
        'Während mein Herz für verteilte Backend-Systeme und Datenbankoptimierung schlägt, verbinde ich diese Zuverlässigkeit mit schnellen, hochgradig reaktiven React- und Next.js-Oberflächen für ein nahtloses Nutzererlebnis.'
      ],
      en: [
        "I'm Sahil Sameer Siddique, a full-stack software engineer specializing in backend architecture, database indexing, and high-performance API design.",
        'My core focus centers on architecting resilient microservices, achieving sub-40ms database query times via compound indexing, implementing replay-proof dual-token authentication, and building deterministic GenAI pipelines with Zod schema validation.',
        'While my passion lies in backend systems and database engineering, I pair this structural rigor with modern, highly responsive React and Next.js interfaces to deliver complete, production-grade web applications.'
      ]
    },
    resumePdf: '/assets/sameer-resume.pdf',
    portraitPhoto: '/assets/sahil-portrait.jpg',
    outdoorPhoto: '/assets/sahil-portrait.jpg'
  },
  projects: [
    {
      id: 'prepstack',
      number: '01',
      kicker: {
        de: '01 / INTERVIEW-ÖKOSYSTEM & GENAI',
        en: '01 / SDE INTERVIEW ECOSYSTEM'
      },
      badge: {
        de: 'React 19 · Express 5 · Gemini AI',
        en: 'React 19 · Express 5 · Gemini AI'
      },
      title: {
        de: 'PrepStack — SDE Vorbereitungs-Plattform',
        en: 'PrepStack — SDE Interview Ecosystem'
      },
      subtitle: {
        de: 'Zentrales DSA-Tracking & KI-Projektgenerator',
        en: 'Centralized DSA tracking & AI project blueprint generator'
      },
      description: {
        de: 'Eine Full-Stack-Plattform zur Software-Interview-Vorbereitung. Vereint Gemini-gestützte Projektgenerierung mit Zod-Schemas, asynchrones DSA-Tracking über kuratierte Sheets und Single-Roundtrip-Dashboard-Aggregation unter 40ms.',
        en: 'A full-stack interview preparation ecosystem unifying Gemini AI project generation, asynchronous DSA progress tracking across industry sheets, and sub-40ms single-roundtrip dashboard aggregation.'
      },
      image: '/assets/prepstack.png',
      imageAlt: {
        de: 'PrepStack Webanwendung Vorschau',
        en: 'PrepStack SDE Interview Ecosystem dashboard preview'
      },
      tags: {
        de: ['React 19', 'Express 5', 'MongoDB', 'Zod', 'Gemini AI', 'JWT'],
        en: ['React 19', 'Express 5', 'MongoDB', 'Zod', 'Gemini AI', 'JWT']
      },
      wide: true,
      link: 'https://prepstack-ss.vercel.app/',
      github: 'https://github.com/SahilSameer18/prepstack'
    },
    {
      id: 'skillbridge-ai',
      number: '02',
      kicker: {
        de: '02 / KI-KARRIERE- & LEBENSLAUF-ANALYSE',
        en: '02 / AI CAREER & RESUME ANALYZER'
      },
      badge: {
        de: 'PostgreSQL · Neon · Prisma · Redis',
        en: 'PostgreSQL · Neon · Prisma · Redis'
      },
      title: {
        de: 'SkillBridge AI — Diagnose-Engine',
        en: 'SkillBridge AI — Career Diagnostic Engine'
      },
      subtitle: {
        de: 'Deterministische Skill-Gap-Erkennung & Scoring',
        en: 'Deterministic skill gap resolution & readiness scoring'
      },
      description: {
        de: 'Verwandelt Lebensläufe und Jobbeschreibungen in strukturierte KI-Bereitschaftsberichte. Mit Word-Boundary-Regex gegen False Positives, Redis-Cloud-Fail-Open-Caching und Compound-Index-Optimierung auf PostgreSQL.',
        en: 'Transforms resumes and job descriptions into structured AI readiness reports with word-boundary regex skill gap resolution, Redis fail-open caching, and compound-indexed PostgreSQL queries.'
      },
      image: '/assets/skillbridgeAI.png',
      imageAlt: {
        de: 'SkillBridge AI Analysebericht Vorschau',
        en: 'SkillBridge AI Career Diagnostic Engine preview'
      },
      tags: {
        de: ['PostgreSQL', 'Neon', 'Prisma ORM', 'Redis Cloud', 'Gemini AI', 'Express 5'],
        en: ['PostgreSQL', 'Neon', 'Prisma ORM', 'Redis Cloud', 'Gemini AI', 'Express 5']
      },
      link: 'https://skillbridgeai-s.vercel.app/',
      github: 'https://github.com/SahilSameer18/skillbridgeAI'
    },
    {
      id: 'safar-ai',
      number: '03',
      kicker: {
        de: '03 / ANGEWANDTE KI & REISEPLANUNG',
        en: '03 / APPLIED AI & SCHEDULING'
      },
      badge: {
        de: 'Firebase · Gemini API · React',
        en: 'Firebase · Gemini API · React'
      },
      title: {
        de: 'SafarAI — Kontextbasierter Reiseplaner',
        en: 'SafarAI — Context-Aware Travel Planner'
      },
      subtitle: {
        de: 'KI-gestützte Tagesrouten nach Budget & Vorlieben',
        en: 'AI-powered personalized day-by-day travel itinerary scheduler'
      },
      description: {
        de: 'Ein intelligenter Routenplaner, der Reiseziele, Budgets und Zeitpläne in minutenschnelle, praxiserprobte Reisepläne verwandelt. Mit strukturierter Schema-Generierung und Firestore-Cloud-Synchronisierung.',
        en: 'A context-aware day-by-day travel itinerary scheduler adjusting to user budget, timing constraints, and regional interests with schema-enforced Gemini JSON outputs and Firestore sync.'
      },
      image: '/assets/safar.png',
      imageAlt: {
        de: 'SafarAI Reiseplaner Vorschau',
        en: 'SafarAI Travel Planner application preview'
      },
      tags: {
        de: ['React', 'Node.js', 'Firebase', 'Gemini API', 'Tailwind CSS'],
        en: ['React', 'Node.js', 'Firebase', 'Gemini API', 'Tailwind CSS']
      },
      link: 'https://www.safarai.in/',
      github: 'https://github.com/SahilSameer18'
    }
  ],
  skills: [
    {
      number: '01',
      title: {
        de: 'Backend & Systemarchitektur',
        en: 'Backend & Systems Architecture'
      },
      content: {
        de: 'Node.js · Express 5 · PostgreSQL (Neon) · MongoDB (Mongoose) · Prisma ORM · Redis Cloud · REST APIs · JWT Auth & Token Rotation · Zod Validation · WebSockets (Socket.IO)',
        en: 'Node.js · Express 5 · PostgreSQL (Neon) · MongoDB (Mongoose) · Prisma ORM · Redis Cloud · REST APIs · Dual-Token Auth · Zod Validation · WebSockets (Socket.IO)'
      }
    },
    {
      number: '02',
      title: {
        de: 'Frontend & UI-Entwicklung',
        en: 'Frontend & User Interfaces'
      },
      content: {
        de: 'React 19 · Next.js · TypeScript · JavaScript (ES6+) · Tailwind CSS · HTML5 & Modern CSS · GSAP Animations · Responsive & Mobile-First Design · State Management',
        en: 'React 19 · Next.js · TypeScript · JavaScript (ES6+) · Tailwind CSS · HTML5 & CSS3 · GSAP Motion · Responsive Mobile-First Design · State Management'
      }
    },
    {
      number: '03',
      title: {
        de: 'KI-Integration & DevOps-Werkzeuge',
        en: 'AI Integration & DevOps'
      },
      content: {
        de: 'Gemini AI SDK · Hugging Face · Docker · Git & GitHub · Postman · Vercel · Render · Linux Shell · Performance-Monitoring & Caching-Strategien',
        en: 'Gemini AI SDK · Hugging Face · Docker · Git & GitHub · Postman · Vercel · Render · Linux Shell · Performance Monitoring & Caching Strategies'
      }
    }
  ],
  experience: [
    {
      meta: {
        de: 'STUDIUM · 2021 – 2025',
        en: 'DEGREE · 2021 – 2025'
      },
      title: {
        de: 'B.Tech in Computer Science & Engineering',
        en: 'B.Tech in Computer Science & Engineering'
      },
      organization: {
        de: 'International Institute of Technology and Management, Sonipat',
        en: 'International Institute of Technology and Management, Sonipat'
      },
      description: {
        de: 'Fundierte Ausbildung in Datenstrukturen & Algorithmen, relationalen & NoSQL-Datenbanksystemen, Betriebssystemen und modernen verteilten Webanwendungen.',
        en: 'Comprehensive education in Data Structures & Algorithms, Relational & NoSQL Database Management, Operating Systems, and Distributed Web Engineering.'
      }
    },
    {
      meta: {
        de: 'FULL-STACK-PROJEKTE & ARCHITEKTUR',
        en: 'FULL-STACK SYSTEMS'
      },
      title: {
        de: 'Entwicklung produktionsreifer Plattformen',
        en: 'Architecting Production Platforms'
      },
      organization: {
        de: 'PrepStack & SkillBridge AI',
        en: 'PrepStack & SkillBridge AI'
      },
      description: {
        de: 'Konzeption und Bau von Web-Ökosystemen mit sub-40ms Latenz, deterministischer Zod-Validierung für Gemini-KI, PostgreSQL-Compound-Indexing und ausfallsicherem Redis-Caching.',
        en: 'Engineered complete production web platforms with sub-40ms aggregated response times, deterministic Zod-enforced GenAI pipelines, and fail-open Redis caching.'
      }
    },
    {
      meta: {
        de: 'SYSTEMDESIGN & DATENBANKEN',
        en: 'SYSTEMS & SECURITY'
      },
      title: {
        de: 'High-QPS-APIs & Sicherheitsstandards',
        en: 'High-QPS APIs & Database Engineering'
      },
      organization: {
        de: 'Zero-Collscan Queries & Token-Rotation',
        en: 'Zero-Collscan Queries & Token Rotation'
      },
      description: {
        de: 'Implementierung von 100% index-abgedeckten Datenbankabfragen, Replay-Schutz durch Refresh-Token-Rotation, Zod-Validierungs-Middleware und Cache-Aside-Mustern.',
        en: 'Designed compound-indexed schemas, replay attack defense with refresh token rotation, structured Zod validation middleware, and cache-aside patterns.'
      }
    },
    {
      meta: {
        de: 'SCHULISCHE AUSBILDUNG · 2018 – 2020',
        en: 'FOUNDATIONS · 2018 – 2020'
      },
      title: {
        de: 'Senior Secondary (Class XII - Science)',
        en: 'Senior Secondary (Class XII - Science)'
      },
      organization: {
        de: 'Dr Zakir Hussain High School, Patna',
        en: 'Dr Zakir Hussain High School, Patna'
      },
      description: {
        de: 'Vertiefte Schwerpunkte in Mathematik, Physik und Chemie als mathematische und analytische Grundlage für algorithmische Problemlösungen.',
        en: 'Rigorous foundation in Mathematics, Physics, and Chemistry, cultivating strong analytical and algorithmic problem-solving capabilities.'
      }
    }
  ]
};
