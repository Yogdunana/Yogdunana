import { useI18n } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Leadership() {
  const { t } = useI18n()

  return (
    <section className="section" id="now">
      <Reveal>
        <p className="kicker">{t.lead.kicker}</p>
        <h2 className="section-title">{t.lead.title}</h2>
      </Reveal>
      <div className="lead-grid">
        <Reveal>
          <div>
            <h3 className="lead-label">{t.lead.rolesTitle}</h3>
            <ul className="lead-list">
              {t.lead.roles.map((role) => (
                <li key={role.title}>
                  <span>{role.title}</span>
                  <strong>{role.org}</strong>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div>
            <h3 className="lead-label">{t.lead.honorsTitle}</h3>
            <ul className="lead-list honors">
              {t.lead.honors.map((honor) => (
                <li key={honor.name}>
                  <span>{honor.prize}</span>
                  <strong>{honor.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
