import { useI18n } from '../i18n/LanguageContext'

export function Repos() {
  const { t } = useI18n()

  return (
    <section className="section" id="repos">
      <h2>{t.repos.title}</h2>
      <p className="lede">{t.repos.subtitle}</p>

      <ul className="repo-list">
        {t.repos.items.map((project) => {
          const inner = (
            <>
              <div className="repo-head">
                <h3>{project.name}</h3>
                {project.note ? <span className="note">{project.note}</span> : null}
              </div>
              <p>{project.blurb}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </>
          )

          return (
            <li key={project.id}>
              {project.href ? (
                <a
                  className="repo-card"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <article className="repo-card is-static">{inner}</article>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
