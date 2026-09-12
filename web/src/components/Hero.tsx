import { useI18n } from '../i18n/LanguageContext'
import { Magnetic } from './Magnetic'

const GITHUB = 'https://github.com/Yogdunana'
const portrait = `${import.meta.env.BASE_URL}portrait.jpg`

export function Hero() {
  const { lang, t } = useI18n()

  return (
    <section className="hero" id="top">
      <p className="side-rail" aria-hidden="true">
        Shenzhen MSU-BIT University
      </p>
      <div className="hero-grid">
        <div className={`hero-copy ${lang === 'en' ? 'is-en' : 'is-zh'}`}>
          <p className="kicker rise rise-1">{t.hero.kicker}</p>
          <h1 className="hero-name rise rise-2">{t.hero.name}</h1>
          <p className="hero-alt rise rise-3">{t.hero.altName}</p>
          <p className="hero-tag rise rise-4">{t.hero.tagline}</p>
          <p className="hero-bio rise rise-5">{t.hero.bio}</p>
          <ul className="chips rise rise-6">
            {t.hero.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
          <div className="hero-cta rise rise-7">
            <Magnetic>
              <a className="btn btn-fill" href="#work">
                {t.hero.ctaWork}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="btn btn-ghost"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.ctaGitHub}
              </a>
            </Magnetic>
          </div>
        </div>
        <figure className="hero-portrait rise rise-4">
          <div className="hero-portrait-frame">
            <img src={portrait} alt={t.hero.portraitAlt} width={460} height={460} />
          </div>
          <figcaption>{t.hero.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
