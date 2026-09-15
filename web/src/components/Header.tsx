import { AVATAR, BADGES, EMAIL, PROFILE } from '../github'
import { useI18n } from '../i18n/LanguageContext'

export function Header() {
  const { lang, t, setLang } = useI18n()

  return (
    <header className="site-header">
      <div className="header-top">
        <a className="brand" href="#top">
          <img className="avatar" src={AVATAR} alt="" width={48} height={48} />
          <span>
            <strong>{t.header.name}</strong>
            <em>{t.header.altName}</em>
          </span>
        </a>
        <nav className="header-nav" aria-label="primary">
          <a href="#stats">{t.nav.stats}</a>
          <a href="#pulls">{t.nav.pulls}</a>
          <a href="#repos">{t.nav.repos}</a>
          <a href="#snake">{t.nav.snake}</a>
          <div className="lang" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'zh' ? 'is-on' : ''}
              onClick={() => setLang('zh')}
            >
              {t.nav.langZh}
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-on' : ''}
              onClick={() => setLang('en')}
            >
              {t.nav.langEn}
            </button>
          </div>
        </nav>
      </div>

      <p className="tagline">{t.header.tagline}</p>
      <p className="bio">{t.header.bio}</p>
      <p className="meta-line">{t.header.location}</p>

      <p className="links">
        <a href={PROFILE} target="_blank" rel="noreferrer">
          {t.header.github}
        </a>
        <a href={`mailto:${EMAIL}`}>{t.header.email}</a>
      </p>

      <p className="badge-row">
        <a href={PROFILE} target="_blank" rel="noreferrer">
          <img src={BADGES.followers} alt={t.badges.followers} />
        </a>
        <a href={`${PROFILE}?tab=repositories`} target="_blank" rel="noreferrer">
          <img src={BADGES.repos} alt={t.badges.repos} />
        </a>
        <img src={BADGES.views} alt={t.badges.views} />
      </p>
    </header>
  )
}
