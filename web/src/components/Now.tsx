import { useI18n } from '../i18n/LanguageContext'

export function Now() {
  const { t } = useI18n()

  return (
    <section className="section" id="now">
      <h2>{t.now.title}</h2>
      <div className="now-grid">
        <div>
          <h3>{t.now.rolesTitle}</h3>
          <ul className="plain-list">
            {t.now.roles.map((role) => (
              <li key={role.title}>
                <span>{role.title}</span>
                {role.org}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t.now.honorsTitle}</h3>
          <ul className="plain-list">
            {t.now.honors.map((honor) => (
              <li key={honor.name}>
                <span>{honor.prize}</span>
                {honor.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
