import { useEffect, useState } from 'react'
import { USER } from '../github'
import { useI18n } from '../i18n/LanguageContext'

type Pull = {
  title: string
  html_url: string
  updated_at: string
  repository: string
  status: 'open' | 'merged' | 'closed'
}

type SearchItem = {
  title: string
  html_url: string
  state: 'open' | 'closed'
  updated_at: string
  repository_url: string
  pull_request?: { merged_at?: string | null }
}

function repoName(url: string) {
  const parts = url.split('/')
  return `${parts.at(-2)}/${parts.at(-1)}`
}

export function Pulls() {
  const { lang, t } = useI18n()
  const [pulls, setPulls] = useState<Pull[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const ac = new AbortController()

    const url =
      `https://api.github.com/search/issues?q=${encodeURIComponent(`author:${USER} type:pr`)}` +
      `&sort=updated&order=desc&per_page=10`

    fetch(url, {
      signal: ac.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(String(res.status))
        const data = (await res.json()) as { items?: SearchItem[] }
        const items = (data.items ?? []).map((item) => {
          const merged = Boolean(item.pull_request?.merged_at)
          const status: Pull['status'] = item.state === 'open' ? 'open' : merged ? 'merged' : 'closed'
          return {
            title: item.title,
            html_url: item.html_url,
            updated_at: item.updated_at,
            repository: repoName(item.repository_url),
            status,
          }
        })
        setPulls(items)
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError(true)
      })

    return () => ac.abort()
  }, [])

  const locale = lang === 'zh' ? 'zh-CN' : 'en-US'

  return (
    <section className="section" id="pulls">
      <h2>{t.pulls.title}</h2>
      <p className="lede">{t.pulls.subtitle}</p>

      {error ? (
        <p className="status">
          {t.pulls.error}{' '}
          <a
            href={`https://github.com/search?q=author%3A${USER}+type%3Apr&type=pullrequests`}
            target="_blank"
            rel="noreferrer"
          >
            {t.pulls.all}
          </a>
        </p>
      ) : pulls === null ? (
        <p className="status">{t.pulls.loading}</p>
      ) : pulls.length === 0 ? (
        <p className="status">{t.pulls.empty}</p>
      ) : (
        <ul className="pr-list">
          {pulls.map((pull) => (
            <li key={pull.html_url}>
              <a href={pull.html_url} target="_blank" rel="noreferrer">
                <span className={`pr-state is-${pull.status}`}>
                  {t.pulls[pull.status]}
                </span>
                <strong>{pull.title}</strong>
                <span className="pr-meta">
                  {pull.repository} ·{' '}
                  {new Date(pull.updated_at).toLocaleDateString(locale)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <p className="more-link">
        <a
          href={`https://github.com/search?q=author%3A${USER}+type%3Apr&type=pullrequests`}
          target="_blank"
          rel="noreferrer"
        >
          {t.pulls.all} →
        </a>
      </p>
    </section>
  )
}
