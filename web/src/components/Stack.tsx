import { useI18n } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Stack() {
  const { t } = useI18n()

  return (
    <section className="section section-tight" id="stack">
      <Reveal>
        <p className="kicker">{t.stack.kicker}</p>
        <h2 className="section-title">{t.stack.title}</h2>
        <ul className="stack-list">
          {t.stack.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
