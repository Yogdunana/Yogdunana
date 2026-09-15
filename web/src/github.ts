export const USER = 'Yogdunana'
export const USER_ID = 106004584
export const SITE = 'https://yogdunana.github.io/Yogdunana/'
export const PROFILE = `https://github.com/${USER}`
export const AVATAR = `https://avatars.githubusercontent.com/u/${USER_ID}?v=4`
export const EMAIL = 'yogdunana@yogdunana.com'

const STATS = 'https://github-readme-stats.shion.dev'
const TROPHY = 'https://github-profile-trophy-orcin-eta.vercel.app'
const STREAK = 'https://streak-stats.demolab.com'
const SUMMARY = 'https://github-profile-summary-cards.vercel.app/api/cards'

export type WidgetTheme = 'dark' | 'light'

function statsTheme(theme: WidgetTheme) {
  return theme === 'dark' ? 'github_dark' : 'default'
}

export function statsCard(theme: WidgetTheme, locale: 'en' | 'cn') {
  const q = new URLSearchParams({
    username: USER,
    show_icons: 'true',
    include_all_commits: 'true',
    hide_border: 'true',
    theme: statsTheme(theme),
    locale,
    show: 'reviews,prs_merged,prs_merged_percentage',
  })
  return `${STATS}/api?${q.toString()}`
}

export function topLangsCard(theme: WidgetTheme, locale: 'en' | 'cn') {
  const q = new URLSearchParams({
    username: USER,
    layout: 'compact',
    hide_border: 'true',
    hide: 'Makefile',
    langs_count: '8',
    theme: statsTheme(theme),
    locale,
  })
  return `${STATS}/api/top-langs/?${q.toString()}`
}

export function pinCard(repo: string, theme: WidgetTheme) {
  const q = new URLSearchParams({
    username: USER,
    repo,
    hide_border: 'true',
    theme: statsTheme(theme),
  })
  return `${STATS}/api/pin/?${q.toString()}`
}

export function streakCard(theme: WidgetTheme) {
  const q = new URLSearchParams({
    user: USER,
    hide_border: 'true',
    theme: theme === 'dark' ? 'github-dark-blue' : 'github-light',
  })
  return `${STREAK}/?${q.toString()}`
}

export function trophyCard(theme: WidgetTheme) {
  const q = new URLSearchParams({
    username: USER,
    theme: theme === 'dark' ? 'onedark' : 'flat',
    column: '4',
    'margin-w': '8',
    'margin-h': '8',
  })
  return `${TROPHY}/?${q.toString()}`
}

export function summaryCard(
  kind: 'profile-details' | 'repos-per-language' | 'most-commit-language' | 'productive-time',
  theme: WidgetTheme,
) {
  const q = new URLSearchParams({
    username: USER,
    theme: theme === 'dark' ? 'github_dark' : 'github',
  })
  return `${SUMMARY}/${kind}?${q.toString()}`
}

export const SKILL_ICONS =
  'https://skillicons.dev/icons?i=go,ts,js,python,react,vue,nextjs,docker,kubernetes,postgres,linux,githubactions'

export const BADGES = {
  followers: `https://img.shields.io/github/followers/${USER}?style=flat&logo=github&label=Followers`,
  repos: `https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Fusers%2F${USER}&query=%24.public_repos&label=Repos&logo=github&style=flat`,
  views: `https://komarev.com/ghpvc/?username=${USER}&style=flat&label=Profile+views`,
}

export const PINNED_REPOS = [
  'CMAMSys',
  'deploypilot',
  'StarByte',
  'yogduoj',
] as const
