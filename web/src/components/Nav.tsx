import { useI18n } from '../i18n/LanguageContext'

export function Nav() {
  const { lang, t, setLang } = useI18n()

  return (
    <header className="nav">
      <a className="nav-mark" href="#top">
        <span className="nav-mark-zh">段</span>
        <span className="nav-mark-dot" />
      </a>
      <nav className="nav-links" aria-label="primary">
        <a href="#work">{t.nav.work}</a>
        <a href="#now">{t.nav.honors}</a>
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
    </header>
  )
}
