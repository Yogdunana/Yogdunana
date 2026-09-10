import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from './en'
import type { Dictionary, Lang } from './types'
import { zh } from './zh'

const dicts: Record<Lang, Dictionary> = { zh, en }

type LanguageContextValue = {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLang(): Lang {
  try {
    const saved = window.localStorage.getItem('lang')
    if (saved === 'en' || saved === 'zh') return saved
  } catch {
    /* ignore */
  }
  return 'zh'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = dicts[lang].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', dicts[lang].meta.description)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: dicts[lang],
      setLang: (next: Lang) => setLangState(next),
    }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

/** Fast Refresh: hook colocated with the provider on purpose. */
export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
