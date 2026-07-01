import { useEffect, useState } from 'react'
import { withBase } from '@/lib/with-base'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#skills', label: 'Skills', num: '02' },
  { href: '#experience', label: 'Experience', num: '03' },
  { href: '#work', label: 'Work', num: '04' },
  { href: '#contact', label: 'Contact', num: '05' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/5 bg-secondary-bg/20 shadow-lg shadow-black/5 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent backdrop-blur-none',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-xl font-bold text-accent-1"
          aria-label="Home"
        >
          {'<RF />'}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group text-sm font-medium text-text-primary transition-colors hover:text-accent-1"
              >
                <span className="mr-1 font-mono text-xs text-accent-1">
                  {link.num}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={withBase('resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-accent-1 px-4 py-2 font-mono text-sm text-accent-1 transition-colors hover:bg-accent-1/10"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="text-accent-1 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/5 bg-secondary-bg/95 px-6 py-4 backdrop-blur-lg md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-text-primary transition-colors hover:text-accent-1"
              >
                <span className="mr-2 font-mono text-xs text-accent-1">
                  {link.num}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={withBase('resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded border border-accent-1 px-4 py-2 font-mono text-sm text-accent-1"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
