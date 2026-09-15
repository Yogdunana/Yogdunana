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
    skip: string
    stats: string
    pulls: string
    repos: string
    snake: string
    langZh: string
    langEn: string
  }
  header: {
    name: string
    altName: string
    tagline: string
    bio: string
    location: string
    github: string
    email: string
  }
  badges: {
    followers: string
    repos: string
    views: string
  }
  now: {
    title: string
    rolesTitle: string
    honorsTitle: string
    roles: Role[]
    honors: Honor[]
  }
  stats: {
    title: string
    subtitle: string
    statsAlt: string
    langsAlt: string
    streakAlt: string
    trophyAlt: string
    detailsAlt: string
    reposLangAlt: string
    commitLangAlt: string
    productiveAlt: string
  }
  stack: {
    title: string
    alt: string
  }
  pulls: {
    title: string
    subtitle: string
    loading: string
    error: string
    empty: string
    open: string
    merged: string
    closed: string
    all: string
  }
  repos: {
    title: string
    subtitle: string
    open: string
    privateNote: string
    items: Project[]
  }
  snake: {
    title: string
    subtitle: string
    alt: string
  }
  footer: {
    built: string
  }
}
