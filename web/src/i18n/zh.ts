import type { Dictionary } from './types'

export const zh: Dictionary = {
  meta: {
    title: '段茗尧 · MingYao Duan',
    description:
      '深圳北理莫斯科大学计算机协会会长、校团委助理、Founder。建造数学建模、校园系统与 AI 基础设施。',
  },
  nav: {
    work: '作品',
    honors: '履历',
    langZh: '中',
    langEn: 'EN',
  },
  hero: {
    kicker: '深圳 · 深圳北理莫斯科大学',
    name: '段茗尧',
    altName: 'MingYao Duan',
    tagline: '建造者 · 计算机协会会长 · Founder',
    bio: '在深北莫主持计算机协会、协助校团委，同时把数学建模、校园系统和 AI 基础设施做成能上线的产品。',
    chips: ['计算机协会会长', '校团委助理', 'Founder'],
    ctaWork: '查看作品',
    ctaGitHub: 'GitHub',
    portraitAlt: '段茗尧',
    caption: 'Shenzhen, China',
  },
  work: {
    kicker: '01 — 作品',
    title: '精选建造',
    more: '其余建造',
    less: '收起',
    open: 'GitHub',
    featured: [
      {
        id: 'cmamsys',
        name: 'CMAMSys',
        blurb:
          '竞赛数学自动建模系统。把赛题、建模与协作收进同一条工作流，专利申请中。',
        tags: ['TypeScript', 'Next.js', 'Python', 'PostgreSQL'],
        href: 'https://github.com/Yogdunana/CMAMSys',
        note: 'Patent Pending',
      },
      {
        id: 'deploypilot',
        name: 'DeployPilot',
        blurb:
          'AI 原生部署网关。让沙箱里的 AI IDE 通过 MCP 连上真实的基础设施。',
        tags: ['Go', 'MCP', 'Docker', 'Kubernetes', 'Vue'],
        href: 'https://github.com/Yogdunana/deploypilot',
      },
      {
        id: 'starbyte',
        name: 'StarByte',
        blurb: '公司与计算机协会共用的内部综合管理系统。',
        tags: ['Go'],
        href: 'https://github.com/Yogdunana/StarByte',
      },
      {
        id: 'yogduoj',
        name: 'YogduOJ',
        blurb: '自研在线评测，覆盖程序设计竞赛、算法赛与 CTF 练习。',
        tags: ['Go'],
        href: 'https://github.com/Yogdunana/yogduoj',
      },
    ],
    moreProjects: [
      {
        id: 'campus',
        name: '智慧校园',
        blurb: '深北莫校园综合智慧管理系统，校园智慧助手 AI 实战编程大赛作品。',
        tags: ['TypeScript'],
        href: 'https://github.com/Yogdunana/smbu-smart-campus-system',
      },
      {
        id: 'face',
        name: '人脸门禁',
        blurb: '可插拔多场景人脸识别：门禁、考勤、访客。',
        tags: ['Python'],
        href: 'https://github.com/Yogdunana/face-access-control',
      },
      {
        id: 'yogducap',
        name: 'YogduCAP',
        blurb: '悠渡核验 — AI 驱动的私有化人机防刷验证系统。',
        tags: ['Python'],
        note: 'Private',
      },
      {
        id: 'calorie',
        name: '卡路里大作战',
        blurb: '校园健身活动管理系统。',
        tags: ['TypeScript', 'React', 'MySQL'],
        href: 'https://github.com/Yogdunana/calorie-battle',
      },
      {
        id: 'defense',
        name: '国防知识竞赛',
        blurb: '2025 级本科生军训国防知识竞赛系统。',
        tags: ['HTML'],
        href: 'https://github.com/Yogdunana/national-defense-knowledge-competition',
      },
    ],
  },
  lead: {
    kicker: '02 — 履历',
    title: '职务与荣誉',
    rolesTitle: '现在',
    honorsTitle: '竞赛',
    roles: [
      {
        title: '会长',
        org: '深圳北理莫斯科大学计算机协会',
      },
      {
        title: '助理',
        org: '深圳北理莫斯科大学校团委',
      },
      {
        title: 'Founder',
        org: 'CMAMSys · DeployPilot · StarByte · YogduOJ',
      },
    ],
    honors: [
      {
        name: 'MathorCup 数学建模',
        prize: '国家三等奖',
      },
      {
        name: '深圳杯数学建模',
        prize: '国家三等奖',
      },
      {
        name: 'GMC 国际企业管理挑战赛',
        prize: '国家三等奖',
      },
    ],
  },
  stack: {
    kicker: '03 — 工具',
    title: '常用技术',
    items: ['Go', 'TypeScript', 'Python', 'React', 'Vue', 'Docker', 'PostgreSQL'],
  },
  footer: {
    built: '建于深圳',
    github: 'GitHub',
  },
}
