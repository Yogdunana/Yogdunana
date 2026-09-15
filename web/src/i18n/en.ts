import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'MingYao Duan · 段茗尧',
    description:
      'President of the Computer Association at SMBU, Youth League assistant, and founder. GitHub stats, pull requests, and selected repositories.',
  },
  nav: {
    skip: 'Skip to stats',
    stats: 'Stats',
    pulls: 'PRs',
    repos: 'Repos',
    snake: 'Snake',
    langZh: '中',
    langEn: 'EN',
  },
  header: {
    name: 'MingYao Duan',
    altName: '段茗尧',
    tagline: 'Builder · Computer Association President · Founder',
    bio: 'At Shenzhen MSU-BIT University I lead the Computer Association and assist the Youth League, while shipping math-modeling platforms, campus systems, and AI infrastructure.',
    location: 'Shenzhen · SMBU',
    github: 'GitHub',
    email: 'Email',
  },
  badges: {
    followers: 'Followers',
    repos: 'Repos',
    views: 'Profile views',
  },
  now: {
    title: 'Now',
    rolesTitle: 'Roles',
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
      { name: 'MathorCup Mathematical Modeling', prize: 'National Third Prize' },
      { name: 'Shenzhen Cup Mathematical Modeling', prize: 'National Third Prize' },
      { name: 'GMC International Management Challenge', prize: 'National Third Prize' },
    ],
  },
  stats: {
    title: 'GitHub stats',
    subtitle: 'Commits, pull requests, languages, and streaks from the public GitHub API.',
    statsAlt: 'GitHub stats card',
    langsAlt: 'Most used languages',
    streakAlt: 'Contribution streak',
    trophyAlt: 'GitHub trophies',
    detailsAlt: 'GitHub profile details',
    reposLangAlt: 'Repositories per language',
    commitLangAlt: 'Commits per language',
    productiveAlt: 'Commits by hour of day',
  },
  stack: {
    title: 'Stack',
    alt: 'Go TypeScript JavaScript Python React Vue Next.js Docker Kubernetes PostgreSQL Linux GitHub Actions',
  },
  pulls: {
    title: 'Recent pull requests',
    subtitle: 'Latest PRs fetched live from GitHub, including work on my own repositories.',
    loading: 'Loading pull requests…',
    error: 'GitHub API is unavailable. Open GitHub for the full PR history.',
    empty: 'No public pull requests.',
    open: 'Open',
    merged: 'Merged',
    closed: 'Closed',
    all: 'View all PRs on GitHub',
  },
  repos: {
    title: 'Repositories',
    subtitle: 'Math modeling, deployment gateways, campus systems, and an online judge.',
    open: 'Open repo',
    privateNote: 'Private',
    items: [
      {
        id: 'cmamsys',
        name: 'CMAMSys',
        blurb:
          'Auto-modeling for contest mathematics — problem, model, and collaboration in one workflow. Patent pending.',
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
      {
        id: 'treasure',
        name: 'Treasure Contest',
        blurb: 'A multiplayer browser board game for club recruitment nights.',
        tags: ['TypeScript', 'React', 'Socket.io'],
        href: 'https://github.com/Yogdunana/treasure-contest',
      },
      {
        id: 'campus',
        name: 'Smart Campus',
        blurb: 'SMBU campus intelligence system, built for an AI programming contest.',
        tags: ['TypeScript'],
        href: 'https://github.com/Yogdunana/smbu-smart-campus-system',
      },
      {
        id: 'face',
        name: 'Face Access',
        blurb: 'A pluggable face-recognition platform for access, attendance, and visitors.',
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
      {
        id: 'referral',
        name: 'Yogdu Referral',
        blurb: 'An AI-powered internal referral management system.',
        tags: ['TypeScript'],
        href: 'https://github.com/Yogdunana/Yogdu-Private-Referral',
      },
    ],
  },
  snake: {
    title: 'Contribution snake',
    subtitle: 'A snake built from my contribution grid. Regenerated daily by GitHub Actions.',
    alt: 'GitHub contribution snake animation',
  },
  footer: {
    built: 'Yogdunana · Shenzhen',
  },
}
