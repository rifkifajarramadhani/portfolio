import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub, SiGmail, SiLinkedin } from '@icons-pack/react-simple-icons'
import { name, socialLinks } from '@/lib/site'

const taglines = ['build things for the web.', 'build digital experiences.']

const socials = [
  { icon: SiGmail, href: socialLinks.email, label: 'Email' },
  { icon: SiGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: SiLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
]

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % taglines.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        <p className="mb-5 font-mono text-accent-1">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-text-primary sm:text-6xl lg:text-7xl">
          {name}.
        </h1>
        <h2 className="mt-3 flex flex-wrap items-baseline gap-x-3 text-3xl font-bold text-text-secondary sm:text-5xl lg:text-6xl">
          <span>I</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              className="text-accent-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {taglines[i]}
            </motion.span>
          </AnimatePresence>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
          I'm a full-stack software engineer based in Indonesia with 4 years of
          experience crafting innovative and efficient web applications with
          TypeScript, Golang, PHP, React, Vue, and Tailwind CSS.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#work"
            className="rounded border border-accent-1 px-6 py-3 font-mono text-accent-1 transition-colors hover:bg-accent-1/10"
          >
            Check out my work
          </a>
          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-secondary transition-colors hover:text-accent-1"
              >
                <Icon className="h-6 w-6" title="" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary/50 transition-colors hover:text-accent-1"
        aria-label="Scroll to about"
      >
        <svg className="h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
