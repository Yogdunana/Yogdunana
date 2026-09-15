import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Now } from './components/Now'
import { Pulls } from './components/Pulls'
import { Repos } from './components/Repos'
import { Snake } from './components/Snake'
import { Stats } from './components/Stats'
import { useI18n } from './i18n/LanguageContext'

export default function App() {
  const { t } = useI18n()

  return (
    <div className="page" id="top">
      <a className="skip" href="#stats">
        {t.nav.skip}
      </a>
      <Header />
      <main>
        <Now />
        <Stats />
        <Pulls />
        <Repos />
        <Snake />
      </main>
      <Footer />
    </div>
  )
}
