import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ThemeId = 'editorial' | 'brutal' | 'cinema' | 'paper'

export const THEMES: { id: ThemeId; label: string; dot: string }[] = [
  { id: 'editorial', label: 'Editorial', dot: '#ff2d6a' },
  { id: 'brutal', label: 'Brutal', dot: '#ff3358' },
  { id: 'cinema', label: 'Cinema', dot: '#a99bd6' },
  { id: 'paper', label: 'Paper', dot: '#b03a2e' },
]

type ThemeContextValue = {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readStoredTheme(): ThemeId {
  try {
    const saved = window.localStorage.getItem('theme')
    if (THEMES.some((t) => t.id === saved)) return saved as ThemeId
  } catch {
    /* ignore */
  }
  return 'editorial'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(readStoredTheme)

  useEffect(() => {
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme =
      theme === 'paper' ? 'light' : 'dark'
  }, [theme])

  const value = useMemo(
    () => ({ theme, setTheme: (next: ThemeId) => setThemeState(next) }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
