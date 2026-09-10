export type Lang = 'zh' | 'en'

export type Project = {
  id: string
  name: string
  blurb: string
  tags: string[]
  href?: string
  note?: string
}

export type Role = {
  title: string
  org: string
}

export type Honor = {
  name: string
  prize: string
}

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    work: string
    honors: string
    langZh: string
    langEn: string
  }
  hero: {
    kicker: string
    name: string
    altName: string
    tagline: string
    bio: string
    chips: string[]
    ctaWork: string
    ctaGitHub: string
    portraitAlt: string
    caption: string
  }
  work: {
    kicker: string
    title: string
    more: string
    less: string
    open: string
    featured: Project[]
    moreProjects: Project[]
  }
  lead: {
    kicker: string
    title: string
    rolesTitle: string
    honorsTitle: string
    roles: Role[]
    honors: Honor[]
  }
  stack: {
    kicker: string
    title: string
    items: string[]
  }
  footer: {
    built: string
    github: string
  }
}
