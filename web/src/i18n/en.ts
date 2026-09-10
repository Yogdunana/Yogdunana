import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'MingYao Duan · 段茗尧',
    description:
      'President of the Computer Association at SMBU, Youth League assistant, and founder. Building math-modeling platforms, campus systems, and AI infrastructure.',
  },
  nav: {
    work: 'Work',
    honors: 'Now',
    langZh: '中',
    langEn: 'EN',
  },
  hero: {
    kicker: 'Shenzhen · SMBU',
    name: 'MingYao Duan',
    altName: '段茗尧',
    tagline: 'Builder · Computer Association President · Founder',
    bio: 'At Shenzhen MSU-BIT University I lead the Computer Association and assist the Youth League, while shipping math-modeling platforms, campus systems, and AI infrastructure that actually run.',
    chips: ['CS Association President', 'Youth League Assistant', 'Founder'],
    ctaWork: 'View work',
    ctaGitHub: 'GitHub',
    portraitAlt: 'MingYao Duan',
    caption: 'Shenzhen, China',
  },
  work: {
    kicker: '01 — Work',
    title: 'Selected builds',
    more: 'More work',
    less: 'Show less',
    open: 'GitHub',
    featured: [
      {
        id: 'cmamsys',
        name: 'CMAMSys',
        blurb:
          'An auto-modeling system for contest mathematics — problem, model, and collaboration in one workflow. Patent pending.',
        tags: ['TypeScript', 'Next.js', 'Python', 'PostgreSQL'],
        href: 'https://github.com/Yogdunana/CMAMSys',
        note: 'Patent Pending',
      },
      {
        id: 'deploypilot',
        name: 'DeployPilot',
        blurb:
          'An AI-native deployment gateway that bridges sandboxed AI IDEs to real infrastructure over MCP.',
        tags: ['Go', 'MCP', 'Docker', 'Kubernetes', 'Vue'],
        href: 'https://github.com/Yogdunana/deploypilot',
      },
      {
        id: 'starbyte',
        name: 'StarByte',
        blurb:
          'An internal operating system shared by the company and the Computer Association.',
        tags: ['Go'],
        href: 'https://github.com/Yogdunana/StarByte',
      },
      {
        id: 'yogduoj',
        name: 'YogduOJ',
        blurb:
          'A self-built online judge for programming contests, algorithms, and CTF practice.',
        tags: ['Go'],
        href: 'https://github.com/Yogdunana/yogduoj',
      },
    ],
    moreProjects: [
      {
        id: 'campus',
        name: 'Smart Campus',
        blurb:
          'SMBU campus intelligence system, built for an AI programming contest.',
        tags: ['TypeScript'],
        href: 'https://github.com/Yogdunana/smbu-smart-campus-system',
      },
      {
        id: 'face',
        name: 'Face Access',
        blurb:
          'A pluggable face-recognition platform for access, attendance, and visitors.',
        tags: ['Python'],
        href: 'https://github.com/Yogdunana/face-access-control',
      },
      {
        id: 'yogducap',
        name: 'YogduCAP',
        blurb: 'A private, AI-driven human-verification system against bots.',
        tags: ['Python'],
        note: 'Private',
      },
      {
        id: 'calorie',
        name: 'Calorie Battle',
        blurb: 'Campus fitness event management.',
        tags: ['TypeScript', 'React', 'MySQL'],
        href: 'https://github.com/Yogdunana/calorie-battle',
      },
      {
        id: 'defense',
        name: 'Defense Quiz',
        blurb:
          'National-defense knowledge competition system for the 2025 military training cohort.',
        tags: ['HTML'],
        href: 'https://github.com/Yogdunana/national-defense-knowledge-competition',
      },
    ],
  },
  lead: {
    kicker: '02 — Now',
    title: 'Roles & honors',
    rolesTitle: 'Office',
    honorsTitle: 'Contests',
    roles: [
      {
        title: 'President',
        org: 'Computer Association, Shenzhen MSU-BIT University',
      },
      {
        title: 'Assistant',
        org: 'Youth League Committee, Shenzhen MSU-BIT University',
      },
      {
        title: 'Founder',
        org: 'CMAMSys · DeployPilot · StarByte · YogduOJ',
      },
    ],
    honors: [
      {
        name: 'MathorCup Mathematical Modeling',
        prize: 'National Third Prize',
      },
      {
        name: 'Shenzhen Cup Mathematical Modeling',
        prize: 'National Third Prize',
      },
      {
        name: 'GMC International Management Challenge',
        prize: 'National Third Prize',
      },
    ],
  },
  stack: {
    kicker: '03 — Stack',
    title: 'Tools in rotation',
    items: ['Go', 'TypeScript', 'Python', 'React', 'Vue', 'Docker', 'PostgreSQL'],
  },
  footer: {
    built: 'Built in Shenzhen',
    github: 'GitHub',
  },
}
