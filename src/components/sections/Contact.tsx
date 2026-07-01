import { SiGithub, SiGmail, SiLinkedin } from '@icons-pack/react-simple-icons'
import Reveal from '@/components/Reveal'
import { socialLinks } from '@/lib/site'

const socials = [
  { icon: SiGmail, href: socialLinks.email, label: 'Email' },
  { icon: SiGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: SiLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-32 text-center">
      <Reveal>
        <p className="mb-4 font-mono text-accent-1">05. What's Next?</p>
        <h2 className="text-4xl font-bold text-text-primary sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-text-secondary">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question, a project in mind, or just want to say hi, my
          inbox is always open — I'll do my best to get back to you!
        </p>
        <a
          href={socialLinks.email}
          className="mt-10 inline-block rounded border border-accent-1 px-8 py-4 font-mono text-accent-1 transition-colors hover:bg-accent-1/10"
        >
          Say Hello
        </a>

        <div className="mt-12 flex items-center justify-center gap-8">
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
      </Reveal>
    </section>
  )
}
