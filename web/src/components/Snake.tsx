import { useI18n } from '../i18n/LanguageContext'
import { useColorScheme } from '../hooks/useColorScheme'

const light = `${import.meta.env.BASE_URL}github-contribution-grid-snake.svg`
const dark = `${import.meta.env.BASE_URL}github-contribution-grid-snake-dark.svg`

export function Snake() {
  const { t } = useI18n()
  const scheme = useColorScheme()

  return (
    <section className="section" id="snake">
      <h2>{t.snake.title}</h2>
      <p className="lede">{t.snake.subtitle}</p>
      <img
        className="snake"
        src={scheme === 'dark' ? dark : light}
        alt={t.snake.alt}
        width={758}
        height={130}
      />
    </section>
  )
}
