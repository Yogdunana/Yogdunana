import { useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import type { Project } from '../i18n/types'
import { Reveal } from './Reveal'

function ProjectRow({
  project,
  index,
  openLabel,
}: {
  project: Project
  index: string
  openLabel: string
}) {
  const inner = (
    <>
      <span className="project-index">{index}</span>
      <div className="project-body">
        <div className="project-head">
          <h3>{project.name}</h3>
          {project.note ? <span className="project-note">{project.note}</span> : null}
        </div>
        <p>{project.blurb}</p>
        <div className="project-meta">
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.href ? <span className="project-go">{openLabel} →</span> : null}
        </div>
      </div>
    </>
  )

  if (project.href) {
    return (
      <a
        className="project-row"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        {inner}
      </a>
    )
  }

  return <article className="project-row is-static">{inner}</article>
}

export function Work() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <section className="section" id="work">
      <Reveal>
        <p className="kicker">{t.work.kicker}</p>
        <h2 className="section-title">{t.work.title}</h2>
      </Reveal>
      <div className="project-list">
        {t.work.featured.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectRow
              project={project}
              index={String(i + 1).padStart(2, '0')}
              openLabel={t.work.open}
            />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <button
          type="button"
          className="more-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t.work.less : t.work.more}
          <span aria-hidden="true">{open ? ' −' : ' +'}</span>
        </button>
      </Reveal>
      {open ? (
        <div className="more-grid">
          {t.work.moreProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 50}>
              {project.href ? (
                <a
                  className="more-card"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>{project.name}</h3>
                  <p>{project.blurb}</p>
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </a>
              ) : (
                <article className="more-card">
                  <div className="project-head">
                    <h3>{project.name}</h3>
                    {project.note ? (
                      <span className="project-note">{project.note}</span>
                    ) : null}
                  </div>
                  <p>{project.blurb}</p>
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              )}
            </Reveal>
          ))}
        </div>
      ) : null}
    </section>
  )
}
