import { pinCard, PINNED_REPOS } from '../github'
import { useColorScheme } from '../hooks/useColorScheme'
import { useI18n } from '../i18n/LanguageContext'

export function Repos() {
  const { t } = useI18n()
  const scheme = useColorScheme()

  return (
    <section className="section" id="repos">
      <h2>{t.repos.title}</h2>
      <p className="lede">{t.repos.subtitle}</p>

      <div className="widget-row pins">
        {PINNED_REPOS.map((repo) => (
          <a
            key={repo}
            href={`https://github.com/Yogdunana/${repo}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="widget"
              src={pinCard(repo, scheme)}
              alt={repo}
              height={150}
            />
          </a>
        ))}
      </div>

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
