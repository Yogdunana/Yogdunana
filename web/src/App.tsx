import { Footer } from './components/Footer'
import { Grain } from './components/Grain'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { Nav } from './components/Nav'
import { Stack } from './components/Stack'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <Grain />
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Leadership />
        <Stack />
      </main>
      <Footer />
    </>
  )
}
