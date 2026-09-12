import { useI18n } from '../i18n/LanguageContext'

const GITHUB = 'https://github.com/Yogdunana'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} 段茗尧 / MingYao Duan · {t.footer.built}
      </p>
      <a href={GITHUB} target="_blank" rel="noreferrer">
        {t.footer.github}
      </a>
    </footer>
  )
}
