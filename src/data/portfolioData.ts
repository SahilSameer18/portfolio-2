import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Anurag',
    surname: 'MAURYA',
    monogram: 'am.',
    email: 'anuragmaurya51489@gmail.com',
    location: {
      de: 'HAMBURG, DEUTSCHLAND / DESIGN & HANDWERK',
      en: 'HAMBURG, GERMANY / DESIGN & CRAFT'
    },
    role: {
      de: 'Gestalter für Print- und Digitalmedien',
      en: 'Print & Digital Media Designer'
    },
    subrole: {
      de: 'MARKENIDENTITÄT / EDITORIAL / TYPOGRAFIE',
      en: 'BRAND IDENTITY / EDITORIAL / TYPOGRAPHY'
    },
    heroHeadline: {
      de: 'Geschichten durch Gestaltung.',
      en: 'Stories told through design.'
    },
    heroItalic: {
      de: 'Mit Absicht gestaltet.',
      en: 'Formed with intent.'
    },
    heroBio: {
      de: 'Ich gestalte Print- und Digitalmedien und beschäftige mich mit Typografie, Markenidentität und Editorial Design.',
      en: 'Crafting print and digital experiences with an editorial focus on typography, brand identity, and visual systems.'
    },
    availability: {
      de: 'OFFEN FÜR NEUE PROJEKTE',
      en: 'AVAILABLE FOR NEW WORK'
    },
    asideCopy: {
      de: 'Von der ersten Skizze bis zur gedruckten Seite.',
      en: 'From the initial sketch to the printed page.'
    },
    aboutHeadline: {
      de: 'Ein Auge für Gestaltung.',
      en: 'An eye for composition.'
    },
    aboutItalic: {
      de: 'Ein Sinn für das Wesentliche.',
      en: 'A focus on what matters.'
    },
    aboutParagraphs: {
      de: [
        'Ich bin Anurag und mache eine Ausbildung im Bereich Print- und Digitalmediendesign an der Macromedia Hamburg.',
        'Meine Arbeit beginnt bei den Grundlagen: typografische Hierarchie, Proportionen und Rastersysteme. Diese Prinzipien übertrage ich auf Markenidentitäten, Editorial-Layouts und digitale Medien.',
        'Der direkte Austausch mit Menschen prägt meine Gestaltung. Ich schätze Klarheit, handwerkliche Sorgfalt und bewusste Einfachheit — für visuelle Geschichten, die leicht zu verstehen sind.'
      ],
      en: [
        "I'm Anurag, currently completing my apprenticeship in Print & Digital Media Design at Macromedia Hamburg.",
        'My work starts with fundamentals: typographic hierarchy, proportional balance, and modular grid systems. I translate these principles across brand identities, editorial spreads, and digital media.',
        'Direct dialogue with collaborators shapes everything I design. I value clarity, precision, and restrained simplicity — making visual stories that are intuitive and impactful.'
      ]
    },
    resumePdf: '/assets/anurag-maurya-resume.pdf',
    portraitPhoto: '/assets/anurag-portrait.jpg',
    outdoorPhoto: '/assets/anurag-outdoors.jpg'
  },
  projects: [
    {
      id: 'hmc-media',
      number: '01',
      kicker: {
        de: '01 / HAMBURG MESSE + CONGRESS / MEDIEN',
        en: '01 / HAMBURG MESSE + CONGRESS / MEDIA'
      },
      badge: {
        de: 'Portfolio-Studie',
        en: 'Portfolio study'
      },
      title: {
        de: 'Hamburg Messe + Congress — Medienkonzepte',
        en: 'Hamburg Messe + Congress — Media Concepts'
      },
      subtitle: {
        de: 'Visuelle Recherche für Medien und Events',
        en: 'Visual research for media and live events'
      },
      description: {
        de: 'Eine visuelle Recherchetafel, die Print, Social Media, Eventidentität und neue Technologien für Hamburg Messe + Congress zusammenführt.',
        en: 'A curated visual research board bridging print collateral, social media touchpoints, event branding, and emerging technologies for Hamburg Messe + Congress.'
      },
      image: '/assets/hmc-media-board.png',
      imageAlt: {
        de: 'Collage aus Print, digitalen Medien, Technologie und Motiven von Hamburg Messe + Congress',
        en: 'Collage of print, digital media, technology, and branding motifs for Hamburg Messe + Congress'
      },
      tags: {
        de: ['Visuelle Recherche', 'Eventmedien', 'Moodboard'],
        en: ['Visual Research', 'Event Media', 'Moodboard']
      },
      wide: true
    },
    {
      id: 'hmc-design',
      number: '02',
      kicker: {
        de: '02 / HAMBURG MESSE + CONGRESS / GESTALTUNG',
        en: '02 / HAMBURG MESSE + CONGRESS / DESIGN'
      },
      badge: {
        de: 'Portfolio-Studie',
        en: 'Portfolio study'
      },
      title: {
        de: 'Hamburg Messe + Congress — Gestaltungskonzepte',
        en: 'Hamburg Messe + Congress — Design Concepts'
      },
      subtitle: {
        de: 'Recherche zu Design und Kommunikation',
        en: 'Design systems and communication research'
      },
      description: {
        de: 'Eine zweite Erkundung von Gestaltungs- und Kommunikationsrichtungen, die Grafikdesign, digitale Oberflächen und Social-Media-Referenzen verbindet.',
        en: 'An in-depth study of visual identity directions, harmonizing print layout, responsive digital surfaces, and social campaigns.'
      },
      image: '/assets/hmc-design-board.png',
      imageAlt: {
        de: 'Collage zu Gestaltungsprozess, Social Media und Markenbild von Hamburg Messe + Congress',
        en: 'Collage exploring design process, social media, and brand presentation'
      },
      tags: {
        de: ['Visuelle Recherche', 'Digitales Design', 'Moodboard'],
        en: ['Visual Research', 'Digital Design', 'Moodboard']
      }
    },
    {
      id: 'lumiere',
      number: '03',
      kicker: {
        de: '03 / GASTRONOMIE / WEBKONZEPT',
        en: '03 / HOSPITALITY / WEB CONCEPT'
      },
      badge: {
        de: 'Portfolio-Studie',
        en: 'Portfolio study'
      },
      title: {
        de: 'Lumiere — Restaurant-Website',
        en: 'Lumiere — Restaurant Website'
      },
      subtitle: {
        de: 'Konzept für eine Restaurant-Startseite',
        en: 'Atmospheric landing page for fine dining'
      },
      description: {
        de: 'Ein Konzept für eine Restaurant-Startseite mit atmosphärischer Fotografie, eleganter Serifentypografie und klaren Wegen zur Speisekarte und Reservierung.',
        en: 'A digital experience pairing moody dining-room photography with refined serif typography and intuitive booking flows.'
      },
      image: '/assets/lumiere-website.jpg',
      imageAlt: {
        de: 'Lumiere-Restaurantseite mit dunkler Fotografie des Gastraums und eleganter Überschrift',
        en: 'Lumiere restaurant homepage with atmospheric interior photography and serif headline'
      },
      tags: {
        de: ['Webdesign', 'Art Direction', 'Typografie'],
        en: ['Web Design', 'Art Direction', 'Typography']
      }
    },
    {
      id: 'cafe-farol',
      number: '04',
      kicker: {
        de: '04 / GASTRONOMIE / WEBKONZEPT',
        en: '04 / HOSPITALITY / WEB CONCEPT'
      },
      badge: {
        de: 'Portfolio-Studie',
        en: 'Portfolio study'
      },
      title: {
        de: 'Café Farol — Website',
        en: 'Café Farol — Website'
      },
      subtitle: {
        de: 'Konzept für eine Café-Startseite',
        en: 'Warm editorial concept for an artisan coffee bar'
      },
      description: {
        de: 'Ein Konzept für eine Café-Startseite mit warmer Innenraumfotografie, prägnanter Editorial-Typografie und einer einladenden Einführung.',
        en: 'A warm, welcoming café homepage combining cozy natural light photography with bespoke typographic framing.'
      },
      image: '/assets/cafe-farol-website.jpg',
      imageAlt: {
        de: 'Café-Farol-Startseite mit Innenraumfotografie, großer Überschrift und Navigation',
        en: 'Café Farol homepage layout with warm café interior photography'
      },
      tags: {
        de: ['Webdesign', 'Art Direction', 'Typografie'],
        en: ['Web Design', 'Art Direction', 'Typography']
      }
    },
    {
      id: 'medientage',
      number: '05',
      kicker: {
        de: '05 / EDITORIAL / PRINT',
        en: '05 / EDITORIAL / PRINT'
      },
      badge: {
        de: 'Studienkonzept · Macromedia · 2026',
        en: 'Academic Concept · Macromedia · 2026'
      },
      title: {
        de: 'Medientage Hamburg 2026',
        en: 'Medientage Hamburg 2026'
      },
      subtitle: {
        de: 'Publikations- und Veranstaltungskonzept',
        en: 'Publication and media convention identity'
      },
      description: {
        de: 'Ein Konzept für Veranstaltungsidentität und Editorial-Publikation zu den Hamburger Medientagen. Im Mittelpunkt stehen modulare Raster und kontrastreiche Typografie.',
        en: 'A comprehensive brand identity and editorial publication concept for Hamburg Media Days, rooted in high-contrast Swiss-style grid systems.'
      },
      image: '/assets/anurag-medientage.png',
      imageAlt: {
        de: 'Gestaltungsstudie zu Medientage Hamburg 2026 von Anurag Maurya',
        en: 'Design study for Medientage Hamburg 2026 by Anurag Maurya'
      },
      tags: {
        de: ['Adobe InDesign', 'Editorial-Layout', 'Typografie'],
        en: ['Adobe InDesign', 'Editorial Layout', 'Typography']
      }
    },
    {
      id: 'safarai-logo',
      number: '06',
      kicker: {
        de: '06 / MARKENIDENTITÄT',
        en: '06 / BRAND IDENTITY'
      },
      badge: {
        de: 'Eigenständige Studie · Macromedia · 2026',
        en: 'Independent Study · Macromedia · 2026'
      },
      title: {
        de: 'Safarai — Bildmarke',
        en: 'Safarai — Logomark'
      },
      subtitle: {
        de: 'Vektorzeichen und Identitätsstudie',
        en: 'Geometric vector mark and symbol system'
      },
      description: {
        de: 'Eine geometrische Bildmarke, die organische Bewegung, präzise Kurven und zeitgemäßen Minimalismus verbindet.',
        en: 'A geometric logomark uniting fluid organic curves, mathematical precision, and contemporary editorial minimalism.'
      },
      image: '/assets/anurag-logo.png',
      imageAlt: {
        de: 'Studie zur Safarai-Bildmarke von Anurag Maurya',
        en: 'Vector logo mark study for Safarai by Anurag Maurya'
      },
      tags: {
        de: ['Adobe Illustrator', 'Vektorkonstruktion', 'Identität'],
        en: ['Adobe Illustrator', 'Vector Geometry', 'Identity']
      }
    },
    {
      id: 'safarai-stationery',
      number: '07',
      kicker: {
        de: '07 / PRINT & GESCHÄFTSAUSSTATTUNG',
        en: '07 / PRINT & STATIONERY'
      },
      badge: {
        de: 'Eigenständige Studie · Macromedia · 2026',
        en: 'Independent Study · Macromedia · 2026'
      },
      title: {
        de: 'Safarai — Geschäftsausstattung',
        en: 'Safarai — Corporate Stationery'
      },
      subtitle: {
        de: 'Visitenkarten-Layout und Mock-up',
        en: 'Business collateral & tactile card mockups'
      },
      description: {
        de: 'Eine Studie zur Geschäftsausstattung mit dunklen, kontrastreichen Karton-Mock-ups und verfeinerter Serifentypografie.',
        en: 'A tactile corporate identity study featuring dark matte stock mockups, subtle debossing effects, and tailored typography.'
      },
      image: '/assets/anurag-stationery.png',
      imageAlt: {
        de: 'Studie zur Safarai-Geschäftsausstattung von Anurag Maurya',
        en: 'Corporate stationery mockup for Safarai by Anurag Maurya'
      },
      tags: {
        de: ['Adobe InDesign', 'Adobe Photoshop', 'Print-Layout'],
        en: ['Adobe InDesign', 'Adobe Photoshop', 'Print Layout']
      }
    }
  ],
  skills: [
    {
      number: '01',
      title: {
        de: 'Gestaltungsbereiche',
        en: 'Core Disciplines'
      },
      content: {
        de: 'Marken- und visuelle Identität · Editorial-Layouts · Typografie · Rastersysteme · Print-Grundlagen · Digitale Mock-ups',
        en: 'Brand & Visual Identity · Editorial Design · Typographic Systems · Modular Grids · Pre-press Fundamentals · Digital Interfaces'
      }
    },
    {
      number: '02',
      title: {
        de: 'Software & Werkzeuge',
        en: 'Software & Tools'
      },
      content: {
        de: 'Adobe InDesign · Adobe Illustrator · Adobe Photoshop · HTML & CSS · Figma',
        en: 'Adobe InDesign · Adobe Illustrator · Adobe Photoshop · HTML5 & CSS3 · Figma'
      }
    },
    {
      number: '03',
      title: {
        de: 'Sprachen',
        en: 'Languages'
      },
      content: {
        de: 'Deutsch — fließend · Englisch, Hindi & Punjabi — Muttersprachen',
        en: 'German — Fluent · English, Hindi & Punjabi — Native / Bilingual'
      }
    }
  ],
  experience: [
    {
      meta: {
        de: 'DESIGNAUSBILDUNG · HAMBURG',
        en: 'APPRENTICESHIP · HAMBURG'
      },
      title: {
        de: 'Print- und Digitalmediendesign',
        en: 'Print & Digital Media Design'
      },
      organization: {
        de: 'Macromedia Hamburg',
        en: 'Macromedia Hamburg'
      },
      description: {
        de: 'Ausbildung in Publikationsgestaltung, Typografie, visueller Identität und Druckvorstufe — auf klassischen Gestaltungsprinzipien aufgebaut und in digitale Medien übertragen.',
        en: 'Professional training in editorial publishing, typography, visual identity, and print production — applying classic Bauhaus/Swiss design tenets to modern screens and print.'
      }
    },
    {
      meta: {
        de: 'STUDIUM & EIGENE PROJEKTE',
        en: 'STUDIES & INDEPENDENT PROJECTS'
      },
      title: {
        de: 'Vom Konzept zum visuellen System',
        en: 'From Concept to Unified Visual Systems'
      },
      organization: {
        de: 'Identität, Editorial & Geschäftsausstattung',
        en: 'Identity, Editorial & Corporate Systems'
      },
      description: {
        de: 'Ich entwickle Vektorzeichen in Illustrator, Publikationslayouts in InDesign und digitale Mock-ups in Photoshop. Dabei untersuche ich, wie einheitliche Raster Logo, Visitenkarte und Druckseite verbinden.',
        en: 'Crafting precision vectors in Illustrator, multi-page grids in InDesign, and photorealistic mockups in Photoshop with consistent proportional cohesion.'
      }
    },
    {
      meta: {
        de: 'GESTALTUNGSGRUNDLAGEN',
        en: 'DESIGN FOUNDATIONS'
      },
      title: {
        de: 'Details, die den Unterschied machen',
        en: 'Craftsmanship & Production Rigor'
      },
      organization: {
        de: 'Schrift, Proportion & Produktion',
        en: 'Type Hierarchy, Proportion & Pre-press'
      },
      description: {
        de: 'Schriftkombinationen, optischer Ausgleich, modulare Raster, Bildaufbereitung mit 300 DPI, Beschnitt, Ränder und druckfertige PDFs.',
        en: 'Optical kerning, modular type scales, CMYK ink limits, 300 DPI image processing, bleed setup, and press-ready PDF standards.'
      }
    },
    {
      meta: {
        de: 'PORTFOLIO-PRAXIS',
        en: 'APPLIED PRACTICE'
      },
      title: {
        de: 'Eventmedien und Webkonzepte für die Gastronomie',
        en: 'Event Media & Hospitality Digital Concepts'
      },
      organization: {
        de: 'Visuelle Recherche und Webdesign',
        en: 'Visual Research & Digital Navigation'
      },
      description: {
        de: 'Visuelle Konzepttafeln für Hamburg Messe + Congress sowie Startseitenkonzepte für das Restaurant Lumiere und das Café Farol. Diese Studien verbinden Editorial-Typografie, Bildsprache und klare digitale Navigation.',
        en: 'Exhibition and media concept boards for Hamburg Messe + Congress alongside web studies for Lumiere and Café Farol, uniting editorial typography with seamless user flows.'
      }
    }
  ]
};
