import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { name } from '@/lib/site'

export default function Portfolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center font-mono text-xs text-text-secondary/60">
        Designed &amp; Built by {name} · {new Date().getFullYear()}
      </footer>
    </>
  )
}
