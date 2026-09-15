import {
  SKILL_ICONS,
  statsCard,
  summaryCard,
  topLangsCard,
  trophyCard,
} from '../github'
import { useColorScheme } from '../hooks/useColorScheme'
import { useI18n } from '../i18n/LanguageContext'

export function Stats() {
  const { lang, t } = useI18n()
  const scheme = useColorScheme()
  const locale = lang === 'zh' ? 'cn' : 'en'

  return (
    <section className="section" id="stats">
      <h2>{t.stats.title}</h2>
      <p className="lede">{t.stats.subtitle}</p>

      <div className="widget-row">
        <img
          className="widget"
          src={statsCard(scheme, locale)}
          alt={t.stats.statsAlt}
        />
        <img
          className="widget"
          src={topLangsCard(scheme, locale)}
          alt={t.stats.langsAlt}
        />
      </div>

      <h3>{t.stats.trophyAlt}</h3>
      <img
        className="widget widget-wide"
        src={trophyCard(scheme)}
        alt={t.stats.trophyAlt}
      />

      <div className="widget-row">
        <img
          className="widget"
          src={summaryCard('profile-details', scheme)}
          alt={t.stats.detailsAlt}
        />
        <img
          className="widget"
          src={summaryCard('productive-time', scheme)}
          alt={t.stats.productiveAlt}
        />
        <img
          className="widget"
          src={summaryCard('repos-per-language', scheme)}
          alt={t.stats.reposLangAlt}
        />
        <img
          className="widget"
          src={summaryCard('most-commit-language', scheme)}
          alt={t.stats.commitLangAlt}
        />
      </div>

      <h3>{t.stack.title}</h3>
      <img className="skill-icons" src={SKILL_ICONS} alt={t.stack.alt} />
    </section>
  )
}
