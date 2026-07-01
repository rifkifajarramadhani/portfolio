import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

const techList = [
  'TypeScript',
  'Golang',
  'PHP',
  'React',
  'Vue',
  'Node.js',
  'NestJS',
  'PostgreSQL',
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading num="01" title="About Me" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        <Reveal className="space-y-4 text-text-secondary md:col-span-2">
          <p>
            Hello! I'm Rifki, a passionate full-stack web developer based in
            Indonesia with 4 years of experience crafting innovative and
            efficient web applications. I enjoy building products end-to-end —
            from designing clean, scalable back-end architectures to shipping
            polished, responsive front-ends.
          </p>
          <p>
            My work spans e-commerce platforms, POS systems, fintech, and
            content-heavy sites, where I focus on performance, maintainability,
            and a seamless user experience. I care about clean code, thoughtful
            APIs, and collaborating closely with cross-functional teams.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid max-w-md grid-cols-2 gap-2 font-mono text-sm">
            {techList.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-accent-1">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center md:justify-end">
          <div className="group relative h-56 w-56">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded border border-accent-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative h-full w-full rounded border border-white/10 bg-secondary-bg/50 backdrop-blur-sm">
              <div className="flex h-full w-full items-center justify-center font-mono text-6xl text-accent-1/30">
                {'{ }'}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
