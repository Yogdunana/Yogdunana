import { PROFILE } from '../github'
import { useI18n } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {t.footer.built}
      </p>
      <a href={PROFILE} target="_blank" rel="noreferrer">
        github.com/Yogdunana
      </a>
    </footer>
  )
}
