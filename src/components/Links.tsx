import {
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links = [
    { icon: SiGmail, href: 'mailto:rifkid56@gmail.com' },
    { icon: SiGithub, href: 'https://github.com/rifkifajarramadhani' },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/rifkifajarramadhani/',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        const Icon = link.icon
        return (
          <a key={id} target="_blank" rel="noopener noreferrer" href={link.href}>
            <Icon title="" />
          </a>
        )
      })}
    </div>
  )
}
