import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Now } from './components/Now'
import { Pulls } from './components/Pulls'
import { Repos } from './components/Repos'
import { Snake } from './components/Snake'
import { Stats } from './components/Stats'
import { Decor } from './components/Decor'
import { useI18n } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'

function Shell() {
  const { t } = useI18n()

  return (
    <div className="page" id="top">
      <a className="skip" href="#stats">
        {t.nav.skip}
      </a>
      <Decor />
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

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  )
}
